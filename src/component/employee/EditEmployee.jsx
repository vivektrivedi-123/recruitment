import React, { useEffect, useState } from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import './EditEmployee.css'
import data from '../../JobData.json'
import { useParams } from 'react-router'
import Top from './Top'
import PersonalInfo from './PersonalInfo'
import SelectSearch from 'react-select-search';
import fuzzySearch from '../FuzzySearch'
import Role from './Role'
function EditEmployee() {
  const[status,setStatus]=useState('')
  const [inputValues, setInputValues] = useState({
    firstName: '', middleName: '',lastName:'',
    email:'',
    Id:'',
    date_of_joining:'',
    designationTitle:'',
    idCardNumber:'',
    probation_startDate:'',
    probation_endDate:'',
    workStationNumber:'',
    mobileNo:'',
    managerText:'',
    hrPartnerText:""
  });



  const handleOnChange = event => {
    const { name, value } = event.target;
    console.log(value)
    setInputValues({ ...inputValues, [name]: value });
   // console.log(inputValues)
  };

  const costCenter=[
    {"name":"costcenter1","value":"costcenter1"},
    {"name":"costcenter1","value":"costcenter1"},
    {"name":"costcenter1","value":"costcenter1"}
  ]

    const level=[
      {"name":"IC1","value":"IC1"},
      {"name":"IC2","value":"IC2"},
      {"name":"IC3","value":"IC3"},
      {"name":"IC4","value":"IC4"},
      {"name":"IC5","value":"IC5"},
      {"name":"IC6","value":"IC6"},
      {"name":"PMT","value":"PMT"},
      {"name":"PM4","value":"PM4"},
      {"name":"PM5","value":"PM5"},
      {"name":"PM6","value":"PM6"}
    ]

    const branch=[
        {"name":"Chandigarh, India","value":"Chandigarh, India"},
        {"name":"Mohali, Punjab, India","value":"Mohali, Punjab, India"}
    ]
   
   
    const bussinessUnit=[
      {"name":"kuch","value":"kuch"}
    ]

    const subDepartment=[
      {"name":"sub","value":"sub"}
    ]

const primaryTeam=[
   {"name":"Business","value":"Business"},
   {"name":"Corporate Marketing","value":"Corporate Marketing"},
   {"name":"Customer Success","value":"Customer Success"},
   {"name":"Digital Marketing","value":"Digital Marketing"},
   {"name":"Field Sales","value":"Field Sales"},
   {"name":"HR Operations","value":"HR Operations"},
   {"name":"Inbound Sales","value":"Inbound Sales"},
   {"name":"Office Administration","value":"Office Administration"},
   {"name":"Operations","value":"Operations"},
   {"name":"Talent Acquisition","value":"Talent Acquisition"}
]

const reportingManager=[
  {"name":"rm","value":"rm"}
]

const params=useParams()
const[additionalTeams,setAdditionalteam]=useState(data.language)
const[jobContract,setJobContract]=useState(data.Job)
const[shift,setShift]=useState('')
const[repMan,setRepMan]=useState('')
const[partner,setPartner]=useState('')
const[ethnicity,setEthnicity]=useState('')
const[category,setCategory]=useState('')







const jobCategory=[
  {"name":"Executive/Senior Level Managers","value":"Executive/Senior Level Managers"},
  {"name":"First/Mid Level Managers","value":"First/Mid Level Managers"},
  {"name":"Professionals","value":"Professionals"},
  {"name":"Technicians","value":"Technicians"},
  {"name":"Sales Workers","value":"Sales Workers"},
  {"name":"Administrative/Support Workers","value":"Administrative/Support Workers"},
  {"name":"Craft Workers","value":"Craft Workers"},
  {"name":"Operatives","value":"Operatives"},
  {"name":"Service Workers","value":"Service Workers"},
  {"name":"Service Workers","value":"Service Workers"}

]





const eth=[
      {"name":"American Indian or Alaska Native (Not Hispanic or Latino)","value":"American Indian or Alaska Native (Not Hispanic or Latino)"},
      {"name":"Asian or Indian Subcontinent (Not Hispanic or Latino)","value":"Asian or Indian Subcontinent (Not Hispanic or Latino)"},
      {"name":"Black or African American (Not Hispanic or Latino)","value":"Black or African American (Not Hispanic or Latino)"},
      {"name":"Hispanic or Latino","value":"Hispanic or Latino"},
      {"name":"Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)","value":"Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)"},
      {"name":"Two or More Races (Not Hispanic or Latino)","value":"Two or More Races (Not Hispanic or Latino)"},
      {"name":"White (Not Hispanic or Latino)","value":"White (Not Hispanic or Latino)"},
      {"name":"I don't wish to Answer","value":"I don't wish to Answer"}

]

const handleShift=(e)=>{
  setShift(e.target.value)
}
 useEffect(()=>{
    
console.log(params)
let d=data.employeeData;
let result=d.filter(u=>u.id===params.id)
console.log(result)
setInputValues({'firstName':result[0].name})
setInputValues({'email':result[0].email})

 },[])   

const handleJobContract=(e)=>{
    console.log(e)
}
const handleAddTeam=(e)=>{
    console.log(e)
}

const handlePrimaryTeam=(e)=>{
    console.log(e)
}

const handleBranch=(e)=>{
    console.log(e)
}
const handleUnit=(e)=>{

}
const handleSubDept=(e)=>{

}

const handleLevel=()=>{

}

const handleCost=()=>{

}

const handleStatus=(e)=>{
  setStatus(e.target.value)
}

const handleContactType=(e)=>{
  console.log(e.target.value)
}

const handleReport=(e)=>{
  setRepMan(e.target.value)
  console.log(e)
}


const handlePartner=(e)=>{
  setPartner(e.target.value)
}

const handleEthnicity=(e)=>{
setEthnicity(e)
}


const handlJobCategory=(e)=>{
  setCategory(e)
  console.log(e)
}
    return (
        <>
       <div className="wrapper">
  <div id="leftside">
    <Navigation/>
  </div>
  <div className="content-page pt-5">
    <div className="content">
      <div className="navbar-custom h-auto">
        <div id="top-bar">
         <Topbar/>
        </div>
        <div className="page-header">
          <div className="row w-100 bd-gray-100 border-top border-bottom mx-0">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-9 px-1">
                  <nav aria-label="breadcrumb" className="col-lg-9">
                    <ol className="breadcrumb mb-0 border-0">
                      <li className="breadcrumb-item"><a href="#">Employees</a></li>
                      <li className="breadcrumb-item"><a href="#">Amit Kumar</a></li>
                      <li className="breadcrumb-item active semi-bold text-info" aria-current="page">Edit</li>
                    </ol>
                  </nav>
                </div>
                <div className="col-lg-3">
                  <ul className="list-unstyled text-end mb-0 py-2">
                    <li className="list-inline-item">
                      <a href="employees.html" className="btn bg-transparent border-0">Cancel</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="btn btn-primary">Save Profile</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0  mt-4 pt-2">
        <div className="col-md-12 px-0">
         <Top/>
          <div className="row mt-5 mx-0 px-3">
            <div className="col-lg-9 tab-content mt-3">
              <div className="tab-pane active show" id="job">
                <form>
                  <div className="employee-information-form mb-4">
                    <h4 className="text-info">General Information <i className="uil uil-lock-open-alt text-success me-1" /> </h4>
                    <div className="bg-white px-3 py-4 rounded">
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input 
                               type="text" 
                               className="form-control" 
                               value={inputValues.firstName} 
                               id="floatingInput" 
                               name="firstName" 
                               placeholder="Search" 
                               onChange={handleOnChange} 
                               />
                            <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">First Name<span className="text-danger">*</span></label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input 
                              type="text" 
                              className="form-control" 
                              defaultValue 
                              id="floatingInput" 
                              placeholder="Search"  
                              name="middleName"  
                              onChange={handleOnChange}
                              />
                            <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">Middle Name</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-2">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input 
                              type="text" 
                              className="form-control" 
                              defaultValue="Kumar" 
                              id="floatingInput" 
                              placeholder="Search" 
                              name="lastName" 
                              onChange={handleOnChange} 
                              />
                            <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">Last Name<span className="text-danger">*</span></label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input 
                              type="email" 
                              className="form-control" 
                              value={inputValues.email} 
                              id="floatingInput" 
                              placeholder="Search" 
                              name="email"  
                              onChange={handleOnChange} 
                            />
                            <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">Official Email<span className="text-danger">*</span></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="employee-information-form mb-4">
                    <h4 className="text-info">Work Information  <i className="uil uil-lock-open-alt text-success me-1" /> </h4>
                    <div className="bg-white px-3 py-4 rounded">
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input 
                              type="text" 
                              className="form-control" 
                              value={inputValues.Id} 
                              name="Id" 
                              id="floatingInput" 
                              placeholder="Search"  
                              onChange={handleOnChange}
                              />
                            <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">Employee Id</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating position-relative">
                            <select className="form-control select2 shadow" data-toggle="select2" id="employee-status" onChange={handleStatus}>
                              <option>Active</option>
                              <option>Inactive</option>
                            </select>
                            <a href="#" className="position-absolute remove-filled-input">
                              <i className="uil uil-times text-muted fs-3" />
                            </a>
                            <label htmlFor="employee-status" className="text-info  d-inline-block px-1">Employee Status</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="field form-floating mb-0">
                            <input 
                              className="form-control" 
                              type="date" 
                              name="date" 
                              id="floatingInput" 
                              />
                            <label htmlFor="date" className="text-info  d-inline-block px-1">Date of Joining</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating position-relative">
                             {/* <select className="form-control select2 shadow" data-toggle="select2" id="employee-type">
                            {jobContract.map((u,i)=>
                              <option key={i}>{u.name}</option>
                              )}
                            </select>  */}
                       
                             <SelectSearch  
                               inputId="employee-type"   
                               filterOptions={fuzzySearch} 
                               onChange={handleJobContract} 
                               search 
                               emptyMessage="Not found" 
                               options={jobContract}  
                               name="jobContract" 
                               placeholder="Choose your employee-type" 
                               />   
                            
                             {/* <a href="#" className="position-absolute remove-filled-input">
                              <i className="uil uil-times text-muted fs-3" />
                            </a>
                            <label htmlFor="employee-type" className="text-info  d-inline-block px-1">Employee Type</label> */}
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating position-relative">
                          <SelectSearch    
                            filterOptions={fuzzySearch} 
                            onChange={handleAddTeam} 
                            search 
                            emptyMessage="Not found" 
                            options={additionalTeams}  
                            name="jobContract" 
                            placeholder="Choose your additional teams" 
                            />   
                            {/* <select className="form-control select2 shadow" data-toggle="select2" >
                            {additionalTeams.map((u,i)=>
                            <option key={i} >{u.name}</option>
                            )}
                            </select> */}
                            <label htmlFor="department" className="text-info  d-inline-block px-1">Additional Teams</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="field form-floating mb-0">
                            <input 
                              className="form-control" 
                              type="text" 
                              name='designationTitle' 
                              value={inputValues.designationTitle} 
                            />
                            <label htmlFor="department" className="text-info  d-inline-block px-1">Designation of Title</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                          <SelectSearch    
                           filterOptions={fuzzySearch} 
                           onChange={handleUnit} 
                           search 
                           emptyMessage="Not found" 
                           options={bussinessUnit}  
                           name="branch" 
                           placeholder="Choose your unit" 
                           />  
                            {/* <select className="form-control select2 shadow" data-toggle="select2" id="business">
                              <option>Type of Search</option>
                              &lt;
                            </select> */}
                            <label htmlFor="business" className="text-info  d-inline-block px-1">Business Unit</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating position-relative ">
                          <SelectSearch    
                           filterOptions={fuzzySearch} 
                           onChange={handleBranch} 
                           search 
                           emptyMessage="Not found" 
                           options={branch}  
                           name="branch" 
                           placeholder="Choose your branch" 
                           />   
                            {/* <select className="form-control select2 shadow" data-toggle="select2" id="branch">
                              <option> Branch office</option>
                         
                            </select> */}
                            <a href="#" className="position-absolute remove-filled-input">
                              <i className="uil uil-times text-muted fs-3" />
                            </a>
                            <label htmlFor="branch" className="text-info  d-inline-block px-1">Office Location</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                          <SelectSearch    
                           filterOptions={fuzzySearch} 
                           onChange={handleSubDept} 
                           search 
                           emptyMessage="Not found" 
                           options={subDepartment}  
                           name="sub-department" 
                           placeholder="Choose your Sub-Department" 
                           />  
                            {/* <select className="form-control select2 shadow" data-toggle="select2" id="sub-department">
                              <option>Type of Search</option>
                              &lt;
                            </select> */}
                            <label htmlFor="sub-department" className="text-info  d-inline-block px-1">Sub department</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            {/* <select className="form-control select2 shadow" data-toggle="select2" id="team">
                            {primaryTeam.map((u,i)=>
                              <option key={i}>{u}</option>
                              )}
                        
                            </select> */}
                             <SelectSearch    
                               filterOptions={fuzzySearch} 
                               onChange={handlePrimaryTeam} 
                               search 
                               emptyMessage="Not found" 
                               options={primaryTeam}  
                               name="primaryTeam" 
                               placeholder="Choose your primary teams" 
                               />
                            <label htmlFor="team" className="text-info  d-inline-block px-1">Primary Team</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <select className="select2 form-control select2-multiple shadow" data-toggle="select2" multiple="multiple" data-placeholder="Search/ Add new" id="tearm">
                              <option>Business </option>
                              <option>  Corporate Marketing</option>
                              <option>   Customer Success</option>
                              <option>  Digital Marketing</option>
                              <option>  Field Sales</option>
                              <option> HR Operations</option>
                              <option> Inbound Sales</option>
                              <option> Office Administration</option>
                              <option> Operations</option>
                              <option> Talent Acquisition</option>
                            </select>
                            <label htmlFor="team" className="text-info  d-inline-block px-1">Primary Team</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                          <SelectSearch    
                             filterOptions={fuzzySearch} 
                             onChange={handleLevel} 
                             search 
                             emptyMessage="Not found" 
                             options={level}  
                             name="level" 
                             placeholder="Choose your Level" 
                             /> 
                            {/* <select className="form-control select2 shadow" data-toggle="select2" id="level">
                             
                              <option>  PM6</option>
                            </select> */}
                            <label htmlFor="level" className="text-info  d-inline-block px-1">Level</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating position-relative">
                          <SelectSearch     
                            filterOptions={fuzzySearch} 
                            onChange={handleCost} 
                            search 
                            emptyMessage="Not found" 
                            options={costCenter}  
                            name="cost" 
                            placeholder="Choose your Cost Center" 
                            /> 
                            {/* <select className="form-control select2 shadow" data-toggle="select2" id="cost">
                              <option>Costcenter1</option>
                              <option>Costcenter2</option>
                            </select> */}
                            {/* <a href="#" className="position-absolute remove-filled-input" ata-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-trigger="hover" data-bs-original-title="Clear">
                              <i className="uil uil-times text-muted fs-3" />
                            </a>
                            <label htmlFor="cost" className="text-info  d-inline-block px-1">Cost Center</label> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="employee-information-form mb-4">
                    <h4 className="text-info">Additional Work Information  <i className="uil uil-lock-open-alt text-success me-1" /> </h4>
                    <div className="bg-white px-3 py-4 rounded">
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating position-relative">
                            <select className="form-control select2 shadow" data-toggle="select2" id="shift" onChange={handleShift} value={shift}>
                              <option>Day Shift</option>
                              <option>Night Shift</option>
                            </select>
                            <a href="#" className="position-absolute remove-filled-input">
                              <i className="uil uil-times text-muted fs-3" />
                            </a>
                            <label htmlFor="shift" className="text-info  d-inline-block px-1">Shift</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input 
                              type="text" 
                              className="form-control" 
                              value={inputValues.idCardNumber} 
                              onChange={handleOnChange} 
                              id="floatingInput" 
                              placeholder="Card Number" 
                              />
                            <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">Id card Number</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="field form-floating mb-0">
                            <input 
                               className="form-control" 
                               type="date" 
                               name="probation_startDate" 
                               onChange={handleOnChange} 
                               value={inputValues.probation_startDate} 
                               id="floatingInput" 
                               placeholder="Probation Start Date" 
                               />
                            <label htmlFor="date" className="text-info  d-inline-block px-1">Probation Start Date</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="field form-floating mb-0">
                            <input 
                              className="form-control" 
                              type="date" 
                              name="probation_endDate" 
                              onChange={handleOnChange} 
                              value={inputValues.probation_endDate} 
                              id="floatingInput" 
                              placeholder="Probation End Date" 
                              />
                            <label htmlFor="date" className="text-info  d-inline-block px-1">Probation End Date</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="employee-information-form mb-4">
                    <h4 className="text-info">Work Contact Details  <i className="uil uil-lock-open-alt text-success me-1" /> </h4>
                    <div className="bg-white px-3 py-4 rounded">
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input 
                              type="text" 
                              className="form-control" 
                              value={inputValues.workStationNumber} 
                              onChange={handleOnChange} 
                              id="Workstation" 
                              name='workStationNumber' 
                              placeholder="Workstation" 
                            />
                            <label htmlFor="Workstation" className="text-info  d-inline-block px-1">Workstation Number</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex">
                            <div className="btn-group justify-content-sm-end ">
                              {/* <button type="button" className="border bg-white dropdown-toggle rounded border-end-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Office Ext
                                <span className="visually-hidden">Toggle Dropdown</span>
                              </button> */}
                              <select className="form-control select2 shadow" data-toggle="select2" id="shift"  onChange={handleContactType}>
                              <option>Mobile </option>
                              <option>Office Ext.</option>
                              <option>Others</option>
                              <option> Work</option>
                            </select>
                              {/* <ul className="dropdown-menu  topbar-dropdown-menu shadow" aria-labelledby="dropdownMenuButton" data-popper-placement="bottom-end" onClick={handleContactType}>
                                <li className="dropdown-item"> <a href="#"> Mobile </a></li>
                                <li className="dropdown-item"> <a href="#"> Office Ext. </a></li>
                                <li className="dropdown-item"> <a href="#"> Others </a></li>
                                <li className="dropdown-item"> <a href="#"> Work </a></li>
                              </ul> */}
                            </div>
                            <input
                              //autoFocus
                              type="tel"
                              id="MobileNo"
                              name="mobileNo"
                              placeholder="Contact Number"
                              value={inputValues.mobileNo}
                            onChange={handleOnChange}
                              className="form-control"
                            />
                            {/* <i className="uil uil-plus-circle fs-3 ms-1 text-success" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="employee-information-form mb-4">
                    <div className="d-flex align-items-center">
                      <h4 className="text-info me-2">Reporting Information 
                        <a className data-bs-toggle="tooltip" data-bs-html="true" title="<b>Visible to </b>all <br> <b>Editable by</b> hr">
                          <i className="uil uil-lock-open-alt text-success me-1" />
                        </a>
                      </h4>
                      <input 
                        type="checkbox" 
                        id="switch3" 
                        defaultChecked 
                        data-switch="success" 
                        />
                      <label htmlFor="switch3" className="border me-1" data-on-label data-off-label />
                      Doesn't report to anyone
                    </div>
                    <div className="bg-white px-3 py-4 rounded">
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <select className="form-control select2 shadow" data-toggle="select2" id="report" onChange={handleReport}>
                            <option>select</option>
                              {reportingManager.map((u,i)=>
                              <option>{u.name}</option>
                              )}
                              &lt;
                            </select>
                            <label htmlFor="report" className="text-info  d-inline-block px-1">Reporting Manager</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-3">
                        <div className="col-md-12">
                          <div className="form-floating">
                            <textarea 
                             className="form-control resize-none" 
                             placeholder="Search" 
                             value={inputValues.managerText} 
                             name="managerText" 
                             onChange={handleOnChange} 
                             />
                            <label htmlFor="report" className="text-info  d-inline-block px-1">Additional Manager</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <select className="form-control select2 shadow" data-toggle="select2" id="partner" onChange={handlePartner}>
                              <option>Type of Search</option>
                              <option>Type of Search</option>
                              &lt;
                            </select>
                            <label className="text-info  d-inline-block px-1">Hr Partner</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-3">
                        <div className="col-md-12">
                          <div className="form-floating">
                            <textarea 
                              className="form-control resize-none" 
                              placeholder="Search" 
                              value={inputValues.hrPartnerText} 
                              name="hrPartnerText" 
                              onChange={handleOnChange} 
                              />
                            <label className="text-info  d-inline-block px-1">Additional Hr partner</label>
                          </div>
                        </div>
                      </div> 
                    </div>
                  </div>
                  <div className="employee-information-form mb-4">
                    <h4 className="text-info">EEO Information  <i className="uil uil-lock-open-alt text-success me-1" /> </h4>
                    <div className="bg-white px-3 py-4 rounded">
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating position-relative">
                            {/* <select className="form-control select2 shadow" data-toggle="select2" id="ethnicity" onChange={handleEthnicity}>
                             
                              <option>
                                American Indian or Alaska Native (Not Hispanic or Latino)
                              </option>
                         
                            </select> */}
                             <SelectSearch     
                               filterOptions={fuzzySearch} 
                               onChange={handleEthnicity} 
                               search 
                               emptyMessage="Not found" 
                               options={eth}  
                               name="eth" 
                               placeholder="Choose your Ethnicity" 
                               /> 
                            <label htmlFor="ethnicity" className="text-info  d-inline-block px-1">Ethnicity</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating position-relative">
                          <SelectSearch     
                             filterOptions={fuzzySearch} 
                             onChange={handlJobCategory} 
                             search 
                             emptyMessage="Not found" 
                             options={jobCategory}  
                             name="jobCategory" 
                             placeholder="Choose your Job Category" 
                             /> 
                            {/* <select className="form-control select2 shadow" data-toggle="select2" id="eeo">
                              <option>
                                Executive/Senior Level Managers
                              </option>
                              <option>
                                First/Mid Level Managers
                              </option>
                              <option>
                                Professionals
                              </option>
                              <option>
                                Technicians
                              </option>
                              <option>
                                Sales Workers
                              </option>
                              <option>
                                Administrative/Support Workers
                              </option>
                              <option>
                                Craft Workers
                              </option>
                              <option>
                                Operatives
                              </option>
                              <option>
                                Service Workers
                              </option>
                              <option>
                                Service Workers
                              </option>
                            </select>
                            <label htmlFor="eeo" className="text-info  d-inline-block px-1">EEO Job Category</label> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="employee-information-form mb-4">
                    <h4 className="text-info">Notice Period Information  <i className="uil uil-lock-open-alt text-success me-1" /> </h4>
                    <div className="bg-white px-3 py-4 rounded">
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input 
                               type="text" 
                               className="form-control" 
                               defaultValue 
                               id="notice-period" 
                               placeholder="notice period" 
                               />
                            <label htmlFor="floatingInput" className="text-info  d-inline-block px-1">Notice Period Duration</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="field form-floating mb-0">
                            <input 
                              className="form-control" 
                              type="date" 
                              name="date" 
                              id="startdate" 
                              placeholder="Probation Start Date" 
                              />
                            <label htmlFor="date" className="text-info  d-inline-block px-1">Notice period Start Date</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="field form-floating mb-0">
                            <input 
                              className="form-control" 
                              type="date" 
                              name="date" 
                              id="enddatet" 
                              placeholder="Probation End Date" 
                              />
                            <label htmlFor="date" className="text-info  d-inline-block px-1">Notice period Start Date</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="employee-information-form mb-4">
                    <h4 className="text-info">Termination Date  <i className="uil uil-lock-open-alt text-success me-1" /> </h4>
                    <div className="bg-white px-3 py-4 rounded">
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="field form-floating mb-0">
                            <input 
                              className="form-control" 
                              type="date" 
                              name="date" 
                              id="startdate" 
                              placeholder="Probation Start Date" 
                              />
                            <label htmlFor="date" className="text-info  d-inline-block px-1">Terminating Date</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating position-relative">
                            <select className="form-control select2 shadow" data-toggle="select2" id="category">
                              <option>             
                                Resignation
                              </option>
                              <option>
                                Retirement
                              </option>
                              <option>
                                Involuntary  
                              </option>
                              <option>
                                End of Contract  
                              </option>
                              <option>
                                Death  
                              </option>
                              <option>
                                Abandonment  
                              </option>
                            </select>
                            <a href="#" className="position-absolute remove-filled-input">
                              <i className="uil uil-times text-muted fs-3" />
                            </a>
                            <label htmlFor="category" className="text-info  d-inline-block px-1">Termination Category</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mx-0 mb-3">
                        <div className="col-md-6">
                          <div className="field form-floating mb-0">
                            <textarea 
                             className="form-control" 
                             defaultValue={""} 
                             />
                            <label htmlFor="date" className="text-info  d-inline-block px-1">Termination Reason</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="employee-information-form mb-4">
                    <h4 className="text-info">Freshteam Roles   <i className="uil uil-lock-open-alt text-success me-1" /> </h4>
                    <div className="bg-white px-3 py-4 rounded">
                      <div className="row mx-0 mb-3">
                        <div className="col-md-3">
                          <h4>Associated Roles <span className>*</span></h4>
                        </div>
                        <div className="col-md-9">
                          <div className="d-flex mb-2">
                            <i className="uil uil-minus-circle fs-3 text-danger disabled cursor-not-allowed me-2" />
                            <div>
                              <h5 className="mt-1 py-0 mb-1">Employee</h5>
                              <p className="text-muted">Can View limited set of information of other Employees, Request timeoff, View company job postings and Refer a candidate to an Organisation.
                              </p>
                            </div>
                          </div>
                          <div>
                            <a href="#" className="d-flex" data-bs-toggle="modal" data-bs-target="#associate-role">
                              <i className="uil uil-plus-circle fs-3 text-primary me-2" />
                              <h5 className="mt-1 py-0 mb-1 text-primary">Associate Roles</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>          
              <div className="tab-pane" id="personal">
               
                <PersonalInfo/>

              </div>
              <div className="tab-pane" id="employment-education">
                Employment &amp; Education
              </div>
              <div className="tab-pane" id="compensation">
                Compensation
              </div>
            </div>
            <div className="col-lg-3  text-info  right-content-bar border-left">
              <h4>Manage Employees</h4>
              <p>This page lists all of the employees who are currently a part of your organization. You can edit employee information and add new hires using the "Add New" button. You can also choose to import employees through a CSV file. Employees you add will receive an automatic confirmation email to activate their account, after which they can access the portal to view the employee directory and any open job postings.
              </p>
              <p><b>Pro tip:</b> If you convert a recent hire to employee from Freshteam, the system will auto-populate most of the personal and employment data from the resume and offer information.
              </p>
              <h4>Export Data</h4>
              <p>Generate a CSV file containing all of your employee information.
              </p>
            </div>
          </div>
          {/*/company form*/}
        </div>
      </div>
      {/**/}
    </div>
    {/**/}
  </div>
  {/**/}
  <Role/>
  
</div>
   
        </>
    )
}

export default EditEmployee
