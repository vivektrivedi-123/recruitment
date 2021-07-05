import React from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import TemplateModal from './TemplateModal'
import "./Template.css"
function Template() {
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
           <Sidebar name="Templates"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white">
                <button className="btn btn-outline-secondary mb-3" data-bs-toggle="modal" data-bs-target="#full-width-modal22">Add new</button>
                <ul className="list-group ">
                  <li className="list-group-item list-group-item-action position-relative py-0" id="tooltip-container2">
                    <div className="show-btns">
                      <h4>Default</h4>
                      <p>A generic Offer Letter</p>
                      <div className="hover-btns position-absolute py-sm-2">
                        <span>
                          <i className=" dripicons-preview me-3" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Preview Template" />
                          <i className="dripicons-document-edit me-3" /> 
                          <i className=" dripicons-trash me-3" /> 
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-action position-relative py-0" id="tooltip-container2">
                    <div className="show-btns">
                      <h4>Offer</h4>
                      <p>Employment Offer</p>
                      <div className="hover-btns position-absolute py-sm-2">
                        <span>
                          <i className=" dripicons-preview me-3" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Preview Template" />
                          <i className="dripicons-document-edit me-3" /> 
                          <i className=" dripicons-trash me-3" /> 
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-action position-relative py-0" id="tooltip-container2">
                    <div className="show-btns">
                      <h4>Offer 1</h4>
                      <p>Offer 1</p>
                      <div className="hover-btns position-absolute py-sm-2">
                        <span>
                          <i className=" dripicons-preview me-3" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Preview Template" />
                          <i className="dripicons-document-edit me-3" /> 
                          <i className=" dripicons-trash me-3" /> 
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item list-group-item-action position-relative py-0" id="tooltip-container2">
                    <div className="show-btns">
                      <h4>Offer For BA</h4>
                      <p>Employment Offer-BAr</p>
                      <div className="hover-btns position-absolute py-sm-2">
                        <span>
                          <i className=" dripicons-preview me-3" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Preview Template" />
                          <i className="dripicons-document-edit me-3" /> 
                          <i className=" dripicons-trash me-3" /> 
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4>Manage Offer Letter Templates</h4>
              <p>Create standard templates for rolling out offers to any candidate in your company. This ensures all offers from your company have consistent terms and messaging while also saving a lot of time for recruiters. You can create multiple templates, say one with ESOPs, one with Relocation Allowance and so on and use them wherever needed. You can use placeholders in your offer templates to fill in dynamic content like the candidate’s name, their job title and more.</p>
              <button className="btn btn-light bg-white" data-bs-toggle="modal" data-bs-target="#dynamic-placeholders-modal">View Dynamic Placeholders</button>
              <h4 className="mt-3">Where is this shown/used?</h4>
              <p>When you move a candidate to the Offer stage, you will have an option to <strong>Make an Offer </strong> to the candidate. Once you fill in the offer details, you can choose any template to create and send the offer letter.</p>
              <p>2. While making an offer to a candidate, you can choose the location where you would like to hire the candidate.</p>
              <h4 className="mt-3">Resource article(s)</h4>
              <a href="#" className="text-primary">Uploading Offer Templates</a><br />
              <a href="#" className="text-primary">Making an Offer to a Candidate</a>
              <a href="#" className="text-primary">Understanding Email Notifications</a> 
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>{/**/}

    <TemplateModal/>   
        </>
    )
}

export default Template
