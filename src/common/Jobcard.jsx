import React, { useEffect, useState } from 'react'
import data from '../JobData.json'
import {Link} from 'react-router-dom'
function Jobcard({jobData,bool}) {
    const[job,setJob]=useState([])
    const[dept,setDept]=useState([])
    useEffect(()=>{
      setJob(jobData)
      // jobData.map((u,i)=>
      //   u.department.map((v,i)=>
      //       v.location.map((x,ind)=>
      //         console.log(x.location_name)
      //       )
      //     )
      // )
      // console.log('data',jobData.department)
    },[jobData,bool])

    return (
        <>
        {job && job.map((u,i)=>
          <div key={i} className="col-auto card-layout">
             <div className="card" >
                <div className="card-body">
                  <Link to="/candidate-dashboard" className="mb-3 d-block">
                  {u.category.map((v,ind)=>
                    <h5 key={ind} className="card-title text-center fw-normal">{v.category}</h5>
                    )}
                    <h4 className="card-title text-center ">{u.job_title}</h4>
                 
                    <div className="chart-container text-center">
                      <div className="chart-score d-inline-block">
                        <div className="score-mid align-items-center d-flex">
                          <div className="row mx-0 mt-n1 ">
                            <h2 className="fw-light m-0 w-100 ">3</h2>
                            <h4 className="fw-light m-0 w-100 ">Candidate</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    {
                      u.department.map((v,i)=>
                      v.location.map((x,ind)=>
                      <div key={ind} className="job-place d-table mt-2">
                      <div className="d-table-cell text-center small ">
                        <i className="dripicons-location" />&nbsp;
                      {x.location_name}
                      </div>
                    </div>
                      )
                    )
                    }
                  
                  </Link>
                  <div className="col-block-footer">
                    <div className="job-status small float-start" style={{paddingTop: '0.2rem'}}>
                      <i className="dripicons-web" />
                      &nbsp;
                      Published
                    </div>
                    <Link to={`/hire/${u._id}`} className="btn btn-default btn-sm float-end p-0">Details&nbsp;<i className="dripicons-chevron-right" /></Link>
                    </div>
                </div>
              </div>
            </div>   
            )}   
        </>
    )
}

export default Jobcard
