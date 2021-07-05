
import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from '../../common/axios'
function JobDesc({data}) {
  const[sk,setSk]=useState('')
  const[tk,setTk]=useState('')
  const[state,setState]=useState({
    job_description:'',
    job_title:'',
    _id:'',
    skills:''
  })
  const[dept,setDept]=useState([])
  const[titleEnable,setTitleEnable]=useState(false)
  const[dName,setDName]=useState('')
  const[bool,setBool]=useState(false)
  const[bool1,setBool1]=useState(false)
 
useEffect(()=>{
  if(data)
  {
    setState(data)
    console.log(data)
    setSk(data.skills)
    setTk(data.job_title)
    //let d=data.job_description.replace(/^"(.*)"$/, '$1')
   // setState1({...state,['job_description']:d})
    setDept(data.department)  
  }
 
},[data])

const editTitle=()=>{
  setTitleEnable(true)
}

const handleEditSubmit=(e)=>{
  let token=localStorage.getItem('login')
  console.log(state._id)
  e.preventDefault();
  let data={
    job_title:state.job_title
  }
  axios.patch(`job/${state._id}`,data,{
    headers: {
      'Authorization': 'Bearer '+ token
   }
  }).then((res)=>{
   
  setState({...state,['job_title']:res.data.update.job_title})
  }).catch((err)=>console.log(err))
  setTitleEnable(false)
}

const clickCancel=()=>{
  setState({...state,['job_title']:tk})
  setTitleEnable(false)
}

const titleEdit=(e)=>{
  setState({...state,[e.target.name]:e.target.value})
}

const handleText=(e,editor)=>{
  setState({...state,['job_description']:editor.getData()})
  //setText(editor.getData())
}

const editDesc=()=>{
  setBool(true)
}

const handleSave=(e)=>{
  let token=localStorage.getItem('login')
  e.preventDefault();
  let data={
    job_description:state.job_description
  }
  axios.patch(`job/${state._id}`,data,{
    headers: {
      'Authorization': 'Bearer '+ token
   }
  }).then((res)=>{
   
  setState({...state,['job_description']:res.data.update.job_description})
  }).catch((err)=>console.log(err))
  setBool(false)
}


const Cancel=(e)=>{

  setBool(false)
}

const changeSkills=(e)=>{
  console.log(e.target.value)
  setState({...state,[e.target.name]:e.target.value})
}

const handleOk=(e)=>{
  let token=localStorage.getItem('login')
  e.preventDefault();
  let data={
    skills:state.skills
  }
  axios.patch(`job/${state._id}`,data,{
    headers: {
      'Authorization': 'Bearer '+ token
   }
  }).then((res)=>{
   console.log(res.data.update)
  setState({...state,['skills']:res.data.update.skills})
  }).catch((err)=>console.log(err))
  setBool1(false)
}

const editSkill=()=>{
  setBool1(true)
}
const handleCross=()=>{

  setState({...state,['skills']:sk})
  setBool1(false)
}

 return (
        <>
       
       <div className="col-md-8 mb-2">
  <div className="d-block bg-white h-100 rounded p-3">
    <div className="">
      <h4 className="mt-0">Job Title</h4>
      {!titleEnable?
      <div className="row users-select position-relative cursor-pointer">
        
         <h5  className="my-3">{state.job_title}</h5> 
        <div className="action-module">
          <a onClick={editTitle} href="#" className="d-block" >
            <i   className="dripicons-pencil mdi-24px d-inline-block align-middle me-1" />
          </a>
        </div>
      </div>:
         <ul className="list-group py-2">
         <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row">
                        <div className="col-lg-12">
                          <input type="text" className="border-0 w-100 bg-transparent" name="job_title" value={state.job_title} onChange={titleEdit}/>
                        </div>
                       
                      </div>
                     
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <span>
                          <i onClick={handleEditSubmit} className="uil uil-check align-middle me-1 align-middle text-success fs-3 " />
                          <i onClick={clickCancel} className="uil uil-times text-danger align-middle fs-3" />
                        </span>
                      </div>
                    </div>
                  </li>
                  </ul>}
    </div>
    <div className="edit-field">
      <div className="action-buttons">
        <div className="spot-action-buttons align-items-center">
          <a onClick={editDesc} aria-label="Edit" className="p-1">
            <i className="dripicons-document-edit" />
          </a>
        </div>
      </div>
      <h4> Job Description </h4>
      {!bool?
      <>
       <span dangerouslySetInnerHTML={{__html:state.job_description}}>
      </span> 
      <ul style={{listStyleType: 'bullet'}}>
        <p> Job Responsibilities </p>
        <li>Understanding requirements from functional specifications received in requirement document </li>
        <li>Performing analysis with design &amp; development of the project and creating technical specifications based on functional requirements </li>
        <li> Designing, building, and maintaining efficient, reusable, and reliable code </li>
        <li>Creating unit tests according to the test plans </li>
        <li> Ensuring the best possible performance, quality, and responsiveness of applications </li>
        <li> Identifying bottlenecks and devising solutions to mitigate and address these issues </li>
        <li>Maintaining code quality, organization, and automatization </li>
        <li>Hands-on experience with ASP.NET, .NET Framework &amp; MVC </li>
        <li> Strong understanding of object-oriented programming </li>
        <li> Familiar with various design and architectural patterns</li>
        <li> Knack for writing clean, readable, and easily maintainable code </li>
        <li> Strong proficiency with Microsoft SQL Server and writing SQL Queries </li>
        <li> Web development technologies such as HTML 5, CSS, JavaScript libraries such as jQuery, extJS etc.</li>
        <li> Working on Angular is a plus Understanding Design pattern &amp; Microservices is a big plus</li>
      </ul>
      <a href="#" className="text-info"> View More </a>
</>
    :    <div>
          <button className="btn btn-primary save" onClick={handleSave}> save</button>
          <button className="btn btn-secondary  m-2" onClick={Cancel}>cancel</button>
             <CKEditor
                editor={ ClassicEditor }
                onChange={handleText}
                data={state.job_description}      
            />
       </div>
    }
    </div>
    <div className="edit-field">
      <div className="action-buttons">
        <div className="spot-action-buttons align-items-center">
          <a onClick={editSkill} aria-label="Edit" className="p-1">
            <i className="dripicons-document-edit" />
          </a>
        </div>
      </div>
      <h4> Skills </h4>
      {!bool1?
      <p> {state.skills}</p>
      :
      <ul className="list-group py-2">
      <li className="list-group-item list-group-item-action position-relative">
                 <div className="show-btns">
                   <div className="row">
                     <div className="col-lg-12">
                       <input 
                        type="text" 
                        className="border-0 w-100 bg-transparent" 
                        name="skills" 
                        value={state.skills} 
                        onChange={changeSkills}
                        />
                     </div>
                    
                   </div>
                  
                   <div className="hover-btns position-absolute" id="tooltip-container2">
                     <span>
                       <i onClick={handleOk} className="uil uil-check align-middle me-1 align-middle text-success fs-3 " />
                       <i onClick={handleCross} className="uil uil-times text-danger align-middle fs-3" />
                     </span>
                   </div>
                 </div>
               </li>
               </ul>
      }
    </div>
  </div>
</div>
{/* )} */}
        </>
    )
}

export default JobDesc
