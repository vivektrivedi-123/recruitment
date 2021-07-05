import React from 'react'

function EditApplication() {
    return (
       <>
        <div className="modal-dialog modal-dialog-scrollable" style={{maxWidth: '600px!important'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Edit Application form data</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body mb-sm-3">
          <div className="field mb-3">
            <input 
             className="form-control" 
             type="text" 
             name="street" 
             id="street" 
             defaultValue="3.8" />
            <label htmlFor="street">Relevant Experience (in years)</label>
          </div>
          <div className="field mb-3">
            <input 
             className="form-control" 
             type="text" 
             name="street" 
             id="street" 
             defaultValue="30 - 45 Days" />
            <label htmlFor="street">Notice Period</label>
          </div>
          <div className="field mb-3">
            <input 
             className="form-control" 
             type="text" 
             name="street" 
             id="street" 
             defaultValue="Management issues" />
            <label htmlFor="street">Reason for job change</label>
          </div>
          <div className="field mb-3">
            <input 
             className="form-control" 
             type="text" 
             name="street" 
             id="street" 
             defaultValue="C-46 NFL Township Panipat" />
            <label htmlFor="street">Permanent Address</label>
          </div>
          <div className="field mb-3">
            <input 
             className="form-control" 
             type="text" 
             name="street" 
             id="street" 
             defaultValue="Mohali" />
            <label htmlFor="street">Current Location</label>
          </div>
          <div className="mb-3">
            <label className="fw-normal">Are you comfortable with Chandigarh/ Mohali Location</label>
            <div className="mt-0">
              <div className="form-check form-check-inline">
                <input 
                 type="radio" 
                 id="customRadio3" 
                 name="customRadio1" 
                 className="form-check-input" />
                <label className="form-check-label position-relative" htmlFor="customRadio3">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                 type="radio" 
                 id="customRadio4" 
                 name="customRadio1" 
                 className="form-check-input" />
                <label className="form-check-label position-relative" htmlFor="customRadio4">No</label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="fw-normal">Are you open for work from office operations</label>
            <div className="mt-0">
              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  id="customRadio5" 
                  name="customRadio1" 
                  className="form-check-input" />
                <label className="form-check-label position-relative" htmlFor="customRadio5">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                 type="radio" 
                 id="customRadio6" 
                 name="customRadio1" 
                 className="form-check-input" />
                <label className="form-check-label position-relative" htmlFor="customRadio6">No</label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="fw-normal">Do you have 1+ years of experience as a Dot Net Developer?</label>
            <div className="mt-0">
              <div className="form-check form-check-inline">
                <input 
                 type="radio" 
                 id="customRadio7" 
                 name="customRadio1" 
                 className="form-check-input" />
                <label className="form-check-label position-relative" htmlFor="customRadio7">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                 type="radio" 
                 id="customRadio8" 
                 name="customRadio1" 
                 className="form-check-input" />
                <label className="form-check-label position-relative" htmlFor="customRadio8">No</label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="fw-normal">Do you have hand on experience on MVC</label>
            <div className="mt-0">
              <div className="form-check form-check-inline">
                <input 
                 type="radio" 
                 id="customRadio9" 
                 name="customRadio1" 
                 className="form-check-input" />
                <label className="form-check-label position-relative" htmlFor="customRadio9">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                 type="radio" 
                 id="customRadio00" 
                 name="customRadio1" 
                 className="form-check-input" />
                <label className="form-check-label position-relative" htmlFor="customRadio00">No</label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="fw-normal">Do you have working experience wit GIT</label>
            <div className="mt-0">
              <div className="form-check form-check-inline">
                <input 
                 type="radio" 
                 id="customRadio50" 
                 name="customRadio1" 
                 className="form-check-input" />
                <label className="form-check-label position-relative" htmlFor="customRadio50">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                 type="radio" 
                 id="customRadio60" 
                 name="customRadio1" 
                 className="form-check-input" />
                <label className="form-check-label position-relative" htmlFor="customRadio60">No</label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="fw-normal">Can you work independently?</label>
            <div className="mt-0">
              <div className="form-check form-check-inline">
                <input 
                 type="radio"  
                 id="customRadio5" 
                 name="customRadio1" 
                 className="form-check-input" />
                <label className="form-check-label position-relative" htmlFor="customRadio5">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                 type="radio" 
                 id="customRadio6" 
                 name="customRadio1" 
                 className="form-check-input" />
                <label className="form-check-label position-relative" htmlFor="customRadio6">No</label>
              </div>
            </div>
          </div>
          <div className="field mt-sm-4 mb-3">
            <input 
             className="form-control" 
             type="text" 
             name="street" 
             id="street" 
             defaultValue="Technical Skills - Expert Level" />
            <label htmlFor="street">C# .Net MVC </label>
          </div>
          <div className="field mb-3">
            <input 
             className="form-control" 
             type="text" 
             name="street" 
             id="street" 
             defaultValue="Technical skills - Intermediate Level" />
            <label htmlFor="street">Xamarin,Salesforce</label>
          </div>
          <div className="field mb-3">
            <input 
             className="form-control" 
             type="text" 
             name="street" 
             id="street" 
             defaultValue="Technical skills - Beginner Level" />
            <label htmlFor="street">Angular</label>
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

export default EditApplication
