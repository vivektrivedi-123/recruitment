import React,{useState,useEffect} from 'react'
import SelectSearch from 'react-select-search';
import fuzzySearch from '../FuzzySearch'
import currency from '../../Currency1.json'
import countryData from '../../Country.json'
import axios from '../../common/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from "../dropdown"
function LocationEditModal({id,parentCallback}) {
    let token=localStorage.getItem('login')
    console.log(id)
    let loc_id=id
const[state,setState]=useState({
  location_name:"",
  location_address: "",
  location_city: "",
  location_state: "",
  postal_code:"",
  country: "",
  website: "",
  contact:"",
  currency:'',
  primary_language:'',
  date_format:"",
  time_zone:""
})

const city=[
    {
        "id": "1",
        "name": "Mumbai",
        "state": "Maharashtra",
        "value":"Mumbai"
    },
    {
        "id": "2",
        "name": "Delhi",
        "state": "Delhi",
        "value":"Delhi"
    },
    {
        "id": "3",
        "name": "Bengaluru",
        "state": "Karnataka",
        "value":"Bengaluru"
    },
    {
        "id": "4",
        "name": "Mohali",
        "state": "Punjab",
        "value":"Mohali"
    },
    {
      "id": "5",
      "name": "Chandigarh",
      "state": "Punjab",
      "value":"Chandigarh"
  },
]


useEffect(()=>{
    axios.get(`location/${loc_id}`,{
        headers: {
            'Authorization': 'Bearer '+ token
         }
    }).then((res)=>{
        console.log(res.data)
        setState(res.data.results)
    }).catch((err)=>{
        console.log(err)
    })
},[id])
const[branchError,setBranchError]=useState('')
const[cityError,setCityError]=useState('')
const[countryError,setCountryError]=useState('')

const handleCountry=(e)=>{
    console.log(e)
    setState({ ...state, ["country"]: e})
}

const handleCurrency=(e)=>{
    console.log(e)
    setState({ ...state, ["currency"]: e})
}


const handleCity=(e)=>{
    console.log(e)
    setState({ ...state, ["location_city"]: e});
}
const handleChange=(event)=>{

    const { name, value } = event.target;
        console.log(value)
        setState({ ...state, [name]: value});
}


const handleSubmit=(e)=>{

  e.preventDefault();
  let data={
    location_name:state.location_name,
    location_address:state.location_address,
    location_city: state.location_city,
    location_state:state.location_state,
    postal_code:state.postal_code,
    country:state.country,
    currency:state.currency,
    primary_language:state.primary_language,
    date_format:state.date_format,
    time_zone:state.time_zone
  }
  if(!validation())
  {
    axios.put(`location/${loc_id}`,data,{
      headers: {
        'Authorization': 'Bearer '+ token
     }
    }).then((res)=>{
      toast.success("successfully updated location");
    console.log(res.data)
  
    }).catch((err)=>{
      toast.error("something went wrong");
      console.log(err)})
  }
  parentCallback()
}

const validation=()=>{
  if(state.location_name==='')
  {
    setBranchError('required')
  }
  if(state.location_city==='')
  {
    setCityError('required')
  }
  if(state.country==='')
  {
    setCountryError('required')
  }

  if(state.location_name==='' || state.location_city==='' || state.country==='')
  {
    return true
  }
  else{
    return false
  }
}

    return (
        <>
         <ToastContainer />
         
<div id="full-width-modal21" className="modal fade p-0" tabIndex={-1} role="dialog" aria-labelledby="fullWidthModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-full-width m-0 w-100 modal-dialog-scrollable vh-100" style={{minWidth: '992px!important'}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title" id="fullWidthModalLabel">Add New Location</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>
      <div className="modal-body bg-light">
        <div className="row">
          <div className="col-lg-9">
            <div className="bg-white p-3">
              <div className="form-floating mb-3">
                <input type="text" 
                className="form-control py-0" 
                name="location_name" 
                value={state.location_name} 
                onChange={handleChange} 
                id="floatingInput" 
                placeholder="location" 
                style={{height: 'calc(2.5rem + 2px)!important'}}
                 />
                <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Branch/ Location Name <span className="text-danger">*</span></label>
              </div>
              {branchError?<p className='text-danger'>{branchError}</p>:''}
              <h4 className="my-3">Address</h4>
              <div className="form-floating mb-3">
                <input type="text" 
                className="form-control py-0" 
                name="location_address" 
                value={state.location_address} 
                onChange={handleChange} 
                id="floatingInput" 
                placeholder="location" 
                style={{height: 'calc(2.5rem + 2px)!important'}} />
                <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Street</label>
              </div>
              <div className="row align-items-end">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="simpleinput" className="form-label">City <span className="text-danger">*</span></label>
                    {/* <select className="form-select" id="example-select">
                      <option>select</option>
                    </select> */}
                      <SelectSearch  
                      filterOptions={fuzzySearch} 
                      onChange={handleCity} 
                      search 
                      emptyMessage="Not found" 
                      options={city}  
                      value={state.location_city}
                    //   name="location_city" 
                      placeholder="Choose your city" />   
                  </div>
                  {cityError?<p className='text-danger'>{cityError}</p>:''}
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="simpleinput" className="form-label">State/ Province </label>
                    <input type="text" 
                    id="simpleinput" 
                    className="form-control" 
                    name="location_state" 
                    value={state.location_state} 
                    onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="row align-items-end">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="simpleinput" className="form-label" >Zip/ Postal Code </label>
                    <input type="text" 
                    id="simpleinput" 
                    className="form-control"  
                    name="postal_code" 
                    value={state.postal_code} 
                    onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="simpleinput" className="form-label">Country <span className="text-danger">*</span></label>
                    {/* <select className="form-select" id="example-select">
                      <option>select</option>
                      <option>Afghanistan</option>
                      <option>Aland Island</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                    </select> */}
                     <SelectSearch    
                      
                     search 
                     emptyMessage="Not found" 
                     options={countryData}  
                    //  name="country" 
                     value={state.country}
                     filterOptions={fuzzySearch} 
                     onChange={handleCountry}
                     placeholder="Choose your country" /> 
                  </div>
                  {countryError?<p className='text-danger'>{countryError}</p>:''}
                </div>
              </div>
              <h4 className="my-3">Other Details</h4>
              <div className="row align-items-end">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="simpleinput" className="form-label">Currency </label>
                    {/* <select className="form-select" id="example-select">
                      <option>select</option>
                      <option>AED (Emirati Dirham)</option>
                      <option>AOA (Angola Kwanza)</option>
                      <option>ARS (Argentina Peso)</option>
                    </select> */}
                    <SelectSearch    
                     filterOptions={fuzzySearch} 
                     onChange={handleCurrency} 
                     search 
                     emptyMessage="Not found" 
                     options={currency}  
                     value={state.currency}
                     name="currency" 
                     placeholder="Choose your currency" /> 
              
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="simpleinput" className="form-label">Time Zone <span className="text-danger">*</span></label>
                    <select className="form-select" id="example-select" name="time_zone" value={state.time_zone} onChange={handleChange}>
                      <option>select</option>
                      <option>(GMT-11:00) Amerixan Samoa - SST</option>
                      <option>(GMT-11:00) Midway Island - SST</option>
                      <option>(GMT-10:00) Hawaii - HST</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row align-items-end">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="simpleinput" className="form-label">Primary Language </label>
                    <select className="form-select" id="example-select" onChange={handleChange} name="primary_language" value={state.primary_language}>
                      <option>select</option>
                      <option>Chinese (Simplified)</option>
                      <option>Chinese (Traditional)</option>
                      <option>Dutch</option>
                      <option>English</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="simpleinput" className="form-label">Date Format <span className="text-danger">*</span></label>
                    <select className="form-select" id="example-select" name="date_format" value={state.date_format} onChange={handleChange}>
                      <option>select</option>
                      <option>DD-MM-YYYY</option>
                      <option>MM-DD-YYYY</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <h4>Manage Locations</h4>
            <p>Do you have a company with more than one office? You can use "Locations" to store information about every office of your company and use it across Freshteam.</p>
            <h4 className="mt-2">Where is this shown/used?</h4>
            <p>1. This reflects in your career page - candidates apply to jobs in their preferred locations.</p>
            <p>2. While making an offer to a candidate, you can choose the location where you would like to hire the candidate.</p>
            <h4 className="mt-2">Resource article(s)</h4>
            <a href="#">Associating locations to languages.</a><br />
            <a href="#">Adding a Company Location or Branch.</a>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" 
        className="btn btn-clear me-2" data-bs-dismiss="modal">Cancle</button>
        <button type="button" className="btn btn-primary"  onClick={handleSubmit}>Save</button>
      </div>
    </div>
  </div>
</div>
 </>
    )
}

export default LocationEditModal
