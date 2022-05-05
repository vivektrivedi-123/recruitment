import moment from 'moment';
import React,{useEffect, useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


function DatePick() {


  let c=new Date();
  c.setMonth(c.getMonth()-3)
  
    const [startDate, setStartDate] = useState(new Date());
    const [endDate,setEndDate]=useState(c);

    const ExampleCustomTimeInput = ({ date, value, onChange }) => (

      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ border: "solid 1px pink" }}
      />
    );
    useEffect(()=>{
        if(startDate!==null)
        {
          let ed=moment(endDate)
            console.log(ed.format('yyyy-MM-DD'))
            console.log(startDate.toLocaleDateString())
        }        
    },[startDate])

  return (
     <>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        onChange={date => setStartDate(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        customTimeInput={<ExampleCustomTimeInput />}
      />
    <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={endDate}
        onChange={date => setEndDate(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
   </>
    );
  
}

export default DatePick
