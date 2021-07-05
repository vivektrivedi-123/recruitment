import React from 'react'

function Comments() {
    return (
        <>
          <div className="tab-pane p-sm-4 bg-white vh-100 overflow-scroll" id="Comments">
                    <button className="btn btn-outline-secondary w-100" data-bs-toggle="modal" data-bs-target="#CommentTabBtn-modal"><span className="float-start"><i className="mdi mdi-message-text" /> Add Comment</span> </button>
                    <div className="show-btns">
                      <div className="p-2 mx-3 my-sm-3 position-relative">
                        <div className="d-flex ">
                          <div className="avatar-md">
                            <span className="avatar-title bg-danger rounded-circle h-75 w-75 mx-auto">
                              M
                            </span>
                          </div>
                          <div>
                            <p className="fw-bold text-info mb-0 mt-sm-1" id="tooltip-container2">Mahima Mogha <span className="fw-normal" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Last Thursday at 9:50 AM">, Added a public comment 4 days ago</span> </p>
                            <p className=" mb-0">ECE background</p>
                          </div>
                        </div>
                        <div className="hover-btns position-absolute d-flex justify-content-center py-sm-2" id="tooltip-container2">
                          <button type="button" className="btn btn-primary btn-rounded mr-sm-2" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" data-bs-original-title="View"><i className="mdi mdi-circle-edit-outline" /> </button>
                          <button type="button" className="btn btn-primary btn-rounded ms-sm-2" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Forever" data-bs-original-title="Remove"><i className="mdi mdi-trash-can-outline" /> </button>
                          <button type="button" className="btn btn-success btn-rounded ms-sm-2" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Private" data-bs-original-title="Remove"><i className="mdi mdi-lock-open-outline" /> </button>
                          <button type="button" className="btn btn-warning btn-rounded ms-sm-2" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Pin Comment" data-bs-original-title="Remove"><i className="mdi mdi-pin  mdi-rotate-45" /> </button>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="modal fade" id="CommentTabBtn-modal" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" style={{maxWidth: 700}}>
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body">
          <div className="d-flex ">
            <div className="avatar-md">
              <span className="avatar-title bg-danger rounded-circle h-75 w-75 mx-auto">
                M
              </span>
            </div>
            <div>
              <input type="text" id="simpleinput" className="form-control border-0" placeholder="Visible to hiring team and followers" />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center" id="tooltip-email1">
              <i className="mdi mdi-attachment mdi-rotate-90 me-sm-3 fs-3" data-bs-container="#tooltip-email1" data-bs-toggle="tooltip" data-bs-placement="top" title="Add Attachment" />
              <i className="mdi mdi-format-letter-ends-with me-sm-3 fs-3" data-bs-container="#tooltip-email1" data-bs-toggle="tooltip" data-bs-placement="top" title="Formatting Options" />
            </div>
            <div className="d-flex align-items-baseline">
              <button className="btn tbn-outline-secondary dropdown-toggle me-sm-3 fs-4" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-lock-open-outline" /> Private</button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{margin: 0}}>
                <ul>
                  <li className="dropdown-item align-middle d-flex justify-content-between align-items-center active">
                    <div className="d-flex align-items-center">
                      <div className="ms-sm-3">

                        <i className="mdi mdi-lock-open-outline text-danger" />
                      </div>
                      <div className="ms-sm-3">
                        <h5 className="text-info mb-0">Private</h5>
                        <label className="fw-normal">Visible to specific persion</label>
                      </div>
                    </div>
                    <i className="mdi mdi-check align-middle ms-sm-4" />
                  </li>
                  <li className="dropdown-item align-middle d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="ms-sm-3">
                        <i className="mdi mdi-lock-open-outline text-success" />
                      </div>
                      <div className="ms-sm-3">
                        <h5 className="text-info mb-0">Public</h5>
                        <label className="fw-normal">Visible to hiring team</label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button className="btn btn-info ms-sm-2">Save</button>
            </div>
          </div>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>
        </>
    )
}

export default Comments
