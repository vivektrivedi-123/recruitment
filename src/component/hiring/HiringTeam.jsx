import React from 'react'
function HiringTeam() {
    return (
        <>
         <div className="row m-0 px-2">
          <div className="col-md-12 my-2 ">
            <div className="p-3 bg-white rounded">
              <h4 className="bg-primary-lighten p-3"> Hiring Team </h4>
              <div className="row my-3">
                <h5 className="text-info"> Recruiter(s) </h5>
                <div className="col-md-3 position-relative ">
                  <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="assets/images/Piechart1.png" width="12% " className="d-inline-block align-middle me-1" alt />
                    <span className="d-inline-block align-middle text-info">
                      <h5 className="mb-0 "> Priyanka Sharma </h5>
                      <p> hr@rudrainnovatives.com </p>
                    </span>
                  </a>
                  <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton2">
                    <div className="p-2">
                      <input className="form-control" aria-controls placeholder="Search" type="search" />
                    </div>
                    <ul>
                      <li>
                        <a className href="#">
                          <span className="relative align-middle avatar-circle d-inline-block me-1">
                            <img className="img-fluid" src="image/graph.png" />
                          </span> Gaurav Aery</a>
                      </li>
                      <li>
                        <a className href="#">
                          <span className="relative align-middle avatar-circle d-inline-block me-1 defaultColor">
                            G
                          </span> Gaurav Aery</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 position-relative ">
                  <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-plus-circle-outline mdi-24px d-inline-block text-info align-middle me-1" />
                    <span className="d-inline-block align-middle text-info"> Add Recruiter(s) </span>
                  </a>
                  <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton2">
                    <div className="p-2">
                      <input className="form-control" aria-controls placeholder="Search" type="search" />
                    </div>
                    <ul>
                      <li>
                        <a className href="#">
                          <span className="relative align-middle avatar-circle d-inline-block me-1">
                            <img className="img-fluid" src="image/graph.png" />
                          </span> Gaurav Aery</a>
                      </li>
                      <li>
                        <a className href="#">
                          <span className="relative align-middle avatar-circle d-inline-block me-1 defaultColor">
                            G
                          </span> Gaurav Aery</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row my-3 ">
                <h5 className="text-info">Hiring manager(s)</h5>
                <div className="col-md-3 position-relative ">
                  <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-plus-circle-outline mdi-24px d-inline-block text-info align-middle me-1" />
                    <span className="d-inline-block align-middle text-info"> Add Hiring Manager(s) </span>
                  </a>
                  <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton2">
                    <div className="p-2">
                      <input className="form-control" aria-controls placeholder="Search" type="search" />
                    </div>
                    <ul>
                      <li>
                        <a className href="#">
                          <span className="relative align-middle avatar-circle d-inline-block me-1">
                            <img className="img-fluid" src="image/graph.png" />
                          </span> Gaurav Aery</a>
                      </li>
                      <li>
                        <a className href="#">
                          <span className="relative align-middle avatar-circle d-inline-block me-1 defaultColor">
                            G
                          </span> Gaurav Aery</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 " />
              </div>
              <div className="row my-3 ">
                <h5 className="text-info"> Panel member(s)</h5>
                <div className="col-md-3 position-relative ">
                  <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-plus-circle-outline mdi-24px d-inline-block text-info align-middle me-1" />
                    <span className="d-inline-block align-middle text-info"> Add Panel Member(s) </span>
                  </a>
                  <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton2">
                    <div className="p-2">
                      <input className="form-control" aria-controls placeholder="Search" type="search" />
                    </div>
                    <ul>
                      <li>
                        <a className href="#">
                          <span className="relative align-middle avatar-circle d-inline-block me-1">
                            <img className="img-fluid" src="image/graph.png" />
                          </span> Gaurav Aery</a>
                      </li>
                      <li>
                        <a className href="#">
                          <span className="relative align-middle avatar-circle d-inline-block me-1 defaultColor">
                            G
                          </span> Gaurav Aery</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 " />
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default HiringTeam
