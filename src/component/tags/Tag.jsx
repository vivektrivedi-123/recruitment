import React from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import '../../css/tag.css'
function Tag() {
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
           <Sidebar name="Tag"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white vh-100">
                <div className="d-flex justify-content-between align-items-end">
                  <div className="row w-100">
                    <div className="col-6">
                      <div className="input-group tags">
                        <input type="text" className="form-control border-end-0" placeholder="Filter" aria-label="Recipient's username" />
                        <div className="input-group-append">
                          <span className="input-group-text h-100 bg-white border-start-0"><i className="fa fa-search" /></span>
                        </div>
                      </div> 
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Sort by name
                    </button>
                    <ul className="dropdown-menu">
                      <li className="d-flex justify-content-between align-items-center"><a className="dropdown-item" href="#">Sort by name </a><i className="mdi mdi-check me-2" /></li>
                      <li><a className="dropdown-item" href="#">Sort by usage</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li className="d-flex justify-content-between align-items-center"><a className="dropdown-item" href="#">Ascending </a><i className="mdi mdi-check me-2" /></li>
                      <li><a className="dropdown-item" href="#">Descending</a></li>
                    </ul>
                  </div>
                </div> 
                <div className="row mx-0 mt-4">
                  <div className="col-md-4 mt-3">
                    <div className="position-relative">
                      <div className="show-btns row">
                        <div className="col-10 bg-light p-2">Aptitude score is low</div>
                        <div className="col-2 ">2</div>
                        <div className="hover-btns position-absolute" id="tooltip-container2">
                          <span>
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                            <i className=" mdi mdi-trash-can-outline fs-4 me-2" data-bs-toggle="modal" data-bs-target="#delete-department" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="position-relative">
                      <div className="show-btns row">
                        <div className="col-10 bg-light p-2">hello</div>
                        <div className="col-2 ">0</div>
                        <div className="hover-btns position-absolute" id="tooltip-container2">
                          <span>
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                            <i className=" mdi mdi-trash-can-outline fs-4 me-2" data-bs-toggle="modal" data-bs-target="#delete-department" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="position-relative">
                      <div className="show-btns row">
                        <div className="col-10 bg-light p-2">not open for work from office</div>
                        <div className="col-2 ">1</div>
                        <div className="hover-btns position-absolute" id="tooltip-container2">
                          <span>
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                            <i className=" mdi mdi-trash-can-outline fs-4 me-2" data-bs-toggle="modal" data-bs-target="#delete-department" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="position-relative">
                      <div className="show-btns row">
                        <div className="col-10 bg-light p-2">Shortlisted</div>
                        <div className="col-2 ">2</div>
                        <div className="hover-btns position-absolute" id="tooltip-container2">
                          <span>
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                            <i className=" mdi mdi-trash-can-outline fs-4 me-2" data-bs-toggle="modal" data-bs-target="#delete-department" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="position-relative">
                      <div className="show-btns row">
                        <div className="col-10 bg-light p-2">Skills not matching</div>
                        <div className="col-2 ">1</div>
                        <div className="hover-btns position-absolute" id="tooltip-container2">
                          <span>
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                            <i className=" mdi mdi-trash-can-outline fs-4 me-2" data-bs-toggle="modal" data-bs-target="#delete-department" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4>Managing Tags</h4>
              <p>When you're working on a pipeline of hundreds of candidates, you might want to quickly capture some information on the candidate's profile, like "knows French", "fresher" etc. Tags give you an easy way to capture this information and organize candidates based on it.</p>
              <h4 className="mt-3">Where is this shown/used?</h4>
              <p>1. You can filter email applicants or candidates in jobs or talent pool based on tags.</p>
              <p>2. You can set Autopilot rules on candidates based on tags.</p>
              <p>3. You can use tags to filter or group candidates in Reports.</p>
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>







        </>
    )
}

export default Tag
