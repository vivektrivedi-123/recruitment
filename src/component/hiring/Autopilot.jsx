import React from 'react'

function Autopilot() {
    return (
        <>
 <div className="col-md-4 ">
          <div className="row ">
            <div className="col-md-3 ">
              <svg id="workflow " viewBox="0 0 60 60 ">
                <g id="Symbols ">
                  <g id="intproc ">
                    <g id="Group-17-Copy-5 ">
                      <g id="Page-1 ">
                        <polygon id="Fill-1 " style={{fill: 'none'}} points="0,60 60,60 60,0 0,0 " />
                      </g>
                      <g id="Group-2 " transform="translate(1.000000, 1.000000) ">
                      </g>
                    </g>
                  </g>
                </g>
                <g>
                  <path style={{fill: '#F0F0F0'}} d="M47.4,30c0,3.3-2.7,5.9-5.9,5.9h-23c-3.3,0-5.9-2.7-5.9-5.9c0-3.3,2.6-5.9,5.9-5.9h23 C44.8,24.1,47.4,26.8,47.4,30z M18.5,18.2h23c3.2,0,5.9-2.6,5.9-5.9c0-3.2-2.6-5.9-5.9-5.9h-23c-3.3,0-5.9,2.7-5.9,5.9
                                       S15.2,18.2,18.5,18.2z M41.5,41.7h-23c-3.3,0-5.9,2.6-5.9,5.9c0,3.2,2.6,5.9,5.9,5.9h23c3.2,0,5.9-2.6,5.9-5.9 C47.4,44.4,44.8,41.7,41.5,41.7z " />
                  <path style={{fill: '#FF5969'}} d="M30.6,37.1l1,1l-2.3,2.3H29l-2.3-2.3l1-1l0.9,0.9v-2h1.1v1.9L30.6,37.1z M29.3,23l2.3-2.3l-1-1 l-0.9,0.9v-2h-1.1v2l-0.9-0.9l-1,1L29,23H29.3z " />
                  <path style={{fill: '#979797'}} d="M51.2,0.3H8.8c-1.9,0-3.5,1.6-3.5,3.5v52.4c0,1.9,1.6,3.5,3.5,3.5h42.4c1.9,0,3.5-1.6,3.5-3.5V3.8 C54.7,1.9,53.1,0.3,51.2,0.3z M53.3,56.2c0,1.2-0.9,2.1-2.1,2.1H8.8c-1.2,0-2.1-0.9-2.1-2.1V3.8c0-1.2,0.9-2.1,2.1-2.1h42.4
                                       c1.2,0,2.1,0.9,2.1,2.1V56.2z M31.7,26.4h1.2l-0.8,1l-1.6,2.3l-0.1,0.1v2.8l-1,1V30h-0.1l-1.7-2.6l-0.6-1h1.2H31.7z M25.7,11 l0.6-0.8l-1.5-1.4c-0.2-0.2-0.2-0.4,0-0.6s0.4-0.2,0.6,0l1.5,1.4l0.5-0.7l0.8,2.5L25.7,11z M32,9.8H33v6.1H32V9.8z
                                       M29.3,15.8 l1.4-5.9l1,0.2L30.3,16L29.3,15.8z M27.2,16.2l-0.9-0.5l3.1-5.3l0.9,0.5L27.2,16.2z M32.8,47.2l-4.4,4.9c-0.2,0.2-0.5,0-0.5-0.2 l1-3.6h-2.3c-0.2,0-0.4-0.3-0.2-0.5l4.4-4.9c0.2-0.2,0.5,0,0.5,0.3l-1.1,3.9l2.4-0.4C32.8,46.7,33,47,32.8,47.2z " />
                </g>
              </svg>
            </div>
            <div className="col-md-9 ">
              <p className="text-muted "> Set up custom workflows to automate your repetitive and manual tasks </p>
              <button className="btn btn-primary shadow rounded-pill px-3" data-bs-toggle="modal" data-bs-target="#autopilot-modal"> Manage Autopilot Workflows </button>
            </div>
          </div>
        </div>
     <div id="autopilot-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
  <div className="min-vw-100 modal-dialog modal-top modal-xl">
    <div className="modal-content">
      <div className="modal-header px-5">
        <h4 className="modal-title ps-4" id="standard-modalLabel"> Autopilot Workflows </h4>
        <div className="d-flex me-auto px-3">
          <div className="bg-light vertical-align rounded-circle position-relative" style={{width: 35, height: 35}}>
            <i className="dripicons-briefcase position-absolute top-50 px-2 translate-middle-x translate-middle-y" />
          </div>
          <h4 className="vertical-align ms-2">Test</h4>
        </div>
        <div className="bg-light rounded-circle position-relative" style={{width: 40, height: 40}}>
          <button type="button" className="btn-close py-0 position-absolute top-50 end-0 translate-middle-x" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
      </div>
      <div className="modal-body p-0">
        <div className="bg-light-lighten py-3">
          <div className="px-5">
            <div className="d-flex">
              <div className="w-75 d-flex vertical-align ps-3">
                <span className="bg-white rounded vertical-align my-auto p-4">
                  <i className="mdi mdi-slot-machine-outline font-24 text-muted" />
                </span>
                <div className="w-75 vertical-align my-auto ps-3">
                  <p className="pe-3 mb-0"> Automate actions that you perform on a day-to day-basis like sending screening tests to candidates or 
                    creating an employee in your HRMS when a candidate is hired. We created some templates for you, to help  you get 
                    started. </p> 
                </div>
              </div>
              <div className="w-25 my-auto vertical-align me-3">
                <a href="Autopilot-Workflows.html">
                  <div className="d-flex border bg-white h-auto px-4 mx-1 py-2 font-15 font-600 text-center border-dashed-2" role="button">
                    <span className> <i className="mdi mdi-plus-circle text-success" style={{fontSize: 40}} /></span>
                    <span className="ms-2 my-auto"> Create new automation</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light px-5 py-3" style={{height: 450}}>
          <div className="d-flex mx-3 justify-content-sm-between border-bottom">
            <h5 className="font-600"> SAMPLE TEMPLATES </h5>
            <p className="my-auto pe-2"> <i className="mdi mdi-help-circle-outline" />  Help </p>
          </div>
          <div className="d-flex mx-3 my-3"> 
            <div className="w-25 bg-white text-center border rounded py-3 px-4 me-3">
              <h4> Send online test </h4>   
              <p className="text-muted"> Send a test to the candidate if moved to the 'onlin test' stage </p>             
            </div>
            <div className="w-25 bg-white text-center border rounded py-3 px-4 me-3">
              <h4> Reject on custom requirements </h4>   
              <p className="text-muted"> Based on custom application form fields (egs. Visa not available, skill or experience does not match) </p>                      
            </div>
            <div className="w-25 bg-white text-center border rounded py-3 px-4 me-3">
              <h4> Update HRMS </h4>   
              <p className="text-muted"> When a candidate is hired, trigger a webhook to notify your HRMS of the candidate's details. </p>                  
            </div>
            <div className="w-25 bg-white text-center border rounded py-3 px-4 me-3">
              <h4> Keep candidates updated </h4>   
              <p className="text-muted"> Send notifications to candidates when their stage in the hiring process is updated </p>                      
            </div>
          </div>
        </div>
      </div>
      {/* modal-body-ends */}
    </div>{/* /.modal-content */}
  </div>{/* /.modal-dialog */}
</div>
 
        </>
    )
}

export default Autopilot
