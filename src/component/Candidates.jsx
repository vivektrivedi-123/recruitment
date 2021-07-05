import React,{useEffect,useState} from 'react'
import CandidateNav from '../common/CandidateNav'
import Navigation from '../common/Navigation'
import Topbar from '../common/Topbar'
import {Link} from 'react-router-dom'
import CandidateTable from './CandidateTable'
import data from '../JobData.json';
import FormFilter from '../common/FormFilter'
function Candidates() {
  let d=data.candidate.filter(u=>u.archived===false)
  const[candidate,setCandidate]=useState(d);
  const[owner,setOwner]=useState(data.owner)
  const sort=[
    "First Name",
    "Last Name",
    "Employee Type",
    "Joining Date",
    "Employee ID",
    "",
]





function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

const handleSort=(name)=>{
  console.log(name)
  if(name==='First Name')
  {
      let d=candidate.sort(dynamicSort("name"))
      setCandidate(d)
      //console.log(d)
  }
  if(name==='Employee ID')
  {
      let d=candidate.sort(dynamicSort("id"))
      setCandidate(d)
      console.log(d)
  }
 
}
    return (
        <>
          <div>
  <div className="wrapper">
    <div id="leftside">
      <Navigation/>
      </div>
    <div className="content-page">
      <div className="content">
        <div className="navbar-custom">
          <div id="top-bar">
            <Topbar/>
            </div>
          <CandidateNav/>
        </div>
      
        <div className="page-title-box ">
          <div className="tab-pane show active" id="dash">
            <div className="row m-0 pt-2 pb-3">
              <div className="page-sort">
                <div className="d-flex">
                  <div className="col-auto pe-5">
                    <div className="dropdown">
                      <button className="btn btn-light dropdown-toggle pb-0 fw-bold h5 mt-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        All Candidates - <span className="job-value font-weight-normal">Active 97</span>
                      </button>
                      <div className="dropdown-menu fix-dropdown overflow-scroll" aria-labelledby="dropdownMenuButton">
                        <h5 className="text-uppercase px-2">Candidates I Own</h5>
                        <ul>
                          <li><a className="fw-normal" href="#">All</a></li>
                          <li>
                            <a className="fw-normal" href="#">Active</a>
                          </li>
                          <li>
                            <a className="fw-normal" href="#">Snoozed</a>
                          </li>
                          <li>
                            <a className="fw-normal" href="#">Response Due</a>
                          </li>
                          <li>
                            <a className="fw-normal" href="#">Rejected</a>
                          </li>
                          <li>
                            <a className="fw-normal" href="#">Archived</a>
                          </li>
                        </ul>
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
                        {sort.map((u,i)=>
                           <a key={i} className="dropdown-item" href="#" onClick={()=>handleSort(u)}>{u}</a>
                        )}
                        <hr />
                        <a className="dropdown-item" href="#">Ascending</a>
                        <a className="dropdown-item" href="#">Descending</a>
                      </div>
                    </div>
                  </div>
                  <div className="ms-auto">
                    {/* <div className="d-inline-block me-1">
                      <ul className="pagination candidates">
                        <li className="page-item active"><a className="page-link" href="javascript: void(0);">1</a></li>
                        <li className="page-item"><a className="page-link" href="javascript: void(0);">2</a></li>
                        <li className="page-item"><a className="page-link" href="javascript: void(0);">3</a></li>
                        <li className="page-item"><a className="page-link" href="javascript: void(0);">4</a></li>
                        <li className="page-item">
                          <a className="page-link" href="javascript: void(0);" aria-label="Previous">
                            <span aria-hidden="true"><i className="uil uil-angle-left" /></span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="javascript: void(0);" aria-label="Next">
                            <span aria-hidden="true"><i className="uil uil-angle-right" /></span>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    <div className="d-inline-block"><a href><i className="dripicons-upload" /></a></div>
                    <a className="end-bar-toggle btn btn-light" href="javascript: void(0);"><i className="mdi mdi-filter" /></a>
                  </div>
                </div>
              </div>
              {/*content start*/}
             <CandidateTable candidate={candidate} owner={owner}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 {/* <FormFilter/> */}
</div>

        </>
    )
}

export default Candidates
