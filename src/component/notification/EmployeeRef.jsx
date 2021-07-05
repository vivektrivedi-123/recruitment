import React from 'react'

function EmployeeRef() {
    return (
        <>
                <h4 className="text-info ps-1 mt-4">Employee Referrals</h4>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch5" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch5">Candidate referral acknowledgement</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch5" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch5">Referral candidate status updated</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input type="checkbox" className="form-check-input" id="customSwitch5" defaultChecked />
                            <label className="form-check-label" htmlFor="customSwitch5">Referral candidate dropped due to cool off</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
        </>
    )
}

export default EmployeeRef