import React, { useState } from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import './Style.css'
import EmailModal from './EmailModal'
function Email() {
    const[state,setState]=useState({
        check1:false,
        check2:false,
        check3:false
    })

    const handleCheckBox=(e)=>{
        setState({...state,[e.target.name]:e.target.checked})
        console.log(e.target.checked)
    }
  return (
        <>
        <div>
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
            <Sidebar/>
            </div>
            {/*/sidebar accordion*/}
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-lg-9">{/*company form*/}
                <div className="ms-lg-4 mt-3 p-4 bg-white vh-100">
                  <button className="btn btn-outline-secondary mb-3" data-bs-toggle="modal" data-bs-target="#full-width-modal">Add new</button>
                  <div className="row border p-2 mx-0">
                    <div className="show-btns d-flex align-items-end position-relative">
                      <div className="col-1 m-auto">
                        <i className="mdi mdi-star text-warning mdi-24px" />
                      </div>
                      <div className="col-5">
                        <h5 className="text-info mb-0">Rudra Innovative Software (P)Ltd. Careers</h5>
                        <p className="mb-1">careers@rudrainnovatives.freshteam.com</p>
                      </div>
                      <div className="col-5">
                        <p className="mb-0">Forwarded To:</p>
                        <p className="mb-1">careers@rudrainnovatives.freshteam.com</p>
                      </div>
                      <div className="col-1" />
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <span>
                          <i className=" dripicons-document-edit align-middle me-2 pt-2" /> 
                          <i className=" mdi mdi-trash-can-outline fs-4 me-2 pt-2" data-bs-toggle="modal" data-bs-target="#delete-department" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-check form-checkbox-success form-switch mt-4">
                    <input 
                     type="checkbox" 
                     className="form-check-input" 
                     id="customSwitch1" 
                     onChange={handleCheckBox}
                     name="check1"
                     checked={state.check1} 
                     />
                    <label className="form-check-label" htmlFor="customSwitch1">Use the employee's name in conversation replies</label>
                  </div>
                  <div className="form-check form-checkbox-success form-switch mt-2">
                    <input 
                     type="checkbox" 
                     className="form-check-input" 
                     id="customSwitch1" 
                    
                     onChange={handleCheckBox}
                     name="check2"
                     checked={state.check2}
                     />
                    <label className="form-check-label" htmlFor="customSwitch1">Use "Reply-to" email address to create candidate profiles</label>
                  </div>
                  <div className="form-check form-checkbox-success form-switch mt-2">
                    <input 
                     type="checkbox" 
                     className="form-check-input" 
                     id="customSwitch1"  
                     disabled 
                     onChange={handleCheckBox}
                     name="check3"
                     checked={state.check3}
                     />
                    <label className="form-check-label" htmlFor="customSwitch1">Toggle this switch element</label>
                  </div>
                </div>
              </div>{/*/company form*/}
              <div className="col-lg-3 text-info p-4">
                <h4>Email Settings</h4>
                <p>Do you have a careers email ID that candidates directly apply to(like jobs@yourcompany.com)? You can automatically bring those candidates into Freshteam by forwarding emails from your careers email ID(say, jobs@yourcompany.com) to careers@rudrainnovatives.freshteam.com</p>
                <h4 className="mt-3">Where is this shown/used?</h4>
                <p>Any Email sent to your Careers Email ID will appear under <strong>Recruit&gt;Conversations </strong>tab. Any Resume sent to your Careers Email ID will be shown under the filter <strong> Email Applicants </strong> under <br /> <strong> Recruit&gt;Candidates.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>{/**/}
    </div>{/**/}
  </div>{/**/}
 <EmailModal />
</div>
        </>
    )
}

export default Email
