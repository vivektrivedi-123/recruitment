import React from 'react'

function ScheduleInterview() {
    return (
       <>
        <div className="modal-dialog modal-full-width w-100 m-0" style={{minWidth: '992px!important'}}>
      <div className="modal-content">
        <div className="modal-header p-3 bG-gradient">
          <div className="row align-items-end justify-content-around w-100">
            <div className="col-md-3">
              <div id="tooltip-container3">
                <h5 className="text-info">SCHEDULE INTERVIEW</h5>
                <label className="fw-normal">via hr@rudrainnovatives.com</label>
                <i className="mdi mdi-alert-circle-outline" data-bs-container="#tooltip-container3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="This is the email we use for syncing your calendar" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex align-items-center">
                <div className="avatar-md ">
                  <span className="avatar-title bg-primary rounded-circle h-75 w-75 mt-sm-1 mx-sm-auto fs-3">
                    R
                  </span>
                </div>
                <div className="ms-sm-2 align-middle">
                  <h5 className="text-info m-0">Ritesh Sanan</h5>
                  <label className="fw-normal">Dot Net Developer
                  </label></div>
              </div>
            </div>
            <div className="col-md-3">
              <label className="form-label fw-normal">Interview Date</label>
              <div className="position-relative" id="datepicker2">
                <input type="text" className="form-control date" id="birthdatepicker2" data-toggle="date-picker" data-single-date-picker="true" /><i className="mdi mdi-calendar position-absolute" style={{right: 10, top: 10}} />
              </div>
            </div>
            <div className="col-md-3 align-middle">
              <button className="btn btn-info">Schedule &amp; Continue</button>
            </div>
          </div>
          <div id="tooltip-containermini">
            <button type="button" className="btn rounded-pill bg-light me-sm-2" data-bs-dismiss="modal" aria-hidden="true" data-bs-container="#tooltip-containermini" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Minimize" style={{padding: 15}}><i className="mdi mdi-arrow-bottom-left mdi-24px" /></button></div>
          <button type="button" className="btn-close rounded-pill bg-light p-sm-3" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body vh-100 py-sm-5">
          <div className="row">
            <div className="col-md-8">
              <div className="border-top position-relative">
                <span className="badge badge-outline-secondary fw-normal position-absolute bg-white" style={{top: '-10px'}}>Interview Round 1</span>
              </div>
              <button className="btn btn-dashed btn-outline-light p-sm-3 w-100 mt-sm-4 font-600" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="position-relative">Add Interview</span> </button>
              <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton1" style={{margin: 0}}>
                <div className="p-2">
                  <input 
                   className="ember-power-select-search-input form-control" 
                   aria-controls="ember-power-select-options-ember2026" 
                   placeholder="Search to add interviewer" 
                   type="search" />
                </div>
                <ul className="p-sm-2">
                  <label htmlFor="hiring-team">Hiring Team</label>
                  <li>
                    <a className href="#">
                      <div className="row align-items-center">
                        <div className="col-2"><span className="relative align-middle avatar-circle d-inline-block me-1">
                            <img className="img-fluid" src="image/graph.png" />
                          </span></div>
                        <div className="col"> <span>Priyanka Sharma <br /> hr@rudrainnovatives.com</span></div>
                      </div>
                    </a>
                  </li>
                  <label htmlFor="hiring-team">Other Employee</label>
                  <li>
                    <a className href="#">
                      <div className="row">
                        <div className="col-2" />
                        <div className="col">Search to add other employee</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="alert py-sm-4 text-center bg-alert" role="alert">
                <i className="mdi mdi-calendar-clock mdi-24px" /><br />
                No Interviews
              </div>
            </div>
          </div>
        </div>
      </div>{/* /.modal-content */}
    </div>
       </>
    )
}

export default ScheduleInterview
