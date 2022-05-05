import React,{useEffect,useState} from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';


const Barchart=()=> {


  /*
  useEffect(()=>{
    let token=localStorage.getItem('token')
    axios.get(' https://api-4sight.rudraserver.com/index.php/api/v1/overview/'+`${id}`,{
       headers: {
          'Authorization': 'Bearer ' + token
        }
    }).then((res)=>{
       console.log(res.data)
    }).catch((err)=>{
       console.log(err)
    })
 },[])  */

    const state = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
          //  label: 'My First dataset',
            backgroundColor:'#1E90FF', //'rgba(255,99,132,0.2)',
            borderColor: '#1E90FF',
            borderWidth: 1,
           // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            //hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
    }
    return (
        <>
            
            <Bar 
            data={state}
             options={{
                responsive: true,
                scaleShowLabels : false,
     // animationEasing: 'easeInOutQuart',
                maintainAspectRatio: false,
                legend: {
                  display: false
               }
            ,
            scales: {
                yAxes: [
                  {
                    ticks: {
                     display:false
                     // beginAtOne: true
                    },
                    gridLines: {
                      display: false
                    }
                  }
                ],
                xAxes: [
                
                    {
                        ticks: {
                         display:false
                         // beginAtOne: true
                        },
                      
                      gridLines: {
                        display: false
                      },
                    
                    }
                ]}
        }}
            />
        </>
    );
  
}

export default Barchart;