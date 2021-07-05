import React, { useState } from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import "./JobField.css"
function JobField() {
  const[state,setState]=useState({
    job_title:"",
    department_name:"",
    job_type:"",
    location_name:"",
    job_description:"",
    remote_job:false,
    allow_employees:false,
    skills:"",
    experience:"",
    prefer_location:"",
    salary:""
  })

const handleChange=(e)=>{
  const{value,name}=e.target;
  setState({...state,[name]:value})
  console.log(value)
}


const handleChecked=(e)=>{
  const{value,name,checked}=e.target;
  setState({...state,[name]:checked})
  console.log(checked)
}
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(state)
}

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
            
          <Sidebar name="Job Fields"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white">
                <div className="alert alert-success mb-3" role="alert">
                  <div className="d-flex align-items-center">
                    <h4 clss="fw-normal">Drag &amp; Drop fields</h4>
                    <div className="border-left ms-4" id="tooltip-fields"><i className="mdi mdi-view-day-outline me-1 mdi-24px align-middle" data-bs-container="#tooltip-fields" data-bs-toggle="tooltip" data-bs-placement="right" title="Add Custom Field" /> <span className="fs-4 align-middle">Add Custom Field</span></div>
                  </div>
                </div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button bg-light collapsed font-600 fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Default Fields
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <div className="mb-2">
                          <label htmlFor="simpleinput" className="form-label mt-2">Enter a new job title <sup className="text-danger">*</sup></label>
                          <input 
                            type="text" 
                            id="simpleinput"  
                            className="form-control"
                            name="job_title"
                            value={state.job_title}
                            onChange={handleChange} 
                          
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">Department <sup className="text-danger">*</sup></label>
                              <select className="form-select" value={state.department_name} id="example-select" name="department_name" onChange={handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">Job type <sup className="text-danger">*</sup></label>
                              <select className="form-select" id="example-select" name="job_type" value={state.job_type} onChange={handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">Location <sup className="text-danger">*</sup></label>
                              <select className="form-select" id="example-select" name="location_name" value={state.location_name} onChange={handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mt-2">
                              <div className="form-check pt-2">
                                <input 
                                  type="checkbox" 
                                  className="form-check-input" 
                                  id="customCheck1" 
                                  name="remote_job"
                                  onChange={handleChecked}
                                  checked={state.remote_job}
                                />
                                <label className="form-check-label ms-2" htmlFor="customCheck1">Mark as remote job</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">Preferable Location for Remote Job </label>
                              <select className="form-select" id="example-select" name="prefer_location" onChange={handleChange} value={state.prefer_location}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mt-2">
                              <div className="form-check form-switch pt-2">
                                <input 
                                  type="checkbox" 
                                  className="form-check-input" 
                                  id="customSwitch1"
                                  name="allow_employees"
                                  onChange={handleChecked}
                                  checked={state.allow_employees}
                                />
                                <label className="form-check-label ms-2" htmlFor="customCheck1">Allow employees to apply</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-2">
                          <label htmlFor="simpleinput" className="form-label mt-2">Job Description <sup className="text-danger">*</sup></label>
                          <input 
                            type="text" 
                            id="simpleinput" 
                            className="form-control" 
                            onChange={handleChange}
                            name="job_description"
                            value={state.job_description}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 job-fields">
                  <div className="col-md-6">
                    <div className="mb-2 position-relative">
                      <div className="show-btns">
                        <label className="form-label">Skills <sup className="text-danger">*</sup></label>
                        <select className="form-select" value={state.skills} id="example-select" name="skills" onChange={handleChange}>
                          <option>select</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <div className="hover-btns position-absolute" id="tooltip-container2">
                          <i className="mdi mdi-trash-can-outline me-2" /> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-2 position-relative">
                      <div className="show-btns">
                        <label className="form-label">Experience <sup className="text-danger">*</sup></label>
                        <select className="form-select" id="example-select" onChange={handleChange} name="experience">
                          <option>select</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <div className="hover-btns position-absolute" id="tooltip-container2">
                          <i className="mdi mdi-trash-can-outline me-2" /> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-2 position-relative">
                      <div className="show-btns">
                        <label htmlFor="simpleinput" className="form-label mt-2">Salary Detail </label>
                        <input 
                          type="text" 
                          id="simpleinput" 
                          className="form-control" 
                          name="salary"
                          onChange={handleChange}
                          value={state.salary}

                          />
                        <div className="hover-btns position-absolute" id="tooltip-container2">
                          <i className="mdi mdi-trash-can-outline me-2" /> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-clear me-3 mt-3">Cancle</button>
                <button className="btn btn-primary mt-3" onClick={handleSubmit}>Save</button>
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4 className="mt-0">Delete Fields</h4>
              <p>Drag and Drop to restore these fields</p>
              <button className="btn btn-white bg-white"><i className="mdi mdi-calendar-minus me-1" /> Turn arround time</button><br />
              <button className="btn btn-light bg-white mt-2"><i className="mdi mdi-view-day-outline me-1" /> gGAGHg <i className="mdi mdi-trash-can-outline ms-1" /></button><br />
              <button className="btn btn-light bg-white mt-2"><i className="mdi mdi-view-day-outline me-1" /> Department <i className="mdi mdi-trash-can-outline ms-1" /></button><br />
              <button className="btn btn-light bg-white mt-2"><i className="mdi mdi-view-day-outline me-1" /> q324545 <i className="mdi mdi-trash-can-outline ms-1" /></button> 
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

export default JobField
