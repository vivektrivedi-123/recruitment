import React, { useState } from 'react'

function GeneralTab() {
    const[state,setState]=useState({})
    return (
        <>
             <div className="tab-pane show active" id="home-b1">
                    <ul className="list-group preferences">
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Recruitment and Talent Management</h4>
                            <p>Turn On/Off the Recruitment and Talent Management Module</p>
                          </div>
                          <div>
                            <input 
                              type="checkbox" 
                              id="switch2" 
                              defaultChecked 
                              data-switch="success" 
                              disabled 
                              />
                            <label htmlFor="switch2" data-on-label="Enabled" data-off-label="Disabled" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Employee Information System</h4>
                            <p>Turn On/Off the Human Resource Information System</p>
                          </div>
                          <div id="tooltip-preferences">
                            <input 
                              type="checkbox" 
                              id="switch3" 
                              defaultChecked 
                              data-switch="success" 
                              />
                            <label htmlFor="switch3" data-on-label="Enabled" data-off-label="Disabled" data-bs-container="#tooltip-preferences" data-bs-toggle="tooltip" data-bs-placement="top" title="Disable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Time Off</h4>
                            <p>Turn On/Off TimeOff feature for Employees</p>
                          </div>
                          <div id="tooltip-preferences">
                            <input 
                              type="checkbox" 
                              id="switch4" 
                              defaultChecked 
                              data-switch="success" 
                              disabled 
                              />
                            <label htmlFor="switch4" data-off-label="Disabled" data-on-label="Enabled" data-bs-container="#tooltip-preferences" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Employee Offboarding</h4>
                            <p>Turn On/Off Offboarding Module. While the module is off, the basic Termination approval inside an Employee profile is still available for the Manager &amp; HR Partner</p>
                          </div>
                          <div id="tooltip-preferences">
                            <input 
                              type="checkbox" 
                              id="switch4" 
                              defaultChecked 
                              data-switch="success" 
                              disabled 
                              />
                            <label htmlFor="switch4" data-off-label="Disabled" data-on-label="Enabled" data-bs-container="#tooltip-preferences" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Employee Onboarding</h4>
                            <p>Turn On/Off Onboarding Module.</p>
                          </div>
                          <div id="tooltip-preferences">
                            <input 
                               type="checkbox" 
                               id="switch4" 
                               defaultChecked 
                               data-switch="success" 
                               disabled 
                               />
                            <label htmlFor="switch4" data-off-label="Disabled" data-on-label="Enabled" data-bs-container="#tooltip-preferences" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
        </>
    )
}

export default GeneralTab
