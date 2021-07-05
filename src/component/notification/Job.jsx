import React, { useState } from 'react'
import Switch from "react-switch";
function Job() {
    const[state,setState]=useState({
        check1:true,
        check2:true,
        check3:false,
        check4:true,
        check5:false
    })

  const handleChecked=(e)=>{
      const{name,checked}=e.target;
      console.log(e)
      setState({...state,[name]:checked})
  }  
    return (
        <>
          
          <li className="list-group-item list-group-item-action position-relative" data-bs-toggle="modal" data-bs-target="#edit-modal">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                             //   id="customSwitch1" 
                                checked={state.check1}
                                name="check1"
                                onChange={handleChecked}
                        
                             />
                            <label className="form-check-label" htmlFor="customSwitch1">New job posting created</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch2" 
                              checked={state.check2}
                              onChange={handleChecked}
                              name="check2"
                              />
                            <label className="form-check-label" htmlFor="customSwitch2">Job assigned to you</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                              type="checkbox" 
                              className="form-check-input" 
                              id="customSwitch3" 
                            checked={state.check3}
                            name="check3"
                            onChange={handleChecked}
                              />
                            <label className="form-check-label" htmlFor="customSwitch3">Job status changed</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                               type="checkbox" 
                               className="form-check-input" 
                               id="customSwitch4" 
                               checked={state.check4}
                               onChange={handleChecked} 
                               name="check4"
                               />
                            <label className="form-check-label" htmlFor="customSwitch4">New panel member added</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="customSwitch5" 
                                name="check5"
                                checked={state.check5}
                                onChange={handleChecked} 
                                />
                            <label className="form-check-label" htmlFor="customSwitch5">Panel member removed</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li>   
        </>
    )
}

export default Job
