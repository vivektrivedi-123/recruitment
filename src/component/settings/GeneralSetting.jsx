import React from 'react'
import { NavLink } from 'react-router-dom'
function GeneralSetting() {
    return (
        <>
   <div className="mt-5">
  <h5>General</h5>
  <div className="email-menu-list labels-list">
    <NavLink to="/company" className="text-info font-600 ">Company</NavLink>
    <NavLink to="/locations" className="text-info font-600">Locations</NavLink>
    <NavLink to="/departments" className="text-info font-600 ">Departments</NavLink>
    <NavLink to="/sub-departments" className="text-info font-600">Sub Departments</NavLink>
    <NavLink to="/teams" className="text-info font-600">Teams</NavLink>
    <NavLink to="/business-units" className="text-info font-600">Business Units</NavLink>
    <NavLink to="/preferences" className="text-info font-600">Preferences</NavLink>
  </div>
</div>

        </>
    )
}

export default GeneralSetting
