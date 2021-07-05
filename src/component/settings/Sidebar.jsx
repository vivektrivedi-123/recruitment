import React from 'react'
import EmployeeInfoSetting from './EmployeeInfoSetting'
import GeneralSetting from './GeneralSetting'
import RecruitAndTalent from './RecruitAndTalent'
function Sidebar(props) {
    return (
        <>
          <a href="#!" className="d-flex justify-content-between align-items-center px-2 position-fixed active" style={{width: 'inherit'}}>
  <h4 className="ms-2">{props.name}</h4>
  <i className=" uil-angle-right fs-3" /> 
</a>

      <div className="px-3">
        <GeneralSetting/>
        <hr/>
        <RecruitAndTalent/>
        <hr/>
        <EmployeeInfoSetting/>
       
      </div>   
        </>
    )
}

export default Sidebar
