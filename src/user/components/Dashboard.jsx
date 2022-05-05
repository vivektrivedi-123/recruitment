import React, { useEffect, useState } from 'react'
import Rating from '../components/Rating'
import ToggleBar from '../../common/Util';
import axios from 'axios';
import { globalVar } from '../components/config'
import { Link } from 'react-router-dom'
import BeautyStars from 'beauty-stars';

import {getBrandOfCurrentUser, getDashboarData} from '../../common/api';
import Sidebar from './Sidebar';
export default function Dashboard(props) {
   const[brandImage,setBrandImage]=useState('')
   const [brand, setBrand] = useState([{}])
   const [project, setProject] = useState([{}])
   const [totalReview, setTotalReview] = useState(0)
   const [averageRating, setAvgRating] = useState(0)
   const [comparison, setComparison] = useState({})
   const [review, setReview] = useState([{}])
   const[brandId,setBrandId]=useState();
   const[projects,setProjects]=useState([{}])

  const name=localStorage.getItem('name')
  const image=localStorage.getItem('avatar')
   useEffect(() => {
      ToggleBar()
   }, [])


   useEffect(() => {
      let token = localStorage.getItem('token')
      getBrandOfCurrentUser(token).then((res) => {
        // console.log(res.data.data)
         setBrand(res.data.data)
         setBrandId(res.data.data[0].id)
         setBrandImage(res.data.data[0].image)
         getDashboarData(res.data.data[0].id,token)
            .then((res) => {
               setTotalReview(res.data.data.reviews.total)
               setProject(res.data.data.project_trackers)
               setAvgRating(res.data.data.ratings.average)
               setComparison(res.data.data.ratings.comparison)
               setReview(res.data.data.reviews.list)
               setProjects(res.data.data.projects)
            })
      })
         .catch((err) => { console.log(err) })

   }, [])

   const handleChange = (e) => {
      var index = e.target.selectedIndex;
      var optionElement = e.target.childNodes[index]
      var option = optionElement.getAttribute('id');
       setBrandId(option)
       let result=brand.filter(u=>u.id==option);
       setBrandImage(result[0].image) 
      let token = localStorage.getItem('token');
      axios.get(`${globalVar.REACT_APP_base_url}/api/v1/dashboard?brand_id=${option}`, {
         headers: {
            'Authorization': 'Bearer ' + token
         }
      }).then((res) => {
        // console.log(res.data.data)
         setTotalReview(res.data.data.reviews.total)
         setProject(res.data.data.project_trackers)
         setAvgRating(res.data.data.ratings.average)
         setComparison(res.data.data.ratings.comparison)
         setReview(res.data.data.reviews.list)   
         setProjects(res.data.data.projects)
      }).catch((err) => {
         console.log(err)
      })

   }


   const projectColor = [
      {class:"bg-danger position-relative counter-danger"},
      {class:"bg-info position-relative counter-info"},
      {class:"bg-parrot position-relative counter-parrot"},
      {class:"bg-secondary position-relative counter-secondary"},
      {class:"bg-purple position-relative counter-purple"},
   ]

   return (
      <>
       <div className="wrapper overflow-hidden">
        <div className="d-flex">
           <Sidebar/>
         <div className="page-wrapper position-relative">
            <div className="position-sticky p-0 shadow z-index-1 bg-white overflow-hidden px-sm-4 px-3 top-0">
               <div className="row mr-lg-0">
                  <div className="col-md-12">
                     <div className="navbar-custom   position-relative d-flex align-items-center">
                        <Link to="/" className="d-md-none mr-3"><img src="assets/images/logo-sm.png" className="img-fluid logo-mob-icon" alt="img" /></Link>
                        <button type="button" className="top-togglebar bg-transparent border-0">
                           <img src="assets/images/menu.svg" className="img-fluid" alt="img" />
                        </button>
                        <div className="theme-custom-select position-relative ml-3 diable-enable-select border-0 brand-dropdown">
                           <select className="form-control  border-0" onChange={handleChange} >
                              {brand.map((u, i) =>
                                 <option key={i} className="py-4" name="select" id={u.id} >{u.company}</option>
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
                            <a className=" dropdown-toggle" href="#!" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={image} className="img-fluid rounded-circle user-name mx-2" alt="img" />
                            <span className="d-none d-sm-inline-block pr-2 font-poppins">{name}</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                              <Link className="dropdown-item" to='/logout'>Logout</Link> 
                          </div>
                      </div>
                                 {/* <div className="dropdown  profile-detail py-1 pr-sm-3">
                                    <a className="dropdown-toggle mr-2" href="#!" id="dropdown03" data-toggle="dropdown" aria-expanded="true">
                                       <img src="assets/images/user.jpg" className="img-fluid rounded-circle user-name mx-2" alt="img" />
                                       <span className="d-none d-sm-inline-block pr-2 font-poppins">Amella</span>
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
            <div className="page-content-tab p-sm-4 p-3 overflow-auto">
               <div className="container-sm-0 mb-2">
               </div>
               <div className="container-sm px-0">
                  <div className="row">
                     <div className="col-lg-4 col-md-12 mb-lg-0 mb-4 pt-sm-0 pt-4">
                        <div className="bg-white shadow h-100 rounded p-4">
                           <div className="text-center">
                              <div className="d-flex align-items-start justify-content-center">
                                 <img src="assets/images/dash1-welcome-check-img.jpg" className="img-fluid" alt="welcome" />
                              </div>
                              <div className="mt-2">
                                 <h4 className="font-poppins font-weight-medium text-welcome">Welcome back {name} !</h4>
                                 <img src="assets/images/dash-welcome-check-img.jpg" className="img-fluid" alt="welcome-check" />
                                 {projects.map((u,i)=>
                                 <p  key={i} className="text-muted mb-0 mt-2">{u.product_name} <span className="text-success-o font-weight-semibold">{u.project_status}</span></p>
                                 )}
                                 </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-8 col-12 mb-lg-0 mb-4">
                        <div className="row">
                           <div className="col-md-6 mb-4">
                              <div className="bg-white shadow p-4 rounded h-100">
                                 <div className="d-flex w-100 p-md-2 welcome-graph-detail">
                                    <div>
                                       <h6 className="text-uppercase mb-0">Average star rating</h6>
                                       <h3 className="font-weight-semibold my-3 color-light-black">{averageRating ? averageRating : 0} Stars</h3>
                                       <div className="d-flex align-items-center pt-2">
                                          {comparison.status === "Increase" ? <img src="assets/images/up-arrow.png" className="img-fluid" alt="up-arrow" /> :
                                             <img src="assets/images/down-arrow.png" className="img-fluid d-none" alt="up-arrow" />
                                          }
                                          {/*   <img src="assets/images/up-arrow.png" className="img-fluid" alt="up-arrow" />
                                 <img src="assets/images/down-arrow.png" className="img-fluid d-none" alt="up-arrow" /> */}
                                          <h6 className="font-weight-semibold text-muted mb-0 pl-2">{comparison.percentage}% <span className="text-success-o">{comparison.status}</span> from last month</h6>
                                       </div>
                                    </div>
                                    <div className="ml-auto mb-3 mb-sm-0">
                                       <div className="w-55 h-55">
                                          <img src="assets/images/star-img.png" className="img-fluid" alt="star" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6 mb-4">
                              <div className="bg-white shadow p-4 rounded h-100">
                                 <div className="d-flex w-100 p-md-2 welcome-graph-detail">
                                    <div >
                                       <h6 className="text-uppercase mb-0">Reviews</h6>
                                       <h3 className="font-weight-semibold my-3 color-light-black">{totalReview}</h3>
                                       <div className="d-flex align-items-center">
                                          <img src="assets/images/up-arrow.png" className="img-fluid" alt="up-arrow" />
                                          <img src="assets/images/down-arrow.png" className="img-fluid d-none" alt="up-arrow" />
                                          <h6 className="font-weight-semibold text-muted mb-0 pl-2">28% <span className="text-success-o">Increase</span> from last month</h6>
                                       </div>
                                    </div>
                                    <div className="ml-auto mb-3 mb-sm-0">
                                       <h3><span className="badge badge-primary p-0 rounded-circle w-45 h-45 d-flex align-items-center justify-content-center mt-3">New</span></h3>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6 mb-lg-0 mb-4">
                              <div className="bg-white shadow p-4 rounded h-100">
                                 <div className="d-flex w-100 p-md-2 welcome-graph-detail">
                                    <div>
                                       <h6 className="text-uppercase mb-0">Social Media</h6>
                                       <h3 className="font-weight-semibold my-3 color-light-black">385 Mentions</h3>
                                       <div className="d-flex align-items-center">
                                          <img src="assets/images/up-arrow.png" className="img-fluid" alt="up-arrow" />
                                          <img src="assets/images/down-arrow.png" className="img-fluid d-none" alt="up-arrow" />
                                          <h6 className="font-weight-semibold text-muted mb-0 pl-2">11% <span className="text-success-o">Increase</span> from last month</h6>
                                       </div>
                                    </div>
                                    <div className="ml-auto mb-3 mb-sm-0">
                                       <div className="w-55 h-55">
                                          <img src="assets/images/comment-img.png" className="img-fluid" alt="comment" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="col-md-6">
                              <div className="bg-white shadow p-4  rounded h-100">
                                 <div className="d-flex w-100 p-md-2 welcome-graph-detail">
                                    <div>
                                       <h6 className="text-uppercase mb-0">Sentiment</h6>
                                       <h3 className="font-weight-semibold my-3 color-light-black">57% Positive</h3>
                                       <div className="d-flex align-items-center">
                                          <img src="assets/images/up-arrow.png" className="img-fluid d-none" alt="up-arrow" />
                                          <img src="assets/images/down-arrow.png" className="img-fluid" alt="up-arrow" />
                                          <h6 className="font-weight-semibold text-muted mb-0 pl-2">4% <span className="text-danger">Decrease</span> from last month</h6>
                                       </div>
                                    </div>
                                    <div className="ml-auto mb-3 mb-sm-0">
                                       <div className="bg-danger rounded-circle w-55 h-55 d-flex align-items-center justify-content-center">
                                          <img src="assets/images/affilate.svg" className="w-35 img-fluid" alt="affilate" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-12 mt-4 mb-lg-0 mb-4">
                        <div className="bg-white shadow p-4 rounded">
                           <div className="p-md-2 graph-image-con">
                              {/*    <div className="d-sm-flex w-100 align-items-center">
                        <h4 className="font-weight-medium font-poppins text-exp ">Average Star Rating</h4>
                        <a href="#!" className="ml-auto text-primary">View More</a>
                     </div>
                     <h6 className="text-muted font-weight-semibold">16 Nov,2020 - 15 Dec,2020</h6> */}
                              {/*      <img src="assets/images/graph-1.jpg" className="graph mt-5" alt="graph" /> */}
                              <Rating  id={brandId}/>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6 mb-4 tracker-element">
                        <div className="bg-white shadow p-4 rounded mt-4 h-100">
                           <h4 className="font-weight-medium font-poppins text-exp p-md-2">Project Tracker</h4>
                           <ul className="list-unstyled mb-0 notification-ul mt-2 p-md-2">
                              <li className="bg-secondary position-relative first-notification-li">
                                 <div className="bg-white notification-li-detail h-100 position-relative">
                                 </div>
                              </li>
                              
                              {project.length !== 0 ? project.map((u,i) =>{
                            
                              for(let a=i;a<a+1;a++)
                              {
                                 if(i===5)
                                 {
                                    a=0
                                 }
                             // console.log(a)
                              
                               return(

                                 <li key={i} className={projectColor[a].class?projectColor[a].class:projectColor[0].class}>
                                    <div className="bg-white notification-li-detail h-100 position-relative">
                                       <h6 className="line-height-1"><small>{u.date ? u.date : ''}</small></h6>
                                       <h6 className="mb-0 line-clamp-2">{u.comment} </h6>
                                    </div>
                                 </li>
                                    
                              )}return null
                              }) : <h2>No Record </h2>}





                              {/* <li className="bg-purple position-relative counter-purple">
                        <div className="bg-white notification-li-detail  h-100">
                           <h6 className="line-height-1"><small>01/15/21</small></h6>
                           <h6 className="mb-0 line-clamp-2">Identified Royal Canin data sources</h6>
                        </div>
                     </li>  */}
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-6 mb-4 comment-element">
                        <div className="bg-white shadow p-4 rounded mt-4 h-100">
                           <div className="review-comments-con-outer">
                              {review.length !== 0 ? review.map((u, i) =>
                                 <div  key={i} className="review-comments-con d-inline-block w-100">
                                    <div className="d-flex align-items-center mb-4">
                                       <img src={u.avatar} className="img-fluid user-review-profile" alt="user" />
                                       <div className="reviews ml-4">

                                          <BeautyStars
                                             maxStars={5}
                                             size={15}
                                             activeColor="orange"
                                             inactiveColor="grey"
                                             value={u.star_rating}
                                          // onChange={value => this.setState({ value })}
                                          />
                                          {/*  <img src="assets/images/review.svg" className="img-fluid w-18" alt="review" />
                              <img src="assets/images/review.svg" className="img-fluid w-18" alt="review" />
                              <img src="assets/images/review.svg" className="img-fluid w-18" alt="review" />
                              <img src="assets/images/review.svg" className="img-fluid w-18" alt="review" />
                              <img src="assets/images/review.svg" className="img-fluid w-18" alt="review" /> */}
                                       </div>
                                    </div>
                                    <div className="review-comment-area">
                                       <h6 className="font-weight-semibold">{u.title}</h6>
                                       <p>{u.review_text}</p>
                                       {/*  <p>Since I've been using this product (close to a month now), my allergy dog no longer scratches herself all day and my little tooter dog no longer farts. I am literally amazed. We tried everything from Taste of the Wild, Blue Buffalo, Royal Canin, Nutrish, etc. and nothing has worked for out dogs but this product. I cannot even begin to say how thankful I am we tried this food.</p>
                           <p>While I understand all vets have different opinions, but vet advised my husband and I to steer clear of "grain-free" foods. This really surprised me, because I always thought that they would be healthier for my pups and would prolong their life. Apparently, this is not the case. Through extensive research, they are finding that these types of foods are actually limiting the life of pup's due to the higher fat contents, which in turn wears down their heart much quicker (apologies if I didn't explain this correctly; trying to parrot what my vet said).</p>
                           <p>Moving forward, I'll be using this product and would not hesitate to recommend it to other pet owners who experience the same issues with their pups as I do.</p> */}
                                    </div>
                                 </div>
                              ) : <h2>No review for this brand</h2>}
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