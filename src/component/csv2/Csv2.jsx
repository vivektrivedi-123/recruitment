import React from 'react'
import Topbar from '../../common/Topbar'
import Navigation from '../../common/Navigation'
import Sidebar from '../settings/Sidebar'
import "./Csv2.css"
import Modal from './Modal'
function Csv2() {
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
           <Sidebar name="Bulk Update Current Employees (CSV File)"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white">
                <div className="row align-items-baseline justify-content-between">
                  <div className="col-8">
                    <ul className="nav nav-tabs nav-bordered bg-transparent border-top-0 mb-3 px-1">
                      <li className="nav-item">
                        <a href="#home-b1" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
                          <i className="mdi mdi-home-variant d-md-none d-block" />
                          <span className="d-none d-md-block"> <span className="badge bg-danger rounded-pill me-1" style={{padding: '4px 6px'}}>1</span> Upload CSV File</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#profile-b1" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                          <i className="mdi mdi-account-circle d-md-none d-block" />
                          <span className="d-none d-md-block"><span className="badge bg-light rounded-pill me-1 text-secondary" style={{padding: '4px 6px'}}>2</span> Create Employees</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <button className="btn btn-clear me-2">Cancle</button>
                    <button className="btn btn-secondary">Import</button>
                  </div>
                </div>
                <div className="tab-content">{/*recruit tab*/}
                  <div className="tab-pane show active" id="home-b1">
                    <h4>Bulk Update Current Employees</h4>
                    <p>Information can be updated for Employees who are already a part of the Employee Directory. Freshteam recommends a standard file format to be used for updating Employee information. Please download the CSV for reference.</p>
                    <p>Note: All changes made to an Employee field will be tracked in the Employee Timeline. Job related updates will be found in the Job Summary Table. HR Partner values would not be imported if the Auto-assignment is turned on. In this case, Freshteam will update the corresponding values automatically. For all updates with a future effective date, HR Partner values would not be imported if the Auto-assignment is turned on.</p>
                    <div className="mb-2">
                      <h4>Upload CSV file</h4>
                      <p>To check which <strong> Update Type </strong>has the field you want to modify, <a href="#" className="text-primary"> View Employee Fields</a></p> 
                    </div>
                    <div className="row">
                      <div className="col-5">
                        <div className="my-3">
                          <label htmlFor="example-select" className="form-label">Choose Update type <sup className="text-danger ms-1">*</sup></label>
                          <select className="form-select" id="example-select">
                            <option>Employee Profile (All single Fields)</option>
                            <option>Transfer Updates </option>
                            <option>Job Updates </option>
                            <option>Bank Account Information</option>
                            <option>Salary Changes </option>
                            <option>Bonus Information </option>
                            <option>Stock Information </option>
                            <option>Employee Education Information </option>
                            <option>Previous Employment Information </option>
                            <option>Dependent Information </option>
                            <option>Emergency Contact Information </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>{/*/recruit tab*/}
                  <div className="tab-pane" id="profile-b1">{/*candidate tab*/}
                  </div>{/*/candidate tab*/}
                </div>{/*/tab content*/}
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4 className="mt-3">Employee Fields</h4>
              <p>Lookup for the type of Update that contains the field you want to modify. If you want to update a set of fields, you might have to do multiple imports for each Update type that contains the field</p>
              <button className="btn btn-light bg-white" data-bs-toggle="modal" data-bs-target="#CreateEmp_csv-modal">View Employee Fields</button>
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>{/**/}   
<Modal/>
        </>
    )
}

export default Csv2
