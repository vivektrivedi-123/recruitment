import React, { useState } from 'react'
import Joi from 'joi-browser';
function BusinessModal() {
    const[state,setState]=useState({
        name:"",
        description:""

    })
const[errors,setErrors]=useState({})
    const schema = {
        name: Joi.string().required().label("Name of Business unit"),
        description:Joi.string()                                      
   };

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
    //console.log(result)
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
<div className="end-bar filter-area mt-n3">
  <div className="rightbar-title py-2 border-top border-bottom">
    <a href="javascript:void(0);" className="end-bar-toggle float-start ms-n5 mt-n3 pt-1">
      <i className="dripicons-cross noti-icon" />
    </a>
    <div className="d-flex justify-content-between">
      <h4 className="m-0 text-info">Create New Business Unit
      </h4>
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
                      value={state.name}
                      name="name"
                      onChange={handleChange} 
                      />
                    <label htmlFor="floatingInput" className="text-info  d-inline-block ">Name of Business unit <span className>*</span></label>
                  </div>
                  {errors.name?<p className="text-danger">{errors.name}</p>:""}
                  <div className="form-floating mb-3">
                    <textarea 
                       type="text" 
                       rows={2} 
                       className="form-control" 
                       id="floatingInput" 
                       placeholder="Search" 
                       value={state.description}
                       onChange={handleChange}
                       name="description"
                       />
                    <label htmlFor="floatingInput" className="text-info  d-inline-block ">Descriptions <span className>*</span></label>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="list-inline-item"><button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button></li>
                    <li className="list-inline-item"><button type="button" className="btn border-0 btn-outline-light text-info">Cancel</button>
                    </li>
                  </ul>
                </form>
              </div>
              {/* end padding*/}
            </div>
            </div>
            </div>
            </div>
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

export default BusinessModal
