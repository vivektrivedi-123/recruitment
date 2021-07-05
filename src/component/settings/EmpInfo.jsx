import React from 'react'
import { NavLink } from 'react-router-dom'

function EmpInfo() {
    return (
        <>
        <div className="row bg-white m-3 p-3">
        <h4 className="font-600 dropzone px-2" style={{minHeight: '30px!important', borderColor: '#d2d2d2!important'}}>Employee Information System</h4>
        <div className="col-md-4 mt-3">
          <div className="d-flex align-items-start">
            <svg className="pe-2" style={{width: 35}} viewBox="0 0 50 50">
              <g id="ico-import-employees" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g id="Group" transform="translate(0.000000, 3.000000)" fillRule="nonzero">
                  <path d="M46.8965517,32.2413793 C46.8965517,31.3843857 47.5912823,30.6896552 48.4482759,30.6896552 C49.3052694,30.6896552 50,31.3843857 50,32.2413793 L50,38.4482759 C50,41.0192566 47.9158083,43.1034483 45.3448276,43.1034483 L23.6206897,43.1034483 C21.0497089,43.1034483 18.9655172,41.0192566 18.9655172,38.4482759 L18.9655172,32.2413793 C18.9655172,31.3843857 19.6602478,30.6896552 20.5172414,30.6896552 C21.374235,30.6896552 22.0689655,31.3843857 22.0689655,32.2413793 L22.0689655,38.4482759 C22.0689655,39.3052694 22.7636961,40 23.6206897,40 L45.3448276,40 C46.2018212,40 46.8965517,39.3052694 46.8965517,38.4482759 L46.8965517,32.2413793 Z" id="Mask" fill="#FF3366" />
                  <path d="M32.9310345,28.4951859 L32.9310345,13.6206897 C32.9310345,12.7636961 33.625765,12.0689655 34.4827586,12.0689655 C35.3397522,12.0689655 36.0344828,12.7636961 36.0344828,13.6206897 L36.0344828,28.4951859 L41.1441446,23.385524 C41.7501306,22.779538 42.732628,22.779538 43.338614,23.385524 C43.9445999,23.9915099 43.9445999,24.9740073 43.338614,25.5799933 L35.5799933,33.338614 C34.9740073,33.9445999 33.9915099,33.9445999 33.385524,33.338614 L25.6269033,25.5799933 C25.0209173,24.9740073 25.0209173,23.9915099 25.6269033,23.385524 C26.2328892,22.779538 27.2153866,22.779538 27.8213726,23.385524 L32.9310345,28.4951859 Z" id="Combined-Shape" fill="#FF3366" />
                  <path d="M18.490566,15.2129399 C19.9479506,13.5733823 20.6766428,11.478392 20.6766428,9.29231527 C20.5855563,4.10038294 16.3044893,-0.0895975428 11.0214704,0.00148898941 C5.82953806,-0.0895975428 1.54847105,4.00929641 1.36629798,9.29231527 C1.36629798,11.478392 2.18607677,13.5733823 3.55237476,15.2129399 C1.27521145,17.2168436 0,20.0405261 0,23.0463816 L0,25.251977 C0,26.0717557 0.637605725,26.800448 1.54847105,26.800448 C2.36824984,26.800448 3.09694209,26.1628423 3.09694209,25.251977 L3.09694209,23.0463816 C3.09694209,20.7692183 4.09889395,18.5831416 5.92062459,17.2168436 C9.10865322,19.1296608 13.0253741,19.1296608 16.2134027,17.2168436 C17.9440468,18.6742281 19.0370852,20.7692183 19.0370852,23.0463816 L19.0370852,25.251977 C19.0370852,26.0717557 19.674691,26.800448 20.5855563,26.800448 C21.4964216,26.800448 22.1340273,26.1628423 22.1340273,25.251977 L22.1340273,23.0463816 C22.0429408,20.0405261 20.7677293,17.125757 18.490566,15.2129399 Z M11.0214704,15.6683725 C7.46909564,15.7594591 4.46324008,12.84469 4.46324008,9.29231527 C4.46324008,9.29231527 4.46324008,9.29231527 4.46324008,9.29231527 C4.55432661,5.73994052 7.46909564,2.82517149 11.0214704,2.91625802 C14.5738452,2.82517149 17.5797007,5.73994052 17.5797007,9.29231527 C17.5797007,12.84469 14.6649317,15.6683725 11.0214704,15.6683725 C11.0214704,15.6683725 11.0214704,15.6683725 11.0214704,15.6683725 Z" id="Shape" fill="#2C3D4F" />
                </g>
              </g>
            </svg>
            <div>
              <p className="font-600 mb-1">Bulk Create New Employees</p>
              <ul className="d-flex list-unstyled flex-wrap ms-sm-n1">
                <li className="border-end border-light d-inline-block px-sm-1"><a href="#" className=" text-primary "> G Suite Directory </a></li>
                <li className="border-end border-light d-inline-block px-sm-1"><a href="#" className=" text-primary "> Office 365 Directory </a></li>
                <li className="border-end border-light d-inline-block px-sm-1"><NavLink to="/csv" className=" text-primary "> CSV File </NavLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3">
          <div className="d-flex align-items-start">
            <svg className="pe-2" style={{width: 35}} viewBox="0 0 49.98 45.9">
              <path d="M18.4,17.8a9,9,0,0,0,2.2-5.9A9.33,9.33,0,0,0,11,2.7a9.45,9.45,0,0,0-9.6,9.2,9,9,0,0,0,2.2,5.9A10.19,10.19,0,0,0,.1,25.6v2.2a1.47,1.47,0,0,0,1.5,1.5,1.47,1.47,0,0,0,1.5-1.5V25.6a7.25,7.25,0,0,1,2.8-5.8,9.84,9.84,0,0,0,10.2,0,7.55,7.55,0,0,1,2.8,5.8v2.2a1.47,1.47,0,0,0,1.5,1.5,1.42,1.42,0,0,0,1.5-1.5V25.6A10,10,0,0,0,18.4,17.8Zm-7.4.5A6.38,6.38,0,0,1,4.5,12h0A6.44,6.44,0,0,1,11,5.7,6.38,6.38,0,0,1,17.5,12,6.38,6.38,0,0,1,11,18.3Z" transform="translate(-0.1 -2.7)" style={{fill: '#2c3d4f'}} /><path d="M25.2,28.6a1.15,1.15,0,0,1,0-1.7,12.87,12.87,0,0,1,22,7.2h2.1a.73.73,0,0,1,.6,1.2l-3.2,3.6a.78.78,0,0,1-1.1,0l-3.3-3.5a.8.8,0,0,1,.5-1.3h1.9a10.85,10.85,0,0,0-3-5.8,10.32,10.32,0,0,0-14.7.3A1.27,1.27,0,0,1,25.2,28.6ZM43.6,43a1.15,1.15,0,0,0-1.7,0,10.38,10.38,0,0,1-17.8-5.9h2.2a.74.74,0,0,0,.5-1.3l-3.3-3.5a.78.78,0,0,0-1.1,0l-3.2,3.6a.72.72,0,0,0,.6,1.2h1.8A12.7,12.7,0,0,0,25.5,45a12.92,12.92,0,0,0,18.2-.3A1.25,1.25,0,0,0,43.6,43Z" transform="translate(-0.1 -2.7)" style={{fill: '#f36'}} /></svg>
            <div>
              <p className="font-600 mb-1">Bulk Update Current Employees</p>
              <ul className="d-flex list-unstyled flex-wrap ms-sm-n1">
                <li className="border-end border-light d-inline-block px-sm-1"><NavLink to="/csv-file2" className=" text-primary "> CSV File </NavLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3">
          <div className="d-flex align-items-start">
            <svg className="pe-2" style={{width: 35}} viewBox="0 0 512 512">
              <path style={{fill: '#2C3D4F'}} d="M145.7,297.4c0-6.9,5.6-12.5,12.5-12.5H347c6.9,0,12.5,5.6,12.5,12.5s-5.6,12.5-12.5,12.5H158.2
    C151.3,309.9,145.7,304.4,145.7,297.4z M158.2,379.8H277c6.9,0,12.5-5.6,12.5-12.5s-5.6-12.5-12.5-12.5H158.2
    c-6.9,0-12.5,5.6-12.5,12.5S151.3,379.8,158.2,379.8z M483.4,74.9v411.5c0,13.6-11,24.6-24.6,24.6H152c-13.6,0-24.6-11-24.6-24.6
    v-24.8h-29c-13.6,0-24.6-11-24.6-24.6v-12.5c-25.7-4.9-45.1-27.6-45.1-54.6s19.5-49.7,45.1-54.6v-16.4
    c-25.7-4.9-45.1-27.6-45.1-54.6c0-27.1,19.5-49.7,45.1-54.6v-7.6c0-6.9,5.6-12.5,12.5-12.5s12.5,5.6,12.5,12.5v8.5
    c8.4,2.2,16.1,6.4,22.7,12.3c5.1,4.6,5.6,12.5,1,17.7c-4.6,5.1-12.5,5.6-17.7,1c-1.8-1.6-3.9-3.1-6-4.2v99
    c8.4,2.2,16.1,6.4,22.7,12.3c5.1,4.6,5.6,12.5,1,17.7s-12.5,5.6-17.7,1c-1.8-1.6-3.9-3.1-6-4.2v93.8h306V25.9h-306V46v95
    c0,6.9-5.6,12.5-12.5,12.5s-12.5-5.6-12.5-12.5V46V25.5c0-13.6,11-24.6,24.6-24.6h306.8c13.6,0,24.6,11,24.6,24.6v24.8h29
    C472.3,50.3,483.4,61.4,483.4,74.9z M73.8,341.1c-11.7,4.3-20.1,15.6-20.1,28.8s8.4,24.5,20.1,28.8V341.1z M73.8,215.4
    C62,219.7,53.6,231,53.6,244.2c0,13.2,8.4,24.5,20.1,28.8V215.4z M458.4,75.3h-28.6V437c0,13.6-11,24.6-24.6,24.6H152.4v24.4h306
    V75.3z" />
              <path style={{fill: '#FF3366'}} d="M145.7,157.6c0-6.9,5.6-12.5,12.5-12.5H347c6.9,0,12.5,5.6,12.5,12.5s-5.6,12.5-12.5,12.5H158.2
    C151.3,170.1,145.7,164.6,145.7,157.6z M347,215H158.2c-6.9,0-12.5,5.6-12.5,12.5s5.6,12.5,12.5,12.5H347c6.9,0,12.5-5.6,12.5-12.5
    S353.9,215,347,215z M184.2,100.2H344c6.9,0,12.5-5.6,12.5-12.5s-5.6-12.5-12.5-12.5H184.2c-6.9,0-12.5,5.6-12.5,12.5
    S177.3,100.2,184.2,100.2z M121.5,77C111.2,67.9,98,62.8,84.3,62.8c-30.7,0-55.7,25-55.7,55.7s25,55.7,55.7,55.7
    c6.9,0,12.5-5.6,12.5-12.5c0-6.9-5.6-12.5-12.5-12.5c-16.9,0-30.7-13.8-30.7-30.7s13.8-30.7,30.7-30.7c7.6,0,14.8,2.8,20.5,7.8
    c5.1,4.6,13,4.2,17.7-1C127,89.6,126.6,81.7,121.5,77z" />
              <path style={{fill: '#2C3D4F'}} d="M86.3,194.4c-6.9,0-12.5-5.6-12.5-12.5V141c0-6.9,5.6-12.5,12.5-12.5s12.5,5.6,12.5,12.5v40.9
    C98.8,188.8,93.2,194.4,86.3,194.4z" />
            </svg>
            <div>
              <p className="font-600 mb-1">Profile Fields</p>
              <ul className="d-flex list-unstyled flex-wrap ms-sm-n1">
                <li className="border-end border-light d-inline-block px-sm-1"><a href="#" className=" text-primary "> Employee Record</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3">
          <div className="d-flex align-items-start">
            <svg className="pe-2" style={{width: 35}} viewBox="0 0 512 512"><g>
                <path style={{fill: '#FF3366'}} d="M213.6,377.3c-8.3,41.7-41.9,75.8-83.5,84.8l-76.5,16.5c-0.9,0.2-1.8,0.3-2.6,0.3c-3.3,0-6.5-1.3-8.8-3.7
  c-3-3-4.3-7.3-3.4-11.5l16.5-76.5c9-41.6,43.1-75.2,84.8-83.5c6.8-1.3,13.4,3,14.7,9.8c1.4,6.8-3,13.4-9.8,14.7
  c-32.1,6.4-58.3,32.3-65.3,64.3l-12.4,57.5l57.5-12.4c32-6.9,57.9-33.2,64.3-65.3c1.4-6.8,7.9-11.2,14.7-9.8
  C210.6,363.9,214.9,370.5,213.6,377.3z M395.7,173.6c0,32.3-26.2,58.5-58.5,58.5s-58.5-26.2-58.5-58.5s26.2-58.5,58.5-58.5
  S395.7,141.3,395.7,173.6z M370.7,173.6c0-18.5-15-33.5-33.5-33.5c-18.5,0-33.5,15-33.5,33.5c0,18.5,15,33.5,33.5,33.5
  C355.6,207.1,370.7,192.1,370.7,173.6z" />
                <path style={{fill: '#2C3D4F'}} d="M499.3,22.6c-1-4.9-4.9-8.8-9.8-9.8c-20-4-60.1-8.7-103.4,5.1c-0.2,0-0.3,0.1-0.5,0.2
  c-76,27.6-134,73.9-172.7,112.9c-2.1-1.4-4.6-2.2-7.3-2.2c-55.6,1.2-109,22.4-150.4,59.6l-42.7,38.4c-3.5,3.2-5,8.1-3.7,12.7
  c1.3,4.6,5.1,8,9.7,8.9L123.6,268c0,0,0,0.1,0,0.1c-4.5,44.4,33.8,83.3,35.4,84.9c1.5,1.5,36.3,35.8,77.6,35.8
  c2.4,0,4.9-0.1,7.4-0.4c2.9-0.3,6.2-1,9.7-1.9l28.1,107.5c1.2,4.6,4.9,8.1,9.6,9.1c0.8,0.2,1.7,0.3,2.5,0.3c3.8,0,7.5-1.7,9.9-4.8
  l35.6-45.7c34.5-44.2,52.1-99.5,49.3-155.5c-0.1-1.7-0.5-3.3-1.2-4.7c37.6-38.6,80.4-94.3,106.5-166.3c0.1-0.2,0.1-0.3,0.2-0.5
  C508,82.7,503.4,42.6,499.3,22.6z M48.1,228.4L72,206.9c33.1-29.8,74.8-48,118.9-52.2c-27.4,31.3-49.3,64.2-60.1,89.3L48.1,228.4z
   M241.4,363.6c-32.3,3.3-64.1-27.6-64.7-28.3c-0.3-0.3-8.2-8.4-15.6-20.5c-6.7-11-14.4-27.6-12.7-44.3
  c1.5-15.1,23.4-58.1,67.2-106.3c30.4-33.4,78-76.7,141.7-107.4c2.1,6.6,8.5,24.6,20.9,43.5c19.9,30.3,46.3,49.1,76.6,54.6
  c-30.6,63.5-73.8,111-107.2,141.3C299.5,340.2,256.5,362.1,241.4,363.6z M319.7,437.5l-20.1,25.7L277,377.2
  c25.6-12.7,57.2-34.9,86.8-61.7C362.4,359.7,347,402.5,319.7,437.5z M470.5,118.1c-1.7,4.6-3.4,9.1-5.2,13.6
  c-0.8-0.3-1.7-0.5-2.5-0.6c-60.3-8.3-81.7-82.2-82-83.3c-0.1-0.3-0.2-0.6-0.3-0.9c4.5-1.8,9-3.6,13.6-5.2
  c32.5-10.3,63.1-8.7,82.3-5.8C479.2,55,480.8,85.6,470.5,118.1z" />
              </g>
            </svg>
            <div>
              <p className="font-600 mb-1">Onboarding</p>
              <ul className="d-flex list-unstyled flex-wrap ms-sm-n1">
                <li className="border-end border-light d-inline-block px-sm-1"><a href="#" className=" text-primary "> Documents </a></li>
                <li className="border-end border-light d-inline-block px-sm-1"><a href="#" className=" text-primary "> Checklists </a></li>
                <li className="border-end border-light d-inline-block px-sm-1"><a href="#" className=" text-primary "> Preferences </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3">
          <div className="d-flex align-items-start">
            <svg className="pe-2" style={{width: 35}} viewBox="0 0 30 30">
              <g id="img-offboard">
                <path style={{fill: '#2C3D4F'}} d="M19,12V6.3c0-2-1.8-3.7-4-3.7H5.6c-2.2,0-4,1.7-4,3.7v17.4c0,2,1.8,3.7,4,3.7h9.3c2.2,0,4-1.7,4-3.7V18H17v5.7
  c0,1-1,1.9-2.2,1.9H5.6c-1.2,0-2.2-0.8-2.2-1.9V6.3c0-1,1-1.9,2.2-1.9h9.3c1.2,0,2.2,0.8,2.2,1.9V12H19z" />
                <path style={{fill: '#FF3366'}} d="M28,14.1l-4.5-4.5c-0.2-0.2-0.5-0.3-0.7-0.3l0,0c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.4-0.4,1,0,1.4l2.8,2.8H13.5
  c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1h11.3l-2.7,2.8c-0.2,0.2-0.3,0.5-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7c0.2,0.2,0.5,0.3,0.7,0.3l0,0
  c0.3,0,0.5-0.1,0.7-0.3l4.5-4.5C28.4,15.1,28.4,14.5,28,14.1z" />
              </g>
            </svg>
            <div>
              <p className="font-600 mb-1">Offboarding</p>
              <ul className="d-flex list-unstyled flex-wrap ms-sm-n1">
                <li className="border-end border-light d-inline-block px-sm-1"><a href="#" className=" text-primary "> Documents </a></li>
                <li className="border-end border-light d-inline-block px-sm-1"><a href="#" className=" text-primary "> Checklists </a></li>
                <li className="border-end border-light d-inline-block px-sm-1"><a href="#" className=" text-primary "> Preferences </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-3">
          <div className="d-flex align-items-start">
            <svg className="pe-2" style={{width: 35}} viewBox="0 0 512 512">
              <path style={{fill: '#FF3366'}} d="M231.3,212c7.5,7.2,7.6,19.2,0.3,26.6l-28.3,28.8l-28.6-24.9l30.2-30.2
    C212.2,204.9,223.9,204.8,231.3,212L231.3,212z M305.5,286.1L305.5,286.1c-7.3-7.1-19-7-26.3,0.2L249,316.5l28.6,24.9l28.3-28.8
    C313.1,305.3,312.9,293.4,305.5,286.1z" />
              <path style={{fill: '#2C3D4F'}} d="M163.6,223.1c-4.7-4.7-12.3-4.7-17,0l-37.2,37.2c-36.4,36.4-39,93.8-8,133.3l-74,74
    c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5l74-74c17.7,13.9,39.3,21.5,62.2,21.5c26.9,0,52.1-10.5,71.1-29.5
    l37.2-37.2c4.7-4.7,4.7-12.3,0-17L163.6,223.1z M234.8,385.6c-14.5,14.5-33.7,22.4-54.2,22.4s-39.7-8-54.2-22.4l0,0
    c-29.9-29.9-29.9-78.5,0-108.3l28.7-28.7L263.5,357L234.8,385.6z M484.5,27.5c-4.7-4.7-12.3-4.7-17,0l-74,74
    c-39.5-31-96.9-28.4-133.3,8L223,146.7c-4.7,4.7-4.7,12.3,0,17L348.3,289c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5l37.2-37.2
    c19-19,29.5-44.3,29.5-71.1c0-22.8-7.6-44.5-21.5-62.2l74-74C489.2,39.7,489.2,32.1,484.5,27.5z M385.6,234.8l-28.7,28.7
    L248.5,155.1l28.7-28.7c29.9-29.9,78.5-29.9,108.4,0l0,0c14.5,14.5,22.4,33.7,22.4,54.2S400.1,220.3,385.6,234.8z" />
            </svg>
            <div>
              <p className="font-600 mb-1">Hr Workflows</p>
              <ul className="d-flex list-unstyled flex-wrap ms-sm-n1">
                <li className="border-end border-light d-inline-block px-sm-1"><a href="#" className=" text-primary "> Auto-assign Hr Partner </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>    
        </>
    )
}

export default EmpInfo
