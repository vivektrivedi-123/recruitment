import React, { useState } from "react";
import axios from "../common/axios";
import { useHistory } from "react-router-dom";
import Joi from "joi-browser";
function Login() {
  let history = useHistory();
  const [alert, setAlert] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
    company: "60c7578bdc0dbb74defe7b72",
  });
  const [errors, setError] = useState({
    email: "",
    password: "",
  });

  const schema = {
    email: Joi.string().required().email({ minDomainAtoms: 2 }).label("Email"),
    password: Joi.string().required().min(8).label("Password"),
    company: Joi.string(),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const validate = () => {
    let option = { abortEarly: false };
    const result = Joi.validate(state, schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    console.log(result);
    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let error = validate();
    if (error) {
      setError(error);
    } else {
      setError("");
    }
    if (!error) {
      console.log(state);
      axios
        .post("userLogin", state)
        .then((res) => {
          console.log(res.data);
          console.log(res.data !== "User does not exists");
          if (res.data !== "User does not exists") {
            localStorage.setItem("login", res.data);
            history.push("/");
          } else {
            setAlert("failed");
          }
        })
        .catch((error) => {
          console.log(error);
          setAlert("failed");
          setState({ ...state, ["email"]: "", ["password"]: "" });
        });

      //  setState({email:"",password:""});
    }
  };

  return (
    <div className="wrapper m-5">
      <h1 style={{ textAlign: "center" }}>User Login</h1>
      {alert === "failed" ? (
        <div className="alert alert-danger" role="alert">
          Username or password is incorrect
        </div>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group m-3">
          <label forhtml="email">Email</label>
          <input
            // autoFocus
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            className="form-control"
          />

          {errors.email ? <p className="text-danger">{errors.email}</p> : ""}
        </div>
        <div className="form-group m-3 ">
          <label forhtml="password">Password</label>
          <input
            //autoFocus
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={state.password}
            onChange={handleChange}
            className="form-control"
          />

          {errors.password ? (
            <p className="text-danger">{errors.password}</p>
          ) : (
            ""
          )}
        </div>

        <div className="form-group m-3">
          <input
            type="submit"
            value="Login"
            // disabled="true"
            className="btn btn-success "
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
