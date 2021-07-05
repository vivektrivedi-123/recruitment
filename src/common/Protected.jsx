import React,{useEffect} from "react";
import { Redirect, Route } from "react-router-dom";
const Protected = ({ component: Cmp, ...rest }) => {
  const token=localStorage.getItem("login")

 
  return (<Route
    {...rest}
    render={(props) =>
     token && token!=='Token Expired'?(
        <Cmp {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
    )  }

export default Protected;
