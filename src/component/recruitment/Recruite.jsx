import React,{useState,useEffect} from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import {Link} from 'react-router-dom'
import CandidateNav from '../../common/CandidateNav'
import Jobcard from '../../common/Jobcard'
import JobFilter from '../../common/JobFilter'
import axios from '../../common/axios'
import data1 from '../.././JobData.json'
function Recruite({data}) {
const [job,setJob]=useState([]);
const[jobBack,setJobBack]=useState([])
const [jobStatus,setJobStatus]=useState([
  {name:"All Jobs",value:"All"},
  {name:"Active Jobs",value:"active"},
        {name:"All Published Jobs",value:"published"},
        {name:"Draft Jobs",value:"draft_jobs"}
])
const[bool,setBool]=useState(false)
const[sortBy,setSortBy]=useState('select')
const[active,setActive]=useState('All Jobs')
 useEffect(()=>{
   setJob(data)
   setJobBack(data)
},[data])

useEffect(()=>{
    
      const token=localStorage.getItem('login')
      axios.get('job',{
        headers: {
          'Authorization': 'Bearer '+ token
       }
      }).then((res)=>{
       // console.log('job',res.data.results)
      setJob(res.data.results)
      setJobBack(res.data.results)
      }).catch((err)=>{
        console.log(err)
      })
    },[])

const sort=[
  {name:"Job Title",value:"job_title"},
  {name:"Created Date",value:"createdAt"},
  {name:"Last Updated",value:"updatedAt"},
  {name:"Department",value:"department_name"},
  {name:"Location",value:"location_name"},
  {name:"Job Type",value:"job_type"}
]



function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

const handleSort=(name,data)=>{
     console.log(name)
     setSortBy(data)
    
      // let d=jobBack.sort(dynamicSort(name))
      let d=jobBack.sort(dynamicSort(name))
      setJob(d)
      setBool(!bool)
    
     
      console.log(d)
      
      //console.log(d)
}

const handleSort1=(name)=>{
  console.log(name)
  setActive(name) 
 if(name==='published')
 {
  let d=jobBack.filter(u=>u.publish===true)
  setJob(d)
 }
 if(name==='All')
 {
   setJob(jobBack)
   console.log(jobBack)
 }
}

return (
        <>
<div className="wrapper">
  <div id="leftside" >
      <Navigation/>
  </div>
  <div className="content-page">
    <div className="content">
      <div className="navbar-custom">
        <div id="top-bar" >
            <Topbar/>
            </div>
            {/* */}
            <CandidateNav/>
        <Link to="/job/posting" className="btn btn-outline-secondary bg-white text-dark apply-btn">Add Job Posting</Link>
      </div>
      <div className="page-title-box ">
        <div className="tab-pane show active" id="dash">
          <div className="row m-0 pt-2 pb-3">
          <div className="page-sort">
              <div className="d-flex">
                <div className="col-auto pe-5">
                  <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle p-0 fw-bold h5 mt-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {active} <span className="job-value">{job.length}</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {jobStatus.map((u,i)=>
                      <a key={i} className="dropdown-item" onClick={()=>handleSort1(u.value)} >{u.name}</a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-auto px-0">
                  <p className="mb-0">Sort By&nbsp;</p>
                </div>
                <div className="col-auto px-0">
                  <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle p-0 fw-bold h5 mt-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {sortBy}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {sort.map((u,i)=>
                      <a  key={i} className="dropdown-item" onClick={()=>handleSort(u.value,u.name)}>{u.name}</a>
                      )}
                      <hr />
                      <a className="dropdown-item">Ascending</a>
                      <a className="dropdown-item">Descending</a>
                    </div>
                  </div>
                </div>
            <div className="ms-auto">
               <a className="end-bar-toggle btn btn-light" href="javascript: void(0);"><i className="mdi mdi-filter" /></a>
                </div>
              </div>
            </div>
           <Jobcard jobData={job} bool={bool}/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Recruite
