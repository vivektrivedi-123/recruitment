import React from 'react'

function SummaryBox() {
    return (
       <>
        <div className="modal-dialog" style={{maxWidth: '600px!important'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Edit Summary</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body mb-sm-5">
          <div className="form-floating">
            <textarea 
             className="form-control" 
             placeholder="Leave a comment here" 
             id="floatingTextarea" 
             style={{height: 200}} 
             defaultValue={""} />
            <label htmlFor="floatingTextarea">Summary</label>
          </div>
        </div>
        {/* /.modal-content */}
        <div className="modal-footer">
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-info">Save</button>
        </div>
      </div>
    </div>
       </>
    )
}

export default SummaryBox
