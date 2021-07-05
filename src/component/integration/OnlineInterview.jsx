import React from 'react'

function OnlineInterview() {
    return (
        <>
            <h4 className="text-info">Online Interviews
                </h4>
                <ul className="list-group preferences">
                  <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">HackerRank CodePair</h4>
                        <p className="pe-md-5 me-md-5">HackerRank CodePair is a platform that helps you assess tech candidates through online interviews with code challenges.  
                        </p>
                      </div>
                      <div className=" ms-auto text-end">
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
                    </div>
                  </li>
                  <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">Google Hangouts</h4>
                        <p className="pe-md-5 me-md-5">Let your talent acquisition team and hiring panel members evaluate candidates by using Google Hangouts.  
                        </p>
                      </div>
                      <div className=" ms-auto text-end">
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
                    </div>
                  </li>
                  <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">Google Meet</h4>
                        <p className="pe-md-5 me-md-5">Let your hiring team evaluate candidates over video interviews by using Google Meet  
                        </p>
                      </div>
                      <div className=" ms-auto text-end">
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
                    </div>
                  </li>
                  <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">Zoom</h4>
                        <p className="pe-md-5 me-md-5">Let your hiring team evaluate candidates over video interviews by using Zoom 
                        </p>
                      </div>
                      <div className=" ms-auto text-end">
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
                    </div>
                  </li>
                </ul>
        </>
    )
}

export default OnlineInterview
