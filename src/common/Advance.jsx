import React, { useState } from 'react'
import openData from '../Conversation.json'

function Advance() {
  const[open,setOpen] = useState(openData.open)
  const[offer,setOffer] = useState(openData.offer)
  const[screening , setScreening] = useState(openData.screening)
  const[interviews,setInterviews] = useState(openData.interviews)
  const[hire,setHire] = useState(openData.hire)
    return (
        <>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{margin: 0}}>
         <h5 className="text-uppercase px-2">Sourcing</h5>
         <ul>
           {open.map((u,i)=>
             
             <li><a className="fw-normal" href="#">{u}<i className=" dripicons-checkmark float-end" /></a></li> 
              
           )}
           </ul>
            <h5 className="text-uppercase px-2">Screening</h5>
            <ul>
            {screening.map((s,i)=>
             
             <li><a className="fw-normal" href="#">{s}</a></li>
            )}
            </ul>
                         
          <h5 className="text-uppercase px-2">Interviews</h5>
          <ul>
          {interviews.map((inter,i)=>
           
           <li><a className="fw-normal" href="#">{inter}</a></li>
        
          )}
           </ul>
         <h5 className="text-uppercase px-2">Offer</h5>
         <ul>
         {offer.map((o,i)=>
         
         <li><a className="fw-normal" href="#">{o}</a></li>
      
         )}
          </ul>
      <h5 className="text-uppercase px-2">Hire</h5>
      <ul>
      {hire.map((h,i)=>
      
      <li><a className="fw-normal" href="#">{h}</a></li>
      
      )}
      </ul>
                    </div>
        </>
    )
}

export default Advance
