import React from 'react'

function AttractCandidate() {
    return (
       <>
      <div className="row m-0 px-2">
  <div className="col-md-12 my-2">
    <div className="p-3 bg-white rounded">
      <h4> Add and Attract Candidates </h4>
      <div className="row">
        {/* Zip file of resumes */}
        <div className="col-md-2 position-relative add-attract-candidate">
          <div className="py-3 lh-base text-center hov-eff users-select" id="dropdownMenuButton20" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <svg id="import-cand" viewBox="0 0 60 60" className="d-sm-flex w-25 m-auto">
              <path style={{fill: '#FF5969'}} d="M54.3,21.1c-0.4-0.4-1.1-0.3-1.4,0.1l-2.8,3.3v-8.1c0-0.6-0.4-1-1-1s-1,0.4-1,1v8.5l-3.6-3.7
                              c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l5.3,5.4c0.2,0.2,0.5,0.3,0.8,0.3c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.6l4.4-5.1
                              C54.8,22.1,54.7,21.5,54.3,21.1z" />
              <path style={{fill: '#979797'}} d="M36.5,23.6c0-3.7-3-6.7-6.7-6.7c-3.7,0-6.7,3-6.7,6.7s3,6.7,6.7,6.7C33.5,30.2,36.5,27.3,36.5,23.6z M38.5,23.6
                              c0,4.8-3.9,8.7-8.7,8.7c-4.8,0-8.7-3.9-8.7-8.7s3.9-8.7,8.7-8.7C34.6,14.9,38.5,18.8,38.5,23.6z M41.9,47H18.4
                              c-2.3,0-3.9-2.3-3.4-4.7c0.8-4.1,2.8-7.7,5.5-10.2c0.5,0.5,0.9,1,1.5,1.4c-2.5,2.2-4.3,5.4-5,9.2c-0.2,1.3,0.5,2.4,1.5,2.4h23.5
                              c0.9,0,1.7-1.1,1.5-2.4c-0.7-3.9-2.7-7.2-5.3-9.4c0.5-0.4,1-0.9,1.4-1.4c2.9,2.5,5,6.2,5.8,10.5C45.8,44.7,44.1,47,41.9,47z
                              M18.2,28.7c-0.9,0.8-1.7,1.5-2.5,2.4c-0.1,0-0.1,0-0.1,0.1c-3.2,1.4-5.7,4.6-6.5,8.7C9,40.7,9.5,41.5,10,41.5h1c0,0,0,0,0,0.1
                              c-0.1,0.7-0.2,1.3-0.1,1.9H10c-1.9,0-3.3-1.9-2.9-3.9c0.8-4.3,3.3-7.9,6.7-9.7c-1.2-1.2-1.9-2.9-1.9-4.8c0-3.7,2.8-6.7,6.4-6.9
                              c-0.3,0.7-0.6,1.4-0.8,2.2c-2.1,0.6-3.6,2.5-3.6,4.8c0,1.6,0.8,3,1.9,3.9c0.7-0.2,1.5-0.4,2.3-0.4C18.2,28.6,18.2,28.6,18.2,28.7z" />
            </svg>
            <span> Have candidates at hand? <br /> Bulk import </span>
          </div>
          <div className="dropdown-menu start-0 p-0" aria-labelledby="dropdownMenuButton20" style={{margin: 0, position: 'absolute', inset: '0px auto auto 0px', maxWidth: 200, transform: 'translate(0px, 136px)'}} data-popper-placement="bottom-start">
            <div className="py-3 px-2">                                                                                                                                                                          
              <button className="btn btn-outline-secondary col-md-12 my-1" data-bs-toggle="modal" data-bs-target="#standard-modal1">
                Zip file of resumes
              </button>
              <button className="btn btn-outline-secondary col-md-12 my-1" data-bs-toggle="modal" data-bs-target="#standard-modal2">
                CSV file
              </button>
            </div>
          </div>
        </div>
        {/* Zip file of resumes */}
        <div className="col-md-2 position-relative add-attract-candidate">
          <div className="py-3 lh-base text-center hov-eff">
            <svg id="talentpool" viewBox="0 0 60 60" className="d-sm-flex w-25 m-auto">
              <path style={{fill: '#979797'}} d="M44.3,11.9c-0.1-0.1-0.2-0.3-0.3-0.4c-0.9-1.3-2.3-2.2-3.8-2.5c-0.4-0.1-0.8-0.1-1.1-0.1
                              c-0.5,0-0.9,0.1-1.4,0.2C38.2,6.6,37,4,34.7,2.7c-2.3-1.3-5.1-1-7,0.8c-0.4-0.9-1.1-1.7-1.9-2.3c-1-0.8-2.3-1.2-3.5-1.2
                              c-0.3,0-0.6,0-0.9,0.1C19,0.4,17,2.3,16.5,4.7c-0.7-0.5-1.4-0.9-2.3-1.1c-0.4-0.1-0.9-0.2-1.3-0.2c-1.1,0-2.2,0.3-3.1,0.9
                              C7.7,5.6,6.6,8,7,10.4C6.3,10.1,5.7,10,5,9.9l-0.3,0c-1.4,0-2.7,0.7-3.4,1.9c-0.9,1.4-1.3,3-1.3,4.7C0,18.4,0.6,20,1.8,21
                              c1,0.6,1.9,0.9,4.4,1.3l0.2,0c5,0.9,7,1.9,7.5,4.5c-0.6,0.8-2,1.3-4.8,1.3H8.4c-1.6,0-2.8,0.6-3.3,1.6c-0.2,0.3-0.2,0.6-0.2,1
                              c-0.1,0.5,0,1.1,0.1,1.7c0.5,2.2,2.1,4.5,4.9,7c0.7,0.9,1.8,1.4,2.9,1.5c0.2,0,0.5,0,0.7-0.1c0.3,0.5,0.7,1,1.1,1.4
                              c1.1,1,2.6,1.6,4.2,1.5c0.3,0,0.7,0,1.1-0.1c1,0.9,2.3,1.4,3.6,1.4c1.3,0,2.5-0.5,3.5-1.4c0.6,0.2,1.2,0.2,1.8,0.2
                              c1.7,0.1,3.4-0.7,4.4-2.1c3.5-1.6,6.3-4.4,8-7.8c0.6-1.2,1-2.5,1.3-3.8c0.1-0.3,0.2-0.7,0.1-1.1c0-0.3-0.1-0.6-0.2-0.8
                              c-0.4-1-1-1.8-1.8-2.3c-1.1-0.7-2.4-1.2-3.7-1.3c-0.4,0-0.8-0.1-1.2-0.1c-1.3,0-2.7,0.2-3.9,0.7l-0.2,0.1c-0.2,0.1-0.3,0.1-0.4,0
                              c0.1-2.8,1.5-3.6,6.3-4.3c1.2-0.1,2.3-0.4,3.4-0.7c1.7-0.6,3-1.8,3.7-3.5C45.2,15.3,45.1,13.4,44.3,11.9z M29.7,25.2
                              c0,0.2-0.1,0.3-0.1,0.4l-0.2,0h-0.6l-0.1,0.3c-0.1,0.3-0.2,0.5-0.3,0.7l-0.3,0.6l0.6,0c0.5,0,1.1,0.1,1.6,0.1c0.1,0,0.3,0,0.4,0
                              c0.5-0.1,0.9-0.2,1.4-0.4c1.2-0.5,2.5-0.8,3.9-0.8c0.1,0,0.2,0,0.3,0c0.2,0,0.4,0,0.5,0c2.3,0.2,3.7,1.2,4.1,2.5
                              c0,0.1,0.1,0.3,0.1,0.4l-0.1,0.6c0,0.1-0.1,0.1-0.1,0.2C40.7,30,40.5,30,40.3,30c-0.4,0-0.7-0.1-1-0.2c-0.4-0.2-0.8-0.4-1.2-0.7
                              c-0.5-0.4-1.1-0.7-1.8-0.8c-0.3,0-0.5,0-0.7,0.2c-0.9,0.5-1.2,1.9-1.1,5c0,1.1-0.2,1.7-0.5,1.9c-0.6,0-1.7-0.7-3.5-2.5
                              c-1.1-1.1-2.8-1.2-4-0.1c-1.9,1.7-4.9,1.5-6.7-0.4c-0.3-0.4-0.8-0.6-1.4-0.6c-0.5,0-1,0.2-1.3,0.5c-1.1,1-2.2,1.7-2.8,1.7
                              c-0.1,0-0.2,0-0.2,0c-0.4-0.1-0.6-0.8-0.7-1.8c0-0.3-0.2-0.7-0.5-0.9c-0.2-0.2-0.5-0.2-0.7-0.2l-0.2,0c-1,0.2-1.9,0.3-2.9,0.3
                              c-1.2,0-2.1-0.2-2.5-0.5v0l-0.1-0.1v-0.1c0,0,0-0.1,0.1-0.2c0.2-0.3,0.8-0.6,1.8-0.6H9c2,0,3.7-0.3,4.9-0.9
                              c1.2-0.4,2.4-0.7,3.7-0.9l0.6-0.1l-0.3-0.5c-0.1-0.2-0.3-0.4-0.4-0.7l-0.1-0.3L17,26.3c-0.5,0.1-0.9,0.2-1.2,0.3l-0.3,0.1
                              c-0.6-3.6-3.1-4.8-9-5.9l-0.2,0c-2.1-0.4-3-0.6-3.6-1c-1.4-1.4-1.4-4.9-0.1-6.9c0.4-0.7,1.2-1.2,2-1.2h0.3
                              C6,11.7,7.1,12.2,8,12.9l8.1,7.5c0.1,0.1,0.3,0.2,0.4,0.2c0.1,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.4c0-0.2-0.1-0.3-0.2-0.4
                              l-7.7-7.9c-1.2-2-0.6-4.6,1.4-5.9c1-0.6,2.2-0.8,3.3-0.5c1.1,0.3,2,0.9,2.6,1.8l3,10.1l0.6,0.3l0.3-0.6L18,6.6
                              c-0.2-1.1,0.1-2.2,0.8-3.1c0.7-0.9,1.7-1.5,2.8-1.7c0.2,0,0.4-0.1,0.7-0.1c2.1,0,3.9,1.5,4.2,3.6L24.9,17l-0.1,0.5l0.5,0
                              c0.2,0,0.4-0.1,0.5-0.3l2.5-11.6c1.3-2,4-2.6,6-1.3c2,1.3,2.6,4,1.3,6L28.7,19l0.7,0.5l7.3-8.3c2-1.2,4.6-0.7,5.9,1.2
                              c0.1,0.1,0.2,0.2,0.2,0.3c0.6,1.1,0.7,2.4,0.3,3.5L43,16.5c-0.5,1.1-1.4,1.9-2.5,2.2c-1,0.3-2,0.5-3.1,0.6
                              C32,20.2,29.9,21.3,29.7,25.2z M29.7,26.5L29.7,26.5C29.7,26.5,29.6,26.5,29.7,26.5L29.7,26.5L29.7,26.5z M39.8,33.2
                              c-1.1,2.2-2.8,4.1-4.8,5.6c0.4-0.8,0.5-1.7,0.5-2.5c0.4-0.4,0.6-1,0.7-1.6c0.1-0.4,0.1-0.8,0.1-1.3c0-1.7,0-2.9,0.2-3.4
                              c0.3,0.1,0.5,0.3,0.8,0.5l0.2,0.2c0.4,0.3,0.8,0.5,1.2,0.7c0.5,0.2,1.1,0.4,1.7,0.4l0.2,0C40.3,32.2,40,32.7,39.8,33.2z
                              M26.1,42.3L26.1,42.3L26.1,42.3L26.1,42.3z M23.5,43.3c-0.3,0-0.7-0.1-1-0.2c-0.6-0.2-1.1-0.5-1.6-0.9c-0.8-1.9-1.3-5-1.6-8.3
                              c2.3,2.1,5.8,2.2,8.2,0.2c-0.2,3.4-0.6,6.3-1.4,8.1C25.4,42.9,24.4,43.3,23.5,43.3z M9.1,32.8c0.7,0,1.3-0.1,2-0.1
                              c-0.2,2.2,0.3,4.5,1.4,6.4c-0.5-0.1-1-0.4-1.4-0.8l-0.1-0.1c-2.3-2-3.7-3.9-4.3-5.7C7.5,32.7,8.3,32.8,9.1,32.8z M13.8,39.5
                              L13.8,39.5C13.8,39.4,13.8,39.4,13.8,39.5L13.8,39.5z M14.6,39.2L14.6,39.2L14.5,39c-1-1.2-1.6-2.7-1.8-4.3
                              c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.6,0.2,0.9,0.2c0.9,0,2-0.5,3.2-1.5c0.2,3.1,0.6,5.9,1.4,8h-0.2c-1.7,0.1-3.3-0.9-4.1-2.5
                              l-0.1-0.2L14.6,39.2L14.6,39.2z M29.1,33.8c0.1,0.1,0.2,0.1,0.3,0.2c1.8,1.8,3.2,2.8,4.4,2.9c-0.1,0.9-0.7,2.2-1.8,3.7l0,0
                              c-0.7,1.1-1.9,1.7-3.1,1.6c-0.3,0-0.7,0-1-0.1C28.7,39.9,29,36.8,29.1,33.8z M12.3,39.9C12.2,39.9,12.2,39.9,12.3,39.9
                              C12.2,39.9,12.2,39.9,12.3,39.9z M36.4,38.7c-0.1,0.1-0.3,0.2-0.4,0.3C36.1,39,36.3,38.9,36.4,38.7z M31.5,26.2
                              C31.5,26.2,31.5,26.2,31.5,26.2C31.5,26.2,31.6,26.2,31.5,26.2C31.6,26.2,31.5,26.2,31.5,26.2z" />
              <path style={{fill: '#FF5969'}} d="M22.8,17C19,17,16,20,16,23.8c0,3.7,3,6.8,6.8,6.8s6.8-3,6.8-6.8C29.5,20,26.5,17,22.8,17z M22.8,28.4
                              c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7s4.7,2.1,4.7,4.7C27.4,26.4,25.4,28.4,22.8,28.4z M25.4,23.8
                              c0,0.4-0.3,0.7-0.7,0.7h-1.5v1.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7v-1.3h-1.1c-0.4,0-0.7-0.3-0.7-0.7
                              c0-0.4,0.3-0.7,0.7-0.7H22v-1.3c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7v1.3h1.5C25.1,23.2,25.4,23.4,25.4,23.8z" />
            </svg>
            <span> Add from talent pool </span>
          </div>
        </div>
        <div className="col-md-2 position-relative add-attract-candidate">
          <div className="py-3 lh-base text-center hov-eff users-select" id="dropdownMenuButtondrop" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <svg id="tracking-link" viewBox="0 0 60 60" className="d-sm-flex w-25 m-auto">
              <polygon id="Fill-1" style={{fill: 'none'}} points="0,60 60,60 60,0 0,0" />
              <polygon id="Stroke-12" style={{fill: '#FF5969'}} points="27.3,34.1 34.1,27.3 32.7,25.9 25.9,32.7" />
              <path style={{fill: '#979797'}} d="M45.5,24.2L40,29.7c-1.6,1.6-3.9,2.3-6,1.9l2-2c0.9-0.2,1.8-0.6,2.6-1.3l5.4-5.4c1.2-1.2,1.2-3.1,0-4.3
                                 l-2.6-2.6c-1.2-1.2-3.1-1.2-4.3,0l-5.4,5.4c-0.7,0.7-1.2,1.6-1.3,2.6l-2,2c-0.3-2.1,0.3-4.3,1.9-6l5.4-5.4c2-2,5.2-2,7.1,0l2.6,2.6
                                 C47.4,19.1,47.4,22.3,45.5,24.2z M29.6,36.1c-0.2,0.9-0.6,1.8-1.3,2.6l-5.4,5.4c-1.2,1.2-3.1,1.2-4.3,0l-2.6-2.6
                                 c-1.2-1.2-1.2-3.1,0-4.3l5.4-5.4c0.7-0.7,1.6-1.2,2.6-1.3l2-2c-2.1-0.3-4.3,0.3-6,1.9l-5.4,5.4c-2,2-2,5.2,0,7.1l2.6,2.6
                                 c2,2,5.2,2,7.1,0l5.4-5.4c1.6-1.6,2.3-3.9,1.9-6L29.6,36.1z" />
            </svg>
            <span> Generating tracking URL </span>
          </div>
          <div className=" p-0 dropdown-menu dropdown-menu-end left-50" aria-labelledby="dropdownMenuButtondrop" style={{minWidth: 500}}>
            <div className="py-3 px-2">                                                                                                                                                                          
              <div className="row mb-3">
                <div className="col-md-6 pe-0 dropdown">
                  <input 
                   className="form-control dropdown-toggle " 
                   type="text" 
                   name="dropdownMenuButton" 
                   placeholder="Source" 
                   id="dropdownMenuButtonS" 
                   data-bs-toggle="dropdown" 
                   aria-haspopup="true" 
                   aria-expanded="false" 
                   required 
                   />
                  <label className="w-50" htmlFor="dropdownMenuButton"> Source </label>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonS">
                    <div className="p-2">
                      <input 
                       className="form-control" 
                       placeholder="Search" 
                       type="search" 
                       />
                    </div>
                    <div className="p-2 overflow-scroll fix-dropdown">
                      <ul>
                        <li>
                          <a className="" href="#"> Adzuna </a>
                        </li>
                        <li>
                          <a className="" href="#"> Direct </a>
                        </li>
                        <li>
                          <a className="" href="#"> Facebook </a>
                        </li>
                        <li>
                          <a className="" href="#"> FB page tab </a>
                        </li>
                        <li>
                          <a className="" href="#"> Glassdoor </a>
                        </li>
                        <li>
                          <a className="" href="#"> Indeed </a>
                        </li>
                        <li>
                          <a className="" href="#"> Internal </a>
                        </li>
                        <li>
                          <a className="" href="#"> Linkedin </a>
                        </li>
                        <li>
                          <a className="" href="#"> Monster </a>
                        </li>
                        <li>
                          <a className="" href="#"> Naukri </a>
                        </li>
                        <li>
                          <a className="" href="#"> Neuvoo </a>
                        </li>
                        <li>
                          <a className="" href="#"> Twitter </a>
                        </li>
                        <li>
                          <a className="" href="#"> ZipRecruiter </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 dropdown">
                  <input 
                   className="form-control dropdown-toggle " 
                   type="text" 
                   name="dropdownMenuButtonS" 
                   placeholder="Source Category" 
                   id="dropdownMenuButtonS" 
                   data-bs-toggle="dropdown" 
                   aria-haspopup="true" 
                   aria-expanded="false" 
                   required 
                   />
                  <label className="w-50" htmlFor="dropdownMenuButtonS"> Source Category </label>
                  <div className="dropdown-menu">
                    <div className="p-2">
                      <input 
                       className="form-control"  
                       placeholder="Search" 
                       type="search" 
                       />
                    </div>
                    <div className="p-2 overflow-scroll fix-dropdown">
                      <ul>
                        <li>
                          <a className="" href="#"> Advertisement </a>
                        </li>
                        <li>
                          <a className="" href="#"> Agencies </a>
                        </li>
                        <li>
                          <a className="" href="#"> Email </a>
                        </li>
                        <li>
                          <a className="" href="#"> Events </a>
                        </li>
                        <li>
                          <a className="" href="#"> Free Job Boards </a>
                        </li>
                        <li>
                          <a className="" href="#"> Job Boards </a>
                        </li>
                        <li>
                          <a className="" href="#"> Portal </a>
                        </li>
                        <li>
                          <a className="" href="#"> Premium Job Boards </a>
                        </li>
                        <li>
                          <a className="" href="#"> Recruitment Drive </a>
                        </li>
                        <li>
                          <a className="" href="#"> Referral </a>
                        </li>
                        <li>
                          <a className="" href="#"> Referral - social </a>
                        </li>
                        <li>
                          <a className="" href="#"> Social </a>
                        </li>
                        <li>
                          <a className="" href="#"> Universities </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field dropdown">
                <input 
                 className="form-control dropdown-toggle " 
                 type="text" 
                 name="dropdownMenuButtont" 
                 placeholder="Searh/Add New" 
                 id="dropdownMenuButtont" 
                 data-bs-toggle="dropdown" 
                 aria-haspopup="true" 
                 aria-expanded="false" 
                 />
                <label className="w-50" htmlFor="dropdownMenuButtont"> Tracking URL </label>
                {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <div class="p-2 overflow-scroll fix-dropdown">
                                       <ul>
                                          <li>
                                             <a class="" href="#"> Aptitute score is low </a>
                                          </li>
                                          <li>
                                             <a class="" href="#"> Shortlisted </a>
                                          </li>
                                          <li>
                                             <a class="" href="#"> Not open for work from home </a>
                                          </li>
                                          <li>
                                             <a class="" href="#"> Skills not matching </a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div> */}
              </div>
            </div>
            <div className="p-3 d-flex bg-light"> 
              <i className="mdi mdi-lightbulb-on-outline font-22 pe-3" />
              <p className="mb-0">To track all applicants from Facebook ads, you'd need a link with Facebook as
                <strong> Source </strong>  and Advertisement as <strong> Source Category. </strong> </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 position-relative dropdown add-attract-candidate">
          <div className="py-3 lh-base text-center hov-eff" id="dropdownMenuButtonJob" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg id="email" viewBox="0 0 60 60" className="d-sm-flex w-25 m-auto">
              <path id="Stroke-6" style={{fill: '#FF5969'}} d="M1.3,2.5l17.5,13.2c2,1.5,4.9,1.5,6.9,0L42.8,2.2l-1.2-1.6L24.4,14c-1.3,1-3.1,1-4.4,0
                              L2.5,0.9L1.3,2.5z" />
              <path id="Stroke-4" style={{fill: '#979797'}} d="M40.8,28c0.8,0,1.4-0.6,1.4-1.4V3.4c0-0.8-0.6-1.4-1.4-1.4H3.6C2.8,2,2.1,2.6,2.1,3.4v23.1
                              c0,0.8,0.6,1.4,1.4,1.4H40.8z M40.8,30H3.6c-1.9,0-3.4-1.5-3.4-3.4V3.4C0.1,1.5,1.7,0,3.6,0h37.2c1.9,0,3.4,1.5,3.4,3.4v23.1
                              C44.3,28.5,42.7,30,40.8,30z" />
            </svg>
            <span> Job-specific email </span>
          </div>
          <div className="dropdown-menu pb-0" aria-labelledby="dropdownMenuButtonJob" style={{minWidth: 500}}>
            <div className="input-group p-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Recipient's username" 
                aria-label="Recipient's username" 
                />
              <button className="btn btn-light" type="button">Copy</button>
            </div>
            <div className="p-3 pb-2 d-flex bg-light"> 
              <i className="mdi mdi-lightbulb-on-outline font-22 pe-3" />
              <p className="mb-0">To track applications, 
                <span className="text-primary cursor-pointer" data-bs-toggle="modal" data-bs-target="#Set-Sourcing"> map source and source category for Listener </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 position-relative add-attract-candidate">
          <div className="py-3 lh-base text-center hov-eff">
            <div className="hide-on-hover">
              <svg id="share" viewBox="0 0 60 60" className="d-sm-flex w-25 m-auto">
                <path style={{fill: '#979797'}} d="M33.5,24c-2.3,0-4.3,1.2-5.4,2.9l-16.5-8.3l-0.9,1.8l16.6,8.3c-0.2,0.6-0.2,1.1-0.2,1.8
                              c0,3.6,2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5C40,26.9,37.1,24,33.5,24z M33.5,35C31,35,29,33,29,30.5c0-2.5,2-4.5,4.5-4.5
                              s4.5,2,4.5,4.5C38,33,36,35,33.5,35z" />
                <path style={{fill: '#979797'}} d="M11.6,17.3l16.1-8c1,2.2,3.3,3.7,5.9,3.7c3.6,0,6.5-2.9,6.5-6.5C40,2.9,37.1,0,33.5,0S27,2.9,27,6.5
                              c0,0.3,0,0.6,0.1,0.9l-16.4,8.2L11.6,17.3z M33.5,2C36,2,38,4,38,6.5C38,9,36,11,33.5,11S29,9,29,6.5C29,4,31,2,33.5,2z" />
                <path id="Oval" style={{fill: '#FF5969'}} d="M6.5,25C2.9,25,0,22.1,0,18.5S2.9,12,6.5,12s6.5,2.9,6.5,6.5S10.1,25,6.5,25z M6.5,23
                              C9,23,11,21,11,18.5S9,14,6.5,14S2,16,2,18.5S4,23,6.5,23z" />
              </svg>
              <span> Source through your <br /> social connects </span>
            </div>
            <div className="show-on-hover">
              <h5> Share </h5>
              <div>
                <a > <i className="mdi mdi-linkedin font-22 p-1"> </i> </a>
                <a > <i className="mdi mdi-facebook font-22 p-1"> </i> </a>
                <a > <i className="mdi mdi-twitter font-22 p-1" /> </a>
                <a > <i className="mdi mdi-email-outline font-22 p-1" /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1 py-3" />
        <div className="col-md-2 position-relative add-attract-candidate">                         
          <div className="py-3 lh-base text-center hov-eff">
            <svg id="career-portal" viewBox="0 0 60 60" className="d-sm-flex w-25 m-auto">
              <path style={{fill: '#FF5969'}} d="M6.4,14h15.4v-2H6.4V14z M6.4,19h15.4v-2H6.4V19z M6.4,24h15.4v-2H6.4V24z M6.4,29h15.4v-2H6.4V29z" />
              <path style={{fill: '#979797'}} d="M40.8,0H3.6C1.7,0,0.1,1.5,0.1,3.4v27.1c0,1.9,1.5,3.4,3.4,3.4h37.2c1.9,0,3.4-1.5,3.4-3.4V3.4
                              C44.3,1.5,42.7,0,40.8,0z M42.3,30.6c0,0.8-0.6,1.4-1.4,1.4H3.6c-0.8,0-1.4-0.6-1.4-1.4V9h40.1V30.6z M42.3,7H2.1V3.4
                              C2.1,2.6,2.8,2,3.6,2h37.2c0.8,0,1.4,0.6,1.4,1.4V7z M37.9,3H40v2h-2.1V3z M34,3h2.1v2H34V3z M30.2,3h2.1v2h-2.1V3z" />
            </svg>
            <span> View in carrer site </span>
          </div>
        </div>
        <div className="col-md-2 position-relative add-attract-candidate">
          <div className="py-3 lh-base text-center hov-eff" data-bs-toggle="modal" data-bs-target="#manage-vendors">
            <svg id="sourcing-partner" viewBox="0 0 60 60" className="d-sm-flex w-25 m-auto">
              <path style={{fill: '#FF5969'}} d="M18.8,32.1c0.2,0.7,0.4,1.3,0.6,1.9L15,35.5c-0.1-0.7-0.3-1.3-0.6-1.9L18.8,32.1z M41,14.4l-2.3,3.2
                              c0.6,0.3,1.1,0.7,1.6,1.2l2.3-3.2c-0.2-0.1-0.4-0.2-0.5-0.3C41.7,15,41.3,14.7,41,14.4z M13.4,37.1c0,3.5-2.9,6.4-6.4,6.4
                              c-3.5,0-6.4-2.9-6.4-6.4c0-3.5,2.9-6.4,6.4-6.4C10.5,30.7,13.4,33.5,13.4,37.1z M11.4,37.1c0-2.4-2-4.4-4.4-4.4
                              c-2.4,0-4.4,2-4.4,4.4s2,4.4,4.4,4.4C9.4,41.5,11.4,39.5,11.4,37.1z M53.1,8.2c0,3.5-2.9,6.4-6.4,6.4c-3.5,0-6.4-2.9-6.4-6.4
                              c0-3.5,2.9-6.4,6.4-6.4C50.3,1.8,53.1,4.6,53.1,8.2z M51.1,8.2c0-2.4-2-4.4-4.4-4.4s-4.4,2-4.4,4.4s2,4.4,4.4,4.4
                              S51.1,10.6,51.1,8.2z" />
              <path style={{fill: '#979797'}} d="M33.7,28.8c1.4-0.8,2.4-2.2,2.4-3.9c0-2.5-2-4.5-4.5-4.5s-4.5,2-4.5,4.5c0,1.7,0.9,3.1,2.3,3.9
                              c-2.6,0.9-4.8,3.3-5.3,6.5c-0.1,0.5,0.3,1.1,0.8,1.2c0.1,0,0.1,0,0.2,0c0.5,0,0.9-0.3,1-0.8c0.6-3,2.9-5.2,5.5-5.2s4.9,2.2,5.5,5.2
                              c0.1,0.5,0.6,0.9,1.2,0.8c0.5-0.1,0.9-0.6,0.8-1.2C38.3,32.1,36.3,29.7,33.7,28.8z M31.6,27.3c-1.4,0-2.5-1.1-2.5-2.5
                              s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S33,27.3,31.6,27.3z M46,29c0-7.9-6.5-14.4-14.4-14.4c-2.8,0-5.4,0.8-7.6,2.2L21.9,14
                              c-0.5,0.5-1,0.9-1.6,1.2l2.1,2.9c-3.2,2.6-5.2,6.6-5.2,11c0,7.6,5.9,13.8,13.4,14.4V47c0.7-0.1,1.3-0.1,2,0v-3.6
                              c5.6-0.4,10.3-4,12.4-9l2.9,0.9c0.1-0.6,0.3-1.2,0.5-1.8c0,0,0-0.1,0.1-0.1l-2.9-0.9C45.8,31.4,46,30.2,46,29z M31.6,41.5
                              c-6.8,0-12.4-5.6-12.4-12.4s5.6-12.4,12.4-12.4S44,22.2,44,29S38.4,41.5,31.6,41.5z M54.6,31.5c-2.7,0-4.9,2.2-4.9,4.9
                              c0,2.7,2.2,4.9,4.9,4.9c2.7,0,4.9-2.2,4.9-4.9C59.5,33.7,57.3,31.5,54.6,31.5z M54.6,39.2c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9
                              s2.9,1.3,2.9,2.9S56.2,39.2,54.6,39.2z M31.5,48.9c-2.7,0-4.9,2.2-4.9,4.9c0,2.7,2.2,4.9,4.9,4.9c2.7,0,4.9-2.2,4.9-4.9
                              C36.4,51.1,34.2,48.9,31.5,48.9z M31.5,56.6c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9S33.1,56.6,31.5,56.6z
                              M21.9,9.1c0-2.7-2.2-4.9-4.9-4.9c-2.7,0-4.9,2.2-4.9,4.9c0,2.7,2.2,4.9,4.9,4.9C19.7,14,21.9,11.8,21.9,9.1z M17,12
                              c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9S18.6,12,17,12z" />
            </svg>
            <span> Manage vendors <br /> (Sourcing Partner ) </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

       </>
    )
}

export default AttractCandidate
