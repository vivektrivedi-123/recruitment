import React from 'react'

function EmpTab() {
    return (
        <>
          <div className="tab-pane" id="settings-b1">{/*Employee tab*/}
                    <ul className="list-group preferences">
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Auto-generated Employee IDs</h4>
                            <p>Turn On and Off the Employee ID generation.</p>
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
                            <h4 className="font-600 text-info mb-2">Set the Notice period of the Company</h4>
                            <p>The suggested exit date by the system is dependent on notice period of the company</p>
                          </div>
                          <div id="tooltip-preferences21">
                            <input 
                              type="checkbox" 
                              id="switch4" 
                              defaultChecked 
                              data-switch="success" 
                              disabled 
                              />
                            <label htmlFor="switch4" data-off-label="Disabled" data-on-label="Enabled" data-bs-container="#tooltip-preferences21" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Enable Employee Automatic Termination</h4>
                            <p>Employees in Offboarding Queue who are past their Exit date will be automatically terminated. You can still edit the termination date or revoke termination for these Employees.</p>
                          </div>
                          <div id="tooltip-preferences21">
                            <input 
                              type="checkbox" 
                              id="switch4" 
                              defaultChecked 
                              data-switch="success" 
                              disabled 
                              />
                            <label htmlFor="switch4" data-off-label="Disabled" data-on-label="Enabled" data-bs-container="#tooltip-preferences21" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="font-600 text-info mb-2">Resignation Approval Sequence</h4>
                            <p>You can choose the Approvers in Resignation workflow here. In any case, Resignation requests raised by HR Partners are auto-approved while the ones raised by the Manager will go for approval to the HR Partner.</p>
                          </div>
                          <div id="tooltip-preferences21">
                            <input 
                              type="checkbox" 
                              id="switch4" 
                              defaultChecked 
                              data-switch="success" 
                              disabled 
                              />
                            <label htmlFor="switch4" data-off-label="Disabled" data-on-label="Enabled" data-bs-container="#tooltip-preferences21" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable" style={{width: 82, height: 24, padding: 12}} />
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="form-check form-check-inline">
                            <input 
                              type="radio" 
                              id="customRadio3" 
                              name="customRadio1" 
                              className="form-check-input" 
                              defaultChecked 
                              />
                            <label className="form-check-label" htmlFor="customRadio3">HR Partner only</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input 
                              type="radio" 
                              id="customRadio4" 
                              name="customRadio1" 
                              className="form-check-input" 
                              />
                            <label className="form-check-label" htmlFor="customRadio4">Reporting Manager followed by HR Partner</label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>   
        </>
    )
}

export default EmpTab
