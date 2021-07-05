import React, { useState } from 'react'
import Switch from './Switch';

function CanTab() {
    const[state,setState]=useState({
        check1:false,
        check2:true,
        check3:true,
        check4:false,
        check5:true,
        check6:true,
        check7:true
    })

    const handleChange=(e)=>{
        const{name,checked}=e.target;
        console.log(checked)
        setState({...state,[name]:checked})
    }
    return (
        <>
            <div className="tab-pane" id="profile-b1">{/*candidate tab*/}
                    <ul className="list-group preferences">
                     <Switch name="check1" change={handleChange} value={state.check1} data="Application acknowledgement" />
                     <Switch name="check2" change={handleChange} value={state.check2} data="Email candidate request - acknowledgement" />
                    <Switch name="check3" change={handleChange} value={state.check3} data="Candidate shortlisted"/>
                    <Switch name="check4" change={handleChange} value={state.check4} data="Candidate archived to Talent pool" />
                    <Switch name="check5" change={handleChange} value={state.check5} data="Cool Off Application Received"/>
                     <Switch name="check6" data="Offer E-Signature Request (Sent to candidate)" value={state.check6} onChange={handleChange} />
                     <Switch name="check7" data="Offer E-Signature Voided (Sent to candidate)" value={state.check7} onChange={handleChange} />
                     
                      <li className="list-group-item list-group-item-action position-relative mt-4">
                        <div className="show-btns">
                          <div className="row">
                            <div className="col-lg-12">
                              <p className="mb-0"> Offer</p>
                            </div>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="row">
                            <div className="col-lg-12">
                              <p className="mb-0"> Archive to Talent pool </p>
                            </div>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="row">
                            <div className="col-lg-12">
                              <p className="mb-0"> Move to another job </p>
                            </div>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="row">
                            <div className="col-lg-12">
                              <p className="mb-0"> Send online assessment link (eg. HackerRank) </p>
                            </div>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="row">
                            <div className="col-lg-12">
                              <p className="mb-0"> Remind online assessment (eg. HackerRank) </p>
                            </div>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="row">
                            <div className="col-lg-12">
                              <p className="mb-0"> Undo Reject </p>
                            </div>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="row">
                            <div className="col-lg-12">
                              <p className="mb-0"> Unarchive </p>
                            </div>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="row">
                            <div className="col-lg-12">
                              <p className="mb-0"> Offer with E-Signature </p>
                            </div>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="row">
                            <div className="col-lg-12">
                              <p className="mb-0"> Interviews scheduled </p>
                            </div>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="row">
                            <div className="col-lg-12">
                              <p className="mb-0"> Reject template </p>
                            </div>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="row">
                            <div className="col-lg-12">
                              <p className="mb-0"> Cancel Interview </p>
                            </div>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
        </>
    )
}

export default CanTab
