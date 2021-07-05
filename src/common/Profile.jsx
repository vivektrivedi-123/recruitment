import React from 'react'

function Profile() {
    return (
       <>
        <ul className="nav nav-pills bg-nav-pills px-sm-4 align-items-center" style={{backgroundColor: '#f7f7f7!important'}}>
                      <li className="nav-item">
                        <a href="#home1" data-bs-toggle="tab" aria-expanded="false" className="nav-link rounded-0 active">
                          <i className="mdi mdi-home-variant d-md-none d-block" />
                          <span className="d-none d-md-block">Documents</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#profile1" data-bs-toggle="tab" aria-expanded="true" className="nav-link rounded-0">
                          <i className="mdi mdi-account-circle d-md-none d-block" />
                          <span className="d-none d-md-block">Application Details</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#settings1" data-bs-toggle="tab" aria-expanded="false" className="nav-link rounded-0">
                          <i className="mdi mdi-settings-outline d-md-none d-block" />
                          <span className="d-none d-md-block">Resume Data</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane p-sm-4 bg-white show active" id="home1">
                        <div className="align-middle me-sm-2 d-flex">
                          <a href="#" className="border border-grey d-flex text-info position-relative me-sm-3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="font-600 bg-light p-sm-2">Resume</div>
                            <div className="p-sm-2 dropdown-toggle">
                              Ritesh(Resume).doc
                            </div>
                          </a>
                          <div className="dropdown-menu m-0 p-0" aria-labelledby="dropdownMenuButton">
                            <ul className="mb-0">
                              <li className="dropdown-item d-flex justify-content-between align-middle p-0">
                                <div className="bg-light d-flex align-items-center" style={{padding: '1.9rem'}}>
                                  Resume
                                </div>
                                <a href="#" className="p-0">
                                </a><div className="d-flex justify-content-between bg-white" style={{padding: '1.9rem'}}><a href="#" className="p-0">
                                    <div>
                                      <p className="font-600 text-info mb-0">Ritesh(Resume).doc</p>
                                      <p className="text-info mb-0">Apr 19, 2021, 17.4 kb</p>
                                    </div>
                                  </a><div className="d-flex" id="tooltip-container2"><a href="#" className="p-0">
                                    </a><a href="#" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Download"><i className="mdi mdi-download" /></a>
                                    <a href="#" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><i className="mdi mdi-trash-can-outline" /></a></div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <button className="btn btn-outline-secondary position-relative" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+ Attach</button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{margin: 0}}>
                            <ul>
                              <li className="dropdown-item d-flex justify-content-between align-middle">
                                <div>
                                  <i className="mdi mdi-account-box-outline me-1 fs-4" /> Resume
                                </div>
                                <div>
                                  &lt; 2MB
                                </div>
                              </li>
                              <li className="dropdown-item d-flex justify-content-between align-middle">
                                <div>
                                  <i className="mdi mdi-card-account-details-outline me-1 fs-4" /> Cover Letter
                                </div>
                                <div>
                                  &lt; 2MB
                                </div>
                              </li>
                              <li className="dropdown-item d-flex justify-content-between align-middle">
                                <div>
                                  <i className="mdi mdi-account-circle-outline me-1 fs-4" /> Portfolio
                                </div>
                                <div>
                                  &lt; 15MB
                                </div>
                              </li>
                              <li className="dropdown-item d-flex justify-content-between align-middle">
                                <div>
                                  <i className="mdi mdi-attachment mdi-rotate-45 me-1 fs-4" /> Other
                                </div>
                                <div>
                                  &lt; 15MB
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <object width="100%" height="600px" className="mt-sm-4" data="https://writing.colostate.edu/guides/documents/resume/functionalSample.pdf" />
                      </div>
                      <div className="tab-pane p-sm-4 bg-white" id="profile1">
                        <div className="d-flex">
                          <h4 className="font-600 m-0">Application form details</h4>
                          <button className="btn btn-outline-secondary ms-sm-3" data-bs-toggle="modal" data-bs-target="#application-modal"><i className="mdi mdi-book-edit-outline" /> Edit</button>
                        </div>
                        <div className="mt-sm-3">
                          <label className="fw-normal">Relevant Experience ( in Years)</label>
                          <p className="font-600 mb-3">3.8</p>
                        </div>
                        <div>
                          <label className="fw-normal">Current Salary</label>
                          <p className="font-600 mb-3">5.40 LAC/ANNUM</p>
                        </div>
                        <div>
                          <label className="fw-normal">Expected Salary</label>
                          <p className="font-600 mb-3">7.20 LAC/ANNUM</p>
                        </div>
                        <div>
                          <label className="fw-normal">Notice Period</label>
                          <p className="font-600 mb-3">30 - 45 Days</p>
                        </div>
                        <div>
                          <label className="fw-normal">Reason for job change</label>
                          <p className="font-600 mb-3">Management issues</p>
                        </div>
                        <div>
                          <label className="fw-normal">Permanent Address</label>
                          <p className="font-600 mb-3">C-46 NFL Township Panipat</p>
                        </div>
                        <div>
                          <label className="fw-normal">Current Location</label>
                          <p className="font-600 mb-3">Mohali</p>
                        </div>
                        <div>
                          <label className="fw-normal">Are you comfortable with Chandigarh/ Mohali Location</label>
                          <p className="font-600 mb-3">Yes</p>
                        </div>
                        <div>
                          <label className="fw-normal">Are you open for work from office operations</label>
                          <p className="font-600 mb-3">Yes</p>
                        </div>
                        <div>
                          <label className="fw-normal">Do you have 1+ years of experience as a Dot Net Developer?   </label>
                          <p className="font-600 mb-3">Yes</p>
                        </div>
                        <div>
                          <label className="fw-normal">Do you have hand on experience on MVC</label>
                          <p className="font-600 mb-3">Yes</p>
                        </div>
                        <div>
                          <label className="fw-normal">Do you have working experience wit GIT</label>
                          <p className="font-600 mb-3">Yes</p>
                        </div>
                        <div>
                          <label className="fw-normal">Can you work independently?</label>
                          <p className="font-600 mb-3">Yes</p>
                        </div>
                        <div>
                          <label className="fw-normal">Technical Skills - Expert Level</label>
                          <p className="font-600 mb-3">C# .Net MVC</p>
                        </div>
                        <div>
                          <label className="fw-normal">Technical Skills - Tntermediate level</label>
                          <p className="font-600 mb-3">Xamarin,Salesforce</p>
                        </div>
                        <div>
                          <label className="fw-normal">Technical Skills - Beginner Level</label>
                          <p className="font-600 mb-3">Angular</p>
                        </div>
                        <hr />
                        <div className="d-flex">
                          <h4 className="font-600 m-0">Personal Details</h4>
                          <button className="btn btn-outline-secondary ms-sm-3" data-bs-toggle="modal" data-bs-target="#user-modal"><i className="mdi mdi-book-edit-outline" /> Edit</button>
                        </div>
                        <div className="mt-sm-3">
                          <label className="fw-normal">Gender</label>
                          <p className="font-600 mb-3">-</p>
                        </div>
                        <div>
                          <label className="fw-normal">Date of Birth</label>
                          <p className="font-600 mb-3">-</p>
                        </div>
                        <hr />
                        <div className="d-flex">
                          <h4 className="font-600 m-0">EEO Details</h4>
                          <button className="btn btn-outline-secondary ms-sm-3" data-bs-toggle="modal" data-bs-target="#EEO-modal"><i className="mdi mdi-book-edit-outline" /> Edit</button>
                        </div>
                        <div className="mt-sm-3">
                          <label className="fw-normal">EEO Gender</label>
                          <p className="font-600 mb-3">-</p>
                        </div>
                        <div>
                          <label className="fw-normal">EEO Veteran</label>
                          <p className="font-600 mb-3">-</p>
                        </div>
                        <div>
                          <label className="fw-normal">EEO Ethnicity</label>
                          <p className="font-600 mb-3">-</p>
                        </div>
                        <div>
                          <label className="fw-normal">EEO Disabled</label>
                          <p className="font-600 mb-3">-</p>
                        </div>
                        <hr />
                      </div>
                      <div className="tab-pane p-sm-4 bg-white vh-100 overflow-scroll" id="settings1">
                        <div className="d-flex ">
                          <div className="align-items-center d-flex">
                            <i className=" dripicons-user-id fs-2 align-middle" />
                            <h4 className="font-600 m-0 align-middle ms-sm-2">Summary</h4>
                          </div>
                          <button className="btn btn-outline-secondary ms-sm-3" data-bs-toggle="modal" data-bs-target="#summary-modal">+ Add</button>
                        </div>
                        <div className="alert alert-light bg-light text-dark border-0 text-center my-sm-4 py-sm-2" role="alert">
                          No Records
                        </div>
                        <hr />
                        <div className="d-flex mt-sm-4">
                          <div className="align-items-center d-flex">
                            <i className=" mdi mdi-seal mdi-24px" />
                            <h4 className="font-600 m-0 align-middle ms-sm-2">Experience</h4>
                          </div>
                          <button className="btn btn-outline-secondary ms-sm-3" data-bs-toggle="modal" data-bs-target="#experience-modal"><i className="mdi mdi-book-edit-outline" /> Edit</button>
                        </div>
                        <div className="mt-sm-3">
                          <label className="font-600">Senior Dotnet and Xamarin Developer @ COGNITER TECHNOLOGIES</label>
                          <p className=" mb-3 fw-normal">November 2018 - Present ( 2 years 6 months )</p>
                        </div>
                        <div className="mt-sm-3">
                          <label className="font-600">Sr Software Engineer @ Cogniter Technologies</label>
                          <p className=" mb-3 fw-normal">October 2018 - Present ( 2 years 7 months )</p>
                        </div>
                        <div className="mt-sm-3">
                          <label className="font-600">Dotnet Developer @ VIACT SYSTEMS</label>
                          <p className=" mb-3 fw-normal">September 2017 - November 2018 ( 1 years 3 months )</p>
                        </div>
                        <div className="mt-sm-3">
                          <label className="font-600">@ Vity Mobi Systems</label>
                          <p className=" mb-3 fw-normal">January 2017 - June 2017 ( 0 years 6 months )</p>
                        </div>
                        <hr />
                        <div className="d-flex mt-sm-4">
                          <div className="align-items-center d-flex">
                            <i className=" mdi mdi-school-outline mdi-24px" />
                            <h4 className="font-600 m-0 align-middle ms-sm-2"> Education </h4>
                          </div>
                          <button className="btn btn-outline-secondary ms-sm-3" data-bs-toggle="modal" data-bs-target="#education-modal"><i className="mdi mdi-book-edit-outline" /> Edit</button>
                        </div>
                        <div className="mt-sm-2">
                          <label className="font-600">Chitkara Uni <span className="fw-normal">btech, 2013 - 2017</span></label>
                        </div>
                        <div className="mt-sm-2">
                          <label className="font-600">Chitkara University <span className="fw-normal">B.E. ECE, 2013 - 2017</span></label>
                        </div>
                        <div className="mt-sm-2">
                          <label className="font-600">C.B.S.E <span className="fw-normal">Class XII, 2012 - 2013</span></label>
                        </div>
                        <div className="mt-sm-2">
                          <label className="font-600">C.B.S.E <span className="fw-normal">Class X, 2010 - 2011</span></label>
                        </div>
                        <hr />
                        <div className="d-flex mt-sm-4">
                          <div className="align-items-center d-flex">
                            <i className=" mdi mdi-radar mdi-24px" />
                            <h4 className="font-600 m-0 align-middle ms-sm-2"> Skills and Expertise </h4>
                          </div>
                          <button className="btn btn-outline-secondary ms-sm-3" data-bs-toggle="modal" data-bs-target="#skills-experties-modal"><i className="mdi mdi-book-edit-outline" /> Edit</button>
                        </div>
                        <div className="mt-sm-2">
                          <label className="fw-normal"><span className="comma-right">AJAX</span>
                            <span className="comma-right">API</span>
                            <span className="comma-right">APPLICATION SOFTWARE</span>
                            <span className="comma-right">BOOTSTRAP</span>
                            <span className="comma-right">C#</span>
                            <span className="comma-right">CSS</span>
                            <span className="comma-right">EAGER TO LEARN</span>
                            <span className="comma-right">ENTITY FRAMEWORK</span>
                            <span className="comma-right">FRAMEWORK</span>
                            <span className="comma-right">HTML</span>
                            <span className="comma-right">HTML 5</span>
                            <span className="comma-right">JAVASCRIPT</span>
                            <span className="comma-right">JQUERY</span>
                            <span className="comma-right">JSON</span>
                            <span className="comma-right">MVC</span>
                            <span className="comma-right">MYSQL</span>
                            <span className="comma-right">oops</span>
                            <span className="comma-right">PHP</span>
                            <span className="comma-right">RESTFUL</span>
                            <span className="comma-right">SQL</span>
                            <span className="comma-right">VISUAL STUDIO</span>
                            <span className="comma-right">WEB API</span>
                            <span className="comma-right">Wordpress</span>
                            <span className="comma-right">LINQ</span></label>
                        </div>
                      </div>
                    </div>
       </>
    )
}

export default Profile
