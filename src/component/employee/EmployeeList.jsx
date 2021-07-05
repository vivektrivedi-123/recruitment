import React,{useState} from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import TableView from './TableView'
import data from '../../JobData.json'
import SelectSearch from 'react-select-search';
import fuzzySearch from '../FuzzySearch'
import {Link} from 'react-router-dom'
function EmployeeList() {

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
    return (
        <>
<div>
  <div className="wrapper">
    <div id="leftside">
     <Navigation/>
    </div>
    <div className="content-page">
      {/* Start Content*/}
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
                            </a>          </li>
                          <li className="dropdown-item">
                            <a href="#">                G Suite Directory
                            </a>          </li>
                          <li className="dropdown-item">
                            <a href="#">                Office 365 Directory
                            </a>          </li>
                          <li className=" text-uppercase dropdown-item semi-bold fs-5">Bulk update</li>
                          <li className="dropdown-item">
                            <a href="#">                CSV File
                            </a>          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-inline-block">
                  <div className="btn-group justify-content-sm-end ">
                    <button type="button" className="border bg-white m-0 end-bar-toggle btn btn-light" data-bs-toggle="modal" data-bs-target="#add-candidate"> Add Employee</button>
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
        </div>
        <div className="page-title-box ">
          <div className="tab-pane show active" id="dash">
            <div className="row my-2 - mx-0 align-items-center">
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
                      placeholder="search team" 
                      />
                      {/* <input type="text" className="form-control border-0 py-2 px-4" placeholder="Search field" />
                      <div className="position-absolute search-field-sec">
                        <i className="uil uil-search fs-4" />
                      </div> */}
                    </div>
                    <div className="border-top">
                      {/* <div className="d-inline-block py-3 border-end px-4">
                        <label className="mb-2 fs-4 text-info">Teams</label>
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <a href="#" className="bg-transparent p-0">Business</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="bg-transparent p-0">Corporate Marketing</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="bg-transparent p-0">Customer Success</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="bg-transparent p-0">Digital Marketing</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="bg-transparent p-0">Field Sales</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="bg-transparent p-0">HR Operations</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="bg-transparent p-0">Inbound Sales</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="bg-transparent p-0">Office Administration</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="bg-transparent p-0"> Operations</a>
                          </li>
                          <li className="mb-2">
                            <a href="#" className="bg-transparent p-0">Talent Acquisition</a>
                          </li>
                        </ul>
                      </div> */}
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
                    <Link to="/employee">  <li className="list-inline-item me-2"><i className="uil uil-list-ul fs-3" /></li></Link>
                      <li className="list-inline-item me-2"><i className="uil uil-filter fs-3" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-0  pb-3">
              {/*content start*/}
              <div className="table-responsive table-custom px-3 mt-n1">
                    <TableView data={emp}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="end-bar filter-area">
    <div className="rightbar-title py-2 border-top border-bottom">
      <a href="javascript:void(0);" className=" end-bar-toggle float-start ms-n5 mt-n3 pt-1">
        <i className="dripicons-cross noti-icon" />
      </a>
      <div className="d-flex justify-content-between">
        <h5 className="m-0 text-info">Filter</h5>
        <div className="mr-4">
          <a href="#" className="btn btn-clear py-0 m-1 mt-0 ">Reset</a>
          <a href="#" className="btn btn-primary py-1 m-1 mt-0">Apply</a>
        </div>
      </div>
    </div>
    <div className="rightbar-content h-100" data-simplebar>
      <div className="p-3">
        <div className="field mb-3">
          <input 
            className="form-control" 
            type="text" 
            name="Source" 
            id="Source" 
            placeholder="Search..." 
            />
          <label htmlFor="Status">Source</label>
        </div>
        <div className="field mb-3">
          <input 
            className="form-control" 
            type="text" 
            name="Category" 
            id="Category" 
            placeholder="Search..." 
            />
          <label htmlFor="Category">Source Category</label>
        </div>
        <div className="field mb-3">
          <input 
           className="form-control" 
           type="text" 
           name="Candidate" 
           id="Candidate" 
           placeholder="Search..." 
           />
          <label htmlFor="Candidate">Candidate owner</label>
        </div>
        <div className="field mb-3">
          <input 
           className="form-control" 
           type="text" 
           name="Status" 
           id="Status" 
           placeholder="Search..." 
           />
          <label htmlFor="Status">Status</label>
        </div>
        <div className="field mb-3">
          <input 
            className="form-control" 
            type="text" 
            name="Stage" 
            id="Stage" 
            placeholder="Search..." 
            />
          <label htmlFor="Department">Stage</label>
        </div>
        <div className="field mb-3">
          <input 
            className="form-control" 
            type="text" 
            name="Tags" 
            id="Tags" 
            placeholder="Search..." 
          />
          <label htmlFor="Tags">Tags</label>0
        </div>
        <div className="field mb-3">
          <input 
           className="form-control" 
           type="text" 
           name="deleted-candidate" 
           id="deleted-candidate" 
           placeholder="Search..." 
           />
          <label htmlFor="deleted-candidate">Is the candidate deleted?</label>
        </div>
        <div className="field mb-3">
          <input 
            className="form-control" 
            type="text" 
            name="blocked-candidate" 
            id="blocked-candidate" 
            placeholder="Search..." 
            />
          <label htmlFor="blocked-candidate">Is the candidate blocked?</label>
        </div>
        <div className="field ">
          <a href="#" className="text-link"><i className="mdi mdi-plus-circle mdi-18px" /> Add more</a>
        </div>
      </div>
      {/* end padding*/}
    </div>
  </div>
  <div className="modal fade" id="unverified" tabIndex={-1} aria-labelledby="myLargeModalLabel" role="dialog" aria-modal="true">
    <div className="modal-dialog modal-lg px-5">
      <div className="modal-content">
        <div className="modal-header px-3 border-0">
          <h4 className="modal-title" id="standard-modalLabel">Send Invite Email
          </h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body py-0 px-0">
          <p className="px-3">Are you sure you want to send the invite email to Gurpreet Singh?
          </p>
          <div className="invite-email bg-gray p-3 overflow-auto">
            <div className="mb-2">
              <h5 className="text-info mt-0 pt-0">Invite Email (Preview) <i className="uil uil-edit-alt fs-4" /></h5>
              <div className="bg-white p-2">Subject: Rudra Innovative Software (P)Ltd. Talent Center user activation</div>
            </div>
            <div className="email-preview">
              <div className />
              <div className="border-top bg-white py-3">
                <div className="d-flex border-bottom px-4 align-items-center ">
                  <img 
                    src="image/logo.jpg" 
                    className="img-fluid company-logo-email me-3" 
                    />
                  <h4 className="fw-normal">Rudra Innovative Software (P)Ltd. Talent Center</h4>
                </div>
                <div className="p-4">
                  <div className="text-center">
                    <h3 className="py-0 my-0 fs-3 mb-3">Welcome to Employee Portal of Rudra Innovative Software (P)Ltd. Talent Center</h3>
                    <button type="button" className="btn btn-primary rounded-pill fs-4 px-4 py-2">Login and Set Password</button>
                    <h4 className="py-3 fw-light">Here are few things for you to get started!</h4>
                  </div>
                  <div className="mx-4">
                    <div className="d-flex align-items-center mb-3 ">
                      <img 
                        src="image/activation-find-coworkers.png" 
                        className="img-fluid find-co-worker" 
                      />
                      <div className="ms-2">
                        <h4 className="mb-0">Find co-workers</h4>
                        <div className="my-2">
                          <p className="mb-0">Look up their contact or job profile to know more about them.</p>
                          <p className="mb-0 ">Search for co-workers by department or by name.</p>
                        </div>
                        <button type="button" className="btn btn-light btn-sm">Search</button>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <img src="image/activation-view-profile.png" className="img-fluid find-co-worker" />
                      <div className="ms-2">
                        <h4 className="mb-0"> View your profile and access files</h4>
                        <div className="my-2">
                          <p className="mb-0">View your personal and professional info.</p>
                          <p className="mb-0 ">Access all your employment files in one place</p>
                        </div>
                        <button type="button" className="btn btn-light btn-sm">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="email-footer p-5 text-center">
                <h5 className>Never miss a last-minute update. Get the freshteam app.</h5>
                <img src="image/google-play-badge.png" className="img-fluid mx-1" />
                <img src="image/app-store-badge.png" className="img-fluid mx-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer justify-content-start">
          <div className="ms-auto pe-3">
            <ul className="list-unstyled mb-0 ">
              <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info" data-bs-dismiss="modal" aria-label="Close">Cancel</button></li>
              <li className="list-inline-item text-center rounded ">
                <button type="button" className="btn btn-primary">Send</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
        </>
    )
}

export default EmployeeList
