import React,{useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function EmailModal() {
    
    const[state,setState]=useState({
        name:"",
        email:"",
        text:""
    })

   const handleOnChange=(e)=>{
       const {value,name}=e.target;
       console.log(e.target.value)
       setState({...state,[name]:value})
   }

    
   const handleText=(e,editor)=>{
    console.log(editor.getData())
    setState({...state,["text"]:editor.getData()})
   // setText(editor.getData())
  
  }

  const handleSubmit=(e)=>{
      e.preventDefault()
    console.log(state)
    toast('Succefully Submitted....',{ 
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
  }
    
    return (
        <>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
             <div id="full-width-modal" className="modal fade p-0" tabIndex={-1} role="dialog" aria-labelledby="fullWidthModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-full-width m-0 w-100 modal-dialog-scrollable vh-100" style={{minWidth: '992px!important'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="fullWidthModalLabel">Add New Career Email</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
        </div>
        <div className="modal-body bg-light vh-100">
          <div className="row">
            <div className="col-md-9">
              <div className="p-3 bg-white vh-100">
                <div className="form-floating mb-3">
                  <input 
                   type="text" 
                   className="form-control py-0" 
                   name="name" 
                   onChange={handleOnChange} 
                   value={state.name} 
                   id="floatingInput" 
                   placeholder="Career" 
                   style={{height: 'calc(2.5rem + 2px)!important'}} 
                   />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Name <span className="text-danger">*</span></label>
                  <small>This will be the "From" name when you're sending an email from this email address</small>
                </div> 
                <div className="form-floating mb-3">
                  <input 
                   type="text" 
                   className="form-control py-0" 
                   onChange={handleOnChange} 
                   value={state.email} 
                   name="email" 
                   id="floatingInput" 
                   placeholder="Career" 
                   style={{height: 'calc(2.5rem + 2px)!important'}} 
                   />
                  <label htmlFor="floatingInput" className="text-info  d-inline-block pt-2">Your jobs email address <span className="text-danger">*</span></label>
                  <small>eg. careers@yourcompany.com. We will send an email right away to verify this email ID. This will also be your reply-to address.</small>
                </div> 
                <div className="alert alert-primary" role="alert">
                  Forward your emails to this address 
                </div>
                <CKEditor
                    editor={ ClassicEditor }
                    onChange={handleText}
                    data={state.text}
                />
              </div>
            </div>
            <div className="col-md-3">
              <h4>Email Settings</h4>
              <p>Do you have a careers email ID that candidates directly apply to(like jobs@yourcompany.com)? You can automatically bring those candidates into Freshteam by forwarding emails from your careers email ID(say, jobs@yourcompany.com) to careers@rudrainnovatives.freshteam.com</p>
              <h4 className="mt-3">Where is this shown/used?</h4>
              <p>Any Email sent to your Careers Email ID will appear under <strong>Recruit&gt;Conversations </strong>tab. Any Resume sent to your Careers Email ID will be shown under the filter <strong> Email Applicants </strong> under <br /> <strong> Recruit&gt;Candidates.</strong></p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-clear me-3" data-bs-dismiss="modal">Cancle</button>
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save</button>
        </div>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>
        </>
    )
}

export default EmailModal
