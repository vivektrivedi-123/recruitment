import React from 'react'

function ButtonDropdown() {
    return (
       <>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{margin: 0}}>
                      <ul>
                        <li className="dropdown-item ">
                          Share
                        </li>
                        <li className="dropdown-item ">
                          Schedule
                        </li>
                        <li className="dropdown-item ">
                          Send Test
                        </li>
                        <li className="dropdown-item ">
                          Archieve to Talent Pool
                        </li>
                        <li className="dropdown-item ">
                          Snooze
                        </li>
                        <li className="dropdown-item ">
                          Move to another Job
                        </li>
                        <li className="dropdown-item ">
                          Delete
                        </li>
                        <li className="dropdown-item ">
                          Block
                        </li>
                      </ul>
                    </div>
       </>
    )
}

export default ButtonDropdown
