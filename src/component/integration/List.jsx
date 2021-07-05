import React from 'react'

function List({data,change,check}) {
    return (
        <>
         
              <li  className="list-group-item mb-3 border">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="productivity-icon">
                        <i className="uil uil-user-circle text-primary me-2 font-60" />
                      </div>
                      <div className="pe-md-5">
                        <h4 className="font-600 text-info mb-1">G Suite Directory - Import</h4>
                        <p className="pe-md-5 me-md-5">Use the Directory API to create and manage users and groups for a domain, along with their aliases. Programmatically access the functionality found at the Admin console Organization and users tab. </p>
                      </div>
                      <div className=" ms-auto text-end">
                        <div id="tooltip-preferences">
                          <input 
                            type="checkbox" 
                            onChange={change} 
                            id="switch4" 
                            checked={check}
                           data-switch="success" />
                          <label htmlFor="switch4" data-off-label="Disabled" data-on-label="Enabled" data-bs-container="#tooltip-preferences" data-bs-toggle="tooltip" data-bs-placement="top" title="Enable" style={{width: 82, height: 24, padding: 12}} />
                        </div>
                      </div>
                    </div>
                  </li>   
                
        </>
    )
}

export default List
