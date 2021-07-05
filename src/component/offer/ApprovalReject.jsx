import React, { useState } from 'react'
import Navigation from '../../common/Navigation'
import Table from '../../common/Table'
import Topbar from '../../common/Topbar'
import data from '../../JobData.json'
import Sidebar from '../settings/Sidebar'
function ApprovalReject() {
    const[approval,setAproval]=useState(data.approvalReject)
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
      {/*sidebar accordion*/}
    <Sidebar name="Departments"/>
      {/*/sidebar accordion*/}
    </div>
  </div>
  <div className="col-10">
    <div className="row">
     <Table data={approval}/>
<div className="col-lg-3 text-info p-4">
   <h4>Manage Offer Reject Reasons</h4>
  <p>Each approver has their own way of saying why they are rejecting an offer. However, this does not make it easy to analyse problems like "What are the top reasons for offers getting rejected?".
    Using Reject Reasons, <strong> you can give a pre-defined list of reasons for the approver to choose from.</strong> An approver can also add their own reason, but it will be added to this list and the other approvers can use the same. This way, there are no two versions of the same reject reason in your ATS.</p>
  <h4 className="mt-3">Where is this shown/used?</h4>
  <p>- When an approver rejects an offer, the approver has to choose one of the reasons listed here. Optionally, they can enter a new reason that will get added to this list. <br />
    - If the admin directly marks an offer as "Rejected" (either before or after approval), the admin has to choose one of the reasons listed here. Optionally, they can enter a new reason which will get added to this list.</p>
  <h4 className="mt-3">Resource article(s)</h4>
  <a href="#" className="text-primary">Adding Offer Reject Reasons</a>
</div>
    </div>
  </div>
</div> 
    </div>
    {/**/}
  </div>
  {/**/}
</div>
   
        </>
    )
}

export default ApprovalReject
