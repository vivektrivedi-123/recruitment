import React,{useState} from 'react'
import Switch from './Switch';

function TaskTab() {
    const[state,setState]=useState({
        check1:false,
        check2:true,
        check3:true,
        check4:false,
        check5:true,
        check6:true
    })

    const handleChange=(e)=>{
        const{name,checked}=e.target;
        console.log(checked)
        setState({...state,[name]:checked})
    }
    return (
        <>
         <div className="tab-pane" id="settings-b1">{/*task tab*/}
                    <ul className="list-group preferences">
                    <Switch name="check1" onChange={handleChange} value={state.check1} data="New task assigned (Sent to assignee)" />
                     <Switch name="check2" onChange={handleChange} value={state.check2} data="Task reminder (Sent to assignee)" />
                     <Switch name="check3" onChange={handleChange} value={state.check3} data="Task overdue (Sent to creator/ assignee)"/>
                    <Switch name="check4" onChange={handleChange} value={state.check4} data="Task updated (Sent to assignee)" />
                     <Switch name="check5" onChange={handleChange} value={state.check5} data="Task completed (Sent to creator/ assignee)" />
                    <Switch name="check6" onChange={handleChange} value={state.check6} data="Task deleted (Sent to assignee)" />
                    </ul>
                  </div>   
        </>
    )
}

export default TaskTab
