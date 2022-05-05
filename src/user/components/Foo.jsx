import React, { useState } from "react";
import { DateRangePicker ,createStaticRanges} from 'react-date-range';
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









const Foo = () => {
    const[filter,setFilter]=useState(false)
  const [ state, setState ] = useState([
    {
        startDate: subDays(new Date(), 90),
        endDate: new Date(),
        key: 'selection'
    }
]);

  

  /* const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  } */

  const sideBar = sideBarOptions();
 
  const staticRanges = [
      // ...defaultStaticRanges,
      ...createStaticRanges(sideBar)
  ];


  return (
      <>
      <button onClick={()=>{setFilter(!filter)}}>Filter</button>

      <DateRangePicker
                            onChange={(item) => {
                                console.log('item', item);
                                setState([ item.selection ]);
                            }}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={state}
                            //onChange={handleSelect}
                            direction="horizontal"
                            staticRanges={staticRanges}
                        />
</>
  );
};

export default Foo;
