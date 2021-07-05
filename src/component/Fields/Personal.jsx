import React, { useState } from 'react'

function Personal({change,errors}) {


    return (
        <>
               <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingtwo">
                      <button className="accordion-button bg-light collapsed font-600 fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwo" aria-expanded="false" aria-controls="flush-collapsetwo">
                        Personal Details
                      </button>
                    </h2>
                    <div id="flush-collapsetwo" className="accordion-collapse collapse" aria-labelledby="flush-headingtwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">First Name <sup className="text-danger">*</sup></label>
                              <input 
                                type="text" 
                                id="simpleinput" 
                                name="first_name"
                                onChange={change}
                                className="form-control" 
                            />
                            {errors.first_name?<p className="text-danger">{errors.first_name}</p>:""}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">Middle Name </label>
                              <input 
                                type="text"
                                 id="simpleinput"
                                 name="middle-name"
                                 onChange={change}
                                  className="form-control" 
                                />
                                 
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">Last Name <sup className="text-danger">*</sup></label>
                              <input 
                                 type="text" 
                                 id="simpleinput" 
                                 className="form-control"
                                 name="last_name"
                                 onChange={change}
                             />
                               {errors.last_name?<p className="text-danger">{errors.last_name}</p>:""}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">Gender </label>
                              <select name="gender" onChange={change} className="form-select" id="example-select">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label htmlFor="example-date" className="form-label">Date</label>
                              <input 
                                className="form-control" 
                                id="example-date" 
                                type="date" 
                                name="date" 
                                onChange={change}
                            />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">Street </label>
                              <input 
                                type="text" 
                                id="simpleinput" 
                                className="form-control"
                                name="stret"
                                onChange={change} 
                            />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label htmlFor="example-date" className="form-label">City</label>
                              <input 
                                className="form-control"
                                id="example-date" 
                                 type="text" 
                                 name="city"
                                 onChange={change} 
                                />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">State/Province </label>
                              <input 
                                type="text" 
                                id="simpleinput" 
                                name="state"
                                onChange={change}
                                className="form-control" 
                            />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label htmlFor="example-date" className="form-label">Country</label>
                              <select className="form-select" name="country" onChange={change} id="example-select">
                                <option>India</option>
                                <option>USA</option>
                                <option>France</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">Zip/Postal Code </label>
                              <input 
                                type="text" 
                                id="simpleinput"
                               className="form-control" 
                               onChange={change}
                               name="zip"
                               />
                            {errors.zip?<p className="text-danger">{errors.zip}</p>:""}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label htmlFor="example-date" className="form-label">Email Address</label>
                              <input 
                                type="email" 
                                id="simpleinput" 
                                className="form-control"
                                name="email"
                                onChange={change}
                                />
                                {errors.email?<p>{errors.email}</p>:""}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">Mobile Number </label>
                              <input 
                                type="phone" 
                                id="simpleinput" 
                                className="form-control"
                                name="mobile_number"
                                onChange={change} 
                            />
                            {
                              errors.mobile_number?<p className="text-danger">{errors.mobile_number}</p>:""
                            }
                            </div>
                          </div>
                            <div className="col-md-6">
                            <div className="mb-2">
                              <label className="form-label">Phone Number </label>
                              <input 
                                type="phone" 
                                id="simpleinput" 
                                className="form-control"
                                name="phone_number"
                                onChange={change} 
                            />
                            {errors.phone_number?<p className="text-danger">{errors.phone_number}</p>:""}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>   
        </>
    )
}

export default Personal
