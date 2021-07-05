import React from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import CsvModal from './CsvModal'
import "./index.css"
function index() {
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
            <Sidebar name="Bulk Create New Employees (CSV File)"/>
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
                    <button className="btn btn-secondary">Next</button>
                  </div>
                </div>
                <div className="tab-content">{/*recruit tab*/}
                  <div className="tab-pane show active" id="home-b1">
                    <h4>Upload CSV file</h4>
                    <p>Freshteam recommends the below File format to be used for creating New Employees. You will be able to create Employees ONLY for Locations you have access to. Download the sample CSV File for reference.</p>
                    <p>Note: HR Partner values would not be imported if the Auto-assignment is turned on. In this case, Freshteam will update the corresponding values automatically.</p>
                    <div className="mb-2">
                      <button className="btn btn-outline-secondary p-2 me-2"><i className="mdi mdi-download mdi-18px" /> Download Sample CSV File</button>
                      <button className="btn btn-outline-secondary p-2">Upload CSV</button> 
                    </div>
                    <a href="#">Download Minimalist CSV File</a>
                  </div>{/*/recruit tab*/}
                  <div className="tab-pane" id="profile-b1">{/*candidate tab*/}
                  </div>{/*/candidate tab*/}
                </div>{/*/tab content*/}
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4 className="mt-3">Resource article(s)</h4>
              <p>Ensure your file contains all Mandatory fields defined in the Employee record. It is also recommended you create Employees with minimal &amp; important set fields. Other secondary information can be updated in phases. <a href="#" className="text-primary">Use 'Bulk Update Current Employee'.</a></p>
              <button className="btn btn-light bg-white" data-bs-toggle="modal" data-bs-target="#CreateEmp_csv-modal">View Employee Fields</button>
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>{/**/}
<CsvModal/>
        </>
    )
}

export default index
