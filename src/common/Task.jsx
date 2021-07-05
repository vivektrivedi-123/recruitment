import React from 'react'

function Task() {
    return (
        <>
            <h3 className="text-info mb-sm-4">Jot down candidate specific to-dos here.</h3>
                    <h4 className="text-info">New Task</h4>
                    <div className="bg-light d-flex justify-content-between p-sm-2 border-top mb-3">
                      <label className="fw-normal">Created by: <span className="font-600">Me</span></label>
                      <label className="fw-normal">Related To: <span className="font-600">Ritesh Sanan</span></label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-sm-2 mb-3">
                      <div>
                        <div className="d-flex ">
                          <div className="avatar-md">
                            <span className="avatar-title bg-danger rounded-circle h-75 w-75 mx-auto fs-3">
                              G
                            </span>
                          </div>
                          <div>
                            <p className="fw-normal text-info mb-0 mt-sm-1">Assigned To</p>
                            <a href="#" className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Me</a>
                            <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton1" style={{margin: 0}}>
                              <div className="p-2">
                                <input className="ember-power-select-search-input form-control" aria-controls="ember-power-select-options-ember2026" placeholder="Add Assignee" type="search" />
                              </div>
                              <ul>
                                <li>
                                  <a className href="#">
                                    <span className="relative align-middle avatar-circle d-inline-block me-1 defaultColor">
                                      M
                                    </span>
                                    Me</a>
                                </li><li>
                                  <a className href="#">
                                    <span className="relative align-middle avatar-circle d-inline-block me-1 defaultColor">
                                      G
                                    </span>
                                    Gaurav Aery</a>
                                </li>
                                <li>
                                  <a className href="#">
                                    <span className="relative align-middle avatar-circle d-inline-block me-1 defaultColor">
                                      A
                                    </span>
                                    Amit Kumar</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button type="button" className="btn btn-outline-secondary dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Open</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{margin: 0}}>
                          <a className="dropdown-item d-flex justify-content-between" href="#">
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="customCheck1" />
                              <label className="form-check-label position-sticky" htmlFor="customCheck1">Open</label>
                            </div>
                            <i className=" dripicons-checkmark float-end" />
                          </a>
                          <a className="dropdown-item d-flex justify-content-between" href="#">
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="customCheck1" />
                              <label className="form-check-label position-sticky" htmlFor="customCheck1">In Progress</label>
                            </div>
                          </a>
                          <a className="dropdown-item d-flex justify-content-between" href="#">
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="customCheck1" defaultChecked />
                              <label className="form-check-label position-sticky" htmlFor="customCheck1">Completed</label>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="field mb-3">
                        <input className="form-control" type="text" name="Category" id="Category" placeholder="Search..." />
                        <label htmlFor="Category" className="w-auto font-600" style={{left: '10px!important'}}>Task Name <sup className="text-danger">*</sup></label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: 150}} defaultValue={""} />
                        <label htmlFor="floatingTextarea" style={{left: '10px!important'}}>Description</label>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input type="text" className="form-control" data-toggle="input-mask" data-mask-format="00/00/0000" placeholder="Due Date" />
                        </div>
                      </div>
                      <div className="col-md-6 text-end">
                        <div className="dropdown mb-3">
                          <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Remind before
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">15 Minutes</a>
                            <a className="dropdown-item" href="#">30 Minutes</a>
                            <a className="dropdown-item" href="#">an hour</a>
                            <a className="dropdown-item" href="#">2 hours</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-info">save</button>
        </>
    )
}

export default Task
