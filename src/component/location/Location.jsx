import React,{useState,useEffect} from 'react'
import Navigation from '../../common/Navigation'
import Topbar from '../../common/Topbar'
import data from '../../JobData.json'
import LocationModal from './LocationModal'
import Sidebar from '../settings/Sidebar'
import './Location.css'
import axios from '../../common/axios'
import Loader from '../../common/Loader'
import LocationEditModal from '../location/LocationEditModal'
function Location({data}) {
let token=localStorage.getItem('login')
const[locationId,setLocationId]=useState('')
    const[location,setLocation]=useState([])
    const[id,setId]=useState('')
    const[bool,setBool]=useState(false)
useEffect(()=>{
  setLocation(data)
},[data])

// useEffect(()=>{
//   console.log('v',bool==='true')
//     getLocation()
// },[bool])

const getLocation=()=>{
  axios.get('location',{
    headers: {
      'Authorization': 'Bearer '+ token
   }
  }).then((res)=>{
    console.log(res.data.results)
    setLocation(res.data.results)
  }).catch((err)=>{
    console.log(err)
  })
}


const change=(b)=>{
  console.log('v1',b)
  setBool(b)
  setTimeout(()=>{
    getLocation()
  },2000)
}


const change1=()=>{
  getLocation()
}

const handleData=(id)=>{
  setId(id)
}



    const handleDelete=()=>{
     
      axios.delete(`location/${id}`,{
        headers: {
          'Authorization': 'Bearer '+ token
       }
      }).then((res)=>{
        const loc = location.filter((c) => c._id !== id);
        setLocation(loc)
      }).catch((err)=>{
        console.log(err)
      })
    }

   const handleEdit=(id)=>{
    setLocationId(id)
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
      {/*sidebar accordion*/}
      <Sidebar name="Locations"/>
      {/*/sidebar accordion*/}
    </div>
  </div>
  <div className="col-10">
    <div className="row">
      <div className="col-lg-9">{/*company form*/}
        <div className="ms-4 mt-3 p-4 bg-white">
        <button className="btn btn-outline-secondary mb-3" data-bs-toggle="modal" data-bs-target="#full-width-modal2">Add new</button>
          <ul className="list-group ">
            {/* <li className="list-group-item list-group-item-action position-relative">
              <div className="show-btns">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-2">
                        <button className="btn p-2" />
                      </div>
                      <div className="col-10">
                        <p className="mb-1"><span className="font-600"> Branch Office</span> <span className="badge rounded-pill bg-danger px-2 ms-2">Deleted</span></p>
                        <p>Ludhiana, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <p className="mb-1">Ludhiana</p>
                    <p>India</p>
                  </div>
                </div>
                <div className="hover-btns position-absolute py-sm-2" id="tooltip-container2">
                  <span>
                    <i className=" dripicons-document-edit align-middle me-2 mt-1" data-bs-container="#tooltip-container2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" /> 
                    <button className="btn btn-outline-secondary">Restore</button>
                  </span>
                </div>
              </div>
            </li> */}
            {location.length>0 ?
            location.map((u,i)=>
            <li key={i} className="list-group-item list-group-item-action position-relative">
              <div className="show-btns">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-2">
                        <button className="btn p-2"><i className="mdi mdi-star mdi-24px text-muted" /></button>
                      </div>
                      <div className="col-10">
                        <p className="mb-1"><span className="font-600"> branch</span></p>
                        <p>{u.location_city}, {u.location_state}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <p className="mb-1">{u.location_city}</p>
                    <p>{u.location_state}</p>
                  </div>
                </div>
                <div className="hover-btns position-absolute py-sm-2" id="tooltip-container2">
                  <span>
                    <i  onClick={()=>handleEdit(u._id)} className=" dripicons-document-edit align-middle me-2 mt-1" data-bs-container="#tooltip-container2"    data-bs-toggle="modal" data-bs-target="#full-width-modal21" data-bs-placement="top" title="Edit" /> 
                    <i onClick={()=>handleData(u._id)} className=" mdi mdi-trash-can-outline fs-4 me-2 mt-1" data-bs-toggle="modal" data-bs-target="#delete-department" data-bs-placement="top" title="Delete" />
                  </span>
                </div>
              </div>
            </li>
           ):<Loader/>}
          </ul>
        </div>
      </div>{/*/company form*/}


      <div className="col-lg-3 text-info p-4">
        <h4>Manage Locations</h4>
        <p>Do you have a company with more than one office? You can use "Locations" to store information about every office of your company and use it across Freshteam.</p>
        <h4 className="mt-3">Where is this shown/used?</h4>
        <p>1. This reflects in your career page - candidates apply to jobs in their preferred locations.</p>
        <p>2. While making an offer to a candidate, you can choose the location where you would like to hire the candidate.</p>
        <h4 className="mt-3">Resource article(s)</h4>
        <a href="#" className="text-primary">Associating locations to languages.</a><br />
        <a href="#" className="text-primary">Adding a Company Location or Branch.</a>
      </div>
    </div>
    </div>
    </div>

      
    </div>{/**/}
  </div>{/**/}
</div>{/**/}

<div id="ClearData-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
  <div className="modal-dialog  modal-dialog-centered w-100" style={{maxWidth: 700}}>
    <div className="modal-content">
      <div className="modal-body ">
        <div className="row align-items-center">
          <div className="col-md-1 text-center">
            <i className="mdi mdi-alert-circle-outline mdi-48px text-warning" />
          </div>
          <div className="col-md-7 flex">
            <p className="my-2">Are you sure you want to clean-up sample data and start set-up process?</p>
          </div>
          <div className="col-md-4 text-center">
            <button className="btn btn-clear" data-bs-dismiss="modal" aria-hidden="true">Cancle</button>
            <button className="btn btn-info">Clear Sample Data</button>
          </div>
        </div>
      </div>
    </div>{/* /.modal-content */}
  </div>{/* /.modal-dialog */}
</div>
<LocationModal parentCallback={change}/>
<LocationEditModal id={locationId} parentCallback={change1}/>
<div className="modal fade mt-4 py-4 show" id="delete-department" tabIndex={-1} aria-labelledby="standard-modalLabel" role="dialog" aria-modal="true">
  <div className="modal-dialog standard-modal">
    <div className="modal-content">
      <div className="modal-body px-3">
        <div className="d-flex align-items-center">
          <i className="uil uil-exclamation-octagon text-warning me-2 fs-2" />
          <p className="fw-normal mb-0 fs-4 semi-bold"> Administration might be associated to certain Employees. After deletion, this cannot be associated with any Employee in the future.
            Do you still wish to delete this Location?
          </p>
        </div>
        <div className="alert alert-warning text-info mt-4" role="alert">
          <b>Warning</b>: This Location will not be available for use anymore.
        </div>
      </div>
      <div className="modal-footer">
        <div className="ms-auto">
          <ul className="list-unstyled email-bulk-ul ">
            <li className="list-inline-item">
              <button type="button" className="btn border-0 btn-outline-light text-info" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
            </li>
            <li className="list-inline-item text-center rounded email-bulk-li">
              <button type="button" onClick={handleDelete} className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Location
