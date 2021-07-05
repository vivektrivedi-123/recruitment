import React, { useState } from 'react'

function Rating() {
  const[rating , setRating] = useState([])
  const changeRating = (e)=>{
    setRating(e.target.value)
    console.log(e.target.value)
  }
    return (
       <>
             <button type="button" className="btn btn-outline-info dropdown-toggle px-4"
              id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true"
               aria-expanded="false" value={rating} onChange={changeRating}>Rating 5<i className="mdi mdi-star" /></button> 
               <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{margin: 0}} >
                      <ul>
                        <li className="dropdown-item align-middle d-flex justify-content-between align-items-center active" >
                          <div className="align-middle">
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" /><br />
                            Exceptional
                          </div>
                          <i className="mdi mdi-check align-middle" />
                        </li>
                        <li className="dropdown-item align-middle">
                          <div className="align-middle">
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" /><br />
                            Very Good
                          </div>
                        </li>
                        <li className="dropdown-item align-middle">
                          <div className="align-middle">
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" /><br />
                            Good
                          </div>
                        </li>
                        <li className="dropdown-item align-middle">
                          <div className="align-middle">
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" /><br />
                            Average
                          </div>
                        </li>
                        <li className="dropdown-item align-middle">
                          <div className="align-middle">
                            <i className="mdi mdi-star" /><br />
                            Below Average
                          </div>
                        </li>
                      </ul>
                    </div>
       
       </>
    )
}

export default Rating
