import React, { useEffect } from 'react'
import Navbar from '../../common/Navbar'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import AccessType from './AccessType'
import AddCandidate from './AddCandidate'
import AttractCandidate from './AttractCandidate'
import HiringTeam from './HiringTeam'
import HiringWork from './HiringWork'
import JobBoards from './JobBoards'
import JobDesc from './JobDesc'
import JobPosting from './JobPosting'
import Publish from './Publish'
import './Hire.css'
import { useParams } from 'react-router'
import axios from '../../common/axios'
import { useState } from 'react'
function Hire({data}) {
  const params=useParams()
  let token=localStorage.getItem('login')
  const [state,setState]=useState({})

useEffect(()=>{
  let token=localStorage.getItem('login')
  axios.get(`job/${params.id}`,{
    headers: {
      'Authorization': 'Bearer '+ token
   }
  }).then((res)=>{
    setState(res.data.results)
    
  }).catch((err)=>console.log(err))
},[params.id])



// useEffect(()=>{
//   axios.get(`job/${params.id}`,{
//     headers: {
//       'Authorization': 'Bearer '+ token
//    }
//   }).then((res)=>{
//     setState(res.data.results)
//   }).catch((error)=>console.log(error))
// },[params.id])

    return (
        <>
        <div className="wrapper">
  <div id="leftside">
    <Navbar/>
    </div>
  <div className="content-page">
    <div className="content">
      <div className="navbar-custom">
        <div id="top-bar">
          <Topbar/>
          </div>
        <div className="m-0 border-top border-bottom">
          <div className="d-flex align-items-center bg-body">
            <nav>
              <ol className="breadcrumb mb-0 border-0">
                <li className="breadcrumb-item"><a href="#" className="font-600"><i className="dripicons-briefcase" /> Jobs</a></li>
                <li className="breadcrumb-item active font-600" aria-current="page">Add New</li>
              </ol>
            </nav>
            <div className="d-inline-block"> 
              <button type="button" className="btn-sm border bg-white px-1">  
                <span className="small font-12"> View Candidates</span> </button>
            </div>
            <div className="ms-auto pe-3">
              <div className="d-inline-block me-2">
                <div className="btn-group justify-content-sm-end ">
                  <button type="button" className="border bg-white m-0 end-bar-toggle btn btn-light" data-bs-toggle="modal" data-bs-target="#add-candidate"> Add candidate </button>
                  <button type="button" className="border bg-white dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu mt-2 shadow" id="arrow" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item d-flex " href="#">
                      <div className="d-inline-block"> Bulk import resumes </div>
                    </a>
                    <a className="dropdown-item d-flex " href="#">
                      Import candidates from CSV </a>
                    <a className="dropdown-item d-flex " href="#">
                      From Talent Pool</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item d-flex " href="#">
                      Refer a candidate </a>
                  </div>
                </div>
              </div>
              <div className="d-inline-block">
              <Publish/>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className="row m-0 px-2">
        <div className="col-md-12">
          <div className="job-anchor">
            <ul className="d-flex list-unstyled">
              <li> <a href="#job-info" className="font-600 "> Job Information </a> </li>
              <li> <a href="#add" className="font-600"> Add and Attract Candidates </a> </li>
              <li> <a href="#job-board" className="font-600"> Job Boards </a> </li>
              <li> <a href="#hiring-workflow" className="font-600"> Hiring Workflow </a> </li>
              <li> <a href="#hiring-team" className="font-600"> Hiring Team </a> </li>
              <li> <a href="#!" className="font-600" data-bs-toggle="modal" data-bs-target="#right-modal"> Application Form </a> </li>
            </ul>
          </div>
        </div>
      </div>
      <section id="job-info">
        <div className="row m-0 px-2">
        
            <JobDesc data={state}/>
          
          <div className="col-md-4 mb-2 ">
            <JobPosting data={state} />
            </div>
          </div>
      </section>
      <section id="add">
       <AttractCandidate />
      
      </section>
      <section id="job-board">
      <JobBoards/>
        {/* row m-0 ends */}
      </section>
      <section id="hiring-workflow">
       <HiringWork data={state}/>
        </section>
      <div className="row m-0 px-">
        <AccessType />
        </div>
      <section id="hiring-team">
       <HiringTeam />
      </section>
      {/* add candidate filter modal starts */}
      <div id="add-candidate" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
       <AddCandidate/>
       </div>
    </div>
  </div>
</div>
  </>
    )
}

export default Hire
