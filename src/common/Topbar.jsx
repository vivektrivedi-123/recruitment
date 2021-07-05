import React,{useEffect, useState} from 'react'
import Search from '../common/Search'
import {Link, useHistory} from 'react-router-dom'
import axios from './axios'
function Topbar(props) {
const token=localStorage.getItem('token')
  const[state,setState]=useState({

  })
  const history=useHistory()

  useEffect(()=>{
    let id="60c7578bdc0dbb74defe7b72"
    axios.get(`company/${id}`,{
      headers: {
        'Authorization': 'Bearer '+ token
     }
    }).then((res)=>{
      console.log(res.data.results)
      setState(res.data.results)
    }).catch((err)=>{
      console.log(err.message)
      if(err.message==="Request failed with status code 403")
      {
        localStorage.clear();
        history.push("/");
      }
      
    })
  },[props.header])
    return (
        <>
        <div className="row bg-white m-0 px-2" id="top-bar">
  <div className="col-md-6 col-5 align-items-sm-center d-flex">
    <button className="button-menu-mobile open-left disable-btn d-md-none">
      <i className="mdi mdi-menu" />
    </button>
    <a href="#" className="logo">
      <span className="logo-lg">
        <img src="../assets/images/logo1.png" className="img-fluid" alt="logo" />
      </span>
    </a>
    <a href="#" className="ms-2">
      <h4 className="text-info d-none d-md-inline">
        Rudra Innovative Software (P)Ltd. Talent Center
      </h4>
    </a>
  </div>
  <div className="col-md-6 col-7 p-0">
    <ul className="list-unstyled topbar-menu float-end mb-0">
      <li>
        <Search />
      </li>
      <li>
        <div className="dropdown">
          <button className="btn dropdown-toggle  btn-primary btn-no-image font-600" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="uil uil-plus" /> Add New
          </button>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu p-2 mt-2 shadow" id="arrow" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item d-flex" to="/job/posting">
              <i className="dripicons-briefcase me-2 d-inline-block" />
              <div className="d-inline-block"> Job Posting </div>
            </Link>
            <a className="dropdown-item d-flex " href="#"> <i className="dripicons-user me-2" /> Employee </a>
            <Link className="dropdown-item d-flex " to="/new-task"> <i className="dripicons-list me-2" /> Task </Link>
            <div className="dropdown-divider" />
            <a className="dropdown-item d-flex " href="#"> <i className="mdi mdi-account-supervisor-outline me-2" /> Refer a candidate </a>
          </div>
        </div>
      </li>
      <li className="top-nav-separator" />
      <li>
        <i className="mdi mdi-gift-outline" />
      </li>
      <li className="dropdown notification-list mx-2">
        <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false " aria-expanded="false ">
          <span className="account-user-avatar"> 
            <img src="../assets/images/users/avatar-1.jpg" alt="user-image" className="rounded-circle" />
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
          {/* item*/}
          <div className=" dropdown-header noti-title ">
            <h6 className="text-overflow m-0 ">Welcome !</h6>
          </div>
          {/* item*/}
          <a href="#" className="dropdown-item notify-item">
            <i className="mdi mdi-account-circle me-1" />
            <span>My Account</span>
          </a>
          {/* item*/}
          <a href="#" className="dropdown-item notify-item ">
            <i className="mdi mdi-account-edit me-1 " />
            <span>Settings</span>
          </a>
          {/* item*/}
          <a href="#" className="dropdown-item notify-item ">
            <i className="mdi mdi-lifebuoy me-1 " />
            <span>Support</span>
          </a>
          {/* item*/}
          <a href="#" className="dropdown-item notify-item ">
            <i className="mdi mdi-lock-outline me-1 " />
            <span>Lock Screen</span>
          </a>
          {/* item*/}
          <a href="#" className="dropdown-item notify-item ">
            <i className="mdi mdi-logout me-1 " />
            <span>Logout</span>
          </a>
        </div>
      </li>
    </ul>
  </div>
</div>

        </>
    )
}

export default Topbar
