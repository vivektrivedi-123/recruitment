import React from 'react'

function Card() {
    return (
        <>
          <div className="col-md-4 mt-3">
          <div className="d-flex align-items-start">
            <svg className="pe-2" style={{width: 55}} viewBox="0 0 512 512">
              <path style={{fill: '#2C3D4F'}} d="M214.2,122h84.4c5.5,0,10-4.5,10-10s-4.5-10-10-10h-84.4c-5.5,0-10,4.5-10,10S208.7,122,214.2,122z" />
              <path style={{fill: '#2C3D4F'}} d="M214.2,180.9h84.4c5.5,0,10-4.5,10-10s-4.5-10-10-10h-84.4c-5.5,0-10,4.5-10,10S208.7,180.9,214.2,180.9z" />
              <path style={{fill: '#2C3D4F'}} d="M214.2,240.8h84.4c5.5,0,10-4.5,10-10s-4.5-10-10-10h-84.4c-5.5,0-10,4.5-10,10S208.7,240.8,214.2,240.8z" />
              <path style={{fill: '#2C3D4F'}} d="M499.5,455.1H460v-62.5c0-6.9-5.6-12.5-12.5-12.5s-12.5,5.6-12.5,12.5v62.5h-68.1V34.6
  c0-6.9-5.6-12.5-12.5-12.5H158.6c-6.9,0-12.5,5.6-12.5,12.5v121.8H53.3c-6.9,0-12.5,5.6-12.5,12.5v286.3H12.5
  c-6.9,0-12.5,5.6-12.5,12.5s5.6,12.5,12.5,12.5h487c6.9,0,12.5-5.6,12.5-12.5S506.4,455.1,499.5,455.1L499.5,455.1z M146.1,455.1
  H65.8V181.3h80.3V455.1z M341.9,455.1H171.1V47.1h170.8V455.1z" />
              <path style={{fill: '#ff5969'}} d="M117.7,213.9H95.1c-5.5,0-10,4.5-10,10s4.5,10,10,10h22.6c5.5,0,10-4.5,10-10S123.2,213.9,117.7,213.9z" />
              <path style={{fill: '#ff5969'}} d="M117.7,262.5H95.1c-5.5,0-10,4.5-10,10s4.5,10,10,10h22.6c5.5,0,10-4.5,10-10S123.2,262.5,117.7,262.5z" />
              <path style={{fill: '#ff5969'}} d="M492,266.9c-12.4-22.6-28.1-35.1-44.4-35.1s-32,12.5-44.4,35.1c-9.9,18-16.2,40.6-16.2,57.4s6.2,34.8,17,49
  c12,15.7,27.5,24.4,43.7,24.4s31.8-8.7,43.7-24.4c10.8-14.2,17-32,17-49S501.8,284.9,492,266.9z M483.4,291.5
  c2.2,5.9,3.9,12,5.2,18.2l-10.3,0.8c-6.9,0.6-13.9-0.1-20.6-1.8l-9-2.4c-13.6-3.6-28-3.3-41.5,0.7c1.8-7.9,4.4-15.6,7.7-23
  c9.9-1.4,20-0.7,29.8,1.8l11,2.9c7.6,2,15.4,3,23.2,3C480.3,291.6,481.8,291.6,483.4,291.5L483.4,291.5z M404.9,324.3
  c0-0.3,0-0.7,0-1l6.2-1.9c10.9-3.3,22.6-3.5,33.6-0.6l9,2.4c6.4,1.7,12.9,2.5,19.5,2.5c2,0,4.1-0.1,6.1-0.2l10.7-0.9
  c0,6.8-1.2,13.6-3.5,20l-8.4,0.7c-6.9,0.6-13.9-0.1-20.6-1.8l-9-2.4c-13.5-3.5-27.7-3.3-41.2,0.6
  C405.8,336.1,404.9,330.2,404.9,324.3L404.9,324.3z M447.6,249.8c9.1,0,19.8,9.6,28.6,25.7c0.2,0.3,0.4,0.7,0.5,1
  c-5.9-0.1-11.7-1-17.5-2.5l-11-2.9c-8.2-2.1-16.6-3.2-25-3C431.1,256.6,439.9,249.8,447.6,249.8L447.6,249.8z M447.6,379.6
  c-12,0-25.5-9.5-34.1-24.1c10.3-2.7,21.1-2.7,31.4,0l9,2.4c6.4,1.7,12.9,2.5,19.5,2.5c1.7,0,3.5-0.1,5.2-0.2
  C470,372.1,458.2,379.6,447.6,379.6L447.6,379.6z" />
            </svg> 
            <div>
              <p className="font-600 mb-1">General</p>
              <ul className="d-flex list-unstyled flex-wrap ms-sm-n1">
                <li className="border-end border-light d-inline-block px-sm-1"><a href="company.html" className=" text-primary "> Company </a></li>
                <li className="border-end border-light d-inline-block px-sm-1"><a href="locations.html" className=" text-primary "> Locations </a></li>
                <li className="border-end border-light d-inline-block px-sm-1"><a href="departments.html" className=" text-primary "> Departments </a></li>
                <li className="border-end border-light d-inline-block px-sm-1"><a href="sub-departments.html" className=" text-primary "> Sub Departments </a></li>
                <li className="border-end border-light d-inline-block px-sm-1"><a href="teams.html" className=" text-primary "> Teams </a></li>
                <li className="border-end border-light d-inline-block px-sm-1"><a href="business-units.html" className=" text-primary "> Business Units </a></li>
                <li className="border-end border-light d-inline-block px-sm-1"><a href="preferences.html" className=" text-primary "> Preferences </a></li>
              </ul>
            </div>
          </div>
        </div>   
        </>
    )
}

export default Card
