import React from 'react'

function SourceCategory() {
    return (
        <>
         <div className="col-lg-6">
              <div className="overflow-conversations px-sm-4">
                <div className="row bg-white rounded py-sm-3">
                  <div className="col-2">
                    <div className="avatar-md ms-sm-auto">
                      <span className="avatar-title bg-primary rounded-circle h-75 w-75 mt-sm-1 mx-sm-auto fs-3">
                        R
                      </span>
                    </div>
                  </div>
                  <div className="col-10">
                    <h4 className="text-info mt-sm-3">Ritesh Sanan</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="field mb-3">
                          <input 
                           className="form-control" 
                           type="text" 
                           name="Category" 
                           id="Category" 
                           placeholder="Search..." />
                          <label htmlFor="Category" className="w-auto">Source Category <sup className="text-danger">*</sup></label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="field mb-3">
                          <input 
                           className="form-control" 
                           type="text" 
                           name="InterviewDate" 
                           id="InterviewDate" 
                           placeholder="Search..." />
                          <label htmlFor="InterviewDate" className="w-auto">Interview Date <sup className="text-danger">*</sup></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <select className="form-control select2" data-toggle="select2">
                          <option>interview type</option>
                          <option>Onsite</option>
                          <option>Telephone</option>
                          <option>Web Conference</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <select className="form-control select2" data-toggle="select2">
                          <option>Duration</option>
                          <option>15 Min</option>
                          <option>30 Min</option>
                          <option>45 Min</option>
                          <option>1 Hr</option>
                          <option>1 Hr 30 Min</option>
                          <option>2 Hr</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row bg-white rounded mt-sm-2">
                  <div className="align-middle me-sm-2 d-flex mt-sm-2">
                    <a href="#" className="border border-grey d-flex text-info position-relative me-sm-3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <div className="font-600 bg-light p-sm-2">Resume</div>
                      <div className="p-sm-2 dropdown-toggle">
                        Ritesh(Resume).doc
                      </div>
                    </a>
                    <div className="dropdown-menu m-0 p-0" aria-labelledby="dropdownMenuButton">
                      <ul className="mb-0">
                        <li className="dropdown-item d-flex justify-content-between align-middle p-0">
                          <div className="bg-light d-flex align-items-center" style={{padding: '1.9rem'}}>
                            Resume
                          </div>
                          <a href="#" className="p-0">
                          </a><div className="d-flex justify-content-between bg-white" style={{padding: '1.9rem'}}><a href="#" className="p-0">
                              <div>
                                <p className="font-600 text-info mb-0">Ritesh(Resume).doc</p>
                                <p className="text-info mb-0">Apr 19, 2021, 17.4 kb</p>
                              </div>
                            </a><div className="d-flex" id="tooltip-container2"><a href="#" className="p-0">
                              </a><a href="#" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Download"><i className="mdi mdi-download" /></a>
                              <a href="#" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><i className="mdi mdi-trash-can-outline" /></a></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <object width="100%" height="600px" className="mt-sm-4" data="https://writing.colostate.edu/guides/documents/resume/functionalSample.pdf" />
                </div>
              </div>
            </div>
        </>
    )
}

export default SourceCategory
