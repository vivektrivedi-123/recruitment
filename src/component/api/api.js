import axios from '../../common/axios'
export default  function geDept(){
    const token=localStorage.getItem('login')
    axios.get('department',{
      headers: {
        'Authorization': 'Bearer '+ token
     }
    }).then((res)=>{
      console.log('dept',res.data.results)
      return res.data.results
    //setDept(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
}