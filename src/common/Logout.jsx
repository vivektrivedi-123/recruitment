import React from "react";
import { Redirect } from "react-router-dom";
const Logout = () => {
  localStorage.removeItem('token')
  return <Redirect to="/login"></Redirect>;
};

export default Logout;