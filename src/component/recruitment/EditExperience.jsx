import React,{useState} from 'react'

function EditExperience() {
const[state,setState]=useState({
  title:'Senior Dotnet and Xamarin Developer',
  companyName:'COGNITER TECHNOLOGIES',
  from:'Nov-2018',
  to:'',
  summary:'',

})
const[toggle,setToggle]=useState(false)

const[companyNameError,setCompanyNameError]=useState('')
const[fromError,setFromError]=useState('')
const handleChange=(e)=>{
  const { name, value } = e.target;

  setState({ ...state, [name]: value });
}

const handleToggle=()=>{
  setToggle(!toggle)
}

const handlesubmit=(e)=>{
  console.log(state.companyName)
  e.preventDefault()
  if(state.companyName==='')
  {
    setCompanyNameError('This field is required')
  }
  if(state.from==='')
  {
    setFromError('This field is required')
  }
}

    return (
      <>
      <div className="modal-dialog modal-dialog-scrollable" style={{maxWidth: '800px!important'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Edit Previous Employers</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body">
          <div className="card">
            <div className="card-header bg-light d-flex justify-content-between align-items-center">
              <p className="text-info font-600 align-middle mb-0 "><span className="border-bottom border-info">{state.title}</span></p>
              <a href="#"><i className="mdi mdi-trash-can-outline align-middle" /></a>
            </div>
            <div className="card-body">
              <div className="field mb-3">
                <input 
                 className="form-control" 
                 type="text" 
                 name="companyName" 
                 id="companyName" 
                 value={state.companyName} 
                 onChange={handleChange}  />
                <label htmlFor="city">Company/Business Name <sup className="text-danger">*</sup></label>
              </div>
              {companyNameError?<p className='alert alert-danger'>{companyNameError}</p>:''}
              <div className="row align-items-baseline">
                <div className="col-md-4">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="from" 
                     id="from" 
                     value={state.from}  
                     onChange={handleChange}/>
                    <label htmlFor="street">From <sup className="text-danger">*</sup></label>
                  </div>
                  {fromError?<p className='alert alert-danger'>{fromError}</p>:''}
                </div>
                <div className="col-md-3">
                  <div className="field mb-3">
                    <input 
                     className="form-control" 
                     type="text" 
                     name="street" 
                     id="street" 
                     defaultValue="Apr-2021" />
                    <label htmlFor="street">To</label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-check form-switch">
                    <input 
                     type="checkbox" 
                     className="form-check-input" 
                     id="customSwitch1" 
                     value={toggle} 
                     onChange={handleToggle}/>
                    <label className="form-check-label position-relative" htmlFor="customSwitch1">Currently works here</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-floating">
                  <textarea 
                   className="form-control" 
                   placeholder="Leave a comment here" 
                   id="floatingTextarea" 
                   style={{height: 100}} 
                   defaultValue={""} />
                  <label htmlFor="floatingTextarea" style={{left: '15px!important'}}>Summary</label>
                </div>
              </div>
            </div>
          </div>
         
          <div className="modal-footer">
            <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
            <button type="button" className="btn btn-info" onClick={handlesubmit}>Save</button>
          </div>
        </div>
      </div>
    </div>
      </>
    )
}

export default EditExperience
