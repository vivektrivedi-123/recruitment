import axios from 'axios'
import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { getBrandOfCurrentUser } from '../../common/api';
import ToggleBar from '../../common/Util';
import Sidebar from './Sidebar';
import {globalVar} from '../components/config'

function MyFile() {
  const [fileData,setFileData]=useState([])
  const token=localStorage.getItem('token');
  const[brandImage,setBrandImage]=useState('')
  const[bname,setBname]=useState('')
  const [brand, setBrand] = useState([{}])
  const[brandId,setBrandId]=useState(0)
  const [file, setFile] = useState("");
  const name=localStorage.getItem('name')
  const image=localStorage.getItem('avatar')
  const[uploaded,setUploaded]=useState(false)
  const[projectList,setProjectList]=useState([])
  const[projectName,setProjectName]=useState(null)
  const[error,setError]=useState(false)
  useEffect(()=>{
    getBrandOfCurrentUser(token).then((res)=>{
         setBrand(res.data.data)
         setBrandImage(res.data.data[0].image)
         setBname(res.data.data[0].company)
         setBrandId(res.data.data[0].id)
         axios.get(`${globalVar.REACT_APP_base_url}/api/v1/myfiles?brand_id=${res.data.data[0].id}`,{
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }).then((res)=>{
         // console.log(res.data);
        // console.log(res.data.data.myfiles);
          setFileData(res.data.data.myfiles)
          setProjectList(res.data.data.project_names);
        })
    }).catch((err)=>console.log(err))
  },[])

  useEffect(()=>{
    ToggleBar()
},[])

const handleChange=(e)=>{
  var index = e.target.selectedIndex;
      var optionElement = e.target.childNodes[index]
      var option = optionElement.getAttribute('id');
       let result=brand.filter(u=>u.id==option);
       setBrandImage(result[0].image) 
       setBname(result[0].company)
       setBrandId(option)
       axios.get(`${globalVar.REACT_APP_base_url}/api/v1/myfiles?brand_id=${option}`,{
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).then((res)=>{
      // console.log(res.data.data.myfiles);
        setFileData(res.data.data.myfiles)
        setProjectList(res.data.data.project_names);
      })
}

const handleClick=(e)=>{
  setUploaded(false)
  setError(false)
  setProjectList(projectList)
}


const handleProject=(e)=>{
  var index = e.target.selectedIndex;
      var optionElement = e.target.childNodes[index]
      var option = optionElement.getAttribute('id');
      setProjectName(option)
      console.log(option)
}



useEffect(()=>{
  //console.log(brandId)
  if(brandId!==0)
  {
  axios.get(`${globalVar.REACT_APP_base_url}/api/v1/myfiles?brand_id=${brandId}`,{
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }).then((res)=>{
    console.log('true',res.data);
    setFileData(res.data.data.myfiles)
    
  })
}
},[uploaded])

const handleUpload=(event)=> {
  setFile(event.target.files[0]);
  let data = new FormData() 
  data.append('file', event.target.files[0]);
  data.append('project_id',projectName);
  console.log(data)
  if(projectName!==null)
  {
    axios.post(`${globalVar.REACT_APP_base_url}/api/v1/myfiles?brand_id=${brandId}`,data,{
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then((res)=>{
      console.log(res.data);
      setUploaded(true)
    }).catch((err)=>{
      setUploaded(false)
      console.log(err)
    })
  setFile('')
  }
  else
  {
    setError(true)
  }
  // Add code here to upload file to server
  // ...
}

    return (
         <>
         <div className="wrapper overflow-hidden">
        <div className="d-flex">
      <Sidebar/>
  <div className="page-wrapper  my-files-page position-relative">
      <div className="position-sticky p-0 shadow z-index-1 bg-white px-sm-4 px-3 top-0 overflow-hidden">
      <div className="row mr-lg-0">
        <div className="col-md-12">
          <div className="navbar-custom   position-relative d-flex align-items-center">
            <Link to="/" className="d-md-none mr-3"><img src="assets/images/logo-sm.png" className="img-fluid logo-mob-icon" alt="img" /></Link>
            <button type="button" className="top-togglebar bg-transparent border-0">
              <img src="assets/images/menu.svg" className="img-fluid" alt="img" />
            </button>
            <div className="theme-custom-select position-relative ml-3 diable-enable-select border-0 brand-dropdown">
            <select className="form-control  border-0" onChange={handleChange} >
                              {brand.map((u, i) =>
                                 <option key={i} className="py-4" name="select" id={u.id} >{u.company}</option>
                              )}
              </select>
            </div>
            <div className="ml-auto">
              <ul className="list-unstyled mb-0 ">
                <li className="list-inline-item mx-2 d-sm-inline-block d-none"><img src={brandImage} className="img-brand" alt="royal" /></li>
                <li className="list-inline-item ml-2">
                <div className="dropdown show  profile-detail py-1 pr-sm-3">
                            <a className=" dropdown-toggle" href="#!" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={image} className="img-fluid rounded-circle user-name mx-2" alt="img" />
                            <span className="d-none d-sm-inline-block pr-2 font-poppins">{name}</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                              <Link className="dropdown-item" to='/logout'>Logout</Link> 
                          </div>
                      </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> 
  
    <div className="page-content-tab px-sm-4 pt-sm-4 px-3 pt-3 overflow-auto">
      <div className="row mb-3 align-items-center">
        <div className="col">
          <ul className="breadcrumb  pl-md-3 pl-0 list-unstyled mb-0 bg-transparent">
            <li className="h5 mb-0 font-poppins"><a href="#!">{bname}</a></li>
            <li><img src="assets/images/right-arrow.svg" className="img-fluid breadcrumb-arrow" alt="arrow" /></li>
            <li className="h5 mb-0 font-poppins"><a href="#!" className="font-weight-semibold">My Files</a></li>
          </ul>
        </div>
        <div className="col-auto text-right">
          <a className="btn btn-dark theme-btn py-2 px-4" href="#!" data-toggle="modal" data-target="#staticBackdrop" onClick={handleClick}>
            <img src="assets/images/icon-upload.svg" className="w-16 font-poppins font-weight-medium mr-2" alt="filter" />Upload File
          </a>
          
        </div>
      </div>
      <div className="container-sm px-0">
        <div className="row mb-lg-4 pb-3">
        {fileData && fileData.map((u,i)=>
        i<=3?
          <div key={i} className="col-sm-6 col-lg-3  mb-lg-0 mb-4  d-flex">
            <div className="bg-white shadow p-sm-4 p-3 rounded d-flex flex-column h-auto w-100">
              <figure className={`files-folder-icon ${i===0?"blue-bg":i===1?"green-bg":i===2?'pink-bg':i===3?'red-bg':''} d-flex align-items-center justify-content-center rounded-circle`}>
                <img src="assets/images/folder-white.svg" className="img-fluid" alt="folder-icon" />
              </figure>
             
              <div >
                <h3 className="mb-1 font-weight">{u.title}</h3>
                <div className="d-flex align-items-center">
                  <p className="font-poppins text-muted mt-3 mb-0">{u.date}</p>
                  <p className="font-poppins mt-3 mb-0 font-weight-bold text-dark-80 ml-auto">{u.size}</p>
                </div>
              </div>
            
            </div>
          </div>:'')}
         {/*  <div className="col-sm-6 col-lg-3 mb-lg-0 mb-4 pb-lg-0 pb-3 d-flex">
            <div className="bg-white shadow  p-sm-4 p-3 rounded  d-flex flex-column h-auto w-100">
              <figure className="files-folder-icon pink-bg d-flex align-items-center justify-content-center rounded-circle">
                <img src="assets/images/folder-white.svg" className="img-fluid" alt="folder-icon" />
              </figure>
              <div >
                <h3 className="mb-1  font-weight-semibold pink-color">4Sight File</h3>
                <div className="d-flex align-items-center">
                  <p className="font-poppins text-muted mt-3 mb-0">Jan 20, 2021</p>
                  <p className="font-poppins mt-3 mb-0 font-weight-bold text-dark-80 ml-auto">780 MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-lg-0 mb-4 pb-lg-0 pb-3 d-flex">
            <div className="bg-white shadow  p-sm-4 p-3 rounded  d-flex flex-column h-auto w-100">
              <figure className="files-folder-icon green-bg d-flex align-items-center justify-content-center rounded-circle">
                <img src="assets/images/folder-white.svg" className="img-fluid" alt="folder-icon" />
              </figure>
              <div >
                <h3 className="mb-1  font-weight-semibold green-color">4Sight File</h3>
                <div className="d-flex align-items-center">
                  <p className="font-poppins text-muted mt-3 mb-0">Jan 20, 2021</p>
                  <p className="font-poppins mt-3 mb-0 font-weight-bold text-dark-80 ml-auto">780 MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-lg-0 mb-4 pb-lg-0 pb-3 d-flex">
            <div className="bg-white shadow  p-sm-4 p-3 rounded  d-flex flex-column  h-auto w-100">
              <figure className="files-folder-icon red-bg d-flex align-items-center justify-content-center rounded-circle">
                <img src="assets/images/folder-white.svg" className="img-fluid" alt="folder-icon" />
              </figure>
              <div >
                <h3 className="mb-1  font-weight-semibold red-color">4Sight File</h3>
                <div className="d-flex align-items-center">
                  <p className="font-poppins text-muted mt-3 mb-0">Jan 20, 2021</p>
                  <p className="font-poppins mt-3 mb-0 font-weight-bold text-dark-80 ml-auto">780 MB</p>
                </div>
              </div>
            </div>
              </div>*/}
        </div> 
      </div>
      <div className="recent-files-table">
        <div className="container-sm px-0 h-100">
          <div className="row h-100">
            <div className="col-md-12 h-100">
              <div className="bg-white p-4 rounded  h-100">
                <div className="row  h-100">
                  <div className="col-md-12  h-100">
                    <h5 className="font-poppins font-weight-semibold mb-4">Recent Files</h5>
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead className="thead-light">
                          <tr>
                            <th className="font-poppins">File Name</th>
                            <th className="font-poppins">Date</th>
                            <th className="font-poppins">Size</th>
                            <th className="font-poppins">Owner</th>
                            <th className="font-poppins">Project</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fileData && fileData.map((u,i)=>
                          <tr key={i}>
                           <td className="font-poppins"><a href={u.file} target="_blank"><img src={u.type==='pdf'?"assets/images/file-pdf.svg":u.type==='jpg' || u.type==='png' ||u.type==='jpeg'?'assets/images/file-jpg.svg':u.type==='txt'?'assets/images/text.png':u.type==='docx'?'assets/images/docx.png':u.type==='xlsx' || u.type==='xls'?'assets/images/xlsx.png':''} className="img-file ml-2 mr-4" alt="file" />{u.title}</a></td>
                            <td className="font-poppins">{u.date}</td>
                            <td className="font-poppins text-uppercase">{u.size}</td>
                            <td className="font-poppins">{u.owner}</td>
                            <td className="font-poppins">{u.project_name}</td>
                          </tr>)}
                        {/*   <tr>
                            <td className="font-poppins"><img src="assets/images/file-jpg.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr> */}
                         {/*  <tr>
                            <td className="font-poppins"><img src="assets/images/file-svg.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr> */}
               {/*            <tr>
                            <td className="font-poppins"><img src="assets/images/file-svg.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr>
                          <tr>
                            <td className="font-poppins"><img src="assets/images/file-jpg.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr>
                          <tr>
                            <td className="font-poppins"><img src="assets/images/file-pdf.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr>
                          <tr>
                            <td className="font-poppins"><img src="assets/images/file-svg.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr>
                          <tr>
                            <td className="font-poppins"><img src="assets/images/file-svg.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr>
                          <tr>
                            <td className="font-poppins"><img src="assets/images/file-jpg.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr>
                          <tr>
                            <td className="font-poppins"><img src="assets/images/file-pdf.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr>
                          <tr>
                            <td className="font-poppins"><img src="assets/images/file-svg.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr>
                          <tr>
                            <td className="font-poppins"><img src="assets/images/file-svg.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr>
                          <tr>
                            <td className="font-poppins"><img src="assets/images/file-jpg.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr>
                          <tr>
                            <td className="font-poppins"><img src="assets/images/file-pdf.svg" className="img-file ml-2 mr-4" alt="file" />4Sight File</td>
                            <td className="font-poppins">Jan 20, 2021</td>
                            <td className="font-poppins text-uppercase">700 MB</td>
                            <td className="font-poppins">Name</td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </div>
    <div className="row py-4 copy-right">
          <div className="col-12 ">
            <p className="text-center text-muted mb-0">Copyright © 2021. All rights reserved.</p>
          </div>
        </div> 
  </div>
  <div className="modal fade file-upload-modal" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      
      <div className="modal-content">
         <div className="modal-header border-0">
          <h5 className="modal-title font-weight-bold" id="staticBackdropLabel">Upload Files</h5>
          <div className="theme-custom-select position-relative ml-3 diable-enable-select border-0 brand-dropdown">
            <select className="form-control  border-0" onChange={handleProject} >
            <option  className="py-4" name="select" >select</option>
                              {projectList.map((u, i) =>
                                 <option key={i} className="py-4" name="select" id={u.id} >{u.project_name}</option>
                              )}
              </select>
            </div>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
                          
        </div>  
        <div className="modal-body mb-4">
          <div className="file-uploads-modal-d overflow-hidden position-relative">
            <input type="file" className="file-upload"  onChange={handleUpload} />
            <div className="f-modal-attchment d-flex align-items-center justify-content-center">
              <img src="assets/images/cloud-data-upload.svg" className="cloud-data-upload w-30 mr-2" alt="cloud-data-upload-img" /> 
              
              <p className="attchment-content mb-0 font-weight-medium font-poppins text-muted">Drag and drop or <span>browse files</span></p>
               
               <p style={{color:'green'}}>{uploaded ?'file uploaded successfully':''}</p>
               <p style={{color:'red'}}>{error ?'Something went wrong':''}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div></div>
</>   
)
}

export default MyFile
