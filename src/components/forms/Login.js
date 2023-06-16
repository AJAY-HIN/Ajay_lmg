import { useState, useEffect, useRef } from "react";
import "./forms.css";
import Form from "react-bootstrap/Form";
import { Card } from "reactstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [toggleVisibility, setToggleVisibilityl] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Email: ${input.email}`);
    console.log(`Password: ${input.password}`);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "30rem" }}>
        <Form className="" onSubmit={handleSubmit}>
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

          <Form.Group className="col-10 d-flex">
            <Form.Label htmlFor="email" className="col-4">
              Password :
            </Form.Label>
            <br />
            <Form.Control
              id="password"
              name="password"
              type={toggleVisibility ? "text" : "password"}
              value={input.password}
              onChange={handleChange}
            />
          </Form.Group>

          <span
            className="show-or-hide"
            onClick={() => setToggleVisibilityl(!toggleVisibility)}
          >
            {toggleVisibility ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <>
                <FontAwesomeIcon icon={faEye} />;
              </>
            )}
          </span>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <br />
          <br />
        </Form>
      </Card>
    </div>
  );
}

//  <>
//    <form className="login-form" onSubmit={handleSubmit}>
//      <label htmlFor="email" className="form-item">
//        Email
//      </label>
//      <br />
//      <input
//        id="email"
//        type="email"
//        className="email-input"
//        onChange={handleEmailChange}
//        // onFocus={handleFocus}
//      />
//      <br />
//      {isEmailValid && email.length ? (
//        <p className="valid-email">Email is valid</p>
//      ) : email.length ? (
//        <p className="invalid-email">Invalid email</p>
//      ) : (
//        ""
//      )}
//      <br />
//      <label htmlFor="email" className="form-item">
//        Password&nbsp;<span className="password-info">?</span>
//        <div className="hover-popup">
//          <span>Password must have -</span>
//          <br />
//          <span>Atleast 8 characters</span>
//          <br />
//          <span>Atleast 1 digit</span>
//          <br />
//          <span>Atleast 1 uppercase letter</span>
//          <br />
//          <span>Atleast 1 lowercase letter</span>
//          <br />
//          <span>Atleast 1 special character e.g. ! @ # ?</span>
//        </div>
//      </label>
//      <br />
//      <input
//        id="password"
//        type={showPassword ? "text" : "password"}
//        className="password-input"
//        onChange={handlePasswordChange}
//      />
//      <span className="show-or-hide" onClick={toggleVisibility}>
//        {showPassword ? <>hide</> : <>show</>}
//      </span>
//      <br />
//      <p className={`password-strength ${passwordStrength}`}>
//        {passwordStrength}
//      </p>
//      <br />
//      <button className="submit-button form-item" type="submit">
//        Submit
//      </button>
//      <br />
//      <br />
//    </form>
//  </>;
