import React from 'react'

function Modal2() {
    return (
        <>
           <div className="modal fade" id="dynamic-placeholders-modal" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header app-search d-flex justify-content-between align-items-center">
          <h4 className="modal-title" id="myLargeModalLabel">View Dynamic Placeholders</h4>
          <div className="position-relative d-flex align-items-center">
            <input type="text" className="form-control" placeholder="Filter" />
            <span className="mdi mdi-magnify search-icon" />
            <button type="button" className="btn-close m-0 ms-3" data-bs-dismiss="modal" aria-hidden="true" />
          </div>
        </div>
        <div className="modal-body"><hr className="position-absolute" style={{top: 30}} />
          <table className="table table-centered mb-0 templates">
            <thead className="position-relative">
              <tr className="border border-bottom">
                <th className="fs-4 fw-normal">Label Name</th>
                <th className="fs-4 fw-normal">Document Placeholder</th>
                <th className="fs-4 fw-normal">Type</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="font-600 fs-4">Company</th>
              </tr>
              <tr>
                <td>Company name</td>
                <td>employee_portal.company_name</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Company location</td>
                <td>{'{'}{'{'}employee_portal.company_location{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Company location - city</td>
                <td>{'{'}{'{'}employee_portal.company_city{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Company location - country</td>
                <td>{'{'}{'{'}employee_portal.company_country{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Employee portal name</td>
                <td>{'{'}{'{'}employee_portal.name{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Career site name</td>
                <td>{'{'}{'{'}career_portal.name{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <th className="font-600 fs-4">Job</th>
              </tr>
              <tr>
                <td>Job title</td>
                <td>{'{'}{'{'}job.job_title{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Job Type</td>
                <td>{'{'}{'{'}job.job_type{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Doer's name</td>
                <td>{'{'}{'{'}doer.name{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Doer's email</td>
                <td>{'{'}{'{'}doer.email{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Doer's designation</td>
                <td>{'{'}{'{'}doer.designation{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Hiring manager's name</td>
                <td>{'{'}{'{'}hiring_manager.name{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Hiring manager's email</td>
                <td>{'{'}{'{'}hiring_manager.email{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Hiring manager's designation</td>
                <td>{'{'}{'{'}hiring_manager.designation{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <th className="font-600 fs-4">Candidate</th>
              </tr>
              <tr>
                <td>Name</td>
                <td>{'{'}{'{'}applicant.name{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>First name</td>
                <td>{'{'}{'{'}applicant.first_name{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Last name</td>
                <td>{'{'}{'{'}applicant.last_name{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Contact address</td>
                <td>{'{'}{'{'}applicant.address{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Street</td>
                <td>{'{'}{'{'}applicant.street{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>{'{'}{'{'}applicant.city{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>State</td>
                <td>{'{'}{'{'}applicant.state{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{'{'}{'{'}applicant.country{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Zip code</td>
                <td>{'{'}{'{'}applicant.zip_code{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{'{'}{'{'}applicant.email{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <th className="font-600 fs-4">Offer</th>
              </tr>
              <tr>
                <td>Created at</td>
                <td>{'{'}{'{'}offer.created_at{'}'}{'}'}</td>
                <td>Date</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Pay type</td>
                <td>{'{'}{'{'}offer.pay_type{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Bonus</td>
                <td>{'{'}{'{'}offer.bonus{'}'}{'}'}</td>
                <td>Object</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Bonuses</td>
                <td>{'{'}{'{'}offer.bonuses{'}'}{'}'}</td>
                <td>Group</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Stock Grant</td>
                <td>{'{'}{'{'}offer.stock_grant{'}'}{'}'}</td>
                <td>Object</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Stock Grants</td>
                <td>{'{'}{'{'}offer.stock_grants{'}'}{'}'}</td>
                <td>Group</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Effective Date</td>
                <td>{'{'}{'{'}offer.effective_date{'}'}{'}'}</td>
                <td>Date</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Currency</td>
                <td>{'{'}{'{'}offer.currency{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Annual Salary</td>
                <td>{'{'}{'{'}offer.annual_amount{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Pay rate value</td>
                <td>{'{'}{'{'}offer.pay_rate_value{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Pay Group</td>
                <td>{'{'}{'{'}offer.pay_group{'}'}{'}'}</td>
                <td>Dropdown</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Pay Method</td>
                <td>{'{'}{'{'}offer.pay_method{'}'}{'}'}</td>
                <td>Dropdown</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Eligible work hours</td>
                <td>{'{'}{'{'}offer.eligible_work_hours{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Work hours rate</td>
                <td>{'{'}{'{'}offer.work_hour_rate{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Other components</td>
                <td>{'{'}{'{'}offer.other_components{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Salary type</td>
                <td>{'{'}{'{'}offer.salary_type{'}'}{'}'}</td>
                <td>Dropdown</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Variable Pay percentage</td>
                <td>{'{'}{'{'}offer.variable_pay_percentage{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Variable Pay amount</td>
                <td>{'{'}{'{'}offer.variable_pay_amount{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Variable Pay frequency</td>
                <td>{'{'}{'{'}offer.variable_pay_frequency{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Variable Pay details</td>
                <td>{'{'}{'{'}offer.variable_pay_details{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Salary description</td>
                <td>{'{'}{'{'}offer.description{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Pay rate</td>
                <td>{'{'}{'{'}offer.pay_rate{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Payout Frequency</td>
                <td>{'{'}{'{'}offer.payout_frequency{'}'}{'}'}</td>
                <td>Dropdown</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Benefits</td>
                <td>{'{'}{'{'}offer.benefits{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Validity</td>
                <td>{'{'}{'{'}offer.validity{'}'}{'}'}</td>
                <td>Date</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Job title offered</td>
                <td>{'{'}{'{'}offer.job_title{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Employee type</td>
                <td>{'{'}{'{'}offer.employee_type{'}'}{'}'}</td>
                <td>Dropdown</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Job location</td>
                <td>{'{'}{'{'}offer.branch_location{'}'}{'}'}</td>
                <td>Dropdown</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>HR partner's name</td>
                <td>{'{'}{'{'}offer.hr_incharge_name{'}'}{'}'}</td>
                <td>Dropdown</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>HR partner's email</td>
                <td>{'{'}{'{'}offer.hr_incharge_email{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>HR partner's designation</td>
                <td>{'{'}{'{'}offer.hr_incharge_designation{'}'}{'}'}</td>
                <td>Dropdown</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Reporting manager's name</td>
                <td>{'{'}{'{'}offer.reporting_to_name{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Reporting manager's email</td>
                <td>{'{'}{'{'}offer.reporting_to_email{'}'}{'}'}</td>
                <td>Text</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Reporting manager's designation</td>
                <td>{'{'}{'{'}offer.reporting_to_designation{'}'}{'}'}</td>
                <td>Dropdown</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr><tr>
                <td>Joining date</td>
                <td>{'{'}{'{'}offer.date_of_joining{'}'}{'}'}</td>
                <td>Date</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <th className="font-600 fs-4">E-Signatures</th>
              </tr>
              <tr>
                <td>Company Signature</td>
                <td>{'{'}{'{'}offer.company_sign{'}'}{'}'}</td>
                <td>E-Signature</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Candidate Signature</td>
                <td>{'{'}{'{'}offer.candidate_sign{'}'}{'}'}</td>
                <td>E-Signature</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
              <tr>
                <td>Hiring Manager Signature</td>
                <td>{'{'}{'{'}offer.hiring_manager_sign{'}'}{'}'}</td>
                <td>E-Signature</td>
                <td>
                  <button className="btn btn-info">Copy</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>   
        </>
    )
}

export default Modal2
