import React from 'react'

function Reject() {
    return (
        <div className="modal-dialog" style={{maxWidth: '600px!important'}}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="standard-modalLabel">Reject</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
          </div>
          <div className="modal-body mb-sm-3">
            <div className="field mb-3">
              <input className="form-control" type="text" name="last-name" id="last-name" placeholder="Search..." />
              <label htmlFor="last-name">Reject Reason <sup className="text-danger">*</sup></label>
            </div>
            <div className="form-floating">
              <textarea className="form-control" placeholder=".Net MVC and xamarin Devloper" id="floatingTextarea" style={{height: 100}} defaultValue={""} />
              <label htmlFor="floatingTextarea">Leave a comment for the hiring team</label>
            </div>
            <div className="form-check mt-sm-3">
              <input type="checkbox" className="form-check-input" id="customCheck1" />
              <label className="form-check-label position-relative" htmlFor="customCheck1">Notify Candidate</label>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
            <button type="button" className="btn btn-info">Save</button>
          </div>
        </div>
      </div>  
    )
}

export default Reject
