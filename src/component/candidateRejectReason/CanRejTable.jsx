
import React,{useState,useEffect} from 'react'
import axios from '../../common/axios'
import Loader from '../../common/Loader'
function CanRejTable({data}) {
  let token=localStorage.getItem('login')
    const[canId,setId]=useState('')
    const [reason,setReason]=useState([])
    const[bool,setBool]=useState(false)
    const[newReason,setNewReason]=useState('')
    const[canReason,setCanReason]=useState('')
    const[editReason,setEditReason]=useState('')
    const[bool1,setBool1]=useState(false)
   
  const [reasonError,setReasonError]=useState('')

  useEffect(()=>{
      console.log(data)
    setReason(data)
  },[data])


const getDepartment=()=>{
 
    // axios.get('department',{
    //   headers: {
    //     'Authorization': 'Bearer '+ token
    //  }
    // }).then((res)=>{
      
    // setReason(res.data.results)
    // }).catch((err)=>{
    //   console.log(err)
    // })
  
}


    const handleDelete=()=>{
     
      
        // axios.delete(`department/${department}`,{
        //   headers: {
        //     'Authorization': 'Bearer '+ token
        //  }
        // }).then((res)=>{
        //   const d = dept.filter((c) => c._id !== department);
        //   setReason(d)
        // }).catch((err)=>{
        //   console.log(err)
        // })
     
        
    }

const handleData=(u)=>{
    console.log(u)
setCanReason(u)
}

const addReason=()=>{
    setBool(true)
  }

  const clickRight=()=>{
    setBool(false)
    // validation();
    // let data={
    //   department_name:newDept
    // }
    // axios.post('department',data,{
    //   headers: {
    //     'Authorization': 'Bearer '+ token
    //  }
    // }).then((res)=>{
   
    //    setDept(prevItems => [...prevItems,
    //     res.data.results
    //         ]);
      
    //   setNewDept('')
    // }).catch((err)=>console.log(err))
   
  
  }

const handleEdit=(id)=>{
setBool1(true)
setId(id)
const d = reason.filter((c) => c._id === id);
console.log(d[0])
 setEditReason(d[0].name)
// axios.get(`department/${id}`,{
//   headers: {
//     'Authorization': 'Bearer '+ token
//  }
// }).then((res)=>{
//   setEditDept(res.data.results.department_name)
// }).catch((err)=>console.log(err))
}

const handleChangeEdit=(e)=>{
  setEditReason(e.target.value)
}


  const clickCancel=()=>{
    console.log('click')
    setBool(false)
    setBool1(false)
  }
  
  const handleChange=(e)=>
  {
   // console.log(e.target.value)
    setNewReason(e.target.value)
  }

const handleEditSubmit=(e)=>{
  console.log(editReason)
  setBool1(false)
//   let data={
//     department_name:editDept  }
//   axios.put(`department/${depId}`,data,{
//     headers: {
//       'Authorization': 'Bearer '+ token
//    }
//   }).then((res)=>{
//     console.log(res.data)
//     getDepartment()
    
//       setBool1(false)
//   }).catch((err)=>{console.log(err)
//     setBool1(false)
//   })
}


const validation=()=>{
  if(newReason==='' || newReason.length<4)
  {
    setReasonError("This field is required wit minimum length of 3")
  }
}
    return (
        <>
        <div className="col-lg-9">{/*company form*/}
        <div className="ms-lg-4 mt-3 p-4 bg-white">
          <button className="btn btn-outline-secondary mb-3" onClick={addReason}>Add new</button>
          
          <ul className="list-group py-2">
          {bool?
                  <li className="list-group-item list-group-item-action position-relative">
                    <div className="show-btns">
                      <div className="row">
                        <div className="col-lg-12">
                          <input type="text" className="border-0 w-100 bg-transparent" value={newReason} onChange={handleChange}/>
                        </div>
                        {reasonError?<p className="text-danger">{reasonError}</p>:""}
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
                          <input 
                            type="text" 
                            className="border-0 w-100 bg-transparent" 
                            value={editReason} 
                            onChange={handleChangeEdit}
                            />
                        </div>
                        {reasonError?<p className="text-danger">{reasonError}</p>:""}
                      </div>
                     
                      <div className="hover-btns position-absolute" id="tooltip-container2">
                        <span>
                          <i onClick={handleEditSubmit} className="uil uil-check align-middle me-1 align-middle text-success fs-3 " />
                          <i onClick={clickCancel} className="uil uil-times text-danger align-middle fs-3" />
                        </span>
                      </div>
                    </div>
                  </li>:''}

              {reason.length>0?
              reason.map((u,i)=>
            <li key={i} className="list-group-item list-group-item-action position-relative">
              <div className="show-btns">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="mb-0">{u.name}</p>
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
            Do you still wish to delete this Reason?
          </p>
        </div>
        <div className="alert alert-warning text-info mt-4" role="alert">
          <b>Warning</b>: This Reason will not be available for use anymore.
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

export default CanRejTable
