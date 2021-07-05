import React from 'react'

function Tab() {
    return (
        <>
             <ul className="nav nav-tabs nav-bordered bg-transparent border-top-0 mb-3 px-1">
                  <li className="nav-item">
                    <a href="#home-b1" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
                      <i className="mdi mdi-home-variant d-md-none d-block" />
                      <span className="d-none d-md-block">General</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#profile-b1" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                      <i className="mdi mdi-account-circle d-md-none d-block" />
                      <span className="d-none d-md-block">Recruit</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#settings-b1" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                      <i className="mdi mdi-settings-outline d-md-none d-block" />
                      <span className="d-none d-md-block">Employees</span>
                    </a>
                  </li>
                </ul>
        </>
    )
}

export default Tab
