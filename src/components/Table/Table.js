import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
export const columns = [
  {
    id: 1,
    label: "Title",
    key: "title",
  },
  {
    id: 2,
    label: "Price",
    key: "price",
  },
  {
    id: 3,
    label: "Category",
    key: "category",
  },

  {
    id: 4,
    label: "Description",
    key: "description",
  },
  {
    id: 5,
    label: "Action",
    key: "action",
  },
];

export const Table = () => {
  const [data, setData] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [show, setShow] = useState(false);
  const [viewableItem, setViewableItem] = useState(null);
  const [updateVal, setUpdateVal] = useState("");

  const handleClose = () => {
    setShow(false);
    setViewableItem(null);
    setUpdateVal("");
  };

  const handleUpdate = () => {
    console.log(updateVal);
    setUpdateVal("");
    setShow(false);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getValue = (val, column) => {
    return val;
  };

  console.log(sortBy, data);

  const hanldeView = (ele) => {
    console.log(ele, "ele");
    setShow(true);
    setViewableItem(ele);
  };
  const updateModal = () => {
    setShow(true);
    setViewableItem("update");
  };

  const hanldeUpdate = (ele) => {
    console.log(updateVal, "hanldeUpdate");
    setViewableItem("");
  };
  const hanldeDelete = (ele) => {
    console.log(ele, "ele");
    let newData = data.filter((item) => item.id !== ele.id);
    setData(newData);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {viewableItem === "update" ? (
            <>
              <input
                value={updateVal}
                onChange={(e) => setUpdateVal(e.target.value)}
              />
            </>
          ) : (
            <>
              <p>Title : {viewableItem?.title}</p>
              <p>Price : {viewableItem?.price}</p>
              <p>Category : {viewableItem?.category}</p>
              <p>description : {viewableItem?.description}</p>
              <img src={viewableItem?.image} width="100px" />
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {viewableItem === "update" && (
            <Button variant="primary" onClick={hanldeUpdate}>
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      <label>Search:</label>
      <input
        value={searchItems}
        onChange={(e) => setSearchItems(e.target.value)}
      />

      <label>SortBy:</label>

      <select onChange={(e) => setSortBy(e.target.value)}>
        <option>Men's Clothing</option>
        <option>Women's Clothing</option>
        <option>Electronics</option>
        <option>Jewellry</option>
      </select>
      <div>
        <div>
          <div>
            <div>
              <table>
                <thead>
                  <tr>
                    {columns.map((column) => {
                      const { align, key, label, id, isSortable } = column;
                      return (
                        <th
                          id={id}
                          key={id}
                          style={{
                            cursor: "pointer",
                            fontWeight: "700",
                            background: "#A4BC92",
                          }}
                          scope="col"
                        >
                          {label}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {Object.values(data || {}).length > 0 &&
                    Object.values(data || {})
                      .filter((ele) =>
                        ele.title
                          .toLocaleLowerCase()
                          .includes(searchItems.toLocaleLowerCase())
                      )
                      .filter((ele) =>
                        sortBy
                          ? ele.category.toLocaleLowerCase() ===
                            sortBy.toLocaleLowerCase()
                          : ele
                      )

                      .map((item, index) => {
                        return (
                          <>
                            <tr key={item.id}>
                              {columns.map((column) => {
                                const { key, align } = column;
                                if (key === "action") {
                                  return (
                                    <td style={{ display: "flex" }}>
                                      <Span onClick={() => hanldeView(item)}>
                                        <FontAwesomeIcon icon={faEye} />
                                      </Span>
                                      <Span onClick={updateModal}>
                                        <FontAwesomeIcon icon={faEdit} />
                                      </Span>
                                      <Span onClick={() => hanldeDelete(item)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                      </Span>
                                    </td>
                                  );
                                } else {
                                  return (
                                    <td
                                      key={key}
                                      id={key}
                                      style={{ textTransform: "capitalize" }}
                                    >
                                      {getValue(item?.[key], column)}
                                    </td>
                                  );
                                }
                              })}
                            </tr>
                          </>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export const Span = styled.span`
  padding: 2px;
  margin: 2px;
  cursor: pointer;
`;
