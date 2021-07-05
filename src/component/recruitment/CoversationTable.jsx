import React,{useState} from 'react'
import Rating from '../../common/Rating'
import Emails from '../../common/Emails'
import Advance from '../../common/Advance'
import Profile from '../../common/Profile'
import Contact from '../../common/Contact'
import Comments from '../../common/Comments'
import Feedback from '../../common/Feedback'
import Task from '../../common/Task'
import Timeline from '../../common/Timeline'
import Summary from '../../common/Summary'
import Interview from '../../common/Interview'
import ButtonDropdown from '../../common/ButtonDropdown'
import ConversationNav from './ConversationNav'
import User from './User'
import Rating1 from '../candidates/Rating';
import Stages from '../candidates/Stages';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import EditUser from './EditUser'
function CoversationTable(props) {

const[id,setUserId]=useState('')

    const [candidate,setCandidate]=useState(props.candidate);
    const owner=props.owner
     
     
      const animatedComponents = makeAnimated();
  
      const options = [
        { value: 'Priyanka', label: 'Priyanka' },
        { value: 'Gaurav', label: 'Gaurav' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  
      const handleArchive=(id)=>{
        console.log(id)
        let c=candidate
        let cand=c.filter(u=>u.id===id);
        cand.archived=true;
        console.log(cand)
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
    setUserId(id)
  }

    return (

        <>

    {/* <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#right-modal">Rightbar Modal</button> */}
    <div className="table-responsive table-custom px-3 mt-n1">
                <table id="scroll-vertical-datatable" className="table table-condensed">
                  <thead>
                    <tr>
                      <th className="bg-secondary align-middle pe-0"><input type="checkbox" className="form-check-input" id="customCheck1" /></th>
                      <th className="bg-secondary text-white align-middle">Candidates</th>
                      <th className="bg-secondary text-white align-middle">Applied For</th>
                      <th className="bg-secondary text-white align-middle">Stages</th>
                      <th className="bg-secondary text-white align-middle">Owner</th>
                      <th className="bg-secondary text-white align-middle" colSpan={3}>Applied Date</th>
                    </tr>
                  </thead>
                  <tbody>

                      {candidate.map((u,i)=>
                      u.archived==='true'?"":
                    <tr key={i} className="candidates-row" >
                      <td className="td-border-left position-relative align-middle pe-0"><input type="checkbox" className="form-check-input" id="customCheck1" /></td>
                      <td className="align-middle" onClick={()=>handleClick(u.id)} data-bs-toggle="modal" data-bs-target="#right-modal">
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
                      </td>
                      <td className="align-middle">
                        <div className="text-info font-600">{u.JobTitle}</div>
                        <div>{u.JobName}</div>
                      </td>
                      <td className="align-middle">
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
                      </td>
                      <td className="align-middle">
                        {/* <a href="#" className="users-select position-relative p-1 d-block" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="mdi mdi-plus-circle-outline mdi-24px d-inline-block align-middle  me-1" /><span className="d-inline-block align-middle"> Add owner</span>
                        </a> */}
                        {/* <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton1"> */}
                          {/* <div className="p-2">
                            <input className="ember-power-select-search-input form-control" aria-controls="ember-power-select-options-ember2026" placeholder="Search" type="search" />
                          </div> */}
                          {/* <ul> */}
                          <div className="custom-select">
                          <Select           
                          options={options}
                         />
                          </div>
                       
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
                      </td>
                      <td>Apr 20th <br /> 2121</td>
                      <td className="align-middle">
                          <Rating1 rating={u.rating}/>
                      </td>
                   
                      <td className="align-middle">
                        <i className="mdi mdi-dots-vertical position-relative dropdown-toggle btn-no-image toogle-btn" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
                         <button   onClick={()=>handleArchive(u.id)} className="dropdown-item"  ><i className="dripicons-archive me-1 " /> Archive to Talent Pool</button>
                          <a className="dropdown-item" href="#"><i className=" dripicons-tags me-1 " /> Add Tags</a>
                          <a className="dropdown-item" href="#"><i className=" dripicons-message me-1 " /> Share</a>
                          <a className="dropdown-item" href="#"  onClick={()=>handleDelete(u.id)}><i className="dripicons-trash me-1 " /> Delete</a> 
                        </div>
                      </td>
                    </tr>
                    )}
                  </tbody>
                </table>
   </div>
<div id="right-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-sm modal-right side-bar-modal">
      <div className="modal-content bg-transparent">
        <div className="modal-body p-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          <div className="rightbar-content h-100">
            <div className="row p-3 h-100">
              <div className="col-lg-4 h-100">
                <div className="shadow text-center rounded h-100">
                  <div className="btn-group p-2 d-flex bG-gradient" id="tooltip-container2">
                    <button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#reject-modal" data-bs-container="#tooltip-container2" data-bs-placement="top" title="Reject"><i className="mdi mdi-thumb-down-outline" /></button>
                   
                   <Rating/>
                    <button type="button" className="btn btn-outline-info dropdown-toggle px-4" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Advance</button>
                    <Advance/>
                    <button type="button" className="btn btn-outline-info" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className=" dripicons-view-list" /></button>
                     <ButtonDropdown/>
                   </div>
                  <div className="bg-white p-3 vh-100 overflow-scroll">
                   <User  user={id}/>
                    <hr />
                  <Contact />
                    <hr />
                    </div>
                  </div>
                </div>
              
              
              <div className="col-lg-8">
                 <ConversationNav/>
                <div className="tab-content">
                  <div className="tab-pane p-sm-4 bg-white show active vh-100 overflow-scroll" id="Summary">
                    <Summary />
                  </div>
                  <div className="tab-pane profile-tabs bg-white vh-100 overflow-scroll" id="Profile">
                   <Profile/>
                  </div>
                  <div className="tab-pane p-sm-4 bg-white vh-100 overflow-scroll" id="Emails">
                  <Emails/>
                  <hr />
                  </div>
                  <div className="tab-pane p-sm-4 bg-white vh-100 overflow-scroll" id="Comments">
                  <Comments/>
                    <hr />
                  </div>
                  <div className="tab-pane p-sm-4 bg-white vh-100 overflow-scroll text-center" id="Interviews">
                   <Interview/>
                 </div>
                  <div className="tab-pane p-sm-4 bg-white vh-100 overflow-scroll" id="Tasks">
                    <Task/>
                  </div>
                  <div className="tab-pane p-sm-4 bg-white vh-100 overflow-scroll" id="Timeline">
             <Timeline/>
             </div>
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
</>
    )
}

export default CoversationTable
