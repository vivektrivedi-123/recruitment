import React from 'react'
import {Link } from 'react-router-dom'
function Summry() {
    return (
        <>
        <div className="border border-grey rounded p-3">
                      <div className="row position-relative">
                        <div clas="col-md-10">
                          <div className="row">
                            <div clas="col-md-2" />
                            <h4 className="text-info fs-4 font-600">Feedback Snapshot</h4>
                            <div className="col-md-5 mt-3">
                              <p className="text-info">Job Fitment Rating</p>
                            </div>
                            <div className="col-md-5 mt-3">
                              <div className="d-flex" id="tooltip-container2">
                                <img src="/assets/images/Piechart1.png" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Priyanka Sharma" width="20px" alt />
                                <div data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Added on April 20th 2021"><i className="mdi mdi-star" />5 | Exceptional</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <i className="mdi mdi-clipboard-check-outline mdi-48px position-absolute absolute-Icon text-muted" />
                        </div>
                      </div>
                    </div>
                    <div className="border border-grey rounded p-3 mt-3">
                      <div className="row position-relative">
                        <div className="col-md-10">
                          <Link to="/component/recruitment/EditExperience" className=" text-info fs-4 font-600" id="tooltip-container2" data-bs-toggle="modal" data-bs-target="#experience-modal">Experience 
                          <i className=" dripicons-document-edit" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Experience" /></Link>
                          <ul className="list-group list-group-flush mt-sm-3">
                            <li className="list-group-item d-flex justify-content-between align-items-end px-sm-0">
                              Senior Dotnet and Xamarin Developer ( 2 years 6 months ) <br />
                              COGNITER TECHNOLOGIES
                              <span>Nov 2018 - Present</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-end px-sm-0">
                              Sr Software Engineer ( 2 years 7 months ) <br />
                              Cogniter Technologies
                              <span>Oct 2018 - Present</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-end px-sm-0">
                              Dotnet Developer ( 1 years 3 months ) <br />
                              VIACT SYSTEMS
                              <span>Sep 2017 - Nov 2018</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-end px-sm-0">
                              ( 0 years 6 months ) <br />
                              Vity Mobi Systems
                              <span>Jan 2017 - Jun 2017</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-2"><i className="mdi mdi-account-box-multiple-outline position-absolute absolute-Icon text-muted mdi-48px" /></div>
                      </div>
                    </div>
                    <div className="border border-grey rounded p-3 mt-3">
                      <div className="row position-relative">
                        <div className="col-md-10">
                          <Link to="/component/recruitment/EditApplication" className="text-info fs-4 font-600" id=" tooltip-container2" data-bs-toggle="modal" data-bs-target="#application-modal">Application form details 
                          <i className=" dripicons-document-edit" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" /></Link>
                          <div className="my-sm-3">
                            <label className="text-muted fw-normal">Relevant Experience ( in Years)</label> <br />
                            <label className="text-info font-600">3.8</label>
                          </div>
                          <div className="my-sm-3">
                            <label className="text-muted fw-normal">Current Salary</label> <br />
                            <label className="text-info font-600">5.40 LAC/ANNUM</label>
                          </div>
                          <div className="my-sm-3">
                            <label className="text-muted fw-normal">Expected Salary</label> <br />
                            <label className="text-info font-600">7.20 LAC/ANNUM</label>
                          </div>
                          <div className="my-sm-3">
                            <label className="text-muted fw-normal">Notice Period</label> <br />
                            <label className="text-info font-600">30-45 Days</label>
                          </div>
                          <a href="https://rudraserver.com/Company-dashboard/employee-data/conversations.html#profile1" className="text-info font-600">View more</a>
                        </div>
                        <div className="col-md-2"><i className="mdi mdi-android-messages position-absolute absolute-Icon text-muted mdi-48px" /></div>
                      </div>
                    </div>
                    <div className="border border-grey rounded p-3 mt-3">
                      <div className="row position-relative">
                        <div className="col-md-10">
                          <a href="#" className=" text-info fs-4 font-600">Origin</a>
                          <div className="my-sm-3 row">
                            <div className="col-3">
                              <label className="text-muted">Source</label>
                              <div className="dropdown mt-sm-2">
                                <button className="btn btn-light d-flex justify-content-between align-items-center dropdown-toggle" style={{width: 108}} id="dropdownMenuButton11" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Linkedin
                                </button>
                                <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton11" style={{margin: 0}}>
                                  <div className="p-2">
                                    <input className="ember-power-select-search-input form-control" aria-controls="ember-power-select-options-ember2026" placeholder="Search" type="search" />
                                  </div>
                                  <ul>
                                    <li>
                                      <a className href="#">
                                        Adzuna</a>
                                    </li>
                                    <li>
                                      <a className href="#">
                                        Direct</a>
                                    </li>
                                    <li>
                                      <a className href="#">
                                        Facebook</a>
                                    </li>
                                    <li>
                                      <a className href="#">
                                        FB Page Tab</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <label className="text-muted">Source Category</label>
                              <div className="dropdown mt-sm-2">
                                <button className="btn btn-light d-flex justify-content-between align-items-center dropdown-toggle" style={{width: 108}} id="dropdownMenuButton11" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Portal
                                </button>
                                <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton11" style={{margin: 0}}>
                                  <div className="p-2">
                                    <input className="ember-power-select-search-input form-control" aria-controls="ember-power-select-options-ember2026" placeholder="Search" type="search" />
                                  </div>
                                  <ul>
                                    <li>
                                      <a className href="#">
                                        Advertisement</a>
                                    </li>
                                    <li>
                                      <a className href="#">
                                        Agencies</a>
                                    </li>
                                    <li>
                                      <a className href="#">
                                        Email</a>
                                    </li>
                                    <li>
                                      <a className href="#">
                                        Events</a>
                                    </li>
                                    <li>
                                      <a className href="#">
                                        Free Job Boards</a>
                                    </li>
                                    <li>
                                      <a className href="#">
                                        Portal</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2"><i className="mdi mdi-radar position-absolute absolute-Icon text-muted mdi-48px" /></div>
                      </div>
                    </div>
                    <div className="border border-grey rounded p-3 mt-3">
                      <div className="row position-relative">
                        <div className="col-md-10">
                          <a href="#" className=" text-info fs-4 font-600">Tags</a>
                          <div className="my-sm-3 align-middle">
                            <div data-bs-toggle="modal" data-bs-target="#tags-modal">
                              <i className="mdi mdi-plus-circle-outline fw-bold text-start mdi-24px align-middle" /> Add Tags
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2"><i className="mdi mdi-tag-multiple-outline position-absolute absolute-Icon text-muted mdi-48px" /></div>
                      </div>
                    </div>
                    <div className="border border-grey rounded p-3 mt-3">
                      <div className="row position-relative">
                        <div className="col-md-10">
                          <a href="#" className=" text-info fs-4 font-600">Documents</a>
                          <div className="my-sm-3 row align-items-center">
                            <div className="col-md-8">
                              <div className="show-btns">
                                <div className="row align-items-center position-relative">
                                  <div className="col-2">
                                    <i className="mdi mdi-file-document text-info mdi-48px" />
                                  </div>
                                  <div className="col-9">
                                    <p className="text-info font-600 mb-0 pt-1">Ritesh(Resume).doc <span className="fw-normal">74.9 kb</span></p>
                                    <span className="badge badge-outline-secondary">Resume</span> <span className="fw-normal">April 19 2021, 10:25 am</span>
                                  </div>
                                  <div className="hover-btns position-absolute d-flex justify-content-center py-sm-2" id="tooltip-container2">
                                    <button type="button" className="btn btn-primary btn-rounded" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="View"><i className="mdi mdi-eye-outline" /> </button>
                                    <button type="button" className="btn btn-primary btn-rounded mx-sm-2" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Download"><i className="mdi mdi-cloud-download-outline" /> </button>
                                    <button type="button" className="btn btn-primary btn-rounded" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><i className="mdi mdi-trash-can-outline" /> </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <button className="btn btn-outline-secondary" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+ Attach</button>
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
                          </div>
                        </div>
                        <div className="col-md-2"><i className="mdi mdi-folder-zip-outline position-absolute absolute-Icon text-muted mdi-48px" /></div>
                      </div>
                    </div>
        </>
    )
}

export default Summry
