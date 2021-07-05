import React, { useState } from 'react'

import data1 from '../JobData.json'
import FormFilter from './FormFilter'

function JobFilter() {
    const [data,setData]=useState(data1.jobType)
    return (
        <>
        <div className="page-sort">
              <div className="d-flex">
                <div className="col-auto pe-5">
                  <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle p-0 fw-bold h5 mt-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Active Jobs <span className="job-value">18</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {data.map((u,i)=>
                      <a key={i} className="dropdown-item" href="#">{u}</a>
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
                      Created Date
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
        </>
    )
}

export default JobFilter
