import React from 'react'
import {FaStar} from 'react-icons/fa'
function Star() {
  
    return (
        <div>
            {[...Array(5)].map((star)=>
            <label>
                
                <FaStar/>
            </label>

            )}
           
        </div>
    )
}
export default Star
