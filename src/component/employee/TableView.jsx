
import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function TableView({data}) {

    const[emp,setEmp]=useState(data)
    const[id,setId]=useState('')

const openModal=(id)=>{
    setId(id)
}

const handleDelete=()=>{
    let d=emp.filter(u=>u.id!==id)
    console.log(d)
    setEmp(d)
}



    return (
        <>
              <table id="scroll-vertical-datatable" className="table table-condensed">
                  <thead>
                    <tr>
                      <th className="bg-secondary align-middle pe-0">
                        <input 
                          type="checkbox" 
                          className="form-check-input" 
                          id="customCheck1" 
                          />
                        </th>
                      <th className="bg-secondary text-white align-middle"> Employee</th>
                      <th className="bg-secondary text-white align-middle">Contact</th>
                      <th className="bg-secondary text-white align-middle">Team/Business unit </th>
                      <th className="bg-secondary text-white align-middle">Employee status </th>
                    </tr>
                  </thead>
                  <tbody>
                      {emp.map((u,i)=>
                    <tr key={i} className="candidates-row">
                      <td className="  position-relative align-middle pe-0 py-3">
                        <div className="form-check form-checkbox-secondary">
                          <input 
                           type="checkbox" 
                           className="form-check-input " 
                           id="customCheck1" 
                           />
                        </div>
                      </td>
                      <td className="align-middle py-3">
                        <div className="row align-items-center">
                          <div className="col-sm-2">
                            <div className={u.status==='Active'?"name-alphabet bg-purple d-flex align-items-center justify-content-center rounded-circle text-white fs-4 semi-bold":"name-alphabet bg-warning d-flex align-items-center justify-content-center rounded-circle text-white fs-4 semi-bold"}>{u.name[0]}</div>
                          </div>
                          <div className="text-primary fw-bold col-sm-10 d-block">{u.name}</div>
                        </div>
                      </td>
                      <td className="align-middle py-3">
                        <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-trigger="hover" data-bs-original-title="amit@rudrainnovatives.com">
                          <i className="dripicons-mail text-info" /> &nbsp;{u.email}
                        </a>
                      </td>
                      <td className="align-middle py-3">
                      </td>
                      <td className="align-middle py-3">
                        <div className="d-flex">
                          <span className={u.status==='Active'?"badge bg-success rounded-0 active-status fs-5 px-3 fw-normal py-1":"badge bg-warning rounded-0 unverified-status fs-5 px-3 fw-normal py-1"}>{u.status}</span>
                          <div className="on-hover-view ms-auto">
                            <ul className="list-unstyled text-end mb-0">
                              <li className="list-inline-item"><Link to={`/employee-edit/${u.id}`}><i className="uil uil-edit-alt fs-4" /></Link></li>
                              <li className="list-inline-item">
                                <div className="dropdown">
                                  <div className="text-info border-0 px-0 after-none semi-bold bg-transparent dropdown-toggle show" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="true">
                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-trigger="hover" data-bs-original-title="More action">
                                      <i className="icon dripicons-dots-3 fs-4" />
                                    </a>
                                  </div>
                                  <ul className="dropdown-menu rounded py-2" aria-labelledby="dropdownMenu2" data-popper-placement="bottom-start" style={{minWidth: 'auto'}}>
                                    <li className="dropdown-item">
                                      <a href="#!" data-bs-toggle="modal" data-bs-target="#opt" onClick={()=>openModal(u.id)}>
                                        Opt-out of Tracking
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    )}
                  </tbody>
                </table>  

                 <div className="modal fade mt-4 py-4 " id="opt" tabIndex={-1} aria-labelledby="standard-modalLabel" aria-modal="true">
    <div className="modal-dialog standard-modal">
      <div className="modal-content">
        <div className="modal-body px-3">
          <div className="d-flex align-items-center">
            <i className="uil uil-exclamation-octagon text-warning me-2 fs-1" />
            <p className="fw-normal mb-0 fs-4">Are you sure you want to opt out from<br /> Freshteam analytics?</p>
            <div className="ms-auto ">
              <ul className="list-unstyled email-bulk-ul ">
                <li className="list-inline-item">
                  <button type="button" className="btn border-0 btn-outline-light text-info" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                </li>
                <li className="list-inline-item text-center rounded email-bulk-li">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={handleDelete}>Delete</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="modal-footer justify-content-center">
          <h5 className="text-danger py-0 fs-5">This means we won't be able to provide you with a customised user experience or support.</h5>
        </div>
      </div>
    </div>
  </div>  
        </>
    )
}

export default TableView
