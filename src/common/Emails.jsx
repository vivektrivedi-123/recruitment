import React from 'react'

function Emails() {
    return (
        <>
        <button className="btn btn-outline-secondary w-100"><span className="float-start"><i className="mdi mdi-email-outline" /> Send Email</span> </button>
        <div className="show-btns">
          <div className="p-2 mx-3 my-sm-3 position-relative">
            <div className="d-flex ">
              <i className="mdi mdi-draw mdi-24px text-muted" />
              <div className="avatar-md">
                <span className="avatar-title bg-success rounded-circle h-75 w-75 mx-auto">
                  G
                </span>
              </div>
              <div>
                <p className="fw-bold text-info mb-0 mt-sm-1" id="tooltip-container2">Gaurav Aery, <span className="fw-normal" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Last Friday at 10:33 AM">Saved a draft 3 days ago</span> </p>
                <div className="position-relative candidate-info">
                  <p className=" mb-0">To: Riteshsanan05@gmail.com</p>
                  <div className="display-information bg-white shadow">
                    <div className="arrow" />
                    <div className="p-3">
                      <p className="text-info font-600">To:
                        <span className="text-muted fw-normal text-truncate">Riteshsanan05@gmail.com</span>
                      </p>
                      <hr />
                      <p className="text-info font-600">From:
                        <span className="text-muted fw-normal text-truncate overflow-wrap">careers@rudrainnovatives.freshteam.com</span>
                      </p>
                      <p className="text-info font-600">Reply to:
                        <span className="text-muted fw-normal text-truncate text-break">careers@rudrainnovatives.freshteam.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div><h4 className="text-info ms-sm-4">Your Application for Dot Net Developer</h4>
            <div className="hover-btns position-absolute d-flex justify-content-center py-sm-2" id="tooltip-container2">
              <button type="button" className="btn btn-primary btn-rounded mr-sm-2" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" data-bs-original-title="View"><i className="mdi mdi-circle-edit-outline" /> </button>
              <button type="button" className="btn btn-primary btn-rounded ms-sm-2" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Discard" data-bs-original-title="Remove"><i className="mdi mdi-trash-can-outline" /> </button>
            </div>
          </div>
        </div>
        </>
    )
}

export default Emails
