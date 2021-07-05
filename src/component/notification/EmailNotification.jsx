
import React from 'react'
import Navigation from "../../common/Navigation"
import Topbar from "../../common/Topbar"
import Sidebar from "../settings/Sidebar"
import CanTab from './CanTab'
import Conver from './Conver'
import "./EmailNotification.css"
import EModal from './EModal'
import EmployeeRef from './EmployeeRef'
import GenTab from './GenTab'
import Interview from './Interview'
import Job from './Job'
import Offer from './Offer'
import RelatedCandidate from './RealatedCandidate'
import TaskTab from './TaskTab'
import Vendor from './Vendor'

function EmailNotification() {
    return (
        <>
           <div className="wrapper">
  <div id="leftside">
   <Navigation/>
  </div>
  <div className="content-page pt-5">
    <div className="content">
      <div className="navbar-custom h-auto">
        <div id="top-bar">
       <Topbar/>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="page-aside-left bg-white shadow settings p-0" style={{top: '55px!important', width: 'inherit!important'}}>
        <Sidebar name="Email Notifications"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white">
                <ul className="nav nav-tabs nav-bordered bg-transparent border-top-0 mb-3 px-1">
                  <li className="nav-item">
                    <a href="#home-b1" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
                      <i className="mdi mdi-home-variant d-md-none d-block" />
                      <span className="d-none d-md-block">Recruit</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#profile-b1" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                      <i className="mdi mdi-account-circle d-md-none d-block" />
                      <span className="d-none d-md-block">Candidate</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#settings-b1" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                      <i className="mdi mdi-settings-outline d-md-none d-block" />
                      <span className="d-none d-md-block">Task</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#vendor" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                      <i className="mdi mdi-settings-outline d-md-none d-block" />
                      <span className="d-none d-md-block">Vendor</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#general" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                      <i className="mdi mdi-settings-outline d-md-none d-block" />
                      <span className="d-none d-md-block">General</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">{/*recruit tab*/}
                  <div className="tab-pane show active" id="home-b1">
                    <h4 className="text-info ps-1 mt-3">Job Posting</h4>
                    <ul className="list-group preferences">
                        <Job/>
                        <RelatedCandidate/>
                        <Interview/>
                        <Offer/>
                        <Conver/>
                        <EmployeeRef/>
                   
                    </ul>
                  </div>{/*/recruit tab*/}
                  {/*/candidate tab*/}
                    <CanTab/>
                  {/*/task tab*/}
                  <TaskTab/>
                 {/*/vendor tab*/}
                 <Vendor/>
                  {/*/general tab*/}
                  <GenTab/>
                </div>{/*/tab content*/}
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4>Configure Email Notifications</h4>
              <p>Do you wish to send a warm and personalized acknowledgement email to every candidate who applies to your company? Do you wish to send a policy guide to help any employee who requests a transfer? Email notifications help you customize (almost) every email that is sent from Freshteam to candidates, employees, managers etc.</p>
              <h4 className="mt-3">Where is this shown/used?</h4>
              <p>Freshteam has default notifications that are sent to recruiters, candidates, employees etc., whenever there is any event that needs their attention. You can change the content of those emails here.</p>
              <h4 className="mt-3">Resource article(s)</h4>
              <a href="#" className="text-primary">Understanding Email Notifications.</a>
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>{/**/}

<EModal/>
   
        </>
    )
}

export default EmailNotification
