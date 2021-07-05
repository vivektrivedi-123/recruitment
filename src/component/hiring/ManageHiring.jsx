import React, { useEffect, useState } from 'react'
import ManageHiringModal from './ManageHiringModal'

function ManageHiring({data}) {

    return (
        <>
           <div className="col-md-4 ">
          <div className="row ">
            <div className="col-md-3 ">
              <svg id="interview-process " viewBox="0 0 60 60 ">
                <g id="Symbols ">
                  <g id="intproc ">
                    <g id="Group-17-Copy-5 ">
                      <g id="Page-1 ">
                        <polygon id="Fill-1 " style={{fill: 'none'}} points="0,60 60,60 60,0 0,0 " />
                      </g>
                      <g id="Group-6 " transform="translate(5.000000, 0.000000) ">
                        <g id="Group-2 " transform="translate(1.000000, 1.000000) ">
                        </g>
                        <g id="Group-18 " transform="translate(15.000000, 9.000000) ">
                          <rect id="Rectangle-2-Copy " x="0.8 " y="19.8 " style={{fill: '#F0F0F0'}} width="19.2 " height="4.8 " />
                          <rect id="Rectangle-2-Copy-4 " x="0.8 " y="11.5 " style={{fill: '#F0F0F0'}} width="19.2 " height="4.8 " />
                          <rect id="Rectangle-2-Copy-2 " x="0.8 " y="28.1 " style={{fill: '#F0F0F0'}} width="19.2 " height="4.8 " />
                          <path style={{fill: '#FF5969'}} d="M9.7,35.5c-1.9,0-3.4,1.5-3.4,3.4s1.5,3.4,3.4,3.4c1.9,0,3.4-1.5,3.4-3.4S11.5,35.5,9.7,35.5z M9.7,40.8 c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C11.6,39.9,10.7,40.8,9.7,40.8z
                                                   M9.7,7.1c1.9,0,3.4-1.5,3.4-3.4 c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4C6.3,5.6,7.8,7.1,9.7,7.1z M9.7,1.8c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 c-1.1,0-2-0.9-2-2C7.7,2.7,8.6,1.8,9.7,1.8z " />
                          <path style={{fill: '#979797'}} d="M31.2-8.7h-42.4c-1.9,0-3.5,1.6-3.5,3.5v52.4c0,1.9,1.6,3.5,3.5,3.5h42.4c1.9,0,3.5-1.6,3.5-3.5V-5.2 C34.7-7.1,33.1-8.7,31.2-8.7z M33.3,47.2c0,1.2-0.9,2.1-2.1,2.1h-42.4c-1.2,0-2.1-0.9-2.1-2.1V-5.2c0-1.2,0.9-2.1,2.1-2.1h42.4
                                                   c1.2,0,2.1,0.9,2.1,2.1V47.2z M11.8,18.5l-1-1l-0.6,0.6v-1.8H8.9v2.1L8,17.5l-1,1l1.3,1.3H0.8v4.8H20v-4.8h-9.4L11.8,18.5z M18.6,23.2H2.2v-2h16.4V23.2z M10.2,10.9h0.1v-0.1l1.6-1.6l-1-1l-0.6,0.6V7.1H8.9v2L8,8.2l-1,1l2.3,2.3H0.8v4.8H20v-4.8H9.6
                                                   L10.2,10.9z M18.6,14.9H2.2v-2h16.4V14.9z M11.8,26.7l-1-1l-0.6,0.6v-1.7H8.9v2L8,25.7l-1,1l1.4,1.4H0.8v4.8h8.1v2.9h1.4v-2.9 H20v-4.8h-9.5L11.8,26.7z M18.6,31.5H2.2v-2h16.4V31.5z " />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="col-md-9 "> 
              <p className="text-muted "> Configure the different stages involved in selecting the right candidate for this job </p>
              <button className="btn btn-primary shadow rounded-pill px-3" data-bs-toggle="modal" data-bs-target="#hiringModal"> Manage Hiring Process </button>
            </div>
          </div>
        </div>   

        <ManageHiringModal data={data}/>
        </>
    )
}

export default ManageHiring
