import React,{useState} from 'react'

function NewTaskModel() {
    const detail=[
        {name:"Gaurav Aery(Me)",email:"gauarv@rudrainnovatives.com",value:""},
        {name:"abc",email:"abc@gmail.com",value:""},
        {name:"xyz",email:"xyz@gmail.com",value:""}
    ]
    
    const[state,setState]=useState({
        newTask:"",
        desc:"",
        rem:"",
        time:'',
        date:''
    })
    
 
 
    const handleChange=(event)=>{
        const { name, value } = event.target;
        console.log(value)
        setState({ ...state, [name]: value });
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(state)
    }
    
    const handleMe=(u)=>{
    console.log(u)
    }
    
    return (
        <>
         
<div className="end-bar filter-area mt-n3 modal-lg-content" >
  <div className="rightbar-title pt-3 pb-4 border-top border-bottom sidebar-new-task">
    <a href="javascript:void(0);" className="end-bar-toggle float-start ms-n5 mt-0 pt-1">
      <i className="dripicons-cross noti-icon" />
    </a>
    <div className="d-flex pb-2">
      <div className="d-flex">
        <div className="bg-danger mt-2 text-center rounded-circle text-white candidate-name me-2">G</div>
        <div className="dropdown">
          <small className="text-info">Assigned To</small>
          <div>
            <button className="text-info border-0 px-0 semi-bold bg-transparent dropdown-toggle" type="button" id="c" data-bs-toggle="dropdown" aria-expanded="true">
              Me
            </button>
            <div className="dropdown-menu col-4 rounded mt-2 shadow arrow-left update-owner-dropdown" aria-labelledby="c" id="arrow" data-popper-placement="bottom-start">
              <div className="overflow-auto p-3 ">
                {/* <div className="bg-grey d-flex align-items-center justify-content-center position-relative">
                  <input type="text" name className="form-control py-0 border-0 px-4 search-icon-input " placeholder="Add Assignee" />
                  <div className="search-icon-circle rounded-circle bg-grey-1 d-flex align-items-center justify-content-center position-absolute left-0 top-0">
                    <i className="uil uil-search text-white" />
                  </div>
                </div> */}
                <div>
                  
                {detail.map((u,i)=>
               
                 <div className="d-flex mt-2 align-items-center" >
                    <div key={i} className="bg-danger text-center rounded-circle text-white candidate-name me-2" onClick={()=>handleMe(u)}>G</div>
                    <div>
                      <span className="text-primary fs-4"  value={u.name}>{u.name}</span><br />
                      <span className="text-muted">{u.email}</span>
                    </div>
                    </div>
                )}
                 
                  <div className="d-flex mt-2 align-items-center">

                    <div className="bg-success text-center rounded-circle text-white candidate-name me-2">N</div>
                    <div>
                      <span className="text-primary fs-4"> Navneel Bhanot</span><br />
                      <span className="text-muted">navneel@rudrainnovatives.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-auto">
        <div className="dropdown">
          <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <div className="btn-group dropdown" role="group">
              <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="true"> Completed &nbsp; &nbsp; &nbsp; &nbsp;</button>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu p-2 mt-2 " id="arrow" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item d-flex align-items-center " href="#"> <i className="uil uil-square-full me-2 fs-3" /> Open </a>
                <a className="dropdown-item d-flex align-items-center " href="#"> <i className="uil uil-focus-add me-2 fs-3" /> In progress </a>
                <a className="dropdown-item d-flex align-items-center" href="#"> <i className="uil uil-check-square me-2 fs-3" /> Completed </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="rightbar-content h-100" data-simplebar="init">
    <div className="simplebar-wrapper" style={{margin: 0}}>
      <div className="simplebar-height-auto-observer-wrapper">
        <div className="simplebar-height-auto-observer" />
      </div>
      <div className="simplebar-mask">
        <div className="simplebar-offset" style={{right: 0, bottom: 0}}>
          <div className="simplebar-content-wrapper" style={{height: '100%', overflow: 'hidden scroll'}}>
            <div className="simplebar-content" style={{padding: 0}}>
              <div className="p-3 bg-grey">
                <form>
                  <div className="bg-white">
                    <div className="d-flex align-items-center bg-body py-2 px-3">
                      <i className="uil uil-list-ul fs-3 me-2" />
                      <h5>Created by: <b>Me</b></h5>
                    </div>
                    <div className="p-3">
                      <div className="form-floating mb-3">
                        <input type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        name='newTask' 
                        placeholder="Name" 
                        value={state.newTask} 
                        onChange={handleChange}/>
                        <label htmlFor="floatingInput" className="text-info py-0 h-auto bg-white d-inline-block  ">Task Name <span className>*</span></label>
                      </div>
                      <div className="form-floating mb-3">
                        <textarea type="text" 
                        rows={6} 
                        className="form-control h-auto" 
                        id="floatingInput" 
                        name='desc' 
                        value={state.desc} 
                        onChange={handleChange} 
                        placeholder="Descriptions" 
                         />
                        <label htmlFor="floatingInput" className="text-info py-0 h-auto bg-white d-inline-block  ">Descriptions <span className>*</span></label>
                      </div>
                      <div className="row ">
                        <div className="col-md-6 d-flex align-items-center">
                          <div className="field form-floating mb-0  w-50">
                            <input className="form-control" 
                            type="date" 
                            name="date" 
                            id="floatingInput" 
                            placeholder="Probation Start Date" 
                            value={state.date} 
                            onChange={handleChange}/>
                            <label htmlFor="date" className="text-info py-0 h-auto bg-white d-inline-block ">Due Date</label>
                          </div>
                          <div className="w-50">
                            <select className="form-select" id="autoSizingSelect" name="time" onChange={handleChange} value={state.time}>
                              <option value="12 pm">12.00pm</option>
                              <option value="1 pm">1pm</option>
                              <option value="2 pm">2pm</option>
                              <option value="3 pm">3pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating custom-select-float">
                            <select className="form-select py-0" id="autoSizingSelect" value={state.rem} onChange={handleChange} name='rem'>
                              <option>15 min</option>
                              <option value="30 min">30 min</option>
                              <option value="1 hour">an hour</option>
                              <option value="2 hour">2 hour</option>
                            </select>
                            <label htmlFor="floatingInput" className="text-info py-0 h-auto bg-white d-inline-block  ">Remind Before: <span className>*</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rightbar-footer bg-body py-2 px-3">
                    <ul className="list-unstyled mb-0 text-end">
                      <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info" data-bs-dismiss="modal">Cancel</button>
                      </li>
                      <li className="list-inline-item"><button type="button" className="btn btn-primary" onClick={handleSubmit}>Save</button></li>
                    </ul>
                  </div>
                </form>
              </div>
              {/* end padding*/}
            </div>
          </div>
        </div>
      </div>
      <div className="simplebar-placeholder" style={{width: 500, height: 676}} />
    </div>
    <div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}>
      <div className="simplebar-scrollbar" style={{width: 0, display: 'none'}} />
    </div>
    <div className="simplebar-track simplebar-vertical" style={{visibility: 'visible'}}>
      <div className="simplebar-scrollbar" style={{height: 25, transform: 'translate3d(0px, 0px, 0px)', display: 'block'}} />
    </div>
  </div>
</div>
   
        </>
    )
}

export default NewTaskModel
