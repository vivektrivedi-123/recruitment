import React,{useState} from 'react'
import Switch from './Switch'
function Vendor() {
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
          <div className="tab-pane" id="vendor">{/*vendor tab*/}
                    <h4 className="text-info ps-1 mt-3">Sourcing partner</h4>
                    <ul className="list-group preferences">
                    <Switch name="check1" change={handleChange} value={state.check1} data="Activation Email" />
                    <Switch name="check2" change={handleChange} value={state.check2} data="Weekly summary report" />
                    <Switch name="check3" change={handleChange} value={state.check3} data="Candidate offered" />
                    <Switch name="check4" change={handleChange} value={state.check4} data="Candidate Hired" />
                    <Switch name="check5"change={handleChange} value={state.check5} data="Private comment added" />
                     <Switch name="check6" change={handleChange} value={state.check6} data="You were mentioned in comment" />
                    <Switch name="check7" change={handleChange} value={state.check7} data="Batch of candidates shared with you" />
                    </ul>
                  </div>   
        </>
    )
}

export default Vendor
