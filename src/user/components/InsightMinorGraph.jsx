import React from 'react'
import { Line } from "react-chartjs-2";
function InsightMinorGraph(props) {
    const chartData=props.chart
    const len=props.star;
    return (
        <>
         <div className="d-flex align-items-center">
                            <h6 className="font-12 mb-0 text-green text-uppercase">Average star Rating</h6>
                            <div className="d-flex ml-5 align-items-center">
                              <h4 className="font-weight-bold mb-0">{len}</h4>
                              {/*  <small className="font-10 total-small ml-2">Total <br />for small</small> */} 
                            </div>   
                       </div>
       <div className='chart-view'>                
      {chartData.length!==0?
        <Line
          data={chartData}
          style={{
            width: '100%',
            height: '100%',
           
          }}
          options={{
          responsive: true,
          
         maintainAspectRatio: false,
         layout:{

         },
            legend: {
              display: false
           },
           // title: { text: "THICCNESS SCALE", display: true },
            scales: {
             
              yAxes: [
                
                {
                  stacked: false,
                  ticks: {
                    display: false ,
                 /*    autoSkip: true,
                    min:1,
                    maxTicksLimit: 8, */
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
                    display: false 
                   /*  autoSkip: true,
                    //showXLabels: 10,
                    maxTicksLimit: 8,
                    maxRotation: 0,
                    minRotation: 0 */
                },  
                  gridLines: {
                    display: false
                  },
                
                }
              ]
            }
          }}
        />
        :''}
        </div>
        </>
    )
}

export default InsightMinorGraph
