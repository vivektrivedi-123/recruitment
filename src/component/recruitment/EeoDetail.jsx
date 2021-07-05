import React from 'react'

function EeoDetail() {
    return (
       <>
        <div className="modal-dialog" style={{maxWidth: '600px!important'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Edit Profile</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-6 my-sm-3">
              <select className="form-control select2" data-toggle="select2">
                <option>EEO Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>I don't wish to Answer</option>
              </select>
            </div>
            <div className="col-md-6 my-sm-3">
              <select className="form-control select2" data-toggle="select2">
                <option>EEO Veteran</option>
                <option>Protected Veteran</option>
                <option>Non-Protected Veteran</option>
                <option>I don't wish to Answer</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-sm-3">
              <select className="form-control select2" data-toggle="select2">
                <option>EEO Ethnicity</option>
                <option>American Indian or Alaska Native (Not Hispanic or Latino)</option>
                <option>Asian or Indian Subcontinent (Not Hispanic or Latino)</option>
                <option>Black or African American (Not Hispanic or Latino)</option>
                <option>Hispanic or Latino</option>
                <option>Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)</option>
                <option>Two or More Races (Not Hispanic or Latino)</option>
                <option>White (Not Hispanic or Latino)</option>
                <option>I don't wish to Answer</option>
              </select>
            </div>
            <div className="col-md-6 mb-sm-3">
              <select className="form-control select2" data-toggle="select2">
                <option>EEO Ethnicity</option>
                <option>Yes</option>
                <option>No</option>
                <option>I don't wish to Answer</option>
              </select>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-info">Save</button>
        </div>
      </div>
    </div>
       </>
    )
}

export default EeoDetail
