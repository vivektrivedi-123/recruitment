import React, { useState } from 'react'

function SubDepartmentTable() {
   const[bool,setBool]=useState(false)
   
   const toggle=()=>{
       setBool(true)
   }
    return (
        <>
    <div className="col-lg-9">{/*company form*/}
      <div className="ms-lg-4 mt-3 p-4 bg-white">
          {!bool?
        <div className="text-center my-5 add-department-field">
          <h3 className="text-info fs-3 mb-3"> No Sub Departments to Show </h3>
          <button className="btn btn-outline-secondary" onClick={toggle}>Add new</button>
        </div>:
        
        <ul className="list-group py-2">
        <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row">
                        <div className="col-lg-12">
                          <input type="text" className="border-0 w-100 bg-transparent"  />
                        </div>
                      </div>
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <span>
                          <i  className="uil uil-check align-middle me-1 align-middle text-success fs-3 " />
                          <i  className="uil uil-times text-danger align-middle fs-3" />
                        </span>
                      </div>
                    </div>
                  </li>

                  <li  className="list-group-item list-group-item-action position-relative">
              <div className="show-btns">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="mb-0">u.department_name</p>
                  </div>
                </div>
                <div className="hover-btns position-absolute" id="tooltip-container2">
                  <span>
                    <i   className=" dripicons-document-edit align-middle me-2" /> 
                    <i  className=" mdi mdi-trash-can-outline fs-4 me-2" data-bs-toggle="modal" data-bs-target="#delete-department" />
                  </span>
                </div>
              </div>
            </li>
        </ul>
        }
      </div>
    </div>{/*/company form*/}
 

        </>
    )
}

export default SubDepartmentTable
