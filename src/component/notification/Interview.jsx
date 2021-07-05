import React, { useState } from 'react'

function Interview() {
  const[state,setState]=useState({
    check1:false,
    check2:true,
    check3:true,
    check4:true,
    check5:true,
    check6:true,
    check7:true,
    check8:true,
    check9:true,
    check10:true,
    check11:true,
    check12:true,
    check13:true
  })

const handleChecked=(e)=>{
  const{name,checked}=e.target;
  setState({...state,[name]:checked})
}

    return (
        <>
              <h4 className="text-info ps-1 mt-4">Interview</h4>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                               type="checkbox" 
                               className="form-check-input" 
                               id="customSwitch5" 
                               name="check1"
                               checked={state.check1}
                               onChange={handleChecked}
                               />
                            <label className="form-check-label" htmlFor="customSwitch5">Send Google calendar notifications for Interview Scheduled/Cancelled/Re-scheduled (Sent to Interviewers)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch5" 
                              name="check2"
                              checked={state.check2}
                              onChange={handleChecked}
                            />
                            <label className="form-check-label" htmlFor="customSwitch5">Interview scheduled for your candidate</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch5" 
                              name="check3"
                              checked={state.check3}
                              onChange={handleChecked}
                            />
                            <label className="form-check-label" htmlFor="customSwitch5">Interview scheduled (Sent to interviewers)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch5" 
                              checked={state.check4}
                              name="check4"
                              onChange={handleChecked}
                              />
                            <label className="form-check-label" htmlFor="customSwitch5">Interview cancelled</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch5" 
                              name="check5"
                              onChange={handleChecked}
                              checked={state.check5}
                              />
                            <label className="form-check-label" htmlFor="customSwitch5">Interview feedback submission overdue</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch5" 
                              name="check6"
                              checked={state.check6}
                              onChange={handleChecked}
                              />
                            <label className="form-check-label" htmlFor="customSwitch5">Interview feedback submitted</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch5" 
                              name="check7"
                              checked={state.check7 }
                              onChange={handleChecked}
                            />
                            <label className="form-check-label" htmlFor="customSwitch5">Assessment completed</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch5" 
                              name="check8"
                              checked={state.check8}
                              onChange={handleChecked}
                            />
                            <label className="form-check-label" htmlFor="customSwitch5">Interview Re-scheduled for your candidate</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch5" 
                              name="check9"
                              checked={state.check9}
                              onChange={handleChecked}
                            />
                            <label className="form-check-label" htmlFor="customSwitch5">Interview Re-scheduled (Sent to interviewers)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                               type="checkbox" 
                               className="form-check-input" 
                               id="customSwitch5" 
                               name="check10"
                               checked={state.check10}
                               onChange={handleChecked}
                               /> 

                               
                        
                            <label className="form-check-label" htmlFor="customSwitch5">Daily interview summary (Sent to interviewers)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                               type="checkbox" 
                               className="form-check-input" 
                               id="customSwitch5" 
                               name="check11"
                               checked={state.check11}
                               onChange={handleChecked}
                               />
                            <label className="form-check-label" htmlFor="customSwitch5">Interview Declined</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch5" 
                              name="check12"
                              checked={state.check12}
                              onChange={handleChecked}
                              />
                            <label className="form-check-label" htmlFor="customSwitch5">Candidate marked as No Show for an Interview (Sent to interviewer/candidate owner)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="customSwitch5" 
                                name="check13"
                                checked={state.check13}
                                onChange={handleChecked}
                                />
                            <label className="form-check-label" htmlFor="customSwitch5">Candidate marked as 'Available' for an Interview by 'Undo No Show' (Sent to interviewer/candidate owner)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>   
        </>
    )
}

export default Interview
