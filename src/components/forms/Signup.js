import { useState, useEffect, useRef } from "react";
import "./forms.css";
import Form from "react-bootstrap/Form";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

export default function Signup() {
  const [passError, setPassError] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [passwordStrength, setStrength] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  function emailValidator(email) {
    const validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validEmailRegex)) {
      return true;
    } else {
      return false;
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  function handleSubmit(e) {
    console.log("===");
    e.preventDefault();

    if (
      !passError &&
      !isValidEmail &&
      input.name !== "" &&
      input.email !== "" &&
      input.password !== ""
    ) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ email: input.email, password: input.password })
      );
    }

    if (input.name === "" && input.email === "" && input.password === "") {
      alert("Please fill all feilds");
    }
  }

  useEffect(() => {
    if (!emailValidator(input.email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
    if (input.password.length < 8) {
      setPassError(true);
    } else {
      setPassError(false);
    }
  }, [handleChange]);

  console.log(input, "input");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "30rem" }}>
        <Form className="" onSubmit={handleSubmit}>
          <Form.Group className="d-flex col-10">
            <Form.Label htmlFor="name" className="col-4">
              Name :
            </Form.Label>
            <Form.Control
              id="name"
              name="name"
              type="text"
              value={input.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </Form.Group>
          <br />
          <Form.Group className="d-flex col-10">
            <Form.Label className="col-4">Email :</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={input.email}
              className=""
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </Form.Group>
          <br />
          {isValidEmail && input.email !== "" && (
            <p className="invalid-email">Invalid email</p>
          )}
          <Form.Group className="col-10 d-flex">
            <Form.Label htmlFor="email" className="col-4">
              Password :
            </Form.Label>
            <br />
            <Form.Control
              id="password"
              name="password"
              type={"password"}
              value={input.password}
              onChange={handleChange}
            />
          </Form.Group>
          {passError && input.password !== "" && (
            <p className="invalid-email">
              Password should be minnimu 8 character
            </p>
          )}
          {/* <span className="show-or-hide" onClick={toggleVisibility}>
          {showPassword ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <>
              <FontAwesomeIcon icon={faEye} />;
            </>
          )}
        </span> */}
          <br />
          <p className={`password-strength ${passwordStrength}`}>
            {passwordStrength}
          </p>
          <br />
          <Button variant="primary" type="submit">
            Register
          </Button>
          <br />
          <br />
        </Form>
      </Card>
    </div>
  );
}
