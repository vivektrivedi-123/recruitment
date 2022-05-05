import axios from 'axios';
import {globalVar} from '../user/components/config'

export const getBrandOfCurrentUser=(token)=>{
   return axios.get(globalVar.REACT_APP_base_url+'/api/v1/brands',{
        headers: {
           'Authorization': 'Bearer ' + token
         }
     })
}

export const getInsightMinorProductOfCurrentUser=(brand_id,token)=>{
    return axios.get(`${globalVar.REACT_APP_base_url}/api/v1/brands/${brand_id}`,{
        headers: {
           'Authorization': 'Bearer ' + token
         }})
}

export const getInsightMinorProductDetailOfCurrentUser=(product_id,token)=>{
    return axios.get(`${globalVar.REACT_APP_base_url}/api/v1/insight-miner?product_id=${product_id}`,{
        headers: {
          'Authorization': 'Bearer ' + token
        }})
}

export const getDashboarData=(brandId,token)=>{
  return axios.get(`${globalVar.REACT_APP_base_url}/api/v1/dashboard?brand_id=${brandId}`,{
    headers: {
      'Authorization': 'Bearer ' + token
    }})
}


export const getLaunchMonitor=(brandId,token)=>{
  return axios.get(`${globalVar.REACT_APP_base_url}/api/v1/launch-monitor?brand_id=${brandId}`,{
    headers: {
      'Authorization': 'Bearer ' + token
    }})
}