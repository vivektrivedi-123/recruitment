import React, { useState } from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import Joi from 'joi-browser'
import "./Account.css"
function Account() {
    const[state,setState]=useState({
        first_name:"",
        last_name:"",
        email:"",
        phone:"",
        option:""
    })

const[errors,setErrors]=useState({})
const schema={
    first_name:Joi.string().required().label("First Name"),
    last_name:Joi.string().required().label("Last Name"),
    email: Joi.string().required().email({ minDomainAtoms: 2 
    }).label("Email"),
    phone: Joi.number().required().label("Phone"),
    option:Joi.string()
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
const handleChange=(e)=>{
    const{name,value}=e.target;
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
setState({ ...state, [name]: value });  
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(state)
    let error=validate()
    if(error)
    {
     setErrors(error)
    }
    else
    {
      setErrors('')
    }
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
      </div>
      <div className="row">
        <div className="col-2">
          <div className="page-aside-left bg-white shadow settings p-0" style={{top: '55px!important', width: 'inherit!important'}}>
            <Sidebar name="Account"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white">
                <h4 className="text-info mb-0">Primary Contact Detail</h4>
                <span className="text-muted">(Used for all account related communication from Freshteam)</span>
                <form>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input 
                         type="text" 
                          className="form-control" 
                          value={state.first_name}
                          name="first_name"
                          onChange={handleChange}
                          id="floatingInput" 
                          placeholder="Search" 
                          />
                        <label htmlFor="floatingInput" className="text-info  d-inline-block ">First Name<span className>*</span></label>
                      {errors.first_name?<p className="text-danger">{errors.first_name}</p>:""}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input 
                          type="text" 
                          className="form-control" 
                          value={state.last_name}
                          name="last_name"
                          onChange={handleChange} 
                          id="floatingInput" 
                          placeholder="Search" 
                          />
                        <label htmlFor="floatingInput" className="text-info  d-inline-block ">Last Name<span className>*</span></label>
                      {errors.last_name?<p className="text-danger">{errors.last_name}</p>:""}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input 
                          type="email" 
                          className="form-control" 
                          value={state.email}
                          name="email"
                          onChange={handleChange}
                          id="floatingInput" 
                          placeholder="Search" 
                        />
                        <label htmlFor="floatingInput" className="text-info  d-inline-block ">Email<span className>*</span></label>
                    {errors.email?<p className="text-danger">{errors.email}</p>:""}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input 
                          type="tel" 
                          className="form-control" 
                         value={state.phone} 
                         name="phone"
                         onChange={handleChange}
                          id="floatingInput" 
                          placeholder="Search" 
                        />
                        <label htmlFor="floatingInput" className="text-info  d-inline-block ">Phone<span className>*</span></label>
                     {errors.phone?<p className="text-danger">{errors.phone}</p>:""}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="position-relative">
                        <label htmlFor="floatingInput" className="text-info d-inline-block h-auto py-0 position-absolute label-not-float bg-white"> Invoice emails</label>
                        <select className="select form-control" name="option" value={state.option} onChange={handleChange}>
                          <option>select</option>
                          <option> first</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
                <hr className="mt-5" />
                <div className="row my-4">
                  <div className="col-md-6">
                    <div className="bg-light p-4 text-center">
                      <h3 className="fw-light mt-0">Active Since</h3>
                      <h5 className="fw-normal">Thu, Oct 08,2020</h5>
                      <div className="mb-3">
                        <button type="button" className="btn btn-light bg-white border">Cancel my account</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4>Freshteam Account</h4>
              <p>This is the primary contact information which we will use to contact you whenever we need to get in touch with you regarding your Freshteam account.</p>
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>{/**/}

   
        </>
    )
}

export default Account
