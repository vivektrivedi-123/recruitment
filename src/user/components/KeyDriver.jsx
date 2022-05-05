
import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import ToggleBar from '../../common/Util';
import Sidebar from './Sidebar';
import {globalVar} from '../components/config'
function KeyDriver(props) {

const[brandImage,setBrandImage]=useState('')
const[keyDriver,setKeyDriver]=useState('')
const[brand,setBrand]=useState([{}])
const[load,setLoad]=useState(false)
const[bname,setBname]=useState('')
 const name=localStorage.getItem('name')
  const image=localStorage.getItem('avatar')

useEffect(()=>{
console.log(props)

  ToggleBar()
  let token=localStorage.getItem('token')
setLoad(true)
  axios.get(`${globalVar.REACT_APP_base_url}/api/v1/brands`,{
    headers: {
       'Authorization': 'Bearer ' + token
     }
 }).then((res)=>{
  
  setBrandImage(res.data.data[0].image) 
   setBrand(res.data.data)
  // setBrandImage(res.data.data[0].image)
   setBname(res.data.data[0].company)
  axios.get(`${globalVar.REACT_APP_base_url}/api/v1/key-driver?brand_id=${res.data.data[0].id}`,{
    headers: {
       'Authorization': 'Bearer ' + token
     }
 }).then((res)=>{
  if(res.data.data.key_drivers.length!==0)
  {
    
    setKeyDriver(res.data.data.key_drivers[0].keydriver)
  }
   else{
     setKeyDriver('')
   }
   setTimeout(()=>{
    setLoad(false)
   },1000)
   
 })
}).catch((err)=>console.log(err))
},[])


const handleChange=(e)=>{
  setLoad(true)
  var index = e.target.selectedIndex;
  var optionElement = e.target.childNodes[index]
  var option =  optionElement.getAttribute('id');
  let token=localStorage.getItem('token');
 // console.log('br',brand)
  let result=brand.filter(u=>u.id==option);
  setBrandImage(result[0].image) 
  setBname(e.target.value)
  axios.get(`${globalVar.REACT_APP_base_url}/api/v1/key-driver?brand_id=${option}`,{
    headers: {
       'Authorization': 'Bearer ' + token
     }
 }).then((res)=>{
   console.log(res.data.data.key_drivers.length)
    if(res.data.data.key_drivers.length!==0)
    {
      setKeyDriver(res.data.data.key_drivers[0].keydriver)
    }
     else{
       setKeyDriver('')
     }
     setTimeout(()=>{
      setLoad(false)
     },1000)
      console.log(res.data.data)
 }).catch((err)=>console.log(err))

}


    return (
        <>
         <div className="wrapper overflow-hidden">
        <div className="d-flex">
          <Sidebar/>
      <div className="page-wrapper position-relative">
  <div className="position-sticky p-0 shadow z-index-1 bg-white px-sm-4 px-3 top-0">
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
                    </select>
          </div>
          <div className="ml-auto">
            <ul className="list-unstyled mb-0 ">
              <li className="list-inline-item mx-2 d-sm-inline-block d-none"><img src={brandImage} className="img-brand" alt="royal" /></li>
              <li className="list-inline-item ml-2">
              <div className="dropdown show  profile-detail py-1 pr-sm-3">
                            <a className=" dropdown-toggle" href="#!" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={image} className="img-fluid rounded-circle user-name mx-2" alt="img" />
                            <span className="d-none d-sm-inline-block pr-2 font-poppins">{name}</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <Link className="dropdown-item" to='/logout'>Logout</Link> 
                            
                          </div>
                      </div>
               {/*  <div className="dropdown  profile-detail py-1 pr-sm-3">
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
  <div className="page-content-tab px-4 py-3 review-keywords overflow-auto">
  <div className="row mb-3 align-items-center">
        <div className="col">
          <ul className="breadcrumb  pl-md-3 pl-0 list-unstyled mb-0 bg-transparent">
            <li className="h5 mb-0 font-poppins"><a href="#!">{bname}</a></li>
            <li><img src="assets/images/right-arrow.svg" className="img-fluid breadcrumb-arrow" alt="arrow" /></li>
            <li className="h5 mb-0 font-poppins"><a href="#!" className="font-weight-semibold">Key Drivers</a></li>
          </ul>
        </div>
      
      </div>
     {/*  <div className="left-section "> */}
    <div className="row h-100">

    <div className="table-div w-100 ">
  
     {!load?
     keyDriver!==''?
         <span dangerouslySetInnerHTML={{__html:keyDriver}}></span>:<h1>No data</h1>:<div className="text-center m-5 ">
         <div className="spinner-border" style={{width: "8rem", height: "8rem",color:"orange"}}  role="status">
           <span className="sr-only">Loading...</span>
         </div>
         <div className="spinner-grow" style={{width: "5rem", height: "5rem",color:"orange"}}  role="status">
           <span className="sr-only">Loading...</span>
         </div>
         <div className="spinner-grow" style={{width: "3rem", height: "3rem",color:"orange"}}  role="status">
           <span className="sr-only">Loading...</span>
         </div>

       </div>} 
      
 {/*         <div className="tableauPlaceholder" id='viz1614904756783' style={{position: 'relative'}}>
<noscript>
<a href='#!'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;te&#47;test_sent&#47;CaseSubjectSentiment&#47;1_rss.png' style={{border: 'none'}} /></a>
</noscript>

   <object className='tableauViz'  style={{display:"none"}}><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='test_sent&#47;CaseSubjectSentiment' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;te&#47;test_sent&#47;CaseSubjectSentiment&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object>

      </div> */}
   </div>
      {/* <div className="left-section bg-white">
        <div className="d-flex border-bottom px-3 metric-keyword-period">
          <div className="border-right py-3 px-4 common-width">
            <h6 className="font-weight-600 text-uppercase font-12">Metric</h6>
            <div className="ml-auto">
              <div className="dropdown w-100 show dropdown-green position-relative">
                <a className="dropdown-toggle font-12 mr-2 w-100" href="#!" id="dropdown-all" data-toggle="dropdown"  aria-expanded="true">
                  <span className="d-none d-sm-inline-block w-100 pr-4 font-poppins font-12 font-weight-600">Filtered Metrics</span>
                </a>
                <div className="dropdown-menu show d-none" aria-labelledby="dropdown-all" style={{willChange: 'transform', position: 'absolute', transform: 'translate3d(88px, 18px, 0px)', top: 0, left: 0}} x-placement="bottom-start">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className="border-right py-3 px-4 common-width">
            <h6 className="font-weight-600 text-uppercase font-12">Period</h6>
            <div className="ml-auto">
              <div className="dropdown w-100 show dropdown-green">
                <a className="dropdown-toggle w-100 mr-2 font-12" href="#!" id="dropdown-all" data-toggle="dropdown"  aria-expanded="true">
                  <span className="d-none w-100 d-sm-inline-block pr-4 font-poppins font-12 font-weight-600">Data Range - Data Range</span>
                </a>
                <div className="dropdown-menu show d-none" aria-labelledby="dropdown-all" style={{willChange: 'transform', position: 'absolute', transform: 'translate3d(88px, 18px, 0px)', top: 0, left: 0}} x-placement="bottom-start">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className="border-right py-3 px-4 common-width">
            <h6 className="font-weight-600 text-uppercase font-12">Comparison period</h6>
            <div className="ml-auto">
              <div className="dropdown w-100 show dropdown-green">
                <a className="dropdown-toggle w-100 mr-2 font-12" href="#!" id="dropdown-all" data-toggle="dropdown"  aria-expanded="true">
                  <span className="d-none w-100 d-sm-inline-block pr-4 font-poppins font-12 font-weight-600">Data Range - Data Range</span>
                </a>
                <div className="dropdown-menu show d-none" aria-labelledby="dropdown-all" style={{willChange: 'transform', position: 'absolute', transform: 'translate3d(88px, 18px, 0px)', top: 0, left: 0}} x-placement="bottom-start">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className=" py-3 px-4 common-width">
          </div>
        </div>
        <div className="py-3 bg-light-gray d-flex align-items-center px-4 border-bottom">
          <div className="form-control d-flex align-items-center keywords-input rounded">
            <div className="d-flex align-items-center">
              <a href="#!"> <img src="assets/images/cancel.svg" className="img-fluid w-13 mr-3" alt="cancel"/></a>
              <span className="text-muted  font-12 mr-4">Brand</span>
            </div>
            <div className="d-flex align-items-center">
              <a href="#!"> <img src="assets/images/cancel.svg" className="img-fluid w-13 mr-3" alt="cancel"/></a>
              <span className="text-muted  font-12 mr-4">Royal Canin</span>
            </div>
            <div className="dropdown  show dropdown-green">
              <a className="dropdown-toggle font-12 mr-2" href="#!" id="dropdown-all" data-toggle="dropdown"  aria-expanded="true">
                <span className="d-none d-sm-inline-block pr-2 font-poppins font-12">Urinary</span>
              </a>
              <div className="dropdown-menu show d-none" aria-labelledby="dropdown-all" style={{willChange: 'transform', position: 'absolute', transform: 'translate3d(88px, 18px, 0px)', top: 0, left: 0}} x-placement="bottom-start">
                1
              </div>
            </div>
          </div>
          <div className="form-control d-flex align-items-center keywords-input rounded ml-3">
            <div className="d-flex align-items-center">
              <a href="#!"> <img src="assets/images/cancel.svg" className="img-fluid w-13 mr-3" alt="cancel" /></a>
              <span className="text-muted  font-12 mr-4">Themes</span>
            </div>
            <div className="d-flex align-items-center">
              <a href="#!"> <img src="assets/images/cancel.svg" className="img-fluid w-13 mr-3" alt="cancel" /></a>
              <span className="text-muted  font-12 mr-4">Packaging</span>
            </div>
            <div className="d-flex align-items-center">
              <a href="#!"> <img src="assets/images/cancel.svg" className="img-fluid w-13 mr-3" alt="cancel" /></a>
              <span className="text-muted  font-12 mr-4">Taste</span>
            </div>
            <div className="dropdown  show dropdown-green">
              <a className="dropdown-toggle font-12 mr-2" href="#!" id="dropdown-all" data-toggle="dropdown"  aria-expanded="true">
                <span className="d-none d-sm-inline-block pr-2 font-poppins font-12">Flavour</span>
              </a>
              <div className="dropdown-menu show d-none" aria-labelledby="dropdown-all" style={{willChange: 'transform', position: 'absolute', transform: 'translate3d(88px, 18px, 0px)', top: 0, left: 0}} x-placement="bottom-start">
                1
              </div>
            </div>
          </div>
          <a href="#!" className="font-12 font-weight-600 px-4">Add Filter</a>
        </div>
        <div className="text-center py-5 my-5">
          <img src="assets/images/plot-1.jpg" className="img-fluid" alt="review-graph" />
        </div>
      </div> */}


     {/*  <div className="sidebar position-absolute bg-white border-left">
        <div className="p-4">
          <a href="#!" className="font-12">All Drivers</a>
          <h6 className="font-12 font-weight-600 my-2">Net Sentiment</h6>
          <h1 className="text-danger font-weight-light">-29.4</h1>
          <img src="assets/images/graph.jpg" className="img-fluid" alt="graph" />
        </div>
        <hr />
        <div className="px-4 sidebar-content-driver  overflow-auto">
          <div className="d-flex py-3">
            <span className="text-success mr-3">9</span>
            <div className="border-bottom pb-4 client-chat">
              <p className="font-12 mb-0">The vet recommended this food for diet and exercise. The food is less than 300 kcal/cup. Dog loves it and is acting more active than before because he is losing weight and getting more exercise. When he loses his 10lbs, I will mix his older kibble in as a ratio of 1 to 3 cups of this gastro food, while maintaining his 5 miles of walks per day.</p>
              <small className="text-muted">3 hours . Review</small>
            </div>
          </div>
          <div className="d-flex py-3">
            <span className="text-danger mr-3">5</span>
            <div className="border-bottom pb-4 client-chat">
              <p className="font-12 mb-0">Very good product but this small bag of dog food is insanely expensive.</p>
              <small className="text-muted">yerterday . Nps survey</small>
            </div>
          </div>
          <div className="d-flex py-3">
            <span className="text-success mr-3">9</span>
            <div className="border-bottom pb-4 client-chat">
              <p className="font-12 mb-0">Vet said if I wanted him to live he must be on a low fat diet, first tried Hills, he would not touch it. He likes this mixed wit Royal Canin wet food!</p>
              <small className="text-muted">3 days ago . Nps survey </small>
            </div>
          </div>
          <div className="d-flex py-3">
            <span className="text-muted mr-3">8</span>
            <div className="border-bottom pb-4 client-chat">
              <p className="font-12 mb-0">Let me start by saying I was one of the worst offenders for being 100% against my dogs eating Hill's Science Diet. I was told that it contained lots of toxic chemicals and was only pushed on consumers by vets because they were paid by Hill's to push the product. My opinion has since changed since using this product. I have three boxers. One is in perfect health, the other suffers from terrible skin allergies, and the last has a very sensitive stomach due a stomach flip he had surgery for when his previous owners fed him a sock with food on it to try and kill him -- because of this, he has terrible farts.

Since I've been using this product (close to a month now), my allergy dog no longer scratches herself all day and my little tooter dog no longer farts. I am literally amazed. We tried everything from Taste of the Wild, Blue Buffalo, Royal Canin, Nutrish, etc. and nothing has worked for out dogs but this product. I cannot even begin to say how thankful I am we tried this food.

While I understand all vets have different opinions, but vet advised my husband and I to steer clear of "grain-free" foods. This really surprised me, because I always thought that they would be healthier for my pups and would prolong their life. Apparently, this is not the case. Through extensive research, they are finding that these types of foods are actually limiting the life of pup's due to the higher fat contents, which in turn wears down their heart much quicker (apologies if I didn't explain this correctly; trying to parrot what my vet said).

Moving forward, I'll be using this product and would not hesitate to recommend it to other pet owners who experience the same issues with their pups as I do.</p>
              <small className="text-muted">3 days ago . Nps survey </small>
            </div>
          </div>
        </div>
        <div className="bottom-section position-absolute w-100 border-top p-4 bg-light-gray">
          <div className="d-flex align-items-center">
            <div className="d-flex  align-items-center">
              <h2 className="font-weight-bold mb-0">1,435 </h2>
              <small className="font-10 total-small ml-2">Responses <br />total</small>
            </div>
            <a href="#!" className="btn btn-light ml-auto border bg-white py-2 px-3 rounded font-weight-bold">View all</a>
          </div>
        </div>
      </div> */}
  
    </div>
    {/* </div> */}
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

export default KeyDriver
