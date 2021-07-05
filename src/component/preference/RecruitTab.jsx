import React from 'react'

function RecruitTab() {
    return (
        <>
          <div className="tab-pane" id="profile-b1">{/*recruit tab*/}
                    <ul className="list-group preferences">
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Job Fitment Rating</h4>
                            <p>Enable or disable the option to rate a candidate’s job fitment in Freshteam.</p>
                          </div>
                          <div id="tooltip-preferences2">
                            <input 
                              type="checkbox" 
                              id="switch3" 
                              defaultChecked 
                              data-switch="success" 
                              />
                            <label htmlFor="switch3" data-on-label="Enabled" data-off-label="Disabled" data-bs-container="#tooltip-preferences2" data-bs-toggle="tooltip" data-bs-placement="top" title="Disable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Offer Management</h4>
                            <p>Turn on or Turn off the offer management module in Freshteam.</p>
                          </div>
                          <div id="tooltip-preferences2">
                            <input 
                              type="checkbox" 
                              id="switch3" 
                              defaultChecked 
                              data-switch="success" 
                              />
                            <label htmlFor="switch3" data-on-label="Enabled" data-off-label="Disabled" data-bs-container="#tooltip-preferences2" data-bs-toggle="tooltip" data-bs-placement="top" title="Disable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Skip Offer Approval</h4>
                            <p>Enable this option if you do not want any approval for making offers to candidates.</p>
                          </div>
                          <div id="tooltip-preferences2">
                            <input 
                              type="checkbox" 
                              id="switch4" 
                              defaultChecked 
                              data-switch="success" 
                              disabled 
                              />
                            <label htmlFor="switch4" data-off-label="Disabled" data-on-label="Enabled" data-bs-container="#tooltip-preferences2" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Changes on Offer</h4>
                            <p>Allow offer edits until "Offered" status</p>
                          </div>
                          <div id="tooltip-preferences2">
                            <input 
                              type="checkbox" 
                              id="switch3" 
                              defaultChecked 
                              data-switch="success" 
                              />
                            <label htmlFor="switch3" data-on-label="Enabled" data-off-label="Disabled" data-bs-container="#tooltip-preferences2" data-bs-toggle="tooltip" data-bs-placement="top" title="Disable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Parse attachments from Listener emails</h4>
                            <p>When Listener finds an attachment in your email, it'll parse it and add the candidate to your pipeline</p>
                          </div>
                          <div id="tooltip-preferences2">
                            <input 
                              type="checkbox" 
                              id="switch3" 
                              defaultChecked 
                              data-switch="success" 
                              />
                            <label htmlFor="switch3" data-on-label="Enabled" data-off-label="Disabled" data-bs-container="#tooltip-preferences2" data-bs-toggle="tooltip" data-bs-placement="top" title="Disable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Cool Off Period</h4>
                            <p>Cool off period represents the duration that a candidate is barred from re-applying after rejection.</p>
                          </div>
                          <div id="tooltip-preferences2">
                            <input 
                              type="checkbox" 
                              id="switch4" 
                              defaultChecked 
                              data-switch="success" 
                              disabled 
                              />
                            <label htmlFor="switch4" data-off-label="Disabled" data-on-label="Enabled" data-bs-container="#tooltip-preferences2" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Job Requisition Management</h4>
                            <p>Turn on or Turn off the Job Requisition Management module in Freshteam.</p>
                          </div>
                          <div id="tooltip-preferences2">
                            <input 
                              type="checkbox" 
                              id="switch4" 
                              defaultChecked 
                              data-switch="success" 
                              disabled 
                              />
                            <label htmlFor="switch4" data-off-label="Disabled" data-on-label="Enabled" data-bs-container="#tooltip-preferences2" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Neutral Feedback in Interviews</h4>
                            <p>Enabling this will allow the interviewers to give a "neutral" feedback on any candidate, in addition to the standard feedback options(Hire, Strong Hire, No Hire, Strong No Hire)</p>
                          </div>
                          <div id="tooltip-preferences2">
                            <input 
                              type="checkbox" 
                              id="switch4" 
                              defaultChecked 
                              data-switch="success" 
                              disabled 
                              />
                            <label htmlFor="switch4" data-off-label="Disabled" data-on-label="Enabled" data-bs-container="#tooltip-preferences2" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>   
        </>
    )
}

export default RecruitTab
