import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { DateRangePicker,createStaticRanges } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'




import {
  addDays,
  subDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  startOfYear,
  endOfYear,
  addYears
} from 'date-fns';
const defineds = {
  startOfWeek: startOfWeek(new Date()),
  endOfWeek: endOfWeek(new Date()),
  startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
  endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
  startOfToday: startOfDay(new Date()),
  startOfLastSevenDay: startOfDay(addDays(new Date(), -7)),
  startOfLastThirtyDay: startOfDay(addDays(new Date(), -30)),
  startOfLastNintyDay: startOfDay(addDays(new Date(), -90)),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  startOfMonth: startOfMonth(new Date()),
  endOfMonth: endOfMonth(new Date()),
  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
  startOfYear: startOfYear(new Date()),
  endOfYear: endOfYear(new Date()),
  startOflastYear: startOfYear(addYears(new Date(), -1)),
  endOflastYear: endOfYear(addYears(new Date(), -1))
};

const sideBarOptions = () => {
  const customDateObjects = [
      {
          label: 'Today',
          range: () => ({
              startDate: defineds.startOfToday,
              endDate: defineds.endOfToday
          })
      },
      {
          label: 'Last 7 Days',
          range: () => ({
              startDate: defineds.startOfLastSevenDay,
              endDate: defineds.endOfToday
          })
      },
      {
          label: 'Last 30 Days',
          range: () => ({
              startDate: defineds.startOfLastThirtyDay,
              endDate: defineds.endOfToday
          })
      },
      {
          label: 'Last 90 Days',
          range: () => ({
              startDate: defineds.startOfLastNintyDay,
              endDate: defineds.endOfToday
          })
      },
      {
          label: 'Last Week',
          range: () => ({
              startDate: defineds.startOfLastWeek,
              endDate: defineds.endOfLastWeek
          })
      },
      {
          label: 'Last Month',
          range: () => ({
              startDate: defineds.startOfLastMonth,
              endDate: defineds.endOfLastMonth
          })
      },
      {
          label: 'Last Year',
          range: () => ({
              startDate: defineds.startOflastYear,
              endDate: defineds.endOflastYear
          })
      }
  ];

  return customDateObjects;
};







const Rating = (props) => {
  const [ state, setState ] = useState([
    {
        startDate: subDays(new Date(),360),
        endDate: new Date(),
        key: 'selection'
    }
]);

const[filter,setFilter]=useState(false)
  const [chartData, setChartData] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  //const [chartDetail,setChartDetail]=useState()
  //const [focusedInput, setFocusedInput] = useState(null);
  const brandId=props.id;
 
  //const [count,setCount]=useState(0)
  const chart = () => {
    let yearMonth = [];
    let avg_rating = [];
 let token=localStorage.getItem('token')
 console.log(brandId)

 
    if(state)
    {
      console.log(state[0].startDate.getMonth()+1)
      console.log(state[0].startDate.getFullYear())
      let d1=state[0].endDate.getFullYear()+'-'+(state[0].endDate.getMonth()+1)+'-'+state[0].endDate.getDate();
      let d=state[0].startDate.getFullYear()+'-'+(state[0].startDate.getMonth()+1)+'-'+state[0].startDate.getDate();
      setStartDate(d)
      setEndDate(d1)
    }
     axios
      .get(`https://api-4sight.rudraserver.com/api/v1/dashboard?start=${state?state[0].startDate.getFullYear()+"-"+(state[0].startDate.getMonth()+1)+"-"+state[0].startDate.getDate():''}&& end=${state?state[0].endDate.getFullYear()+"-"+(state[0].endDate.getMonth()+1)+"-"+state[0].endDate.getDate():''} &&brand_id=${brandId}`,{ 
        headers: {
        'Authorization': 'Bearer ' + token
      }

      })
      .then(res => { 

        console.log(res.data.data)
        for (const dataObj of res.data.data.ratings.stars_chart)
        {
            yearMonth.push(dataObj.year_month);
            avg_rating.push(dataObj.avg_stars)
        }
      setChartData({
        labels:  yearMonth,
        datasets: [
          {
            label: "star rating",
            data: avg_rating ,
            backgroundColor: "rgba(245,245,255)",
            borderWidth: 3,
            borderColor:'grey'
          }
        ]
      })
      })
      .catch(err => {
        console.log(err);
      }); 
    
  }; 

  useEffect(() => {
    chart() 
  }, [state,brandId,filter]);


 

const sideBar = sideBarOptions();
 
const staticRanges = [
    // ...defaultStaticRanges,
    ...createStaticRanges(sideBar)
];


 
  return (
    <>
    
      <h4 className="font-weight-medium font-poppins text-exp ">Average Star Rating</h4>
      <h6 className="text-muted font-weight-semibold">{startDate?startDate:''} - {endDate?endDate:''}</h6>
      <button onClick={()=>{setFilter(!filter)}}>Filter</button>
      {filter?
      <DateRangePicker
                  
                             onChange={(item) => {
                               // console.log('item1', item);
                                setState([ item.selection ]);
                               
                            }} 
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={state}
                            //
                            direction="horizontal"
                            staticRanges={staticRanges}
                        />:''}
     
  
      <div>
      {chartData.length!==0 && chartData.labels.length!==0?
      <Line
          data={chartData}
          width={300}
         height={300} 
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false
           },
           // title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                   // min:1,
                    maxTicksLimit: 8,
                   // beginAtOne: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                
                {
                  
                  
                   /* ticks: {
                    autoSkip: true,
                    //showXLabels: 10,
                    maxTicksLimit: 8,
                    maxRotation: 0,
                    minRotation: 0
                },  */
                  gridLines: {
                    display: false
                  },
                
                }
              ]
            }
          }}
        />:<h3 className="text-center">No Data</h3>}
      </div>
    </>
  );
};

export default Rating;
