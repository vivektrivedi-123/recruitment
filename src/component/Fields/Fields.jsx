import React,{useState} from 'react'
import "./Fields.css"
import Navigation from '../../common/Navigation' 
import Sidebar from '../settings/Sidebar'
import Topbar from '../../common/Topbar'
import Personal from './Personal'
import JobDetails from './JobDetails'
import Componsesion from './Componsesion'
import Other from './Other'
import TopModal from './TopModal'
import Joi from 'joi-browser'
function Fields() {

    const[state,setState]=useState({
        first_name:"",
        middle_name:"",
        last_name:"",
        gender:"",
        street:"",
        date:"",
        city:"",
        state:"",
        zip:"",
        email:"",
        phone_number:"",
        mobile_number:"",
        country:""
    
    })
    
 const[errors,setErrors]=useState({})   
const handleChange=(e)=>{
    console.log(e.target.value)
    const{value,name}=e.target;
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
    first_name:Joi.string().required().label("First Name"),
    last_name:Joi.string().required().label("Last Name"),
    email: Joi.string().required().email({ minDomainAtoms: 2 
    }).label("Email"),
    middle_name:Joi.string(),
    state:Joi.string(),
    mobile_number:Joi.number().required().label('Mobile_Number'),
    gender:Joi.string(),
    street:Joi.string(),
    city:Joi.string(),
    zip:Joi.number().label('zip/postal'),
    email: Joi.string().required().email({ minDomainAtoms: 2 
    }).label("Email"),
    phone_number:Joi.number().label('Phone_number'),
    mobile_number:Joi.number().label('Mobile_number'),
    country:Joi.string()

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
            <Sidebar name="Fields"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white">
                <div className="alert alert-success mb-3" role="alert">
                  <div className="d-flex align-items-center" id="tooltip-fields">
                    <h4 clss="fw-normal">Drag &amp; Drop fields</h4>
                    <i className="mdi mdi-view-day-outline me-1 mdi-24px align-middle ms-3" data-bs-toggle="modal" data-bs-target="#AddField-modal" data-bs-container="#tooltip-fields" data-bs-placement="bottom" title="Text" />
                    <i className="mdi mdi-card-text-outline me-1 mdi-24px align-middle ms-3" data-bs-toggle="modal" data-bs-target="#AddField2-modal" data-bs-container="#tooltip-fields" data-bs-placement="bottom" title="Multi-line Text" />
                    <i className="mdi mdi-radiobox-marked me-1 mdi-24px align-middle ms-3" data-bs-toggle="modal" data-bs-target="#AddField8-modal" data-bs-container="#tooltip-fields" data-bs-placement="bottom" title="Radio button" />
                    <i className="mdi mdi-checkbox-marked-outline me-1 mdi-24px align-middle ms-3" data-bs-toggle="modal" data-bs-target="#AddField3-modal" data-bs-container="#tooltip-fields" data-bs-placement="bottom" title="Check box" />
                    <i className="mdi mdi-counter me-1 mdi-24px align-middle ms-3" data-bs-toggle="modal" data-bs-target="#AddField4-modal" data-bs-container="#tooltip-fields" data-bs-placement="bottom" title="Number" />
                    <i className="mdi mdi-form-dropdown me-1 mdi-24px align-middle ms-3" data-bs-toggle="modal" data-bs-target="#AddField9-modal" data-bs-container="#tooltip-fields" data-bs-placement="bottom" title="Dropdown" />
                    <i className="mdi mdi-calendar-month me-1 mdi-24px align-middle ms-3" data-bs-toggle="modal" data-bs-target="#AddField5-modal" data-bs-container="#tooltip-fields" data-bs-placement="bottom" title="Date" />
                    <i className="mdi mdi-phone me-1 mdi-24px align-middle ms-3" data-bs-toggle="modal" data-bs-target="#AddField6-modal" data-bs-container="#tooltip-fields" data-bs-placement="bottom" title="Phone number" />
                    <i className="mdi mdi-link-variant me-1 mdi-24px align-middle ms-3" data-bs-toggle="modal" data-bs-target="#AddField7-modal" data-bs-container="#tooltip-fields" data-bs-placement="bottom" title="Hyperlink" />
                  </div>
                </div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <Personal  change={handleChange} errors={errors}/>
                    <JobDetails/>
                    <Componsesion/>
                    <Other/>    
                </div>
                <button className="btn btn-clear me-3 mt-3">Cancle</button>
                <button className="btn btn-primary mt-3">Save</button>
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4>Managing Offer Fields</h4>
              <p>Think of all possible information that you wish to capture while making an offer to a candidate. Now, add them here as offer fields so that, any recruiter who makes the offer is prompted to collect and fill the information.</p>
              <h4 className="mt-3">Where is this shown/used?</h4>
              <p>When you move a candidate to the Offer stage in a Job, you will have an option to Make an Offer to the candidate. You will have to fill this form to proceed with making the offer.</p> 
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>
<TopModal/>

</>
    )
}

export default Fields
