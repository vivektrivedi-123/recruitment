import React,{useState} from 'react'

import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import './NewTask.css'
import NewTaskModel from './NewTaskModel'
function NewTask() {

    const task=[
        "All Tasks",
        "Pending Tasks",
        "Upcoming Tasks",
        "Open Tasks",
        "In-Progress Tasks",
        "Completed Tasks",
        "Created by me",
        
    ]
    

    const handleTask=(u)=>{
        console.log(u)
    }
    

    return (
        <>
<div className="wrapper">
  <div id="leftside">
<Navigation/>
  </div>
  <div className="content-page pt-5">
    <div className="content">
      <div className="navbar-custom h-auto">
        <div id="top-bar">
          <Topbar/>
        </div>
        <div className="page-header">
          <div className="row w-100 bd-gray-100 py-2 px-3 border-top border-bottom mx-0">
            <div className="col-lg-9 col-6">
              <h4 className="text-info">Task</h4>
            </div>
            <div className="col-lg-3 col-6 text-end">
              <a href="#" className="end-bar-toggle btn border bg-white">Add Task </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0 mt-5 px-3">
        <div className="col-md-12">
          <div className="dropdown">
            <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="true">
              Open Task <span clavisss="pl-1"> (9)</span>
            </button>
            <ul className="dropdown-menu rounded">
                {task.map((u,i)=>
              <li className="dropdown-item" >
            
             <a href='#' value={u} onClick={()=>handleTask(u)} >
                  {u}
                </a> 
              </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col-lg-12">
          {/*company form*/}
          <div className="ms-lg-4">
            <div className="text-center mt-5">
              <i className="uil uil-list-ul " style={{fontSize: 85, opacity: '0.1'}} />
              <h3 className="text-info fs-3 mb-1 ">
                Get things done by jotting down to-dos.
              </h3>   <h3 className="fw-normal text-info fs-3 mt-0 mb-4">Set reminders for yourself to make sure you’re on track.
              </h3>
              <a href="#" className="end-bar-toggle fs-3 fw-normal text-primary">Create new task</a>
            </div>
            {/*company form*/}
            <ul className="list-group py-2 d-none add-sub-department">
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
                      <i className="uil uil-times text-danger align-middle fs-3" />
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/*/company form*/}
        <div className="col-lg-3 text-info p-4">
        </div>
      </div>
    </div>
    {/**/}
  </div>
  {/**/}
</div>
{/**/}


<NewTaskModel/>



        </>
    )
}

export default NewTask
