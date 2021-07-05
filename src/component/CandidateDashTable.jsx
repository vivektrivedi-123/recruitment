import React,{useState} from 'react'
import Rating from '.././component/candidates/Rating'
//import { List, arrayMove } from "react-movable";

function CandidateDashTable() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    const[candidate,setCandidate]=useState([
      {"id":"1","name":"Rahul","company":"Rudra Innovative","rating":"3"},
        {"id":"2","name":"kunal","company":"C.S Soft Solution","rating":"2"}
    ])

  

 const handleDelete=(id)=>{
   let d=candidate.filter(u=>u.id!==id);
   setCandidate(d)
 }     
    return (
        <>
         <div className="d-table">

           
                <div className="card-pannel d-table-cell pe-3">
                   <div className="card">
                  {/* <div className="rounded card-body border-start border-4 px-2 py-2 border-secondary ">
                      <h5 className="text-info  semi-bold my-0 ">Open - <span> 0</span></h5>
                    </div> 
                    </div>
                  <List
      values={items}
      onChange={({ oldIndex, newIndex }) =>
        setItems(arrayMove(items, oldIndex, newIndex))
      }
      renderList={({ children, props }) =>    <ul {...props}>{children}</ul>}
      renderItem={({ value, props }) => <div className="card">  <div className="rounded card-body border-start border-4 px-2 py-2 border-secondary "> <li {...props}>{value}</li><h4>hii</h4></div></div>}
    /> */}
                     <div className="rounded card-body border-start border-4 px-2 py-2 border-secondary ">
                      <h5 className="text-info  semi-bold my-0 ">Open - <span> 0</span></h5>
                    </div> 
                 </div> 
                </div>
                <div className="card-pannel d-table-cell pe-3">
                  <div className="card">
                    <div className="rounded card-body border-start border-4 px-2 py-2 border-warning ">
                      <h5 className="text-info  semi-bold my-0 ">Contacted - <span> 1</span></h5>
                    </div>
                  </div>
                  <div className="card-pannel-user-detail custom-scrollbar">
                    <div className="card candidates-detail-card mb-2 position-relative">
                      <div className="form-check position-absolute ">
                        <input className="form-check-input rounded-circle invisible" type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        </label>
                      </div>
                      <div className="card-body p-2">
                        <div className="user-info-card candidate-info position-relative">
                          <h5 className="card-title text-primary mb-1 text-truncate text-capitalize">Dheerj dhiman </h5>
                          <div className="display-information bg-white mt-1 border rounded">
                            <div className="arrow-top position-absolute d-block" />
                            <div className="p-2">
                              <div className="p-1">
                                <div className="text-truncate text-info semi-bold">Dheerj dhiman</div>
                                <p className="text-muted">
                                  iOS Developer &nbsp; | &nbsp;
                                  C.S Soft Solution
                                </p>
                                <div className="btn-full-width text-truncate">
                                  <ul className="list-unstyled mb-0">
                                    <li className="pb-1 text-info"> 
                                      <i className="dripicons-mail" /> &nbsp;dhirudhimankkc@gmail.com
                                    </li>
                                    <li className=" text-info">
                                      <i className="icon dripicons-phone" /> 9996668108
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h6 className="card-subtitle mt-0 text-muted h5 fw-normal">C.S Soft Solution</h6>
                      </div>
                      <div className="card-footer p-1 border-0 d-flex align-items-center">
                        <div className="star d-flex">
                          <div className="icon dripicons-star text-muted fw-light" />
                          <div className="icon dripicons-star text-muted fw-light" />
                          <div className="icon dripicons-star text-muted fw-light" />
                          <div className="icon dripicons-star text-muted fw-light" />
                          <div className="icon dripicons-star text-muted fw-light" />
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                          <div className="candidate-info position-relative">
                            <img src="assets/images/Piechart1.png" className="img-fluid" width="24px" />
                            <div className="display-information bg-white mt-2 border rounded candidates-owner right-0">
                              <div className>
                                <div className="text-truncate text-info border-bottom px-2 py-2">Owner of the Candidate</div>
                                <div className="d-flex px-2 py-2">
                                  <img src="assets/images/Piechart1.png" className="img-fluid me-2" width="24px" />
                                  <div className="text-truncate text-info semi-bold">Priyanka Sharma</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown ms-1">
                            <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle show after-none" type="button" id="dropdownMenu-1" data-bs-toggle="dropdown" aria-expanded="true">
                              <div className="icon dripicons-dots-3 rotate-90 fs-3" />
                            </button>
                            <ul className="dropdown-menu rounded p-2 shadow" aria-labelledby="dropdownMenu-1" data-popper-placement="bottom-start">
                              <li className="mb-1 dropdown-item text-info px-2"><i className="icon dripicons-calendar me-2" />Schedule Interview</li>
                              <li className="mb-1 dropdown-item text-info px-2"><i className="icon dripicons-tags me-2" />Add Tags</li>
                              <li className="mb-1 dropdown-item text-info px-2"><i className="icon dripicons-message me-2" />Share</li>
                              <li className="mb-1 dropdown-item text-info px-2"> <i className="icon dripicons-trash me-2" />Delete</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-pannel d-table-cell pe-3">
                  <div className="card">
                    <div className="rounded card-body border-start border-4 px-2 py-2 border-warning ">
                      <h5 className="text-info  semi-bold my-0 ">Aptitude Test - <span> 6</span></h5>
                    </div>
                  </div>
                  <div className="card-pannel-user-detail custom-scrollbar">
                    {candidate.map((u,i)=>
                    <div className="card candidates-detail-card mb-2 position-relative">
                      <div className="form-check position-absolute ">
                        <input className="form-check-input rounded-circle invisible" type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        </label>
                      </div>
                      <div className="card-body p-2">
                        <h5 className="card-title text-primary mb-1">{u.name} </h5>
                        <h6 className="card-subtitle mt-0 text-muted h5 fw-normal">{u.company}</h6>
                      </div>
                      <div className="card-footer p-1 border-0 d-flex align-items-center">
                        <div className="star d-flex">
                        <Rating rating={u.rating}/>
                          {/* <div className="icon dripicons-star text-muted fw-light" />
                          <div className="icon dripicons-star text-muted fw-light" />
                          <div className="icon dripicons-star text-muted fw-light" />
                          <div className="icon dripicons-star text-muted fw-light" />
                          <div className="icon dripicons-star text-muted fw-light" /> */}
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                          <img src="assets/images/Piechart1.png" className="img-fluid" width="24px" />
                          <div className="dropdown ms-1">
                            <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle show after-none" type="button" id="dropdownMenu-1" data-bs-toggle="dropdown" aria-expanded="true">
                              <div className="icon dripicons-dots-3 rotate-90 fs-3" />
                            </button>
                            <ul className="dropdown-menu rounded p-2 shadow" aria-labelledby="dropdownMenu-1" data-popper-placement="bottom-start">
                              <li><button className="dropdown-item text-info" type="button">Schedule Interview</button></li>
                              <li><button className="dropdown-item text-info" type="button">Add Tags</button></li>
                              <li><button className="dropdown-item text-info" type="button">Share</button></li>
                              <li><button className="dropdown-item text-info" type="button" onClick={()=>handleDelete(u.id)}> Delete</button></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}
                     </div>
                </div>
                <div className="card-pannel d-table-cell pe-3">
                  <div className="card">
                    <div className="rounded card-body border-start border-4 px-2 py-2 border-secondary ">
                      <h5 className="text-info  semi-bold my-0 ">Open - <span> 0</span></h5>
                    </div>
                  </div>
                </div>
                <div className="card-pannel d-table-cell pe-3">
                  <div className="card">
                    <div className="rounded card-body border-start border-4 px-2 py-2 border-secondary ">
                      <h5 className="text-info  semi-bold my-0 ">Open - <span> 0</span></h5>
                    </div>
                  </div>
                </div>
                <div className="card-pannel d-table-cell pe-3">
                  <div className="card">
                    <div className="rounded card-body border-start border-4 px-2 py-2 border-secondary ">
                      <h5 className="text-info  semi-bold my-0 ">Open - <span> 0</span></h5>
                    </div>
                  </div>
                </div>
                <div className="card-pannel d-table-cell pe-3">
                  <div className="card">
                    <div className="rounded card-body border-start border-4 px-2 py-2 border-secondary ">
                      <h5 className="text-info  semi-bold my-0 ">Open - <span> 0</span></h5>
                    </div>
                  </div>
                </div>
              </div>   
        </>
    )
}

export default CandidateDashTable
