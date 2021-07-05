import React,{useState} from 'react'
import DatePicker from 'react-date-picker';
import SelectSearch from 'react-select-search';
import fuzzySearch from '../FuzzySearch';
import sourceData from '../../Hiring.json'
import './AddCandidate.css'
import Tags from '../../common/Tags';
import Joi from 'joi-browser';
function AddCandidate() {
  const [value1, onChange] = useState('');
  const [value2, onChange1] = useState('');
  const[value3,onChange3]=useState('')
  const[value4,onChange4]=useState('')
  const[state,setState]=useState({
    firstName:'',
    middleName:'',
    lastName:'',
    email:'',
    mobile:'',
    dob:'',
    total_exp:'',
    rel_exp:'',
    current_salary:'',
    expected_salary:'',
    notice_period:'',
    reason:'',
    perm_add:'',
    curr_add:'',
    customRadio1:'yes',
    customRadio2:"yes",
    customRadio3:'',
    customRadio4:'',
    customRadio5:'',
    customRadio6:'',
    file:'',
    work_link:'',
    designation:'',
    company_name:'',
    summary:'',
    degree:'',
    school_name:'',
    field:'',
    grade:'',
    beginner:'',
    intermediate:'',
    expert:'',
    source_cat:'',
    source:'',
    check1:false,
    check2:false,
    check3:false,
    file:''
})

const [errors,setError]=useState({

})

const schema = {
  firstName: Joi.string().required().min(3).label("First_Name"),                                      
  middleName: Joi.string().label("Middle_Name"),
  lastName:Joi.string().label('Last_Name'),
  email: Joi.string().required().email({ minDomainAtoms: 2 
  }).label("Email"),
  mobile:Joi.number().required().min(10).max(10).label('Mobile_Number'),
  total_exp:Joi.number().required().label('Total_Exp'),
  rel_exp:Joi.number().required().label('Rel_Exp') ,
 dob: Joi.number().integer().label('Dob'),
 current_salary:Joi.number().required().label('Current-salary'),
expected_salary:Joi.number().required().label('Expected-salary'),
notice_period:Joi.number().label('Notice'),
designation:Joi.string().required().label('Designation'),
company_name:Joi.string().required().label('Company-Name')

};

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

const Tags=[
  "select",
  "Aptitute score is low",
  "Shortlisted",
  "Not open for work from home",
  "Skills not matching"
]


const[emailError,setEmailError]=useState('')
const[mobileError,setMobileError]=useState('')
const[firstNameError,setFirstNameError]=useState('')
const[currSalError,setCurrSalError]=useState('');
const[expSalError,setExpSalError]=useState('')
const[noticeError,setNoticeError]=useState('')
const[reasonError,setReasonError]=useState('')
const handleSource=(e)=>{
  setState({ ...state, ["source_cat"]: e});
}

const handleChange=(e)=>{
    const{name,value}=e.target;

      setEmailError('')
      setMobileError('')
      let res=validatePropery(name,value,schema)
        if(res)
        {
          setError(res)
        }
        else
        {
          setError('')
        }
    setState({ ...state, [name]: value });

}

const handleSubmit=(e)=>{
  e.preventDefault()
  let error=validate()
  if(error)
  {
   setError(error)
  }
  else
  {
    setError('')
  }

}
const radioChange=(e)=>{
  const{name,value}=e.target;
  console.log(value)
  setState({...state, [name]: value });
}


const handleSourceSocial=(e)=>{
  setState({ ...state, ["source"]: e});
}


const handleFile=(e)=>{
  console.log(e.target.files)
  setState({ ...state,[e.target.name]: e.target.files });
}


// const validation=()=>{
//   let pattern1 = new RegExp(/^[0-9\b]+$/);
//   let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//   if(!pattern.test(state.email))
//   {
//       setEmailError('please enter a valid email')
//   }
//    if(!pattern1.test(state.mobile))
//    {
//    setMobileError('please enter a valid mobile number')   
//   }
//   if(state.mobile.length!==10)
//   {
//       setMobileError('enter valid mobile number with length of 10')
//   }
//   if(state.firstName==='')
//   {
//     setFirstNameError('required')
//   }
//   if(!pattern1.test(state.current_salary) || state.current_salary==='')
//   {
//     setCurrSalError('should be number and required')
//   }
//   if(!pattern1.test(state.expected_salary) || state.expected_salary==='')
//   {
//     setExpSalError('should be number and required')
//   }
//   if(state.notice_period==='')
//   {
//     setNoticeError('required')
//   }
//  if(state.reason==='')
//  {
//    setReasonError('required')
//  }
// }

    return (
        <div className="modal-dialog modal-sm modal-right bg-transparent">
        <button type="button" className="btn-close bg-transparent" data-bs-dismiss="modal" aria-label="Close"><i className="dripicons-cross" /></button>
        <div className="modal-content rounded-0">
          <div className="modal-header border-0 p-0">
            <div className="rightbar-title p-2 border-bottom w-100">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-0 text-info">Add Candidate To This Job</h5>
                <div className="ms-auto">
                  <a href="#" className="btn btn-clear py-0 m-1 mt-0 ">Cancel </a>
                  <a href="#" className="btn btn-primary py-1 m-1 mt-0" onClick={handleSubmit}>Add</a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-body">
            <div className="rightbar-content h-100">
              <div className="p-3">
                <form action="/" method="post" className="dropzone border" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                  <div className="fallback">
                    <input name="file" type="file"   onChange={handleFile}/>
                  </div>
                  <div className="dz-message needsclick">
                    <p className="font-22 text-info">Drag and drop resume here</p>
                    <p className="text-muted font-13">
                      or <span className="btn-link">click here to upload resume</span>
                    </p>
                    <span className="text-muted font-13"> Maximum file size: 2 MB</span>
                  </div>
                </form>
                <div className="dropzone-previews mt-3" id="file-previews" />
                <div className="d-none" id="uploadPreviewTemplate">
                  <div className="card mt-1 mb-0 shadow-none border">
                    <div className="p-2">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <img data-dz-thumbnail src="#" className="avatar-sm rounded bg-light" alt />
                        </div>
                        <div className="col ps-0">
                          <a href="#!" className="text-muted fw-bold" data-dz-name />
                          <p className="mb-0" data-dz-size />
                        </div>
                        <div className="col-auto">
                          {/* Button */}
                          <a href="" className="btn btn-link btn-lg text-muted" data-dz-remove>
                            <i className="dripicons-cross" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="field mb-3 form-group required">
                      <input className="form-control" type="text" name="firstName" value={state.firstName} onChange={handleChange} id="First-name" placeholder="First Name" required />
                      <label htmlFor="First-name" className="control-label">First Name</label>
                    </div>
                    {errors.firstName?<p className="text-danger">{errors.firstName}</p>:''}
                  </div>
                  <div className=" col-md-4">
                    <div className="field mb-3">
                      <input className="form-control" type="text" name="middleName" value={state.middleName} onChange={handleChange} id="middle-name" placeholder="Middle Name" />
                      <label htmlFor="middle-name">Middle Name</label>
                    </div>
                   
                  </div>
                  <div className="col-md-4">
                    <div className="field mb-3 ">
                      <input className="form-control" type="text" name="lastName" value={state.lastName} onChange={handleChange} id="last-name" placeholder="Last Name" required />
                      <label htmlFor="last-name"> Last Name </label>
                    </div>
                  </div>
                </div>
                <div className="field mb-3">
                  <input className="form-control" type="email" name="email" value={state.email} onChange={handleChange} id="mail" placeholder="Email" required />
                  <label htmlFor="mail">Email</label>
                
                </div>
                {errors.email?<p className="text-danger ">{errors.email}</p>:''}
                <div className="field mb-3">
                  <input className="form-control" type="text" name="mobile"  value={state.mobile} onChange={handleChange} id="mobile" placeholder="Mobile" />
                  <label htmlFor="mobile"> Mobile </label>
                 
                </div>
                {errors.mobile?<p className="text-danger">{errors.mobile}</p>:""}
                <div className="field mb-3">
                  <input className="form-control" type="date" name="dob" value={state.dob} onChange={handleChange} id="date" placeholder="Date of Birth" />
                  <label htmlFor="date"> Date of Birth</label>
                </div>
                {errors.dob?<p className="text-danger">{errors.dob}</p>:""}
                <div className="field mb-3">
                  <input className="form-control" type="text" name="total_exp" onChange={handleChange} value={state.total_exp} id="texp" placeholder="Total Experience (in Years)" required />
                  <label htmlFor="texp">Total Experience (in Years)</label>
                </div>
                {errors.total_exp?<p className="text-danger">{errors.total_exp}</p>:""}
                <div className="field mb-3">
                  <input className="form-control" type="text" name="rel_exp" value={state.rel_exp} onChange={handleChange} id="exp" placeholder="Relevant Experience (in Years)" required />
                  <label htmlFor="exp">Relevant Experience (in Years)</label>
                </div>
                {errors.rel_exp?<p className="text-danger">{errors.rel_exp}</p>:""}
                <div className="field mb-3">
                  <input className="form-control" type="text" name="current_salary" onChange={handleChange} value={state.current_salary} id="cursal" placeholder="Current Salary" required />
                  <label htmlFor="cursal">Current Salary</label>
                </div>
                {errors.current_salary?<p className="text-danger">{errors.current_salary}</p>:''}
                <div className="field mb-3">
                  <input className="form-control" type="text" name="expected_salary" value={state.expected_salary} onChange={handleChange} id="expsal" placeholder="Expected Salary" required />
                  <label htmlFor="expsal">Expected Salary</label>
                </div>
                {errors.expected_salary?<p className="text-danger">{errors.expected_salary}</p>:''}
                <div className="field mb-3">
                  <input className="form-control" type="text" name="notice_period" value={state.notice_period} onChange={handleChange} id="notice" placeholder="Notice Period" required />
                  <label htmlFor="notice"> Notice Period </label>
                </div>
                {errors.notice_period?<p className='text-danger'>{errors.notice_period}</p>:''}
                <div className="field mb-3">
                  <input className="form-control" type="text" name="reason" onChange={handleChange} value={state.reason} id="job-change" placeholder="Reason for job change" required />
                  <label htmlFor="job-change"> Reason for job change </label>
                </div>
                {reasonError?<p className="text-danger">{reasonError}</p>:''}
                <div className="field mb-3">
                  <input className="form-control" type="text" name="perm_add" value={state.perm_add} onChange={handleChange} id="addrs" placeholder="Permanent Address" required />
                  <label htmlFor="addrs"> Permanent Address </label>
                </div>
                <div className="field mb-3">
                  <input className="form-control" type="text" name="curr_add" value={state.curr_add} onChange={handleChange} id="loc" placeholder="Current Location" required />
                  <label htmlFor="loc"> Current Location </label>
                </div>
                <div className="field d-inline mt-2">
                  <h5> Are you comfortable with Chandigarh/ Mohali Location </h5>
                  <div className="form-check form-check-inline position-relative">
                    <input type="radio"
                    id="customRadio3"
                    name="customRadio1"
                    value="yes"
                    checked={state.customRadio1==='yes'}
                    onChange={radioChange}
                    className="form-check-input" />
                    <label className="form-check-label" htmlFor="customRadio3">Yes</label>
                  </div>
                  <div className="form-check form-check-inline position-relative ms-5">
                    <input type="radio"
                    id="customRadio4"
                    name="customRadio1"
                    value="no"
                    checked={state.customRadio1==='no'}
                    onChange={radioChange}
                    className="form-check-input" />
                    <label className="form-check-label" htmlFor="customRadio4">No</label>
                  </div>
                </div>
                <div className="field d-inline mt-2 mb-3">
                  <h5> Are you open for work from office operations </h5>
                  <div className="form-check form-check-inline position-relative">
                    <input type="radio"
                    id="customRadio5"
                    name="customRadio2"
                    value="yes"
                    checked={state.customRadio2==='yes'}
                    onChange={radioChange}
                    className="form-check-input" />
                    <label className="form-check-label" htmlFor="customRadio5">Yes</label>
                  </div>
                  <div className="form-check form-check-inline position-relative ms-5">
                    <input type="radio"
                    id="customRadio6"
                    name="customRadio2"
                    value="no"
                    checked={state.customRadio2==='no'}
                    onChange={radioChange}
                    className="form-check-input" />
                    <label className="form-check-label" htmlFor="customRadio6">No</label>
                  </div>
                </div>
                <div className="mt-2 mb-3">
                  <label> Provide us with links to see some of your work (Git/ Dribble/ Behance/ Pinterest/ Blog/ Medium) </label>
                  <input className="form-control d-inline mt-2 w-75" type="text" name="work_link" value={state.work_link} onChange={handleChange} id="work" placeholder="Hyperlink" />
                  <button className="btn">
                    <i className="mdi mdi-plus mdi-24px px-2" />
                  </button>
                </div>
                <div className="mt-2 mb-3">
                  <form className="border px-3">
                    <h4> Employer </h4>
                    <div className="mb-3 field">
                      <input 
                        type="text" 
                        name="designation" 
                        value={state.designation} 
                        onChange={handleChange} 
                        id="desig" 
                        className="form-control" 
                        placeholder="Designation" 
                        required 
                        />
                      <label htmlFor="desig"> Designation </label>
                    </div>
                    {errors.designation?<p className="text-danger">{errors.designation}</p>:''}
                    <div className="mb-3 field">
                      <input 
                        type="text" 
                        name="company_name" 
                        value={state.company_name} 
                        onChange={handleChange} 
                        id="comname" 
                        className="form-control" 
                        placeholder="Company/Business Name" 
                        required 
                        />
                      <label htmlFor="comname"> Company/Business Name </label>
                    </div>
                    {errors.company_name?<p className="text-danger">{errors.company_name}</p>:''}
                    <div className="row mb-3">

                       <div className="col-md-4 pe-0 position-relative" id="datepicker1">
                       <label htmlFor="from">From</label>
                       <div>

                    <DatePicker
                      onChange={onChange}
                      value={value1}
                      monthPlaceholder="mm"
                      yearPlaceholder="yyyy"
                      dayPlaceholder="dd"
                    />
                  </div>
                        {/* <input type="text " className="form-control " data-provide="datepicker " data-date-container="#datepicker1 " placeholder="From " required /> */}
                      </div>
                      <div className="col-md-4 pe-0 position-relative" id="datepicker2">
                      <label>To</label>
                       <div>

                    <DatePicker
                      onChange={onChange1}
                      value={value2}
                      monthPlaceholder="mm"
                      yearPlaceholder="yyyy"
                      dayPlaceholder="dd"
                    />
                  </div>
                        {/* <input type="text " className="form-control " data-provide="datepicker " data-date-container="#datepicker2 " placeholder="To " required /> */}
                      </div>
                      <div className="col-md-4 pe-0 position-relative">
                        <div className="form-check form-switch">
                        <input type="checkbox" 
                          className="form-check-input"
                          name="check1"
                          checked={state.check1}
                          onChange={handleChange} 
                          id="customSwitch1" 
                          />
                          <label className="form-check-label mx-0 px-0 font-11" htmlFor="customSwitch1">Currently works here</label>
                        </div>
                      </div>
                      <div className="mt-2 mb-3 field">
                        <textarea 
                         rows={3} 
                         id="text-area" 
                         type="text" 
                         name="summary" 
                         value={state.summary} 
                         onChange={handleChange} 
                         className="form-control" 
                         placeholder="Summary"  
                         />
                        <label htmlFor="text-area"> Summary </label>
                      </div>
                      <div className="field my-3">
                        <a href="#" className="text-link"><i className="mdi mdi-plus-circle mdi-18px" /> Add Employer </a>
                      </div>
                    </div></form>
                  <div className="mt-2 mb-3">
                    <form className="border px-3">
                      <h4> Education </h4>
                      <div className="mb-3 field">
                        <input type="text" 
                        name="degree" 
                        value={state.degree} 
                        onChange={handleChange} 
                        id="degree" 
                        className="form-control" 
                        placeholder="Degree" 
                        required />
                        <label htmlFor="degree"> Degree </label>
                      </div>
                      <div className="mb-3 field">
                        <input type="text" 
                        name="school_name" 
                        value={state.school_name} 
                        onChange={handleChange} 
                        id="school" 
                        className="form-control" 
                        placeholder="Institution/School Name" 
                        required />
                        <label htmlFor="school"> Institution/School Name </label>
                      </div>
                      <div className="mb-3 field">
                        <input type="text" 
                        name="field" 
                        value={state.field} 
                        onChange={handleChange} 
                        id="study-field" 
                        className="form-control" 
                        placeholder="Field of Study/Major " />
                        <label htmlFor="study-field"> Field of Study/Major </label>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-3 mb-3 pe-0 field">
                          <input type="text" 
                          name="grade" 
                          id="grade" 
                          value={state.grade} 
                          onChange={handleChange} 
                          className="form-control" 
                          placeholder="Grade " />
                          <label htmlFor="grade"> Grade </label>
                        </div>
                        <div className="col-md-3 pe-0 position-relative" id="datepicker1">
                        <label htmlFor="from">From</label>
                       <div>

                    <DatePicker
                      onChange={onChange3}
                      value={value3}
                      monthPlaceholder="mm"
                      yearPlaceholder="yyyy"
                      dayPlaceholder="dd"
                    />
                  </div>
                          {/* <input type="text " className="form-control " data-provide="datepicker " data-date-container="#datepicker1 " placeholder="From " required /> */}
                        </div>

                        <div className="col-md-3 pe-0 position-relative" id="datepicker2">
                        <label htmlFor="from">To</label>
                       <div>

                    <DatePicker
                      onChange={onChange4}
                      value={value4}
                      monthPlaceholder="mm"
                      yearPlaceholder="yyyy"
                      dayPlaceholder="dd"
                    />
                  </div>
                          {/* <input type="text " className="form-control " data-provide="datepicker " data-date-container="#datepicker2 " placeholder="End " required /> */}
                        </div>
                        <div className="col-md-3 pe-0 position-relative">
                          <div className="form-check form-switch">
                            <input type="checkbox" 
                            className="form-check-input"
                            checked={state.check3}
                            name="check3"
                            onChange={handleChange} 
                            id="customSwitch1" />
                            <label className="form-check-label mx-0 px-0 font-11" htmlFor="customSwitch1">Currently pursuing</label>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="field my-3">
                      <a href="#" className="text-link"><i className="mdi mdi-plus-circle mdi-18px" /> Add Education</a>
                    </div>
                  </div>
                  <div className="field d-inline mt-2 mb-3">
                    <h5> Do you have 1+ years of experience as a Dot Net Developer? </h5>
                    <div className="form-check form-check-inline position-relative">
                      <input type="radio"
                      id="customRadio7"
                      name="customRadio3"
                      value="yes"
                      checked={state.customRadio3==='yes'}
                      onChange={radioChange}
                      className="form-check-input" 
                      />
                      <label className="form-check-label" htmlFor="customRadio7">Yes</label>
                    </div>
                    <div className="form-check form-check-inline position-relative ms-5">
                      <input type="radio"
                      id="customRadio8"
                      name="customRadio3"
                      value="no"
                      checked={state.customRadio3==='no'}
                      onChange={radioChange}
                      className="form-check-input" 
                      />
                      <label className="form-check-label" htmlFor="customRadio8">No</label>
                    </div>
                  </div>
                  <div className="field d-inline mt-2 mb-3">
                    <h5> Do you have hand on experience on MVC </h5>
                    <div className="form-check form-check-inline position-relative">
                      <input type="radio"
                      id="customRadio9"
                      name="customRadio4"
                      value="yes"
                      checked={state.customRadio4==='yes'}
                      onChange={radioChange}
                      className="form-check-input"
                       />
                      <label className="form-check-label" htmlFor="customRadio9">Yes</label>
                    </div>
                    <div className="form-check form-check-inline position-relative ms-5">
                      <input type="radio"
                      id="customRadio10"
                      name="customRadio4"
                      value="no"
                     checked={state.customRadio4==='no'}
                     onChange={radioChange}
                     className="form-check-input" 
                     />
                      <label className="form-check-label" htmlFor="customRadio10">No</label>
                    </div>
                  </div>
                  <div className="field d-inline mt-2 mb-3">
                    <h5> Do you have working experience wit GIT </h5>
                    <div className="form-check form-check-inline position-relative">
                      <input type="radio"
                      id="customRadio11"
                      name="customRadio5"
                      value="yes"
                      checked={state.customRadio5==='yes'}
                      onChange={radioChange}
                      className="form-check-input" 
                       />
                      <label className="form-check-label" htmlFor="customRadio11">Yes</label>
                    </div>
                    <div className="form-check form-check-inline position-relative ms-5">
                      <input type="radio"
                      id="customRadio12"
                      name="customRadio5"
                      value="no"
                      checked={state.customRadio5==='no'}
                      onChange={radioChange}
                      className="form-check-input" />
                      <label className="form-check-label" htmlFor="customRadio12">No</label>
                    </div>
                  </div>
                  <div className="field d-inline mt-2 mb-3">
                    <h5> Can you work independently? </h5>
                    <div className="form-check form-check-inline position-relative">
                      <input type="radio"
                      id="customRadio13"
                      name="customRadio6"
                      value="yes"
                      checked={state.customRadio6==='yes'}
                      onChange={radioChange}
                      className="form-check-input" />
                      <label className="form-check-label" htmlFor="customRadio13">Yes</label>
                    </div>
                    <div className="form-check form-check-inline position-relative ms-5">
                      <input type="radio"
                      id="customRadio14"
                      name="customRadio6"
                      value="partially"
                      checked={state.customRadio6==='partially'}
                      onChange={radioChange}
                      className="form-check-input" />
                      <label className="form-check-label" htmlFor="customRadio14">Partially</label>
                    </div>
                    <div className="form-check form-check-inline position-relative ms-5">
                      <input type="radio"
                      id="customRadio15"
                      name="customRadio6"
                      value="no"
                      checked={state.customRadio6==='no'}
                      onChange={radioChange}
                      className="form-check-input" />
                      <label className="form-check-label" htmlFor="customRadio15">No</label>
                    </div>
                  </div>
                  <div className="field mt-3 mb-3">
                    <input className="form-control" 
                    type="text" 
                    name="expert" 
                    value={state.expert} 
                    onChange={handleChange} 
                    id="expert" 
                    placeholder="Technical Skills - Expert Level" 
                    required />
                    <label htmlFor="expert"> Technical Skills - Expert Level </label>
                  </div>
                  <div className="field mt-2 mb-3">
                    <input className="form-control" 
                    type="text" 
                    name="intermediate" 
                    value={state.intermediate} 
                    onChange={handleChange} 
                    id="intermediate" 
                    placeholder="Technical Skills - Intermediate Level" 
                    required />
                    <label htmlFor="intermediate"> Technical Skills - Intermediate Level </label>
                  </div>
                  <div className="field mt-2 mb-3">
                    <input className="form-control" 
                    type="text" 
                    name="beginner" 
                    id="beginner" 
                    value={state.beginner} 
                    onChange={handleChange} 
                    placeholder="Technical Skills - Beginner Level" 
                    required />
                    <label htmlFor="beginner"> Technical Skills - Beginner Level </label>
                  </div>
                  <div className="row mt-3 mb-3">
                    <div className="col-md-6 pe-0 dropdown">
                      <label>Source</label>
                    <SelectSearch    
                    filterOptions={fuzzySearch} 
                    onChange={handleSourceSocial} 
                    search 
                    emptyMessage="Not found" 
                    options={sourceData.sourceSocial}  
                    name="source" 
                    placeholder="Choose Source" />
                      {/* <input className="form-control dropdown-toggle " type="text" name="dropdownMenuButton" placeholder="Source" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" required />
                      <label className="w-50" htmlFor="dropdownMenuButton"> Source </label>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="p-2">
                          <input className="form-control" aria-controls placeholder="Search" type="search" />
                        </div>
                        <div className="p-2 overflow-scroll fix-dropdown">
                          
                        </div>
                      </div> */}
                    </div>
                    <div className="col-md-6">
                    <label>Source</label>
                    <SelectSearch    
                    filterOptions={fuzzySearch} 
                    onChange={handleSource} 
                    search 
                    emptyMessage="Not found" 
                    options={sourceData.source}  
                    name="source_cat" 
                    placeholder="Choose Source-Category" />
                    </div>
                    {/* <div className="col-md-6 dropdown">
                     <input className="form-control dropdown-toggle " type="text" value={state.source} name="dropdownMenuButton1" placeholder="Source Category" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" required />
                      <label className="w-50" htmlFor="dropdownMenuButton1"> Source Category </label>

                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <SelectSearch    filterOptions={fuzzySearch} onChange={handleSource} search emptyMessage="Not found" options={sourceData.source}  name="source" placeholder="Choose Source" /> */}
                        {/* <div className="p-2">
                          <input className="form-control" aria-controls placeholder="Search" type="search" />
                        </div> */}
                        {/* <div className="p-2 overflow-scroll fix-dropdown"> */}


                      {/* </div>
                    </div> */}
                  </div>
                  <div className="field dropdown">
                    <label className="abc"> Tags</label>
                  <select className="form-control" name="tags" onChange={handleChange}>
                        {Tags.map((u,i)=>
                        <option key={i}>{u}</option>
                        )}
                      </select>
                    {/* <input className="form-control dropdown-toggle " type="text" name="dropdownMenuButton2" placeholder="Searh/Add New" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                    <label className="w-50" htmlFor="dropdownMenuButton2"> Tags </label>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <div className="p-2 overflow-scroll fix-dropdown">
                     
                      </div>
                    </div> */}
                  </div>
                  <div className="field position-relative">
                    <div className="form-check form-switch">
                    <input type="checkbox" 
                      className="form-check-input"
                      name="check2"
                      checked={state.check2}
                      onChange={handleChange} 
                      id="customSwitch1" 
                    />
                      <label className="form-check-label mx-0 px-0 font-14" htmlFor="customSwitch1">Send an acknowledgment email to candidate</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AddCandidate
