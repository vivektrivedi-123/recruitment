import React, { useState } from 'react'
import Joi from 'joi-browser'
function JobDetails() {
  const[state,setState]=useState({
    job_title:"",
    department:"",
    sub_department:"",
    job_location:"",
    business_unit:"",
    level:"",
    team:"",
    joining_date:"",
    emp_type:"",
    reporting_manager:"",
    hr_manager:""
  })

  const[errors,setErrors]=useState({})

  const handleChange=(e)=>{
    const{value,name}=e.target;
    console.log(value)
    let res=validatePropery(name,value,schema)
    if(res)
    {
      setErrors(res)
    }
    else
    {
      setErrors('')
    }
    setState({...state,[name]:value})
  }


  const schema={
    job_title:Joi.string().required().label("Job Title"),


  }

  const validatePropery = (name, value, schema) => {
    const obj = {
        [name]: value
    };
    const fieldSchema = {
        [name]: schema[name]
    };
    //return result
    const result = Joi.validate(obj, fieldSchema);
    if(!result.error) return null;
    console.log(result)
  const errors={}
     
    for(let item of result.error.details)  errors[item.path[0]]=item.message;
    return errors;
    // result.error === null -> valid
  }
   const validate = () => {
    let option={abortEarly:false}
    const result = Joi.validate(state, schema,{
      abortEarly:false
    })
    if(!result.error) return null;
    console.log(result)
  const errors={} 
     
    for(let item of result.error.details)  errors[item.path[0]]=item.message;
    return errors;
  }  


    return (
        <>
          <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button bg-light collapsed font-600 fs-4 border-top-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Job Details
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <div className="mb-2">
                        <label htmlFor="simpleinput" className="form-label mt-2">Enter a new job title <sup className="text-danger">*</sup></label>
                        <input 
                          type="text" 
                          id="simpleinput" 
                          className="form-control" 
                          name="job_title"
                          onChange={handleChange}
                          value={state.job_title}
                          />
                          {errors.job_title?<p className="text-danger">{errors.job_title}</p>:""}
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Department <sup className="text-danger">*</sup></label>
                            <select className="form-select" name="department" value={state.department} onChange={handleChange} id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Sub Department <sup className="text-danger">*</sup></label>
                            <select className="form-select" id="example-select" name="sub_department" value={state.sub_department} onChange={handleChange}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Job Title <sup className="text-danger">*</sup></label>
                            <input 
                               type="text" 
                               id="simpleinput" 
                               className="form-control"

                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Job Location <sup className="text-danger">*</sup></label>
                            <select className="form-select" id="example-select" name="job_location" value={state.job_location} onChange={handleChange}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Business Unit</label>
                            <select className="form-select" id="example-select" name="business_unit" value={state.business_unit} onChange={handleChange}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Level</label>
                            <select className="form-select" id="example-select" name="level" onChange={handleChange} value={state.level}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Team</label>
                            <select className="form-select" id="example-select" name="team" onChange={handleChange} value={state.team}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Joining Date</label>
                            <input 
                              className="form-control" 
                              id="example-date" 
                              type="date" 
                              name="date" 
                              />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Employee Type <sup className="text-danger">*</sup></label>
                            <select className="form-select" id="example-select" name="emp_type" onChange={handleChange} value={state.emp_type}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Reporting Manager</label>
                            <select className="form-select" id="example-select" name="reporting_manager" onChange={handleChange} value={state.reporting_manager}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">HR Manager</label>
                            <select className="form-select" id="example-select" name="hr_manager" value={state.hr_manager} onChange={handleChange}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>   
        </>
    )
}

export default JobDetails
