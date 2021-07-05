import React, { useState } from 'react'
import {Link, withRouter} from 'react-router-dom'
import Rating from './candidates/Rating';
import Stages from './candidates/Stages';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import Table, {BaseTable,Thead, Tbody, Tr, Th, Td} from "react-row-select-table"
import styled from "styled-components"
import Pagination from './Pagination'
import { Paginate } from './util/Paginate';
import "./CandidateTable.css"
function CandidateTable(props) {

  const [candidate,setCandidate]=useState(props.candidate);
  const owner=props.owner
   console.log(props.candidate)
   const[state,setState]=useState({
    currentPage: 1,
    pageSize: 1,
    count: 0,
   })
    const animatedComponents = makeAnimated();
  
  
  const  handlePageChange = (page) => {
    console.log(page)
      setState({...state, currentPage: page });
      console.log(state)
    };
    
// const Table = styled(BaseTable)`
// table {
//   width: 100% !important;
//   border-collapse: collapse !important;

//   tr {
//     border-bottom: 1px solid #ddd !important;
//   }

//   tr.tr-body:hover {
//     background-color: #f5f5f5 !important;
//   }

//   tr.tr-checked {
//     background-color: #f5f5f5 !important;
//   }

//   th {
//     padding: 0.5rem !important;
//     text-align: left !important;
//   }

//   td {
//     padding: 0.5rem !important;
//     text-align: left !important;
//   }


// }
// `

    const options = [
      { value: 'Priyanka', label: 'Priyanka' },
      { value: 'Gaurav', label: 'Gaurav' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    const handleArchive=(id)=>{
      console.log(id)
      let c=candidate.slice(0)
      let cand=c.filter(u=>u.id===id);
      cand.archived=true;
     setCandidate(cand)
     console.log('final',candidate)
      //setId(id)
    }

    const handleDelete=(id)=>{ 
      let cand=candidate.filter(u=>u.id!==id);
      setCandidate(cand)
      console.log(id)
    }
    
const handleClick=(id)=>{
  console.log(id)
}
const handelCheck=(e)=>{
  console.log(e)
}
    return (
        <>
          <div className="ms-auto">
             <div className="">
             <Pagination
             itemsCount={candidate.length}
             pageSize={state.pageSize}
             currentPage={state.currentPage}
             onPageChange={handlePageChange}
          />
          </div>
          </div>
             <div className="table-responsive table-custom px-3 mt-n1">
           
             <Table id="scroll-vertical-datatable" className="table table-condensed" onCheck={handelCheck} >
                  <Thead>
                    <Tr >
                       {/* <th className="bg-secondary align-middle pe-0"><input type="checkbox" className="form-check-input" id="customCheck1" /></th>  */}
                      <Th ></Th>
                      <Th className="bg-secondary text-white align-middle">Candidates</Th>
                      <Th className="bg-secondary text-white align-middle">Applied For</Th>
                      <Th className="bg-secondary text-white align-middle">Stages</Th>
                      <Th className="bg-secondary text-white align-middle">Owner</Th>
                      <Th className="bg-secondary text-white align-middle">Applied Date</Th>
                      <Th  className="bg-secondary text-white align-middle">Star</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>

                      {Paginate(candidate,state.currentPage,state.pageSize).map((u,i)=>
                      
                    <Tr key={i} className="candidates-row"  isCheckRow={false}>
                   <Td></Td>
                      {/* <td className="td-border-left position-relative align-middle pe-0"><input type="checkbox" className="form-check-input" id="customCheck1" /></td> */}
                      <Td className="align-middle" onClick={()=>handleClick(u.id)}>
                        <div className="position-relative candidate-info" >
                        <div className="text-primary fw-bold col-xl-11 d-block" >{u.name}</div>
                          <div className="text-truncate w-75">{u.company_name}</div>
                          <div className="display-information bg-white shadow">
                            <div className="arrow" />
                            <div className="p-3">
                              <div className="fw-bold text-truncate">{u.name}</div>
                              <p className="text-muted">
                                Senior Dotnet and Xamarin Developer  &nbsp; | &nbsp;
                                COGNITER TECHNOLOGIES
                              </p>
                              <div className="btn-full-width text-truncate">
                                <i className="dripicons-mail align-middle" /> &nbsp;Riteshsanan05@gmail.com
                              </div>
                            </div>
                          </div>
                        </div>
                      </Td>
                      <Td className="align-middle">
                        <div className="text-info font-600">{u.JobTitle}</div>
                        <div>{u.JobName}</div>
                      </Td>
                      <Td className="align-middle">
                        <Stages/>
                        <ul className="stages screening">
                          <li className="active">
                            <span aria-label="Sourcing" className="hint--bottom">1</span>
                          </li>
                          <li>
                            <span aria-label="Screening" className="hint--bottom">2</span>
                          </li>
                          <li>
                            <span aria-label="Interviews" className="hint--bottom">3</span>
                          </li>
                          <li>
                            <span aria-label="Offer" className="hint--bottom">4</span>
                          </li>
                          <li>
                            <span aria-label="Hire" className="hint--bottom">5</span>
                          </li>
                        </ul>
                      </Td>
                      <Td className="align-middle">
                        {/* <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="mdi mdi-plus-circle-outline mdi-24px d-inline-block align-middle  me-1" /><span className="d-inline-block align-middle"> Add owner</span>
                        </a> */}
                        {/* <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton1"> */}
                          {/* <div className="p-2">
                            <input className="ember-power-select-search-input form-control" aria-controls="ember-power-select-options-ember2026" placeholder="Search" type="search" />
                          </div> */}
                          {/* <ul> */}
                          <Select         
                            //closeMenuOnSelect={true}
                           // components={animatedComponents}
                          //defaultValue={[colourOptions[4], colourOptions[5]]}
                            
                          options={options}
                         />
                         {/* {owner.map((u,i)=>
                            <li>
                              <a className href="#">
                                <span className="relative align-middle avatar-circle d-inline-block me-1">
                                  <img className="img-fluid" src="image/graph.png" />
                                </span>
                               {u.owner_name}</a>
                            </li>
                            )}   */}
                          {/* </ul> */}
                        {/* </div> */}
                      </Td>
                      <Td>Apr 20th <br /> 2121</Td>
                      <Td className="align-middle">
                          <Rating rating={u.rating}/>
                      </Td>
                   
                      <Td className="align-middle">
                        <i className="mdi mdi-dots-vertical position-relative dropdown-toggle btn-no-image toogle-btn" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
                         <button   onClick={()=>handleArchive(u.id)} className="dropdown-item"  ><i className="dripicons-archive me-1 " /> Archive to Talent Pool</button>
                          <a className="dropdown-item" href="#"><i className=" dripicons-tags me-1 " /> Add Tags</a>
                          <a className="dropdown-item" href="#"><i className=" dripicons-message me-1 " /> Share</a>
                          <a className="dropdown-item" href="#"  onClick={()=>handleDelete(u.id)}><i className="dripicons-trash me-1 " /> Delete</a> 
                        </div>
                      </Td>
                    </Tr>
                    )}
                  </Tbody>
                </Table>
           
              </div>
        </>
    )
}

export default CandidateTable;
