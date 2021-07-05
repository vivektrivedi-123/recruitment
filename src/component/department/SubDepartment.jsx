import React, { useState } from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import './SubDepartment.css'
import Sidebar from '../../component/settings/Sidebar'
import Table from '../../common/Table'
import SubDepartmentTable from './SubDepartmentTable'
function SubDepartment() {
  const[subDept,setsubDept]=useState([])
    const[bool,setBool]=useState(false)
    const addNew=()=>{
        setBool(true)
    }
    const handleChange=(e)=>{
        console.log(e.target.value)
    }
    return (
        <>
       <div className="wrapper">
  <div id="leftside">
  <Navigation/>
  </div>
  <div className="content-page pt-5">
    <div className="content">
      <div className="navbar-custom h-auto">
        <div id="top-bar">
         <Topbar/>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="page-aside-left bg-white shadow settings p-0" style={{top: '55px!important', width: 'inherit!important'}}>
          <Sidebar name="Sub-Departments"/>
          </div>
         
        </div>
        <div className="col-10">
          <div className="row">
            {/* <Table/> */}
            <SubDepartmentTable/>
            <div className="col-lg-3 text-info p-4">
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

export default SubDepartment
