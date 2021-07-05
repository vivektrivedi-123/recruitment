import React, { useState } from 'react'
import {Link} from 'react-router-dom'
function EmployeeCard({emp1}) {
    const[inviteName,setInviteName]=useState('')
    const[emp,setEmp]=useState(emp1)
    const[id,setId]=useState('')

const openModal=(id)=>{
    setId(id)
}

const handleDelete=()=>{
    let d=emp.filter(u=>u.id!==id)
    console.log(d)
    setEmp(d)
}

const openInviteModal=(u)=>{
    setInviteName(u)
}
    return (
        <>
        {emp.map((u,i)=>
        u.status==='Active'?
    
          <div key={i} className="employee-detail-card mb-3">
              <div className="card employee-card h-100 ">
                <div className="card-body">
                  <div className="form-check position-absolute">
                    <input 
                        className="form-check-input rounded-circle" 
                        type="checkbox" 
                        defaultValue 
                        id="flexCheckDefault" 
                        />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    </label>
                  </div>
                  <div className="employee-name bg-purple rounded-circle text-center  d-flex align-items-center justify-content-center mx-auto text-white fw-light text-center">
                    <h2 className="fw-light">A</h2>
                  </div>
                  <h5 className="text-primary mt-2 text-center">{u.name}</h5>
                  <div className="on-hover-employee position-absolute top-0 left-0 w-100 h-100 py-2 px-3 d-flex flex-column mb-3  shadow">
                    <ul className="list-unstyled text-end mb-0">
                      <li className="list-inline-item"><Link to={`/employee-edit/${u.id}`}><i className="uil uil-edit-alt fs-4" /></Link></li>
                      <li className="list-inline-item">
                        <div className="dropdown position-relative">
                          <div className="text-info border-0 px-0 after-none semi-bold bg-transparent dropdown-toggle " type="button" id="dropdownMenu2 position-relative" data-bs-toggle="dropdown" aria-expanded="true">
                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-trigger="hover" data-bs-original-title="More action">
                              <i className="icon dripicons-dots-3 fs-4" />
                            </a>
                          </div>
                          <ul className="dropdown-menu rounded py-2" aria-labelledby="dropdownMenu2 min-width-auto" data-popper-placement="bottom-start">
                            <li className="dropdown-item">
                              <a href="#" data-bs-toggle="modal" data-bs-target="#opt">
                                Opt-out of Tracking
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <span className="badge bg-success rounded-0">{u.status}</span>
                      <h5 className="text-primary mt-1 mb-2">{u.name}</h5>
                      <hr />
                      <ul className="list-unstyled ">
                        <li className="mb-2 fs-5 text-primary d-flex"> <i className="dripicons-mail text-info" /> &nbsp;{u.email}
                        </li>
                        <li className="text-info fs-6 d-flex"> <i className="uil uil-map-marker fs-4" /> {u.address}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>  :<div key={i} className="employee-detail-card mb-3">
              <div className="card employee-card h-100 ">
                <div className="card-body">
                  <div className="form-check position-absolute">
                    <input 
                      className="form-check-input rounded-circle" 
                      type="checkbox" 
                      defaultValue 
                      id="flexCheckDefault" 
                      />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    </label>
                  </div>
                  <div className="employee-name bg-success rounded-circle text-center  d-flex align-items-center justify-content-center mx-auto text-white fw-light text-center">
                    <h2 className="fw-light">G</h2>
                  </div>
                  <div className="unverified text-center" data-bs-toggle="modal" data-bs-target="#tags">
                    <span className="badge bg-warning fs-6 px-2 py-1 fw-normal rounded-0">{u.status}</span>
                  </div>
                  <h5 className="text-primary mt-2 text-center">{u.name}</h5>
                  <div className="on-hover-employee position-absolute top-0 left-0 w-100 h-100 py-2 px-3 d-flex flex-column mb-3  shadow">
                    <ul className="list-unstyled text-end mb-0">
                      <li className="list-inline-item"><Link to={`/employee-edit/${u.id}`}><i className="uil uil-edit-alt fs-4" /></Link></li>
                      <li className="list-inline-item">
                        <div className="dropdown position-relative">
                          <div className="text-info border-0 px-0 after-none semi-bold bg-transparent dropdown-toggle " type="button" id="dropdownMenu2 position-relative" data-bs-toggle="dropdown" aria-expanded="true">
                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-trigger="hover" data-bs-original-title="More action">
                              <i className="icon dripicons-dots-3 fs-4" />
                            </a>
                          </div>
                          <ul className="dropdown-menu rounded py-2" aria-labelledby="dropdownMenu2 min-width-auto" data-popper-placement="bottom-start">
                            <li className="dropdown-item">
                              <a href="#" data-bs-toggle="modal" data-bs-target="#opt" onClick={()=>openModal(u.id)} >
                                Opt-out of Tracking
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <span className="badge bg-warning rounded-0">{u.status}</span>
                      <h5 className="text-primary mt-1 mb-2">{u.name}</h5>
                      <button type="button" className="btn btn-outline-dark w-100 my-2" data-bs-toggle="modal" data-bs-target="#unverified" onClick={()=>openInviteModal(u.name)} ><i className="uil uil-envelope-minus me-1" />Send Invitation email</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>)} 


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





  <div className="modal fade" id="unverified" tabIndex={-1} aria-labelledby="myLargeModalLabel" role="dialog" aria-modal="true">
    <div className="modal-dialog modal-lg px-5">
      <div className="modal-content">
        <div className="modal-header px-3 border-0">
          <h4 className="modal-title" id="standard-modalLabel">Send Invite Email
          </h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body py-0 px-0">
          <p className="px-3">Are you sure you want to send the invite email to {inviteName}?
          </p>
          <div className="invite-email bg-gray p-3 overflow-auto">
            <div className="mb-2">
              <h5 className="text-info mt-0 pt-0">Invite Email (Preview) <i className="uil uil-edit-alt fs-4" /></h5>
              <div className="bg-white p-2">Subject: Rudra Innovative Software (P)Ltd. Talent Center user activation</div>
            </div>
            <div className="email-preview">
              <div className />
              <div className="border-top bg-white py-3">
                <div className="d-flex border-bottom px-4 align-items-center ">
                  <img src="image/logo.jpg" className="img-fluid company-logo-email me-3" />
                  <h4 className="fw-normal">Rudra Innovative Software (P)Ltd. Talent Center</h4>
                </div>
                <div className="p-4">
                  <div className="text-center">
                    <h3 className="py-0 my-0 fs-3 mb-3">Welcome to Employee Portal of Rudra Innovative Software (P)Ltd. Talent Center</h3>
                    <button type="button" className="btn btn-primary rounded-pill fs-4 px-4 py-2">Login and Set Password</button>
                    <h4 className="py-3 fw-light">Here are few things for you to get started!</h4>
                  </div>
                  <div className="mx-4">
                    <div className="d-flex align-items-center mb-3 ">
                      <img src="image/activation-find-coworkers.png" className="img-fluid find-co-worker" />
                      <div className="ms-2">
                        <h4 className="mb-0">Find co-workers</h4>
                        <div className="my-2">
                          <p className="mb-0">Look up their contact or job profile to know more about them.</p>
                          <p className="mb-0 ">Search for co-workers by department or by name.</p>
                        </div>
                        <button type="button" className="btn btn-light btn-sm">Search</button>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <img src="image/activation-view-profile.png" className="img-fluid find-co-worker" />
                      <div className="ms-2">
                        <h4 className="mb-0"> View your profile and access files</h4>
                        <div className="my-2">
                          <p className="mb-0">View your personal and professional info.</p>
                          <p className="mb-0 ">Access all your employment files in one place</p>
                        </div>
                        <button type="button" className="btn btn-light btn-sm">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="email-footer p-5 text-center">
                <h5 className>Never miss a last-minute update. Get the freshteam app.</h5>
                <img src="image/google-play-badge.png" className="img-fluid mx-1" />
                <img src="image/app-store-badge.png" className="img-fluid mx-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer justify-content-start">
          <div className="ms-auto pe-3">
            <ul className="list-unstyled mb-0 ">
              <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info" data-bs-dismiss="modal" aria-label="Close">Cancel</button></li>
              <li className="list-inline-item text-center rounded ">
                <button type="button" className="btn btn-primary">Send</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}
export default EmployeeCard
