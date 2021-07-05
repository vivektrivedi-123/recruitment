import React, { useState } from 'react'
import Navigation from '../../common/Navigation'
import Sidebar from '../settings/Sidebar'
import Topbar from '../../common/Topbar'
import "./Career.css"
function CareerSite() {
    const[  state,setState]=useState({
        site_name:"",
        primary_language:"",
        logo:"",
        favicon:"",
        banner:"",
        sharing_image:""

    })

  const handleChange=(e)=>{
      const{name,value}=e.target;
      setState({...state,[name]:value})
  }  

  const handleFile=(e)=>{
      console.log(e.target.files)
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
            <Sidebar name="Career Site"/>
          </div>
          {/*/sidebar accordion*/}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-lg-9">{/*company form*/}
              <div className="ms-lg-4 mt-3 p-4 bg-white">
                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control py-0" 
                    defaultValue="Careers" 
                    id="floatingInput" 
                    placeholder="Career" 
                    style={{height: 'calc(2.5rem + 2px)!important'}} 
                    />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Career Site Name<span className>*</span></label><small>This will be the name shown on your careers website</small>
                </div>
                <small>Career Site</small>
                <div className="alert alert-success border-0" role="alert">
                  <a href="#" className="text-info"> https://rudrainnovatives.freshteam.com/jobs</a>
                </div>
                <div className="mb-3 bg-light p-2 text-info">
                  <p> For renaming career site url in your custom domain, say <strong> careers.yourselfcompany.com</strong>, please raise a request here. To change only the sub-domain in the url, say <strong>yourcompany.freshteam.com</strong>, please reach out to Freshteam Support. <a href="#" className="text-primary"> Know more</a></p>
                  <button className="btn btn-primary">Rename to new URL</button>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                      <select className="form-control select2" name="primary_language" onChange={handleChange} value={state.primary_language} data-toggle="select2">
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
                <div className="mb-3 d-flex align-items-center">
                  <h4 className="text-info py-4"> Logo and fav</h4>
                  <div className="spinner-grow text-info ms-2" role="status" />
                </div>
                <div className="row mb-4">
                  <div className="col-sm-4 mt-2">
                    <label className="form-label">Change logo</label>
                    <input 
                        className="form-control" 
                        type="file" 
                        id="inputGroupFile04"
                        name="logo"
                        onChange={handleFile}
                         />
                  </div>
                  <div className="col-sm-4 mt-2">
                    <label className="form-label">Change Favicon</label>
                    <input 
                        className="form-control" 
                        type="file" 
                        id="inputGroupFile04" 
                        name="favicon"
                        onChange={handleFile}
                        />
                  </div>
                  <div className="col-sm-4 mt-2">
                    <label className="form-label">Cange Career Portal Banner Image</label>
                    <input 
                        className="form-control" 
                        type="file" 
                        id="inputGroupFile04"
                        name="banner"
                        onChange={handleFile}
                         />
                  </div>
                  <div className="col-sm-4 mt-2">
                    <label className="form-label">Cange Social Sharing Image</label>
                    <input 
                        className="form-control" 
                        type="file" 
                        id="inputGroupFile04"
                        name="sharing_image"
                        onChange={handleFile} 
                        />
                  </div>
                </div>
                <div className="mb-4">
                  <a href="#" className="text-info">Show advanced settings <div className="spinner-grow text-info ms-2" role="status" /></a>
                </div>
                <button className="btn btn-clear me-3">Cancle</button>
                <button className="btn btn-primary">Save</button>
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4>Setting up your career site</h4>
              <p>Freshteam gives you a shiny good careers site out-of-the box. You can find it here: <strong className="small"> https://rudrainnovatives.freshteam.com/jobs</strong>. You can also customize the look and feel of your portal to reflect your brand. This includes logo, favicon, fonts and more.</p>
              <p />Note: If you already possess an SSL certificate, you will not be able to use it.<p />
              <h4 className="mt-3">Where is this shown/used?</h4>
              <p>1. All your published jobs will be listed on this site and candidates will be able to search and apply for jobs through this site.</p>
              <p>2. If you choose to rename the careers URL to your domain, all the jobs/customizations will reflect in your custom URL as well</p>
              <h4 className="mt-3">Resource article(s)</h4>
              <a href="#" className="text-primary">Setting up your Career Site.</a>
              <a href="#" className="text-primary">Configuring a custom SSL certificate for your career site and employee portal.</a>
            </div>
          </div>
        </div>
      </div>
    </div>{/**/}
  </div>{/**/}
</div>{/*-
*/}

        </>
    )
}

export default CareerSite
