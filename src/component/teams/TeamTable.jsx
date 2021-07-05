import React from 'react'

function TeamTable() {
    return (
        <>
          <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white">
                <button className="btn btn-outline-secondary mb-2">Add new</button>
                <ul className="list-group py-2">
                  <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row">
                        <div className="col-lg-12">
                          <p className="mb-0"> Business</p>
                        </div>
                      </div>
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <span>
                          <i className=" dripicons-document-edit align-middle me-2" /> 
                          <i className=" mdi mdi-trash-can-outline fs-4 me-2" data-bs-toggle="modal" data-bs-target="#delete-department" />
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>   
        </>
    )
}

export default TeamTable
