import React from 'react'
import Autopilot from './Autopilot'
import ManageHiring from './ManageHiring'
import ManageInterview from './ManageInterview'

function HiringWork({data}) {

    return (
        <>
            <div className="row m-0 px-2">
  <div className="col-md-12 my-2 ">
    <div className="p-3 bg-white rounded ">
      <h4> Hiring Workflow </h4>
      <div className="row mt-3 ">
        <div className="col-md-4 ">
         <ManageInterview/>
        </div>
        {/* col-md-4 ends */}
      <ManageHiring data={data}/>
        {/* col-md-4 ends */}
       <Autopilot/>
        {/* col-md-4 ends */}
      </div>
    </div>
  </div>
</div>




<div>
  <div id="configure1-modal" className="modal fade bg-transparent1" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
    <div className="w-50 modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header px-3 pb-0">
          <h4 className="modal-title" id="standard-modalLabel"> Interview Kit </h4>
          <ul className="nav nav-tabs nav-bordered ms-auto bg-white border-0 p-0">
            <li className="nav-item">
              <a href="#scorecard" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
                <i className="mdi mdi-home-variant d-md-none d-block" />
                <span className="d-none d-md-block font-15"> Scorecard </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#interviewrInst" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                <i className="mdi mdi-account-circle d-md-none d-block" />
                <span className="d-none d-md-block font-15"> Interviewer's instructions </span>
              </a>
            </li>
          </ul>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body p-0 bg-light">
          <div className="tab-content">
            <div className="tab-pane show active" id="scorecard" style={{height: 215}}>
              <div className="alert alert-warning text-warning border-warning fade show text-center rounded-0" role="alert">
                <i className="dripicons-crosshair" />
                <strong> Select the competencies to focus in this stage </strong> 
              </div>
              <div className="px-3">
                <div className="bg-white shadow my-3 border rounded px-3 py-2">
                  <i className="uil uil-circle font-18 text-muted" />
                  Interpersonal Skills
                </div>
              </div>
            </div>
            <div className="tab-pane p-4" id="interviewrInst">
              <textarea id="simplemde1" defaultValue={""} />
              <div className="d-flex">
                <h5 className="font-16 vertical-align text-muted">Add reference documents</h5>
                <div className="vertical-align my-auto ps-1">(Doc/Docx/ PDF only)</div>
              </div>
              <label className="btn bg-white position-relative rounded border">
                <input type="file" className="d-none" />
                <i className="dripicons-paperclip font-16" />&nbsp;Attach
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer px-3">
          <button type="button" className="btn hov-eff border irs-disabled me-auto" data-bs-dismiss="modal"> Clear Focus Areas </button>
          <button type="button" className="btn hov-eff" data-bs-dismiss="modal"> Cancel </button>
          <button type="button" className="btn btn-primary"> Add </button>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */}]

<div id="configure5-modal" className="modal fade bg-transparent1" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
  <div className="w-50 modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header px-4">
        <h4 className="modal-title" id="standard-modalLabel"> Intergrate with an online assessment service </h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>
      <div className="modal-body px-4" style={{height: 215}}>
        <div className="d-flex mt-2">
          <svg id="hacker_earth" viewBox="0 0 100 100" width="30px">
            <path style={{fill: '#2C3454'}} d="M86.6,1H39.8v26.6h0.4c4-5.2,9-5.7,14.4-5.3c8,0.5,15.9,5.5,16.4,21.1v29.9c0,0.4-0.2,0.7-0.6,0.7
               h-9.4c-0.4,0-1-0.3-1-0.7v-29c0-7.3-2.4-12.7-9.6-12.7c-5.2,0-10.8,3.6-10.8,11.3v30.3c0,0.4,0,0.3-0.4,0.3h-9.4
               c-0.4,0-1.2,0.1-1.2-0.3V1H14c-3.4,0-6.5,2.7-6.5,6.2v85.7c0,3.4,3,6.1,6.5,6.1h72.7c3.4,0,5.8-2.6,5.8-6.1V7.2
               C92.5,3.7,90.1,1,86.6,1z M76.3,86.5H23.7v-5.2h52.6V86.5z" />
          </svg>
          <div className="vertical-align font-20 font-600 ms-1">HackerEarth</div>
        </div>
        <div className="d-flex mt-3 pe-3">
          <a href="#" className="w-100 rounded users-select border position-relative p-1 d-block show" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <label className="control-label py-1 px-2">
              {/**/}Select the online test you wish to send to the candidate</label>
          </a>
          <div className="mw-100 dropdown-menu p-0" aria-labelledby="dropdownMenuButton1" style={{margin: 0}}>
            <ul>
              <li>
                <a className href="#"> Rudra Innovative Software (P)Ltd. - Test Draft - 2 </a>
              </li>
              <li>
                <a className href="#"> Software Developer_PHP </a>
              </li>
            </ul>
          </div>
          <i className="mdi mdi-sync font-22 text-info ms-2 my-auto" />
        </div>
      </div>
      <div className="modal-footer px-4">
        <button type="button" className="btn hov-eff border me-auto" data-bs-dismiss="modal"> Remove </button>
        <button type="button" className="btn hov-eff" data-bs-dismiss="modal"> Cancel </button>
        <button type="button" className="btn btn-primary"> Add </button>
      </div>
    </div>{/* /.modal-content */}
  </div>{/* /.modal-dialog */}
</div>


</div>





<div id="hiring-preview-modal" className="modal fade bg-transparent1" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
  <div className="w-75 modal-dialog modal-lg modal-dialog-scrollable h-auto">
    <div className="modal-content">
      <div className="modal-header px-4">
        <h4 className="modal-title" id="standard-modalLabel"> Hiring Process preview </h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>
      <div className="modal-body bg-light px-4 py-3">
        <div className="row">
          <div className="col-md-12">
            <div className="d-table">
              <div className="card-pannel d-table-cell pe-3">
                <div className="card">
                  <div className="rounded card-body border-start border-4 px-2 py-2 border-secondary ">
                    <h5 className="text-info  semi-bold my-0 "> Open </h5>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2 ">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-pannel d-table-cell pe-3">
                <div className="card">
                  <div className="rounded card-body border-start border-4 px-2 py-2 border-warning ">
                    <h5 className="text-info  semi-bold my-0 "> Contacted </h5>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2 ">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-pannel d-table-cell pe-3">
                <div className="card">
                  <div className="rounded card-body border-start border-4 px-2 py-2 border-warning ">
                    <h5 className="text-info  semi-bold my-0 "> Written Test </h5>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2 ">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-pannel d-table-cell pe-3">
                <div className="card">
                  <div className="rounded card-body border-start border-4 px-2 py-2 border-danger ">
                    <h5 className="text-info  semi-bold my-0 "> Technical round </h5>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2 ">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-pannel d-table-cell pe-3">
                <div className="card">
                  <div className="rounded card-body border-start border-4 px-2 py-2 border-danger ">
                    <h5 className="text-info  semi-bold my-0 "> Culture fit round </h5>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2 ">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-pannel d-table-cell pe-3">
                <div className="card">
                  <div className="rounded card-body border-start border-4 px-2 py-2 border-primary ">
                    <h5 className="text-info  semi-bold my-0 "> Offer Draft </h5>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2 ">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-pannel d-table-cell pe-3">
                <div className="card">
                  <div className="rounded card-body border-start border-4 px-2 py-2 border-danger ">
                    <h5 className="text-info  semi-bold my-0 "> Offered </h5>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2 ">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-pannel d-table-cell pe-3">
                <div className="card">
                  <div className="rounded card-body border-start border-4 px-2 py-2 border-primary ">
                    <h5 className="text-info  semi-bold my-0 "> Offer Accepted </h5>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2 ">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-pannel d-table-cell pe-3">
                <div className="card">
                  <div className="rounded card-body border-start border-4 px-2 py-2 border-primary ">
                    <h5 className="text-info  semi-bold my-0 "> Offer Declined </h5>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2 ">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-pannel d-table-cell pe-3">
                <div className="card">
                  <div className="rounded card-body border-start border-4 px-2 py-2 border-success ">
                    <h5 className="text-info  semi-bold my-0 "> Hired </h5>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2 ">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded py-2 px-2 mt-2">
                  <div className="d-flex vertical-allign pb-1">
                    <div className="col-md-8">
                      <div className="bg-secondary-lighten w-100 h-50 rounded irs-disabled" />
                      <div className="bg-secondary-lighten w-75 h-50 rounded mt-1 irs-disabled" />
                    </div>
                    <div className="col-md-4 text-end irs-disabled">
                      <i className="mdi mdi-account-circle-outline text-secondary font-24" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{/* /.modal-content */}
  </div>{/* /.modal-dialog */}
</div>

        </>
    )
}

export default HiringWork
