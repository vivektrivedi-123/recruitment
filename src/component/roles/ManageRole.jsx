import React, { useEffect, useState } from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import './ManageRole.css'
function ManageRole({data}) {
const[role,setRole]=useState([])
useEffect(()=>{
    setRole(data)
},[data])

//   const role=[
//       {name:"Account Admin",manage:"Can Access &amp; Modify the entire Freshteam account including account and billing related information."},
//       {name:"Admin",manage:"Can Access &amp; Modify all configurations in the Settings and will have complete access to all modules, but are restricted from Viewing Account &amp; Billing settings."},
//       {name:"HR Partner",manage:"Can Access &amp; Modify entire Employee information including Time-off, compensation and team workflows of any employee."},
//       {name:"Recruiter",manage:"Can manage all Productivity and Applicant Tracking System features but has restricted access to other settings like account and billing info."},
//       {name:"Hiring Manager",manage:"This is a special role for the recruitment module. Can view candidates, advance stages and view offer details. Has employee level access to other modules."}
    
//   ]  
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
          
         <Sidebar  name="Manage Role"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row manage">
            <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white">
                <ul className="list-group mt-4">
                    {role.map((u,i)=>
                  <li key={i} className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <h4 className="font-600 text-info mb-1">{u.role_name}</h4>
                          <p>Can Access &amp; Modify the entire Freshteam account including account and billing related information.</p>
                        </div>
                        <div className="col-md-3" id="tooltip-container2">
                          <button className="btn btn-outline-secondary" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="View users"><i className="dripicons-user-group fs-4" /> 6</button>
                        </div>
                      </div>
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <i className=" dripicons-document-edit align-middle me-2" />
                      </div>
                    </div>
                  </li>
                    )}
                  {/* <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <h4 className="font-600 text-info mb-1">Admin</h4>
                          <p>Can Access &amp; Modify all configurations in the Settings and will have complete access to all modules, but are restricted from Viewing Account &amp; Billing settings.</p>
                        </div>
                        <div className="col-md-3" id="tooltip-container2">
                          <button className="btn btn-outline-secondary" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="View users"><i className="dripicons-user-group fs-4" /> 5</button>
                        </div>
                      </div>
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <i className=" dripicons-document-edit align-middle me-2" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <h4 className="font-600 text-info mb-1">HR Partner</h4>
                          <p>Can Access &amp; Modify entire Employee information including Time-off, compensation and team workflows of any employee.</p>
                        </div>
                        <div className="col-md-3" id="tooltip-container2">
                          <button className="btn btn-outline-secondary" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="View users"><i className="dripicons-user-group fs-4" /> 5</button>
                        </div>
                      </div>
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <i className=" dripicons-document-edit align-middle me-2" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <h4 className="font-600 text-info mb-1">Recruiter</h4>
                          <p>Can manage all Productivity and Applicant Tracking System features but has restricted access to other settings like account and billing info.</p>
                        </div>
                        <div className="col-md-3" id="tooltip-container2">
                          <button className="btn btn-outline-secondary" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="View users"><i className="dripicons-user-group fs-4" /> 6</button>
                        </div>
                      </div>
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <i className=" dripicons-document-edit align-middle me-2" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <h4 className="font-600 text-info mb-1">Limited HR Partner</h4>
                          <p>Has the Same Privileges as HR Partner but only for the Associated Employees or the Employees in the Associated Office Location.</p>
                        </div>
                        <div className="col-md-3" id="tooltip-container2">
                          <button className="btn btn-outline-secondary" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="View users"><i className="dripicons-user-group fs-4" /> 5</button>
                        </div>
                      </div>
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <i className=" dripicons-document-edit align-middle me-2" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <h4 className="font-600 text-info mb-1">Limited Recruiter</h4>
                          <p>Has recruiter level privileges on candidates within the jobs they are assigned to. Does not have access to other candidates outside their assigned jobs.</p>
                        </div>
                        <div className="col-md-3" id="tooltip-container2">
                          <button className="btn btn-outline-secondary" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="View users"><i className="dripicons-user-group fs-4" /> 5</button>
                        </div>
                      </div>
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <i className=" dripicons-document-edit align-middle me-2" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <h4 className="font-600 text-info mb-1">Hiring Manager</h4>
                          <p>This is a special role for the recruitment module. Can view candidates, advance stages and view offer details. Has employee level access to other modules.</p>
                        </div>
                        <div className="col-md-3" id="tooltip-container2">
                          <button className="btn btn-outline-secondary" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="View users"><i className="dripicons-user-group fs-4" /> 6</button>
                        </div>
                      </div>
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <i className=" dripicons-document-edit align-middle me-2" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <h4 className="font-600 text-info mb-1">Employee</h4>
                          <p>Can View limited set of information of other Employees, Request timeoff, View company job postings and Refer a candidate to an Organisation.</p>
                        </div>
                        <div className="col-md-3" id="tooltip-container2">
                          <button className="btn btn-outline-secondary" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="View users"><i className="dripicons-user-group fs-4" /> 9</button>
                        </div>
                      </div>
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <i className=" dripicons-document-edit align-middle me-2" />
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4>Understanding Roles</h4>
              <p>By default Freshteam allows each actor like Recruiter, HR Partner, etc., to perform specific actions in Freshteam. This section allows you to customize that to suit your HR process.</p>
              <p>Note: This is an advanced setting and we recommend that you get in touch with Support to understand the extent of impact before you configure these.</p>
              <h4 className="mt-3">Where is this shown/used?</h4>
              <p>This affects what each employee in your system can see and what they can do when they login to Freshteam.</p>
              <h4 className="mt-3">Resource article(s)</h4>
              <a href="#" className="text-primary">User roles in Freshteam</a>
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>

        </>
    )
}

export default ManageRole
