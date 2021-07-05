import React from 'react'
import Navbar from '../../common/Navbar'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import "./vendors.css"
import VendorsModal from './VendorsModal'
function Vendors() {
    return (
        <>
         <div className="wrapper">
  <div id="leftside">
    <Navbar/>
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
            <Sidebar name="Vendors"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white">
                <div className="text-center my-5 add-department-field">
                  <i className="  uil-users-alt text-muted" style={{fontSize: 50}} />
                  <h3 className="text-info fs-3 mb-3"> No Sub Departments to Show </h3>
                  <button className="btn btn-outline-secondary end-bar-toggle">Add a Vendor</button>
                </div>
                {/*company form*/}
                <ul className="list-group py-2 d-none add-sub-department">
                  <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row">
                        <div className="col-lg-12">
                          <input type="text" className="border-0 w-100 bg-transparent" />
                        </div>
                      </div>
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <span>
                          <i className="uil uil-check align-middle me-1 align-middle text-success fs-3 " />
                          <i className="uil uil-times text-danger align-middle fs-3" />
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4>Vendor - Sourcing Partner</h4>
              <p>Do you work with external consultants or agencies who help you recruit? You can add such Vendors to Freshteam as ‘Sourcing Partners’. This way, your vendors can add candidates to jobs and track their hiring status.</p>
              <p><strong> Pro-Tip:</strong> We recommend the following Source/Source Categories for your vendors to help you measure their efficiency</p>
              <p><strong> Source Category:</strong> Agency</p>
              <p><strong> Source:</strong>Name of your vendor</p>
              <h4 className="mt-2">Where is this shown/used?</h4>
              <p>1. You will be able to add vendors to specific jobs in the Job Details page</p>
              <p>2. Your vendors will get an email to login to Freshteam. They will be able to add candidates to a job, view the hiring status and comment on their candidates</p>
              <p>3. You can use Source/Source category to filter candidates added by your jobs by vendors</p>
              <h4 className="mt-2">Resource article(s)</h4>
              <a href="#"> Vendors in Freshteam.</a><br /><br />
              <a href="#">Adding a vendor to your Freshteam account and job postings. </a><br /><br />
              <a href="#"> Adding a candidate to a job posting - for vendors.</a>
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>{/**/}

   <VendorsModal/>
        </>
    )
}

export default Vendors
