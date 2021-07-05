import React, { useEffect } from 'react'
import axios from "../../common/axios"
function Stages() {
  
  useEffect(()=>{
    const token=localStorage.getItem('login')
    axios.get('stageData',{
      headers: {
        'Authorization': 'Bearer '+ token
     }
    }).then((res)=>{
     console.log('job',res.data.results)
   
    }).catch((err)=>{
      console.log(err)
    })
  })
    return (
        <>
            <div className="dropdown-toggle " id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Open</div>
                        <div className="dropdown-menu custom p-0 overflow-scroll fix-dropdown" aria-labelledby="dropdownMenuButton2">
                        
                          <h5 className="text-uppercase px-2">Sourcing</h5>
                          <ul>
                            <li><a className="fw-normal" href="#">Open<i className=" dripicons-checkmark float-end" /></a></li>
                          </ul>
                           
                          <h5 className="text-uppercase px-2">Screening</h5>
                          <ul>
                            <li><a className="fw-normal" href="#">Apptitude</a></li>
                            <li><a className="fw-normal" href="#">Assignment</a></li>
                          </ul>
                          <h5 className="text-uppercase px-2">Interviews</h5>
                          <ul>
                            <li><a className="fw-normal" href="#">HR Round</a></li>
                            <li><a className="fw-normal" href="#">Technical Round</a></li>
                            <li><a className="fw-normal" href="#">Director Round</a></li>
                            <li><a className="fw-normal" href="#">Psychometric Test</a></li>
                          </ul>
                          <h5 className="text-uppercase px-2">Offer</h5>
                          <ul>
                            <li><a className="fw-normal" href="#">Offer Draft</a></li>
                            <li><a className="fw-normal" href="#">Offered</a></li>
                            <li><a className="fw-normal" href="#">Offer Accepted</a></li>
                            <li><a className="fw-normal" href="#">Offer Declined</a></li>
                          </ul>
                          <h5 className="text-uppercase px-2">Hire</h5>
                          <ul>
                            <li><a className="fw-normal" href="#">Hired</a></li>
                          </ul>
                        </div>
        </>
    )
}

export default Stages
