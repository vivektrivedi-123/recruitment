import React from 'react'
import { NavLink } from 'react-router-dom'

function CandidateNav() {
    return (
        <>
            <ul className="nav nav-tabs nav-bordered ">
            <li className="nav-item ">
              <NavLink exact to="/recruitment/recruite" data-bs-toggle="tab " aria-expanded="false " className="nav-link ">
                <i className="dripicons-briefcase me-1 " />
                <span className="d-none d-md-block ">Jobs</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink exact to="/candidates" data-bs-toggle="tab " aria-expanded="false " className="nav-link ">
                <i className="dripicons-user-group me-1 " />
                <span className="d-none d-md-block ">Candidates</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/talent/pool" data-bs-toggle="tab " aria-expanded="false " className="nav-link ">
                <i className="dripicons-archive me-1 " />
                <span className="d-none d-md-block ">Talent Pool</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <a href="#emp " data-bs-toggle="tab " aria-expanded="false " className="nav-link ">
                <i className="mdi mdi-account-supervisor-circle-outline me-1 " />
                <span className="d-none d-md-block ">My Referrals</span>
              </a>
            </li>
          </ul>
        </>
    )
}

export default CandidateNav
