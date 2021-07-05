import React, { useEffect, useState } from 'react'
import data from '../../JobData.json'
import EditUser from './EditUser'
import SelectSearch from 'react-select-search';
import fuzzySearch from '../FuzzySearch'
function User(props) {

const[user,setUser]=useState([])  
const[edUser,setEdUser]=useState([])
useEffect(()=>{
  let uv = data.candidate.filter(u=>u.id===props.user)
  setUser(uv)
  console.log("uwser",uv)
},[props.user])

const ownerList=[
  {"name":'Gaurav',"value":"Gaurav"},
  {"name":"hr","value":"hr"}
]


const handleOwner=(e)=>{
  console.log(e)
}

const handleUser=()=>{
  setEdUser(user)
}
    return (
      
       <> 
  
           {user.map((u,i)=>
          
           <>
            <div className="text-info mb-2 "><span className="h3 align-middle"> {u.name}</span> <a href="#" data-bs-toggle="modal" data-bs-target="#user-modal" id="tooltip-container2" ><i  onClick={handleUser} className=" dripicons-document-edit align-middle" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" /></a></div>
            <p className="text-center">{u.JobTitle} &nbsp; | &nbsp; @ {u.JobName}</p>
            <p className="text-center">{u.email}</p>
            </>
           )}
                    <div id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-plus-circle-outline" /> Add social profile</div>
                    <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton1" style={{margin: 0}}>
                      <div className="p-2">
                        <input autoComplete="false" id="ember1149" className="form-control ember-text-field ember-view" type="text" />
                        <label className="control-label font-600">Add social profile</label>
                      </div>
                      <ul className="px-sm-2">
                        <li>
                          Remove Links
                        </li>
                        <li>
                          -
                        </li>
                      </ul>
                    </div>
                    <p className="text-start text-muted text-uppercase">Applied jobs</p>
                    <a href="#">
                      <div className="row border rounded-pill p-2 mx-3">
                        <div className="col-2">
                          <p className="fw-bold text-info mb-0">#1</p>
                        </div>
                        <div className="col-10 text-start">
                          <p className="fw-bold text-info mb-0">Dot Net Developer</p>
                          <p className=" mb-0">Sahibzada Ajit Singh Nagar, India</p>
                        </div>
                      </div>
                    </a>
                    <ul className="stages candidature large mt-3" id="tooltip-container2">
                      <li className="active">
                        <span aria-label="Sourcing" className="hint--bottom" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Sporcing">1</span>
                      </li>
                      <li>
                        <span aria-label="Screening" className="hint--bottom" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Screening">2</span>
                      </li>
                      <li>
                        <span aria-label="Interviews" className="hint--bottom" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Interviews">3</span>
                      </li>
                      <li>
                        <span aria-label="Offer" className="hint--bottom" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Offer">4</span>
                      </li>
                      <li>
                        <span aria-label="Hire" className="hint--bottom" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Hire">5</span>
                      </li>
                    </ul>
                    <div className="stage-details">
                      <div className="stage-details-arrow" style={{marginLeft: 0}} />
                      <div className="stage-category-name fs-5 font-600 text-uppercase">Sourcing</div>
                      <div className="sec-text-color">Open</div>
                    </div>
                    <p className="text-start text-muted text-uppercase mt-sm-3">owner</p>
                    <div className="text-start h4">
                      <div className="align-middle">
                      <SelectSearch    
                      filterOptions={fuzzySearch} 
                      onChange={handleOwner} 
                      search 
                      emptyMessage="Not found" 
                      options={ownerList}  
                      name="owner" 
                      placeholder="Add owner" />  
                        {/* <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-plus-circle-outline mdi-24px d-inline-block align-middle  me-1" /><span className="d-inline-block align-middle"> Add owner</span>
                        </a> */}
                        <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton1" style={{margin: 0}}>
                          {/* <div className="p-2">
                            <input className="ember-power-select-search-input form-control" aria-controls="ember-power-select-options-ember2026" placeholder="Search" type="search" />
                          </div> */}
                           {/* <ul>
                            <li>
                              <a className href="#">
                                <span className="relative align-middle avatar-circle d-inline-block me-1">
                                  <img className="img-fluid" src="image/graph.png" />
                                </span>
                                Gaurav Aery</a>
                            </li>
                            <li>
                              <a className href="#">
                                <span className="relative align-middle avatar-circle d-inline-block me-1 defaultColor">
                                  G
                                </span>
                                Gaurav Aery</a>
                            </li>
                          </ul> */}
                           
                        </div>
                      </div>
                    </div>
                    <hr />
                    <p className="text-start text-muted text-uppercase">followlers</p>
                    <div className="text-start d-flex align-items-center">
                      <div className="h4 text-info">
                        <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-plus-circle-outline mdi-24px d-inline-block align-middle  me-1" /><span className="d-inline-block align-middle"> Add</span>
                        </a>
                        <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton1" style={{margin: 0}}>
                          <div className="p-2">
                            <input 
                             className="ember-power-select-search-input form-control" 
                             aria-controls="ember-power-select-options-ember2026" 
                             placeholder="Search" 
                             type="search" />
                          </div>
                          <ul>
                            <li>
                              <a className href="#">
                                <span className="relative align-middle avatar-circle d-inline-block me-1">
                                  <img className="img-fluid" src="image/graph.png" />
                                </span>
                                Gaurav Aery</a>
                            </li>
                            <li>
                              <a className href="#">
                                <span className="relative align-middle avatar-circle d-inline-block me-1 defaultColor">
                                  G
                                </span>
                                Gaurav Aery</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-inline-block ms-sm-4 ps-sm-4 border-start border-secondary text-muted" id="tooltip-container2"><i className="mdi mdi-bell-circle-outline mdi-24px follow-bell" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Follow" />
                      </div>
         </div>
         <div className="modal fade" id="user-modal" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
         <EditUser user={edUser}/>
         </div>
       </>
    )
}

export default User
