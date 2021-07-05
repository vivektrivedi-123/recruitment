import React, { useEffect } from 'react'
import {Redirect, useHistory } from 'react-router-dom';

function TokenExpire() {
const history=useHistory()
   useEffect(()=>{
       setInterval(()=>{
           console.log('history')
        localStorage.clear();
  
       },10000)
   })
   return(
       <>

       </>
   )
}

export default TokenExpire
