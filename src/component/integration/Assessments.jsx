import React from 'react'

function Assessments() {
    return (
        <>
        <h4 className="text-info">Assessments</h4>
               <ul className="list-group preferences">
                  <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">HackerRank</h4>
                        <p className="pe-md-5 me-md-5">HackerRank is a platform that helps you assess tech candidates through programming code challenges. You can customize online tests and quizzes and receive grades almost instantly.  
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
                        <h4 className="font-600 text-info mb-1">ClassMarker</h4>
                        <p className="pe-md-5 me-md-5">ClassMarker is a testing service that helps you to create, send and instantly grade online tests while recruiting. 
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
                        <h4 className="font-600 text-info mb-1">Codility</h4>
                        <p className="pe-md-5 me-md-5">Codility is a platform that helps you assess tech candidates through programming code challenges. You can customize online tests and quizzes and receive grades almost instantly.  
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
                        <h4 className="font-600 text-info mb-1">HackerEarth</h4>
                        <p className="pe-md-5 me-md-5">HackerEarth
                          HackerEarth is a platform that helps you assess tech candidates through programming code challenges. You can customize online tests and quizzes and receive grades almost instantly.
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

export default Assessments
