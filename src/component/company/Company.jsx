import React, { useState,useEffect } from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import Sidebar from '../settings/Sidebar'
import data from '../../JobData.json'
import SelectSearch from 'react-select-search';
import fuzzySearch from '../FuzzySearch'
import './Company.css'
import axios from '../../common/axios'
function Company() {
  const[alert,setAlert]=useState('')
  let token=localStorage.getItem("login")
    const[goToUrl,setGoToUrl]=useState(true)
    const[industryList,setIndustryList]=useState(data.industary)
    const[companyLanguageList,setCompanyLanguageList]=useState(data.companyLanguage)
    const[file,setFile]=useState('');
    const[file1,setFile1]=useState('');
    const[companyName,setCompanyName]=useState('Rudra Innovative Software (P)Ltd.')
    const[portalName,setPortalName]=useState('Rudra Innovative Software (P)Ltd.')
    const[portalUrl,setPortalUrl]=useState('https://rudrainnovatives.freshteam.com')
    const[industry,setIndustry]=useState('')
    const[companyLanguage,setCompanyLanguage]=useState('')
   const[dateFormat,setDateFormat]=useState('')
    const[companyNameError,setCompanyNameError]=useState('')
    const[industryError,setIndustryError]=useState('')
    const[companyLanguageError,setCompanyLanguageError]=useState('')
    const[portalNameError,setPortalNameError]=useState('')
const[header,setHeader]=useState(false)

    const handleIndustry=(e)=>{
      console.log(e)
        setIndustry(e)
        if(e!=='')
        {
            setIndustryError('')
        }
    }

    const handleCompanyLanguage=(e)=>{
        setCompanyLanguage(e)
        if(e!=='')
        {
            setCompanyLanguageError('')
        }
    }

    
const handleUpload=(event)=> {
    setFile(event.target.files[0]);
  
  }
  const handleUpload1=(event)=> {
    setFile1(event.target.files[0]);
    // let data = new FormData() 
    // data.append('file', event.target.files[0]);
    // data.append('project_id',projectName);
    // console.log(data)
   
  }
const handleCompanyName=(e)=>{
setCompanyName(e.target.value)
if(e.target.value!=='')
{
    setCompanyNameError('')
}
}

const handlePortalName=(e)=>{
setPortalName(e.target.value)
if(e.target.value!=='')
{
    setPortalNameError('')
}
}
const handlePortalUrl=(e)=>{
    setPortalUrl(e.target.value)
}

const goTo=()=>{
  
    setGoToUrl(false)
}

const handleDate=(e)=>{
  setDateFormat(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault()

    let d=new FormData();
    d.append('company_name',companyName);
    d.append('employee_portal_name',portalName);
    d.append('employee_portal_url',portalUrl);
    d.append('company_logo',file);
    d.append('favicon',file1)
    d.append('industry',industry);
    d.append('company_language',companyLanguage)
    d.append('date_format',dateFormat)
   
    if(validation(e))
    {
      
      axios.post('company',d,{
        headers: {
          'Authorization':'Bearer '+ token
       }
      }).then((res)=>{
        console.log(res.data)
        setAlert('success')
        setFile1("")
        setFile('')
        handleCancel();
        setHeader(!header)
      }).catch((err)=>{ 
        setAlert('failed')
        console.log(err)
      })
    } 


}

const handleCancel=()=>{
  console.log('cancel')
 
}


const validation=(e)=>{
    if(companyName==='')
    {
        setCompanyNameError('This field is required')
    }
    if(industry==='')
    {
        setIndustryError('please select Industry')
    }
    if(companyLanguage==='')
    {
        setCompanyLanguageError("please select language")
    }
    if(portalName==='')
    {
        setPortalNameError('This field is required')
    }
    if(companyName==='' ||industry==='' || companyLanguage==='' || portalName==='')
    {
      return false
    }
    else{
        return true;
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
         <Topbar header={header}/>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="page-aside-left bg-white shadow settings p-0" style={{top: '55px!important', width: 'inherit!important'}}>
         
          <Sidebar name="Company"/>
          </div>
         
        </div>
        <div className="col-10">
        <button className="btn btn-primary m-2" onClick={handleSubmit}>save</button>
          {/* <button className="btn btn-secondary" onClick={handleCancel}>cancel</button>   */}
          <div className="row">
        
          {alert==='success'?<div className="alert alert-success">Successfully submitted</div>:''}
            <div className="col-lg-9">
              <div className="ms-4 mt-3 p-4 bg-white">
                <div className="field mb-3">
                  <input className="form-control" 
                  type="text" 
                  name="street" 
                  id="street" 
                  onChange={handleCompanyName} 
                  value={companyName} />
                  <label htmlFor="street">Company Name <sup className="text-danger">*</sup></label>
                </div>
                {companyNameError?<p className='alert alert-danger m-0'>{companyNameError}</p>:""}

                <div className="field mb-3">
                 {/* <select onChange={(e)=>console.log(e)}   className="form-control select2" data-toggle="select2" >
                  {industryList.map((u,i)=>
             <option key={i} value={u.name} >{u.name}</option>
             )}
             </select> 
              */}
                <SelectSearch    
                filterOptions={fuzzySearch} 
                onChange={handleIndustry} 
                search 
                emptyMessage="Not found" 
                options={industryList}  
                name="industry" 
                placeholder="Choose your industry" /> 
                  <label htmlFor="street"> Inustury</label>
                </div>
                {industryError?<p className='alert alert-danger m-0'>{industryError}</p>:""}
                <div className="mb-3">
                  <div className="field mb-0">
                  <SelectSearch    
                  filterOptions={fuzzySearch} 
                  onChange={handleCompanyLanguage} 
                  search 
                  emptyMessage="Not found" 
                  options={companyLanguageList}  
                  name="company-language" 
                  placeholder="Choose your language" />
                    <label htmlFor="street">Company Language</label>
                  </div><span className="font-13 text-muted">*The language you choose will be the default language for all locations and your career portal</span>
                </div>
                {companyLanguageError?<p className='alert alert-danger m-0'>{companyLanguageError}</p>:""}

                <div className="mb-3">
                  <div className="field mb-0">
                    <select className="form-select" id="example-select" onChange={handleDate}>
                      <option>DD-MM-YYYY</option>
                      <option>MM-DD-YYYY</option>
                    </select>
                    <label htmlFor="street">Date Format</label>
                  </div><span className="font-13 text-muted">Example: 04-05-2021 | 04 May 2021</span>
                </div>
                <h4 className="text-info font-600 my-4">Employee Portal Settings</h4>
                <div className="row align-items-baseline">
                  <div className="col-md-4">
                    <div className="field mb-3">
                      <input className="form-control" 
                      onChange={handlePortalName} 
                      type="text" 
                      name="street" 
                      id="street" 
                      value={portalName} />
                      <label htmlFor="street">Employee Portal Name</label>
                    </div>
                  </div>
                  {portalNameError?<p className='alert alert-danger m-0'>{portalNameError}</p>:""}

                  <div className="col-md-4">
                    <div className="field mb-0">
                      <input type="file" 
                      className="form-control" 
                      id="inputGroupFile02" 
                      onChange={handleUpload} />
                      <label htmlFor="street">Change Logo</label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="field mb-0">
                      <input type="file" 
                      className="form-control" 
                      id="inputGroupFile02" 
                      onChange={handleUpload1}/>
                      <label htmlFor="street">Chnage Favicon</label>
                    </div>
                  </div>
                </div>
                <div className="field mb-3">
                  <input className="form-control"  
                  onChange={handlePortalUrl} 
                  type="text" 
                  name="street" 
                  id="street" 
                  value={portalUrl} 
                  disabled={goToUrl} />
                  <label htmlFor="street">Employee Portal URL</label>
                </div>

                <div className="alert alert-light px-1" role="alert">
                  <p className="text-info">For renaming employee portal url in your custom domain, say <span className="font-600"> people.yourcompany.com</span>, please raise a request here. To change only the sub-domain in the url, say <span className="font-600">yourcompany.freshteam.com</span>, please reach out to Freshteam Support. <a href="#!" className="text-primary"> Know more</a></p>
                  <button className="btn btn-info" onClick={goTo}>Rename to new URL</button>
                  {/* <button className='btn btn-success m-2 p-2' onClick={handleSubmit}>Update</button> */}
                </div>
              </div>
               
            </div>
           
            <div className="col-lg-3 text-info p-4">
              <h4>Setting up basic information</h4>
              <p>Would you like your HR portal to reflect your company's brand identity? You can use these settings to upload your logo, a custom favicon and even change URL of the HR portal to your own domain like <span className="font-600"> people.yourcompany.com</span></p>
              <h4 className="mt-3">Where is this shown/used?</h4>
              <p>1. Your employee portal will have the logo, favicon, portal name and URL which you setup here.</p>
              <p>2. When you publish jobs to job boards, the 'company name' and 'industry' given here will be used.</p>
              <p>3. Most of the emails and notifications sent from the HR portal will have the company name in the signature by default.</p>
              <h4 className="mt-3">Where is this shown/used?</h4>
              <a href="#" className="text-primary">How to Setup your Employee Portal?</a>
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

export default Company
