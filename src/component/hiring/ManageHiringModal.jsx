import React,{useState,useEffect} from 'react'
import { List, arrayMove } from 'react-movable';
import Removable from '../../common/Removable';
function ManageHiringModal({data}) {
    const [items, setItems] = useState(['Interview 1', 'Interview 2', 'Interview 3']);
    const [items1, setItems1] = useState(['Contacted', 'Written test']);
    const[modal,setModal]=useState({})
    useEffect(()=>{
      if(data)
      {
        console.log(data.stages)
        setModal(data.stages)
      }
     
    },[data])
    
    return (
        <>
         <div id="hiringModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
  <div className="w-100 modal-dialog modal-lg modal-right justify-content-start">
    <div className="modal-content border-0">
      <div className="modal-header px-4 py-2">
        <h4 className="modal-title" id="standard-modalLabel"> Customize Hiring Process </h4>
        {/* Copy From */}
        <div className="dropdown me-auto ms-3">
          <button className="form-control dropdown-toggle py-1" type="button" name="dropdownMenuButton1" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" required> 
            Copy From
          </button>                        
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <div className="p-2">
              <input 
                className="form-control" 
                placeholder="Search" 
                type="search" 
                />
            </div>
            <div className="p-2 overflow-scroll fix-dropdown">
              <ul>
                {/* <span class="mx-2"> Type to search </span>   */}
                <span className="font-11 text-dark font-600 ms-2"> OTHER JOBS </span>
                <li>
                  <a className href="#"> Angular Developer </a>
                </li>
                <li>
                  <a className href="#"> Do Net Developer </a>
                </li>
                <li>
                  <a className href="#"> IOS Developer/Team Lead </a>
                </li>
                <li>
                  <a className href="#"> UI/UX Designer </a>
                </li>
                <li>
                  <a className href="#"> Graphic Designer </a>
                </li>
                <li>
                  <a className href="#"> React Native Developer - Android/iOS Platform </a>
                </li>
                <li>
                  <a className href="#"> Web Designer </a>
                </li>
                <li>
                  <a className href="#"> MBA Fresher - Business Development </a>
                </li>
                <li>
                  <a className href="#"> Business Development Manager </a>
                </li>
                <li>
                  <a className href="#"> Fresher MERN/ MEANStack </a>
                </li>
                <li>
                  <a className href="#"> Fresher PHP Developer </a>
                </li>
                <li>
                  <a className href="#"> Linux Server Administrator/AWS </a>
                </li>
                <li>
                  <a className href="#"> PHP Developer </a>
                </li>
                <li>
                  <a className href="#"> Software Tester/QA </a>
                </li>
                <li>
                  <a className href="#"> Business Development Executive </a>
                </li>
                <li>
                  <a className href="#"> Business Analyst - IT </a>
                </li>
                <li>
                  <a className href="#"> Sr. Wordpress Developer/Team Lead </a>
                </li>
                <li>
                  <a className href="#"> Full Stack Developer - MEAN / MERN </a>
                </li> 
                <li>
                  <a className href="#"> Senior PHP Developer </a>
                </li>
                <li>
                  <a className href="#"> PHP Trainer </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copy From ends*/}
        {/* cancel */}
        <div className="me-2">
          <button className="form-control border-0" type="button"> 
            Cancel
          </button> 
        </div>                       
        {/* cancel ends*/}
        {/* Preview From */}
        <div className="me-2">
          <button className="form-control py-1 hov-eff" type="button" data-bs-toggle="modal" data-bs-target="#hiring-preview-modal"> 
            Preview
          </button> 
        </div>                       
        {/* Preview From ends*/}
        {/* Save */}
        <div className>
          <button className="form-control py-1 btn-primary" type="button"> 
            Save
          </button> 
        </div>                       
        {/* Save ends*/}
      </div>
      <div className="modal-body px-4 py-4">
        <div className="border">
          {/* heading */}
          <div className="d-flex p-3 bg-light">
            <div className="col-md-6">
              <div>
                Stages
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                Interview Kit 
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                Online Assessment 
              </div>
            </div>
          </div> 
          {/* heading */}
          <div className="d-flex p-3">
            <div className="col-md-6">
              {/* sourcing */}
              <div> 
                <h5 className="font-20 w-25" style={{fontWeight: 400}}> SOURCING </h5>
                <div className="d-flex">
                  <div className="card w-100 shadow-none">
                    <div className="ps-1 border-start border-4 border-secondary">
                      <div className="rounded card-body px-3 py-2 bg-light">
                        <h5 className="text-info  semi-bold my-0 "> Open - default </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* sourcing ends */}
              {/* SCREENING  */}
              <div> 
                <h5 className="font-20" style={{fontWeight: 400}}> SCREENING  
                  <i className="mdi mdi-plus-circle float-end text-success" />
                </h5>
                <Removable item={items}/>
                {/* <div className="d-flex">
                  <div className="card w-100 shadow-none">
                    <div className="ps-1 border-start border-4 border-warning">
                      <div className="rounded card-body px-3 py-2 bg-white border users-select position-relative">
                        <h5 className="text-info semi-bold my-0 "> <i className="mdi mdi-menu text-muted" />  &nbsp; Contacted </h5>
                        <div className="action-module position-absolute mt-0 translate-middle-y">
                          <a href="#" className="d-block" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-minus-circle-outline font-20 text-danger d-inline-block align-middle" />
                          </a>
                        </div>
                      </div>
                      <div className="rounded card-body px-3 py-2 mt-2 bg-white border users-select position-relative">
                        <h5 className="text-info semi-bold my-0 "> <i className="mdi mdi-menu text-muted" />  &nbsp; Written test </h5>
                        <div className="action-module position-absolute mt-0 translate-middle-y">
                          <a href="#" className="d-block" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-minus-circle-outline font-20 text-danger d-inline-block align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* d-flex ends */}
              </div>
              {/* screening  ends */}
              {/* INTERVIEWS  */}
              <div> 
                <h5 className="font-20" style={{fontWeight: 400}}> INTERVIEWS  
                  <i className="mdi mdi-plus-circle float-end text-success" />
                </h5>
                <Removable item={items1}/>
                {/* <List
                    values={items}
                    onChange={({ oldIndex, newIndex }) =>
                        setItems(arrayMove(items, oldIndex, newIndex))
                    }
                    renderList={({ children, props }) => <ul {...props}>{children}</ul>}
                    renderItem={({ value, props,index }) =>    
                     <div key={index} className="d-flex">
                    <div className="card w-100 shadow-none">
                      <div className="ps-1 border-start border-4 border-danger">
                      <div className="rounded card-body px-3 py-2 bg-white border users-select position-relative">
                        <h5 className="text-info semi-bold my-0 "> <i className="mdi mdi-menu text-muted" />  &nbsp;   <li  {...props}>{value}</li> </h5>
                        <div className="action-module position-absolute mt-0 translate-middle-y">
                          <a href="#" className="d-block" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-minus-circle-outline font-20 text-danger d-inline-block align-middle" />
                          </a>
                        </div>
                      </div>
                     
                          </div>
                          </div>
                          </div>
                        }
                 /> */}
                 {/* <div className="d-flex">
                  <div className="card w-100 shadow-none">
                    <div className="ps-1 border-start border-4 border-danger">
                      <div className="rounded card-body px-3 py-2 bg-white border users-select position-relative">
                        <h5 className="text-info semi-bold my-0 "> <i className="mdi mdi-menu text-muted" />  &nbsp; Technical round </h5>
                        <div className="action-module position-absolute mt-0 translate-middle-y">
                          <a href="#" className="d-block" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-minus-circle-outline font-20 text-danger d-inline-block align-middle" />
                          </a>
                        </div>
                      </div>
                      <div className="rounded card-body px-3 py-2 mt-2 bg-white border users-select position-relative">
                        <h5 className="text-info semi-bold my-0 "> <i className="mdi mdi-menu text-muted" />  &nbsp; Culture fit round </h5>
                        <div className="action-module position-absolute mt-0 translate-middle-y">
                          <a href="#" className="d-block" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-minus-circle-outline font-20 text-danger d-inline-block align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  */}
                {/* d-flex ends */}
              </div>
              {/* INTERVIEWS  ends */}
              {/* Offer  */}
              <div> 
                <h5 className="font-20" style={{fontWeight: 400}}> OFFER  
                  <i className="mdi mdi-plus-circle float-end text-success" />
                </h5>
                <div className="d-flex">
                  <div className="card w-100 shadow-none">
                    <div className="ps-1 border-start border-4 border-primary">
                      <div className="rounded card-body px-3 py-2 bg-light users-select position-relative">
                        <h5 className="text-info semi-bold my-0 ">     
                          Offer Draft  - default </h5>
                       </div>
                      <div className="rounded card-body px-3 py-2 mt-2 bg-light users-select position-relative">
                        <h5 className="text-info semi-bold my-0 "> 
                          Offered  - default </h5>
                      </div>
                      <div className="rounded card-body px-3 py-2 mt-2 bg-light users-select position-relative">
                        <h5 className="text-info semi-bold my-0 "> 
                          Offer Accepted  - default
                        </h5>
                      </div>
                      <div className="rounded card-body px-3 py-2 mt-2 bg-light users-select position-relative">
                        <h5 className="text-info semi-bold my-0 ">
                          Offer Declined  - default
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                {/* d-flex ends */}
              </div>
              {/* offer  ends */}
              {/* hire  */}
              <div> 
                <h5 className="font-20" style={{fontWeight: 400}}> HIRE 
                </h5>
                <div className="d-flex">
                  <div className="card w-100 shadow-none">
                    <div className="ps-1 border-start border-4 border-success">
                      <div className="rounded card-body px-3 py-2 bg-light users-select position-relative">
                        <h5 className="text-info semi-bold my-0 "> 
                          
                          Hired  - default
                        </h5>
                      </div>
                    </div>
                  </div>
                </div> 
                {/* d-flex ends */}
              </div>
              {/* hire  ends */}
            </div>
            {/* col-md-6 */}
            <div className="col-md-3">
              {/* sourcing */}
              <div className="invisible"> 
                <h5 className="font-20 w-25 invisible" style={{fontWeight: 400}}> SOURCING </h5>
                <div className="d-flex">
                  <div className="card w-100 shadow-none">
                    <div className="rounded card-body text-center py-2">
                      <h5 className="text-info my-0" style={{fontWeight: 400}}> 
                        <i className="uil uil-clipboard-notes" />  &nbsp; 
                        Configure </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* sourcing */}
              {/* screening */}
              <div> 
                <h5 className="font-20 w-25 invisible" style={{fontWeight: 400}}> SCREENING </h5>
                <div className="d-flex">
                  <div className="card w-100 shadow-none">
                    <div id="tooltip" className="rounded card-body text-center py-1" data-bs-toggle="modal" data-bs-target="#configure1-modal">
                      <button type="button" className="btn" data-bs-container="#tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Select focus competencies & add interviewer's instructions">
                        <h5 className="text-info my-0" style={{fontWeight: 400}}> 
                          <i className="uil uil-clipboard-notes" />  &nbsp; 
                          Configure </h5> 
                      </button>
                    </div>
                    <div id="tooltip" className="rounded card-body text-center py-1 mt-2" data-bs-toggle="modal" data-bs-target="#configure2-modal">
                      <button type="button" className="btn" data-bs-container="#tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Select focus competencies & add interviewer's instructions">
                        <h5 className="text-info my-0" style={{fontWeight: 400}}> 
                          <i className="uil uil-clipboard-notes" />  &nbsp; 
                          Configure </h5> 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* screening */}
              {/* Interviews */}
              <div> 
                <h5 className="font-20 w-25 invisible" style={{fontWeight: 400}}> INTERVIEWS </h5>
                <div className="d-flex">
                  <div className="card w-100 shadow-none">
                    <div id="tooltip" className="rounded card-body text-center py-1" data-bs-toggle="modal" data-bs-target="#configure3-modal">
                      <button type="button" className="btn" data-bs-container="#tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Select focus competencies & add interviewer's instructions">
                        <h5 className="text-info my-0" style={{fontWeight: 400}}> 
                          <i className="uil uil-clipboard-notes" />  &nbsp; 
                          Configure </h5> 
                      </button>
                    </div>
                    <div id="tooltip" className="rounded card-body text-center py-1 mt-2" data-bs-toggle="modal" data-bs-target="#configure4-modal">
                      <button type="button" className="btn" data-bs-container="#tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Select focus competencies & add interviewer's instructions">
                        <h5 className="text-info my-0" style={{fontWeight: 400}}> 
                          <i className="uil uil-clipboard-notes" />  &nbsp; 
                          Configure </h5> 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Interviews */}
            </div>
            {/* col-md-3 */}
            <div className="col-md-3">
              {/* sourcing */}
              <div className="invisible"> 
                <h5 className="font-20 w-25 invisible" style={{fontWeight: 400}}> SOURCING </h5>
                <div className="d-flex">
                  <div className="card w-100 shadow-none">
                    <div id="tooltip" className="rounded card-body text-center py-2">
                      <button type="button" className="btn" data-bs-container="#tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Configure Assessment">
                        <h5 className="text-info my-0" style={{fontWeight: 400}}> 
                          <i className="uil uil-cog" />  &nbsp; 
                          Configure </h5> 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* sourcing */}
              {/* screening */}
              <div> 
                <h5 className="font-20 w-25 m-0 invisible" style={{fontWeight: 400}}> SCREENING </h5>
                <div className="d-flex">
                  <div className="card w-100 shadow-none mt-1">
                    <div id="tooltip" className="rounded card-body text-center py-1" data-bs-toggle="modal" data-bs-target="#configure5-modal">
                      <button type="button" className="btn" data-bs-container="#tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Configure Assessment">
                        <h5 className="text-info my-0" style={{fontWeight: 400}}> 
                          <i className="uil uil-cog" />  &nbsp; 
                          Configure </h5> 
                      </button>
                    </div>
                    <div id="tooltip" className="rounded card-body text-center py-1 mt-2" data-bs-toggle="modal" data-bs-target="#configure6-modal">
                      <button type="button" className="btn" data-bs-container="#tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Configure Assessment">
                        <h5 className="text-info my-0" style={{fontWeight: 400}}> 
                          <i className="uil uil-cog" />  &nbsp; 
                          Configure </h5> 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* screening */}
              {/* interviews */}
              <div> 
                <h5 className="font-20 w-25 m-0 invisible" style={{fontWeight: 400}}> INTERVIEWS </h5>
                <div className="d-flex">
                  <div className="card w-100 shadow-none mt-3">
                    <div id="tooltip" className="rounded card-body text-center py-1" data-bs-toggle="modal" data-bs-target="#configure7-modal">
                      <button type="button" className="btn" data-bs-container="#tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Configure Assessment">
                        <h5 className="text-info my-0" style={{fontWeight: 400}}> 
                          <i className="uil uil-cog" />  &nbsp; 
                          Configure </h5> 
                      </button>
                    </div>
                    <div id="tooltip" className="rounded card-body text-center py-1 mt-2" data-bs-toggle="modal" data-bs-target="#configure8-modal">
                      <button type="button" className="btn" data-bs-container="#tooltip" data-bs-toggle="tooltip" data-bs-placement="top" title="Configure Assessment">
                        <h5 className="text-info my-0" style={{fontWeight: 400}}> 
                          <i className="uil uil-cog" />  &nbsp; 
                          Configure </h5> 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* interviews */}
            </div>
            {/* col-md-3 */}
          </div>
          <div className="border-top p-3">
            <div className="w-50 d-sm-flex alert-danger px-3 py-2">
              <div className="vertical-align"><i className="dripicons-lock size-20" /></div>
              <div className="vertical-align ms-2">
                <span> These stages are part of every job posting.</span>
              </div>
            </div>
            <div className="w-50 alert-secondary px-3 py-2">
              <h6 className="w-50 d-sm-flex font-600 font-14 py-1 text-info"> Rejected</h6> 
              <h6 className="w-50 d-sm-flex font-600 font-14 py-1 text-info"> Archive to Talent Pool </h6> 
              <h6 className="w-50 d-sm-flex font-600 font-14 py-1 text-info"> Deleted</h6>   
              <h6 className="w-50 d-sm-flex font-600 font-14 py-1 text-info"> Blacklisted</h6> 
            </div>
          </div>
        </div>
        {/* border */}
      </div> 
      {/* modal-body */}
    </div>   {/* /.modal-content */}
  </div>{/* /.modal-dialog */}
</div>
   
   
        </>
    )
}

export default ManageHiringModal
