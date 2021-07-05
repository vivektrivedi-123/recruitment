
import React,{useState,useEffect} from 'react'
import axios from './axios'
import Loader from './Loader'
function Table({data}) {
  let token=localStorage.getItem('login')
    const[depId,setId]=useState('')
    const [dept,setDept]=useState([])
    const[bool,setBool]=useState(false)
    const[newDept,setNewDept]=useState('')
    const[department,setDepartMent]=useState('')
    const[editDept,setEditDept]=useState('')
    const[bool1,setBool1]=useState(false)
   
  const [deptError,setDeptError]=useState('')

  useEffect(()=>{
    setDept(data)
  },[data])


const getDepartment=()=>{
 
    axios.get('department',{
      headers: {
        'Authorization': 'Bearer '+ token
     }
    }).then((res)=>{
      
    setDept(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  
}


    const handleDelete=()=>{
     
      
        axios.delete(`department/${department}`,{
          headers: {
            'Authorization': 'Bearer '+ token
         }
        }).then((res)=>{
          const d = dept.filter((c) => c._id !== department);
          setDept(d)
        }).catch((err)=>{
          console.log(err)
        })
     
        
    }

const handleData=(u)=>{
    console.log(u)
setDepartMent(u)
}

const addDepartment=()=>{
    setBool(true)
  }




  const clickRight=()=>{
    setBool(false)
    validation();
    let data={
      department_name:newDept
    }
    axios.post('department',data,{
      headers: {
        'Authorization': 'Bearer '+ token
     }
    }).then((res)=>{
   
       setDept(prevItems => [...prevItems,
        res.data.results
            ]);
      
      setNewDept('')
    }).catch((err)=>console.log(err))
   
  
  }

const handleEdit=(id)=>{
setBool1(true)
setId(id)
axios.get(`department/${id}`,{
  headers: {
    'Authorization': 'Bearer '+ token
 }
}).then((res)=>{
  setEditDept(res.data.results.department_name)
}).catch((err)=>console.log(err))
}

const handleChangeEdit=(e)=>{
  setEditDept(e.target.value)
}


  const clickCancel=()=>{
    console.log('click')
    setBool(false)
    setBool1(false)
  }
  
  const handleChange=(e)=>
  {
   // console.log(e.target.value)
    setNewDept(e.target.value)
  }

const handleEditSubmit=(e)=>{
  console.log(editDept)
  let data={
    department_name:editDept  }
  axios.put(`department/${depId}`,data,{
    headers: {
      'Authorization': 'Bearer '+ token
   }
  }).then((res)=>{
    console.log(res.data)
    getDepartment()
    // let d=dept.filter(u=>u._id!==depId)
    // setDept(d)
    // setDept(prevItems => [...prevItems,
    //  res.data
    //      ]);
      setBool1(false)
  }).catch((err)=>{console.log(err)
    setBool1(false)
  })
}


const validation=()=>{
  if(newDept==='' || newDept.length<4)
  {
    setDeptError("This field is required wit minimum length of 3")
  }
}
    return (
        <>
        <div className="col-lg-9">{/*company form*/}
        <div className="ms-lg-4 mt-3 p-4 bg-white">
          <button className="btn btn-outline-secondary mb-3" onClick={addDepartment}>Add new</button>
          
          <ul className="list-group py-2">
          {bool?
                  <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row">
                        <div className="col-lg-12">
                          <input type="text" className="border-0 w-100 bg-transparent" value={newDept} onChange={handleChange}/>
                        </div>
                        {deptError?<p className="text-danger">{deptError}</p>:""}
                      </div>
                     
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <span>
                          <i onClick={clickRight} className="uil uil-check align-middle me-1 align-middle text-success fs-3 " />
                          <i onClick={clickCancel} className="uil uil-times text-danger align-middle fs-3" />
                        </span>
                      </div>
                    </div>
                  </li>:''}
                  {bool1?
                  <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row">
                        <div className="col-lg-12">
                          <input type="text" className="border-0 w-100 bg-transparent" value={editDept} onChange={handleChangeEdit}/>
                        </div>
                        {deptError?<p className="text-danger">{deptError}</p>:""}
                      </div>
                     
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <span>
                          <i onClick={handleEditSubmit} className="uil uil-check align-middle me-1 align-middle text-success fs-3 " />
                          <i onClick={clickCancel} className="uil uil-times text-danger align-middle fs-3" />
                        </span>
                      </div>
                    </div>
                  </li>:''}

              {dept.length>0?
              dept.map((u,i)=>
            <li key={i} className="list-group-item list-group-item-action position-relative">
              <div className="show-btns">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="mb-0">{u.department_name}</p>
                  </div>
                </div>
                <div className="hover-btns position-absolute" id="tooltip-container2">
                  <span>
                    <i  onClick={()=>handleEdit(u._id)} className=" dripicons-document-edit align-middle me-2" /> 
                    <i onClick={()=>handleData(u._id)} className=" mdi mdi-trash-can-outline fs-4 me-2" data-bs-toggle="modal" data-bs-target="#delete-department" />
                  </span>
                </div>
              </div>
            </li>
  ):<Loader/>}
            
          </ul>
        </div>
      </div>

      <div className="modal fade mt-4 py-4 show" id="delete-department" tabIndex={-1} aria-labelledby="standard-modalLabel" role="dialog" aria-modal="true">
  <div className="modal-dialog standard-modal">
    <div className="modal-content">
      <div className="modal-body px-3">
        <div className="d-flex align-items-center">
          <i className="uil uil-exclamation-octagon text-warning me-2 fs-2" />
          <p className="fw-normal mb-0 fs-4 semi-bold"> Administration might be associated to certain Employees. After deletion, this cannot be associated with any Employee in the future.
            Do you still wish to delete this Department?
          </p>
        </div>
        <div className="alert alert-warning text-info mt-4" role="alert">
          <b>Warning</b>: This department will not be available for use anymore.
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

export default Table
