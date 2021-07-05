import React from 'react'

function ManageInterview() {
    return (
        <>
          <div className="row ">
            <div className="col-md-3 ">
              <svg id="interview-scorecard " viewBox="0 0 60 60 ">
                <g id="Symbols ">
                  <g id="intcard ">
                    <g id="Group-17-Copy-6 ">
                      <g id="Page-1 ">
                        <polygon id="Fill-1 " style={{fill: 'none'}} points="0,60 60,60 60,0 0,0 " />
                        <g id="Group-20 " transform="translate(11.000000, 9.000000) ">
                          <g id="Group-19 ">
                            <path style={{fill: '#FF5969'}} d="M10.7,36.8H18V42h-7.3V36.8z M20,36.8V42h7.3v-5.2H20z " />
                            <path style={{fill: '#F0F0F0'}} d="M0.8,1H18v6.2H0.8V1z M0.8,18.6H18v-6.2H0.8V18.6z M0.8,30.6H18v-6.2H0.8V30.6z M0.8,42h7.3v-5.2H0.8V42z M29.9,36.8V42h7.3v-5.2H29.9z " />
                          </g>
                        </g>
                      </g>
                      <g id="Group-2 " transform="translate(1.000000, 1.000000) ">
                      </g>
                    </g>
                    <path style={{fill: '#979797'}} d="M34.4,12.2h2.4l-1.9,1.3l0.7,2.2l-1.9-1.3l-1.9,1.3l0.7-2.2l-1.9-1.3h2.4l0.8-2.2L34.4,12.2z M33.6,21.4 l-0.8,2.2h-2.4l1.9,1.3l-0.7,2.2l1.9-1.3l1.9,1.3L34.8,25l1.9-1.3h-2.4L33.6,21.4z
                                          M34.4,35.6l-0.8-2.2l-0.8,2.2h-2.4l1.9,1.3 l-0.7,2.2l1.9-1.3l1.9,1.3l-0.7-2.2l1.9-1.3H34.4z M39.9,10l-0.8,2.2h-2.4l1.9,1.3L38,15.7l1.9-1.3l1.9,1.3l-0.7-2.2l1.9-1.3h-2.4 L39.9,10z M41.1,25l1.9-1.3h-2.4l-0.8-2.2l-0.8,2.2h-2.4l1.9,1.3L38,27.1l1.9-1.3l1.9,1.3L41.1,25z
                                          M46.1,10l-0.8,2.2H43l1.9,1.3 l-0.7,2.2l1.9-1.3l1.9,1.3l-0.7-2.2l1.9-1.3h-2.4L46.1,10z M54.7,3.8v52.4c0,1.9-1.6,3.5-3.5,3.5H8.8c-1.9,0-3.5-1.6-3.5-3.5V3.8 c0-1.9,1.6-3.5,3.5-3.5h42.4C53.1,0.3,54.7,1.9,54.7,3.8z M53.3,3.8c0-1.2-0.9-2.1-2.1-2.1H8.8c-1.2,0-2.1,0.9-2.1,2.1v52.4
                                          c0,1.2,0.9,2.1,2.1,2.1h42.4c1.2,0,2.1-0.9,2.1-2.1V3.8z M11.8,45.8h7.3V51h-7.3V45.8z M13.2,49.6h4.5v-2.4h-4.5V49.6z M40.9,45.8 h7.3V51h-7.3V45.8z M42.3,49.6h4.5v-2.4h-4.5V49.6z " />
                  </g>
                </g>
              </svg>
            </div>
            <div className="col-md-9 ">
              <p className="text-muted "> Choose the list of qualities against which your interviewers will assess candidates </p>
              <button className="btn btn-primary shadow rounded-pill px-3" data-bs-toggle="modal" data-bs-target="#scoreboardModal"> Manage Interview Scorecard </button>
            </div>
          </div>   


          
 <div id="scoreboardModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
  <div className="w-100 modal-dialog modal-lg modal-right justify-content-start">
    <div className="modal-content border-0">
      <div className="modal-header px-4 py-2">
        <h4 className="modal-title" id="standard-modalLabel"> Customize interview scorecard </h4>
        {/* Copy From */}
        <div className="dropdown me-auto ms-3">
          <button className="form-control dropdown-toggle py-1" type="button" name="dropdownMenuButton1" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" required> 
            Copy From
          </button>                        
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <div className="p-2">
              <input className="form-control" aria-controls placeholder="Search" type="search" />
            </div>
            <div className="p-2 overflow-scroll fix-dropdown">
              <ul>
                {/* <span class="mx-2"> Type to search </span>   */}
                <li>
                  <a className href="#"> Scorecard of other jobs </a>
                </li>
                <li>
                  <a className href="#"> Angular Developer </a>
                </li>
                <li>
                  <a className href="#"> Do Net Developer </a>
                </li>
                <li>
                  <a className href="#"> IOS Developer/Team Lead </a>
                </li>
                <li>
                  <a className href="#"> UI/UX Designer </a>
                </li>
                <li>
                  <a className href="#"> Graphic Designer </a>
                </li>
                <li>
                  <a className href="#"> React Native Developer - Android/iOS Platform </a>
                </li>
                <li>
                  <a className href="#"> Web Designer </a>
                </li>
                <li>
                  <a className href="#"> MBA Fresher - Business Development </a>
                </li>
                <li>
                  <a className href="#"> Business Development Manager </a>
                </li>
                <li>
                  <a className href="#"> Fresher PHP Developer </a>
                </li>
                <li>
                  <a className href="#"> Linux Server Administrator/AWS </a>
                </li>
                <li>
                  <a className href="#"> PHP Developer </a>
                </li>
                <li>
                  <a className href="#"> Software Tester/QA </a>
                </li>
                <li>
                  <a className href="#"> Business Development Executive </a>
                </li>
                <li>
                  <a className href="#"> Business Analyst - IT </a>
                </li>
                <li>
                  <a className href="#"> Sr. Wordpress Developer/Team Lead </a>
                </li>
                <li>
                  <a className href="#"> Full Stack Developer - MEAN / MERN </a>
                </li>
                <li>
                  <a className href="#"> Senior PHP Developer </a>
                </li>
                <li>
                  <a className href="#"> PHP Trainer </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copy From ends*/}
        {/* Visibility From */}
        <div className="dropdown me-2 ms-auto">
          <button className="form-control dropdown-toggle py-1 hov-eff active " type="button" name="dropdownMenuButton1" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" required> 
            Visibility
          </button>                        
          <div className="dropdown-menu shadow border sub-dropdown" aria-labelledby="dropdownMenuButton2">
            <h5 className="font-14 ps-3"> On submitting feedback, panel members can view it </h5>
            <a className="dropdown-item ps-3 " href="#">
              <label > 
                {/* <i class="dripicons-lock-open text-success font-20 pe-1"></i> */}
                <span className="font-13"> Any Time </span>
              </label>
              <p className="mt-1 mb-0 font-weight-normal small text-muted"> Panel members can view everyone's scores </p>
            </a>
            <a className="dropdown-item ps-3" href="#">
              <label > 
                {/* <i class="dripicons-lock text-danger font-20 pe-1"></i>  */}
                <span className="font-13"> After submitting their feedback </span>
              </label>
              <p className="mt-1 mb-0 font-weight-normal small text-muted"> Panel members can view everyone's scores only after submitting their feedback </p>
            </a>
            <a className="dropdown-item ps-3" href="#">
              <label > 
                {/* <i class="dripicons-lock text-danger font-20 pe-1"></i>  */}
                <span className="font-13"> Never </span>
              </label>
              <p className="mt-1 mb-0 font-weight-normal small text-muted"> Panel members cannot view anyone else's scores; 
                only recruiters and hiring managers can</p>
            </a>
          </div>
        </div>
        {/* Visibility From ends*/}
        {/* Preview From */}
        <div className="me-2">
          <button className="form-control py-1 hov-eff active" type="button" data-bs-toggle="modal" data-bs-target="#preview-modal"> 
            Preview
          </button> 
        </div>                       
        {/* Preview From ends*/}
        {/* Save */}
        <div className>
          <button className="form-control py-1 btn-primary" type="button"> 
            Save
          </button> 
        </div>                       
        {/* Save ends*/}
      </div>
      <div className="modal-body px-4">
        <div className="pb-3 mt-1">
          <span className="small"> Use this interview scorecard to define the competencies that need to be tested during the different interview rounds for this job. You can group related competencies using <strong className="text-muted font-600"> Sections </strong> . You can use <strong className="text-muted font-600"> Hints </strong> to give context on how to assess the competencies. </span>
        </div>
        <div className="alert alert-warning bg-warning-lighten text-secondary" role="alert">
          <strong> Note: </strong> A maximum of 50 competencies can be added to a scorecard. <a href="#" className="text-primary font-600"> More Details </a>
        </div>
        <div id="show-hidden-menu" className="alert alert-secondary bg-white text-secondary users-select position-relative" role="alert">
          <strong className="font-600 ps-3"> Interpersonal Skills </strong> <br />
          <span className="small ps-3"> How good are they at striking up a conversation? Have they put you at your ease? </span>
          <div className="action-module start-0 ms-2">
            <a href="#" className="p-0 d-block" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
            <i className="mdi mdi-reorder-vertical font-14 d-inline-block align-middle" />
          </div>
          <div className="action-module top-50 mt-0 me-5 translate-middle-x translate-middle-y">
            <div id="tooltip" className="position-relative">
              <button type="button" className="btn" data-bs-container="#tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                <i className="dripicons-pencil font-14 d-inline-block align-middle me-1" /> 
              </button>
            </div>
          </div>
          <div className="action-module top-50 mt-0 me-0 translate-middle-x translate-middle-y">
            <div id="tooltip" className="position-relative">
              <button type="button" className="btn" data-bs-container="#tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="You must have atleast one section/competency">
                <i className="dripicons-trash font-14 d-inline-block align-middle me-1" /> 
              </button>
            </div>
          </div> 
        </div>
        <div className="hidden-menu shadow py-3 pe-3 ps-2 mb-3" style={{display: 'none'}}>
          <div className="d-flex">
            <i className="mdi mdi-reorder-vertical font-14 d-inline-block my-auto me-1" />
            <input className="form-control me-3" type="text" placeholder="Add a competency to assess" />
            <div className="dropdown my-auto">
              <button className="btn btn-light dropdown-toggle border rounded" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="mdi mdi-card-account-details-star-outline" /> Rating with comments
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item disabled" href="#">Action</a>
                <a className="dropdown-item disabled" href="#">Another action</a>
                <a className="dropdown-item disabled" href="#">Something else here</a>
              </div>
            </div>
          </div>
          <div className="d-flex my-3 ms-3">
            <textarea className="form-control" id="example-textarea" rows={5} placeholder="How good are they at striking up a conversation? Have they put you at your ease?" defaultValue={""} />
          </div>
          <div className="d-flex ms-3">
            <div className="form-check form-switch">
              <input type="checkbox" className="form-check-input" id="customSwitch1" />
              <label className="form-check-label fw-light text-dark" htmlFor="customSwitch1"> Minimum characters required </label>
            </div>
          </div>
          <div className="d-flex mt-1 justify-content-sm-end">
            <button type="button" className="btn me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary"> Update </button>
          </div>
        </div>
        <button id="show-hidden-menu2" className="btn text-primary" role="button">
          <div className="btn bg-light rounded-circle" style={{border: '1px dashed blue'}}> <i className="mdi mdi-plus text-primary" /> </div> &nbsp; Add Competency
        </button>
        <div className="hidden-menu2 shadow py-3 pe-3 ps-2 mb-3" style={{display: 'none'}}>
          <div className="d-flex">
            <i className="mdi mdi-reorder-vertical font-14 d-inline-block my-auto me-1" />
            <input className="form-control me-3" type="text" placeholder="Add a competency to assess" />
            <div className="dropdown my-auto">
              <button className="btn btn-light dropdown-toggle border rounded" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="mdi mdi-card-account-details-star-outline" /> Rating with comments
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item disabled" href="#">Action</a>
                <a className="dropdown-item disabled" href="#">Another action</a>
                <a className="dropdown-item disabled" href="#">Something else here</a>
              </div>
            </div>
          </div>
          <div className="d-flex my-3 ms-3">
            <textarea className="form-control" id="example-textarea" rows={5} placeholder="A short hint to interviewers" defaultValue={""} />
          </div>
          <div className="d-flex ms-3">
            <div className="form-check form-switch">
              <input type="checkbox" className="form-check-input" id="customSwitch1" />
              <label className="form-check-label fw-light text-dark" htmlFor="customSwitch1"> Minimum characters required </label>
            </div>
          </div>
          <div className="d-flex mt-1 justify-content-sm-end">
            <button type="button" className="btn me-2" data-bs-dismiss="modal"> Delete </button>
            <button type="button" className="btn btn-primary"> Add </button>
          </div>
        </div>
        <div className="position-relative my-3">
          <div className="dropdown-divider" />
          <button id="show-hidden-menu3" className="btn border rounded position-absolute start-50 top-0 translate-middle-x px-2 py-1 bg-white hov-eff " style={{margin: '-16px auto'}} type="button">
            <i className="mdi mdi-plus"> </i> ADD SECTION
          </button>
        </div> 
        <div className="hidden-menu3 shadow py-3 pe-3 ps-2 mb-3" style={{display: 'none'}}>
          <div className="d-flex">
            <i className="mdi mdi-reorder-vertical font-14 d-inline-block my-auto me-1" />
            <input type="text" className="form-control border-top-0 border-start-0 border-end-0 rounded-0 job-hiring h4 font-600 text-dark" placeholder="ADD SECTION TITLE" />
          </div>
          <div className="d-flex my-2 ms-3">
            <textarea className="form-control" id="example-textarea" rows={5} placeholder=" A short hint to interviewers " defaultValue={""} />
          </div>
          <div className="d-flex mt-1 justify-content-sm-end">
            <button type="button" className="btn me-2" data-bs-dismiss="modal"> Delete </button>
            <button type="button" className="btn btn-primary"> Add </button>
          </div>
        </div>
        <div className="py-3">
          <p> Overall Comments </p> 
          <div id="snow-editor" style={{height: 300}} />
        </div>
        <div className="form-check form-switch py-1">
          <input type="checkbox" className="form-check-input" id="customSwitch1" />
          <label className="form-check-label" htmlFor="customSwitch1"> Minimum characters required </label>
        </div>
      </div>
    </div>{/* /.modal-content */}
  </div>{/* /.modal-dialog */}
</div>

<div id="preview-modal" className="modal fade bg-transparent1" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
  <div className="w-75 modal-dialog modal-lg modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header px-4">
        <h4 className="modal-title" id="standard-modalLabel"> Interview Snapshot </h4>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"> Exit Preview </button>
      </div>
      <div className="modal-body bg-light px-4">
        <div className="py-2">
          <span className="small text-muted pb-3"> A scorecard has been created to help you structure your interview. Use this to submit your feedback after <br /> evaluation. Feedback is used internally and will not be shared with the candidates. </span>
          <p className="font-15 mt-2"> Your Overall Recommendation </p>
          <div className="d-flex my-3">
            <button type="button" className="btn btn-success btn-rounded font-600 font-12 me-2 px-2"> <i className="mdi mdi-thumb-up" /> &nbsp; Strong Hire </button>
            <button type="button" className="btn btn-success btn-rounded font-600 font-12 me-2 px-2"> <i className="mdi mdi-thumb-up" /> &nbsp; Hire </button>
            <button type="button" className="btn btn-danger btn-rounded font-600 font-12 me-2 px-2"> <i className="mdi mdi-thumb-down" /> &nbsp; No Hire </button>
            <button type="button" className="btn btn-danger btn-rounded font-600 font-12 me-2 px-2"> <i className="mdi mdi-thumb-down" /> &nbsp; Strong No Hire </button>
          </div>
          <div className="p-3 bg-white border rounded shadow">
            <p className="font-600 text-dark"> Interpersonal Skills </p> 
            <p className="text-preline text-secondary"> How good are they at striking up a conversation? Have they put you at your ease? </p>
            <div>
              <i className="mdi mdi-star-off-outline pe-1 border-end font-20" />
              <i className="mdi mdi-star-outline font-20" />
              <i className="mdi mdi-star-outline font-20" />
              <i className="mdi mdi-star-outline font-20" />
              <i className="mdi mdi-star-outline font-20" />
              <i className="mdi mdi-star-outline font-20" />
            </div>
            <div className="my-2">
              <textarea className="form-control" id="example-textarea" rows={5} placeholder="Note" defaultValue={""} />
            </div>
          </div>
          <p className="font-15 mt-3"> Overall Comments </p>
          {/* <div id="snow-editor" style="height: 300px;"></div> */}
          <textarea id="simplemde1" defaultValue={""} />
          <div>0/0 Minimum</div>
        </div>
      </div>
    </div>{/* /.modal-content */}
  </div>{/* /.modal-dialog */}
</div>

        </>
    )
}

export default ManageInterview
