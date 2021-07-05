import React from 'react'

function EModal() {
    return (
        <>
    <div className="modal fade" id="edit-modal" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title" id="myLargeModalLabel">Edit</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>
      <div className="modal-body py-3">
        <div className="form-check form-checkbox-success form-switch">
          <input type="checkbox" className="form-check-input mt-1 me-sm-2" id="customSwitch1" defaultChecked />
          <label className="form-check-label fw-normal fs-3" htmlFor="customSwitch1">New job posting created</label>
        </div>
        <div className="d-flex my-3">
          <label className="fw-normal">Notify</label>
          <div className="form-check form-checkbox-info mb-2 ms-sm-4">
            <input type="checkbox" className="form-check-input rounded-circle align-middle" id="customCheckcolor3" defaultChecked />
            <label className="form-check-label align-middle fw-normal" htmlFor="customCheckcolor3">Other users</label>
          </div>
        </div>
        <select className="select2 form-control select2-multiple mb-3" data-toggle="select2" multiple="multiple" data-placeholder="Choose ...">
          <option> Amit Kumar  amit@rudrainnovatives.com</option>
          <option> (Me)  gaurav@rudrainnovatives.com</option>
          <option> (Gurpreet Singh)  gurpreet@rudrainnovatives.com</option>
          <option> (Gursimran Singh)  gursimran@rudrainnovative.com</option>
          <option> (Parambir Singh)  parambir@rudrainnovatives.com</option>
        </select>
        <div className="field mb-3">
          <input className="form-control" type="text" name="Source" id="Source" defaultValue="New job posting - {{job.title}} created" />
          <label htmlFor="Status">Subject</label>
        </div>
        <h4>Body</h4>
        <textarea id="simplemde1" defaultValue={""} />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
        <button type="button" className="btn btn-outline-primary mx-2">Preview</button>
        <button type="button" className="btn btn-primary">Save</button>
      </div>
    </div>{/* /.modal-content */}
  </div>{/* /.modal-dialog */}
</div>{/* /.modal */}
  
        </>
    )
}

export default EModal
