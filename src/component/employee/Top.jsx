import React from 'react'

function Top() {
    return (
        <>
          <ul className="nav nav-tabs nav-bordered  position-fixed w-100 bg-white shadow border-0 z-index-9">
            <li className="nav-item">
              <a href="#job" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
                <i className="mdi mdi-home-variant d-md-none d-block" />
                <span className="d-none d-md-block">Job</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#personal" data-bs-toggle="tab" aria-expanded="true" className="nav-link ">
                <i className="mdi mdi-account-circle d-md-none d-block" />
                <span className="d-none d-md-block"> Personal</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#employment-education" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                <i className="mdi mdi-settings-outline d-md-none d-block" />
                <span className="d-none d-md-block">Employment &amp; Education</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#compensation" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                <i className="mdi mdi-settings-outline d-md-none d-block" />
                <span className="d-none d-md-block"> Compensation</span>
              </a>
            </li>
          </ul>   
        </>
    )
}

export default Top
