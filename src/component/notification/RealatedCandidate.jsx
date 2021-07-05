 import React, { useState } from 'react'

function RelatedCandidate() {
  const [state,setState]=useState({
    check1:false,
    check2:true,
    check3:true,
    check4:true,
    check5:true,
    check6:true,
    check7:true,
    check8:true,
    check9:true,
    check10:false,
    check11:false,
    check12:true,
    check13:false
  })

  const handleChecked=(e)=>{
    const{name,checked}=e.target;
    setState({...state,[name]:checked})
  }
    return (
        <>
                  <h4 className="text-info ps-1 mt-4">Related to Candidates</h4>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch5"
                              name="check1"
                              onChange={handleChecked}
                              checked={state.check1} 
                              />
                            <label className="form-check-label" htmlFor="customSwitch5">New candidate applied</label>
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
                            <label className="form-check-label" htmlFor="customSwitch5">Employee pursued a job posting as career</label>
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
                            <label className="form-check-label" htmlFor="customSwitch5">New referral candidate added</label>
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
                              name="check4"
                              checked={state.check4}
                              onChange={handleChecked}
                             />
                            <label className="form-check-label" htmlFor="customSwitch5">New email application request created</label>
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
                            <label className="form-check-label" htmlFor="customSwitch5">Hire Duplicates (Sent to recruiters)</label>
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
                              onChange={handleChecked}
                              checked={state.check6}
                              />
                            <label className="form-check-label" htmlFor="customSwitch5">Candidate unsnoozed</label>
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
                              checked={state.check7}
                              onChange={handleChecked} 
                              />
                            <label className="form-check-label" htmlFor="customSwitch5">Added as follower (Sent to followers)</label>
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
                            <label className="form-check-label" htmlFor="customSwitch5">Added as follower via bulk actions (Sent to followers)</label>
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
                             onChange={handleChecked}
                             checked={state.check9}
                              />
                            <label className="form-check-label" htmlFor="customSwitch5">Cool Off Overridden (Sent to admins)</label>
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
                              onChange={handleChecked}
                              checked={state.check10} 
                              />
                            <label className="form-check-label" htmlFor="customSwitch5">Added as follower - Daily summary (Sent to followers)</label>
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
                            <label className="form-check-label" htmlFor="customSwitch5">Weekly recruitment update on candidates to followers</label>
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
                              onChange={handleChecked}
                              checked={state.check12}
                              />
                            <label className="form-check-label" htmlFor="customSwitch5">Candidate update to owners</label>
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
                                onChange={handleChecked}
                                checked={state.check13} 
                                />
                            <label className="form-check-label" htmlFor="customSwitch5">Batch of candidates shared with you</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                          </div>
                      </li>   
        </>
    )
}

export default RelatedCandidate
