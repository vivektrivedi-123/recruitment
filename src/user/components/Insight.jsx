import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import ToggleBar from '../../common/Util';
function Insight(props) {

  const brands=props.brands;

  const products=props.products;
  const productDetails=props.productDetails;


//console.log('p',products)
const handleChange1=(e)=>{
  var index = e.target.selectedIndex;
  var optionElement = e.target.childNodes[index]
  var option =  optionElement.getAttribute('id');


}

  useEffect(()=>{
    ToggleBar()
  })
        return (
            <>
            <div className="page-wrapper position-relative overflow-hidden">
          <div className="position-sticky p-0 shadow z-index-1 bg-white px-sm-4 px-3">
            <div className="row mr-lg-0">
              <div className="col-md-12">
                <div className="navbar-custom   position-relative d-flex align-items-center">
                  <Link to="/" className="d-md-none mr-3"><img src="assets/images/logo-sm.png" className="img-fluid logo-mob-icon" alt="img" /></Link>
                  <button type="button" className="top-togglebar bg-transparent border-0">
                    <img src="assets/images/menu.svg" className="img-fluid" alt="img" />
                  </button>
                  <div className="theme-custom-select position-relative ml-3 diable-enable-select border-0 brand-dropdown">
                    <select className="form-control  border-0">
                    {brands.map((u,i)=>
                      <option key={i} className="py-4" value={u.company}>{u.company}</option>
                      )}
                     {/*  <option className="py-4" value="alert">Zevo</option> */}
                    </select>
                  </div>
                  <div className="ml-auto">
                    <ul className="list-unstyled mb-0 ">
                      <li className="list-inline-item mx-2 d-sm-inline-block d-none"><img src="assets/images/royal-chain.jpg" className="img-fluid" alt="royal" /></li>
                      <li className="list-inline-item ml-2">
                        <div className="dropdown  profile-detail py-1 pr-sm-3">
                          <a className="dropdown-toggle mr-2" href="#!" id="dropdown03" data-toggle="dropdown"  aria-expanded="true">
                            <img src="assets/images/user.jpg" className="img-fluid rounded-circle user-name mx-2" alt="img" />
                            <span className="d-none d-sm-inline-block pr-2 font-poppins">Amella</span>
                          </a>
                          <div className="dropdown-menu d-none " aria-labelledby="dropdown03">
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content-tab px-4 py-3 overflow-auto">
          <div className="row mb-3 align-items-center">
                <div className="col">
                  <ul className="breadcrumb  pl-md-3 pl-0 list-unstyled mb-0 bg-transparent">
                    <li className="h5 mb-0 font-poppins"><a href="#!">Royal Canin</a></li>
                    <li><img src="assets/images/right-arrow.svg" className="img-fluid breadcrumb-arrow" alt="arrow" /></li>
                    <li className="h5 mb-0 font-poppins"><a href="#!" className="font-weight-semibold">Insight Miner</a></li>
                  </ul>
              {/*   </div>
               
              </div>
            <div className="row mb-4 align-items-center position-relative"> */}
              <div className="position-absolute tab-list-graph-miner">
                <ul className="nav nav-tabs real-time-tabs border-0 mr-5 mb-0" role="tablist">
                  <li role="presentation" className="mr-3">
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
            <div className="row mb-4">
              {/* Tab panes */}
              <div className="col-md-12 tab-content review-keywords ">
                <div role="tabpanel" className="tab-pane active" id="list-tab">
                  <div className="">
                    <div className="row">
                      <div className="col-md-12">
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
                    <div className="row tabing-content">
                      <div className="col-md-12 tab-content bg-white">
                        <div role="tabpanel" className="tab-pane active h-100" id="Countreview">
                          <div className="row h-100">
                            <div className="col-lg-3 px-lg-0 d-flex">
                              <div className="light-green-1 border-bottom border-right">
                                <div className="d-flex w-100">
                                  <div className="bg-white py-3 px-3 d-flex align-items-center default-sec">
                                    <div className="dropdown dropdown-green   w-100">
                                    <select className="form-control  border-0 "  onChange={handleChange1} >
                        {products.length!==0?products.map((u,i)=>
                       <option key={i} className="py-4" name="select" id={u.product_id} >{u.product_name}</option>
                      ):  <option  className="py-4" name="select"  >No product</option>}  
                        
                    </select>
                                     {/*  <a className="dropdown-toggle mr-2" href="#!" id="dropdown-seg" data-toggle="dropdown"  aria-expanded="true">
                                        <span className="number-tab rounded mr-2">DS</span>
                                        <span className="d-none d-sm-inline-block pr-2 font-poppins font-12">Default Product</span>
                                      </a>
                                      <div className="dropdown-menu d-none" aria-labelledby="dropdown-seg">
                                        1
                                      </div> */}
                                    </div>
                                  </div>
                                  <div className="p-3 d-flex segment-filter border-left ">
                                    <img src="assets/images/fil-ter.svg" className="img-fluid w-20 opacity-4" alt="filter" />
                                  </div>
                                </div>
                                <div className="light-green py-3 px-3 border-top ">
                                  <div className="d-flex align-items-center">
                                    <div className="theme-sec w-50 ">
                                      <h6 className="font-12 mb-0 text-green text-uppercase">Theme</h6>
                                    </div>
                                    <div className="all-show ml-auto w-50 text-right dropdown-green">
                                      <div className="dropdown w-100">
                                        <a className="dropdown-toggle mr-2" href="#!" id="dropdown-all" data-toggle="dropdown"  aria-expanded="true">
                                          <span className="d-none d-sm-inline-block pr-4 font-poppins font-12">All</span>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdown-all">
                                          1
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="plot-form-input light-green-1 p-3">
                                  <form>
                                    <div className="form-group mb-4">
                                      <label className="font-12  text-green text-uppercase mb-2">Period</label>
                                      <div className="theme-custom-select-2 position-relative">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                          <option>Dec 29, 2018  -  Jan 05,2019</option>
                                          <option>Jan 05, 2019  -  Feb 05,2019</option>
                                          <option>Jan 05, 2019  -  Feb 05,2019</option>
                                        </select>
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
                                        <input type="text" defaultValue="1" className="form-control text-center" placeholder={1} />
                                        <input type="range" id="vol" name="vol" min={0} max={8} className="mx-3" />
                                        <input type="text" defaultValue="5" className="form-control text-center" placeholder={8} />
                                      </div>
                                    </div>
                                    <div className="form-group mb-4">
                                      <label className="font-12  text-green text-uppercase mb-2 ">Keywords</label>
                                      <div className="form-control d-flex">
                                        <h5><span className="badge badge-light">Great</span></h5>
                                        <h5><span className="badge badge-light">Quality</span></h5>
                                      </div>
                                    </div>
                                 
                                  </form>
                                </div>
                              </div>
                            </div>
        
                         
                            <div className="col-lg-6 px-lg-0 border-right d-flex ">
                              <div >
                                <div className="d-flex w-100 border-bottom">
        
                                  <div className="bg-white py-3 px-4 d-flex align-items-center w-75">
                                    <img src="assets/images/search-icon.svg" className="w-15 opacity-4" alt="search" />
                                    <input type="text" placeholder="Search feedback" className="form-control border-0" />
                                  </div>
                                  <div className="py-3 px-5 d-flex  border-left w-25 light-green ">
                                    <img src="assets/images/share.svg" className="img-fluid w-15 opacity-4" alt="share" />
                                    <img src="assets/images/dot.svg" className="img-fluid w-15 opacity-4 ml-auto" alt="dot" />
                                  </div>
                                </div>
                                
                                <div className="client-review">
                                  <div className=" border-bottom">
                                    <div className="d-flex p-4">
                                      <div className="text-success font-weight-600">10</div>
                                      <div className="ml-3 ">
                                        <h6 >The vet recommended this food for diet and exercise. The food is less than 300 kcal/cup. Dog loves it and is acting more active than before because he is losing weight and getting more exercise. When he loses his 10lbs, I will mix his older kibble in as a ratio of 1 to 3 cups of this gastro food, while maintaining his 5 miles of walks per day. </h6>
                                        <div className="my-3">
                                          <a href="#!" className="badge badge-success px-3 py-2 border mr-2">:) Product Attribute: <span className="text-muted">General Quality</span></a>
                                          <a href="#!" className="badge badge-success px-3 py-2 border">:) logistics: <span className="text-muted">Speed</span></a>
                                        </div>
                                        <div className="post-time">
                                          <small className="text-muted">11.34am</small> . <small className="text-muted">Review</small> 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className=" border-bottom">
                                    <div className="d-flex p-4">
                                      <div className="text-danger font-weight-600">5</div>
                                      <div className="ml-3 ">
                                        <h6>Very good product but this small bag of dog food is insanely expensive.</h6>
                                        <div className="my-3">
                                          <a href="#!" className="badge badge-danger px-3 py-2 border mr-2">:( Product Attribute: <span className="text-muted">Print Attribute</span></a>
                                        </div>
                                        <div className="post-time">
                                          <small className="text-muted">Yesterday</small> . <small className="text-muted">NPS Survey</small> 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className=" border-bottom">
                                    <div className="d-flex p-4">
                                      <div className="text-success font-weight-600">10</div>
                                      <div className="ml-3 ">
                                        <h6 >Vet said if I wanted him to live he must be on a low fat diet, first tried Hills, he would not touch it. He likes this mixed wit Royal Canin wet food!</h6>
                                        <div className="my-3">
                                          <a href="#!" className="badge badge-success px-3 py-2 border mr-2">:( Customer Care: <span className="text-muted">General </span></a>
                                          <a href="#!" className="badge badge-primary px-3 py-2 border"># packaging</a>
                                        </div>
                                        <div className="post-time">
                                          <small className="text-muted">11.34am</small> . <small className="text-muted">Review</small> 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className=" border-bottom">
                                    <div className="d-flex p-4">
                                      <div className="text-muted font-weight-600">10</div>
                                      <div className="ml-3 ">
                                        <h6 >Let me start by saying I was one of the worst offenders for being 100% against my dogs eating Hill's Science Diet. I was told that it contained lots of toxic chemicals and was only pushed on consumers by vets because they were paid by Hill's to push the product. My opinion has since changed since using this product. I have three boxers. One is in perfect health, the other suffers from terrible skin allergies, and the last has a very sensitive stomach due a stomach flip he had surgery for when his previous owners fed him a sock with food on it to try and kill him -- because of this, he has terrible farts.
        
        Since I've been using this product (close to a month now), my allergy dog no longer scratches herself all day and my little tooter dog no longer farts. I am literally amazed. We tried everything from Taste of the Wild, Blue Buffalo, Royal Canin, Nutrish, etc. and nothing has worked for out dogs but this product. I cannot even begin to say how thankful I am we tried this food.
        
        While I understand all vets have different opinions, but vet advised my husband and I to steer clear of "grain-free" foods. This really surprised me, because I always thought that they would be healthier for my pups and would prolong their life. Apparently, this is not the case. Through extensive research, they are finding that these types of foods are actually limiting the life of pup's due to the higher fat contents, which in turn wears down their heart much quicker (apologies if I didn't explain this correctly; trying to parrot what my vet said).
        
        Moving forward, I'll be using this product and would not hesitate to recommend it to other pet owners who experience the same issues with their pups as I do.</h6>
                                        <div className="my-3">
                                          <a href="#!" className="badge badge-success px-3 py-2 border mr-2">:) Product Attribute: <span className="text-muted">General Quality</span></a>
                                          <a href="#!" className="badge badge-danger px-3 py-2 border mr-2">:) Product Attribute: <span className="text-muted">Value</span></a>
                                        </div>
                                        <div className="post-time">
                                          <small className="text-muted">2d</small> . <small className="text-muted">Review</small> 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                              </div>
                            </div>
                            <div className="col-lg-3 px-lg-0 d-flex">
                              <div className="border-bottom">
                                <div className="p-4 ">
                                  <div className="d-flex align-items-center">
                                    <h6 className="font-12 mb-0 text-green text-uppercase">Average star Rating</h6>
                                    <div className="d-flex ml-auto align-items-center">
                                      <h2 className="font-weight-bold mb-0">51,159 </h2>
                                      <small className="font-10 total-small ml-2">Total <br />for small</small>
                                    </div>
                                  </div>
                                  <img src="assets/images/1.jpg" alt="graph" className="img-fluid" />
                                </div>
                                <div className="p-4">
                                  <h6 className="font-12 mb-0 text-green text-uppercase">Sentiment</h6>
                                  <img src="assets/images/2.png" alt="graph" className="img-fluid" />
                                </div>
                                <div className="light-green border-top border-right p-4">
                                  <div className="d-flex align-items-center">
                                    <div className="all-show w-100">
                                      <div className="dropdown dropdown-green w-100">
                                        <a className="dropdown-toggle mr-2" href="#!" id="dropdown-all" data-toggle="dropdown" aria-expanded="true">
                                          <span>
                                            {/* <img src="images/widget.svg" class="img-fluid w-12 opacity-4 mr-2"> */}
                                          </span>
                                          <span className="font-12 mb-0 text-green text-uppercase">Mange Widget</span>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdown-all">
                                          1
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="tabpanel" className="tab-pane h-100" id="keyword">
                          <div className="row h-100">
                            <div className="col-lg-3 px-lg-0 d-flex">
                              <div className="light-green-1 border-bottom">
                                <div className="d-flex w-100">
                                  <div className="bg-white py-3 px-3 d-flex align-items-center default-sec">
                                    <div className="dropdown dropdown-green w-100">
                                      <a className="dropdown-toggle mr-2" href="#!" id="dropdown-seg" data-toggle="dropdown"  aria-expanded="true">
                                        <span className="number-tab rounded mr-2">DS</span>
                                        <span className="d-none d-sm-inline-block pr-2 font-poppins font-12">Default Product</span>
                                      </a>
                                      <div className="dropdown-menu d-none" aria-labelledby="dropdown-seg">
                                        1
                                      </div>
                                    </div>
                                  </div>
                                  <div className="p-3 d-flex segment-filter border-left border-right">
                                    <img src="assets/images/fil-ter.svg" className="img-fluid w-20 opacity-4" alt="filter" />
                                  </div>
                                </div>
                                <div className="light-green py-3 px-3 border-top border-right">
                                  <div className="d-flex align-items-center">
                                    <div className="theme-sec w-50 ">
                                      <h6 className="font-12 mb-0 text-green text-uppercase">Theme</h6>
                                    </div>
                                    <div className="all-show ml-auto w-50 text-right dropdown-green">
                                      <div className="dropdown w-100">
                                        <a className="dropdown-toggle mr-2" href="#!" id="dropdown-all" data-toggle="dropdown"  aria-expanded="true">
                                          <span className="d-none d-sm-inline-block pr-4 font-poppins font-12">All</span>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdown-all">
                                          1
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="plot-form-input light-green-1 p-3 ">
                                  <form>
                                    <div className="form-group mb-4">
                                      <label className="fonclit-12  text-green text-uppercase mb-2">Period</label>
                                      <div className="theme-custom-select-2 position-relative">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                          <option>Dec 29, 2018  -  Jan 05,2019</option>
                                          <option>Jan 05, 2019  -  Feb 05,2019</option>
                                          <option>Jan 05, 2019  -  Feb 05,2019</option>
                                          <option>Jan 05, 2019  -  Feb 05,2020</option>
                                        </select>
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
                                        <input type="text" defaultValue="1" className="form-control text-center" placeholder={1} />
                                        <input type="range" id="vol" name="vol" min={0} max={8} className="mx-3" />
                                        <input type="text" defaultValue="5" className="form-control text-center" placeholder={8} />
                                      </div>
                                    </div>
                                    <div className="form-group mb-4">
                                      <label className="font-12  text-green text-uppercase mb-2 ">Keywords</label>
                                      <div className="form-control d-flex">
                                        <h5><span className="badge badge-light">Great</span></h5>
                                        <h5><span className="badge badge-light">Quality</span></h5>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-5 px-lg-0 d-flex">
                              <div className="w-100 border-right">
                                <div className="table-responsive1 kerwords-table-word">
                                  <table className="table">
                                    <tbody>
                                      <tr style={{cursor:'pointer'}} >
                                        <th className="text-dark font-weight-normal p-3 text-center">Word</th>
                                        <th className="text-dark font-weight-normal p-3 text-center"   >Count </th>
                                        <th className="text-dark font-weight-normal p-3 text-center" >Prevalence </th>
                                        <th className="text-dark font-weight-normal p-3 text-center"   >Sentiment </th>
                                        <th className="text-dark font-weight-normal p-3 text-center" >WISR </th>
                                      </tr>
        
                                   
                                       <tr>
                                        <td className="p-3">Cancellation insurance</td>
                                        <td className="p-3 text-center">8</td>
                                        <td className="text-danger p-3 text-center">-0.92</td>
                                        <td className="text-danger p-3 text-center">-7.33</td>
                                        <td className="text-danger p-3 text-center">-7.33</td>
                                      </tr>
                                       <tr>
                                        <td className="p-3">Price Change</td>
                                        <td className="p-3 text-center">8</td>
                                        <td className="p-3 text-center">-0.90</td>
                                        <td className="text-danger p-3 text-center">-7.24</td>
                                        <td className="text-danger p-3 text-center">-7.24</td>
                                      </tr>
                                      <tr>
                                        <td className="p-3">Cancellation insurance</td>
                                        <td className="p-3 text-center">8</td>
                                        <td className="text-danger p-3 text-center">-0.92</td>
                                        <td className="text-danger p-3 text-center">-7.33</td>
                                        <td className="text-danger p-3 text-center">-7.33</td>
                                      </tr>
                                      <tr>
                                        <td className="p-3">Price Change</td>
                                        <td className="p-3 text-center">8</td>
                                        <td className="p-3 text-center">-0.90</td>
                                        <td className="text-danger p-3 text-center">-7.24</td>
                                        <td className="text-danger p-3 text-center">-7.24</td>
                                      </tr>
                                      <tr>
                                        <td className="p-3">Cancellation insurance</td>
                                        <td className="p-3 text-center">8</td>
                                        <td className="text-danger p-3 text-center">-0.92</td>
                                        <td className="text-danger p-3 text-center">-7.33</td>
                                        <td className="text-danger p-3 text-center">-7.33</td>
                                      </tr>
                                      <tr>
                                        <td className="p-3">Price Change</td>
                                        <td className="p-3 text-center">8</td>
                                        <td className="p-3 text-center">-0.90</td>
                                        <td className="text-danger p-3 text-center">-7.24</td>
                                        <td className="text-danger p-3 text-center">-7.24</td>
                                      </tr>
                                      <tr>
                                        <td className="p-3">Personal contact</td>
                                        <td className="p-3 text-center">5</td>
                                        <td className="p-3 text-success text-center">0.07</td>
                                        <td className="p-3 text-success text-center">0.33</td>
                                        <td className="p-3 text-success text-center">0.33</td>
                                      </tr>
                                      <tr>
                                        <td className="p-3">Book Holiday</td>
                                        <td className="p-3 text-center">5</td>
                                        <td className="p-3 text-success text-center">0.07</td>
                                        <td className="p-3 text-success text-center">0.33</td>
                                        <td className="p-3 text-success text-center">0.33</td>
                                      </tr> 
                                    </tbody>
                                  </table>
                                 
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 px-lg-0 responses_for_coupon border-top border-bottom">
                              <div >
                                <h6 className="font-12 mb-0 border-bottom px-4 py-3 text-dark">Coupon Code</h6>
                                <div className="p-4">
                                  <div className="d-flex py-3">
                                    <span className="text-danger mr-3">1</span>
                                    <div className="border-bottom pb-4">
                                      <p className="font-12 mb-0">Introduces to this via the other half and so far I have been very impressed with how easily payments and direct debits can be managed. Setting up a <span className="text-danger">coupon code </span> is a breeze , card arrived promptly and support which can be done seemlessly from withing the app. this and no feel while abroad.</p>
                                      <small className="text-muted">3 hours</small>
                                    </div>
                                  </div>
                                  <div className="d-flex py-3">
                                    <span className="text-danger mr-3">5</span>
                                    <div className="border-bottom pb-4">
                                      <p className="font-12 mb-0">Too bad the voucher codes are on the internet classic and not the app . My order was canceled for no reason.</p>
                                      <small className="text-muted">Yerterday . Review</small>
                                    </div>
                                  </div>
                                  <div className="d-flex py-3">
                                    <span className="text-muted mr-3">7</span>
                                    <div className="border-bottom pb-4">
                                      <p className="font-12 mb-0">True to order deliverytimes respected and <span className="text-danger">coupon code </span> ok.I recommend
                                        .
                                      </p>
                                      <small className="text-muted">3 days ago . Review</small>
                                    </div>
                                  </div>
                                  <div className="d-flex py-3">
                                    <span className="text-danger mr-3">5</span>
                                    <div className="border-bottom pb-4">
                                      <p className="font-12 mb-0">Used for the second time money received on time .Cheaper than my bank and I ever got a <span className="text-danger">coupon code </span> to tarnfer for free.</p>
                                      <small className="text-muted">Yerterday . Review</small>
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
                <div role="tabpanel" className="tab-pane" id="graph-tab">
                  <div className="row">
                    <div className="col-md-12 tab-content review2-keyword2s">
                      <div role="tabpanel" className="tab-pane active" id="list-tab">
                        <div>
                          <div className="row">
                            <div className="col-md-12">
                              <ul className="nav nav-tabs border-0 mb-0 ml-auto" role="tablist">
                                <li role="presentation" className="mr-2">
                                  <a href="#summary" aria-controls="summary" role="tab" data-toggle="tab" className="active text-uppercase font-weight-600 font-12" aria-selected="true">
                                    summary
                                  </a>
                                </li>
                                <li role="presentation" className="mr-2">
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
                          <div className="row tabing-content">
                            <div className="col-md-12 tab-content bg-white">
                              <div role="tabpanel" className="tab-pane h-100 active" id="summary">
                                <h4 className="py-3">Summary</h4>
                                <img src="assets/images/a-graph.png" className="img-fluid" alt="graph1" />
                              </div>
                              <div role="tabpanel" className="tab-pane  h-100" id="review2">
                                <h4 className="py-3">Review</h4>
                                <img src="assets/images/a-graph.png" className="img-fluid" alt="graph2" />
                              </div>
                              <div role="tabpanel" className="tab-pane h-100" id="keyword2">
                                <h4 className="py-3">Keyword</h4>
                                <img src="assets/images/a-graph.png" className="img-fluid" alt="graph3" />
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
        );
          }

export default Insight;