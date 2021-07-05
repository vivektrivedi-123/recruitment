import React,{useState} from 'react'
import Navigation from '../../common/Navigation'
import Sidebar from '../settings/Sidebar'
import Topbar from "../../common/Topbar"
import copy from "copy-to-clipboard";  
import "./JobEmbed.css"
function JobEmbed() {
    const[bool,setBool]=useState(false)
    const[state,setState]=useState({
        text:"",
        url:"https://careers.rudrainnovative.com/jobs"

    })
  const handleChange=(e)=>{
    console.log(e)
    const{name,value}=e.target;
    setState({...state,[name]:value})
  }  

  const copyToClipboard = () => {
    copy(state.url);
    
 }
   
const disableTag=()=>{
    setBool(!bool)
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
           
        <Sidebar name="Job Embed"/>
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
                    name="url"
                    value={state.url}
                    onChange={handleChange} 
                    id="floatingInput" 
                    placeholder="Search" 
                    disabled={bool?true:false}
                    style={{height: 'calc(2.5rem + 2px)!important'}} 
                    />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Show job posting in<span className="text-danger">*</span></label><small>Enter your website URL to which you wish to embed the job postings e.g.http://yourcompanyname.com/about/careers.html</small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="text-info">Job embed code</h4>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-outline-secondary" onClick={disableTag}>{bool?"Enable":"Disable"}</button>
                    <button className="btn btn-outline-secondary ms-2" onClick={copyToClipboard}>Copy</button>
                  </div>
                </div>
                <textarea 
                  className="form-control mt-3" 
                  id="example-textarea" 
                  rows={10}   
                  placeholder="<div id='freshteam-widget'></div>" 
                    name="text"
                    value={state.text}
                    onChange={handleChange}
                />
                <small>Please copy and paste the code above anywhere before the  tag in the HTML template of your site where you'd like to provide the Job Posting widget.</small>
              </div>
            </div>{/*/company form*/}
            <div className="col-lg-3 text-info p-4">
              <h4>Generating Job Embed code</h4>
              <p>Freshteam provides an out of the box careers site which you can customize and add to your company's website. If you wish to directly embed the jobs and the application forms into your website, without using the full careers site, you can use job embeds.</p>
              <h4 className="mt-3">Where is this shown/used?</h4>
              <p>You can generate the job embed code for your website by just typing in the URL of your website. Once you generate the Job Code, you can simply copy paste the code script within the  tag of the website to publish the widget.</p>
              <h4 className="mt-3">Resource article(s)</h4>
              <a href="#" className="text-primary">Embedding Job Postings On Your Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{/**/}
</div>{/**/}
{/**/}


     
        </>
    ) 
}

export default JobEmbed
