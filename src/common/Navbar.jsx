import React from 'react'

import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
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
     </>
    )
    }

