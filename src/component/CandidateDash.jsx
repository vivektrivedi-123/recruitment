import React from 'react'
import Navbar from '../common/Navbar'
import Navigation from '../common/Navigation'
import Topbar from '../common/Topbar'
import './CandidateDash.css'
import CandidateDashTable from './CandidateDashTable'
import CandidateForm from './CandidateForm'
function CandidateDash() {
    return (
        <>
<div>
  <div className="wrapper">
    <div id="leftside">
        <Navbar/>
        </div>
    <div className="content-page">
      <div className="content">
        <div className="navbar-custom">
          <div id="top-bar">
              <Topbar/>
              </div>
          <div className="m-0 border-top border-bottom">
            <div className="d-flex align-items-center bg-body">
              <nav>
                <ol className="breadcrumb mb-0 border-0">
                  <li className="breadcrumb-item"><a href="#" className="font-600"><i className="dripicons-briefcase" /> Jobs</a></li>
                  <li className="breadcrumb-item active font-600" aria-current="page">Add New</li>
                </ol>
              </nav>
              <div className="d-inline-block"> 
                <button type="button" className="btn-sm border bg-white px-1">  
                  <span className="small font-12"> View jobs Detail </span> </button>
              </div>
              <div className="ms-auto pe-3">
                <div className="d-inline-block me-2">
                  <div className="btn-group justify-content-sm-end ">
                    {/* <button type="button" className="border bg-white m-0 end-bar-toggle btn btn-light"> Add candidate </button> */}
                    <button type="button" className="border bg-white m-0 end-bar-toggle btn btn-light" data-bs-toggle="modal" data-bs-target="#add-candidate"> Add candidate </button> 
                    <button type="button" className="border bg-white dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu mt-2 shadow" id="arrow" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item d-flex " href="#">
                        <div className="d-inline-block"> Bulk import resumes </div>
                      </a>
                      <a className="dropdown-item d-flex " href="#"> 
                        Import candidates from CSV </a>
                      <a className="dropdown-item d-flex " href="#">
                        From Talent Pool</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item d-flex " href="#">
                        Refer a candidate </a>
                    </div>
                  </div>
                </div>
                <div className="d-inline-block">
                  <div className="dropdown">
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                      <div className="btn-group dropdown" role="group">
                        <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-earth-plus" aria-hidden="true" /> &nbsp; Published</button>
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
                            <a className="dropdown-item" href="#">
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
                </div>
              </div>
            </div>
          </div>
          {/* /btn-group */}
        </div>
        {/*  navbar-custom */}
        <div className="container-fluid py-2">
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="dropdown">
                <span className="semi-bold text-info">All candidates</span>
                <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                  Active <span clavisss="pl-1"> (9)</span>
                </button>
                <ul className="dropdown-menu rounded" aria-labelledby="dropdownMenu2">
                  <li><button className="dropdown-item text-info semi-bold border-bottom" type="button">Candidates I Own</button></li>
                  <li><button className="dropdown-item text-info semi-bold border-bottom" type="button">All candidates</button></li>
                  <li><button className="dropdown-item text-info semi-bold border-bottom" type="button">Candidates I follow</button></li>
                  <li><button className="dropdown-item text-info semi-bold border-bottom" type="button"> New and Unassigned</button></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <ul className="list-unstyled mb-0">
                <li className="list-inline-item me-2"><i className="uil uil-list-ul fs-3" /></li>
                <li className="list-inline-item me-2"><i className="uil uil-filter fs-3" /></li>
                <li className="list-inline-item me-2"><i className="uil uil-download-alt fs-3" /></li>
              </ul>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-md-12">
              <ul className="list-unstyled mb-0">
                <li className="list-inline-item me-2">
                  <div className="candidates-detail-card position-relative all-selected-candidate shadow-none border rounded-pill bg-white pe-2 px-4 py-1">
                    <button type="button" className="border-0 bg-transparent" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Deselect all" data-bs-trigger="hover">
                      <div className="form-check position-absolute">
                        <input className="form-check-input rounded-circle " defaultChecked type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        </label>
                      </div>
                      1 Candidate selected
                    </button>
                  </div>
                </li>
                <li className="list-inline-item me-2">
                  <div className="bg-white border rounded-circle candidate-action-icons d-flex align-items-center justify-content-center">
                    <div className="dropdown ">
                      <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle after-none" type="button" id="b" data-bs-toggle="dropdown" aria-expanded="true">
                        <span type="button" className="border-0 bg-transparent" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add/Remove Followers" data-bs-trigger="hover">
                          <i className="uil uil-bell fs-4" />
                        </span>
                      </button>
                      <div className="dropdown-menu panel-members-search rounded py-0  shadow" aria-labelledby="b">
                        <div className="bg-grey p-2 d-flex align-items-center justify-content-center position-relative">
                          <input type="text" name className="form-control search-icon-input  py-2" placeholder="Search to add followers" />
                          <div className="search-icon-circle rounded-circle bg-grey-1 d-flex align-items-center justify-content-center position-absolute">
                            <i className="uil uil-search text-white" />
                          </div>
                        </div>
                        <div className="d-flex align-items-center  justify-content-center">
                          <h5 className="text-info semi-bold pt-5"> No followers</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item me-2">
                  <div className="bg-white border rounded-circle candidate-action-icons d-flex align-items-center justify-content-center">
                    <div className="dropdown ">
                      <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle after-none" type="button" id="c" data-bs-toggle="dropdown" aria-expanded="true">
                        <span className="border-0 bg-transparent" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add/Update Owner" data-bs-trigger="hover">
                          <i className="uil uil-user-plus fs-4" /></span>
                      </button>
                      <div className="dropdown-menu  col-4 rounded  mt-2 shadow arrow-left update-owner-dropdown " aria-labelledby="c" id="arrow">
                        <div className="overflow-auto p-3 ">
                          <input type="text" name className="form-control" placeholder="Search to add owner" />
                          <div>
                            <div className="d-flex mt-3 align-items-center">
                              <div className="bg-danger text-center rounded-circle text-white candidate-name me-2">G</div>
                              <div>
                                <span className="text-primary fs-4"> Gaurav Aery(Me)</span><br />
                                <span className="text-muted">gauarv@rudrainnovatives.com</span>
                              </div>
                            </div>
                            <div className="d-flex mt-2 align-items-center">
                              <div className="bg-danger text-center rounded-circle text-white candidate-name me-2">G</div>
                              <div>
                                <span className="text-primary fs-4"> Gursimaran Singh</span><br />
                                <span className="text-muted">gursimaran@rudrainnovatives.com</span>
                              </div>
                            </div>
                            <div className="d-flex mt-2 align-items-center">
                              <div className="bg-warning text-center rounded-circle text-white candidate-name me-2">M</div>
                              <div>
                                <span className="text-primary fs-4"> Mahima Mogha</span><br />
                                <span className="text-muted">mahima@rudrainnovatives.com</span>
                              </div>
                            </div>
                            <div className="d-flex mt-2 align-items-center">
                              <div className="bg-success text-center rounded-circle text-white candidate-name me-2">N</div>
                              <div>
                                <span className="text-primary fs-4"> Navneel Bhanot</span><br />
                                <span className="text-muted">navneel@rudrainnovatives.com</span>
                              </div>
                            </div>
                            <div className="d-flex mt-2 align-items-center">
                              <div className="bg-danger text-center rounded-circle text-white candidate-name me-2">G</div>
                              <div>
                                <span className="text-primary fs-4"> Gursimaran Singh</span><br />
                                <span className="text-muted">gursimaran@rudrainnovatives.com</span>
                              </div>
                            </div>
                            <div className="d-flex mt-2 align-items-center">
                              <div className="bg-primary text-center rounded-circle text-white candidate-name me-2">M</div>
                              <div>
                                <span className="text-primary fs-4"> Mahima Mogha</span><br />
                                <span className="text-muted">mahima@rudrainnovatives.com</span>
                              </div>
                            </div>
                            <div className="d-flex mt-2 align-items-center">
                              <div className="bg-success text-center rounded-circle text-white candidate-name me-2">N</div>
                              <div>
                                <span className="text-primary fs-4"> Navneel Bhanot</span><br />
                                <span className="text-muted">navneel@rudrainnovatives.com</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item me-2">
                  <div className="bg-white border   rounded-circle candidate-action-icons d-flex align-items-center justify-content-center" type="button">
                    <div className="dropdown-toggle after-none " id="icon-1" data-bs-toggle="dropdown" aria-expanded="true">
                      <button type="button" className="border-0 bg-transparent" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Move stage" data-bs-trigger="hover">
                        <i className="uil uil-line-spacing fs-4" />
                      </button>
                    </div>
                    <ul className="dropdown-menu rounded p-2 shadow" aria-labelledby="icon-1" data-popper-placement="bottom-end">
                      <li className="dropdown-item text-info px-2 dropdown-heading text-uppercase semi-bold py-1">Sourcing</li>
                      <li className="dropdown-item text-info px-2"><a href="#">Open</a></li>
                      <li className="dropdown-item text-info px-2 dropdown-heading text-uppercase semi-bold mt-2 py-1">Screening</li>
                      <li className="dropdown-item text-info px-2"><a href="#">Contacted</a></li>
                      <li className="dropdown-item text-info px-2"><a href="#">Aptitude Test</a></li>
                      <li className="dropdown-item text-info px-2 dropdown-heading text-uppercase semi-bold mt-2 py-1">Interviews</li>
                      <li className="dropdown-item text-info px-2"><a href="#">Technical assignment</a></li>
                      <li className="dropdown-item text-info px-2"><a href="#">Director Round</a></li>
                      <li className="dropdown-item text-info px-2"><a href="#">Psychometric Test</a></li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item me-2">
                  <div className="bg-white border rounded-circle candidate-action-icons d-flex align-items-center justify-content-center">
                    <div className data-bs-toggle="modal" href="#bs-example-modal-lg" role="button">
                      <button type="button" className="border-0 bg-transparent" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Email" data-bs-trigger="hover">
                        <i className="uil uil-envelope fs-4" /> 
                      </button>
                    </div>
                    <div className="modal fade" id="bs-example-modal-lg" aria-hidden="true" aria-labelledby="..." tabIndex={-1}>
                      <div className="modal-dialog modal-lg modal-dialog-centered px-5">
                        <div className="modal-content">
                          <div className="modal-header semi-bold fs-4 px-4">
                            Bulk Email
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                          </div>
                          <div className="modal-body p-0">
                            <form>
                              <div className="mb-2 d-flex bd-gray-100 py-2 mt-1 px-2 align-items-center">
                                <label htmlFor="msgto" className="form-label fw-normal mb-0">To</label>
                                <span className="mx-2">:</span>
                                <div className="btn-default bg-white border btn btn-sm cursor-initial"> One candidate selected </div>
                                <div className="ms-auto">
                                  <a href="#" className="text-primary mx-2">Cc</a>
                                  <a href="#" className="text-primary">Bcc</a>
                                </div>
                              </div>
                              <div className="mb-2 d-flex align-items-center mx-2 border-bottom">
                                <label htmlFor="mailsubject" className="form-label mb-0 mail-label">From:</label>
                                <select className="border-transparent form-control">
                                  <option className="py-2 bg-white">
                                    (Me) &lt; careers@rudrainnovatives.freshteam.com &gt; 
                                  </option>
                                </select>
                              </div>
                              <div className="mb-2 d-flex align-items-center mx-2 border-bottom">
                                <label htmlFor="mailsubject" className="form-label mb-0 mail-label">Reply to :</label>
                                <select className=" border-transparent form-control">
                                  <option className="py-2 bg-white">
                                    (Me) &lt; careers@rudrainnovatives.freshteam.com &gt; 
                                  </option>
                                </select>
                              </div>
                              <div className="mb-2 d-flex align-items-center px-2">
                                <label htmlFor="mailsubject" className="form-label mb-0">Subject</label>
                                <span className>:</span>
                                <input type="text" id="mailsubject" className="form-control border-transparent" placeholder="Your application with IOS Developer/Team Lead" />
                              </div>
                            </form>
                            <textarea id="simplemde1" defaultValue={""} />
                          </div>
                          <div className="modal-footer justify-content-start">
                            <div className="d-flex w-100">
                              <div className>
                                <ul className="list-unstyled email-bulk-ul">
                                  <li className="list-inline-item text-center rounded email-bulk-li">
                                    <span className="file overflow-hidden position-relative custom-file-upload" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add attachment" data-bs-trigger="hover">
                                      <i className="uil uil-paperclip cursor-pointer fs-3" />
                                      <input type="file" name="file" className="position-absolute opacity right-0 fs-2 top-0" />
                                    </span>
                                  </li>
                                  <li className=" list-inline-item text-center rounded email-bulk-li">
                                    <div className="dropdown">
                                      <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle after-none" type="button" id="dropdown-a" data-bs-toggle="dropdown" aria-expanded="true">
                                        <span className data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add attachment" data-bs-trigger="hover">
                                          <i className="uil uil-stopwatch fs-3" />
                                        </span>
                                      </button>
                                      <ul className="dropdown-menu rounded py-2 shadow" aria-labelledby="dropdown-a">
                                        <li className="mb-1 dropdown-item text-info px-3"><a href>An hour later</a></li>
                                        <li className="mb-1 dropdown-item text-info px-3"> <a href>  2 hrs later</a></li>
                                        <li className="mb-1 dropdown-item text-info px-3"><a href>  4 hrs later </a></li>
                                        <li className="mb-1 dropdown-item text-info px-3"> <a href> Tomorrow </a> </li>
                                        <li className="mb-1 dropdown-item text-info px-3"><a href> 2 days later </a> </li>
                                        <div className="dropdown-divider my-0" />
                                        <li className="mb-1 dropdown-item text-info px-3"><a href>Specific date &amp; time</a></li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="ms-auto pe-3">
                                <ul className="list-unstyled email-bulk-ul ">
                                  <li className="list-inline-item text-center rounded email-bulk-li">
                                    <span className data-bs-toggle="tooltip" data-bs-placement="bottom" title="Preview" data-bs-trigger="hover">
                                      <i className="uil uil-eye fs-3" data-bs-toggle="modal" data-bs-target="#right-modal" />
                                    </span>
                                    <div id="right-modal" className="modal fade" tabIndex={-1} aria-modal="true" role="dialog">
                                      <div className="modal-dialog modal-sm modal-right">
                                        <div className="modal-content">
                                          <div className="modal-header border-0">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                          </div>
                                          <div className="modal-body">
                                            <div className="text-center">
                                              <h4 className="mt-0">Text in a modal</h4>
                                              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                              <button type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal">Close</button>
                                            </div>
                                          </div>
                                        </div>
                                        {/* /.modal-content */}
                                      </div>
                                      {/* /.modal-dialog */}
                                    </div>
                                  </li>
                                  <li className="py-1 list-inline-item text-center border-start px-2 mx-0">
                                    <div className="dropdown ">
                                      <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle rotate-180" type="button" id="dropdown-a" data-bs-toggle="dropdown" aria-expanded="true">
                                        <span className="bg-success text-center">
                                          <i className="uil uil-unlock fs-4 text-sucess text-white" />
                                        </span><span className="ms-1">Public</span>
                                      </button>
                                      <ul className="dropdown-menu rounded py-2 px-2 shadow public-private-ul" aria-labelledby="dropdown-a">
                                        <li className="mb-1 dropdown-item text-info">
                                          <a href>
                                            <div className="d-flex align-items-center">
                                              <i className="uil uil-lock text-danger me-2 fs-3" />
                                              <div>
                                                <span className="text-info semi-bold">
                                                  Private
                                                </span>
                                                <br />
                                                <small>visible to specific People</small>
                                              </div>
                                            </div>
                                          </a>
                                        </li>
                                        <li className="mb-1 dropdown-item text-info">
                                          <a href>
                                            <div className="d-flex align-items-center">
                                              <i className="uil uil-unlock text-sucess me-2 fs-3" />
                                              <div>
                                                <span className=" semi-bold">Public</span><br />
                                                <small>visible to the hiring people</small>
                                              </div>
                                            </div>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li className="list-inline-item text-center rounded email-bulk-li">
                                    <button type="button" className="btn btn-primary">Send</button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item me-2">
                  <div className="bg-white border rounded-circle candidate-action-icons d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#reject">
                    <button type="button" className="border-0 bg-transparent" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Reject" data-bs-trigger="hover">
                      <i className="uil uil-thumbs-down fs-4" />
                    </button>
                  </div>
                </li>
                <li className="list-inline-item me-2">
                  <div className="bg-white border rounded-circle candidate-action-icons d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#talent-pool">
                    <button type="button" className="border-0 bg-transparent" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Archive to talented pool" data-bs-trigger="hover">
                      <i className="uil uil-folder-download fs-4" />    
                    </button>
                  </div>
                </li>
                <li className="list-inline-item me-2">
                  <div className="bg-white border rounded-circle candidate-action-icons d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#tags">
                    <button type="button" className="border-0 bg-transparent" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add tags" data-bs-trigger="hover">
                      <i className="uil uil-tag-alt fs-4" />
                    </button>
                  </div>
                </li>
                <li className="list-inline-item me-2">
                  <div className="bg-white border rounded-circle candidate-action-icons d-flex align-items-center justify-content-center">
                    <div className="dropdown ">
                      <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle after-none" type="button" id="a" data-bs-toggle="dropdown" aria-expanded="true">
                        <span className="border-0 bg-transparent" data-bs-toggle="tooltip" data-bs-placement="bottom" title="More Action" data-bs-trigger="hover">
                          <i className="icon dripicons-dots-3 " />
                        </span>
                      </button>
                      <ul className="dropdown-menu rounded py-2 mt-2 shadow arrow-left" aria-labelledby="a" data-popper-placement="bottom-end" id="arrow">
                        <li className="px-0"><button className="dropdown-item px-2 text-info" type="button" data-bs-toggle="modal" data-bs-target="#send-test">Send Test</button></li>
                        <li className="px-0"><button className="dropdown-item px-2 text-info" type="button" data-bs-toggle="modal" data-bs-target="#share">Share</button></li>
                        <li className="px-0"><button className="dropdown-item px-2 text-info" type="button" data-bs-toggle="modal" data-bs-target="#snooze">Snooze</button></li>
                        <li className="px-0"><button className="dropdown-item px-2 text-info" type="button" data-bs-toggle="modal" data-bs-target="#another-job">Move to another job</button></li>
                        <li className="px-0"><button className="dropdown-item px-2 text-info" type="button" data-bs-toggle="modal" data-bs-target="#delete">Delete</button></li>
                        <li className="px-0"><button className="dropdown-item px-2 text-info" type="button" data-bs-toggle="modal" data-bs-target="#block">Block</button></li>
                      </ul>
                      <div className="modal fade" id="send-test" tabIndex={-1} aria-labelledby="myLargeModalLabel" role="dialog">
                        <div className="modal-dialog modal-lg px-5">
                          <div className="modal-content">
                            <div className="modal-header px-3">
                              <h4 className="modal-title" id="myLargeModalLabel">Send an online test</h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body px-3">
                              <h3 className="fs-3 mb-3">HackerEarth</h3>
                              <div className="form-floating custom-select-float custom-select-theme position-relative">
                                <select className="form-control py-0 px-3" id="floatingInput">
                                  <option>Rudra Innovative Software (P)Ltd. - Test Draft - 2</option>
                                  <option>Software Developer _ PHP</option>
                                </select>
                                <label htmlFor="floatingInput" className="text-info bg-white d-inline-block h-auto py-0"> Select the online test you wish to send to the candidate <sup className="text-danger">*</sup></label>
                              </div>
                              <div className="form-check form-switch my-3">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                <label className="form-check-label fw-normal" htmlFor="flexSwitchCheckChecked">Notify the hiring team when the candidate completes the test</label>
                              </div>
                              <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Search" />
                                <label htmlFor="floatingInput" className="text-info bg-white d-inline-block h-auto py-0">Notify other users</label>
                              </div>
                              <div className="form-check form-switch my-3">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                <label className="form-check-label fw-normal" htmlFor="flexSwitchCheckChecked">Notify the candidate with a personal email<br />
                                  <span className="text-muted">Note: There might be an invitation from the assessment service as well, depending on its settings.</span>
                                </label>
                              </div>
                              <div className="p-4 modal-bg-grey" style={{background: '#eef1f6'}}>
                                <form className="bg-white">
                                  <div className="mb-2 d-flex bd-gray-100 py-2 mt-1 px-2 align-items-center">
                                    <label htmlFor="msgto" className="form-label fw-normal mb-0">To</label>
                                    <span className="mx-2">:</span>
                                    <div className="d-flex">
                                      <div className="bg-primary text-center rounded-circle text-white candidate-name me-2">H</div>
                                      <div>
                                        <span className="text-primary"> Harjeet Kaur</span><br />
                                        <span className="text-muted">Harjeet0988@gmail.com</span>
                                      </div>
                                    </div>
                                    <div className="ms-auto">
                                      <a href className="text-primary mx-2">Cc</a>
                                      <a href className="text-primary">Bcc</a>
                                    </div>
                                  </div>
                                  <div className="mb-2 d-flex align-items-center mx-2 border-bottom">
                                    <label htmlFor="mailsubject" className="form-label mb-0 mail-label">From:</label>
                                    <select className="border-transparent form-control">
                                      <option className="py-2 bg-white">
                                        (Me) &lt; careers@rudrainnovatives.freshteam.com &gt; 
                                      </option>
                                    </select>
                                  </div>
                                  <div className="mb-2 d-flex align-items-center mx-2 border-bottom">
                                    <label htmlFor="mailsubject" className="form-label mb-0 mail-label">Reply to :</label>
                                    <select className=" border-transparent form-control">
                                      <option className="py-2 bg-white">
                                        (Me) &lt; careers@rudrainnovatives.freshteam.com &gt; 
                                      </option>
                                    </select>
                                  </div>
                                  <div className="mb-2 d-flex align-items-center px-2">
                                    <label htmlFor="mailsubject" className="form-label mb-0">Subject</label>
                                    <span className>:</span>
                                    <input type="text" id="mailsubject" className="form-control border-transparent" placeholder defaultValue="Please fill out the {{assessment.application_name}} test to proceed to the next round for {{job.title}}" />
                                  </div>
                                </form>
                                <textarea id="simplemde1" defaultValue={""} />
                              </div>
                              <ul className="list-unstyled text-end py-3 border-top">
                                <li className="list-inline-item"><button type="button" className="btn bg-transparent border-0">Cancel</button></li>
                                <li className="list-inline-item"><button type="button" className="btn btn-primary">Send Test</button></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade " id="share" tabIndex={-1} aria-labelledby="myLargeModalLabel" role="dialog">
                        <div className="modal-dialog modal-lg px-5">
                          <div className="modal-content">
                            <div className="modal-header px-3">
                              <h4 className="modal-title" id="myLargeModalLabel">Share with peers</h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body px-3">
                              <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Search" />
                                <label htmlFor="floatingInput" className="text-info bg-white d-inline-block h-auto py-0">Share with users <sup className="text-danger">*</sup></label>
                              </div>
                            </div>
                            <div className="modal-footer justify-content-start">
                              <div className="d-flex w-100">
                                <div className>
                                  <ul className="list-unstyled email-bulk-ul">
                                    <li className="list-inline-item text-center rounded email-bulk-li">
                                      <span className="file overflow-hidden position-relative custom-file-upload" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add attachment" data-bs-trigger="hover">
                                        <i className="uil uil-paperclip cursor-pointer fs-3" />
                                        <input type="file" name="file" className="position-absolute opacity right-0 fs-2 top-0" />
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="ms-auto pe-3">
                                  <ul className="list-unstyled email-bulk-ul ">
                                    <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info">Cancel</button></li>
                                    <li className="py-1 list-inline-item text-center border-start px-2 mx-0">
                                      <div className="dropdown ">
                                        <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle rotate-180" type="button" id="dropdown-a" data-bs-toggle="dropdown" aria-expanded="true">
                                          <span className="bg-success text-center">
                                            <i className="uil uil-unlock fs-4 text-sucess text-white" />
                                          </span><span className="ms-1">Public</span>
                                        </button>
                                        <ul className="dropdown-menu rounded py-2 px-2 shadow public-private-ul" aria-labelledby="dropdown-a">
                                          <li className="mb-1 dropdown-item text-info">
                                            <a href>
                                              <div className="d-flex align-items-center">
                                                <i className="uil uil-lock text-danger me-2 fs-3" />
                                                <div>
                                                  <span className="text-info semi-bold">
                                                    Private
                                                  </span>
                                                  <br />
                                                  <small>visible to specific People</small>
                                                </div>
                                              </div>
                                            </a>
                                          </li>
                                          <li className="mb-1 dropdown-item text-info">
                                            <a href>
                                              <div className="d-flex align-items-center">
                                                <i className="uil uil-unlock text-sucess me-2 fs-3" />
                                                <div>
                                                  <span className=" semi-bold">Public</span><br />
                                                  <small>visible to the hiring people</small>
                                                </div>
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="list-inline-item text-center rounded email-bulk-li">
                                      <button type="button" className="btn btn-primary">Send</button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade " id="snooze" tabIndex={-1} aria-labelledby="standard-modalLabel" role="dialog">
                        <div className="modal-dialog standard-modal">
                          <div className="modal-content">
                            <div className="modal-header px-4">
                              <h4 className="modal-title" id="standard-modalLabel">Snooze candidate</h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body px-4">
                              <div className="my-3">
                                <label className="fw-normal">Snooze candidate until <sup className="text-danger">*</sup></label>
                                <ul className="list-unstyled snooze-candidate-ul">
                                  <li className="list-inline-item bg-light rounded px-4 py-3 me-1">
                                    <div className>
                                      1 Week
                                      <br />
                                      <span className="text-muted">May 10th</span>
                                    </div>
                                  </li>
                                  <li className="list-inline-item bg-light rounded px-4 py-3 me-1">
                                    <div className>
                                      1 Month
                                      <br />
                                      <span className="text-muted">June 3rd</span>
                                    </div>
                                  </li>
                                  <li className="list-inline-item bg-light rounded px-4 py-3 me-1">
                                    <div className>
                                      3 Months
                                      <br />
                                      <span className="text-muted">Aug 3rd</span>
                                    </div>
                                  </li>
                                  <li className="list-inline-item bg-light rounded px-4 py-3">
                                    <div className>
                                      1 Week
                                      <br />
                                      <span className="text-muted">May 10th</span>
                                    </div>
                                    {/*   <input type="date" id="birthday" name="birthday"> */}
                                  </li>
                                </ul>
                              </div>
                              <div className="form-floating mb-3">
                                <textarea rows={3} className="form-control h-auto" id="floatingInput" placeholder="test" defaultValue={""} />
                                <label htmlFor="floatingInput" className="text-info bg-white d-inline-block h-auto py-0">Snooze Reason </label>
                              </div>
                            </div>
                            <div className="modal-footer justify-content-start mt-2">
                              <div className="ms-auto me-3">
                                <ul className="list-unstyled email-bulk-ul ">
                                  <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info">Cancel</button></li>
                                  <li className="list-inline-item text-center rounded email-bulk-li">
                                    <button type="button" className="btn btn-primary">Send</button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade " id="another-job" tabIndex={-1} aria-labelledby="myLargeModalLabel" role="dialog">
                        <div className="modal-dialog modal-lg px-5">
                          <div className="modal-content">
                            <div className="modal-header px-3">
                              <h4 className="modal-title" id="myLargeModalLabel">Move to another job</h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body px-3">
                              <div className="form-floating custom-select-float custom-select-theme position-relative">
                                <select className="form-control select2 py-0 px-3" id="floatingInput" data-toggle="select2">
                                  <option>Select and Pic your job posting*</option>
                                  <option>Angular</option>
                                  <option>Test</option>
                                  <option>Dot net Developer</option>
                                  <option>UI/UX developer</option>
                                </select>
                                {/*  <label for="floatingInput" class="text-info bg-white d-inline-block h-auto py-0">Select and Pic your job posting<sup class="text-danger">*</sup></label> */}
                              </div>
                              <div className="d-flex py-3">
                                <i className="uil uil-exclamation-octagon text-warning me-2 fs-2" />
                                <p className="fw-normal">Any upcoming interview under the job <b className="text-info">"IOS Developer/Team Lead"</b> will be cancelled for the candidate.</p>
                              </div>
                              <div className="form-check form-checkbox-success mb-2">
                                <input type="checkbox" className="form-check-input rounded-0 fs-4" id="customCheckcolor2" defaultChecked />
                                <label className="form-check-label fw-normal align-middle" htmlFor="customCheckcolor2 ">Notify Candidates</label>
                              </div>
                            </div>
                            <div className="modal-footer justify-content-start">
                              <div className="ms-auto pe-3">
                                <ul className="list-unstyled email-bulk-ul ">
                                  <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info">Cancel</button></li>
                                  <li className="list-inline-item text-center rounded email-bulk-li">
                                    <button type="button" className="btn btn-primary">Move</button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade mt-4 py-4" id="delete" tabIndex={-1} aria-labelledby="standard-modalLabel" role="dialog">
                        <div className="modal-dialog standard-modal">
                          <div className="modal-content">
                            <div className="modal-body px-3">
                              <div className="d-flex align-items-center">
                                <i className="uil uil-exclamation-octagon text-warning me-2 fs-2" />
                                <p className="fw-normal mb-0 fs-4"> Do you wish to remove this candidate from <br /> all associated jobs?</p>
                                <div className="ms-auto me-4">
                                  <ul className="list-unstyled email-bulk-ul ">
                                    <li className="list-inline-item">
                                      <button type="button" className="btn border-0 btn-outline-light text-info" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                    </li>
                                    <li className="list-inline-item text-center rounded email-bulk-li">
                                      <button type="button" className="btn btn-primary">Delete</button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade mt-4 py-4" id="block" tabIndex={-1} aria-labelledby="standard-modalLabel" role="dialog">
                        <div className="modal-dialog standard-modal">
                          <div className="modal-content">
                            <div className="modal-body px-3">
                              <div className="d-flex align-items-center">
                                <i className="uil uil-exclamation-octagon text-warning me-2 fs-2" />
                                <p className="fw-normal mb-0 fs-4">  Do you wish to block this candidate?</p>
                                <div className="ms-auto me-4">
                                  <ul className="list-unstyled email-bulk-ul ">
                                    <li className="list-inline-item">
                                      <button type="button" className="btn border-0 btn-outline-light text-info" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                    </li>
                                    <li className="list-inline-item text-center rounded email-bulk-li">
                                      <button type="button" className="btn btn-primary">Block</button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer text-start justify-content-start">
                              <p className="text-danger mb-0">Warning: All future applications by this candidate will be dropped.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <CandidateDashTable/>
            </div>
          </div>
        </div>
      </div>
      {/* content ends */}
    </div>
    {/*content-page */}
  </div>
  {/* END wrapper */}
  {/*---------modals-------------*/}
  <div className="modal fade " id="reject" tabIndex={-1} aria-labelledby="myLargeModalLabel" role="dialog">
    <div className="modal-dialog modal-lg px-5">
      <div className="modal-content">
        <div className="modal-header px-3">
          <h4 className="modal-title" id="myLargeModalLabel">Reject</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body px-3">
          <div className="form-floating custom-select-float custom-select-theme position-relative mb-3">
            <select className="form-control select2 shadow" data-toggle="select2" id="floatingInput">
              <option className="text-info">Reject Reason</option>
              <option>unable to search</option>
              <option>Candidate not interested</option>
              <option>Failed in challenge round</option>
              <option>Overqualified</option>
            </select>
            <label htmlFor="floatingInput" className="text-info bg-white d-inline-block h-auto py-0">Reject Reason <sup className="text-danger">*</sup></label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control h-auto" id="floatingInput" placeholder="test" defaultValue={""} />
            <label htmlFor="floatingInput" className="text-info bg-white d-inline-block h-auto py-0">Leave a comment for the hiring team </label>
          </div>
          <div className="form-check form-checkbox-success mb-2">
            <input type="checkbox" className="form-check-input rounded-0 fs-4" id="customCheckcolor2" defaultChecked />
            <label className="form-check-label fw-normal align-middle" htmlFor="customCheckcolor2 ">Notify Candidates</label>
          </div>
        </div>
        <div className="modal-footer justify-content-start">
          <div className="ms-auto pe-3">
            <ul className="list-unstyled mb-0">
              <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info">Cancel</button></li>
              <li className="list-inline-item text-center rounded email-bulk-li">
                <button type="button" className="btn btn-primary">Send</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade " id="talent-pool" tabIndex={-1} aria-labelledby="myLargeModalLabel" role="dialog">
    <div className="modal-dialog modal-lg px-5">
      <div className="modal-content">
        <div className="modal-header px-3">
          <h4 className="modal-title" id="myLargeModalLabel">Archive to Talent pool</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body px-3 mt-2">
          <div className="form-floating custom-select-float custom-select-theme position-relative mb-3">
            <select className="select2 form-control select2-multiple shadow" data-toggle="select2" multiple="multiple" data-placeholder="Search/ Add new" id="floatingInput">
              <option value="HI">Web Designer</option>
              <option value="HI">Administration</option>
              <option value="HI">Business Developement</option>
              <option value="HI">Designing</option>
              <option value="HI">Finance</option>
            </select>
            <label htmlFor="floatingInput" className="text-info bg-white d-inline-block h-auto py-0"> Select your recommended department  <sup className="text-danger">*</sup></label>
          </div>
          <div className="mb-4 position-relative">
            <label htmlFor="floatingInput" className="text-info bg-white d-inline-block h-auto py-0 position-absolute label-not-float"> Tags</label>
            <select className="select form-control">
              <option value={1}>Search /Add New</option>
              <option value={2}>Aptitude score is low</option>
              <option value={3}>Shortlisted</option>
              <option value={4}>Skill bot matching</option>
            </select>
          </div>
          <div className="form-check form-checkbox-success mb-2">
            <input type="checkbox" className="form-check-input rounded-0 fs-4" id="customCheckcolor2" defaultChecked />
            <label className="form-check-label fw-normal align-middle" htmlFor="customCheckcolor2 ">Notify Candidates</label>
          </div>
        </div>
        <div className="modal-footer justify-content-start">
          <div className="ms-auto pe-3">
            <ul className="list-unstyled email-bulk-ul mb-0">
              <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info">Cancel</button></li>
              <li className="list-inline-item text-center rounded email-bulk-li">
                <button type="button" className="btn btn-primary">Send</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade " id="tags" tabIndex={-1} aria-labelledby="standard-modalLabel" role="dialog">
    <div className="modal-dialog standard-modal">
      <div className="modal-content">
        <div className="modal-header px-4">
          <h4 className="modal-title" id="standard-modalLabel">Tags</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body px-4 mb-5 pb-5 pt-4">
          <select className="select form-control">
            <option value={1}>Search /Add New</option>
            <option value={2}>Aptitude score is low</option>
            <option value={3}>Shortlisted</option>
            <option value={4}>Skill bot matching</option>
          </select>
        </div>
        <div className="modal-footer justify-content-start">
          <div className="ms-auto pe-3">
            <ul className="list-unstyled mb-0 ">
              <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info" data-bs-dismiss="modal" aria-label="Close">Cancel</button></li>
              <li className="list-inline-item text-center rounded email-bulk-li">
                <button type="button" className="btn btn-primary">Update</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="end-bar filter-area mt-n4" style={{top: '10rem!important'}}>
  <CandidateForm/>
</div> 


        </>
    )
}

export default CandidateDash
