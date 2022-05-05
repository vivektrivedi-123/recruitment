import React,{useEffect,useState} from 'react'
import axios from "axios";
import Plot from 'react-plotly.js';
function LineChart() {
    const [data, setData] = useState([{}]);
    // const [employeeSalary, setEmployeeSalary] = useState([]);
      //const [employeeAge, setEmployeeAge] = useState([]);
      const yearMonth = [];
      const avg_rating = [];
    
      useEffect(()=> {
   
     
        axios
          .get(`/api/analysis/review`)
          .then((res) => {
            //console.log(res.data);
         // setChartData(res.data)
          
            for (const dataObj of res.data) {
                //console.log(dataObj.YearMonth)
                yearMonth.push(parseInt(dataObj.YearMonth));
              avg_rating.push(parseFloat(dataObj.avg_star_rating));
            }
            setData(
                [
                    {
                      x:yearMonth ,
                      y:avg_rating,
                      type: 'scatter',
                      mode: 'lines+markers',
                      marker: {color: 'grey'}, 
                    }
                  ]
            )
            console.log(avg_rating.length)
            
          })
          .catch(err => {
            console.log(err);
          });
       // console.log(avg_rating);
       
      });
    
    /*   useEffect(() => {
        chart();
      }, []);
 */
    return (
        <>
            <h4 className="font-weight-medium font-poppins text-exp ">Average Star Rating</h4>
      <h6 className="text-muted font-weight-semibold">16 Nov,2020 - 15 Dec,2020</h6>
        <Plot
          data={data}
          layout={{width: 720, height: 440, title: ''}}
        /> 
        </>
    )
}

export default LineChart
