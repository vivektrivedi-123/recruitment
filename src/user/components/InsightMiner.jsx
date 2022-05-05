import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import ToggleBar from '../../common/Util';
import {globalVar} from '../components/config'
import { Pie } from "react-chartjs-2";
import axios from 'axios'
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Highlighter from "react-highlight-words";
import {  AgGridReact } from 'ag-grid-react';
//import Loader from "react-loader-spinner";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import InsightMinorGraph from './InsightMinorGraph';
import BeautyStars from 'beauty-stars';
import moment from "moment";
import Sidebar from './Sidebar';
//import Navbar from './Navbar';
function InsightMiner(props) {
  const[brandImage,setBrandImage]=useState('')
  const[graphSummary,setGraphSummary]=useState()
  const[graphKeywords,setGraphKeywords]=useState()
  const[graphReview,setGraphReview]=useState()

  const name=localStorage.getItem('name')
  const image=localStorage.getItem('avatar')
  const[keywordFilter,setKeywordFilter]=useState([])
  const[key,setKey]=useState('default')
  const[keyWordFilter1,setKeywordFilter1]=useState([])
  const[bname,setBname]=useState('')
  const[key1,setKey1]=useState('default')

const[chart1,setChart1]=useState([{}])
let c=new Date();
c.setMonth(c.getMonth()-3)
const [chartLength, setChartLength] = useState(0);
const[startDate1,setStartDate1]=useState(c)
const[endDate1,setEndDate1]=useState(new Date())
const[selectedEmotion1,setSelectedEmotion1]=useState('Default')
const[chart,setChart]=useState([{}])
const[chartData,setChartData]=useState([{}])
const [coupon,setCoupon]=useState([])
const[keywordReview,setKeyWordReview]=useState([{}])
const[opacity,setOpacity]=useState(0)
const[load,setLoad]=useState(true);
const[opacity1,setOpacity1]=useState(0)
const[brand,setBrand]=useState([{}])
const[product,setProduct]=useState([{}])
const[productDetail,setProductDetail]=useState([])
const[review,setReview]=useState([{}])
const[keywordData,setKeywordData]=useState([{}])
 const [searchTerm, setSearchTerm] =useState("");
//const [searchResults, setSearchResults] =useState([]);
const[keyword,setKeyword]=useState([{}]);
const[emotion,setEmotion]=useState([])

const [startDate, setStartDate] = useState(c)
const [endDate, setEndDate] = useState(new Date());
const[totalStars,setTotalStars]=useState(0)
const[selectedEmotion,setSelectedEmotion]=useState('Default');
const[selectedBrand,setSelectedBrand]=useState(0)
const[selectedProduct,setSelectedProduct]=useState(0);
const[selectedBrandForKeyword,setSelectedBrandForKeyword]=useState(0)
const [searchTerm1,setSearchTerm1]=useState([])


/* function addDays(theDate, days) {
  return new Date(theDate.getTime() + days*24*60*60*1000);
}0
 */
useEffect(()=>{
  let token=localStorage.getItem('token')
  axios.get(`${globalVar.REACT_APP_base_url}/api/v1/emotional`,{
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }).then((res)=>{
    console.log("emotion",res)
    setEmotion(res.data.data.emotionals)
  }).catch((err)=>{
    console.log(err)
  })
},[])




 
/*   const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const results = review.filter(u =>
        u.review_text.toLowerCase().includes(searchTerm)
        );
        
          setProductDetail(results);
  
    }
  } */
 



    useEffect(()=>{
    //  sortBy()
        ToggleBar();
        },[])
       


    useEffect(()=>{
      let token=localStorage.getItem('token')
      axios.get(globalVar.REACT_APP_base_url+'/api/v1/brands',{
         headers: {
            'Authorization': 'Bearer ' + token
          }
      }).then((res)=>{
       // console.log(res.data.data)
       setBrand(res.data.data)
     
       setBrandImage(res.data.data[0].image) 
      let token=localStorage.getItem('token');
    //  console.log(selectedBrand)
   // setSelectedBrand(res.data.data[0].id)
   setBname(res.data.data[0].company)
      if(res.data.data[0].id)
      {
      axios.get(`${globalVar.REACT_APP_base_url}/api/v1/brands/${res.data.data[0].id}`,{
        headers: {
           'Authorization': 'Bearer ' + token
         }
     }).then((res)=>{

      //console.log('product',res.data.data)
      setProduct(res.data.data.product)
      //console.log(selectedProduct)
     // setSelectedProduct(res.data.data.product[0].product_id)
if(res.data.data.product[0].product_id)
{
         axios.get(`${globalVar.REACT_APP_base_url}/api/v1/insight-miner?product_id=${res.data.data.product[0].product_id} `,{
      headers: {
        'Authorization': 'Bearer ' + token
      }}).then((res)=>{

          setKeywordFilter(res.data.data.keyword_filter)
        let ed1=moment(endDate)
        let st1=moment(startDate)
         let st=st1.format('yyyy-MM-DD');
         let ed=ed1.format('yyyy-MM-DD')
        let rev=res.data.data.reviews.filter(u=>u.review_date>st && u.review_date<ed)
        setProductDetail(rev)
        setReview(res.data.data.reviews)
       // console.log('reviewsforRev',res.data.data.reviews)
        
        setChartData(res.data.data.stars_chart)
        setTotalStars(res.data.data.total_stars)
        setGraphSummary(res.data.data.graph_tab.summary)
        setGraphKeywords(res.data.data.graph_tab.keyword)
        setGraphReview(res.data.data.graph_tab.review)
     /*    setKeyWordReview(res.data.data.keywords)
        setKeyword(res.data.data.keywords)
        setKeywordData(res.data.data.keywords)
        console.log('key=',res.data.data.keywords) */
        setLoad(false)
        setCoupon('')
        let rating=[];
        let yearMonth=[]

        if(res.data.data.reviews.length>0)
        {
          let total=res.data.data.reviews.length
          let diff=total-rev.length
          setChart1({
            labels: ['Total Reviews','Filtered Reviews'],
            datasets: [
              {
                data:[diff,rev.length],
                backgroundColor:['blue','red']
              }
            ]
          })
        }
        else{
          setChart1({
            labels: ['Total Reviews','Filtered Reviews'],
            datasets: [
              {
                data:[0,0],
                backgroundColor:['blue','red']
              }
            ]
          })
        }

       if(res.data.data.stars_chart.length>0){
        for (const dataObj of res.data.data.stars_chart) {
          //  console.log()
            rating.push(parseFloat(dataObj.total_star))
             yearMonth.push(dataObj.year_month)
           }
        setChart({
            labels: yearMonth,
            datasets: [
              {
                //label: " average star rating",
                data:rating ,
                radius:0,
                fill: false,
               // backgroundColor: 'rgb(245,245,255)',
                borderWidth: 2,
                borderColor:'#87ceeb'
              }
            ]
          })
        }
        else{
          setChart({
            labels: 0,
            datasets: [
              {
                //label: " average star rating",
                data:0 ,
                radius:0,
                fill: false,
               // backgroundColor: 'rgb(245,245,255)',
                borderWidth: 2,
                borderColor:'#87ceeb'
              }
            ]
          })
        }     
      }).catch((err)=>{
        console.log(err)
        setLoad(false)
      })

    }
  
     }).catch((err)=>{
        console.log(err)
        setLoad(false)
     }) 
    }
      }).catch((err)=>{
        console.log(err)
        setLoad(false)
      })
    },[])







    //For Keyword tab
 
    useEffect(()=>{
      let token=localStorage.getItem('token')
      axios.get(globalVar.REACT_APP_base_url+'/api/v1/brands',{
         headers: {
            'Authorization': 'Bearer ' + token
          }
      }).then((res)=>{
      let token=localStorage.getItem('token');
      setBname(res.data.data[0].company)
     // setSelectedBrand(res.data.data[0].id)
      if(res.data.data[0].id)
      {
      axios.get(`${globalVar.REACT_APP_base_url}/api/v1/brands/${res.data.data[0].id}`,{
        headers: {
           'Authorization': 'Bearer ' + token
         }
     }).then((res)=>{

    //  console.log(res.data.data)
     // setProduct(res.data.data.product)
  
if(res.data.data.product[0].product_id)
{
    
         axios.get(`${globalVar.REACT_APP_base_url}/api/v1/insight-miner?product_id=${res.data.data.product[0].product_id} `,{
      headers: {
        'Authorization': 'Bearer ' + token
      }}).then((res)=>{
        //console.log(res.data.data.reviews)
       // console.log("keyword=",res.data.data.keywords)
      // setChart(res.data.data.stars_chart)
      setKeywordFilter1(res.data.data.keyword_filter)
        setKeyWordReview(res.data.data.keywords)
        
        let st3=moment(startDate1)
        let ed3=moment(endDate1)
        let st=st3.format('YYYY-MM-DD');
        let ed=ed3.format('YYYY-MM-DD')
        let rev=res.data.data.keywords.filter(u=>u.reviews.review_date>st && u.reviews.review_date<ed)
        //console.log(rev)
        setKeyword(rev)
        setKeywordData(res.data.data.keywords)
        setCoupon('')
        setLoad(false)
      }).catch((err)=>{
        console.log(err)
        setLoad(false)
      })
    }
  
     }).catch((err)=>{
        console.log(err)
        setLoad(false)
     }) 
    }
      }).catch((err)=>{
        console.log(err)
        setLoad(false)
      })
    },[])

 



    const handleChange2 = event => {
      if(event.target.value==='')
      {
       setSearchTerm1([])
       let ed1=moment(endDate)
    let st1=moment(startDate)
     let st=st1.format('yyyy-MM-DD');
     let ed=ed1.format('yyyy-MM-DD')
       let rev=review.filter(u=>u.review_date>st && u.review_date<ed)
           setProductDetail(rev)
       // setProductDetail(review)
      }
      setSearchTerm(event.target.value);
      
      //setClick(!click)
    //  console.log(event.target.value)
        //setLoad(true)
    };
  



    const handleChange=(e)=>{
      
      var index = e.target.selectedIndex;
      var optionElement = e.target.childNodes[index]
      var option =  optionElement.getAttribute('id');
      let token=localStorage.getItem('token');
      setSelectedBrand(option)
      setSelectedBrandForKeyword(option)
      setSelectedProduct(0)
      setLoad(true)
      setBname(e.target.value)
      let result=brand.filter(u=>u.id==option);
      setBrandImage(result[0].image) 
      //setSelectedProductForKeyword(0)
          axios.get(`${globalVar.REACT_APP_base_url}/api/v1/brands/${option}`,{
      headers: {
        'Authorization': 'Bearer ' + token
      }}).then((res)=>{
       // console.log(res.data.data)
       if(res.data.data.product.length===0)
       {
        setLoad(false)
         setKeyword('');
         setProductDetail('');
         setGraphSummary('')
         setGraphKeywords('')
         setGraphReview('')
       }
       else
       {
        axios.get(`${globalVar.REACT_APP_base_url}/api/v1/insight-miner?product_id=${res.data.data.product[0].product_id}`,{
          headers: {
            'Authorization': 'Bearer ' + token
          }}).then((res)=>{

           // console.log('kf',res.data.data)
            setKeyWordReview(res.data.data.keywords)
           setKeywordData(res.data.data.keywords)
            setKeyword(res.data.data.keywords)
           // setCoupon(res.data.data.keywords)
           setGraphSummary(res.data.data.graph_tab.summary)
           setGraphKeywords(res.data.data.graph_tab.keyword)
           setGraphReview(res.data.data.graph_tab.review)
           setTotalStars(res.data.data.total_stars)
           setKeywordFilter(res.data.data.keyword_filter)
           setKeywordFilter1(res.data.data.keyword_filter)
           let ed2=moment(endDate)
           let st2=moment(startDate)
            let st=st2.format('yyyy-MM-DD');
            let ed=ed2.format('yyyy-MM-DD')

            let st3=moment(startDate1)
            let ed3=moment(endDate1)
            let st1=st3.format('YYYY-MM-DD');
            let ed1=ed3.format('YYYY-MM-DD')

        let rev1=res.data.data.keywords.filter(u=>u.reviews.review_date>st1 && u.reviews.review_date<ed1)
        setKeyword(rev1)
        // setCoupon(res.data.data.keywords)

        let rev=res.data.data.reviews.filter(u=>u.review_date>st && u.review_date<ed)
            setProductDetail(rev)
            let rating=[];
            let yearMonth=[]

            if(res.data.data.reviews.length>0)
            {
              let total=res.data.data.reviews.length
              let diff=total-rev.length
              setChart1({
                labels: ['Total Reviews','Filtered Reviews'],
                datasets: [
                  {
                    data:[diff,rev.length],
                    backgroundColor:['blue','red']
                  }
                ]
              })
            }
            else{
             setChart1({
                labels: ['Total Reviews','Filtered Reviews'],
                datasets: [
                  {
                    data:[0,0],
                    backgroundColor:['blue','red']
                  }
                ]
              })
            } 

            if(res.data.data.stars_chart.length>0){
              for (const dataObj of res.data.data.stars_chart) {
                //  console.log()
                  rating.push(parseFloat(dataObj.total_star))
                   yearMonth.push(dataObj.year_month)
                 }
              setChart({
                  labels: yearMonth,
                  datasets: [
                    {
                      //label: " average star rating",
                      data:rating ,
                      radius:0,
                      fill: false,
                     // backgroundColor: 'rgb(245,245,255)',
                      borderWidth: 2,
                      borderColor:'#87ceeb'
                    }
                  ]
                })
              }
              else{
                setChart({
                  labels: 0,
                  datasets: [
                    {
                      //label: " average star rating",
                      data:0 ,
                      radius:0,
                      fill: false,
                     // backgroundColor: 'rgb(245,245,255)',
                      borderWidth: 2,
                      borderColor:'#87ceeb'
                    }
                  ]
                })
              } 


            setReview(res.data.data.reviews)
           // console.log(res.data.data.keywords)
            setCoupon('')
            setLoad(false)
           
          }).catch((err)=>{
            console.log(err)
          })
       
       }
       setProduct(res.data.data.product)
      }).catch((err)=>{
        setLoad(false)
        console.log(err)
      })  
     
    } 


    const handleChange1=(e)=>{
      
      let token=localStorage.getItem('token')
      var index = e.target.selectedIndex;
      var optionElement = e.target.childNodes[index]
      var option =  optionElement.getAttribute('id');
      setSelectedProduct(option)
     // console.log(option)
      setLoad(true)
       //console.log(e.target.value)
   axios.get(`${globalVar.REACT_APP_base_url}/api/v1/insight-miner?product_id=${option}`,{
      headers: {
        'Authorization': 'Bearer ' + token
      }}).then((res)=>{
       // console.log(res.data.data.reviews)
       // setKeyword(res.data.data.keywords)
        setGraphSummary(res.data.data.graph_tab.summary)
       setGraphKeywords(res.data.data.graph_tab.keyword)
       setGraphReview(res.data.data.graph_tab.review) 
       setKeywordFilter(res.data.data.keyword_filter)
       let ed1=moment(endDate)
       let st1=moment(startDate)
        let st=st1.format('yyyy-MM-DD');
        let ed=ed1.format('yyyy-MM-DD')
       let rev=res.data.data.reviews.filter(u=>u.review_date>st && u.review_date<ed)
           setProductDetail(rev)
           let rating=[];
           let yearMonth=[]

           if(res.data.data.reviews.length>0)
           {
             let total=res.data.data.reviews.length
             let diff=total-rev.length
             setChart1({
               labels: ['Total Reviews','Filtered Reviews'],
               datasets: [
                 {
                   data:[diff,rev.length],
                   backgroundColor:['blue','red']
                 }
               ]
             })
           }
           else{
            setChart1({
               labels: ['Total Reviews','Filtered Reviews'],
               datasets: [
                 {
                   data:[0,0],
                   backgroundColor:['blue','red']
                 }
               ]
             })
           } 

           if(res.data.data.stars_chart.length>0){
             for (const dataObj of res.data.data.stars_chart) {
               //  console.log()
                 rating.push(parseFloat(dataObj.total_star))
                  yearMonth.push(dataObj.year_month)
                }
             setChart({
                 labels: yearMonth,
                 datasets: [
                   {
                     //label: " average star rating",
                     data:rating ,
                     radius:0,
                     fill: false,
                    // backgroundColor: 'rgb(245,245,255)',
                     borderWidth: 2,
                     borderColor:'#87ceeb'
                   }
                 ]
               })
             }
             else{
               setChart({
                 labels: 0,
                 datasets: [
                   {
                     //label: " average star rating",
                     data:0 ,
                     radius:0,
                     fill: false,
                    // backgroundColor: 'rgb(245,245,255)',
                     borderWidth: 2,
                     borderColor:'#87ceeb'
                   }
                 ]
               })
             } 
       
        //setProductDetail(res.data.data.reviews)
        setReview(res.data.data.reviews)
        setLoad(false)
       
      }).catch((err)=>{
        setLoad(false)
        console.log(err)
      }) 

    }
    
    const handleChangeKeyword=(e)=>{
      let token=localStorage.getItem('token')
      var index = e.target.selectedIndex;
      var optionElement = e.target.childNodes[index]
      var option =  optionElement.getAttribute('id');
     // setSelectedProductForKeyword(option)
      //setSelectedProduct(option)
      //console.log(option)
      // console.log(e.target.value)
      setBname(e.target.value)
       axios.get(`${globalVar.REACT_APP_base_url}/api/v1/insight-miner?product_id=${option}`,{
      headers: {
        'Authorization': 'Bearer ' + token
      }}).then((res)=>{
        console.log(res.data.data.reviews)
        setKeywordData(res.data.data.keywords)
        setKeywordFilter1(res.data.data.keyword_filter)
        setKeyWordReview(res.data.data.keywords)
         setGraphSummary(res.data.data.graph_tab.summary)
        setGraphKeywords(res.data.data.graph_tab.keyword)
        setGraphReview(res.data.data.graph_tab.review) 
        let st3=moment(startDate1)
        let ed3=moment(endDate1)
        let st=st3.format('YYYY-MM-DD');
        let ed=ed3.format('YYYY-MM-DD')
        let rev=res.data.data.keywords.filter(u=>u.reviews.review_date>st && u.reviews.review_date<ed)
       // console.log('on',rev)
        setKeyword(rev)
        setCoupon('')
        //setCoupon(res.data.data.reviews)
        //setProductDetail(res.data.data.reviews)
       // setReview(res.data.data.reviews)
      }).catch((err)=>{
        console.log(err)
      }) 
    }
const ButtonCellRenderer=(e)=>{
  console.log(e.colDef.headerName)
  if(e.colDef.headerName==="Word")
  {
     const results = keywordReview.filter(u =>
      u.word===e.value
      );
     // console.log(results)
     // console.log(keywordReview)
     // setKeyword(results)
     setCoupon(results)
    // console.log(coupon[0])
  }

 //console.log(keywordReview)
  
}


      const columnDef=[
        {
          headerName:'Word',field:'word',width:120,resizable:true,sortable:true,suppressMovable:true},
        {headerName:'Count',field:'count', width:100,resizable:true,sortable:true,suppressMovable:true,cellStyle:{color:'green'}},
        {headerName:'Prevalance',field:'prevalance', width:110,resizable:true,suppressMovable:true, sortable:true,cellStyle:(params)=>(params.value<0?{color:'red'}:{color:'green'})},
        {headerName:'Sentiment',field:'sentiment', width:110,sortable:true,suppressMovable:true, resizable:true,cellStyle:(params)=>(params.value<0?{color:'red'}:{color:'green'})},
        {headerName:'WISR',field:'word_wisr', width:120, sortable:true,suppressMovable:true,resizable:true,cellStyle:(params)=>(params.value<0?{color:'red'}:{color:'green'})}

      ]
          // other grid options ...
      
         
const handleOpacity=(e)=>{
  const{value}=e.target;
  setOpacity(value)
}






const handleOpacity1=(e)=>{
  const{value}=e.target;
  console.log(value);
  setOpacity1(value)
}

const handleClick=()=>{
  let r=[]
   let splitStr=searchTerm.split(' ')
   setSearchTerm1(splitStr)
  splitStr.map((p)=> {
    
   let results = review.filter(u =>
    u.review_text.includes(p)
   )
   console.log('filter',results)
  
   Array.prototype.push.apply(r,results)
  
  }
  ) 
 //console.log(r)
 setProductDetail(r)  
 /* setSearchTerm1(searchTerm)
     const results = review.filter(u =>
    u.review_text.includes(searchTerm)
    ); 
  setProductDetail(results) 
  console.log(review.length)
  console.log(results)  
    */
}

const handleClick1=()=>{
  setSearchTerm('')
  setSearchTerm1([])
  let st=startDate.format('YYYY-MM-DD');
       let ed=endDate.format('YYYY-MM-DD')
       let rev=review.filter(u=>u.review_date>st && u.review_date<ed)
  setProductDetail(rev)
}

//for Emotion

const handleEmotion=(e)=>{
  console.log(e.target.value)
setSelectedEmotion(e.target.value)
//setLoad(true)
/* if(e.target.value==='' || e.target.value==='all')
{
setProductDetail(review)

}

else
{
  let data=review.filter(u=>u.emotion==e.target.value )
  setProductDetail(data)
  console.log('filter=',data)
//setLoad(false)
}

setLoad(false)  */
//setLoad(true)
}


const handleEmotion1=(e)=>{
  setSelectedEmotion1(e.target.value)
  //setSelectedEmotion(e.target.value)
  //setLoad(true)
}





const handleAllFilter=()=>{
if(selectedEmotion=='Default' && opacity==0 && key=='default')
{
  if(startDate!==null && endDate!==null)
  {
    let ed1=moment(endDate)
    let st1=moment(startDate)
     let st=st1.format('yyyy-MM-DD');
     let ed=ed1.format('yyyy-MM-DD')
    let rev=review.filter(u=>u.review_date>st && u.review_date<ed)
  setProductDetail(rev)
  setChartLength(rev.length)
  let diff=review.length-rev.length
  
setChart1({
labels: ['Total Reviews','Filtered Reviews'],
datasets: [
  {
    data:[diff,rev.length],
    backgroundColor:['blue','red']
  }
]
})
  }
       

 // console.log(review)
}

else if(opacity===0 && selectedEmotion!=='Default' && key=='default')
{

  if(startDate!==null && endDate!==null){
    let ed1=moment(endDate)
    let st1=moment(startDate)
     let st=st1.format('yyyy-MM-DD');
     let ed=ed1.format('yyyy-MM-DD')
        
  let data=review.filter(u=>u.emotion==selectedEmotion && u.review_date>st && u.review_date<ed)
  setProductDetail(data)
  console.log('filter=',data)
setChartLength(data.length)
let diff=review.length-data.length
  setChart1({
    labels: ['Total Reviews','Filtered Reviews'],
    datasets: [
      {
        data:[diff,data.length],
        backgroundColor:['blue','red']
      }
    ]
  })
  }
//setLoad(false)
}
else if(selectedEmotion==='Default' && opacity!==0 && key=='default')
{
  if(startDate!==null && endDate!==null){
    let ed1=moment(endDate)
    let st1=moment(startDate)
     let st=st1.format('yyyy-MM-DD');
     let ed=ed1.format('yyyy-MM-DD')
  
  let data=review.filter(u=>u.star_rating===opacity && u.review_date>st && u.review_date<ed)
  console.log('!op',data)
  setProductDetail(data)
  setChartLength(data.length)
  let diff=review.length-data.length
  setChart1({
    labels: ['Total Reviews','Filtered Reviews'],
    datasets: [
      {
        data:[diff,data.length],
        backgroundColor:['blue','red']
      }
    ]
  })
  }

}
else if(selectedEmotion==='Default' && opacity===0 && key!=='default')
{
  if(startDate!==null && endDate!==null)
  {
    let ed1=moment(endDate)
    let st1=moment(startDate)
     let st=st1.format('yyyy-MM-DD');
     let ed=ed1.format('yyyy-MM-DD')
     
     let data=review.filter(u=>u.word==key && u.review_date>st && u.review_date<ed)
   setProductDetail(data)
   setChartLength(data.length)
   let diff=review.length-data.length
   setChart1({
    labels: ['Total Reviews','Filtered Reviews'],
    datasets: [
      {
        data:[diff,data.length],
        backgroundColor:['blue','red']
      }
    ]
  })
  }
}
else{

  if(startDate!==null && endDate!==null)
  {
    let ed1=moment(endDate)
    let st1=moment(startDate)
     let st=st1.format('yyyy-MM-DD');
     let ed=ed1.format('yyyy-MM-DD')
  let data=review.filter(u=>u.word==key && u.star_rating===opacity && u.emotion===selectedEmotion && u.review_date>st && u.review_date<ed)
  setProductDetail(data)
  setChartLength(data.length)
  let diff=review.length-data.length
  setChart1({
    labels: ['Total Reviews','Filtered Reviews'],
    datasets: [
      {
        data:[diff,data.length],
        backgroundColor:['blue','red']
      }
    ]
  })

}
}
//setLoad(false) 
}


useEffect(()=>{
  handleAllFilter()
},[selectedEmotion,opacity,endDate,key,startDate])



 // for keywords

const handleAllFilter1=()=>{
 
  //console.log(data)
  //console.log(selectedEmotion1)
  //console.log(opacity1)
  //setLoad(true)
  let st=''
  let ed=''
  if(startDate!==null && endDate!==null){

    let st3=moment(startDate1)
    let ed3=moment(endDate1)
     st=st3.format('YYYY-MM-DD');
     ed=ed3.format('YYYY-MM-DD')


  }
if(selectedEmotion1==='Default' && opacity1==0 && key1=='default' )
{
  //console.log('length1',keywordData.length)
 
   if(keywordData.length>1)
  {
    let data=keywordData.filter(u=>u.reviews.review_date>st && u.reviews.review_date<ed)
    setKeyword(data)
  }
 
}

else if(opacity1==0 && selectedEmotion1!=='Default' && key1=='default')
{
 
       // let rev=res.data.data.keywords.filter(u=>u.reviews.review_date>st && u.reviews.review_date<ed)
      //  console.log(rev)
        //setKeyword(rev)
  let data=keywordData.filter(u=>u.reviews.emotion===selectedEmotion1 && u.reviews.review_date>st && u.reviews.review_date<ed)
  setKeyword(data)
  //console.log('filter=',data)
}
else if(selectedEmotion1==='Default' && opacity1!==0 && key1=='default')
{
 
  let data=keywordData.filter(u=>u.reviews.star_rating===opacity1 && u.reviews.review_date>st && u.reviews.review_date<ed)
  setKeyword(data)
 // console.log('f1',data)
}
else if(selectedEmotion1==='Default' && opacity1===0 && key1!=='default')
{
  let data=keywordData.filter(u=>u.word==key1 && u.reviews.review_date>st && u.reviews.review_date<ed)
  setKeyword(data)
}

else{
  let data=keywordData.filter(u=>u.reviews.star_rating===opacity1 && u.word==key1 && u.reviews.emotion===selectedEmotion1 && u.reviews.review_date>st && u.reviews.review_date<ed  )
  setKeyword(data)
 // console.log('f2',data)
}
}


useEffect(()=>{
  handleAllFilter1()
},[selectedEmotion1,opacity1,endDate1,startDate1,key1])


const handlekeyWordFilter=(e)=>{
  setKey(e.target.value)
  console.log(e.target.value)
}

const handleKeyWordFilter1=(e)=>{
  setKey1(e.target.value)
}

    return (
        <>
         <div className="wrapper overflow-hidden">
        <div className="d-flex">
          <Sidebar/>
    <div className="page-wrapper position-relative">
    <div className="position-sticky p-0 shadow z-index-1 bg-white px-sm-4 px-3 top-0 overflow-hidden">
            <div className="row mr-lg-0">
              <div className="col-md-12">
                <div className="navbar-custom   position-relative d-flex align-items-center">
                  <Link to="/" className="d-md-none mr-3"><img src="assets/images/logo-sm.png" className="img-fluid logo-mob-icon" alt="img" /></Link>
                  <button type="button" className="top-togglebar bg-transparent border-0">
                    <img src="assets/images/menu.svg" className="img-fluid" alt="img" />
                  </button>
                  <div className="theme-custom-select position-relative ml-3 diable-enable-select border-0 brand-dropdown">
                    <select className="form-control  border-0"  onChange={handleChange} >
                        {brand.map((u,i)=>
                       <option key={i} className="py-4" name="select" id={u.id} value={u.company}>{u.company}</option>
                      )}  
                         {/* <option className="py-4" value="alert type">Royal Canin</option>
                      <option className="py-4" value="alert">Zevo</option>  */}  
                    </select>
                  </div>
                  <div className="ml-auto">
                    <ul className="list-unstyled mb-0 ">
                      <li className="list-inline-item mx-2 d-sm-inline-block d-none"><img src={brandImage} className="img-brand" alt="royal" /></li>
                      <li className="list-inline-item ml-2">
                      <div className="dropdown show  profile-detail py-1 pr-sm-3">
                            <a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={image} className="img-fluid rounded-circle user-name mx-2" alt="img" />
                            <span className="d-none d-sm-inline-block pr-2 font-poppins">{name}</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <Link className="dropdown-item" to='/logout'>Logout</Link> 
                            
                          </div>
                      </div>
                      {/*   <div className="dropdown  profile-detail py-1 pr-sm-3">
                          <a className="dropdown-toggle mr-2" href="#!" id="dropdown03" data-toggle="dropdown"  aria-expanded="true">
                            <img src={props.image} className="img-fluid rounded-circle user-name mx-2" alt="img" />
                            <span className="d-none d-sm-inline-block pr-2 font-poppins">{props.name}</span>
                          </a>
                          <div className="dropdown-menu d-none " aria-labelledby="dropdown03">
                          </div>
                        </div> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

  <div className="page-content-tab px-4 pt-3 overflow-auto">
  <div className="row mb-3 align-items-center">
        <div className="col">
          <ul className="breadcrumb  pl-md-3 pl-0 list-unstyled mb-0 bg-transparent">
            <li className="h5 mb-0 font-poppins"><a href="#!">{bname}</a></li>
            <li><img src="assets/images/right-arrow.svg" className="img-fluid breadcrumb-arrow" alt="arrow" /></li>
            <li className="h5 mb-0 font-poppins"><a href="#!" className="font-weight-semibold">Insight Miner</a></li>
          </ul>
      {/*   </div>
       
      </div>
    <div className="row mb-4 align-items-center position-relative"> */}
      <div className="position-absolute tab-list-graph-miner">
        <ul className="nav nav-tabs real-time-tabs border-0 mr-md-5 mb-0" role="tablist">
          <li role="presentation" className="mr-sm-3 mr-1">
            <a href="#list-tab" aria-controls="list-tab" role="tab" data-toggle="tab" className="d-flex align-items-center justify-content-center rounded active" aria-selected="true">
              <img src="assets/images/list.svg" alt="list" className="img-fluid w-13 without-hover" />
              <img src="assets/images/list-white.svg" alt="list" className="img-fluid w-13 on-hover" />
            </a>     
          </li>
          <li role="presentation">
            <a href="#graph-tab" aria-controls="graph-tab" role="tab" data-toggle="tab" className="d-flex align-items-center justify-content-center rounded" aria-selected="false">
              <img src="assets/images/graph.svg" alt="list" className="img-fluid w-13 without-hover" />
              <img src="assets/images/graph-white.svg" alt="list" className="img-fluid w-13 on-hover" />
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
    <div className="row ">
      {/* Tab panes */}
      <div className="col-md-12 tab-content review-keywords ">
        <div role="tabpanel" className="tab-pane active" id="list-tab">
          <div className="">
            <div className="row mx-0">
              <div className="col-md-12 px-0 ">
                <ul className="nav nav-tabs border-0 mb-0 ml-auto" role="tablist">
                  <li role="presentation" className="mr-2">
                    <a href="#review" aria-controls="review" role="tab" data-toggle="tab" className="active text-uppercase font-weight-600 font-12" aria-selected="false">
                      Reviews
                    </a>     
                  </li>
                  <li role="presentation">
                    <a href="#keyword" aria-controls="keyword" role="tab" data-toggle="tab" className="text-uppercase font-weight-600 font-12" aria-selected="true">
                      Keywords
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row tabing-content review-tab-content">
              <div className="col-md-12 tab-content bg-white">
                <div role="tabpanel" className="tab-pane active h-100" id="review">
                  <div className="row h-100">
                    <div className="col-lg-3 col-md-5 px-0 d-flex">
                      <div className="light-green-1 border-bottom border-right w-100">
                        <div className="d-flex w-100">
                          <div className="bg-white py-3 px-1 d-flex align-items-center default-sec">
                            <div className=" w-100 theme-custom-select position-relative ">
                            <select className="form-control  border-0 "  onChange={handleChange1} >
                        {product.length!==0?product.map((u,i)=>
                       <option key={i} className="py-4" name="select" id={u.product_id} >{u.product_name}</option>
                      ):  <option  className="py-4" name="select"  >No product</option>}  
                        
                    </select>
                             
                              <div className="dropdown-menu d-none" aria-labelledby="dropdown-seg">
                                1
                              </div>
                            </div>
                          </div>
                       
                        </div>
                        <div className="light-green py-3 px-3 border-top ">
                          <div className="d-flex align-items-center">
                            <div className="theme-custom-select position-relative ml-3 diable-enable-select border-0 brand-dropdown">
                            <select className="form-control  border-0"  onChange={handleEmotion} >
                    
                        {emotion.map((u,i)=>
                       <option key={i} className="py-4" name="select" id={i} value={u}>{u}</option>
                      )}  
                         {/* <option className="py-4" value="alert type">Royal Canin</option>
                      <option className="py-4" value="alert">Zevo</option>  */}  
                    </select>
                            {/*   <h6 className="font-12 mb-0 text-green text-uppercase">Theme</h6> */}
                            </div>
                            <div className="all-show ml-auto w-50 text-right dropdown-green">
                              {/* <div className="dropdown w-100">
                                <a className="dropdown-toggle mr-2" href="#!" id="dropdown-all" data-toggle="dropdown"  aria-expanded="true">
                                  <span className="d-none d-sm-inline-block pr-4 font-poppins font-12">All</span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdown-all">
                                  1
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                        <div className="plot-form-input light-green-1 p-3 review-tab-date">
                          <form>
                            <div className="form-group mb-4">
                              <label className="font-12  text-green text-uppercase mb-2">Period</label>
                              <div className="theme-custom-select-2 position-relative">

                              {/* <DatePick/>
 */}
                                <DatePicker
                                    dateFormat="yyyy-MM-dd"
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    maxDate={new Date()}
                                    dropdownMode="select"

                                  />
                              <DatePicker
                                  dateFormat="yyyy-MM-dd"
                                  selected={endDate}
                                 maxDate={new Date()}
                                  onChange={date => setEndDate(date)}
                                  peekNextMonth
                                  showMonthDropdown
                                  showYearDropdown
                                  dropdownMode="select"
                                  //minDate={startDate}
                                />
                               
                              </div>
                            </div>
                            <div className="form-group mb-4">
                              <label className="font-12  text-green text-uppercase mb-2 ">Category</label>
                              <div className="language d-flex form-control">
                                <input type="text" defaultValue="RC Dog Food , RC Cat Food" className="border-0" />
                                <a href="#!" className="language-no text-green rounded ml-auto">32</a>
                              </div>
                            </div>
                            <div className="form-group mb-4">
                              <label className="font-12  text-green text-uppercase mb-2 ">Star Rating</label>
                              <div className="score-range d-flex">
                                <input style={{border:"none"}} type="text" defaultValue="1" className="form-control text-center minRange" placeholder={1} readOnly />
                               <input  type="range" className="mx-3 Rangerating" id="vol1" 
                                  min="0" max="5.0" step="1" 
                                    value={opacity}
                                   onChange={handleOpacity} />
                                <input style={{border:"none"}} type="text" defaultValue="5" className="form-control text-center minRange" placeholder={5} readOnly />
                              </div>
                            </div>
                            <div className="form-group mb-4">
                              <label className="font-12  text-green text-uppercase mb-2 ">Keywords</label>
                              <div className="form-control d-flex">
                              <select className="form-control  border-0"  onChange={handlekeyWordFilter} >
                              <option className="py-4" name="select"  value='default'>default</option>
                        {keywordFilter && keywordFilter.map((u,i)=>
                       <option key={i} className="py-4" name="select" id={i} value={u}>{u}</option>
                      )}  
                         {/* <option className="py-4" value="alert type">Royal Canin</option>
                      <option className="py-4" value="alert">Zevo</option>  */}  
                    </select>
                              </div>
                            </div>
                          </form>
                        </div>
                       
                      </div>

                     
                    </div>

                 
                    <div className="col-lg-6 col-md-7 px-0 border-right">
                      <div >
                        <div className="d-sm-flex w-100 border-bottom ">

                          <div className="bg-white py-2 px-4 d-flex align-items-center">
                            <img src="assets/images/search-icon.svg" className="w-15 opacity-4" alt="search" />
                            <input type="text" placeholder="Search feedback" className="form-control border-0"   value={searchTerm}  onChange={handleChange2}  /* onKeyDown={handleKeyDown} */ />
                          </div>
                          <div className="py-3 px-1 d-flex  border-left border-left-sm-none light-green ml-auto pr-sm-3">
                          <button type="button" className="btn btn-warning ml-3 " onClick={handleClick}/*  disabled={click} */>Apply</button>
                          <button type="button" className="btn btn-info ml-3" onClick={handleClick1} /* disabled={!click} */ >Clear</button>
                          </div>
                        </div>
                        
                        <div className="client-review w-100">
                         
      
                          
                         {load? <div className="text-center m-5 ">
                            <div className="spinner-border" style={{width: "8rem", height: "8rem",color:"orange"}}  role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow" style={{width: "5rem", height: "5rem",color:"orange"}}  role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow" style={{width: "3rem", height: "3rem",color:"orange"}}  role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
            
                          </div>:
                           product.length>0 && productDetail.length>0?
                           productDetail.map((u,i)=>{

                            let d=moment(u.review_date)
                           
                       let d1=d.format('MMM DD,YYYY')
                      
                            return(
                          i<100?
                          <div key={i} className=" border-bottom">
                            <div className="d-flex p-4">
                              <div className="text-black font-weight-600">{u.id}</div>
                              <div className="ml-3 ">
                               {/*  <h6>{u.review_text}</h6> */}
                                <h6 className={u.sentiment!=='' && u.sentiment<0.5?"text-danger":'text-success-o'}>{/* <Highlight  search={['quality','great']} colors='red'>{u.review_text}</Highlight> */}
                                <Highlighter
                                    highlightClassName="YourHighlightClass"
                                    searchWords={searchTerm1.lenght!==0?searchTerm1:[]}
                                    autoEscape={true}
                                    textToHighlight={u.review_text}
                                />
                                </h6>
                                <div className="my-3">
                                <BeautyStars
                                             maxStars={5}
                                             size={15}
                                             activeColor="orange"
                                             inactiveColor="grey"
                                             value={u.star_rating}
                                          // onChange={value => this.setState({ value })}
                                          />
                                {/*   <h5  className="badge badge-success px-3 py-2 border mr-2">{u.star_rating}</h5> */}
                                </div>
                               
                                <div className="post-time">
                                <small className="text-muted">sentiment: {u.sentiment}</small>  
                                </div>
                                <div className="post-time">
                                  <small className="text-muted">{d1}</small>  
                                </div>
                              </div>
                            </div>
                          </div>:''
                           )}):  !load?
                          <div className=" border-bottom">
                            <div className="d-flex p-4">
                              <div className="text-success font-weight-600"></div>
                              <div className="ml-3  " style={{width:'100'}}>
                                <h2 className="m-4 p-5">No Reviews found for this product....</h2>
                                <div className="my-3">
                                  <a href="#!" className="badge badge-success px-3 py-2 border mr-2"> <span className="text-muted"> </span></a>
                                  <a href="#!" className="badge badge-primary px-3 py-2 border"></a>
                                </div>
                                <div className="post-time">
                                  <small className="text-muted"></small> . <small className="text-muted">Review</small> 
                                </div>
                              </div>
                            </div>
                          </div> :""
                        }
                  
                        </div>
                        
                      </div>
                    </div>
                    <div className="col-lg-3 px-lg-0 d-flex">
                      <div className="border-bottom w-100">
                        <div className="p-4 ">
                         {/*  <div className="d-flex align-items-center">
                            <h6 className="font-12 text-green text-uppercase">Average star Rating</h6>
                            <div className="d-flex ml-auto align-items-center">
                              <h2 className="font-weight-bold mb-0">51,159 </h2>
                              <small className="font-10 total-small ml-2">Total <br />for small</small>
                            </div>
                          </div> */}
                           <InsightMinorGraph chart={chart} star={totalStars}/>
                        {/*   <img src="assets/images/1.jpg" alt="graph" className="img-fluid" /> */}
                        </div>

                        <hr/>
                        <div className="p-4">
                          <h6 className="font-12  text-green text-uppercase">Review Count</h6>
                          
                          <h5>Displaying {productDetail.length}/{review.length} reviews </h5>
                          <div className='pie-chart'>
                          <Pie
                         
                            width= '300px'
                            height= '300px'
                       
                          data={chart1}
                          options={{
                            maintainAspectRatio: false,
                          }}
                       /*    height='50%'
                          width="50%" */
                          />
                          </div>

                  
                          {/* <img src="assets/images/2.png" alt="graph" className="img-fluid" /> */}
                        </div>
                        {/* <div className="light-green border-top border-right p-4">
                          <div className="d-flex align-items-center">
                            <div className="all-show w-100">
                              <div className="dropdown dropdown-green w-100">
                                <a className="dropdown-toggle mr-2" href="#!" id="dropdown-all" data-toggle="dropdown" aria-expanded="true">
                                  <span>
                                   
                                  </span>
                                  <span className="font-12 mb-0 text-green text-uppercase">Manage Widget</span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdown-all">
                                  1
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane h-100" id="keyword">
                  <div className="row h-100">
                    <div className="col-lg-3 col-md-5 px-0 d-flex">
                      <div className="light-green-1 border-bottom w-100">
                        <div className="d-flex w-100">
                          <div className="bg-white py-3 px-1 d-flex align-items-center default-sec">
                            <div className=" theme-custom-select dropdown dropdown-green w-100">
                            <select className="form-control  border-0 "  onChange={handleChangeKeyword} >
                        {product.length!==0?product.map((u,i)=>
                       <option key={i} className="py-4" name="select" id={u.product_id} >{u.product_name}</option>
                      ): <option  className="py-4" name="select">No product</option>}  
                      </select>
          
                            {/*   <div className="dropdown-menu d-none" aria-labelledby="dropdown-seg">
                                1
                              </div> */}
                            </div>
                          </div>                       
                        </div>
                        <div className="light-green py-3 px-3 border-top border-right">
                          <div className="d-flex align-items-center">
                            <div className="theme-custom-select position-relative ml-3 diable-enable-select border-0 brand-dropdown ">
                              
                            <select className="form-control  border-0"   onChange={handleEmotion1}>
                        {emotion.map((u,i)=>
                       <option key={i} className="py-4" name="select" id={i} value={u}>{u}</option>
                      )}  
                         {/* <option className="py-4" value="alert type">Royal Canin</option>
                      <option className="py-4" value="alert">Zevo</option>  */}  
                    </select>
                           {/*    <h6 className="font-12 mb-0 text-green text-uppercase">Theme</h6> */}
                            </div>
                        {/*     <div className="all-show ml-auto w-50 text-right dropdown-green">
                              <div className="dropdown w-100">
                                <a className="dropdown-toggle mr-2" href="#!" id="dropdown-all" data-toggle="dropdown"  aria-expanded="true">
                                  <span className="d-none d-sm-inline-block pr-4 font-poppins font-12">All</span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdown-all">
                                  1
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                        <div className="plot-form-input light-green-1 p-3 ">
                          <form>
                            <div className="form-group mb-4">
                                <DatePicker
                                  dateFormat="yyyy-MM-dd"
                                  selected={startDate1}
                                  onChange={date => setStartDate1(date)}
                                  peekNextMonth
                                  showMonthDropdown
                                  maxDate={new Date()}
                                  showYearDropdown
                                  dropdownMode="select"                                
                                />
                              <DatePicker
                                  dateFormat="yyyy-MM-dd"
                                  selected={endDate1}
                                  onChange={date => setEndDate1(date)}
                                  peekNextMonth
                                  showMonthDropdown
                                  showYearDropdown
                                  dropdownMode="select"
                                  maxDate={new Date()}
                                 // minDate={startDate1}
                                />
                            {/*   <label className="fonclit-12  text-green text-uppercase mb-2">Period</label>
                              <div className="theme-custom-select-2 position-relative">
                                <select className="form-control" id="exampleFormControlSelect1">
                                  <option>Dec 29, 2018  -  Jan 05,2019</option>
                                  <option>Jan 05, 2019  -  Feb 05,2019</option>
                                  <option>Jan 05, 2019  -  Feb 05,2019</option>
                                  <option>Jan 05, 2019  -  Feb 05,2020</option>
                                </select>
                              </div> */}
                            </div>
                            <div className="form-group mb-4">
                              <label className="font-12  text-green text-uppercase mb-2 ">Category</label>
                              <div className="language d-flex form-control">
                                <input type="text" defaultValue="RC Dog Food , RC Cat Food" className="border-0" />
                                <a href="#!" className="language-no text-green rounded ml-auto">32</a>
                              </div>
                            </div>
                            <div className="form-group mb-4">
                              <label className="font-12  text-green text-uppercase mb-2 ">Star Rating</label>
                              <div className="score-range d-flex">
                                <input style={{border:"none"}} type="text" defaultValue="1" className="form-control text-center minRange" placeholder={1} readOnly />
                               <input  type="range" className="mx-3 Rangerating" id="vol" 
                                  min="0" max="5.0" step="1" 
                                    value={opacity1}
                                   onChange={handleOpacity1} />
                                <input style={{border:"none"}} type="text" defaultValue="5" className="form-control text-center minRange" placeholder={5} readOnly />
                              </div>
                            </div>
                            <div className="form-group mb-4">
                              <label className="font-12  text-green text-uppercase mb-2 ">Keywords</label>
                              <div className="form-control d-flex">
                              <select className="form-control  border-0"   onChange={handleKeyWordFilter1}>
                                <option className='py-4' name='select' value='default'>default</option>
                        {keyWordFilter1.map((u,i)=>
                       <option key={i} className="py-4" name="select" id={i} value={u}>{u}</option>
                      )}  
                         
                    </select>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-7 px-0 d-flex">
                      <div className="w-100">
                        <div className="table-responsive1 kerwords-table-word">
                          <div className="ag-theme-alpine table-ag" >
                         {load? <div className="text-center m-5 ">
                            <div className="spinner-border" style={{width: "8rem", height: "8rem",color:"orange"}}  role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow" style={{width: "5rem", height: "5rem",color:"orange"}}  role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow" style={{width: "3rem", height: "3rem",color:"orange"}}  role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
            
                          </div>: 
                <AgGridReact //pagination="true" 
                   //  paginationPageSize="8"
                rowData={product &&keyword!=='undefined'? keyword:""}
                animateRows={true}
                suppressDragLeaveHidesColumns 
               columnDefs={columnDef}
               onCellClicked={ButtonCellRenderer}
              >               
            </AgGridReact>}
            </div>     
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 px-lg-0 responses_for_coupon border-top border-bottom">
                      <div >
                        <h6 className="font-12 mb-0 border-bottom px-4 py-3 text-dark">Example Reviews</h6>
                        <div className="p-4">
                          {coupon.length!==0? coupon.map((u,i)=>
                          <div className="d-flex py-3" key={i}>
                            <span className="text-danger mr-3">{u.reviews.id}</span>
                            <div className="border-bottom pb-4">
                              <p className="font-12 mb-0">{ u.reviews.review_text}</p>
                              <small className="text-muted">3 hours</small>
                            </div>
                          
                          </div>
                          ):<h3 className='my-5'>Click on the word to view review</h3>}                   
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="graph-tab">
          <div className="row">
            <div className="col-md-12 tab-content review2-keyword2s">
              <div role="tabpanel" className="tab-pane active" id="list-tab">
                <div>
                  <div className="row">
                    <div className="col-md-12 px-0 px-md-3">
                      <ul className="nav nav-tabs border-0 mb-0 ml-auto" role="tablist">
                        <li role="presentation" className="mr-sm-2 mr-1">
                          <a href="#summary" aria-controls="summary" role="tab" data-toggle="tab" className="active text-uppercase font-weight-600 font-12" aria-selected="true">
                            summary
                          </a>
                        </li>
                        <li role="presentation" className="mr-sm-2 mr-1">
                          <a href="#review2" aria-controls="review2" role="tab" data-toggle="tab" className="text-uppercase font-weight-600 font-12" aria-selected="false">
                            Reviews
                          </a>     
                        </li>
                        <li role="presentation">
                          <a href="#keyword2" aria-controls="keyword2" role="tab" data-toggle="tab" className="text-uppercase font-weight-600 font-12" aria-selected="true">
                            Keywords
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row tabing-content review-tab-content">
                    <div className="col-md-12 tab-content bg-white">
                      <div role="tabpanel" className="tab-pane h-100 active" id="summary">
                        <h4 className="py-3">Summary</h4>
                      {/*   <img src="assets/images/a-graph.png" className="img-fluid" alt="graph1" /> */}
                      {graphSummary?
                      <span dangerouslySetInnerHTML={{__html:graphSummary}}></span>:<h1>no graph</h1>}
                      </div>
                      <div role="tabpanel" className="tab-pane  h-100" id="review2">
                        <h4 className="py-3">Review</h4>
                        {/* <img src="assets/images/a-graph.png" className="img-fluid" alt="graph2" /> */}
                        {graphReview?
                      <span dangerouslySetInnerHTML={{__html:graphReview}}></span>:<h1>no graph</h1>}
                      </div>
                      <div role="tabpanel" className="tab-pane h-100" id="keyword2">
                        <h4 className="py-3">Keyword</h4>
                        {graphKeywords?
                      <span dangerouslySetInnerHTML={{__html:graphKeywords}}></span>:<h1>no graph</h1>}
                        {/* <img src="assets/images/a-graph.png" className="img-fluid" alt="graph3" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  </div>
  <div className="row py-4 copy-right">
        <div className="col-12 ">
          <p className="text-center text-muted mb-0">Copyright © 2021. All rights reserved.</p>
        </div>
  </div>  

</div>
 </div>
 </div>
 </>
    )
}

export default InsightMiner
