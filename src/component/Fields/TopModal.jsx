import React from 'react'

function TopModal() {
    return (
        <>
         
<div>
  <div id="AddField-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Add Field - Text</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body py-2">
          <h4 className="f0nt-600 mb-2">Behavior</h4>
          <div className="form-check">
            <input 
                type="checkbox" 
                className="form-check-input" 
                id="customCheck1" 
                defaultChecked 
            />
            <label className="form-check-label fw-normal" htmlFor="customCheck1">Required while submitting form</label>
          </div>
          <div className="form-floating my-4">
            <input 
                type="text" 
                className="form-control py-0" 
                defaultValue 
                id="floatingInput" 
                placeholder="Career" 
                style={{height: 'calc(2.5rem + 2px)!important'}} 
             />
            <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Label<span className>*</span></label>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */} 
  <div id="AddField2-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Add Field - Multi-Line Text</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body py-2">
          <h4 className="f0nt-600 mb-2">Behavior</h4>
          <div className="form-check">
            <input 
                type="checkbox" 
                className="form-check-input" 
                id="customCheck1" 
                defaultChecked 
                />
            <label className="form-check-label fw-normal" htmlFor="customCheck1">Required while submitting form</label>
          </div>
          <div className="form-floating my-4">
            <input 
                type="text" 
                className="form-control py-0" 
                defaultValue 
                id="floatingInput" 
                placeholder="Career" 
                style={{height: 'calc(2.5rem + 2px)!important'}} 
                />
            <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Label<span className>*</span></label>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */} 
  <div id="AddField3-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Add Field - Check box</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body py-2">
          <h4 className="f0nt-600 mb-2">Behavior</h4>
          <div className="form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="customCheck1" 
              defaultChecked 
            />
            <label className="form-check-label fw-normal" htmlFor="customCheck1">Required while submitting form</label>
          </div>
          <div className="form-floating my-4">
            <input 
               type="text" 
               className="form-control py-0" 
               defaultValue 
               id="floatingInput" 
               placeholder="Career" 
               style={{height: 'calc(2.5rem + 2px)!important'}} 
            />
            <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Label<span className>*</span></label>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */} 
  <div id="AddField4-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Add Field - Number</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body py-2">
          <h4 className="f0nt-600 mb-2">Behavior</h4>
          <div className="form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="customCheck1" 
              defaultChecked 
              />
            <label className="form-check-label fw-normal" htmlFor="customCheck1">Required while submitting form</label>
          </div>
          <div className="form-floating my-4">
            <input 
              type="text" 
              className="form-control py-0" 
              defaultValue 
              id="floatingInput" 
              placeholder="Career" 
              style={{height: 'calc(2.5rem + 2px)!important'}} 
              />
            <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Label<span className>*</span></label>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */} 
  <div id="AddField5-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Add Field - Date</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body py-2">
          <h4 className="f0nt-600 mb-2">Behavior</h4>
          <div className="form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="customCheck1" 
              defaultChecked 
              />
            <label className="form-check-label fw-normal" htmlFor="customCheck1">Required while submitting form</label>
          </div>
          <div className="form-floating my-4">
            <input 
              type="text" 
              className="form-control py-0" 
              defaultValue 
              id="floatingInput" 
              placeholder="Career" 
              style={{height: 'calc(2.5rem + 2px)!important'}} 
              />
            <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Label<span className>*</span></label>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */} 
  <div id="AddField6-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Add Field - Phone Number</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body py-2">
          <h4 className="f0nt-600 mb-2">Behavior</h4>
          <div className="form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="customCheck1" 
              defaultChecked 
              />
            <label className="form-check-label fw-normal" htmlFor="customCheck1">Required while submitting form</label>
          </div>
          <div className="form-floating my-4">
            <input 
              type="text" 
              className="form-control py-0" 
              defaultValue 
              id="floatingInput" 
              placeholder="Career" 
              style={{height: 'calc(2.5rem + 2px)!important'}}
             />
            <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Label<span className>*</span></label>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */}
  <div id="AddField7-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Add Field - Hyperlink</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body py-2">
          <h4 className="f0nt-600 mb-2">Behavior</h4>
          <div className="form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="customCheck1" 
              defaultChecked 
              />
            <label className="form-check-label fw-normal" htmlFor="customCheck1">Required while submitting form</label>
          </div>
          <div className="form-floating my-4">
            <input 
              type="text" 
              className="form-control py-0" 
              defaultValue 
              id="floatingInput" 
              placeholder="Career" 
              style={{height: 'calc(2.5rem + 2px)!important'}} 
              />
            <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Label<span className>*</span></label>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */}
  <div id="AddField8-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Add Field - Radio Button</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body pt-2 pb-4">
          <h4 className="f0nt-600 mb-2">Behavior</h4>
          <div className="form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="customCheck1" 
              defaultChecked 
              />
            <label className="form-check-label fw-normal" htmlFor="customCheck1">Required while submitting form</label>
          </div>
          <div className="form-floating my-4">
            <input 
              type="text" 
              className="form-control py-0" 
              defaultValue 
              id="floatingInput" 
              placeholder="Career" 
              style={{height: 'calc(2.5rem + 2px)!important'}} 
              />
            <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Label<span className>*</span></label>
          </div>
          <div className="d-flex align-items-center">
            <i className="mdi mdi-minus-circle-outline text-success mdi-24px me-2" />
            <input 
              type="text" 
              id="simpleinput" 
              className="form-control" 
              defaultValue="Choice 1"
               />
          </div>
          <div className="d-flex align-items-center mt-2">
            <i className="mdi mdi-minus-circle-outline text-danger mdi-24px me-2" />
            <input 
              type="text" 
              id="simpleinput" 
              className="form-control" 
              defaultValue="Choice 1" 
              />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-clear me-auto" data-bs-dismiss="modal"><i className="mdi mdi-plus-circle text-success mdi-18px me-1 align-middle" /> Add Choise</button>
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */}
  <div id="AddField9-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Add Field - Dropdown</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body pt-2 pb-4">
          <h4 className="f0nt-600 mb-2">Behavior</h4>
          <div className="form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="customCheck1" 
              defaultChecked 
              />
            <label className="form-check-label fw-normal" htmlFor="customCheck1">Required while submitting form</label>
          </div>
          <div className="form-floating my-4">
            <input 
              type="text" 
              className="form-control py-0" 
              defaultValue 
              id="floatingInput" 
              placeholder="Career" 
              style={{height: 'calc(2.5rem + 2px)!important'}}
               />
            <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Label<span className>*</span></label>
          </div>
          <div className="d-flex align-items-center">
            <i className="mdi mdi-minus-circle-outline text-success mdi-24px me-2" />
            <input 
              type="text" 
              id="simpleinput" 
              className="form-control" 
              defaultValue="Choice 1"
             />
          </div>
          <div className="d-flex align-items-center mt-2">
            <i className="mdi mdi-minus-circle-outline text-danger mdi-24px me-2" />
            <input 
              type="text" 
              id="simpleinput" 
              className="form-control" 
              defaultValue="Choice 1"
               />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-clear me-auto" data-bs-dismiss="modal"><i className="mdi mdi-plus-circle text-success mdi-18px me-1 align-middle" /> Add Choise</button>
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>
</div>
   
        </>
    )
}

export default TopModal
