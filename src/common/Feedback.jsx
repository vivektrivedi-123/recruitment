import React from 'react'
import Rating from '../common/Rating'

function Feedback() {
    return (
        <>
       <div className=" overflow-conversations interview-tabs">
                <ul className="nav nav-tabs nav-bordered mb-4 bg-transparent border-top-0 mt-sm-n2">
                  <li className="nav-item">
                    <a href="#evaluation" data-bs-toggle="tab" aria-expanded="false" className="nav-link bg-transparent">
                      <i className="mdi mdi-home-variant d-md-none d-block" />
                      <span className="d-none d-md-block">Evaluation Criteria</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#comments" data-bs-toggle="tab" aria-expanded="true" className="nav-link bg-transparent">
                      <i className="mdi mdi-account-circle d-md-none d-block" />
                      <span className="d-none d-md-block">Comments</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#scorecard" data-bs-toggle="tab" aria-expanded="false" className="nav-link active bg-transparent">
                      <i className="mdi mdi-settings-outline d-md-none d-block" />
                      <span className="d-none d-md-block">Scorecard</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane px-sm-4 " id="evaluation">
                    <h4 className="text-info">Competencies to evaluate</h4>
                    <div className="bg-white rounded p-sm-3">
                      <div className="border p-sm-3">
                        <h5 className="mb-0">Interpersonal Skills</h5>
                        <small>How good are they at striking up a conversation? Have they put you at your ease?</small>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane px-sm-4" id="comments">
                    <div className="d-flex align-items-center">
                      <div className="avatar-sm">
                        <span className="avatar-title bg-primary rounded-circle">
                          <i className="mdi mdi-message-text text-white" />
                        </span>
                      </div>
                      <label className="ms-sm-2 text-primary"> Notes from interviewers and recruiters</label>
                    </div>
                    <div className="bg-white p-sm-3 mt-sm-3">
                      <div className="row">
                        <div className="col-2">
                          <div className="avatar-sm mx-sm-auto">
                            <span className="avatar-title bg-danger rounded-circle">
                              G
                            </span>
                          </div>
                        </div>
                        <div className="col-10">
                          <div className="mb-3">
                            <textarea className="form-control" id="example-textarea" rows={5} placeholder="Add comments for the next interviewer..." defaultValue={""} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane px-sm-4 show active text-info" id="scorecard">
                    <p>A scorecard has been created to help you structure your interview. Use this to submit your feedback after evaluation. Feedback is used internally and will not be shared with the candidates.</p>
                    <h4 className="fw-normal text-dark">Your Overall Recommendation</h4>
                    <div className="d-flex my-sm-3">
                      <button className="btn btn-outline-success rounded-pill"><i className="mdi mdi-thumb-up" /> Strong Hire</button>
                      <button className="btn btn-outline-success rounded-pill ms-sm-2"><i className="mdi mdi-thumb-up-outline" /> Hire</button>
                      <button className="btn btn-outline-danger rounded-pill ms-sm-2"><i className="mdi mdi-thumb-down" /> No Hire</button>
                      <button className="btn btn-outline-danger rounded-pill ms-sm-2"><i className="mdi mdi-thumb-down-outline" /> Strong No Hire</button>
                    </div>
                    <div className="bg-white rounded p-sm-3">
                      <h5>Interpersonal Skills</h5>
                      <h6 className="text-muted my-sm-3">How good are they at striking up a conversation? Have they put you at your ease?</h6>
                      <div className="d-flex align-items-center">
                        <i className="mdi mdi-star-off-outline text-muted mdi-24px" />
                        <span className="ms-sm-2" /> |
                        <div className="ms-sm-2" id="tooltip-rating">
                          <i className="mdi mdi-star-outline mdi-24px" data-bs-container="#tooltip-rating" data-bs-toggle="tooltip" data-bs-placement="top" title="Below Average" />
                          <i className="mdi mdi-star-outline mdi-24px" data-bs-container="#tooltip-rating" data-bs-toggle="tooltip" data-bs-placement="top" title="Average" />
                          <i className="mdi mdi-star-outline mdi-24px" data-bs-container="#tooltip-rating" data-bs-toggle="tooltip" data-bs-placement="top" title="Good" />
                          <i className="mdi mdi-star-outline mdi-24px" data-bs-container="#tooltip-rating" data-bs-toggle="tooltip" data-bs-placement="top" title="Very Good" />
                          <i className="mdi mdi-star-outline mdi-24px" data-bs-container="#tooltip-rating" data-bs-toggle="tooltip" data-bs-placement="top" title="Exceptional" />
                        </div>
                        {/* <Rating/> */}
                        <span className="badge badge-outline-secondary ms-sm-2 fw-normal p-sm-1">Not Accessed</span>
                      </div>
                      <div className="mt-sm-3">
                        <textarea className="form-control" id="example-textarea" rows={5} placeholder="Note" defaultValue={""} />
                      </div>
                    </div>
                    <h4 className="text-info mt-sm-3 fw-normal">Overall Comments</h4>
                    <textarea id="simplemde1" defaultValue={""} />
                  </div>
                </div>
              </div>
        </>
    )
}

export default Feedback
