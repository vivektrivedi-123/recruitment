import React from 'react'

function PersonalInfo() {
    return (
        <>
            <div className="employee-information-form mb-4">
                  <h4 className="text-info">Personal Contact Information <i className="uil uil-lock-open-alt text-success me-1" /> </h4>
                  <div className="bg-white px-3 py-4 rounded">
                    <div className="row mx-0 mb-4">
                      <div className="col-md-6">
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <label className="text-info d-inline-block px-1">Home Address</label>
                          </div>
                        </div>
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <div className="form-floating">
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue 
                                placeholder="address" 
                                />
                              <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">Street</label>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <div className="form-floating">
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue 
                                placeholder="address" 
                                />
                              <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">City</label>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <div className="form-floating">
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue 
                                placeholder="address" 
                                />
                              <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">State/Provision</label>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <div className="form-floating position-relative">
                              <select className="form-control select2 shadow" data-toggle="select2">
                                <option>India</option>
                                <option>USA</option>
                              </select>
                              <label className="text-info  d-inline-block px-1">Country</label>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <div className="form-floating">
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue 
                                placeholder="address" 
                                />
                              <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">Zip/Postal code</label>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <div className="form-floating">
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue 
                                placeholder="address" 
                                />
                              <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">Personal Email</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <label className="text-info d-inline-block px-1">Communication Address </label>
                          </div>
                        </div>
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <div className="form-floating">
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue 
                                placeholder="address" 
                                />
                              <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">Street</label>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <div className="form-floating">
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue 
                                placeholder="address" 
                                />
                              <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">City</label>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <div className="form-floating">
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue 
                                placeholder="address" 
                                />
                              <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">State/Provision</label>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <div className="form-floating position-relative">
                              <select className="form-control select2 shadow" data-toggle="select2">
                                <option>India</option>
                                <option>USA</option>
                              </select>
                              <label className="text-info  d-inline-block px-1">Country</label>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <div className="form-floating">
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue 
                                placeholder="address" 
                                />
                              <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">Zip/Postal code</label>
                            </div>
                          </div>
                        </div>
                        <div className="row mx-0 mb-3">
                          <div className="col-md-12">
                            <div className="d-flex">
                              <div className="btn-group justify-content-sm-end ">
                                <button type="button" className="border bg-white dropdown-toggle rounded border-end-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Mobile
                                  <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu  topbar-dropdown-menu shadow" aria-labelledby="dropdownMenuButton" data-popper-placement="bottom-end">
                                  <li className="dropdown-item"> <a href="#"> Mobile </a></li>
                                  <li className="dropdown-item"> <a href="#"> Office Ext. </a></li>
                                  <li className="dropdown-item"> <a href="#"> Others </a></li>
                                  <li className="dropdown-item"> <a href="#"> Work </a></li>
                                </ul>
                              </div>
                              <input 
                                type="text" 
                                className="form-control border-left-radius-0" 
                                defaultValue 
                                id="Workstation" 
                                placeholder="Contact Number" 
                                />
                              <i className="uil uil-plus-circle fs-3 ms-1 text-success" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
                <div className="employee-information-form mb-4">
                  <h4 className="text-info">Dependent Information  <i className="uil uil-lock-open-alt text-success me-1" /> </h4>
                  <div className="bg-white px-3 py-4 rounded">
                    <div className="row mx-0">
                      <div className="col-md-12">
                        <h5 className="mt-0 py-0">Dependent Information
                        </h5>
                        <div className>
                          <a href className="d-flex " data-bs-toggle="modal" data-bs-target="#add-dependent">
                            <i className="uil uil-plus-circle fs-3 text-primary  me-2" />
                            <h5 className="mt-1 py-0 mb-1 text-primary">Add Dependent Information
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="employee-information-form mb-4">
                  <h4 className="text-info">Emergency Information  <i className="uil uil-lock-open-alt text-success me-1" /> </h4>
                  <div className="bg-white px-3 py-4 rounded">
                    <div className="row mx-0">
                      <div className="col-md-12">
                        <h5 className="mt-0 py-0">Emergency Contact
                        </h5>
                        <div className>
                          <a href className="d-flex " data-bs-toggle="modal" data-bs-target="#emergency-contact">
                            <i className="uil uil-plus-circle fs-3 text-primary  me-2" />
                            <h5 className="mt-1 py-0 mb-1 text-primary">Add Emergency Contact Information
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="employee-information-form mb-4">
                  <h4 className="text-info">Emergency Information  <i className="uil uil-lock-open-alt text-success me-1" /> </h4>
                  <div className="bg-white px-3 py-4 rounded">
                    <div className="row mx-0">
                      <div className="col-md-12">
                        <h5 className="mt-0 py-0">Social Profiles
                        </h5>
                        <div className="dropdown">
                          <a href="#" className="text-info border-0 d-flex px-0 semi-bold bg-transparent dropdown-toggle" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="true">
                            <i className="uil uil-plus-circle fs-3 text-primary  me-2" />
                            <h5 className="mt-1 py-0 mb-1 text-primary">Add New Social Profile
                            </h5>
                          </a>
                          <div className="dropdown-menu rounded form-floating bg-white p-2">
                            <input 
                              type="text" 
                              className="form-control" 
                              defaultValue 
                              placeholder="Name" 
                              />
                            <label className="text-info  d-inline-block px-1"> Name<span className="text-danger">*</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="add-dependent" tabIndex={-1} aria-labelledby="myLargeModalLabel" role="dialog" aria-modal="true">
    <div className="modal-dialog modal-lg px-5">
      <div className="modal-content">
        <div className="modal-header px-3">
          <h4 className="modal-title" id="standard-modalLabel">Add Dependent Information
          </h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body  px-3">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="form-floating">
                <input 
                  type="text" 
                  className="form-control" 
                  defaultValue 
                  placeholder="Name" 
                  />
                <label className="text-info  d-inline-block px-1"> Name<span className="text-danger">*</span></label>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="form-floating position-relative">
                <select className="form-control select2 shadow" data-toggle="select2">
                  <option>Parent</option>
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Husband</option>
                  <option>Wife</option>
                </select>
                <label className="text-info  d-inline-block px-1">Relationship</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6  mb-3">
              <div className="form-floating position-relative">
                <select className="form-control select2 shadow" data-toggle="select2">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Not to prefer</option>
                </select>
                <label className="text-info  d-inline-block px-1">Gender</label>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="field form-floating mb-0">
                <input 
                  className="form-control" 
                  type="date" 
                  name="date" 
                  />
                <label className="text-info  d-inline-block px-1">Date of Birth</label>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer justify-content-start">
          <div className="ms-auto pe-3">
            <ul className="list-unstyled mb-0 ">
              <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info" data-bs-dismiss="modal" aria-label="Close">Cancel</button></li>
              <li className="list-inline-item text-center rounded ">
                <button type="button" className="btn btn-primary">Save</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


<div className="modal fade" id="emergency-contact" tabIndex={-1} aria-labelledby="myLargeModalLabel" role="dialog" aria-modal="true">
  <div className="modal-dialog modal-lg px-5">
    <div className="modal-content">
      <div className="modal-header px-3">
        <h4 className="modal-title" id="standard-modalLabel">dd Emergency Contact
        </h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body  px-3">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="form-floating">
              <input 
                type="text" 
                className="form-control" 
                defaultValue 
                placeholder="Name"
                 />
              <label className="text-info  d-inline-block px-1"> Name<span className="text-danger">*</span></label>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-floating position-relative">
              <select className="form-control select2 shadow" data-toggle="select2">
                <option>Parent</option>
                <option>Father</option>
                <option>Mother</option>
                <option>Husband</option>
                <option>Wife</option>
              </select>
              <label className="text-info  d-inline-block px-1">Relationship</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6  mb-3">
            <div className="form-floating">
              <input 
                type="text" 
                className="form-control" 
                defaultValue 
                placeholder="number" 
                />
              <label className="text-info  d-inline-block px-1">Contact Number<span className="text-danger">*</span></label>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-floating">
              <input 
                 type="text" 
                 className="form-control" 
                 defaultValue 
                 placeholder="number" 
                 />
              <label className="text-info  d-inline-block px-1">Email Address</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12  mb-3">
            <div className="form-floating">
              <textarea 
                className="form-control h-auto" 
                id="floatingInput" 
                placeholder="test" 
                defaultValue={""} 
                />
              <label className="text-info  d-inline-block px-1">Contact Number</label>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer justify-content-start">
        <div className="ms-auto pe-3">
          <ul className="list-unstyled mb-0 ">
            <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info" data-bs-dismiss="modal" aria-label="Close">Cancel</button></li>
            <li className="list-inline-item text-center rounded ">
              <button type="button" className="btn btn-primary">Save</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  
        </>
    )
}

export default PersonalInfo
