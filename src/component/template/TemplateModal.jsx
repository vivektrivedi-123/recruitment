import React,{useEffect,useState} from 'react'
import Modal2 from './Modal2'
import Joi from 'joi-browser'
import Dropzone1 from '../../common/dropzone/Dropzone'
function TemplateModal() {
    const[state,setState]=useState({
        template_name:"",
        description:"",
        file:""
    })
const[errors,setErrors]=useState({})

const handleChange1=(selectorFiles)=>
{
    console.log(selectorFiles);
}


   const schema={
       template_name:Joi.string().required().label("Template Name"),
       description:Joi.string()
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
    setState({...state,[name]:value})
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

const handleSubmit=(e)=>{
    console.log(state)
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
         <div>
  <div id="full-width-modal22" className="modal fade p-0" tabIndex={-1} role="dialog" aria-labelledby="fullWidthModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-full-width m-0 w-100 modal-dialog-scrollable vh-100" style={{minWidth: '992px!important'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="fullWidthModalLabel">Add New </h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body bg-light">
          <div className="row">
            <div className="col-lg-9">
              <div className="p-3 bg-white">
                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control py-0" 
                    id="floatingInput" 
                    placeholder="location" 
                    name="template_name"
                    value={state.template_name}
                    onChange={handleChange}
                    style={{height: 'calc(2.5rem + 2px)!important'}} 
                    />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Template Name <span className="text-danger">*</span></label>
                {errors.template_name?<p className="text-danger">{errors.template_name}</p>:""}
                </div>
                <div className="form-floating">
                  <textarea 
                   className="form-control" 
                   placeholder="Leave a comment here" 
                   id="floatingTextarea" 
                   style={{height: 100}} 
                   name="description"
                   value={state.description}
                   onChange={handleChange}
                   />
                  <label htmlFor="floatingTextarea">Description</label>
                  <small>160 charaters only</small>
                </div>
                {/* File Upload */}
                {/* <Dropzone1/> */}
                 <form action="/" method="post" className="dropzone mt-3" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                  <div className="fallback">
                    <input 
                      name="file" 
                      type="file" 
                      multiple 
                    //   onSelect={handleFile}
                    onChange={ (e) => {handleChange1(e.target.files) 
                        
                    }}
                     
                      />
                  </div>
                  <div className="dz-message needsclick">
                    <i className="h1 text-muted dripicons-cloud-upload" />
                    <h3>Drop files here or click to upload.</h3>
                    <span className="text-muted font-13">(This is just a demo dropzone. Selected files are
                      <strong>not</strong> actually uploaded.)</span>
                  </div>
                </form> 
                {/* Preview */}
                <div className="dropzone-previews mt-3" id="file-previews" />
                {/* file preview template */}
                <div className="d-none" id="uploadPreviewTemplate">
                  <div className="card mt-1 mb-0 shadow-none border">
                    <div className="p-2">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <img data-dz-thumbnail src="#" className="avatar-sm rounded bg-light" alt />
                        </div>
                        <div className="col ps-0">
                          <a href="javascript:void(0);" className="text-muted fw-bold" data-dz-name />
                          <p className="mb-0" data-dz-size />
                        </div>
                        <div className="col-auto">
                          {/* Button */}
                          <a href className="btn btn-link btn-lg text-muted" data-dz-remove>
                            <i className="dripicons-cross" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h4>Manage Offer Letter Templates</h4>
              <p>Create standard templates for rolling out offers to any candidate in your company. This ensures all offers from your company have consistent terms and messaging while also saving a lot of time for recruiters. You can create multiple templates, say one with ESOPs, one with Relocation Allowance and so on and use them wherever needed. You can use placeholders in your offer templates to fill in dynamic content like the candidate’s name, their job title and more.</p>
              <button className="btn btn-light bg-white" data-bs-toggle="modal" data-bs-target="#dynamic-placeholders-modal">View Dynamic Placeholders</button>
              <h4 className="mt-3">Where is this shown/used?</h4>
              <p>When you move a candidate to the Offer stage, you will have an option to <strong>Make an Offer </strong> to the candidate. Once you fill in the offer details, you can choose any template to create and send the offer letter.</p>
              <p>2. While making an offer to a candidate, you can choose the location where you would like to hire the candidate.</p>
              <h4 className="mt-3">Resource article(s)</h4>
              <a href="#" className="text-primary">Uploading Offer Templates</a><br />
              <a href="#" className="text-primary">Making an Offer to a Candidate</a>
              <a href="#" className="text-primary">Understanding Email Notifications</a>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-clear me-2" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save</button>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>{/* /.modal */}
  {/*dynamic placeholders modal*/}
  <Modal2/>
{/* /.modal */}
</div>
 
        </>
    )
}

export default TemplateModal
