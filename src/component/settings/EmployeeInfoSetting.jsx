import React from 'react'
import {NavLink} from 'react-router-dom'
function EmployeeInfoSetting() {
    return (
        <>
        <div>
  <div className="mt-3">
    <h5>Bulk Create New Employees </h5>
    <div className="email-menu-list labels-list">
      <a href="g-suite-directory.html" className="text-info font-600">G Suite Directory</a>
      <a href="office-directory" className="text-info font-600">Office 365 Directory</a>
      <NavLink to="/csv" className="text-info font-600">CSV File</NavLink>
    </div>
  </div>
  <hr />
  <div className="mt-3">
    <h5>Bulk Update Current Employees </h5>
    <div className="email-menu-list labels-list">
      <NavLink to="/csv-file2" className="text-info font-600">CSV File</NavLink>
    </div>
  </div>
  <hr />
  <div className="mt-3">
    <h5>Profile Fields </h5>
    <div className="email-menu-list labels-list">
      <a href="employee-record.html" className="text-info font-600">Employee Record</a>
    </div>
  </div>
  <hr />
  <div className="mt-3">
    <h5>HR Workflows </h5>
    <div className="email-menu-list labels-list">
      <a href="auto-assign-hr-partner.html" className="text-info font-600">Auto-assign HR Partner</a>
    </div>
  </div>
</div>

        </>
    )
}

export default EmployeeInfoSetting
