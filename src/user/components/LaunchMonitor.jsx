import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import Toggle from '../../common/LaunchToggle';
import { Line } from "react-chartjs-2";
import ToggleBar from '../../common/Util';
import axios from 'axios'
import {globalVar} from '../components/config'
import Sidebar from './Sidebar';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
function LaunchMonitor(props) {
  const[brandImage,setBrandImage]=useState('')
  const[relatedTopic,setRelatedTopic]=useState([])
  const[brand,setBrand]=useState([{}])
  const[y,setY]=useState([])
  const[r,setR]=useState([])
  const[qualityImage,setQualityImage]=useState('')
  const[bname,setBname]=useState('')
 // const[selected,setSelected]=useState("")
  //const[launch,setLaunch]=useState([{}])

  const name=localStorage.getItem('name')
  const image=localStorage.getItem('avatar')

  const[positive,setPositive]=useState([{}])
  const[negative,setNegative]=useState([{}])
  const [chartData, setChartData] = useState({});
  const[freqUsedWord,setWord]=useState([{}])
  const[points,setPoints]=useState([])
  const [status,setStatus]=useState('')
  const[id,setId]=useState('')
  const[avgStars,setAvgStars]=useState(0);
  const[totalReview,setTotalReview]=useState(0)
  const [comp,setComp]=useState({})
  const[comp1,setComp1]=useState({})
  const[a,setA]=useState('select')
  const[bool,setBool]=useState(true)

    useEffect(()=>{
     // console.log('data',props)
        ToggleBar()
        Toggle()
    },[])
  

    useEffect(()=>{
      let token=localStorage.getItem('token')
      axios.get(globalVar.REACT_APP_base_url+'/api/v1/brands',{
         headers: {
            'Authorization': 'Bearer ' + token
          }
      }).then((res)=>{

     
         setBrand(res.data.data)
     
        setBrandImage(res.data.data[0].image) 
         let yearMonth=[];
         let rating=[];
         setId(res.data.data[0].id)
         setBname(res.data.data[0].company)
         if(res.data.data[0].id)
         {
         axios.get(`${globalVar.REACT_APP_base_url}/api/v1/launch-monitor?brand_id=${res.data.data[0].id}`,{
          headers: {
             'Authorization': 'Bearer ' + token
           }
       }).then((res)=>{
         
         //setLaunch(res.data.data)
        // console.log(res.data.data)
       //  console.log(res.data.data.frequently_used_words)
      
        setWord(res.data.data.frequently_used_words)
        setPositive(res.data.data.word_analysis.positives)
        setNegative(res.data.data.word_analysis.negatives)
        setQualityImage(res.data.data.qualitative_data)
        setStatus(res.data.data.launch_moniter_progress.current_status)
        setPoints(res.data.data.launch_moniter_progress.points)
        setRelatedTopic(res.data.data.launch_moniter_progress.related_topics)
        setTotalReview(res.data.data.performance_metrics.consumer_experience.total_reviews)
        setAvgStars(res.data.data.performance_metrics.consumer_experience.avg_stars)
        setComp(res.data.data.performance_metrics.consumer_experience.compair.stars)
        setComp1(res.data.data.performance_metrics.consumer_experience.compair.review)
        for (const dataObj of res.data.data.performance_metrics.consumer_experience.chart) {
         rating.push(parseFloat(dataObj.total_stars))
          yearMonth.push(dataObj.year_month)
        }
       // console.log(yearMonth)
      // setY(yearMonth)
       
        setChartData({
          labels:  yearMonth,
          datasets: [
            {
              label: " average star rating",
              data:rating ,
              radius:0,
              fill: false,
             // backgroundColor: 'rgb(245,245,255)',
              borderWidth: 2,
              borderColor:'	#20B2AA'
            }
          ]
        })
        setR(rating)
        setY(yearMonth)
       }).catch((err)=>{
          console.log(err)
       }) 
      }
      }).catch((err)=>{
         console.log(err)
      })
   },[]) 
   


 const handleChange=(e)=>{
  let yearMonth=[];
  setBool(false)
  let rating=[];
  var index = e.target.selectedIndex;
  var optionElement = e.target.childNodes[index]
  var option =  optionElement.getAttribute('id');
 // console.log(option)
 //  console.log(e.target.value)
setId(option)
setBname(e.target.value)
let result=brand.filter(u=>u.id==option);
  setBrandImage(result[0].image) 
  let token=localStorage.getItem('token');
  axios.get(`${globalVar.REACT_APP_base_url}/api/v1/launch-monitor?brand_id=${option}`,{
    headers: {
       'Authorization': 'Bearer ' + token
     }
 }).then((res)=>{
  // setLaunch(res.data.data)
  setWord(res.data.data.frequently_used_words)
  setPositive(res.data.data.word_analysis.positives)
  setNegative(res.data.data.word_analysis.negatives)
  setStatus(res.data.data.launch_moniter_progress.current_status)
  setPoints(res.data.data.launch_moniter_progress.points)
  setRelatedTopic(res.data.data.launch_moniter_progress.related_topics)
  setTotalReview(res.data.data.performance_metrics.consumer_experience.total_reviews)
  setQualityImage(res.data.data.qualitative_data)
  setAvgStars(res.data.data.performance_metrics.consumer_experience.avg_stars)
  setComp(res.data.data.performance_metrics.consumer_experience.compair.stars)
  setComp1(res.data.data.performance_metrics.consumer_experience.compair.review)
  for (const dataObj of res.data.data.performance_metrics.consumer_experience.chart) {
    rating.push(parseFloat(dataObj.total_stars))
     yearMonth.push(dataObj.year_month)
   }

   
  setChartData({
    labels:  yearMonth,
    datasets: [
      {
        data:rating ,
        radius:0,
        fill: false,
       // backgroundColor: 'rgb(245,245,255)',
        borderWidth: 2,
        //borderColor:'#87ceeb'
        borderColor:'	#20B2AA'
      },
    ]
  })
  
  setR(rating)
  setY(yearMonth)
  setBool(true)
 }).catch((err)=>{
    console.log(err)
 }) 
  
} 


const handleChange1=(e)=>{
  console.log('worked')
  let yearMonth=[];
  let rating=[];
  var index = e.target.selectedIndex;
  var optionElement = e.target.childNodes[index]
  var option =  optionElement.getAttribute('id');
  console.log('cmp',option)
  console.log('id',id)
   console.log(e.target.value)

if(option!=0)
{
  let token=localStorage.getItem('token');
  axios.get(`${globalVar.REACT_APP_base_url}/api/v1/launch-monitor?brand_id=${id}&cmp_brand_id=${option}`,{
    headers: {
       'Authorization': 'Bearer ' + token
     }
 }).then((res)=>{
  // setLaunch(res.data.data)
  setWord(res.data.data.frequently_used_words)
  setPositive(res.data.data.word_analysis.positives)
  setNegative(res.data.data.word_analysis.negatives)
  setRelatedTopic(res.data.data.launch_moniter_progress.related_topics)
  for (const dataObj of res.data.data.performance_metrics.consumer_experience.cmp_chart) {
    rating.push(parseFloat(dataObj.total_stars))
     yearMonth.push(dataObj.year_month)
   }


  // console.log(r)
  // console.log(rating.length)
 if(rating.length!==0)
 {
  setChartData({
    labels:  yearMonth,
    datasets: [
      {
        label: "first dataset",
        data:r ,
        radius:0,
        fill: false,
       // backgroundColor: 'rgb(245,245,255)',
        borderWidth: 2,
        borderColor:'#20B2AA'
      },
      {
      label: "Second dataset",
      data: rating,
      radius:0,
      fill: false,
      borderColor: "#FF0000"
      }
    ]
  })
 }else
 {
  setChartData({
    labels:  y,
    datasets: [
      {
        //label: "first dataset",
        data:r ,
        radius:0,
        fill: false,
       // backgroundColor: 'rgb(245,245,255)',
        borderWidth: 2,
        borderColor:'	#20B2AA'
      },
    ]
  })
 }

 }).catch((err)=>{
    console.log(err)
 }) 
}
else{
  setChartData({
    labels:  y,
    datasets: [
      {
        //label: "first dataset",
        data:r ,
        radius:0,
        fill: false,
       // backgroundColor: 'rgb(245,245,255)',
        borderWidth: 2,
        borderColor:'	#20B2AA'
      },
    ]
  })
}
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
                       <option key={i} className="py-4" name="select" id={u.id} >{u.company}</option>
                      )}  
                         {/* <option className="py-4" value="alert type">Royal Canin</option>
                      <option className="py-4" value="alert">Zevo</option>  */}  
                    </select>
                  </div>
                  <div className="ml-auto">
                    <ul className="list-unstyled mb-0 ">
                      <li className="list-inline-item mx-2 d-sm-inline-block d-none"><img src={brandImage} className="img-brand" alt="royal" />{/* <img src="assets/images/royal-chain.jpg" className="img-fluid" alt="royal" /> */}</li>
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



                      {/*   <div className="dropdown show profile-detail py-1 pr-sm-3">
                          <a className="dropdown-toggle mr-2" href="#!" role='button' id="dropdown03" data-toggle="dropdown"  aria-expanded="true">
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

  <div className="page-content-tab px-sm-4  px-3 overflow-auto">
  <div className="row mb-3 align-items-center">
        <div className="col">
          <ul className="breadcrumb  pl-md-3 pl-0 list-unstyled mb-0 bg-transparent">
            <li className="h5 mb-0 font-poppins"><a href="#!">{bname}</a></li>
            <li><img src="assets/images/right-arrow.svg" className="img-fluid breadcrumb-arrow" alt="arrow" /></li>
            <li className="h5 mb-0 font-poppins"><a href="#!" className="font-weight-semibold">Launch Monitor</a></li>
          </ul>
        </div>
      
      </div>
    <div className="px-0">
      <div className="row">
        <div className="col-lg-5 mb-lg-0 mb-4 d-flex">
          <div className="bg-white p-4 w-100 launch-moniter-col">
            <h5 className="font-weight-bold">Launch moniter Progress</h5>
            <p>
              <span className="pr-2 font-weight-semibold">Current Status:</span>
              <span className="text-primary font-weight-semibold" style={{display: 'none'}}>Too Early to Tell</span>
              <span className="text-success-o font-weight-semibold">{status}</span>
              <span className="text-warning font-weight-semibold" style={{display: 'none'}}>Needs Attention</span>
              <span className="text-danger font-weight-semibold" style={{display: 'none'}}>Off track</span>
            </p>
            <div className="row mt-5">
                <div className="col-sm-5 pr-4 text-center">
                  <div className="d-flex justify-content-between">
                    <span className={status==='Too Early to Tell'?'badge-pill badge-success-cus px-4 col-3 mr-2':"badge badge-pill badge-default-cus px-4 col-3 mr-2"}>&nbsp;</span>
                    <span className={status==='Too Early to Tell'?'badge-pill badge-success-cus px-4 col-3 mr-2':"badge badge-pill badge-default-cus px-4 col-3 mr-2"}>&nbsp;</span>
                    <span className={status==='Too Early to Tell'?'badge-pill badge-success-cus px-4 col-3':"badge badge-pill badge-default-cus px-4 col-3"}>&nbsp;</span>
                  </div>
                  <p className=" font-weight-semibold mt-1">Too Early to Tell</p>
                </div>
               <div className="col-sm-7 mt-sm-0 mt-4">
                <div className="row">
                 <div className="col-4 text-center">
                    <div className="d-flex justify-content-between">
                      <span className={status==='On Track'?'badge-pill badge-success-cus px-4 mx-auto':'badge badge-pill badge-default-cus px-4 mx-auto'}>&nbsp;</span>
                    </div>
                     <p className=" font-weight-semibold mt-1">On track</p>
                 </div>
                 <div className="col-4 text-center px-0">
                  <div className="d-flex justify-content-between">
                    <span className={status==='Needs Attention'?'badge-pill badge-success-cus px-4 mx-auto':" badge-pill badge-default-cus px-4 mx-auto"}>&nbsp;</span>
                  </div>
                  <p className=" font-weight-semibold mt-1">Needs Attention</p>
                </div>
                <div className="col-4 text-center">
                  <div className="d-flex justify-content-between">
                    <span className={status==='Off Track'?'badge-pill badge-success-cus  px-4':"badge badge-pill badge-default-cus  px-4"}>&nbsp;</span>
                  </div>
                  <p className=" font-weight-semibold mt-1">Off track</p>
                </div>
              </div>
              </div>
            </div>
    
            <h6 className="mb-4 mt-5">We identified {points.length} main drivers</h6>
            <ul className="list-unstyled driver-list mb-4">
              {points.map((u,i)=>
              <li className="mb-2" key={i}><span className="driver-icons"><img src="assets/images/hastage.svg" className="img-fluid" alt="img" width="15px" /></span>{u}</li>
              )} {/* <li className="mb-2"><span className="driver-icons"><img src="assets/images/chain.svg" className="img-fluid" alt="img" width="13px" /></span><b>125 new </b>reviews from last week</li>
              <li className="mb-2"><span className="driver-icons"><img src="assets/images/hastage.svg" className="img-fluid" alt="img" width="15px" /></span><b>#10 from #56</b> in Google Search Rank</li> */}
            </ul>
            <h6 className="mt-5">Related Topics</h6>
            <h6 className="font-weight-semibold">
               {relatedTopic.map((u,i)=>
   <p key={i}>{'#'+u+'  '}</p>
            )}
</h6>
          </div>
        </div>
        <div className="col-lg-7 mb-lg-0 mb-4 d-flex">
          <div className="bg-white p-4 w-100">
            <div className="d-flex">
              <h5 className="font-weight-bold" id="performance-heading">Performance Metrics</h5>
              <h5 className="font-weight-bold" id="qualitative-heading" style={{display: 'none'}}>Qualitative Data View</h5>
              <div className="ml-auto d-flex">
                <div className="custom-control custom-switch info-switch performance-tab-switch">
                  <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                  <label className="custom-control-label" htmlFor="customSwitch1" />
                </div>
              </div>
            </div>
            <div className="w-100" id="performance-tab-one">
              {bool?
              <div className="theme-custom-select position-relative ml-3 diable-enable-select border-0 brand-dropdown">
            <select className="form-control  border-0"    onChange={handleChange1}>
             <option  className="py-4" name="select1" id='0'>{a}</option> 
                        {brand.map((u,i)=>
                       <option key={i} className="py-4" name="select" id={u.id} >{u.company}</option>
                      )}  
                         {/* <option className="py-4" value="alert type">Royal Canin</option>
                      <option className="py-4" value="alert">Zevo</option>  */}  
                    </select></div>:''}
                    
                  <div className="row mt-5">
                      <div className="col-md-6">
                          <h6 className="font-weight-semibold text-center mb-4 color-light-black">Consumer Experience</h6>
                          <div className="row">
                          <div className="col-md-6">
                                 <h3 className="font-weight-semibold color-light-black">{avgStars} <span className="h6 font-weight-bold">Avg Stars</span></h3> 
                                 <p>{comp.percentage}% <span className="text-danger font-weight-semibold">{comp.status}</span> index</p>
                              </div>
                               <div className="col-md-6">
                                 <h3 className="font-weight-semibold color-light-black">{totalReview} <span className="h6 font-weight-bold">Reviews</span></h3> 
                                 <p>{comp1.percentage}% <span className="text-success-o font-weight-semibold">{comp1.status}</span> Index</p>
                              </div>
                          </div>
                          <div className="chart text-center">
          <Line
          data={chartData}
          options={{
            responsive: true,
            legend: {
              display: false
           },
            scales: {
             
              yAxes: [
                
                {
                  stacked: false,
                  ticks: {
                    display: false ,
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
                },  
                  gridLines: {
                    display: false
                  },
                
                }
              ]
            }
          }}
        />
                            {/*   <img src="assets/images/line-chart-img.png" className="img-fluid mt-4 mx-auto" alt="graph" /> */}
                          </div>
                          <h5 className="mt-4 text-center font-weight-semibold">Star Rating</h5>
                      </div>
                      <div className="col-md-6 border-left">
                          <h6 className="font-weight-semibold text-center mb-4 color-light-black">Consumer Perception</h6>
                          <div className="row">
                          <div className="col-md-6">
                                 <h3 className="font-weight-semibold color-light-black">63.8% <span className="h6 font-weight-bold">Positive</span></h3> 
                                 <p>3% <span className="text-danger font-weight-semibold">under</span> index</p>
                              </div>
                               <div className="col-md-6">
                                 <h3 className="font-weight-semibold color-light-black">0.12% <span className="h6 font-weight-bold">Engagement</span></h3> 
                                 <p>0.03% <span className="text-success-o font-weight-semibold">over</span> Index</p>
                              </div>
                          </div>
                          <div className="chart text-center">
                              <img src="assets/images/pie-chart-img.png" className="img-fluid mt-4 mx-auto" alt="graph" />
                          </div>
                      </div>
                  </div>
            </div>

            <div className="w-100" id="performance-tab-two" style={{display: 'none'}}>
                  <div className="row mt-5">
                      <div className="col-md-6">
                          <h6 className="font-weight-semibold text-center mb-4 color-light-black">Consumer Experience</h6>
                          <div className="chart text-center">
                              <img src={qualityImage.experience} className="img-fluid mt-4 mx-auto" alt="graph" />
                          </div>
                      </div>
                      <div className="col-md-6 border-left">
                          <h6 className="font-weight-semibold text-center mb-4 color-light-black">Consumer Perception</h6>
                          <div className="chart text-center">
                              <img src={qualityImage.perception} className="img-fluid mt-4 mx-auto" alt="graph" />
                          </div>
                      </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-xl-4 col-md-6 d-flex mb-xl-0 mb-4">
          <div className="bg-white p-4 w-100">
            <h5 className="font-weight-bold text-capitalize">Frequently Used Words</h5>
            <hr />
            <div className="table-responsive top-driver-table frequently-table">
            {freqUsedWord.length !==0?
              <table className="w-100 table table-bordered">
                <thead class="thead-light">
                 
                    <tr>
                        <th>Word</th>
                        <th className="">Count</th>
                        <th className="text-center">WISR</th>
                    </tr>
                </thead>
              
                <tbody>
                { freqUsedWord && freqUsedWord.map((u,i)=>
                  <tr key={i}>
                    <td>{u.word}</td>
                    <td>{u.count}</td>
                    <td className={u.word_wisr>0?'text-success-o':'text-danger'} >{u.word_wisr}</td>
                  </tr>
                    )}
                {/*   <tr>
                  
                    <td>Recommend</td>
                    <td className="">67,849</td>
                    <td className="text-center">0.044539323</td>
                  </tr>
                  <tr>
                    <td>Value</td>
                    <td className="">67,849</td>
                    <td className="text-center">0.044539323</td>
                  </tr>
                  <tr>
                    <td>Healthy</td>
                    <td className="">67,849</td>
                    <td className="text-center">0.044539323</td>
                  </tr>
                  <tr>
                    <td>Ingredients</td>
                    <td className="">67,849</td>
                    <td className="text-center">0.044539323</td>
                  </tr>
                  <tr>
                    <td>Quality</td>
                    <td className="">67,849</td>
                    <td className="text-center">0.044539323</td>
                  </tr>
                  <tr>
                    <td>Vet</td>
                    <td className="">67,849</td>
                    <td className="text-center">0.044539323</td>
                  </tr> */}
                </tbody>
                </table>:'No data for this brand'}
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 d-flex  mb-xl-0 mb-4">
          <div className="bg-white p-4 w-100">
            <div className="d-sm-flex align-items-center">
              <h5 className="font-weight-bold mb-0">Word Analysis</h5>
              <ul className="nav nav-tabs border-0 mb-0 ml-auto mt-sm-0 mt-2" role="tablist">
                <li role="presentation" className="mr-3">
                  <a href="#positive" aria-controls="positive" role="tab" data-toggle="tab" className="active">
                    Positive
                  </a>     
                </li>
                <li role="presentation">
                  <a href="#negative" aria-controls="negative" role="tab" data-toggle="tab">
                    Negative
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="positive">
                <div className="bg-white  rounded">
                  <div className="table-responsive top-driver-table">
                    <table className="w-100 table table-bordered">
                    <thead class="thead-light">
                          <tr>
                         <th>Word</th>
                        <th colSpan="4" className="text-left">Correlated</th>
                              </tr>
                         </thead>
                       <tbody>
                        {positive && positive.map((u,i)=>
                        <tr key={i}>
                          <td>{u.word}</td>
                          <td className="text-right text-secondary-o">{u.correlated_1}</td>
                          <td className="text-right text-secondary-o">{u.correlated_2}</td>
                          <td className="text-right text-secondary-o">{u.correlated_3}</td>
                          <td className="text-right text-secondary-o">{u.correlated_4}</td>
                        </tr>
                        )}
                       {/*  <tr>
                          <td>Overall Satisfaction </td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">+12%</td>
                        </tr>
                        <tr>
                          <td>Fit</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">+12%</td>
                        </tr>
                        <tr>
                          <td>Price/Value for money</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">+12%</td>
                        </tr>
                        <tr>
                          <td>Looks &amp; Design</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">+12%</td>
                        </tr>
                        <tr>
                          <td>Weight</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">+12%</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">+12%</td>
                        </tr> */}
                      </tbody></table>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="negative">
                <div className="bg-white  rounded">
                  <div className="table-responsive top-driver-table">
                    <table className="w-100 table table-bordered">
                    <thead class="thead-light">
                          <tr>
                         <th>Word</th>
                        <th colSpan="4" className="text-left">Correlated</th>
                              </tr>
                    </thead>
                      
                      <tbody>
                        {negative && negative.map((u,i)=>
                        <tr key={i}>
                          <td>{u.word}</td>
                          <td className="text-right text-secondary-o">{u.correlated_1}</td>
                          <td className="text-right text-secondary-o">{u.correlated_2}</td>
                          <td className="text-right text-secondary-o">{u.correlated_3}</td>
                          <td className="text-right text-secondary-o">{u.correlated_4}</td>
                        </tr>
                        )}
                        {/* <tr>
                          <td>Weight</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-danger">-12%</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-danger">-12%</td>
                        </tr> */}
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 d-flex  mb-xl-0 mb-4">
          <div className="bg-white p-4 w-100">
            <div className="d-sm-flex align-items-center">
              <h5 className="font-weight-bold mb-0">Liked/Disliked</h5>
              <ul className="nav nav-tabs border-0 mb-0 ml-auto mt-sm-0 mt-4" role="tablist">
                <li role="presentation" className="mr-3">
                  <a href="#like" aria-controls="like" role="tab" data-toggle="tab" className="active">
                    Top Liked
                  </a>     
                </li>
                <li role="presentation">
                  <a href="#dislike" aria-controls="dislike" role="tab" data-toggle="tab">
                    Top disliked
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="like">
                <div className="bg-white  rounded">
                  <div className="table-responsive top-driver-table">
                  <table className="w-100 table table-bordered">
                      <tbody><tr>
                          <td>Comfort</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">12%</td>
                        </tr>
                        <tr>
                          <td>Overall Satisfaction</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">12%</td>
                        </tr>
                        <tr>
                          <td>Fit</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">12%</td>
                        </tr>
                        <tr>
                          <td>Price/value for money</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">12%</td>
                        </tr>
                        <tr>
                          <td>Look &amp; Design</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">12%</td>
                        </tr>
                        <tr>
                          <td>Weight</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">12%</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td className="text-right text-secondary-o">67,899</td>
                          <td className="text-right text-success-o">12%</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="dislike">
                <div className="table-responsive top-driver-table">
                  <table className="w-100 table table-bordered">
                    <tbody><tr>
                        <td>Price/value for money</td>
                        <td className="text-right text-secondary-o">67,899</td>
                        <td className="text-right text-danger">12%</td>
                      </tr>
                      <tr>
                        <td>Look &amp; Design</td>
                        <td className="text-right text-secondary-o">67,899</td>
                        <td className="text-right text-danger">12%</td>
                      </tr>
                      <tr>
                        <td>Weight</td>
                        <td className="text-right text-secondary-o">67,899</td>
                        <td className="text-right text-danger">12%</td>
                      </tr>
                      <tr>
                        <td>Color</td>
                        <td className="text-right text-secondary-o">67,899</td>
                        <td className="text-right text-danger">12%</td>
                      </tr>
                    </tbody></table>
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

export default LaunchMonitor
