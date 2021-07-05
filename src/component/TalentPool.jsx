import React,{useEffect,useState} from 'react'
import Navigation from '../common/Navigation'
import Topbar from '../common/Topbar'
import CandidateNav from '../common/CandidateNav'
import {Link} from 'react-router-dom'
import './TalentPool.css'
import CandidateTable from './CandidateTable'
import data from '../JobData.json'
function TalentPool(props) {

 let d=data.candidate.filter(u=>u.archived===true); 
// useEffect(()=>{
//    d=data.candidate.filter(u=>u.archived===true);
//   console.log(d)
// },[])

  const[candidate,setCandidate]=useState(d);
  const[owner,setOwner]=useState(data.owner)



    return (
        <>
           <div>
  <div className="wrapper">
    <div id="leftside" >
        <Navigation/>
        </div>
    <div className="content-page">
      {/* Start Content*/}
      <div className="content">
        <div className="navbar-custom">
          <div id="top-bar" >
              <Topbar/>
              </div>
         <CandidateNav/>
          <Link to= "/job/posting" className="btn btn-outline-secondary bg-white text-dark apply-btn">Add Candidate</Link>
        </div>
        <div className="page-title-box ">
          <div className="tab-pane show active" id="dash">
            <div className="row m-0 pt-2 pb-3">
              <div className="page-sort">
                <div className="d-flex">
                  <div className="col-auto pe-5">
                    <div className="dropdown">
                      <button className="btn btn-light dropdown-toggle pb-0 fw-bold h5 mt-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        All (7)
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">All</a>
                        <a className="dropdown-item" href="#">Duplicate Candidates</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto px-0">
                    <p className="mb-0" style={{paddingTop: '0.3rem'}}>Sort By&nbsp;</p>
                  </div>
                  <div className="col-auto px-0">
                    <div className="dropdown">
                      <button className="btn btn-light dropdown-toggle pb-0 fw-bold h5 mt-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        last updated
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Job Title</a>
                        <a className="dropdown-item" href="#">Created Date</a>
                        <a className="dropdown-item" href="#">Last Updated</a>
                        <a className="dropdown-item" href="#">Department</a>
                        <a className="dropdown-item" href="#">Location</a>
                        <a className="dropdown-item" href="#">Job Type</a>
                        <hr />
                        <a className="dropdown-item" href="#">Ascending</a>
                        <a className="dropdown-item" href="#">Descending</a>
                      </div>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a className="end-bar-toggle btn btn-light" href="javascript: void(0);"><i className="mdi mdi-filter" /></a>
                  </div>
                </div>
              </div>
              <CandidateTable candidate={candidate} owner={owner} />
              {/*content start*/}
              {/* <div className="table-responsive table-custom px-3">
                <table id="scroll-vertical-datatable" className="table table-condensed">
                  <thead>
                    <tr>
                      <th><input type="checkbox" className="form-check-input" id="customCheck1" /></th>
                      <th>Candidates</th>
                      <th>Applied For</th>
                      <th>Stages</th>
                      <th>Owner</th>
                      <th colSpan={3}>Applied Date</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div> */}
              {/*content end*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="end-bar filter-area">
    <div className="rightbar-title py-2 border-top border-bottom">
      <a href="javascript:void(0);" className=" end-bar-toggle float-start ms-n5 mt-n3 pt-1">
        <i className="dripicons-cross noti-icon" />
      </a>
      <div className="d-flex justify-content-between">
        <h5 className="m-0 text-info">Filter</h5>
        <div className="mr-4">
          <a href="#" className="btn btn-clear py-0 m-1 mt-0 ">Reset</a>
          <a href="#" className="btn btn-primary py-1 m-1 mt-0">Apply</a>
        </div>
      </div>
    </div>
    <div className="rightbar-content h-100" data-simplebar>
      <div className="p-3">
        <div className="field mb-3">
          <input className="form-control" type="text" name="Source" id="Source" placeholder="Search..." />
          <label htmlFor="Status">Source</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="Category" id="Category" placeholder="Search..." />
          <label htmlFor="Category">Source Category</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="Candidate" id="Candidate" placeholder="Search..." />
          <label htmlFor="Candidate">Candidate owner</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="Status" id="Status" placeholder="Search..." />
          <label htmlFor="Status">Status</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="Stage" id="Stage" placeholder="Search..." />
          <label htmlFor="Department">Stage</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="Tags" id="Tags" placeholder="Search..." />
          <label htmlFor="Tags">Tags</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="deleted-candidate" id="deleted-candidate" placeholder="Search..." />
          <label htmlFor="deleted-candidate">Is the candidate deleted?</label>
        </div>
        <div className="field mb-3">
          <input className="form-control" type="text" name="blocked-candidate" id="blocked-candidate" placeholder="Search..." />
          <label htmlFor="blocked-candidate">Is the candidate blocked?</label>
        </div>
        <div className="field ">
          <a href="#" className="text-link"><i className="mdi mdi-plus-circle mdi-18px" /> Add more</a>
        </div>
      </div>
  
    </div>
  </div> */}
</div>

        </>
    )
}

export default TalentPool
