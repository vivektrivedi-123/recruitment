import React,{useEffect} from 'react'
import Navbar from './Navbar';
import ToggleBar from '../../common/Util';
//import Barchart from './Barchart';
//import Areachart from './Areachart';
export default function Overview() {

  useEffect(()=>{
    ToggleBar()
    },[])

    return (
        <>
         <div className="page-wrapper position-relative overflow-hidden">
          <Navbar />  
   <div className="page-content-tab p-sm-4 p-3 overflow-auto">
  <div className="row mt-4 mt-sm-0">
    <div className="col-md-12">
      <h3 className="font-poppins font-weight-medium text-welcome mb-4">Overview</h3>
    </div>
  </div>
  <div className="container-sm px-0">
    <div className="row mb-lg-4 pb-3">
      <div className="col-sm-6 col-lg-3  mb-lg-0 mb-4 pb-lg-0 pb-3 d-flex">
        <div className="bg-white shadow p-sm-4 p-3 rounded d-flex flex-column h-auto w-100">
          <div >
            <h3 className="mb-1 font-weight-semibold">71,503</h3>
            <h6 className="font-poppins text-muted">Total Reviews</h6>
          </div>
          <img src="assets/images/graph-6.png" className="img-fluid mt-auto" alt="graph" /> 
      {/*   <Barchart/> */}
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 mb-lg-0 mb-4 pb-lg-0 pb-3 d-flex">
        <div className="bg-white shadow  p-sm-4 p-3 rounded  d-flex flex-column h-auto w-100">
          <div >
            <h3 className="mb-1  font-weight-semibold">9,503</h3>
            <h6 className=" font-poppins text-muted">Average Star Rating</h6>
          </div>
          <img src="assets/images/graph-3.png" className="img-fluid mt-auto" alt="graph" />
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 mb-lg-0 mb-4 pb-lg-0 pb-3 d-flex">
        <div className="bg-white shadow  p-sm-4 p-3 rounded  d-flex flex-column h-auto w-100">
          <div >
            <h3 className="mb-1  font-weight-semibold">71,503</h3>
            <h6 className="font-poppins text-muted">Social Media Engagement</h6>
          </div>
          <img src="assets/images/graph-4.png" className="img-fluid mt-auto" alt="graph" /> 
       
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 mb-lg-0 mb-4 pb-lg-0 pb-3 d-flex">
        <div className="bg-white shadow  p-sm-4 p-3 rounded  d-flex flex-column  h-auto w-100">
          <div >
            <h3 className="mb-1  font-weight-semibold">9,503</h3>
            <h6 className=" font-poppins text-muted">Total Revenue This Year</h6>
          </div>
          <img src="assets/images/graph-5.png" className="img-fluid mt-auto" alt="graph" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-xl-3 mb-xl-0 pb-md-0 mb-4 pb-md-3 d-flex">
        <div className="bg-white shadow rounded p-sm-4 p-3 h-auto w-100">
          <div className="p-2 d-flex">
            <div className="d-flex align-items-center justify-content-center overview-list bg-info rounded-circle mr-4">
              <img src="assets/images/rating.svg" className="img-fluid w-30" alt="rating" />
            </div>
            <div className="overview-list-detail">
              <h5 className="font-poppins font-weight-medium text-muted mb-0">Average Ratings</h5>
              <h2 className="display-4 font-weight-normal mb-0">4.5/5</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 mb-xl-0 pb-md-0 mb-4 pb-md-3 d-flex">
        <div className="bg-white shadow rounded p-sm-4 p-3 h-auto w-100">
          <div className="p-2 d-flex">
            <div className="d-flex align-items-center justify-content-center overview-list bg-warning-shade1 rounded-circle mr-4">
              <img src="assets/images/setting-2.svg" className="img-fluid w-35" alt="mention" />
            </div>
            <div className="overview-list-detail">
              <h5 className="font-poppins font-weight-medium text-muted mb-0">Mentions</h5>
              <h2 className="display-4 font-weight-normal mb-0">55%</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 mb-xl-0 pb-md-0 mb-4 pb-md-3 d-flex">
        <div className="bg-white shadow rounded  p-sm-4 p-3  h-auto w-100">
          <div className="p-2 d-flex">
            <div className="d-flex align-items-center justify-content-center overview-list bg-success rounded-circle mr-4">
              <img src="assets/images/wisr.svg" className="img-fluid w-35" alt="wisr" />
            </div>
            <div className="overview-list-detail">
              <h5 className="font-poppins font-weight-medium text-muted mb-0">Net Sentiment</h5>
              <h2 className="display-4 font-weight-normal mb-0">57%</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 mb-xl-0 pb-md-0 mb-4 pb-md-3 d-flex">
        <div className="bg-white shadow rounded p-sm-4 p-3  h-auto w-100">
          <div className="p-2 d-flex">
            <div className="d-flex align-items-center justify-content-center overview-list bg-purple rounded-circle mr-4">
              <img src="assets/images/words.svg" className="img-fluid w-30" alt="words" />
            </div>  
            <div className="overview-list-detail">
              <h5 className="font-poppins font-weight-medium text-muted mb-0">Total Words</h5>
              <h2 className="display-4 font-weight-normal mb-0">50</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4 mb-5">
      <div className="col-md-12">
        <div className="bg-white shadow rounded h-100">
          <div className="row mx-0">
            <div className="col-lg-8  border-right p-sm-4 p-3">
              <div className="p-2">
                <div className="d-sm-flex w-100 align-items-center">
                  <h4 className="font-weight-medium font-poppins text-exp ">Consumer Experience</h4>
                  <a href="#!" className="ml-auto text-primary">View More</a>
                </div>
                <h6 className="text-muted ">16 Nov,2020 - 15 Dec,2020</h6>
                <img src="assets/images/graph-1.jpg" className="mt-5 img-fluid" alt="graph" />
              </div>
            </div>
            <div className="col-lg-4 px-0">
              <div className="text-center border-bottom py-3 mt-4">
                <h6 className="font-poppins text-muted font-weight-medium">Reviews</h6>
                <h3 className="font-weight-bold font-poppins color-light-black">450</h3>
              </div>
              <div className="text-center border-bottom py-3 mt-4">
                <h6 className="font-poppins text-muted font-weight-medium">Positive Reviews</h6>
                <h3 className="font-weight-bold font-poppins color-light-black">450</h3>
              </div>
              <div className="text-center border-bottom py-3 mt-4">
                <h6 className="font-poppins text-muted font-weight-medium">Average Review Score</h6>
                <h3 className="font-weight-bold font-poppins color-light-black">450</h3>
              </div>
              <div className="text-center border-bottom py-3 mt-4">
                <h6 className="font-poppins text-muted font-weight-medium">Delta in Star Rating</h6>
                <h3 className="font-weight-bold font-poppins color-light-black">450</h3>
              </div>
              <div className="text-center  py-3 mt-4">
                <h6 className="font-poppins text-muted font-weight-medium">Delta in Star Rating</h6>
                <h3 className="font-weight-bold font-poppins color-light-black">450</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-4">
      <div className="col-lg-6 mb-lg-0 mb-4 pb-lg-0 pb-4">
        <div className="bg-white shadow rounded p-sm-4 p-3 h-100">
          <div className="p-2">
            <div className="d-sm-flex w-100 align-items-center">
              <h4 className="font-weight-semibold font-poppins text-exp ">Word Impact</h4>
              <a href="#!" className="ml-auto text-primary">View More</a>
            </div>
            <h6 className="text-muted ">Brand Pet Food </h6>
            <table className="table mt-4">
              <tbody><tr>
                  <td className="py-4 font-weight-semibold border-0">Joy</td>
                  <td className="text-right py-4 font-weight-semibold text-muted border-0">4238</td>
                </tr>
                <tr>
                  <td className="py-4 font-weight-semibold">Love</td>
                  <td className="text-right py-4 font-weight-semibold text-muted">1005</td>
                </tr>
                <tr>
                  <td className="py-4 font-weight-semibold">Pet</td>
                  <td className="text-right py-4 font-weight-semibold text-muted">914</td>
                </tr>
                <tr>
                  <td className="py-4 font-weight-semibold">Health</td>
                  <td className="text-right py-4 font-weight-semibold text-muted">281</td>
                </tr>
              </tbody></table>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="bg-white shadow rounded p-sm-4 p-3 h-100">
          <div className="p-2">
            <div className="d-sm-flex w-100 align-items-center">
              <h4 className="font-weight-semibold font-poppins text-exp ">Ratings</h4>
              <a href="#!" className="ml-auto text-primary">View More</a>
            </div>
            <ul className="list-unstyled d-sm-flex rating-detail-ul mt-3">
              <li className="list-inline-item  border-0  text-muted p-0">
                Users 
                <h5 className="font-weight-bold  font-poppins">45.5K <small className="text-success">28%</small></h5>
              </li>
              <li className="list-inline-item  border-0  text-muted p-0">
                Sessions 
                <h5 className="font-weight-bold  font-poppins">87.2K <small className="text-success">40%</small></h5>
              </li>
              <li className="list-inline-item  border-0  text-muted p-0">
                Reviews Rate 
                <h5 className="font-weight-bold  font-poppins">87.2K  <small className="text-success">28%</small></h5>
              </li>
              <li className="list-inline-item  border-0  text-muted p-0">
                Session Duration 
                <h5 className="font-weight-bold  font-poppins">45.5K <small className="text-success">2m 18s</small></h5>
              </li>
            </ul>
            <img src="assets/images/graph-2.png" className="img-fluid mt-3" alt="graph" />
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
        </>
    )
}
