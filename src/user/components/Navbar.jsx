import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {globalVar} from '../components/config'
function Navbar(props) {
   const[brand,setBrand]=useState([{}])
    const[product,setProduct]=useState([{}])
    const[productDetail,setProductDetail]=useState([{}])

   useEffect(()=>{
    let token=localStorage.getItem('token')
    axios.get(globalVar.REACT_APP_base_url+'/api/v1/brands',{
       headers: {
          'Authorization': 'Bearer ' + token
        }
     })
    .then((res) => {
      setBrand(res.data.data)
     // console.log(res.data.data)
     if(res.data.data.length!==0){
       res.data.data.forEach(d=>{
        // console.log(d)
      return axios.get(`${globalVar.REACT_APP_base_url}/api/v1/brands/${d.id}`,{
       headers: {
          'Authorization': 'Bearer ' + token
        }}).then((res)=>{
        console.log(res.data.data)
          product.push(res.data.data)
          if(res.data.data.product.length)
          {
            res.data.data.product.forEach(d=>{
              return axios.get(`https://api-4sight.rudraserver.com/api/v1/insight-miner?product_id=${d.product_id}`,{
       headers: {
         'Authorization': 'Bearer ' + token
       } })
       .then((res)=>{
        // console.log(res.data)
         //console.log(productDetail)
          productDetail.push(res.data)
          //console.log(productDetail)
       })
            })
          }
        })}
          
        )}})
    .catch((err)=>{
       console.log(err)
    })
 },[])  

 

 const handleChange=(e)=>{
  var index = e.target.selectedIndex;
  var optionElement = e.target.childNodes[index]
  var option =  optionElement.getAttribute('id');
  let token=localStorage.getItem('token');
 // console.log(productDetail)
  /* let p=product.filter(u=>u.id==option);
  console.log(p)
  setProduct(p)
console.log(product) */
 
    axios.get(`https://api-4sight.rudraserver.com/api/v1/brands/${option}`,{
  headers: {
    'Authorization': 'Bearer ' + token
  }}).then((res)=>{
   //console.log(res.data)
   setProduct(res.data.data.product)

  }).catch((err)=>{
    console.log(err)
  })  
 }

 return (
 <>
  <div className="position-sticky p-0 shadow z-index-1 bg-white px-sm-4 px-3">
            <div className="row mr-lg-0">
              <div className="col-md-12">
                <div className="navbar-custom   position-relative d-flex align-items-center">
                  <Link to="/" className="d-md-none mr-3"><img src="assets/images/logo-sm.png" className="img-fluid logo-mob-icon" alt="img" /></Link>
                  <button type="button" className="top-togglebar bg-transparent border-0">
                    <img src="assets/images/menu.svg" className="img-fluid" alt="img" />
                  </button>
                  <div className="theme-custom-select position-relative ml-3 diable-enable-select border-0 brand-dropdown">
                    <select className="form-control  border-0" onChange={handleChange}>
                        {brand.map((u,i)=>
                       <option key={i} className="py-4" value="alert type" id={u.id} >{u.company}</option>
                      )}   
                      {/*  <option className="py-4" value="alert type">Royal Canin</option>
                      <option className="py-4" value="alert">Zevo</option>    */}
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
 {/* <div className="position-sticky p-0 shadow z-index-1 bg-white px-sm-4 px-3">
  <div className="row mr-lg-0">
    <div className="col-md-12">
      <div className="navbar-custom   position-relative d-sm-flex align-items-center  pb-sm-0 pb-3">
        <Link to="/" className="d-md-none mr-3"><img src="assets/images/logo-sm.png" className="img-fluid logo-mob-icon" alt="img" /></Link>
        <button type="button" className="top-togglebar bg-transparent border-0 mt-sm-0 mt-3">
          <img src="assets/images/menu.svg" className="img-fluid" alt="img" />
        </button>
        <div className="app-search position-relative  ml-sm-4  mt-sm-0 mt-3">
          <form role="search">
            <a href="#!" className="search-icon position-absolute  rounded-circle d-flex align-items-center justify-content-center h-100">
              <img src="assets/images/search-icon.svg" className="img-fluid w-18" alt="img" /></a>
            <input type="text" id="AllCompo" placeholder="Search" className="form-control ui-autocomplete-input  border px-5 border-0 search-input" autoComplete="off" />
          </form>
        </div>
        <div className="ml-auto user-profile-name">
          <ul className="list-unstyled mb-0">
            <li className="list-inline-item mx-2 mb-0" />
            <li className="list-inline-item user-setting opacity-half">
              <div className="dropdown profile-detail dashboard-profile py-1 pr-sm-3">
                <a className="dropdown-toggle mr-2" href="#!" id="dropdown03" data-toggle="dropdown"  aria-expanded="true">
                  <span className="d-none d-sm-inline-block pr-2 font-poppins">Ricky Smith</span>
                </a>
                <div className="dropdown-menu d-none " aria-labelledby="dropdown03">
                </div>
              </div></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
 */}
</>
    )}

    export default Navbar;