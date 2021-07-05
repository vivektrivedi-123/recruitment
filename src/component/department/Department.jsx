import React,{useState,useEffect} from 'react'
import Navigation from '../../common/Navigation'
import Table from '../../common/Table'
import Topbar from '../../common/Topbar'
import data from '../../JobData.json'
import Sidebar from '../settings/Sidebar'
import axios from '../../common/axios'
import './Department.css'
function Department({data}) {


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
     <Table data={data}/>
      <div className="col-lg-3 text-info p-4">
        <h4>Manage Departments</h4>
        <p>Departments are the highest level of classification in the Organisation structure. The sub-departments, teams and business units are generally below the departments.</p>
        <p>Pro Tip: There are department level widgets in Dashboard, it’s suggested to keep fewer entities.
        </p>
        <h4>Resource article(s)</h4>
        <a href="#" className="text-primary">Adding departments/Job roles.</a>
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

export default Department
