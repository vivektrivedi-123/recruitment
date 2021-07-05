import React, { useState } from 'react'
import Navigation from '../../common/Navigation'
import Table from '../../common/Table'
import Topbar from '../../common/Topbar'
import data from '../../JobData.json'
import Sidebar from '../settings/Sidebar'
function DeclineReason() {
    const[reason,setReason]=useState(data.declineReason)
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
     <Table data={reason}/>
     <div class="col-lg-3 text-info p-4">
                    <h4>Manage Offer Declined Reasons</h4>
                   <p>Why are offers declined? This will be a question that you want to get on top of and solve at some stage in your recruitment process. You can use this section to create standard Offer Decline Reasons to ensure all recruiters follow the same language.</p>

                   <h4 class="mt-3">Where is this shown/used?</h4>
                    <p>Whenever a recruiter marks a candidate as <strong> Offer Declined</strong>, they have to choose one of the decline reasons specified here. Freshteam gives you an out of the box report that helps you analyse why offers are declined.</p>

                  <h4 class="mt-3">Resource article(s)</h4>
                  <a href="#" class="text-primary">Adding Offer Decline Reasons</a>
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

export default DeclineReason
