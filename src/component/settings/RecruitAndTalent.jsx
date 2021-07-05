import React from 'react'
import { NavLink } from 'react-router-dom'

function RecruitAndTalent() {
    return (
        <>
   <div>
  <div className="mt-3">
    <h5>Productivity</h5>
    <div className="email-menu-list labels-list">
      <NavLink to="/email-notifications" className="text-info font-600">Email Notifications</NavLink>
      <a href="canned-responses.html" className="text-info font-600">Canned Responses</a>
    </div>
  </div>
  <hr />
  <div className="mt-3">
    <h5>Roles &amp; Privileges</h5>
    <div className="email-menu-list labels-list">
      <NavLink to="/manage/roles" className="text-info font-600">Manage Roles</NavLink>
    </div>
  </div>
  <hr />
  <div className="mt-3">
    <h5>Account</h5>
    <div className="email-menu-list labels-list">
      <NavLink to="/account" className="text-info font-600">Account</NavLink>
      <a href="billing.html" className="text-info font-600">Plans &amp; Billing</a>
      <a href="security.html" className="text-info font-600">Security</a>
    </div>
  </div>
  <hr />
  <div className="mt-3">
    <h5>Integrate with other Apps </h5>
    <div className="email-menu-list labels-list">
      <NavLink to="/integrations" className="text-info font-600">Integration</NavLink>
      <a href="apps.html" className="text-info font-600">Apps</a>
    </div>
  </div>
  <hr />
  <div className="mt-2">
    <h5>Job Setup </h5>
    <div className="email-menu-list labels-list">
      <NavLink to="/email" className="text-info font-600">Email</NavLink>
      <NavLink to="/tags" className="text-info font-600">Tags</NavLink>
      <NavLink to="javascript: void(0);" className="text-info font-600">Source</NavLink>
      <NavLink to="/vendors" className="text-info font-600">Vendors</NavLink>
      <NavLink to="/candidate-reject-reason" className="text-info font-600">Candidate Reject reasons</NavLink>
    </div>
  </div>
  <hr />
  <div className="mt-3">
    <h5>Job Publishing </h5>
    <div className="email-menu-list labels-list">
      <NavLink to="/career-site" className="text-info font-600">Career Site</NavLink>
      <NavLink to="/job-fields" className="text-info font-600">Job Fields</NavLink>
      <NavLink to="/job-embeds" className="text-info font-600">Job Embeds</NavLink>
      <NavLink to="./social" className="text-info font-600">Social</NavLink>
      <a href="listener.html" className="text-info font-600">Listener</a>
    </div>
  </div>
  <hr />
  <div className="mt-3">
    <h5>Offer </h5>
    <div className="email-menu-list labels-list">
      <NavLink to="/templates" className="text-info font-600">Templates</NavLink>
      <NavLink to="fields" className="text-info font-600">Fields</NavLink>
      <NavLink to="/decline-reason" className="text-info font-600">Decline Reasons</NavLink>
      <a href="approval-rules.html" className="text-info font-600">Approval Rules</a>
      <NavLink to="/approval-reject" className="text-info font-600">Approval Reject Reasons</NavLink>
    </div>
  </div>

</div>

        </>
    )
}

export default RecruitAndTalent
