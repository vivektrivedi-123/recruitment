import React from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import EmpTab from './EmpTab'
import GeneralTab from './GeneralTab'
import "./Preference.css"
import RecruitTab from './RecruitTab'
import Tab from "./Tab"
function Preference() {
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
            <Sidebar name="Preferences" />
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white">
               <Tab/>
                <div className="tab-content">
                    <GeneralTab/>
                 {/*/general tab*/}
                 <RecruitTab/>
                 {/*/recruit tab*/}
                 <EmpTab/>
                </div>
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4>System Preferences</h4>
              <p>Every HR process is unique and this section allows you to customize Freshteam to suit your HR process. The "General" section allows you to turn ON/turn OFF core modules of the system. Here you can decide whether you want to manage TimeOff, Employee Onboarding, etc. using Freshteam.</p>
              <p>The other sections allow you to customize each core module based on your HR process. For example, you can enable "CoolOff Period" for job applicants if you have a policy at your company OR you can turn it off if you do not have a policy for that. Similarly you could setup a Notice Period for employees who request exit from the company if you wish.</p>
              <h4 className="mt-3">Where is this shown/used?</h4>
              <p>Each setting in this section controls a different part of Freshteam. Please read the description of each setting to know where it is used.</p>
              <h4 className="mt-3">Resource article(s)</h4>
              <a href="#" className="text-primary">Understanding Preferences - Plan Wise</a>
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

export default Preference
