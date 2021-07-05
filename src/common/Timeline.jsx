import React from 'react'

function Timeline() {
    return (
        <>
             <div className="dropdown">
                      <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Snapshot
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Snapshot <i className=" dripicons-checkmark float-end" /></a>
                        <a className="dropdown-item" href="#">Important</a>
                        <a className="dropdown-item" href="#">All Activity</a>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-70 mb-70">
                      <div className="col-md-12">
                        <div className="main-card mb-3 card shadow-none">
                          <div className="card-body">
                            <div className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                              <div className="vertical-timeline-item vertical-timeline-element">
                                <div> <span className="vertical-timeline-element-icon bounce-in"> <i className="badge rounded-pill bg-success mdi mdi-account-box-outline fs-4"> </i> </span>
                                  <div className="vertical-timeline-element-content bounce-in">
                                    <p className="fw-bold fs-5 text-info mb-0">Dot Net Developer <span className="fw-normal">Sahibzada Ajit Singh Nagar, India | Application #1</span></p>
                                    <ul className="stages candidature large mt-3" id="tooltip-container2">
                                      <li className="active">
                                        <span aria-label="Sourcing" className="hint--bottom" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="Sporcing" aria-describedby="tooltip691066">1</span>
                                      </li>
                                      <li>
                                        <span aria-label="Screening" className="hint--bottom" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Screening">2</span>
                                      </li>
                                      <li>
                                        <span aria-label="Interviews" className="hint--bottom" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Interviews">3</span>
                                      </li>
                                      <li>
                                        <span aria-label="Offer" className="hint--bottom" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Offer">4</span>
                                      </li>
                                      <li>
                                        <span aria-label="Hire" className="hint--bottom" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Hire">5</span>
                                      </li>
                                    </ul>
                                    <h5 className="text-muted">Open </h5> 
                                    <div className="d-flex align-items-center">
                                      <span className="badge badge-outline-success fw-normal fs-5"><i className="mdi mdi-check" /> Active</span>
                                      <label className="ms-sm-2 text-muted fs-5">Last updated at Apr 26, 2021</label>
                                    </div>
                                    <p className="vertical-timeline-element-date">Apr 19 2021 <br /> 12:25 PM</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
   
        </>
    )
}

export default Timeline
