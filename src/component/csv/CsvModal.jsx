import React from 'react'

function CsvModal() {
    return (
        <>
        <div className="modal fade" id="CreateEmp_csv-modal" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" style={{minWidth: '1000px!important'}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title" id="myLargeModalLabel">Employee Fields</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>
      <div className="modal-body py-2">
        <div className="row justify-content-between align-items-center border-bottom pb-2">
          <div className="col-7">
            <p className="mb-0">The Following Fields can be imported for employees.</p>
          </div>
          <div className="col-5">
            <div className="d-flex form-check form-checkbox-success form-switch">
              <input 
               type="checkbox" 
               className="form-check-input mt-1 me-sm-2" 
               id="customSwitch1" 
               defaultChecked 
               />
              <label className="form-check-label fw-normal fs-4 ps-4" htmlFor="customSwitch1">Show Fields Required to Create Employee Records</label>
            </div>
          </div>
        </div>
        <div className="row pt-2 csv">
          <div className="col-sm-3 mb-2 mb-sm-0 border-end">
            <div className="nav flex-column nav-pills" style={{display: 'unset'}} id="v-pills-tab" role="tablist" aria-orientation="vertical"> 
              <h4>Current Information</h4>
              <a className="nav-link active show" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                <i className="mdi mdi-home-variant d-md-none d-block" />
                <span className="d-none d-md-block">Job</span>
              </a>
              <a className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                <i className="mdi mdi-account-circle d-md-none d-block" />
                <span className="d-none d-md-block">Personal</span>
              </a>
              <a className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <i className="mdi mdi-settings-outline d-md-none d-block" />
                <span className="d-none d-md-block">Employment &amp; Education</span>
              </a>
              <a className="nav-link" id="v-pills-settings-tab1" data-bs-toggle="pill" href="#v-pills-settings1" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <i className="mdi mdi-settings-outline d-md-none d-block" />
                <span className="d-none d-md-block">Compensation</span>
              </a>
              <hr />
              <h4>Historical Information</h4>
              <a className="nav-link" id="v-pills-home-tab1" data-bs-toggle="pill" href="#v-pills-home1" role="tab" aria-controls="v-pills-home" aria-selected="true">
                <i className="mdi mdi-home-variant d-md-none d-block" />
                <span className="d-none d-md-block">Salary</span>
              </a>
              <a className="nav-link" id="v-pills-profile-tab1" data-bs-toggle="pill" href="#v-pills-profile1" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                <i className="mdi mdi-account-circle d-md-none d-block" />
                <span className="d-none d-md-block">Bonuses</span>
              </a>
              <a className="nav-link" id="v-pills-settings-tab2" data-bs-toggle="pill" href="#v-pills-settings2" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <i className="mdi mdi-settings-outline d-md-none d-block" />
                <span className="d-none d-md-block">Stocks</span>
              </a>
              <a className="nav-link" id="v-pills-settings-tab12" data-bs-toggle="pill" href="#v-pills-settings12" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <i className="mdi mdi-settings-outline d-md-none d-block" />
                <span className="d-none d-md-block">Employment Details</span>
              </a>
              <a className="nav-link" id="v-pills-settings-tab13" data-bs-toggle="pill" href="#v-pills-settings13" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <i className="mdi mdi-settings-outline d-md-none d-block" />
                <span className="d-none d-md-block">Education Details</span>
              </a>
              <a className="nav-link" id="v-pills-settings-tab14" data-bs-toggle="pill" href="#v-pills-settings14" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <i className="mdi mdi-settings-outline d-md-none d-block" />
                <span className="d-none d-md-block">Transfer Requests</span>
              </a>
            </div>
          </div> {/* end col*/}
          <div className="col-sm-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade active show px-3" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <div style={{height: 430, overflowY: 'auto', overflowX: 'hidden'}}>
                  <h4 className="mb-3">General Information</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>First Name <sup className="text-danger ms-1">*</sup></p>
                      <p>Last Name <sup className="text-danger ms-1">*</sup></p>
                    </div>
                    <div className="col-md-6">
                      <p>Middle Name</p>
                      <p>Official Email <sup className="text-danger ms-1">*</sup></p>
                    </div>
                  </div>
                  <h4 className="mb-3">Work Information</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Employee Id </p>
                      <p>Date Of Joining </p>
                      <p>Department </p>
                      <p>Business Unit</p>
                      <p>Sub Department </p>
                      <p>Level </p>
                    </div>
                    <div className="col-md-6">
                      <p>Employee Status</p>
                      <p>Employee Type </p>
                      <p>Designation or Title </p>
                      <p>Office location </p>
                      <p>Primary term</p>
                      <p>Cost Center </p>
                    </div>
                  </div>
                  <h4 className="mb-3">Additional Work Information</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Shift </p>
                      <p>Probation Start Date</p>
                    </div>
                    <div className="col-md-6">
                      <p>ID Card Number</p>
                      <p>Probation End Date </p>
                    </div>
                  </div>
                  <h4 className="mb-3">Reporting Information</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Reporting Manager</p>
                    </div>
                    <div className="col-md-6">
                      <p>HR Partner </p>
                    </div>
                  </div>
                  <h4 className="mb-3">EEO Information</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Ethinicity</p>
                    </div>
                    <div className="col-md-6">
                      <p>EEO Job Category </p>
                    </div>
                  </div>
                  <h4 className="mb-3">Notice Period Information</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Notice Period Duration</p>
                      <p>Notice Period End Date</p>
                    </div>
                    <div className="col-md-6">
                      <p>Notice Period Start Date </p>
                    </div>
                  </div>
                  <h4 className="mb-3">Termination Information</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Termination Date</p>
                      <p>Termination Reason</p>
                    </div>
                    <div className="col-md-6">
                      <p>Termination Category</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade px-3" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <div style={{height: 430, overflowY: 'auto', overflowX: 'hidden'}}>
                  <h4 className="mb-3">Profile Information</h4>
                  <p>Display Name</p>
                  <h4 className="mb-3">Personal Information</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Gender </p>
                      <p>Date of Birth </p>
                    </div>
                    <div className="col-md-6">
                      <p>Blood Group</p>
                      <p>Marital Status </p>
                    </div>
                  </div>
                  <h4 className="mb-3">Personal Contact Information</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Home Address</p>
                      <p>Personal Email </p>
                    </div>
                    <div className="col-md-6">
                      <p>Communication Address</p>
                    </div>
                  </div>
                  <h3 className="mb-3">Dependent Information</h3>
                  <h4 className="mb-3">Dependent Information</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Full Name <sup className="text-danger ms-1">*</sup></p>
                      <p>Gender </p>
                    </div>
                    <div className="col-md-6">
                      <p>Relationship</p>
                      <p>Date of Birth </p>
                    </div>
                  </div>
                  <h3 className="mb-3">Emergency Information</h3>
                  <h4 className="mb-3">Emergency Contact</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Full Name <sup className="text-danger ms-1">*</sup></p>
                      <p>Email Address </p>
                      <p>Address </p>
                    </div>
                    <div className="col-md-6">
                      <p>Relationship</p>
                      <p>Contact Number <sup className="text-danger ms-1">*</sup></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade px-3" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <div style={{height: 430, overflowY: 'auto', overflowX: 'hidden'}}>
                  <div className="row">
                    <div className="col-md-6">
                      {/*employment and education content goes here*/}
                    </div>
                    <div className="col-md-6">
                      {/*employment and education content goes here*/}
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-settings1" role="tabpanel" aria-labelledby="v-pills-settings-tab1">
                <div style={{height: 430, overflowY: 'auto', overflowX: 'hidden'}}>
                  <h3 className="mb-3">Banking Details</h3>
                  <h4 className="mb-3">Bank Details</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Bank Name <sup className="text-danger ms-1">*</sup></p>
                      <p>Bank Code <sup className="text-danger ms-1">*</sup></p>
                    </div>
                    <div className="col-md-6">
                      <p>Name As Per Bank Account</p>
                      <p>Account Number <sup className="text-danger ms-1">*</sup></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade " id="v-pills-home1" role="tabpanel" aria-labelledby="v-pills-home-tab1">
                <div style={{height: 430, overflowY: 'auto', overflowX: 'hidden'}}>
                  <h3 className="mb-3">Salary</h3>
                  <h4 className="mb-3">Salary Details</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Effective Date <sup className="text-danger ms-1">*</sup></p>
                      <p>Annual salary <sup className="text-danger ms-1">*</sup></p>
                      <p>Pay Rate Amount</p>
                      <p>Payout Frequency</p>
                      <p>Pay Method</p>
                      <p>Eligible Work Hour Rate</p>
                      <p>Summary/Notes</p>
                      <p>Variable Pay Amount</p>
                      <p>Variable Pay Notes</p>
                    </div>
                    <div className="col-md-6">
                      <p>Currency <sup className="text-danger ms-1">*</sup></p>
                      <p>Reason </p>
                      <p>Duration</p>
                      <p>Pay Group</p>
                      <p>Eligible Work Hours</p>
                      <p>Additional Details on Compensation</p>
                      <p>Variable Pay Percentage(%)</p>
                      <p>Variable Pay Payout Frequency</p>
                      <p>Variable Pay/Commission</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-profile1" role="tabpanel" aria-labelledby="v-pills-profile-tab1">
                <div style={{height: 430, overflowY: 'auto', overflowX: 'hidden'}}>
                  <h3 className="mb-3">Bonus</h3>
                  <h4 className="mb-3">Bonus Details</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Effective Date <sup className="text-danger ms-1">*</sup></p>
                      <p>Currency <sup className="text-danger ms-1">*</sup></p>
                      <p>Reason</p>
                    </div>
                    <div className="col-md-6">
                      <p>Bonus Type <sup className="text-danger ms-1">*</sup></p>
                      <p>Amount <sup className="text-danger ms-1">*</sup></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings-tab2">
                <div style={{height: 430, overflowY: 'auto', overflowX: 'hidden'}}>
                  <h3 className="mb-3">Stock Grant</h3>
                  <h4 className="mb-3">Stock Grant Details</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Grant Date</p>
                      <p>Grant Reason</p>
                      <p>Expiration Date</p>
                      <p>No of Stocks <sup className="text-danger ms-1">*</sup></p>
                      <p>Exercise Price Discount</p>
                      <p>Within Target Grant Range</p>
                      <p>Vesting Commencement Date <sup className="text-danger ms-1">*</sup></p>
                      <p>Vesting Duration</p>
                      <p>Pay Rate</p>
                      <p>Confidential Notes</p>
                      <p>Custom Vesting Notes</p>
                    </div>
                    <div className="col-md-6">
                      <p>Grant Number</p>
                      <p>Grant Type</p>
                      <p>Currency</p>
                      <p>Exercise Price</p>
                      <p>Fair Market Value per Share</p>
                      <p>Vesting Acceleration Type</p>
                      <p>Vesting Period</p>
                      <p>Vesting Frequency (%)</p>
                      <p>Summary/Notes</p>
                      <p>Show Notes to Reporting Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-settings12" role="tabpanel" aria-labelledby="v-pills-settings-tab12">
                <h3 className="mb-3">Previous Employer</h3>
                <h4 className="mb-3">Previous Employer</h4>
                <div className="row ">
                  <div className="col-md-6">
                    <p>Employer Name <sup className="text-danger ms-1">*</sup></p>
                    <p>End Date </p>
                    <p>Job Description</p>
                    <p>Other salary components</p>
                    <p>Reference Phone number</p>
                  </div>
                  <div className="col-md-6">
                    <p>Start Date </p>
                    <p>Destination <sup className="text-danger ms-1">*</sup></p>
                    <p>Base Salary</p>
                    <p>Reference Name</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-settings13" role="tabpanel" aria-labelledby="v-pills-settings-tab13">
                <div style={{height: 430, overflowY: 'auto', overflowX: 'hidden'}}>
                  <h3 className="mb-3">Education</h3>
                  <h4 className="mb-3">Education</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Degree <sup className="text-danger ms-1">*</sup></p>
                      <p>Institute name <sup className="text-danger ms-1">*</sup></p>
                      <p>Course Start Date</p>
                      <p>Date of passing</p>
                    </div>
                    <div className="col-md-6">
                      <p>Course </p>
                      <p>Grade Average </p>
                      <p>Course End Date</p>
                      <p>Description</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-settings14" role="tabpanel" aria-labelledby="v-pills-settings-tab14">
                <div style={{height: 430, overflowY: 'auto', overflowX: 'hidden'}}>
                  <h3 className="mb-3">Transfer Requests</h3>
                  <h4 className="mb-3">Transfer Requests Details</h4>
                  <div className="row ">
                    <div className="col-md-6">
                      <p>Transfer date <sup className="text-danger ms-1">*</sup></p>
                      <p>New Primary Team </p>
                      <p>New Reporting Manager </p>
                      <p>Old Department </p>
                      <p>New Business Unit </p>
                      <p>New Office Location</p>
                      <p>New Sub Department </p>
                      <p>New Job Title</p>
                      <p>New Level </p>
                      <p>New HR Partner</p>
                      <p>NMissing translation <br /> "employee.transfer_changes.new_cost_center" for locale <br /> "en"</p>
                      <p>Comments</p>
                    </div>
                    <div className="col-md-6">
                      <p>Old Primary Team</p>
                      <p>Old Reporting Manager</p>
                      <p>Old Department </p>
                      <p>Old Business Unit </p>
                      <p>New Office Location </p>
                      <p>Old Sub Department </p>
                      <p>Old Job Title </p>
                      <p>Old Level </p>
                      <p>Old HR Partner </p>
                      <p>Missing translation <br /> "employee.transfer_changes.old_cost_center" for locale <br /> "en" </p>
                      <p>Initiated Date </p>
                      <p>Approved Date </p>
                      <p>Approved By </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* end tab-content*/}
          </div> {/* end col*/}
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>
</div>
 
        </>
    )
}

export default CsvModal
