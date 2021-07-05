import React from 'react'

function Switch({change,name,value,data}) {
    return (
        <>
              <li className="list-group-item list-group-item-action position-relative">
                        <div className="show-btns">
                          <div className="form-check form-checkbox-success form-switch">
                            <input 
                               type="checkbox" 
                               className="form-check-input" 
                               id="customSwitch1" 
                               onChange={change}
                               name={name}
                               checked={value}
                            />
                            <label className="form-check-label" htmlFor="customSwitch1">{data}</label>
                          </div>
                          <div className="hover-btns position-absolute" id="tooltip-container2">
                            <i className=" dripicons-document-edit align-middle me-2" /> 
                          </div>
                        </div>
                      </li> 
        </>
    )
}

export default Switch
