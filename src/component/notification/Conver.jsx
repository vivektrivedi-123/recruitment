import React,{useState} from 'react'
import Switch from './Switch';

function Conver() {
  const[state,setState]=useState({
    check1:false,
    check2:true,
    check3:true,
    check4:false,
    check5:true,
    check6:true,
    check7:true
})

const handleChange=(e)=>{
    const{name,checked}=e.target;
    console.log(checked)
    setState({...state,[name]:checked})
}
  
    return (
        <>
          <h4 className="text-info ps-1 mt-4">Conversations</h4>
                      <Switch name="check1" onChange={handleChange} value={state.check1} data="Candidate responded" />
                      <Switch name="check2" onChange={handleChange} value={state.check2} data="Private comment added"/>
                    <Switch name="check3" onChange={handleChange} value={state.check3} data="New public comment poste"/>     
                    <Switch name="check4" onChange={handleChange} value={state.check4} data="You were mentioned in comment"/>
            
                     
        </>
    )
}

export default Conver
