import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar';
import './Employee.css';
import EmployeeCard from './EmployeeCard'
import data from '../../JobData.json'
import SelectSearch from 'react-select-search';
import fuzzySearch from '../FuzzySearch'
function Employee() {
    const[emp,setEmp]=useState(data.employeeData)
    const sort=[
        "First Name",
        "Last Name",
        "Employee Type",
        "Joining Date",
        "Employee ID",
        "",
    ]
    const teams=[
        {"name":"Business","value":"Business"},
        {"name":"Corporate Marketing","value":"Corporate Marketing"},
        {"name":"Customer Success","value":"Customer Success"},
        {"name":"Digital Marketing","value":"Digital Marketing"},
        {"name":"Field Sales","value":"Field Sales"},
        {"name":"HR Operations","value":"HR Operations"},
        {"name":"Inbound Sales","value":"Inbound Sales"},
        {"name":"Office Administration","value":"Office Administration"},
        {"name":"Operations","value":"Operations"},
        {"name":"Talent Acquisition","value":"Talent Acquisition"}
    ]


 const handleTeam=(e)=>{
     console.log(e)
 }   



 function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

const handleSort=(name)=>{
    console.log(name)
    if(name==='First Name')
    {
        let d=emp.sort(dynamicSort("name"))
        setEmp(d)
        //console.log(d)
    }
    if(name==='Employee ID')
    {
        let d=emp.sort(dynamicSort("id"))
        setEmp(d)
        console.log(d)
    }
   
}
const handleSearch=(e)=>{
    //console.log(e.target.value);
    let d1=emp;
    // let d=d1.filter(u=>u.name.toLowerCase().includes(e.target.value))
    // console.log(d)
    // setEmp(d)
    // console.log(emp)
}
    return (
        <>
<div>
  <div className="wrapper">
    <div id="leftside">
        <Navigation/>
        </div>
    <div className="content-page">
      <div className="content">
        <div className="navbar-custom">
          <div id="top-bar">
              <Topbar/>
              </div>
          <div className="m-0 border-top border-bottom">
            <div className="d-flex align-items-center bg-body">
              <nav>
                <ol className="breadcrumb mb-0 border-0">
                  <li className="breadcrumb-item active font-600" aria-current="page">Employees</li>
                </ol>
              </nav>
              <div className="d-inline-block me-3"> 
                <button type="button" className="btn btn-primary rounded-pill py-0">  
                  <span className="fs-5 fw-bold"> 6 view Hires </span> </button>
              </div>
              <div className="ms-auto pe-3">
                <div className="d-inline-block">
                  <div className="dropdown">
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                      <div className="btn-group dropdown" role="group">
                        <button id="btnGroupDrop1" type="button" className="border bg-white m-0 end-bar-toggle btn btn-light" data-bs-toggle="dropdown" aria-expanded="false">Import</button>
                        <ul className="dropdown-menu  p-0 dropdown-menu-end dropdown-menu-animated mt-1 shadow border" aria-labelledby="btnGroupDrop1">
                          <li className="r text-uppercase dropdown-item semi-bold fs-5">Bulk create</li>
                          <li className="dropdown-item">
                            <a href="#">                CSV File
                            </a>            
                          </li>
                          <li className="dropdown-item">
                            <a href="#">                G Suite Directory
                            </a>            
                          </li>
                          <li className="dropdown-item">
                            <a href="#">                Office 365 Directory
                            </a>            
                          </li>
                          <li className=" text-uppercase dropdown-item semi-bold fs-5">Bulk update</li>
                          <li className="dropdown-item">
                            <a href="#">                CSV File
                            </a>            
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-inline-block">
                  <div className="btn-group justify-content-sm-end ">
                  <button type="button" className="border bg-white m-0 btn btn-light" > Add Employee</button>
                    {/* <button type="button" className="border bg-white m-0 end-bar-toggle btn btn-light" data-bs-toggle="modal" data-bs-target="#add-candidate"> Add Employee</button> */}
                    <button type="button" className="border bg-white dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu mt-2 shadow min-width-auto" id="arrow" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item d-flex" href="#">
                        <div className="d-inline-block"> via New Hires <span className="badge bg-dark">6</span></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /btn-group */}
        </div>
        {/*  navbar-custom */}
        <div className="container-fluid py-2">
          <div className="row mt-2 mb-3 mx-0 align-items-center">
            <div className="col-md-3">
              <div className="dropdown all-employee-category d-flex align-items-center">
                <span className="fw-normal text-info me-2">Browse</span>
                <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle show" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="true">
                  All Employees
                </button>
                <div className="dropdown-menu rounded" aria-labelledby="dropdownMenu2" data-popper-placement="bottom-start">
                  <div className="position-relative d-flex align-items-center">
                  <SelectSearch    
                   filterOptions={fuzzySearch} 
                   onChange={handleTeam} 
                   search 
                   emptyMessage="No Department found" 
                   options={teams}  
                   name="team" 
                   placeholder="search team" />
             
                    {/* <input type="text" className="form-control border-0 py-2 px-4" placeholder="Search field" />
                    <div className="position-absolute search-field-sec">
                      <i className="uil uil-search fs-4" />
                    </div> */}
                  </div>
                  <div className="border-top">
                    <div className="d-inline-block py-3 border-end px-4">
                      {/* <label className="mb-2 fs-4 text-info">Teams</label> */}
                     
                      {/* <ul className="list-unstyled">
                        {teams.map((u,i)=> 
                           <li className="mb-2">
                           <a href="#" className="bg-transparent p-0">{u}</a>
                         </li>
                        )}
                      </ul> */}
                    </div>
                    {/* <div className="d-inline-block py-3  px-4">
                      <label>Business Department</label>
                      <ul className="list-unstyled">
                        <li>
                          No Department found
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dropdown">
                <span className="fw-normal text-info me-1">Sort By</span>
                <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle show" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="true">
                  First Name
                </button>
                <ul className="dropdown-menu rounded py-2" aria-labelledby="dropdownMenu2" data-popper-placement="bottom-start">
                  {sort.map((u,i)=>
                  <li className="dropdown-item">
                    <a href="#!" onClick={()=>handleSort(u)}>
                      {u}
                    </a>
                  </li>
                  )}
                  <li role="separator" className="divider">
                    <hr />
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Ascending</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Descending</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 pe-md-0">
              <div className="d-flex align-items-center justify-content-end">
                <div className="position-relative d-flex align-items-center me-3 w-50">
                  <input 
                    type="text" 
                    className="form-control  px-4 py-1 rounded-0" 
                    placeholder="Employee Search" 
                    onChange={handleSearch}
                    />
                  <div className="position-absolute search-field-sec">
                    <i className="uil uil-search fs-4" />
                  </div>
                </div>
               
                <div className>
                  <nav aria-label="Page navigation example d-flex">
                    <ul className="pagination mb-0 d-flex align-items-center">
                      <li className="page-item text-info me-2">1 to 9 of 9</li>
                      <li className="page-item">
                        <a className="page-link py-0 px-1" href="#" aria-label="Previous">
                          <span aria-hidden="true"><i className="uil uil-angle-left fs-3" /></span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link py-0 px-1" href="#" aria-label="Next">
                          <span aria-hidden="true"><i className="uil uil-angle-right fs-3" /></span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className>
                  <ul className="list-unstyled mb-0 ms-2">
                   <Link to="/employee-list"> <li className="list-inline-item me-2"><i className="uil uil-list-ul fs-3" /></li></Link>
                    <li className="list-inline-item me-2"><i className="uil uil-filter fs-3" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-0">
           <EmployeeCard emp1={emp}/>
          </div>
        </div>
      </div>
    </div>
    {/* content ends */}
  </div>
  {/*content-page */}
</div>

        
        </>
    )
}

export default Employee

