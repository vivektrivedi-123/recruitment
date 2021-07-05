import React from 'react'

import {Link, NavLink} from 'react-router-dom'
function Navigation() {
    return (
        <>
      <div className="leftside-menu" id="leftside">
  <   div className="h-100" id="leftside-menu-container" data-simplebar>
    < ul className="side-nav">
      <li className="side-nav-item">
        <NavLink to="/" className="side-nav-link" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
          <i className="uil uil-dashboard" />
        </NavLink>
      </li>
      <li className="side-nav-item">
        <a href="#" className="side-nav-link">
          <i className="dripicons-inbox" />
        </a>
      </li>
      <li className="side-nav-item">
        <a data-bs-toggle="collapse" href="#" aria-expanded="false" aria-controls="sidebarDashboards" className="side-nav-link">
          <i className="uil uil-briefcase-alt" />
          <i className="mdi mdi-dots-vertical" />
        </a>
        <div className="collapse" id="sidebarDashboards">
          <ul className="side-nav-second-level shadow">
            <li className="sub-head">
              Recruitment
            </li>
            <li className="select">
              <NavLink to="/recruitment/recruite"><i className="uil uil-search" /> Recruit</NavLink>
            </li>
            <li className="select">
              <NavLink to="/recruitment/conversation"> <i className="uil-comments-alt" /> Conversations</NavLink>
            </li>
            <li className="select">
              <a href="#"> <i className="dripicons-list" /> Tasks</a>
            </li>
          </ul>
        </div>
      </li>
      <li className="side-nav-item">
        <a data-bs-toggle="collapse shadow" href="#" aria-expanded="false" aria-controls="sidebarDashboards" className="side-nav-link">
          <i className="dripicons-user-group" />
          <i className="mdi mdi-dots-vertical" />
        </a>
        <div className="collapse" id="sidebarDashboards">
          <ul className="side-nav-second-level shadow">
            <li className="sub-head">
              Employees
            </li>
            <li className="select">
              <NavLink to="/employee"> <i className="uil uil-users-alt" /> Employee Directory</NavLink>
            </li>
            <li className="select">
              <a href="#"><i className="dripicons-network-3" /> Org Chart</a>
            </li>
            <li className="select">
              <a href="#"> <i className="dripicons-rocket" /> Onboarding</a>
            </li>
            <li className="select">
              <a href="#"> <i className="uil uil-exit" /> Offboarding</a>
            </li>
          </ul>
        </div>
      </li>
      <li className="side-nav-item">
        <a href="#" className="side-nav-link">
          <i className="uil uil-chart" />
        </a>
      </li>
      <li className="side-nav-item">
        <NavLink to="/settings" className="side-nav-link">
          <i className="uil uil-cog" />
        </NavLink>
      </li>
    </ul>
  </div>
  <div className="clearfix" />
</div>




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
  <div className="rightbar-content h-100" data-simplebar>
    <div className="p-3">
      <div className="field mb-3">
        <input className="form-control" type="text" name="Status" id="Status" placeholder="Search..." />
        <label htmlFor="Status">Status</label>
      </div>
      <div className="field mb-3">
        <input className="form-control" type="text" name="Recruiter" id="Recruiter" placeholder="Search..." />
        <label htmlFor="Recruiter">Recruiter</label>
      </div>
      <div className="field mb-3">
        <input className="form-control" type="text" name="Manager" id="Manager" placeholder="Search..." />
        <label htmlFor="Manager">Hiring Manager</label>
      </div>
      <div className="field mb-3">
        <input className="form-control" type="text" name="Job" id="Job" placeholder="Search..." />
        <label htmlFor="Job">Job Type</label>
      </div>
      <div className="field mb-3">
        <input className="form-control" type="text" name="Department" id="Department" placeholder="Search..." />
        <label htmlFor="Department">Department</label>
      </div>
      <div className="field mb-3">
        <input className="form-control" type="text" name="Experience" id="Experience" placeholder="Search..." />
        <label htmlFor="Experience">Experience</label>
      </div>
      <div className="field mb-3">
        <input className="form-control" type="text" name="Location" id="Location" placeholder="Search..." />
        <label htmlFor="Location">Location</label>
      </div>
      <div className="field ">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="customCheck2" />
          <label className="form-check-label" htmlFor="customCheck2">Remote jobs only</label>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Navigation
