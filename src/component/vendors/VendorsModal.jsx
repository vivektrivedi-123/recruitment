import React, { useState } from 'react'
import Joi from 'joi-browser';
function VendorsModal() {
const[state,setState]=useState({
    first_name:"",
    last_name:"",
    email:"",
    source:"",
    source_category:"",
    check:""
})
const[errors,setErrors]=useState({})

const schema={
    first_name:Joi.string().required().label("First Name"),
    last_name:Joi.string().required().label("Last Name"),
    email: Joi.string().required().email({ minDomainAtoms: 2 
    }).label("Email"),
    source:Joi.string(),
    source_category:Joi.string()
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

const handleCheck=(e)=>{
    const{name,checked}=e.target;
    setState({...state,[name]:checked})
}



    return (
        <>
    <div className="end-bar filter-area mt-n3">
        <div className="rightbar-title py-2 border-top border-bottom">
    <a href="javascript:void(0);" className="end-bar-toggle float-start ms-n5 mt-n3 pt-1">
      <i className="dripicons-cross noti-icon" />
    </a>
    <div className="d-flex justify-content-between">
      <h4 className="m-0 text-info">Add a Vendor (Sourcing Partner)</h4>
    </div>
  </div>
  <div className="rightbar-content h-100" data-simplebar="init"><div className="simplebar-wrapper" style={{margin: 0}}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer" /></div><div className="simplebar-mask"><div className="simplebar-offset" style={{right: 0, bottom: 0}}><div className="simplebar-content-wrapper" style={{height: '100%', overflow: 'hidden scroll'}}><div className="simplebar-content" style={{padding: 0}}>
              <div className="p-3">
                <form>
                  <div className="form-floating mb-3">
                    <input 
                       type="text" 
                       className="form-control" 
                       id="floatingInput" 
                       placeholder="Search"
                       name="first_name"
                       value={state.first_name}
                       onChange={handleChange} 
                       />
                    <label htmlFor="floatingInput" className="text-info  d-inline-block ">First Name <span className="text-danger">*</span></label>
                    {errors.first_name?<p className="text-danger">{errors.first_name}</p>:""}
                  </div>
                
                  <div className="form-floating mb-3">
                    <input 
                       type="text" 
                       className="form-control" 
                       id="floatingInput" 
                       placeholder="Search" 
                       name="last_name"
                       value={state.last_name}
                       onChange={handleChange}
                    />
                    <label htmlFor="floatingInput" className="text-info  d-inline-block ">Last Name  <span className="text-danger">*</span></label>
                    {errors.last_name?<p className="text-danger">{errors.last_name}</p>:""}
                  </div>
                  <div className="form-floating mb-3">
                    <input 
                       type="text" 
                       className="form-control" 
                       id="floatingInput" 
                       placeholder="Search" 
                       name="email"
                       value={state.email}
                       onChange={handleChange}
                    />
                    <label htmlFor="floatingInput" className="text-info  d-inline-block ">Official Email  <span className="text-danger">*</span></label>
                    {errors.email?<p className="text-danger">{errors.email}</p>:""}
                  </div>
                  <p>Please fill the default source and source category for this vendor. This will help your tracking and reporting</p>
                  <select className="form-control select2 mb-3" name="source" value={state.source} onChange={handleChange} data-toggle="select2">
                    <option>Source *</option>
                    <option>New</option>
                  </select>
                  <select className="form-control select2 mb-3" data-toggle="select2" name="source_category" onChange={handleChange}>
                    <option>Source Category *</option>
                  </select>
                  <div className="form-check form-switch mb-3">
                    <input 
                       type="checkbox" 
                       className="form-check-input" 
                       id="customSwitch1" 
                       name="check"
                       onChange={handleCheck}
                       checked={state.check}
                       />
                    <label className="form-check-label" htmlFor="customSwitch1">Show Offer Details</label>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="list-inline-item"><button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button></li>
                    <li className="list-inline-item">
                      <button type="button" className="btn border-0 btn-outline-light text-info">Cancel</button>
                    </li>
                  </ul>
                </form>
              </div>
              {/* end padding*/}
            </div></div></div></div>
            <div className="simplebar-placeholder" style={{width: 500, height: 676}} />
            </div>
            <div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}>
                <div className="simplebar-scrollbar" style={{width: 0, display: 'none'}} />
                </div>
                <div className="simplebar-track simplebar-vertical" style={{visibility: 'visible'}}>
                    <div className="simplebar-scrollbar" style={{height: 25, transform: 'translate3d(0px, 0px, 0px)', display: 'block'}} />
                    </div>
                    </div>
          </div>
   
        </>
    )
}

export default VendorsModal
