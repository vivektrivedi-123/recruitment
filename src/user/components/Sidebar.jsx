import React, { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom';

 function Sidebar() {
     const location=useLocation();
     const[path,setPath]=useState(location.pathname);

      useEffect(()=>{
        setPath(location.pathname);
      },[location]) 

 return (
  <>
<div className="left-bar-menu overflow-x-hidden ">
  <div className="main-icon-menu h-100">
     <div className="close-button-menu w-100 text-right p-3 d-lg-none position-absolute">
        <img src="assets/images/close.svg" className="img-fluid" alt="img" />
   </div>

    <div className="logo py-4 px-3">
      <Link to="/"><img src="../assets/images/logo-sm.png" className="img-fluid logo-icon" alt="img" /></Link>
      <Link to="/"><img src="../assets/images/logo.png" className="img-fluid full-logo" alt="img" /></Link>
    </div>
    <div className="nav flex-column nav-pills nav-side-menu py-5">
      <ul className="list-unstyled">
        <li className="mb-3"> 
          <Link className={`${path==="/"?"position-relative d-flex py-3 nav-link active":"position-relative d-flex py-3 nav-link"}`} to="/">
            <img src="../assets/images/home.svg" className="img-fluid without-hover" alt="dashboard" title="dashboard" />
            <img src="../assets/images/home-white.svg" className="img-fluid on-hover" alt="dashboard" title="dashboard" />
            <span className="ml-3 menu-link">Dashboard</span>
          </Link>
        </li>
      {/*   <li className="mb-3">
          <Link className= {`${path==="/overview"?"nav-link py-3 position-relative d-flex active":"nav-link py-3 position-relative d-flex"}`}  to="/overview">
            <img src="../assets/images/real-time.svg" className="img-fluid without-hover" alt="dashboard" title="dashboard" />
            <img src="../assets/images/real-time-white.svg" className="img-fluid on-hover" alt="dashboard" title="dashboard" />
            <span className="ml-3 menu-link">Overview</span>
          </Link> 
        </li> */}
        <li className="mb-3">
          <Link className= {`${path==="/key-drivers"?"nav-link py-3 position-relative d-flex active":"nav-link py-3 position-relative d-flex"}`} to="/key-drivers">
            <img src="../assets/images/plot-theme.svg" className="img-fluid without-hover" alt="dashboard" title="dashboard" />
            <img src="../assets/images/plot-theme-white.svg" className="img-fluid on-hover" alt="dashboard" title="dashboard" />
            <span className="ml-3 menu-link">Key Drivers</span>
          </Link>
        </li>
        <li className="mb-3">
          <Link className= {`${path==="/launch-monitor"?"nav-link py-3 position-relative d-flex active":"nav-link py-3 position-relative d-flex"}`} to="/launch-monitor">
            <img src="../assets/images/top-driver.svg" className="img-fluid without-hover" alt="dashboard" title="dashboard" />
            <img src="../assets/images/top-driver-white.svg" className="img-fluid on-hover" alt="dashboard" title="dashboard" />
            <span className="ml-3 menu-link">Launch Monitor</span>
          </Link>
        </li>
        <li className="mb-3">
          <Link className= {`${path==="/insight-miner"?"nav-link py-3 position-relative d-flex active":"nav-link py-3 position-relative d-flex"}`} to="/insight-miner">
            <img src="../assets/images/historical-data.svg" className="img-fluid without-hover" alt="dashboard" title="dashboard" />
            <img src="../assets/images/historical-data-white.svg" className="img-fluid on-hover" alt="dashboard" title="dashboard" />
            <span className="ml-3 menu-link">Insight Miner</span>
          </Link>
        </li>
       {/*  <li className="mb-3">
          <a className="nav-link py-3 position-relative d-flex" href="#!">
            <img src="../assets/images/setting-menu.svg" className="img-fluid without-hover" alt="dashboard" title="dashboard" />
            <img src="../assets/images/setting-menu-white.svg" className="img-fluid on-hover" alt="dashboard" title="dashboard" />
            <span className="ml-3 menu-link">Settings</span>
          </a>
        </li> */}
       <li className="mb-2">
  <Link to="/myfiles" className={`${path==='/myfiles'?"nav-link py-3 position-relative d-flex active":"nav-link py-3 position-relative d-flex"}`}>
    <img src="assets/images/historical-data.svg" className="img-fluid without-hover" alt="historical" title="historical" />
    <img src="assets/images/historical-data-white.svg" className="img-fluid on-hover" alt="historical" title="dashboard" />
    <span className="ml-3 menu-link">My Files</span>
  </Link>
</li>

      </ul>
    </div>
    <div className="fixed-bottom py-3 left-footer">
      <ul className="list-unstyled mb-0">
        <li className=""> 
          <Link className="nav-link position-relative d-flex" to="/logout">
            <img src="assets/images/power-button.svg" className="img-fluid without-hover" alt="logout" title="dashboard" />
            <img src="assets/images/power-button.svg" className="img-fluid on-hover" alt="logout" title="dashboard" />
            <span className="ml-3 menu-link">{localStorage.getItem('token')===""?"":"Logout"}</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>

        </>
    )
}

export default Sidebar