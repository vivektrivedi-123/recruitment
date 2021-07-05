import React,{useState} from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Rating from '../../common/Rating'
import Emails from '../../common/Emails'
import Advance from '../../common/Advance'
import Profile from '../../common/Profile'
import Contact from '../../common/Contact'
import Comments from '../../common/Comments'
import Feedback from '../../common/Feedback'
import Task from '../../common/Task'
import Timeline from '../../common/Timeline'
import Summary from '../../common/Summary'
import Interview from '../../common/Interview'
import ButtonDropdown from '../../common/ButtonDropdown'
import ConversationNav from './ConversationNav'
import EditUser from './EditUser'
import Skills from './Skills'
import './Conversation.css'
import EditExperience from './EditExperience'
import Tags from '../../common/Tags'
import EditApplication from './EditApplication'
import EeoDetail from './EeoDetail'
import Education from './Education'
import ScheduleInterview from './ScheduleInterview'
import SourceCategory from './SourceCategory'
import User from './User'
import SummaryBox from './SummaryBox'
import CandidateTable from '../CandidateTable'
import Reject from '../../common/Reject'
import ConversationTable from './CoversationTable'
//ajdkiasjdojoaskjopkjcfd
import data from '../../JobData.json'
function Conversation({id}) {
  let d=data.candidate.filter(u=>u.archived===false)
  const[candidate,setCandidate]=useState(d);
  const[owner,setOwner]=useState(data.owner)

    return (
    <>
  <div className="wrapper">
    <div id="leftside">
      <Navigation />    
    </div>
    <div className="content-page">
      <div className="content">
        <div className="navbar-custom">
          <div id="top-bar">
            <Topbar />
            </div>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item font-600">Conversations</li>
            </ol>
          </nav>
        </div>
        <div className="row m-0 pt-2 pb-3">
          <div className="col-2">
            <div className="page-aside-left bg-white shadow">
              <div className="accordion custom-accordion" id="custom-accordion-one">
                <h5 className="m-0">
                  <a className="custom-accordion-title d-block py-1" data-bs-toggle="collapse" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    Candidate Conversations<i className="mdi mdi-chevron-down accordion-arrow" />
                  </a>
                </h5>
                <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-bs-parent="#custom-accordion-one">
                  <div className="mt-4">
                    <h6 className="text-uppercase">MY INBOX</h6>
                    <div className="email-menu-list labels-list mt-2">
                      <a href="javascript: void(0);" className="text-info font-600">Candidates I Own</a>
                      <a href="javascript: void(0);" className="text-info font-600">Other Candidates in My Job</a>
                      <a href="javascript: void(0);" className="text-info font-600">Everything else</a>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6 className="text-uppercase">TEAM INBOX</h6>
                    <div className="email-menu-list labels-list mt-2">
                      <a href="javascript: void(0);" className="text-info font-600">Unread</a>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6 className="text-uppercase">Rudra Innovative Software (P)Ltd. Careers</h6>
                    <div className="email-menu-list labels-list mt-2">
                      <a href="javascript: void(0);" className="text-info font-600">Unread</a>
                      <a href="javascript: void(0);" className="text-info font-600">Read</a>
                    </div>
                  </div>
                </div>
              </div>{/*accordion end*/}
              <hr />
              <div className="accordion custom-accordion" id="custom-accordion-two">
                <h5 className="m-0">
                  <span data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover" data-bs-content="Emails from whitelisted Listener channels like job boards, employees etc. can be found here." title><a className="custom-accordion-title d-block py-1" data-bs-toggle="collapse" href="#collapseFour1" aria-expanded="false" aria-controls="collapseFour">
                      <i className="mdi mdi-alert-circle-outline fs-4" /> From Email Channel<i className="mdi mdi-chevron-down accordion-arrow" />
                    </a></span>
                </h5>
                <div id="collapseFour1" className="collapse" aria-labelledby="headingFour" data-bs-parent="#custom-accordion-two">
                  <div className="mt-4">
                    <h6 className="text-uppercase">My Jobs</h6>
                    <div className="email-menu-list labels-list mt-2">
                      <a href="javascript: void(0);" className="text-info font-600">Unread</a>
                      <a href="javascript: void(0);" className="text-info font-600">Everything Else</a>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6 className="text-uppercase">Team and career inbox</h6>
                    <div className="email-menu-list labels-list mt-2">
                      <a href="javascript: void(0);" className="text-info font-600">All other jobs</a>
                      <a href="javascript: void(0);" className="text-info font-600">Career Emails</a>
                    </div>
                  </div>
                </div>
              </div>{/*accordion end*/}
            </div>
          </div>
        
          <div className="col-10">
  <div className="page-sort">
    <div className="float-end">
      <a className="end-bar-toggle btn btn-light" href="javascript: void(0);"><i className="mdi mdi-filter" /></a>
    </div>
    {/* <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#right-modal">Rightbar Modal</button> */}
  
        <ConversationTable candidate={candidate} owner={owner}/>
           {/* <ConversationRight/> */}
         
          </div>
          </div>
        </div>
        <div className="d-block w-100 conversion-section">
          <div className="clearfix" />
        </div>
      </div>
    </div>
  </div>

  <div className="modal fade" id="experience-modal" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
   <EditExperience/>
  </div>
  <div className="modal fade" id="tags-modal" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <Tags/>
    </div>
  <div className="modal fade" id="reject-modal" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <Reject />
     </div>
  <div className="modal fade" id="application-modal" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <EditApplication/>
  </div>
  <div className="modal fade" id="EEO-modal" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
   <EeoDetail/>
  </div>
  <div className="modal fade" id="summary-modal" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
   <SummaryBox/>    
 </div>
  <div className="modal fade" id="education-modal" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <Education/>
  </div>
  <div className="modal fade" id="skills-experties-modal" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
   <Skills/>
  </div>
  <div id="fullpage-interview-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="fullWidthModalLabel" aria-hidden="true">
  <ScheduleInterview/>
  </div>{/* /.modal-content */}
    {/* /.modal-dialog */}{/* /.modal */}

  <div id="fullpage-feedback-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="fullWidthModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-full-width w-100 m-0" style={{minWidth: '992px!important'}}>
      <div className="modal-content">
        <div className="modal-header p-3 justify-content-between">
          <h5 className="text-info">Add Feedback - Dot Net Developer</h5>
          <div>
            <button type="button" className="btn btn-outline-secondary">Save Draft</button>
            <button type="button" className="btn btn-info mx-sm-3">Submit Feedback</button>
            <button type="button" className="btn-close rounded-pill bg-light p-sm-2" data-bs-dismiss="modal" aria-hidden="true" /></div>
        </div>
        <div className="modal-body vh-100 py-sm-5 bg-light px-sm-4">
          <div className="row">
              <SourceCategory />
              <div className="col-lg-6">
            <Feedback />
           </div>
           </div>
            </div>
            </div>
            </div>
            </div>{/* /.modal-content */}{/* /.modal-dialog */}{/* /.modal */}
  <div className="modal fade" id="EmailTabEdit-modal" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" style={{maxWidth: 700}}>
      <div className="modal-content">
        <div className="modal-header">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center">
              <h4 className="modal-title" id="myCenterModalLabel"><i className="mdi mdi-email-outline
 fs-4" /> Email To: Ritesh Sanan</h4>
              <span className="badge bg-light badge-outline-secondary text-muted fw-normal ms-sm-2">Draft Saved</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="badge bg-light text-dark me-sm-2 fs-4 fw-normal">Reply To</span>
              <span className="badge bg-light text-dark me-sm-2 fs-4 fw-normal">Cc</span>
              <span className="badge bg-light text-dark me-sm-2 fs-4 fw-normal">Bcc</span>
              <i className="mdi mdi-window-maximize fs-4 me-sm-3" data-bs-dismiss="modal" aria-hidden="true" />
            </div>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body pb-0">
          <div className="row align-items-center">
            <div className="col-1">
              <h5 className="text-info">From:</h5>
            </div>
            <div className="col-11">
              <select className="form-select border-0" id="example-select">
                <option>(Me) careers@rudrainnovatives.freshteam.com</option>
              </select>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-1">
              <h5 className="text-info d-flex align-items-baseline">Subject <sup className="text-danger">*</sup></h5>
            </div>
            <div className="col-11">
              <input type="text" id="simpleinput" className="form-control border-0" defaultValue="Your Application for Dot Net Developer" />
            </div>
          </div>
          <textarea className="form-control my-sm-2 border-0" id="example-textarea" rows={5} defaultValue={""} />
          <div className="alert alert-danger py-sm-1 text-center mb-0" role="alert">
            Note: Subsequent replies from the candidate will be marked as private.
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center" id="tooltip-email">
              <i className="mdi mdi-trash-can-outline me-sm-3 fs-3" data-bs-container="#tooltip-email" data-bs-toggle="tooltip" data-bs-placement="top" title="Discard" />
              <i className="mdi mdi-attachment mdi-rotate-90 me-sm-3 fs-3" data-bs-container="#tooltip-email" data-bs-toggle="tooltip" data-bs-placement="top" title="Add Attachment" />
              <i className="mdi mdi-format-letter-ends-with me-sm-3 fs-3" data-bs-container="#tooltip-email" data-bs-toggle="tooltip" data-bs-placement="top" title="Formatting Options" />
              <i className="mdi mdi-star-box me-sm-3 fs-3" data-bs-container="#tooltip-email" data-bs-toggle="tooltip" data-bs-placement="top" title="Insert Canned Response" />
              <i className="mdi mdi-timer-outline me-sm-3 fs-3" data-bs-container="#tooltip-email" data-bs-toggle="tooltip" data-bs-placement="top" title="Schedule Response" />
            </div>
            <div className="d-flex align-items-baseline" id="tooltip-eyeopen">
              <i className="mdi mdi-eye-outline me-sm-3 fs-3" data-bs-container="#tooltip-eyeopen" data-bs-toggle="tooltip" data-bs-placement="top" title="Preview" />
              <button className="btn tbn-outline-secondary dropdown-toggle me-sm-3 fs-4" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-lock-open-outline" /> Private</button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{margin: 0}}>
                <ul>
                  <li className="dropdown-item align-middle d-flex justify-content-between align-items-center active">
                    <div className="d-flex align-items-center">
                      <div className="ms-sm-3">
                        <i className="mdi mdi-lock-open-outline text-danger" />
                      </div>
                      <div className="ms-sm-3">
                        <h5 className="text-info mb-0">Private</h5>
                        <label className="fw-normal">Visible to specific persion</label>
                      </div>
                    </div>
                    <i className="mdi mdi-check align-middle ms-sm-4" />
                  </li>
                  <li className="dropdown-item align-middle d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="ms-sm-3">
                        <i className="mdi mdi-lock-open-outline text-success" />
                      </div>
                      <div className="ms-sm-3">
                        <h5 className="text-info mb-0">Public</h5>
                        <label className="fw-normal">Visible to hiring team</label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button className="btn btn-info ms-sm-2">Save</button>
            </div>
          </div>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */}
  <div id="warning-alert-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-body p-2">
          <div className="text-center">
            <i className="dripicons-warning h1 text-warning" />
            <h4 className="mt-2">Do you wish to delete this conversation forever?</h4>
            <p className="mt-3">Warning: You will lose the conversation permanently</p>
            <button type="button" className="btn btn-light my-2">Cancle</button>
            <button type="button" className="btn btn-warning my-2" data-bs-dismiss="modal">Continue</button>
          </div>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */}
 {/* /.modal */}
  <div className="modal fade" id="CommentTabBtnEdit-modal" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" style={{maxWidth: 700}}>
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body">
          <div className="d-flex ">
            <div className="avatar-md">
              <span className="avatar-title bg-danger rounded-circle h-75 w-75 mx-auto">
                M
              </span>
            </div>
            <input type="text" id="simpleinput" className="form-control border-0" defaultValue="ECE Background" />
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center" id="tooltip-email2">
              <i className="mdi mdi-attachment mdi-rotate-90 me-sm-3 fs-3" data-bs-container="#tooltip-email2" data-bs-toggle="tooltip" data-bs-placement="top" title="Add Attachment" />
              <i className="mdi mdi-format-letter-ends-with me-sm-3 fs-3" data-bs-container="#tooltip-email2" data-bs-toggle="tooltip" data-bs-placement="top" title="Formatting Options" />
            </div>
            <div className="d-flex align-items-baseline">
              <button className="btn tbn-outline-secondary dropdown-toggle me-sm-3 fs-4" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-lock-open-outline" /> Private</button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{margin: 0}}>
                <ul>
                  <li className="dropdown-item align-middle d-flex justify-content-between align-items-center active">
                    <div className="d-flex align-items-center">
                      <div className="ms-sm-3">
                        <i className="mdi mdi-lock-open-outline text-danger" />
                      </div>
                      <div className="ms-sm-3">
                        <h5 className="text-info mb-0">Private</h5>
                        <label className="fw-normal">Visible to specific persion</label>
                      </div>
                    </div>
                    <i className="mdi mdi-check align-middle ms-sm-4" />
                  </li>
                  <li className="dropdown-item align-middle d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="ms-sm-3">
                        <i className="mdi mdi-lock-open-outline text-success" />
                      </div>
                      <div className="ms-sm-3">
                        <h5 className="text-info mb-0">Public</h5>
                        <label className="fw-normal">Visible to hiring team</label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button className="btn btn-info ms-sm-2">Save</button>
            </div>
          </div>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */}
  <div id="CommentTabBtnTrash-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-body p-2">
          <div className="text-center">
            <i className="dripicons-warning h1 text-warning" />
            <h4 className="mt-2">Do you wish to delete this conversation forever?</h4>
            <button type="button" className="btn btn-light my-2">Cancle</button>
            <button type="button" className="btn btn-warning my-2" data-bs-dismiss="modal">Continue</button>
          </div>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */}
  <div className="modal fade" id="CommentTabBtnPrivate-modal" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" style={{maxWidth: 700}}>
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body">
          <div className="d-flex ">
            <div className="avatar-md">
              <span className="avatar-title bg-danger rounded-circle h-75 w-75 mx-auto">
                M
              </span>
            </div>
            <input type="text" id="simpleinput" className="form-control border-0" defaultValue="ECE Background" />
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center" id="tooltip-email3">
              <i className="mdi mdi-attachment mdi-rotate-90 me-sm-3 fs-3" data-bs-container="#tooltip-email3" data-bs-toggle="tooltip" data-bs-placement="top" title="Add Attachment" />
              <i className="mdi mdi-format-letter-ends-with me-sm-3 fs-3" data-bs-container="#tooltip-email3" data-bs-toggle="tooltip" data-bs-placement="top" title="Formatting Options" />
            </div>
            <div className="d-flex align-items-baseline">
              <button className="btn tbn-outline-secondary dropdown-toggle me-sm-3 fs-4" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-lock-open-outline" /> Private</button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{margin: 0}}>
                <ul>
                  <li className="dropdown-item align-middle d-flex justify-content-between align-items-center active">
                    <div className="d-flex align-items-center">
                      <div className="ms-sm-3">
                        <i className="mdi mdi-lock-open-outline text-danger" />
                      </div>
                      <div className="ms-sm-3">
                        <h5 className="text-info mb-0">Private</h5>
                        <label className="fw-normal">Visible to specific persion</label>
                      </div>
                    </div>
                    <i className="mdi mdi-check align-middle ms-sm-4" />
                  </li>
                  <li className="dropdown-item align-middle d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="ms-sm-3">
                        <i className="mdi mdi-lock-open-outline text-success" />
                      </div>
                      <div className="ms-sm-3">
                        <h5 className="text-info mb-0">Public</h5>
                        <label className="fw-normal">Visible to hiring team</label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button className="btn btn-info ms-sm-2">Save</button>
            </div>
          </div>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */}
  <div className="end-bar filter-area">
    <div className="rightbar-title py-2 border-top border-bottom">
      <a href="javascript:void(0);" className=" end-bar-toggle float-start ms-n5 mt-n3 pt-1">
        <i className="dripicons-cross noti-icon" />
      </a>
      <div className="d-flex justify-content-between">
        <h5 className="m-0 text-info">Filter</h5>
        <div className="mr-4">
          <a href="#" className="btn btn-clear py-0 m-1 mt-0 ">Reset</a>
          <a href="#" className="btn btn-primary py-1 m-1 mt-0">Apply</a>
        </div>
      </div>
    </div>
    <div className="rightbar-content h-100" data-simplebar="init"><div className="simplebar-wrapper" style={{margin: 0}}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer" /></div><div className="simplebar-mask"><div className="simplebar-offset" style={{right: 0, bottom: 0}}><div className="simplebar-content-wrapper" style={{height: '100%', overflow: 'hidden scroll'}}><div className="simplebar-content" style={{padding: 0}}>
                <div className="p-3">
                  <div className="field mb-3">
                    <input className="form-control" type="text" name="Source" id="Source" placeholder="Search..." />
                    <label htmlFor="Status">Source</label>
                  </div>
                  <div className="field mb-3">
                    <input className="form-control" type="text" name="Category" id="Category" placeholder="Search..." />
                    <label htmlFor="Category">Source Category</label>
                  </div>
                  <div className="field mb-3">
                    <input className="form-control" type="text" name="Candidate" id="Candidate" placeholder="Search..." />
                    <label htmlFor="Candidate">Candidate owner</label>
                  </div>
                  <div className="field mb-3">
                    <input className="form-control" type="text" name="Status" id="Status" placeholder="Search..." />
                    <label htmlFor="Status">Status</label>
                  </div>
                  <div className="field mb-3">
                    <input className="form-control" type="text" name="Stage" id="Stage" placeholder="Search..." />
                    <label htmlFor="Department">Stage</label>
                  </div>
                  <div className="field mb-3">
                    <input className="form-control" type="text" name="Tags" id="Tags" placeholder="Search..." />
                    <label htmlFor="Tags">Tags</label>
                  </div>
                  <div className="field mb-3">
                    <input className="form-control" type="text" name="deleted-candidate" id="deleted-candidate" placeholder="Search..." />
                    <label htmlFor="deleted-candidate">Is the candidate deleted?</label>
                  </div>
                  <div className="field mb-3">
                    <input className="form-control" type="text" name="blocked-candidate" id="blocked-candidate" placeholder="Search..." />
                    <label htmlFor="blocked-candidate">Is the candidate blocked?</label>
                  </div>
                  <div className="field ">
                    <a href="#" className="text-link"><i className="mdi mdi-plus-circle mdi-18px" /> Add more</a>
                  </div>
                </div>
                {/* end padding*/}
              </div></div></div></div><div className="simplebar-placeholder" style={{width: 500, height: 676}} /></div><div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}><div className="simplebar-scrollbar" style={{width: 0, display: 'none'}} /></div><div className="simplebar-track simplebar-vertical" style={{visibility: 'visible'}}><div className="simplebar-scrollbar" style={{height: 25, transform: 'translate3d(0px, 0px, 0px)', display: 'block'}} /></div></div>
  </div>
  </>
    )
}

export default Conversation
