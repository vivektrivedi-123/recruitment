import React from 'react'

function JobBoards() {
    return (
        <>
         
         <h4 className="text-info">Job Boards
                </h4>
                <ul className="list-group preferences">
                  <li className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <div className="accordion custom-accordion" id="custom-accordion-one">
                          <div className="card mb-0">
                            <div className="card-header bg-white p-0" id="headingFour">
                              <h5 className="m-0">
                                <a className="custom-accordion-title d-block py-1" data-bs-toggle="collapse" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                  <div className="d-flex">
                                    <div>
                                      <h4 className="font-600 text-info mb-1">Indeed
                                      </h4>
                                      <p className="pe-md-5 me-md-5 fw-normal">Publish free and Sponsored Job posts directly from Freshteam when you connect your Indeed Employer account
                                      </p>
                                      <i className="mdi mdi-chevron-down accordion-arrow fs-3" />
                                    </div>
                                  </div>
                                </a>
                              </h5>
                            </div>
                            <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-bs-parent="#custom-accordion-one">
                              <div className="card-body">
                                ...
                              </div>
                            </div>
                          </div>
                        </div>
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
                        <h4 className="font-600 text-info mb-1">Facebook Jobs
                        </h4>
                        <p className="pe-md-5 me-md-5">Post free jobs on Facebook Jobs directly from Freshteam and reach out to millions of potential candidates. 
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
                        <h4 className="font-600 text-info mb-1">LinkedIn
                        </h4>
                        <p className="pe-md-5 me-md-5">Publish free Job posts directly from Freshteam when you connect your company's LinkedIn account. 
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

export default JobBoards
