import { data } from 'jquery'
import React, { useState } from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import Assessments from './Assessments'
import JobBoards from './JobBoards'
import List from './List'
import OnlineInterview from './OnlineInterview'
import Productivity from './Productivity'
function Integration() {


const data=[
    "hi",
    "hello",
    "kj",
    "kj"
]
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
           <Sidebar name="Integrations"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-lg-9 p-4">
              <div className="ms-4 mt-2 p-4 bg-white">
                        <Productivity/>
                    <Assessments/>
                    <OnlineInterview/>
                    <JobBoards/>
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4 manage-sec">
              <h4>Integrations</h4>
              <p>Want to send calendar invites to candidates soon as you schedule an interview? We have integrations that can integrate with your calendar. Want to keep your employee directory in sync with your google/office 365 account? We have an integration for that too! Freshteam can work well with many of your existing tools to make recruitment and HR management a seamless exercise for you.
              </p>
              <h4 className="mt-3">Where is this shown/used?</h4>
              <p className="mb-2">Each integration powers up a different set of workflows.For example,
              </p>
              <p>
                1. The calendar integration shows you the availability of interviewers when you are trying to schedule an interview.</p>
              <p>2. Calendar integration can also block the calendar of an employee when they are applying for TimeOff and decline events in that time period</p>
              <p>3. Online assessment tools can be made part of your hiring workflow. You can enable the integration and then configure it under Job Details&gt;Hiring Process. This way, you can create a hiring stage where Freshteam automatically sends an online assessment to the candidate.</p>
              <h4 className="mt-3">Resource article(s)</h4>
              <div className="help-description">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a className="btn-link" href="#" target="_blank" rel="noopener">
                      Integrating Freshteam with HackerRank.
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="btn-link" href="#" target="_blank" rel="noopener">
                      Integrating Freshteam with ClassMarker.
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="btn-link" href="#" target="_blank" rel="noopener">
                      Connecting your Google Calendar with Freshteam
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="btn-link" href="#" target="_blank" rel="noopener">
                      Publishing jobs to Indeed.
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="btn-link" href="#" target="_blank" rel="noopener">
                      Integrating Freshservice with Freshteam
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="btn-link" href="#" target="_blank" rel="noopener">
                      Integrating Freshteam with Codility
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="btn-link" href="#" target="_blank" rel="noopener">
                      Integrating Freshteam with Google Meet
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="btn-link" href="#" target="_blank" rel="noopener">
                      Integrating Freshteam with Office 365
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="btn-link" href="#" target="_blank" rel="noopener">
                      Integrating Freshteam with Emails
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="btn-link" href="#" target="_blank" rel="noopener">
                      Integrating Freshteam with HackerEarth
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>{/**/}

   
        </>
    )
}

export default Integration
