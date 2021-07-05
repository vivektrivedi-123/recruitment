import React from 'react'

function Role() {
    return (
        <>
         <div className="modal fade" id="associate-role" tabIndex={-1} aria-labelledby="myLargeModalLabel" role="dialog" aria-modal="true">
    <div className="modal-dialog modal-lg px-5">
      <div className="modal-content">
        <div className="modal-header px-3">
          <h4 className="modal-title" id="standard-modalLabel">Available Roles
          </h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body  px-3 overflow-auto available-roles-sec">
          <h5 className="mb-3"><span className="fw-normal"> Associate one or more roles with </span> Amit Kumar</h5>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action d-flex p-2">
              <div className="form-check form-checkbox-info me-2 ">
                <input 
                   type="checkbox" 
                    className="form-check-input rounded-0" 
                    id="customCheckcolor3" 
                  />
              </div>
              <div>
                <h5 className="mt-0 mb-1 text-info"> Account Admin</h5>
                <p className="mb-0">Can Access &amp; Modify the entire Freshteam account including account and billing related information.</p>
              </div>
            </li>
            <li className="list-group-item list-group-item-action d-flex p-2">
              <div className="form-check form-checkbox-info me-2 ">
                <input 
                  type="checkbox" 
                  className="form-check-input rounded-0" 
                  id="customCheckcolor3" 
                />
              </div>
              <div>
                <h5 className="mt-0 mb-1 text-info">  Admin</h5>
                <p className="mb-0">Can Access &amp; Modify all configurations in the Settings and will have complete access to all modules, but are restricted from Viewing Account &amp; Billing settings.
                </p>
              </div>
            </li>
            <li className="list-group-item list-group-item-action d-flex p-2">
              <div className="form-check form-checkbox-info me-2 ">
                <input 
                  type="checkbox" 
                  className="form-check-input rounded-0" 
                  id="customCheckcolor3" 
                />
              </div>
              <div>
                <h5 className="mt-0 mb-1 text-info">  HR Partner</h5>
                <p className="mb-0">Can Access &amp; Modify entire Employee information including Time-off, compensation and team workflows of any employee.
                </p>
              </div>
            </li>
            <li className="list-group-item list-group-item-action d-flex p-2">
              <div className="form-check form-checkbox-info me-2 ">
                <input 
                  type="checkbox" 
                  className="form-check-input rounded-0" 
                  id="customCheckcolor3" 
                  />
              </div>
              <div>
                <h5 className="mt-0 mb-1 text-info">   Recruiter</h5>
                <p className="mb-0">Can manage all Productivity and Applicant Tracking System features but has restricted access to other settings like account and billing info.
                </p>
              </div>
            </li>
            <li className="list-group-item list-group-item-action d-flex p-2">
              <div className="form-check form-checkbox-info me-2 ">
                <input 
                  type="checkbox" 
                  className="form-check-input rounded-0" 
                  id="customCheckcolor3" 
                  />
              </div>
              <div>
                <h5 className="mt-0 mb-1 text-info">  Limited HR Partner</h5>
                <p className="mb-0">Has the Same Privileges as HR Partner but only for the Associated Employees or the Employees in the Associated Office Location.</p>
              </div>
            </li>
            <li className="list-group-item list-group-item-action d-flex p-2">
              <div className="form-check form-checkbox-info me-2 ">
                <input 
                  type="checkbox" 
                  className="form-check-input rounded-0" 
                  id="customCheckcolor3" 
                />
              </div>
              <div>
                <h5 className="mt-0 mb-1 text-info">  Limited Recruiter</h5>
                <p className="mb-0">Has recruiter level privileges on candidates within the jobs they are assigned to. Does not have access to other candidates outside their assigned jobs.
                </p>
              </div>
            </li>
            <li className="list-group-item list-group-item-action d-flex p-2">
              <div className="form-check form-checkbox-info me-2 ">
                <input 
                  type="checkbox" 
                  className="form-check-input rounded-0" 
                  id="customCheckcolor3" 
                />
              </div>
              <div>
                <h5 className="mt-0 mb-1 text-info">   Hiring Manager</h5>
                <p className="mb-0">This is a special role for the recruitment module. Can view candidates, advance stages and view offer details. Has employee level access to other modules.
                </p>
              </div>
            </li>
            <li className="list-group-item list-group-item-action d-flex p-2">
              <div className="form-check form-check-inline form-checkbox-dark cursor-not-allowed">
                <input 
                  type="checkbox" 
                  className="form-check-input " 
                  id="customCheck5" 
                  defaultChecked 
                  disabled 
                />
              </div>
              <div>
                <h5 className="mt-0 mb-1 text-info"> Employees </h5>
                <p className="mb-0">Can View limited set of information of other Employees, Request timeoff, View company job postings and Refer a candidate to an Organisation.
                  .
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="modal-footer justify-content-start">
          <div className="ms-auto pe-3">
            <ul className="list-unstyled mb-0 ">
              <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info" data-bs-dismiss="modal" aria-label="Close">Cancel</button></li>
              <li className="list-inline-item text-center rounded ">
                <button type="button" className="btn btn-primary">Assign</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>   
        </>
    )
}

export default Role
