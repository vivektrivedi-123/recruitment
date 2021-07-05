import React from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import EmpInfo from './EmpInfo'
import General from './General'
import Recruitment from './Recruitment'
import './Settings.css'
function Settings() {           
    return (
        <>
<div className="wrapper">
  <div id="leftside">
<Navigation/>
  </div>
  <div className="content-page">
    <div className="content">
      <div className="navbar-custom">
        <div id="top-bar">
        <Topbar/>
        </div>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item font-600"><a href="settings.html"> Settings</a></li>
          </ol>
        </nav>
      </div>
      {/*general settings*/}
      <General/>
     {/*/general settings*/}
      {/*recruitment*/}
      <Recruitment/>
      {/*/recruitment*/}
      {/*Employee info*/}
      <EmpInfo/>
      {/*/Employee info*/}
    </div>{/**/}
  </div>{/**/}
</div>{/**/}

<div id="ClearData-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
  <div className="modal-dialog  modal-dialog-centered w-100" style={{maxWidth: 700}}>
    <div className="modal-content">
      <div className="modal-body ">
        <div className="row align-items-center">
          <div className="col-md-1 text-center">
            <i className="mdi mdi-alert-circle-outline mdi-48px text-warning" />
          </div>
          <div className="col-md-7 flex">
            <p className="my-2">Are you sure you want to clean-up sample data and start set-up process?</p>
          </div>
          <div className="col-md-4 text-center">
            <button className="btn btn-clear" data-bs-dismiss="modal" aria-hidden="true">Cancle</button>
            <button className="btn btn-info">Clear Sample Data</button>
          </div>
        </div>
      </div>
    </div>{/* /.modal-content */}
  </div>{/* /.modal-dialog */}
</div>

        </>
    )
}

export default Settings
