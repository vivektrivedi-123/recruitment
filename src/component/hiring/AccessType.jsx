import React from 'react'

function AccessType() {
    return (
        <>
          <div className="col-md-12 my-1 px-3">
          <div className="d-flex">
            <h4 className="vertical-align m-0 my-auto">Access type</h4>
            <div className="dropdown position-relative ms-2">
              <button className="btn border pt-0 bg-white rounded dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="dripicons-lock-open text-success font-20 pe-1" />  Default Access
              </button>
              <div className="dropdown-menu shadow p-2 border sub-dropdown" aria-labelledby="dropdownMenuButton2">
                <a className="dropdown-item" href="#">
                  <label htmlFor="publish"> 
                    <i className="dripicons-lock-open text-success font-20 pe-1" /> <span className="font-weight-bold"> Default access </span>
                  </label>
                  <p className="mt-1 mb-0 ms-2 ps-3 font-weight-normal small"> All recruiters, hiring managers and panel members can view all candidates.</p>
                </a>
                <a className="dropdown-item" href="#">
                  <label htmlFor="publish"> 
                    <i className="dripicons-lock text-danger font-20 pe-1" /> <span className="font-weight-bold"> Restricted access </span>
                  </label>
                  <p className="mt-1 mb-0 ms-2 ps-3 font-weight-normal small"> Only recruiters can view all candidates. Hiring managers and panel members will get access only when they are added as followers to the candidates.</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        </>
    )
}

export default AccessType
