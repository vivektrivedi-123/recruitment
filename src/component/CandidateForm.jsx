import React,{useState} from 'react'
import Alert from '../common/Alert'
import Dropzone1 from '../common/dropzone/Dropzone';
import Joi from 'joi-browser'
function CandidateForm() {

  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles =>
  {
    acceptedFiles.map(file =>{
      console.log(file)
        setState({...state,["file"]:file})
    })
      
    // setState((acceptedFiles.map(file => file.name
    //   )))
  }

    const[state,setState]=useState({
       first_name:"",
        middle_name:"",
        last_name:"",
        email:"",
        mobile:"",
        dob:"",
        total_exp:"",
        rel_exp:"",
        current_salary:"",
        expected_salary:"",
        notice_period:"",
        reason:"",
        perm_add:"",
        curr_add:"",
        customRadio1:'yes',
        customRadio2:"yes",
        customRadio3:'',
        file:''
    })

const schema={
  first_name:Joi.string().min(3).required().label('First_Name'),
  last_name:Joi.string().min(3).required().label('Last_Name'),
  middle_name:Joi.string(),
  email: Joi.string().required().email({ minDomainAtoms: 2 
  }).label("Email"),
  dob:Joi.number().integer().label('Date_of_birth'),
  total_exp:Joi.number().required().label('Total_Experience')


}


  const[emailError,setEmailError]=useState('')
  const[mobileError,setMobileError]=useState('')
  const[firstNameError,setFirstNameError]=useState('')
  const[currSalError,setCurrSalError]=useState('');
const handleChange=(e)=>{
        const{name,value}=e.target;
      
          setEmailError('')
          setMobileError('')
       
        setState({ ...state, [name]: value });

    }

const radioChange=(e)=>{
        const{name,value}=e.target;
        console.log(value)
        setState({...state, [name]: value });
    }
const radioChange1=(e)=>{
        const{name,value}=e.target;
        console.log(value)
        setState({ ...state,[name]: value });
    }
const handleSubmit=(e)=>{
    e.preventDefault();
    validation();
    console.log(state)
}

const handlefile=(e)=>{
   console.log(e.target.files)
   setState({ ...state,[e.target.name]: e.target.files });
}



const validation=()=>{
  let pattern1 = new RegExp(/^[0-9\b]+$/);
  let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
 console.log(pattern.test(state.email))
  if(!pattern.test(state.email))
  {
      setEmailError('please enter a valid email')
  }
   if(!pattern1.test(state.mobile))
   {
   setMobileError('please enter a valid mobile number')   
  }
  if(state.mobile.length!==10)
  {
      setMobileError('please enter valid mobile number')
  }
  if(state.firstName==='')
  {
    setFirstNameError('required')
  }
  if(state.current_salary==='')
  {
    setCurrSalError('required')
  }

}




    return (
        <>
         
  <div className="rightbar-title py-2 border-top border-bottom">
    <a href="javascript:void(0);" className=" end-bar-toggle float-start ms-n5 mt-n3 pt-1">
      <i className="dripicons-cross noti-icon" />
    </a>
    <div className="d-flex justify-content-between align-items-center">{/*header*/}
      <h5 className="m-0 text-info">Add candidate to this job</h5>
      <div className="d-flex align-items-center">
        <button className="btn btn-clear">Cancle</button>
        <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
      </div>
    </div>{/*header*/}
  </div>
  <div className="rightbar-content h-100" data-simplebar="init"><div className="simplebar-wrapper" style={{margin: 0}}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer" /></div><div className="simplebar-mask"><div className="simplebar-offset" style={{right: 0, bottom: 0}}><div className="simplebar-content-wrapper" style={{height: '100%', overflow: 'hidden scroll'}}><div className="simplebar-content" style={{padding: 0}}>
              <div className="p-3">
                {/* File Upload */}
                <Dropzone1
                handleDrop={handleDrop}
                />
                <div>
        <strong>FileName:</strong>
        <ul>
            <li>{state.file?state.file.name:""}</li>
        </ul>
      </div>
                {/* <form action="/" method="post" className="dropzone" style={{border: '1px dashed #727cf5'}} id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                  <div className="fallback">
                    <input 
                     name="file" 
                     type="file" 
                     multiple 
                     onChange={handlefile} 
                     value={state.file}/>
                  </div>
                  <div className="dz-message needsclick mt-0">
                    <i className="h1 text-muted dripicons-cloud-upload" />
                    <h3>Drop files here or click to upload.</h3>
                    <span className="text-muted font-13">(This is just a demo dropzone. Selected files are
                      <strong>not</strong> actually uploaded.)</span>
                  </div>
                </form> */}
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
                </div>{/*/ File Upload */}
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-floating mb-3">
                      <input 
                       type="text" 
                       className="form-control py-0" 
                       name="first_name" 
                       value={state.first_name} 
                       onChange={handleChange} 
                       placeholder="Search" 
                       style={{height: 'calc(2.5rem + 2px)!important'}} />
                      <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1"> First Name</span><span className="text-danger">*</span></label>
                    {firstNameError?<p className='text-danger'>{firstNameError}</p>:''}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-floating mb-3">
                      <input 
                       type="text" 
                       className="form-control py-0" 
                       name="middle_name" 
                       value={state.middle_name} 
                       onChange={handleChange} 
                       placeholder="Search" 
                       style={{height: 'calc(2.5rem + 2px)!important'}} />
                      <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1">Middle Name</span></label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-floating mb-3">
                      <input 
                       type="text" 
                       className="form-control py-0" 
                       name="last_name" 
                       value={state.last_name} 
                       onChange={handleChange} 
                       placeholder="Search" 
                       style={{height: 'calc(2.5rem + 2px)!important'}} />
                      <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1">Last Name </span><span className="text-danger">*</span></label>
                    </div>
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input 
                   type="text" 
                   className="form-control py-0"  
                   name="email" value={state.email} 
                   onChange={handleChange}  
                   placeholder="Search" 
                   style={{height: 'calc(2.5rem + 2px)!important'}} />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1"> Email</span><span className="text-danger">*</span></label>
                  {emailError?<p className="text-danger">{emailError}</p>:''}
                </div>
               
                <div className="form-floating mb-3">
                  <input 
                   type="text" 
                   className="form-control py-0"  
                   name="mobile" 
                   value={state.mobile} 
                   onChange={handleChange} 
                   placeholder="Search" 
                   style={{height: 'calc(2.5rem + 2px)!important'}} />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1"> Mobile</span></label>
                  {mobileError?<p className="text-danger">{mobileError}</p>:''}
                </div>
               
                <div className="form-floating mb-3">
                  <input 
                   type="text" 
                    className="form-control py-0"  
                    name="dob" 
                    value={state.dob} 
                    onChange={handleChange} 
                    placeholder="Search" 
                    style={{height: 'calc(2.5rem + 2px)!important'}} />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1"> Date of Birth</span></label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                   type="text" 
                   className="form-control py-0"  
                   name="total_exp" 
                   value={state.total_exp} 
                   onChange={handleChange} 
                   placeholder="Search" 
                   style={{height: 'calc(2.5rem + 2px)!important'}} />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1"> Total Experience (in years)</span></label>
                </div>
                <div className="form-floating mb-3">
                  <textarea 
                   className="form-control resize-none" 
                   placeholder="Search"  
                   name="rel_exp" 
                   value={state.rel_exp} 
                   onChange={handleChange} />
                  <label className="text-info  d-inline-block px-1"><span className="bg-white p-1">Relevant Experience (in years)</span><span className="text-danger">*</span></label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                   type="text" 
                   className="form-control py-0"  
                   name="current_salary" 
                   value={state.current_salary} 
                   onChange={handleChange} 
                   placeholder="Search" 
                   style={{height: 'calc(2.5rem + 2px)!important'}} />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1">Current Salary</span><span className="text-danger">*</span></label>
                  {currSalError?<p className='text-danger'>{currSalError}</p>:''}
                </div>
                <div className="form-floating mb-3">
                  <input 
                   type="text" 
                   className="form-control py-0" 
                    name="expected_salary" 
                    value={state.expected_salary} 
                    onChange={handleChange} 
                    placeholder="Search" 
                    style={{height: 'calc(2.5rem + 2px)!important'}} />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1"> Expected Salary</span><span className="text-danger">*</span></label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                   type="text" 
                   className="form-control py-0"  
                   name="notice_period" 
                   value={state.notice_period} 
                   onChange={handleChange} 
                   placeholder="Search" 
                   style={{height: 'calc(2.5rem + 2px)!important'}} />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1"> Notice Period</span><span className="text-danger">*</span></label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                   type="text" 
                   className="form-control py-0"  
                   name="reason" 
                   value={state.reason} 
                   onChange={handleChange} 
                   placeholder="Search" 
                   style={{height: 'calc(2.5rem + 2px)!important'}} />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1"> Reason for job change</span><span className="text-danger">*</span></label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                   type="text" 
                   className="form-control py-0"  
                   name="perm_add"  
                   value={state.perm_add} 
                   onChange={handleChange} 
                   placeholder="Search" 
                   style={{height: 'calc(2.5rem + 2px)!important'}} />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1"> Permanent Address</span><span className="text-danger">*</span></label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                   type="text" 
                   className="form-control py-0"  
                   name="curr_add" 
                   value={state.curr_add} 
                   onChange={handleChange} 
                   placeholder="Search" 
                   style={{height: 'calc(2.5rem + 2px)!important'}} />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1"> Current Location</span><span className="text-danger">*</span></label>
                </div>
                <div className="mb-3">
                  <label className="fw-normal">Are you comfortable with Work from office</label>
                  <div className="mt-1">
                    <div className="form-check form-check-inline">
                      <input 
                      type="radio" 
                      id="customRadio1" 
                      name="customRadio1" 
                      className="form-check-input" 
                      checked={state.customRadio1==='yes'}  
                      value="yes" 
                     onChange={radioChange} />
                      <label className="form-check-label position-relative" htmlFor="customRadio1">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input type="radio" id="customRadio2" name="customRadio1"
                       className="form-check-input" 
                       value="no" 
                       checked={state.customRadio1==='no'}  
                       onChange={radioChange} />
                      <label className="form-check-label position-relative" htmlFor="customRadio2">No</label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="fw-normal">Are you comfortable with Mohali location</label>
                  <div className="mt-1">
                    <div className="form-check form-check-inline">
                      <input type="radio"
                     id="customRadio3"
                     name="customRadio2"
                     value="yes"
                     checked={state.customRadio2==='yes'}
                     onChange={radioChange1} 
                     className="form-check-input" />
                      <label className="form-check-label position-relative" htmlFor="customRadio3">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input type="radio"
                       id="customRadio4"
                        name="customRadio2"
                        value="no"
                        checked={state.customRadio2==='no'} 
                        onChange={radioChange1}
                        className="form-check-input" />
                      <label className="form-check-label position-relative" htmlFor="customRadio4">No</label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="fw-normal">Do you have hand on experience on Objective-C, Cocoa?</label>
                  <div className="mt-1">
                    <div className="form-check form-check-inline">
                      <input type="radio" 
                      id="customRadio5" 
                      name="customRadio3"
                      checked={state.customRadio3==='yes'}
                      value='yes'
                      onChange={radioChange} 
                      className="form-check-input" />
                      <label className="form-check-label position-relative" htmlFor="customRadio5">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input type="radio" 
                      id="customRadio6" 
                      name="customRadio3"
                      checked={state.customRadio3==='no'}
                      value='no'
                      onChange={radioChange} 
                      className="form-check-input" />
                      <label className="form-check-label position-relative" htmlFor="customRadio6">No</label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="fw-normal">Do you have experience with Payment integration?</label>
                  <div className="mt-1">
                    <div className="form-check form-check-inline">
                      <input 
                       type="radio" 
                       id="customRadio3" 
                       name="customRadio1" 
                       className="form-check-input" />
                      <label className="form-check-label position-relative" htmlFor="customRadio3">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input 
                       type="radio" 
                       id="customRadio4" 
                       name="customRadio1" 
                       className="form-check-input" />
                      <label className="form-check-label position-relative" htmlFor="customRadio4">No</label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="fw-normal">Do you have any live applications ?</label>
                  <div className="mt-1">
                    <div className="form-check form-check-inline">
                      <input 
                       type="radio" 
                       id="customRadio3" 
                       name="customRadio1" 
                       className="form-check-input" />
                      <label className="form-check-label position-relative" htmlFor="customRadio3">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input 
                       type="radio" 
                       id="customRadio4" 
                       name="customRadio1" 
                       className="form-check-input" />
                      <label className="form-check-label position-relative" htmlFor="customRadio4">No</label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="fw-normal">Do you have hand on experience with swift?</label>
                  <div className="mt-1">
                    <div className="form-check form-check-inline">
                      <input 
                       type="radio" 
                       id="customRadio3" 
                       name="customRadio1" 
                       className="form-check-input" />
                      <label className="form-check-label position-relative" htmlFor="customRadio3">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input 
                       type="radio" 
                       id="customRadio4" 
                       name="customRadio1" 
                       className="form-check-input" />
                      <label className="form-check-label position-relative" htmlFor="customRadio4">No</label>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <select className="form-control select2 " data-toggle="select2" id="team">
                        <option> Direct</option>
                      </select>
                      <label htmlFor="team" className="text-info  d-inline-block px-1">Source <span className="text-danger">*</span></label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select className="form-control select2 shadow" data-toggle="select2" id="level">
                        <option>Portal</option>
                      </select>
                      <label htmlFor="team" className="text-info  d-inline-block px-1">Source Category<span className="text-danger">*</span></label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating mb-3">
                      <input 
                       type="text" 
                       className="form-control py-0" 
                       defaultValue="Search/Add new" 
                       placeholder="Search" 
                       style={{height: 'calc(2.5rem + 2px)!important'}} />
                      <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2" style={{top: '0px!important'}}><span className="bg-white p-1"> Tags</span></label>
                    </div>
                  </div>
                </div>
                <div className="form-check form-switch form-checkbox-success">
                  <input 
                   type="checkbox" 
                   className="form-check-input align-middle" 
                   id="customSwitch1" 
                   defaultChecked />
                  <label className="form-check-label align-middle" htmlFor="customSwitch1">Send an acknowledgment email to candidate</label>
                </div>
              </div>
              {/* end padding*/}
            </div></div></div></div><div className="simplebar-placeholder" style={{width: 500, height: 676}} /></div><div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}><div className="simplebar-scrollbar" style={{width: 0, display: 'none'}} /></div><div className="simplebar-track simplebar-vertical" style={{visibility: 'visible'}}><div className="simplebar-scrollbar" style={{height: 25, transform: 'translate3d(0px, 0px, 0px)', display: 'block'}} /></div></div>
  
        </>
    )
}

export default CandidateForm
