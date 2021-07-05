import React from 'react'

function Publish() {
    return (
        <>
          <div className="dropdown">
                  <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <div className="btn-group dropdown" role="group">
                      <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-earth-plus" aria-hidden="true" /> &nbsp; Publish</button>
                      <ul className="dropdown-menu sub-dropdown p-0 dropdown-menu-end dropdown-menu-animated mt-1 shadow border" aria-labelledby="btnGroupDrop1">
                        <li>
                          <h5 className="px-3 pb-0 pt-1">CHANGE STATUS</h5>
                        </li>
                        <li>
                          <a className="dropdown-item " href="#">
                            <label htmlFor="publish"><i className="mdi mdi-earth-plus" aria-hidden="true" /> <span className="font-weight-bold"> Published </span></label>
                            <p className="mt-1 mb-0 font-weight-normal">Visible on your career and employee portal</p>
                          </a>
                        </li>
                        <hr className="m-0" />
                        <li>
                          <a className="dropdown-item" href="#">
                            <label htmlFor="Internal">
                              <i className="mdi mdi-office-building" aria-hidden="true" /> <span className="font-weight-bold"> Internal </span></label>
                            <p className="font-weight-normal mt-1 mb-0">Visible only on your employee portal</p>
                          </a>
                        </li>
                        <hr className="m-0" />
                        <li>
                          <a className="dropdown-item" href="#">
                            <label htmlFor="Private">
                              <i className="mdi mdi-lock" aria-hidden="true" /> <span className="font-weight-bold">Private </span></label>
                            <p className="font-weight-normal mt-1 mb-0"> Visible only one to your hiring team and admins </p>
                          </a>
                        </li>
                        <hr className="m-0" />
                        <li>
                          <a className="dropdown-item" href="#">
                            <label htmlFor="Private">
                              <i className="mdi mdi-pause-circle-outline" aria-hidden="true" /> <span className="font-weight-bold"> On Hold </span></label>
                            <p className="font-weight-normal mt-1 mb-0"> Freeze Job, stop adding new candidates </p>
                          </a>
                        </li>
                        <hr className="m-0" />
                        <li>
                          <a className="dropdown-item" href="#">
                            <label htmlFor="Private">
                              <i className="uil uil-check-circle" aria-hidden="true" /> <span className="font-weight-bold"> Closed </span></label>
                            <p className="font-weight-normal mt-1 mb-0"> This Job Posting has been filled </p>
                          </a>
                        </li>
                        <hr className="m-0" />
                        <li>
                          <a className="dropdown-item" href="#!">
                            <label htmlFor="Private">
                              <i className="uil uil-trash-alt" aria-hidden="true" /> <span className="font-weight-bold"> Delete </span></label>
                            <p className="font-weight-normal mt-1 mb-0"> Move this Job Posting to trash </p>
                          </a>
                        </li>
                        <hr className="m-0" />
                        <li>
                          <a className="dropdown-item" href="#">
                            <label htmlFor="Private">
                              <span className="font-weight-bold"> Share </span>
                            </label>
                            <p className="font-weight-normal mt-1 mb-0">
                            </p><ul className="p-0 d-flex">
                              <li> <i className="mdi mdi-linkedin d-inline-block linkedin-color font-20 pe-2" /> </li>
                              <li> <i className="mdi mdi-facebook d-inline-block facebook-color font-20 pe-2" /> </li>
                              <li> <i className="mdi mdi-twitter d-inline-block twitter-color font-20 pe-2" /></li>
                              <li> <i className="mdi mdi-email-outline d-inline-block email-color font-20 pe-2" /></li>
                            </ul>
                            <p />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
        </>
    )
}

export default Publish
