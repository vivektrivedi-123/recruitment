import React from 'react'

function Education() {
    return (
        <>
         <div className="modal-dialog modal-dialog-scrollable" style={{maxWidth: '700px!important'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Edit Education</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body">
          <div className="card">
            <div className="card-header bg-light d-flex justify-content-between align-items-center">
              <p className="text-info font-600 align-middle mb-0 "><span className="border-bottom border-info"> Btech</span></p>
              <a href="#"><i className="mdi mdi-trash-can-outline align-middle" /></a>
            </div>
            <div className="card-body">
              <div className="field mb-3">
                <input 
                 className="form-control" 
                 type="text" 
                 name="city" 
                 id="city" 
                 defaultValue="Chitkara uni" />
                <label htmlFor="city">Institution/School Name <sup className="text-danger">*</sup></label>
              </div>
              <div className="row align-items-baseline">
                <div className="col-md-12">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" />
                    <label htmlFor="street">Field of study/ Major</label>
                  </div>
                </div>
              </div>
              <div className="row align-items-baseline">
                <div className="col-md-2">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" />
                    <label htmlFor="street">Grade</label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" 
                     defaultValue={2013} />
                    <label htmlFor="street">From <sup className="text-danger">*</sup></label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" 
                     defaultValue={2017} />
                    <label htmlFor="street">To</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-check form-switch">
                    <input 
                     type="checkbox" 
                     className="form-check-input" 
                     id="customSwitch1" />
                    <label className="form-check-label position-relative" htmlFor="customSwitch1">Currently pursuing</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header bg-light d-flex justify-content-between align-items-center">
              <p className="text-info font-600 align-middle mb-0 "><span className="border-bottom border-info"> BE. ECE</span></p>
              <a href="#"><i className="mdi mdi-trash-can-outline align-middle" /></a>
            </div>
            <div className="card-body">
              <div className="field mb-3">
                <input 
                 className="form-control" 
                 type="text" 
                 name="city" 
                 id="city" 
                 defaultValue="Chitkara University" />
                <label htmlFor="city">Institution/School Name <sup className="text-danger">*</sup></label>
              </div>
              <div className="row align-items-baseline">
                <div className="col-md-12">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" />
                    <label htmlFor="street">Field of study/ Major</label>
                  </div>
                </div>
              </div>
              <div className="row align-items-baseline">
                <div className="col-md-2">
                  <div className="field mb-3">
                    <input  
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" />
                    <label htmlFor="street">Grade</label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="field mb-3">
                    <input  
                     className="form-control"  
                     type="text" 
                     name="street" 
                     id="street" 
                     defaultValue={2013} />
                    <label htmlFor="street">From <sup className="text-danger">*</sup></label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" 
                     defaultValue={2017} />
                    <label htmlFor="street">To</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-check form-switch">
                    <input 
                     type="checkbox" 
                     className="form-check-input" 
                     id="customSwitch1" />
                    <label className="form-check-label position-relative" htmlFor="customSwitch1">Currently pursuing</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header bg-light d-flex justify-content-between align-items-center">
              <p className="text-info font-600 align-middle mb-0 "><span className="border-bottom border-info"> CBSE</span></p>
              <a href="#"><i className="mdi mdi-trash-can-outline align-middle" /></a>
            </div>
            <div className="card-body">
              <div className="field mb-3">
                <input 
                 className="form-control" 
                 type="text" 
                 name="city" 
                 id="city" 
                 defaultValue="CBSE" />
                <label htmlFor="city">Institution/School Name <sup className="text-danger">*</sup></label>
              </div>
              <div className="row align-items-baseline">
                <div className="col-md-12">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" />
                    <label htmlFor="street">Field of study/ Major</label>
                  </div>
                </div>
              </div>
              <div className="row align-items-baseline">
                <div className="col-md-2">
                  <div className="field mb-3">
                    <input  
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" />
                    <label htmlFor="street">Grade</label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" 
                     defaultValue={2012} />
                    <label htmlFor="street">From <sup className="text-danger">*</sup></label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" 
                     defaultValue={2013} />
                    <label htmlFor="street">To</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-check form-switch">
                    <input 
                     type="checkbox" 
                     className="form-check-input" 
                     id="customSwitch1" />
                    <label className="form-check-label position-relative" htmlFor="customSwitch1">Currently pursuing</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header bg-light d-flex justify-content-between align-items-center">
              <p className="text-info font-600 align-middle mb-0 "><span className="border-bottom border-info"> CBSE</span></p>
              <a href="#"><i className="mdi mdi-trash-can-outline align-middle" /></a>
            </div>
            <div className="card-body">
              <div className="field mb-3">
                <input 
                 className="form-control" 
                 type="text" 
                 name="city" 
                 id="city" 
                 defaultValue="CBSE" />
                <label htmlFor="city">Institution/School Name <sup className="text-danger">*</sup></label>
              </div>
              <div className="row align-items-baseline">
                <div className="col-md-12">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" />
                    <label htmlFor="street">Field of study/ Major</label>
                  </div>
                </div>
              </div>
              <div className="row align-items-baseline">
                <div className="col-md-2">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" />
                    <label htmlFor="street">Grade</label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="field mb-3">
                    <input 
                    className="form-control" 
                    type="text" 
                    name="street" 
                    id="street" 
                    defaultValue={2010} />
                    <label htmlFor="street">From <sup className="text-danger">*</sup></label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                      type="text" 
                      name="street" 
                      id="street" 
                      defaultValue={2011} />
                    <label htmlFor="street">To</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-check form-switch">
                    <input 
                     type="checkbox" 
                     className="form-check-input"               
                     id="customSwitch1" />
                    <label className="form-check-label position-relative" htmlFor="customSwitch1">Currently pursuing</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-between">
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Add New</button>
            <div>
              <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
              <button type="button" className="btn btn-info">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Education
