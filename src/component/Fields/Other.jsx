import React, { useState } from 'react'

function Other() {
  const[state,setState]=useState({
    offer_valid:"",
    notes:""
  })

  const handleChange=(e)=>{
      console.log(e.target.value)
      const{value,name}=e.target;
      setState({...state,[name]:value})
  }
    return (
        <>
                       <h2 className="accordion-header" id="flush-headingOne4">
                    <button className="accordion-button bg-light collapsed font-600 fs-4 border-top-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne4">
                      Other details
                    </button>
                  </h2>
                  <div id="flush-collapseOne4" className="accordion-collapse collapse" aria-labelledby="flush-headingOne4" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Offer Valid Till</label>
                            <input 
                              className="form-control" 
                              id="example-date" 
                              type="date" 
                              name="offer_valid"
                              onChange={handleChange}
                              value={state.offer_valid} 
                              />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Notes on offer</label>
                            <textarea 
                               className="form-control" 
                               id="example-textarea" 
                               rows={5} 
                               name="notes"
                               value={state.notes}
                               onChange={handleChange}                              
                             />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>   
        </>
    )
}

export default Other
