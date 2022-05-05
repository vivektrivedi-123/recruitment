import React from 'react'
import { Line } from "react-chartjs-2";

function Areachart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
           // label: "First dataset",
           pointRadius: 0,
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "#1E90FF",
           // borderColor: "rgba(75,192,192,1)"
          },
          {
           // label: "Second dataset",
           pointRadius: 0,
            data: [33, 25, 35, 51, 54, 76],
            fill: true,
            backgroundColor: "orange",
            //borderColor: "#742774"
          }
        ]
      };
    return (
        <>
      <Line
       data={data} 
       options={{
        responsive: true,
        scaleShowLabels : false,
       // maintainAspectRatio: false,
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
    )
}

export default Areachart
