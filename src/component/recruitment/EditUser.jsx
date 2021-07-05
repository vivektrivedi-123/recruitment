import React, { useEffect,useState } from 'react'

function EditUser(props) {
  const[user,setUser]=useState({
    firstName:'',
    lastName:'',
    middleName:'',
    email:'',
    dob:'',
    skypeId:'',
    city:'',
    state:'',
    street:'',
    mobile:'',
    phone:''
  })
  const[firstName,setFirstName]=useState('');
  const[lastName,setLastName]=useState('')
  const[middleName,setMiddleName]=useState('')
  const[email,setEmail]=useState('');
  const[skypeId,setSkypeId]=useState('');
  const[dob,setDob]=useState('')
  const[gender,setGender]=useState('')
  const[street,setStreet]=useState('')
  const[city,setCity]=useState('')
  const[state,setState]=useState('');
  const[country,setCountry]=useState('');
  const[zip,setZip]=useState('')
  const[phone,setPhone]=useState('');
  const[mobile,setMobile]=useState('')

const[firstNameError,setFirstNameError]=useState('')
const[emailError,setEmailError]=useState('')
const[skypeIdError,setSkypeIdError]=useState('')
const handlechange=(event)=>{
  const { name, value } = event.target;
  console.log(value)
  setUser({ ...user, [name]: value });
}


useEffect(()=>{
  console.log("user=",props.user)
 // setUser(props.user)
  if(props.user.length>0)
  {
  setUser({
    firstName:props.user[0].name,
    lastName:props.user[0].name,
    email:props.user[0].email
  })
  }
  
},[props])
  

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(user.email)
  if(user.firstName==='')
  {
    setFirstNameError('This field is required');
  }
  if(user.email==='' || user.email===undefined)
  {
    setEmailError('This field is required');
  }
  if(user.skypeId==='' || user.skypeId===undefined)
  {
    setSkypeIdError('This field is required')
  }
  console.log(user)
}

const handleGender=(e)=>{
  console.log(e.target.value)
}


    return (
       <>
      
       <div className="modal-dialog" style={{maxWidth: '800px!important'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="standard-modalLabel">Edit Profile</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        {/* {user && user.map((u,i)=>  */}
        <div className="modal-body">
          <div className="row">
            <div className="col-md-4">
              <div className="field mb-3">
                <input className="form-control" 
                type="text" 
                name="Name" 
                id="Name" 
                value={user.firstName} 
                onChange={handlechange} 
                placeholder="Search" />
                <label htmlFor="Name">First Name <sup className="text-danger">*</sup></label>
              </div>
              {firstNameError?<p className="alert alert-danger">{firstNameError}</p>:''}
            </div>
            <div className="col-md-4">
              <div className="field mb-3">
                <input className="form-control" 
                type="text" 
                name="middle-name" 
                id="middle-name" 
                placeholder="Search..." />
                <label htmlFor="middle-name">Middle Name </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="field mb-3">
                <input className="form-control" 
                type="text" 
                name="last-name" 
                id="last-name" 
                placeholder="Search..." />
                <label htmlFor="last-name">Last Name <sup className="text-danger">*</sup></label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="field mb-3">
                <input className="form-control" 
                type="text" 
                name="email" 
                id="email" 
                value={user.email} 
                onChange={handlechange} />
                <label htmlFor="email">Email <sup className="text-danger">*</sup></label>
              </div>
              {emailError?<p className="alert alert-danger">{emailError}</p>:''}
            </div>
            <div className="col-md-6">
              <div className="field mb-3">
                <input className="form-control" 
                type="text" 
                name="skypeId" 
                id="skypeId" 
                value={user.skypeId} 
                placeholder="search..." 
                onChange={handlechange} />
                <label htmlFor="skype">skype ID <sup className="text-danger">*</sup></label>
              </div>
              {skypeIdError?<p className="alert alert-danger">{skypeIdError}</p>:''}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3 position-relative" id="datepicker1">
                <input type="text" 
                className="form-control" 
                data-provide="datepicker" 
                data-date-container="#datepicker1" 
                placeholder="Date of Birth" /><i className="mdi mdi-calendar position-absolute" style={{right: 10, top: 10}} />
              </div>
            </div>
            <div className="col-md-6">
              <select className="form-control select2" data-toggle="select2" onChange={handleGender}>
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>
          <h5 className="font-600 text-info mt-sm-2 mb-sm-3 fs-4">Postal Address</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="field mb-3">
                <input 
                className="form-control" 
                type="text" 
                name="street" 
                id="street" 
                placeholder="search..." />
                <label htmlFor="street">Street</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="field mb-3">
                <input 
                className="form-control" 
                type="text" 
                name="city" 
                id="city" 
                defaultValue="Panipat" />
                <label htmlFor="city">City</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="field mb-3">
                <input 
                className="form-control" 
                type="text" 
                name="street" 
                id="street" 
                defaultValue="Haryana" />
                <label htmlFor="street">State</label>
              </div>
            </div>
            <div className="col-md-4">
              <select className="form-control select2" data-toggle="select2">
                <option>Country</option>
                <option>Afganistan</option>
                <option>Almad Iseland</option>
                <option>Albania</option>
                <option>Algeria</option>
              </select>
            </div>
            <div className="col-md-2">
              <div className="field mb-3">
                <input 
                  className="form-control" 
                  type="text" 
                  name="city" 
                  id="city" 
                  defaultValue={132106} />
                <label htmlFor="city">Zipcode</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="field mb-3">
                <input 
                 className="form-control" 
                 type="text" 
                 name="street" 
                 id="street" 
                 placeholder="search..." />
                <label htmlFor="street">Phone</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="field mb-3">
                <input 
                className="form-control" 
                type="text" 
                name="city" 
                id="city" 
                placeholder="search..." />
                <label htmlFor="city">Mobile</label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button type="button" className="btn btn-clear" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-info" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
    
       </>
    )
}

export default EditUser
