import Navigation  from '../../common/Navigation'
import React from 'react'
import Sidebar from '../settings/Sidebar'
import Topbar from '../../common/Topbar'
import Table from '../../common/Table'
import CanRejTable from './CanRejTable'
import "./CandidateRejected.css"
function CandidateReject() {
    const reason=[
        {name:"Reference check failed",_id:1},
        {name:"Overqualified",_id:2},
        {name:"Not a cultural fit",_id:3},
        {name:"Unable to reach",_id:4},
        {name:"Hired elsewhere",_id:5}
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
         <Sidebar name="Candidate Reject reasons"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
              <CanRejTable data={reason}/>
              
   {/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4>Manage Candidate Reject Reasons</h4>
              <p>Why are candidates rejected? This will be a question that you want to get on top of and solve at some stage in your recruitment process. You can use this section to create standard Candidate Reject Reasons to ensure all recruiters follow the same language.</p>
              <h4 className="mt-2">Where is this shown/used?</h4>
              <p>Whenever a recruiter rejects a candidate, they have to choose one of the reject reasons specified here. Freshteam gives you an out of the box report that helps you analyse why candidates are rejected.</p>
              <p>Editing the reject reasons will modify the ones used in already rejected candidate profiles. Refer the candidate timeline entries for previously used reject reasons.</p>
              <h4 className="mt-2">Resource article(s)</h4>
              <a href="#" className="text-primary">How to manage candidate reject reasons?</a>
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

export default CandidateReject