import React from 'react'

function Tags() {
    return (
        <>
        <div className="modal-dialog" style={{maxWidth: '600px!important'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Tags</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body mb-sm-5">
          <select className="form-control select2 " data-toggle="select2">
            <option>Search/ Add new</option>
            <option>Aptitude score is low</option>
            <option>shortlisted</option>
            <option>not open for work from office</option>
            <option>Skills not matching</option>
          </select>
        </div>
        {/* /.modal-content */}
        <div className="modal-footer">
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-info">Update</button>
        </div>
      </div>
    </div>
        </>
    )
}

export default Tags
