import React, { useState } from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import "./team.css"
import TeamTable from './TeamTable'
function Team() {
    const[teams,setTeams]=useState([])
    
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
            <Sidebar name="Teams"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
              <TeamTable/>
           {/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4>Manage Teams</h4>
              <p>Teams are the most granular Employee groups structured on the basis of the Employee's primary job role. An Employee can be associated to a Primary team and multiple additional teams from the profile. </p>
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>{/**/}


<div className="modal fade mt-5 py-4 show" id="delete-department" tabIndex={-1} aria-labelledby="standard-modalLabel" role="dialog" aria-modal="true">
  <div className="modal-dialog standard-modal">
    <div className="modal-content">
      <div className="modal-body px-3">
        <div className="d-flex align-items-center">
          <i className="uil uil-exclamation-octagon text-warning me-2 fs-2" />
          <p className=" mb-0 fs-4 semi-bold"> 
            Business might be associated to certain Employees. After deletion, this cannot be associated with any Employee in the future.<br />
            Do you still wish to delete this Team?
          </p>
        </div>
      </div>
      <div className="modal-footer">
        <div className="ms-auto">
          <ul className="list-unstyled mb-0 ">
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

        </>
    )
}

export default Team
