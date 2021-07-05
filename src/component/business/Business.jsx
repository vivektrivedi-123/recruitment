import React, { useState } from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import BusinessModal from './BusinessModal'
import "./Business.css"
import Navbar from '../../common/Navbar'
function Business() {
    const[bool,setBool]=useState(false)
    const bus=[
        // "name1",
        // "name2"
    ]
   
const handleEdit=()=>{
setBool(true)
}

const handleCross=()=>{
    setBool(false)
}
    return (
        <>
        <div className="wrapper">
  <div id="leftside">
<Navbar/>
  </div>
  <div className="content-page pt-5">
    <div className="content">
      <div className="navbar-custom h-auto">
        <div id="top-bar">
         <Topbar/>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="page-aside-left bg-white shadow settings p-0" style={{top: '55px!important', width: 'inherit!important'}}>
            <Sidebar name="Business"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white">
                  {bus.length===0?
                <div className="text-center mt-5">
                  <i className="uil uil-home text-muted" style={{fontSize: 85, opacity: '0.4'}} />
                  <h3 className="text-info fs-3 mb-3"> No Business Units to Show </h3>
                  <button className="btn btn-outline-secondary end-bar-toggle ">Add new</button>
                </div>:
                <>
                <button className="btn btn-outline-secondary mb-3 end-bar-toggle" >Add new</button>
                <ul className="list-group py-2  add-sub-department">
                {bool?                  
                <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row">
                        <div className="col-lg-12">
                          <input type="text" className="border-0 w-100 bg-transparent" />
                        </div>
                      </div>
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <span>
                          <i className="uil uil-check align-middle me-1 align-middle text-success fs-3 " />
                          <i className="uil uil-times text-danger align-middle fs-3" onClick={handleCross}  />
                        </span>
                      </div>
                    </div>
                  </li>:''}
                  {bus.map((u,i)=>
                  <li key={i}  className="list-group-item list-group-item-action position-relative">
              <div className="show-btns">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="mb-0">{u}</p>
                  </div>
                </div>
                <div className="hover-btns position-absolute" id="tooltip-container2">
                  <span>
                    <i   className=" dripicons-document-edit align-middle me-2" onClick={handleEdit}/> 
                    <i  className=" mdi mdi-trash-can-outline fs-4 me-2" data-bs-toggle="modal"  data-bs-target="#delete-department" />
                  </span>
                </div>
              </div>
            </li>
            )}
                </ul>
                </>
                }
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>{/**/}
<BusinessModal/>
        </>
    )
}

export default Business
