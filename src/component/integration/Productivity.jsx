import React,{useState} from 'react'

function Productivity() {
    const[check,setCheck]=useState(false)

const handleChange=(e)=>{
    console.log(e.target.checked)
    setCheck(e.target.checked)
}
    return (
        <>
                      <h4 className="text-info">Productivity</h4>
                <ul className="list-group preferences">
                <li  className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">G Suite Directory - Import</h4>
                        <p className="pe-md-5 me-md-5">Use the Directory API to create and manage users and groups for a domain, along with their aliases. Programmatically access the functionality found at the Admin console Organization and users tab. </p>
                      </div>
                      <div className=" ms-auto text-end">
                        <div id="tooltip-preferences">
                          <input 
                            type="checkbox" 
                            id="switch4" 
                            onChange={handleChange}
                            checked={check}
                           data-switch="success" />
                          <label htmlFor="switch4" data-off-label="Disabled" data-on-label="Enabled" data-bs-container="#tooltip-preferences" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable" style={{width: 82, height: 24, padding: 12}} />
                        </div>
                      </div>
                    </div>
                  </li>   
                    
                   <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">Google Calendar</h4>
                        <p className="pe-md-5 me-md-5">Let your talent acquisition team and hiring panel members stay in sync with interview schedules. (Check interviewer's availability, schedule or cancel interviews)</p>
                      </div>
                      <div className=" ms-auto text-end">
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
                    </div>
                  </li>
                  <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">Office 365 Calendar</h4>
                        <p className="pe-md-5 me-md-5">Let your talent acquisition team and hiring panel members stay in sync with interview schedules. (Check interviewer's availability, schedule or cancel interviews) </p>
                      </div>
                      <div className=" ms-auto text-end">
                        <div id="tooltip-preferences2">
                          <input 
                             type="checkbox" 
                             id="switch1" 
                             defaultChecked 
                             data-switch="success" 
                             />
                          <label htmlFor="switch1" data-on-label="Enabled" data-off-label="Disabled" data-bs-container="#tooltip-preferences2" data-bs-toggle="tooltip" data-bs-placement="top" title="Disable" style={{width: 82, height: 24, padding: 12}} />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">Google Rooms</h4>
                        <p className="pe-md-5 me-md-5">Let your talent acquisition team and hiring panel members stay in sync with interview schedules with room details. (Check room's availability, schedule or cancel interviews) </p>
                      </div>
                      <div className=" ms-auto text-end">
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
                    </div>
                  </li>
                  <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">Office365 Rooms</h4>
                        <p className="pe-md-5 me-md-5">Let your talent acquisition team and hiring panel members stay in sync with interview schedules with room details. (Check room's availability, schedule or cancel interviews)  
                        </p>
                      </div>
                      <div className=" ms-auto text-end">
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
                    </div>
                  </li>
                  <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">Office 365 Directory - Import</h4>
                        <p className="pe-md-5 me-md-5">Use the Directory API to create and manage users and groups for a domain, along with their aliases. Programmatically access the functionality found at the Admin console Organization and users tab. 
                        </p>
                      </div>
                      <div className=" ms-auto text-end">
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
                    </div>
                  </li>
                  <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">DocuSign</h4>
                        <p className="pe-md-5 me-md-5">Connect Freshteam and DocuSign to seamlessly get E-Signatures on your Offer Letters and Onboarding documents like employee contracts, NDAs, etc. 
                        </p>
                      </div>
                      <div className=" ms-auto text-end">
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
                    </div>
                  </li>
                  <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">SignEasy</h4>
                        <p className="pe-md-5 me-md-5">Connect Freshteam and SignEasy to seamlessly get E-Signatures on your Offer Letters and Onboarding documents like employee contracts, NDAs, etc. 
                        </p>
                      </div>
                      <div className=" ms-auto text-end">
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
                    </div>
                  </li> 
                </ul>   
        </>
    )
}

export default Productivity
