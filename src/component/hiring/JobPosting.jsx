import React, { useState,useEffect } from 'react'
import departmentData from '../../Hiring.json'
import axios from '../../common/axios'
import jobData from '../../JobData.json'
import currencyData from '../../Currency1.json' 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function JobPosting({data}) {
  const[notify,setNotify]=useState(false)
     const[curr,setCurr]=useState(currencyData)
     const[exp,setExp]=useState(jobData.Exeperience)
    const[jobType,setJobType]=useState(jobData.JobDataType)
    const[jobBack,setJobBack]=useState(jobData.JobDataType)
    const[searchJobValue,setSearchJob]=useState('')
    const [department , setDepartment] = useState([])
    const[d,setD]=useState([])
    const[search,setSearch]=useState('')
    const [experience,setExperience] = useState(departmentData.experience)
    const [location,setLocation] = useState([])
    //const [jobType,setJobType] = useState(departmentData.jobType)
    const [salary , setSalary] = useState({minSalary:'',maxSalary:''})
    const [currency , setCurrency] = useState(departmentData.currency)
   // const[allow_employees,setAllowEmp]=useState(false)
  const[dName,setDeptName]=useState('')
  //const[remote_job,setRemote]=useState('')
  const[location_city,setLocationCity]=useState('')
  const[location_state,setLocationState]=useState('')
  const[deptState,setDeptState]=useState({
    _id:''
  })
  const[state1,setState1]=useState({
    _id:""
  })
  const[state,setState]=useState({
  remote_job:false,
  allow_employees:false,
  max_sal:"",
  min_sal:"",
  job_type:'',
  experience:"",
  currency:''

})


const handleCheckbox=(e)=>{
  const{value,name}=e.target;
  setState({...state,[name]:e.target.checked})
}
const handleChange=(e)=>{
  const{value,name}=e.target;
  console.log(value)
  setState({...state,[name]:value})
}

const searchJobType=(e)=>{
  console.log(jobType)
  setSearchJob(e.target.value)
  let data=jobBack.filter(u=>u.name.toLowerCase().includes(e.target.value))
  setJobType(data)
}

const handleClick=(name)=>{
  console.log(name)
  setDeptName(name)
  // let d={
  //   department_name:name
  // }
  // axios.put(`department/${deptState._id}`,d,{
  //   headers: {
  //     'Authorization': 'Bearer '+ token
  //  }
  // }).then((res)=>{

  // }).catch((err)=>{

  // })
}

useEffect(()=>{
  if(data)
  {
   if(data.department)
   {
    // setAllowEmp(data.allow_employees)
   // setRemote(data.remote_job)
   setState(data)
    data.department.map((u,i)=>{
      setDeptName(u.department_name)
      setDeptState(u)
      u.location.map((v,i)=>{
        setState1(v)
        setLocationCity(v.location_city)
        setLocationState(v.location_state)
        console.log(v)
      })
    })
  }
  }
},[data])


 useEffect(()=>{
    const token=localStorage.getItem('login')   
     axios.get('department',{
     headers: {
        'Authorization': 'Bearer '+ token
     }
    }).then((res)=>{
     setDepartment(res.data.results)
     setD(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
   },[])


   useEffect(()=>{
     const token=localStorage.getItem('login')
     axios.get('location',{
       headers: {
         'Authorization': 'Bearer '+ token
       }
      }).then((res)=>{
         setLocation(res.data.results)   
      }).catch((err)=>{
       console.log(err)
     })   
  },[])

  
const selectLocation=(city,st)=>{
  setLocationState(st)
  setLocationCity(city)
}



const searchDept=(e)=>{
  setSearch(e.target.value)
  let data=d.filter(u=>u.department_name.toLowerCase().includes(e.target.value))
  setDepartment(data)
}

const selectJob=(name)=>{
  setState({...state,['job_type']:name})
}


const handelCurrencyModal=(e)=>{
  e.preventDefault()
  console.log(state)
}

const handleExp=(name)=>{
  setState({...state,['experience']:name}) 
}

const submitForm=(e)=>{
  let token=localStorage.getItem('login')
  console.log(state._id)
 
  e.preventDefault();

   let d={
     department_name:dName
  }
   axios.put(`department/${deptState._id}`,d,{
     headers: {
      'Authorization': 'Bearer '+ token
   }
 }).then((res)=>{
 setNotify(true)
  setDeptName(res.data.department_name)
   }).catch((err)=>{
    console.log(err)
 })

  let locData={
    location_city,
    location_state
  }
axios.patch(`location/${state1._id}`,locData,{
  headers: {
    'Authorization': 'Bearer '+ token
 }
}).then((res)=>{
  setNotify(true)
 setLocationCity(res.data.location_city)
 setLocationState(res.data.location_state)
}).catch((err)=>console.log(err))


  let data={
    remote_job:state.remote_job,
    allow_employees:state.allow_employeesm,
    max_sal:state.max_sal,
    min_sal:state.min_sal,
    experience:state.experience,
    currency:state.currency,
    job_type:state.job_type
  }
  axios.patch(`job/${state._id}`,data,{
    headers: {
      'Authorization': 'Bearer '+ token
   }
  }).then((res)=>{
    setNotify(true)
  setState({...state,['remote_job']:res.data.update. remote_job})
  setState({...state,['allow_employees']:res.data.update. allow_employees})
  setState({...state,['max_sal']:res.data.update.max_sal})
  setState({...state,['min_sal']:res.data.update.min_sal})
  setState({...state,['currency']:res.data.update.currency})
  setState({...state,['experience']:res.data.update.experience})
  setState({...state,['job_type']:res.data.update.job_type})
  if(notify)
  {
    toast.success('sucessfully updated')
  }
  else{
    toast.warning('something went wrong')
  }

  }).catch((err)=>{console.log(err)
    if(notify)
    {
      toast.success('sucessfully updated')
    }
    else{
      toast.warning('something went wrong')
    }
  })
}

    return (
        <>
        <ToastContainer/>
           {/* <div className="col-md-4 mb-2 "> */}
  <div className="d-block w-100 bg-white p-3 rounded h-100">
    <h4> Job Posting Details </h4>
    <div className="users-select position-relative px-2 py-2 my-1 rounded  details-container">
      <label htmlFor="" className="text-body fw-normal"> Department </label>
     
      <h5 >{dName}</h5>
    
      <h5 className="mb-0">
        <div className="action-module">
          <div className="spot-action-buttons vertical-align ">
            <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="dripicons-pencil mdi-24px d-inline-block align-middle me-1" />
            </a>
            <div className="dropdown-menu p-0 " aria-labelledby="dropdownMenuButton1">
               <div className="p-2">
                <input 
                 className="ember-power-select-search-input form-control" 
                 onChange={searchDept} 
                 value={search} 
                 aria-controls="ember-power-select-options-ember2026" 
                 placeholder="Search" 
                 type="search" />
              </div> 
              <div className="p-2 overflow-scroll fix-dropdown">
                <ul >
                  {department && department.map((u,i)=>
                    <li key={i}>
                    <a   onClick={()=>handleClick(u.department_name)}>{u.department_name}</a>
                  </li>
                  )}
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </h5>
    </div>
    <div className="users-select position-relative px-2 py-1 my-1 rounded details-container">
      <label htmlFor="" className="text-body fw-normal"> Experience </label>
      <h5> {state.experience}</h5>
      <h5 className="mb-0">
        <div className="action-module">
          <div className="spot-action-buttons vertical-align ">
            <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="dripicons-pencil mdi-24px d-inline-block align-middle me-1" />
            </a>
            <div className="dropdown-menu p-0 " aria-labelledby="dropdownMenuButton2">
              <div className="p-2 overflow-scroll fix-dropdown">
                <ul>
                  {exp.map((u,i)=>
                  <li key={i} >
                    <a className="" name="experience" onClick={()=>handleExp(u.name)}>{u.name}</a>
                  </li>
                 )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </h5>
    </div>
    <div className="users-select position-relative px-2 py-1 my-1 rounded details-container">
      <label htmlFor="" className="text-body fw-normal"> Location </label>
      <h5> {location_city},{location_state}, India </h5>
      <h5 className="mb-0">
        <div className="action-module">
          <div className="spot-action-buttons vertical-align ">
            <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="dripicons-pencil mdi-24px d-inline-block align-middle me-1" />
            </a>
            <div className="dropdown-menu p-0 " aria-labelledby="dropdownMenuButton3">
            {/* <div className="p-2">
                <input className="ember-power-select-search-input form-control" onChange={searchLocation} value={searchLoc} aria-controls="ember-power-select-options-ember2026" placeholder="Search" type="search" />
              </div>  */}
              <div className="p-2 overflow-scroll fix-dropdown">
                <ul>
                  {location && location.map((u,i)=>
                  <li key={i} onClick={()=>selectLocation(u.location_city,u.location_state)}>
                    <a > {u.location_city},{u.location_state} </a>
                  </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </h5>
    </div>
    <div className="d-flex my-1">
      <div className="col-md-12 form-check position-relative p-0">
        <label className="form-check-label font-weight-bold" htmlFor="remote_job">Mark as Remote Job</label>
        <input 
         type="checkbox"
         name="remote_job"
         checked={state.remote_job}
         onChange={handleCheckbox} 
         className="form-check-input position-absolute start-50" 
         id="remote_job"
          />
        <div id="tooltip" className="position-absolute top-0 end-0">
          <button type="button" className="btn" data-bs-container="#tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" title=" Job title is marked as remote. As Job-boards mandate a location, default branch is chosen as location. You can add preferred locations to change it.">
            <i className="dripicons-information position-absolute top-0 me-0 font-13" /> 
          </button>
        </div>
      </div>
    </div>
    <div className="users-select position-relative px-2 py-1 mt-2 mb-1 rounded details-container">
      <label htmlFor="" className="text-body fw-normal"> Job Type </label>
      <h5> {state.job_type} </h5>
      <h5 className="mb-0">
        <div className="action-module">
          <div className="spot-action-buttons vertical-align ">
            <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="dripicons-pencil mdi-24px d-inline-block align-middle me-1" />
            </a>
            <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton4">
              <div className="p-2">
                <input 
                 className="ember-power-select-search-input form-control" 
                 onChange={searchJobType} 
                 value={searchJobValue} 
                 aria-controls="ember-power-select-options-ember2026" 
                 placeholder="Search" 
                 type="search" />
              </div>
              <div className="p-2 overflow-scroll fix-dropdown">
                <ul>
                  {jobType.map((u,i)=>
                  <li key={i} onClick={()=>selectJob(u.name)}>                                
                    <a>{u.name}</a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </h5>
    </div>
    <div className="users-select position-relative px-2 py-1 my-1 rounded details-container">
      <label htmlFor="" className="text-body fw-normal"> Salary details </label>
      <h5> {state.currency}: {state.min_sal} - {state.max_sal} </h5>
      <h5 className="mb-0">
        <div className="action-module">
          <div className="spot-action-buttons vertical-align ">
            <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="dripicons-pencil mdi-24px d-inline-block align-middle me-1" />
            </a>
            <div className="dropdown-menu p-0 d-block" style={{"right":"0"}} aria-labelledby="dropdownMenuButton5">
              <div className="p-2">
                <a className="dropdown-header ps-1 fw-bold mb-1" href="#"> Salary Details </a>
                <form >
                  <div className="row g-2">
                    <div className="mb-3 col-md-5 text-center">
                      <label htmlFor="" className="form-label">Min Salary</label>
                      <input 
                       type="number" 
                       value={state.min_sal}
                       name="min_sal"
                       onChange={handleChange}
                       className="form-control" id="" placeholder={400000} />
                    </div>
                    <div className="col-md-2 m-auto text-center">
                      to
                    </div>
                    <div className="mb-3 col-md-5 text-center">
                      <label htmlFor="" className="form-label">Max Salary</label>
                      <input 
                        type="number"
                        name="max_sal"
                        value={state.max_sal}
                        onChange={handleChange} 
                        className="form-control" 
                        id="" 
                        placeholder={700000} />
                    </div>
                  </div>
                  <div className="mb-3">
                    
                    <label htmlFor="" className="form-label"> Currency </label>
                    <select id="" className="form-select" name="currency" onChange={handleChange} >
                    {curr.map((u,i)=>
                      <option key={i}>{u.value}</option>
                      )}
                    </select>
                  </div>
                  <div className="text-end mb-1">
                    <button type="reset" className="btn"> Cancel </button>
                    <button type="submit" className="btn btn-primary" onClick={handelCurrencyModal}> Save </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </h5>
    </div>
    <div className="px-2 position-relative details-container">
      <div className="form-check form-switch p-0">
        <input 
         type="checkbox"
         name="allow_employees"
         checked={state.allow_employees} 
         onChange={handleCheckbox}
         className="form-check-input position-absolute start-50 ms-0" 
         id="customSwitch1" />
        <label className="form-check-label font-14" htmlFor="customSwitch1">Allow employees to apply</label>
      </div>
    </div>
    <button className="btn btn-primary" onClick={submitForm}>update</button>
  </div>
  <div className="align-content-end text-center bottom-text">
    <span className="text-muted text-center"> Created on : April 13th 2021 , at 3.47 pm (10 days ago) </span>
  </div>
        </>
    )
}

export default JobPosting
