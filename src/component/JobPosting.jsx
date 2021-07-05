import React, { useEffect, useState } from 'react'
import Navigation from '../common/Navigation'
import Topbar from '../common/Topbar'
import data from '../JobData.json'
import curr from '../Currency1.json'
import axios from '.././common/axios.js'
import SelectSearch from 'react-select-search';
import './jobPosting.css'
import fuzzySearch from './FuzzySearch'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from "./dropdown"
function JobPosting() {

//   const options = [
//     {name: 'Business Development', value: 'Business Development'},
//     {name: 'Designing', value: 'Designing'},
//     {name:'Finance',value:'Finance'}
    
// ];
const[skills,setSkills]=useState('')
const[options,setOption]=useState([])
const[options1,setOption1]=useState([])
const[language,setLanguage]=useState(data.language)
  const[success,setSuccess]=useState(false)
  const[currencyData,setCurrencyData]=useState(curr)
  const [dept,setDept]=useState()
  const[job,setJob]=useState(data.Job)
  const[exp,setExp]=useState(data.Exeperience)
  const [jobTitle,setJobTitle]=useState('')
  const [jobName,setJobName]=useState('')
  const[jobType,setJobType]=useState('')
  const[experience,setExperience]=useState('')
  const[location,setLocation]=useState('Chandigarh, India')
  const[lang,setLang]=useState('')
  const[remote,setRemote]=useState(false)
  const[minsalary,setMinSalary]=useState('')
  const[maxSalary,setMaxSalary]=useState('')
  const[currency,setCurrency]=useState('')
  const[text,setText]=useState('')
  const[allow,setAllow]=useState(false)
const[jobTitleError,setJobTitleError]=useState('')
const[jobNameError,setJobNameError]=useState('')
const[jobTypeError,setJobTypeError]=useState('')
const[minSalaryError,setMinSalaryError]=useState('')
const[currencyError,setCurrencyError]=useState('')
const[expError,setExpError]=useState('')
const[landError,setLangError]=useState('')
const[maxSalaryError,setMaxSalaryError]=useState('')
let token=localStorage.getItem('login')

const[skillsError,setSkillsError]=useState('')

useEffect(()=>{
  axios.get('department',{
    headers: {
      'Authorization': 'Bearer '+ token
   }
  }).then((res)=>{
    
  setDept(res.data.results)
  res.data.results.map((u,i)=>{
     setOption(prevItems => [...prevItems,
      {name:u.department_name,value:u._id,index:i}
          ]);
  })
  }).catch((err)=>{
    console.log(err)
  })
  },[])


  useEffect(()=>{
    axios.get('category',{
      headers: {
        'Authorization': 'Bearer '+ token
     }
    }).then((res)=>{
      
    //setDept(res.data.results)
    res.data.map((u,i)=>{
       setOption1(prevItems => [...prevItems,
        {name:u.category,value:u._id,index:i}
            ]);
    })
    }).catch((err)=>{
      console.log(err)
    })
    },[])
  
  
const handleSkills=(e)=>{
  setSkills(e.target.value)
}

const handleAllow=()=>{
  setAllow(!allow)
}


  const handleTitle=(e)=>{
    if(e.target.value.length<3 && e.target.value!=='')
    {
      setJobTitleError('must be greater than 3 letter')
    }
     else if(e.target.value==='')
    {
      setJobTitleError('')
    }
    else
    {
      setJobTitleError('')
      setJobTitle(e.target.value)
    }
  
  }
  // const handleDept=(e)=>{
  
  //  setJobName(e)
  // }

  const handleJob=(e)=>{
  
    setJobType(e)
  }

  const handleExp=(e)=>{
   // console.log(e.target.value)
  setExperience(e)
  }
  
const handleLocation=(e)=>{
  
  setLocation(e.target.value)
}

const handleCat=(e)=>{
 
  setLang(e)
}
const handleRemote=(e)=>{
//  console.log(e.target.value)
  setRemote(!remote)
}

const handleMinSalary=(e)=>{
  setMinSalary(e.target.value)
}
const handleMaxSalary=(e)=>{
  setMaxSalary(e.target.value)
}

const handleCurrency=(e)=>{

  setCurrency(e.target.value)
}

const handleText=(e,editor)=>{
  
  setText(editor.getData())

}

  const handleSubmit=async(e,p)=>{
let token=localStorage.getItem('login')

    e.preventDefault()
    let data={
      job_title:jobTitle,
      department:jobName.value,
      job_type:jobType.name,
      experience:experience.value,
      remote_job:remote,
      category:lang.value,
      currency,
      min_sal:minsalary,
      max_sal:maxSalary,
      branch:location,
      job_description:text,
      allow_employees:allow,
      publish:p,
      skills:skills
    }
    console.log(data)
    if(!validation()){
   await axios.post('/job',data,{
    headers: {
      'Authorization': 'Bearer '+ token
   }
   }).then((res)=>{
     setSuccess(true)
     setJobTitle('')
     setMaxSalary('')
     setMinSalary('') 
     setLang('')
     setJobType('')
     setSkills('')
     setDept('')
     setCurrency('')
      toast.success('Job Successfully added')                                          
      //console.log(res)
    }).catch((err)=>{
      setSuccess(false)
      toast.error("something went wrong")
      //console.log(err)
    })
   
    }

  }

  const validation=()=>{
    if(jobTitle.length===0)
    {
      setJobTitleError('This field is required')
    }
    if(skills.length===0)
    {
      setSkillsError("This field is required")
    }
  if(jobName==='Department' || jobName==='')
    {
      setJobNameError('please select department')
    }
     if(jobType==='JobType'|| jobType==='')
    {
      setJobTypeError('please select jobType')
    }
    if(currency==='Currency' || currency==='')
    {
      setCurrencyError('please select currency')
    }
    if(experience==='Experience' || experience==='')
    {
      setExpError('please select experience')
    }
    if(lang==='')
    {
      setLangError("please select Category")
    }
    if(minsalary==='')
    {
      setMinSalaryError('This field is required')
    }
    if(maxSalary==='')
    {
      setMaxSalaryError('This field is required')
      return true
    }
    else
    {
      return false
    }
  }

    return (
        <>
         <ToastContainer />
       <div className="wrapper">
  <div id="leftside">
      <Navigation/>
      </div>
  <div className="content-page">
    <div className="navbar-custom">
    <div id="top-bar" >
            <Topbar/>
            </div>
      <div className="col-md-12">
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="#" className="font-600">Jobs</a></li>
            <li className="breadcrumb-item active font-600" aria-current="page">Add New</li>
          </ol>
        </nav>
      </div>
    </div>
    <div className="content">
      {success?<div className="alert alert-success text-center">Job Successfully Submitted</div>:""}
      <form >
      <div className="container-fluid bg-white pt-3 ">
        <div className="row justify-content-center ">
          <div className="col-lg-7 col-xs-12 col-sm-12 col-md-12">
            <h2 className="fw-light mb-4">What's the job you're hiring for?</h2>
            <input 
             type="text" 
             onChange={handleTitle} 
             className="form-control border-top-0 border-start-0 border-end-0 rounded-0 job-hiring h3 fw-light" 
             placeholder="Enter a new job title" />
            {jobTitleError?<p className="alert alert-danger">{jobTitleError}</p>:""}
            <div className="row">
              <div className="col-lg-6 mt-2">
              <div style={{width:200}}>
                <Dropdown 
                options={options} 
                prompt="select department...."
                value={jobName}
                onChange={val=>setJobName(val)}
                id="index"
                label="name"
                />
              </div>
              {/* <SelectSearch    
               filterOptions={fuzzySearch} 
               onChange={handleDept} 
               search 
               emptyMessage="Not found" 
               options={options}  
               name="language" 
               placeholder="Choose your department" />
                */}
                {/* <select className="form-control select2 shadow" data-toggle="select2" onChange={handleDept}>
                  <option >Department</option>
                  {dept.map((u,i)=>
                  <option key={i}>{u}</option>
                  )}
                </select> */}
                {jobNameError?<p className="alert alert-danger">{jobNameError}</p>:''}
              </div>
              {/*select department end*/}
              <div className="col-lg-6 mt-2">
              <div style={{width:200}}>
                <Dropdown 
                options={job} 
                prompt="select job-type...."
                value={jobType}
                onChange={val=>setJobType(val)}
                id="value"
                label="name"
                />
              </div>
              {/* <SelectSearch    
               filterOptions={fuzzySearch} 
               onChange={handleJob} 
               search 
               emptyMessage="Not found" 
               options={job}  
               name="job" 
               placeholder="Choose your jobType" /> */}
                {/*select job*/}
                {/* <select className="form-control select2 shadow" data-toggle="select2"  onChange={handleJob}>
                  <option>Job Type</option>
                    {job.map((u,i)=>
                     <option key={i}>{u}</option>
                    )}
                </select> */}
                {jobTypeError?<p className="alert alert-danger">{jobTypeError}</p>:""}
              </div>
              {/*select departmentjob end*/}
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/*select location*/}
                <div className="input-group mt-3">
                  <select className="form-select" id="inputGroupSelect01" onChange={handleLocation}>
                
                    <option >Chandigarh, India</option>
                    <option >Mohali, Punjab, India</option>
                  </select>
                  <label className="input-group-text" htmlFor="inputGroupSelect01">Add branch</label>
                  
                </div>
              </div>
              {/*select location*/}
              <div className="col-lg-6">
                {/*check mark*/}
                <div className="form-check mt-3">
                  <input type="checkbox" 
                  className="form-check-input" 
                  id="remote_job"
                  checked={remote}
                  name="remote"
                  onChange={handleRemote}/>
                  <label className="form-check-label font-weight-bold" htmlFor="remote_job">Mark as remote job</label>
                </div>
              </div>
              {/*check mark end*/}
            </div>
            <div className="row">
              {/*text area*/}
              <div className="form-group mt-3">
              <CKEditor
                editor={ ClassicEditor }
                onChange={handleText}
                />
                {/* <textarea id="simplemde1"  value={text} onChange={handleText} /> */}
                <p className="small font-weight-normal mt-2"><i className="uil uil-exclamation-circle" /> &nbsp; Videos embedded will not be displayed on any job board, create your job description appropriately. <a href="#" className="text-link"> More Details</a></p>
              </div>
            </div>
            {/*text are end*/}
            <div className="row">
              <div className="col-md-6 mt-3">
              <div style={{width:200}}>
                <Dropdown 
                options={options1} 
                prompt="select category...."
                value={lang}
                onChange={val=>setLang(val)}
                id="index"
                label="name"
                />
              </div>
              {/* <SelectSearch    
              filterOptions={fuzzySearch} 
              onChange={handleCat} 
              search 
              emptyMessage="Not found" 
              options={options1}  
              name="category" 
              placeholder="choose category" /> */}
                {/*multiple select form*/}
                {/* Multiple Select */}
                {/* <select className="select2 form-control select2-multiple shadow" data-toggle="select2" multiple="multiple" data-placeholder="Search/ Add new" onChange={handleLang}>
                  <option >CSS</option>
                  <option >Javascript</option>
                  <option >Bootstrap</option>
                  <option >HTML</option>
                  <option >Bulma</option>
                </select> */}

              </div>
              {/*multiple select form end*/}
              <div className="col-md-6 mt-3">
              <div style={{width:200}}>
                <Dropdown 
                options={exp} 
                prompt="select Experience...."
                value={experience}
                onChange={val=>setExperience(val)}
                id="index"
                label="name"
                />
              </div>
              {/* <SelectSearch    
              filterOptions={fuzzySearch} 
              onChange={handleExp} 
              search 
              emptyMessage="Not found" 
              options={exp}  
              name="exp" 
              placeholder="Choose your Experience" /> */}
                {/*select level*/}
                {/* <select className="form-control select2 shadow" data-toggle="select2" onChange={handleExp}>
                  <option>Experience</option>
                 {exp.map((u,i)=>
                   <option key={i}>{u}</option>
                 )}
                </select> */}
                {expError?<p className="alert alert-danger">{expError}</p>:""}
              </div>
              {/*select level end*/}
            </div>
            <div className="row align-items-end">
              {/*select salary and currency*/}
              <div className="col-md-4">
                <div className="mt-3">
                  <input type="number" 
                  id="simpleinput" 
                  className="form-control" 
                  placeholder="Min Salary" 
                  value={minsalary} 
                  onChange={handleMinSalary} />
                </div>
                {minSalaryError?<p className="alert alert-danger">{minSalaryError}</p>:''}
              </div>
              <div className="col-md-4">
                <div className="mt-3">
                  <input 
                   type="number" 
                   id="simpleinput2" 
                   className="form-control" 
                   placeholder="Max Salary" 
                   value={maxSalary} 
                   onChange={handleMaxSalary} />
                </div>
                {maxSalaryError?<p className="alert alert-danger">{maxSalaryError}</p>:''}
              </div>
              <div className="col-md-4">
                <select className="form-control select2 mt-3 shadow" data-toggle="select2" onChange={handleCurrency}>
                  <option>Currency</option>
                  {currencyData.map((u,i)=>
                  <option key={i}>{u.value}</option>
                  )}
                 
                </select>
                {currencyError?<p className="alert alert-danger">{currencyError}</p>:""}
              </div>
            </div>
            {/*select salary and currency end*/}
            <div className="row pl-3">
              {/*toggle btn*/}
              <div className="form-check form-switch mt-3">
                <input 
                 type="checkbox" 
                 className="form-check-input" 
                 id="customSwitch1" 
                 onChange={handleAllow} 
                 checked={allow} />
                <label className="form-check-label" htmlFor="customSwitch1">Allow employees to apply</label>
              </div>
              <div className="mt-3">
                  <input 
                   type="text" 
                   id="simpleinput2" 
                   className="form-control" 
                   placeholder="Skills"             
                   value={skills} 
                   onChange={handleSkills} />
                </div>
                {skillsError?<p className="alert alert-danger">{skillsError}</p>:""}
            </div>
            {/*toggle btn end*/}
            <div className="row my-3">
              {/*action btns*/}
              <div className="col">
                {/*spacer*/}
              </div>
              <div className="col-lg-8">
                <div className="d-flex justify-content-around flex-wrap">
                  <button type="button" className="btn btn-clear">Cancle</button>
                  <button type="button" className="btn btn-outline-secondary">Save &amp; continue later</button>
                  <button type="button" className="btn btn-outline-secondary">Preview</button>
                  <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <div className="btn-group dropup" role="group">
                      <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-earth-plus" aria-hidden="true" /> &nbsp; Publish</button>
                      <ul className="dropdown-menu p-2 shadow" aria-labelledby="btnGroupDrop1">
                        <li>
                          <a className="dropdown-item " href="#" onClick={(e)=>handleSubmit(e,"true")}>
                            <label htmlFor="publish"><i className="mdi mdi-earth-plus" aria-hidden="true" /> <span className="font-weight-bold"> Publish </span></label>
                            <p className="mt-1 font-weight-normal">Visible on your career and employee portal</p>
                          </a>
                        </li>
                        <hr className="m-0" />
                        <li>
                          <a className="dropdown-item" href="#!" >
                            <label htmlFor="Internal">
                              <i className="mdi mdi-office-building" aria-hidden="true" /> <span className="font-weight-bold"> Internal </span></label>
                            <p className="font-weight-normal mt-1">Visible on your career and employee portal</p>
                          </a>
                        </li>
                        <hr className="m-0" />
                        <li>
                          <a className="dropdown-item" href="#" onClick={()=>handleSubmit("false")}>
                            <label htmlFor="Private">
                              <i className="mdi mdi-lock" aria-hidden="true" /> <span className="font-weight-bold">Private </span></label>
                            <p className="font-weight-normal mt-1">Visible on your career and employee portal</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                {/*spacer*/}
              </div>
            </div>
            {/*action btns end*/}
          </div>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
 </>
    )
}

export default JobPosting
