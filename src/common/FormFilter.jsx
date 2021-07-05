import React from 'react'

function FormFilter() {
    return (
        <>
<div className="end-bar filter-area">
    <div className="rightbar-title py-2 border-top border-bottom">
      <a href="javascript:void(0);" className=" end-bar-toggle float-start ms-n5 mt-n3 pt-1">
        <i className="dripicons-cross noti-icon" />
      </a>
      <div className="d-flex justify-content-between">
        <h5 className="m-0 text-info">Filter</h5>
        <div className="mr-4">
          <a href="#" className="btn btn-clear py-0 m-1 mt-0 ">Reset</a>
          <a href="#" className="btn btn-primary py-1 m-1 mt-0">Apply</a>
        </div>
      </div>
    </div>
    <div className="rightbar-content h-100" data-simplebar>
      <div className="p-3">
        <div className="field mb-3">
          <input className="form-control" type="text" name="Source" id="Source" placeholder="Search..." />
          <label htmlFor="Status">Source</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="Category" id="Category" placeholder="Search..." />
          <label htmlFor="Category">Source Category</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="Candidate" id="Candidate" placeholder="Search..." />
          <label htmlFor="Candidate">Candidate owner</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="Status" id="Status" placeholder="Search..." />
          <label htmlFor="Status">Status</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="Stage" id="Stage" placeholder="Search..." />
          <label htmlFor="Department">Stage</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="Tags" id="Tags" placeholder="Search..." />
          <label htmlFor="Tags">Tags</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="deleted-candidate" id="deleted-candidate" placeholder="Search..." />
          <label htmlFor="deleted-candidate">Is the candidate deleted?</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="blocked-candidate" id="blocked-candidate" placeholder="Search..." />
          <label htmlFor="blocked-candidate">Is the candidate blocked?</label>
        </div>
        <div className="field ">
          <a href="#" className="text-link"><i className="mdi mdi-plus-circle mdi-18px" /> Add more</a>
        </div>
      </div>
      {/* end padding*/}
    </div>
  </div>
        </>
    )
}

export default FormFilter
