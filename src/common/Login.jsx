import React,{useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios';
import {globalVar} from '../user/components/config'
export default function Login() {
  let history=useHistory()
  const[show,setShow]=useState(false)
  const[show1,setShow1]=useState(false)
  const[state,setState]=useState({
        
    email:"",
    password:"",
    //rememberPassword: false,
})

const[rememberPassword,setRememberPassword]=useState(false)

const[errors,setError]=useState({
    email:"",
    password:""
})

const handleChange=(e)=>{
  
    const{id,value}=e.target;
   // console.log(value)
    setState(prevState=>({...prevState,[id]:value}))
}

function handleRememberMeChange(e) {
  //console.log(e.target.value)
  
  setRememberPassword(!rememberPassword )
  //console.log(rememberPassword)
}


useEffect(()=>{
 // console.log(rememberPassword)
  if (localStorage.getItem('checkbox') && localStorage.getItem('username') !== "") {
    setState({
        email: localStorage.getItem('username'),
        password: localStorage.getItem('password')
    })
    setRememberPassword(localStorage.getItem('checkbox'))
}
},[]) 

const handleSubmit=(e)=>{
  e.preventDefault();
  const { email, password } = state
  if (rememberPassword && email !== "") {
       localStorage.setItem('username',email);
      localStorage.setItem('password',password);
      localStorage.setItem('checkbox',rememberPassword) 
  }
  else
  {
    localStorage.setItem('username','');
    localStorage.setItem('password','');
    localStorage.setItem('checkbox','') 
  } 
  //console.log(state.email)
 

  if(state.email==='' && state.password==='')
  {
    setShow(true)
    setShow1(true)
  }
 else if(state.email==='')
  {
    setShow1(false)
    setShow(true)
  }
  else if(state.password==="")
  {
    setShow(false)
    setShow1(true)
  }
  else{
    axios
    .post(`${globalVar.REACT_APP_base_url}/api/login`, state)
    .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("roleId", res.data.data.role_id);
       // localStorage.setItem("id", res.data.id);
        localStorage.setItem("name", res.data.data.name); 
        let image=res.data.data.avatar
        localStorage.setItem("avatar",  image)
        //console.log(localStorage.getItem("login"))
      history.push("/");
      
    })
  
    .catch((error) => {
      console.log(error);
    })
  }
}
    

    return (
        <>
 <div className="login-bg">
  <div className="d-flex align-items-center justify-content-center h-100vh-md">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-12">
          <div className="login-section mx-auto">
            <div className="text-center">
              <img src="../assets/images/login-logo.png" className="img-fluid mb-4" alt="login-logo" />
            </div>
            <div className="bg-white py-5 px-4 rounded shadow">
              <h4 className="font-poppins mb-0 px-3">Login to your <b>4Sight</b></h4>
              <p className="mb-3 mt-2 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
              <form className="login-form"  onSubmit={handleSubmit}>
                <div className="form-group px-3">
                  <input   type="text"
                  autoFocus="on"
                id="email"
                placeholder="Email"
                value={state.email}
               onChange={handleChange} 
              className={show?"form-control border border-danger rounded  py-3" :"form-control rounded mb-3 bg-gray border-0 py-3" }
              border-color="red"
             autoComplete="off"
         // autoFocus={errors.email?"true":"false"}

               />
                 <p style={{color:"red"}}>{show?"this field is required":""}</p>
                 {errors.email && !show? (
                <p className="px-3" style={{color:"red"}}>
                     {errors.email}
                 </p>):""}
                </div>
               
           {/*        {errors.email ? (
                <p className="alert alert-warning alert-dismissible m-3 px-3" role="alert">
                     {errors.email}
                   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
                </p>
              ) : (
                "" 
              )}   */}
                <div className="form-group px-3">
                  <input   type="password"
                id="password"
                placeholder="password"
                value={state.password}
               onChange={handleChange}
                className={show1?"form-control border border-danger rounded  py-3 required" :"form-control rounded mb-3 bg-gray border-0 py-3" } />
               
                {errors.password && !show1? (
                <p className="px-3" style={{color:"red"}} >
                     {errors.password}
                 </p>):""}
                 <p  style={{color:"red"}}>{show1?"this field is required":""}</p>
                </div>
            {/*     {errors.password ? (
                <p className="alert alert-warning alert-dismissible m-3 px-3" role="alert">
                  {errors.password}
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
                </p>
              ) : (
                ""
              )}  */}
                <div className="form-check my-4 px-3">
                  <input type="checkbox" className="form-check-input keep-sign" name="checkbox" id="rememberPassword"   checked={rememberPassword} onChange={handleRememberMeChange} />
                  <label className="form-check-label text-muted " htmlFor="rememberPassword">Keep me signed in</label>
                </div>
                <div className="px-3">
                {/*   <button type="button" className="btn btn-dark font-poppins font-poppins">Login</button> */}
                <input
                 type="submit"
                 value="Login"
                 className="btn btn-dark font-poppins font-poppins loginbt"
                />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
