import React from 'react'

function GenTab() {
    return (
        <>
        <div className="tab-pane" id="general">{/*general tab*/}
                    <ul className="list-group preferences">
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch1" 
                              defaultChecked 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">Activation email</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <h4 className="text-info ps-1 mt-3">Profile Notifications</h4>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="customSwitch1" 
                                defaultChecked 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">New Reportee added</label>
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
                                id="customSwitch1" 
                                defaultChecked
                             />
                            <label className="form-check-label" htmlFor="customSwitch1">Private Note added</label>
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
                                id="customSwitch1" 
                                defaultChecked 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">Personal Information Updated</label>
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
                                id="customSwitch1" 
                                defaultChecked 
                                />
                            <label className="form-check-label" htmlFor="customSwitch1">Job Information Updated</label>
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
                                id="customSwitch1" 
                                defaultChecked 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">Compensation Information Updated</label>
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
                                id="customSwitch1" 
                                defaultChecked 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">Weekly Birthday Notifications to team</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <h4 className="text-info ps-1 mt-3">Security</h4>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="customSwitch1" 
                                defaultChecked 
                                />
                            <label className="form-check-label" htmlFor="customSwitch1">New employee added (sent as weekly summary)</label>
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
                                id="customSwitch1" 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">New employee added (sent for each employee)</label>
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
                                id="customSwitch1" 
                                defaultChecked 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">Employee privilege changed</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <h4 className="text-info ps-1 mt-3">Exit</h4>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="customSwitch1" 
                                defaultChecked 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">Exit Requested (Sent to Employee/Reporting Manager/HR Partner)</label>
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
                                id="customSwitch1" 
                                defaultChecked 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">Exit Revoked (Sent to Employee/Reporting Manager/HR Partner)</label>
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
                                id="customSwitch1" 
                                defaultChecked 
                                />
                            <label className="form-check-label" htmlFor="customSwitch1">Exit Approved (Sent to Reporting Manager/Employee)</label>
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
                                id="customSwitch1" 
                                defaultChecked 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">Exit Initiated By Admin/HR Partner (Sent to Reporting Manager/Employee)</label>
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
                                id="customSwitch1" 
                                defaultChecked 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">Exit Processed (Sent to Reporting Manager)</label>
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
                                id="customSwitch1" 
                                defaultChecked 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">Exit Rejected By Admin/HR Partner (Sent to Employee/Reporting Manager)</label>
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
                                id="customSwitch1" 
                                defaultChecked 
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">Exit Approval Reminder(Sent to Approvers)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch1">Exit Partially Approved (Sent to Employee)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch1">Termination Revoked (Sent to Employee/Reporting Manager/HR Partner)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch1">Exit Details Updated</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch1">Termination Not Processed (Sent to HR Partner)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <h4 className="text-info ps-1 mt-3">Transfer</h4>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch1">Transfer Requested (Sent to Employee/Reporting Manager/HR Partner)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch1">Transfer Revoked (Sent to Employee/Reporting Manager/HR Partner)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch1">Transfer Approved (Sent to Reporting Manager/Employee)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch1">Transfer Rejected By Admin/HR Partner (Sent to Reporting Manager/HR Partner)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch1">Transfer Initiated By Admin/HR Partner (Sent to Reporting Manager/Employee)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch1">Transfer Approval Reminder (Sent to HR Partner)</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <h4 className="text-info ps-1 mt-3">Job Updates</h4>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch1">Job Update Initiated</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch1">Job Update Revoked</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <h4 className="text-info ps-1 mt-3">Autopilot Notifications</h4>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" />
                            <label className="form-check-label" htmlFor="customSwitch1">Autoassign HR Partner: Employee did not match any rules</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch1" />
                            <label className="form-check-label" htmlFor="customSwitch1">Autoassign Additional HR Partner: Employee did not match any rules</label>
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

export default GenTab
