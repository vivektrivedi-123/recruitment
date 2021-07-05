
import React,{useState,useEffect} from 'react'
import axios from '../common/axios'
import Protected from '../common/Protected'
import Dashboard from '../component/Dashboard';
import Recruite from '../component/recruitment/Recruite';
import Conversation from '../component/recruitment/Conversation';
import JobPosting from '../component/JobPosting';
import Candidates from '../component/Candidates';
import TalentPool from '../component/TalentPool';
import Hire from '../component/hiring/Hire'
import Settings from '../component/settings/Settings';
import Location from '../component/location/Location'
import Department from '../component/department/Department';
import SubDepartment from '../component/department/SubDepartment';
import Company from '../component/company/Company';
import DeclineReason from '../component/offer/DeclineReason';
import ApprovalReject from '../component/offer/ApprovalReject';
import Employee from '../component/employee/Employee';
import EditEmployee from '../component/employee/EditEmployee';
import EmployeeList from '../component/employee/EmployeeList';
import CandidateDash from '../component/CandidateDash';
import NewTask from '../component/newTask/NewTask';
import Tag from '../component/tags/Tag';
import {  useHistory,Redirect } from "react-router-dom"
import ManageRole from './roles/ManageRole';
import Email from './email/Email';
import index from './csv';
import Team from './teams/Team';
import Preference from './preference/Preference';
import JobField from './jobfield/JobField';
import Business from './business/Business';
import Vendors from './vendors/Vendors';
import CandidateReject from './candidateRejectReason/CandidateReject';
import Template from './template/Template';
import JobEmbed from './jobEmbed/JobEmbed';
import Social from './social/Social'
import Integration from './integration/Integration';
import Csv2 from './csv2/Csv2';
import Account from './account/Account';
import Fields from './Fields/Fields'
import CareerSite from './career-site/CareerSite';
import EmailNotification from './notification/EmailNotification';
function Load() {
    const[location,setLocation]=useState([])
    const [dept,setDept]=useState([])
  const[job,setJob]=useState([])
  const[role,setRole]=useState([])

  // useEffect(()=>{
  //   console.log('hi')
  //      setInterval(()=>{
  //       localStorage.clear();
  //       <Redirect to="/login" />
  //      },1000*60*60)
  //  },[])
                                                                                               

    // useEffect(
  
    //   () => {
        
    //     let timer1 = setInterval(() =>{
    //       localStorage.removeItem('login')
    //       console.log('logout')
    //      // history.push('/login')
    //     }, 1000*60);
  
    //     return () => {
    //       clearTimeout(timer1);
    //     };
       
    //   },
     
    //   []
    // );
  
  
  
  
  
  useEffect(()=>{
    
    // setTimeout(()=>{
      const token=localStorage.getItem('login')
      axios.get('location',{
        headers: {
          'Authorization': 'Bearer '+ token
       }
      }).then((res)=>{
        console.log(res.data.results)
        setLocation(res.data.results)
      }).catch((err)=>{
        console.log(err)
      })
    // },25000)
    
  },[])
  
  
  useEffect(()=>{
    console.log('dept1')
    // setTimeout(()=>{
      const token=localStorage.getItem('login')
      axios.get('department',{
        headers: {
          'Authorization': 'Bearer '+ token
       }
      }).then((res)=>{
        console.log('dept',res.data.results)
      setDept(res.data.results)
      }).catch((err)=>{
        console.log(err)
      })
    // },25000)
   
    },[])
  
  
    useEffect(()=>{
      
    //   setTimeout(()=>{
        const token=localStorage.getItem('login')
        axios.get('job',{
          headers: {
            'Authorization': 'Bearer '+ token
         }
        }).then((res)=>{
          console.log('job',res.data.results)
        setJob(res.data.results)
        }).catch((err)=>{
          console.log(err)
        })
    //   },25000)
     
      },[])
  

      useEffect(()=>{
      
        //   setTimeout(()=>{
            const token=localStorage.getItem('login')
            axios.get('role',{
              headers: {
                'Authorization': 'Bearer '+ token
             }
            }).then((res)=>{
             // console.log('job',res.data.results)
            setRole(res.data)
            }).catch((err)=>{
              console.log(err)
            })
        //   },25000)
         
          },[])



    return (
        <>
      <Protected path='/' exact component={Dashboard}></Protected>
        <Protected path="/hire/:id" exact >
            <Hire data={job}/>
        </Protected>
        <Protected path='/recruitment/recruite' exact >
          <Recruite data={job}/>
        </Protected>
        <Protected path='/recruitment/conversation' exact component={Conversation}></Protected>
        <Protected path='/job/posting' exact component={JobPosting}></Protected>
        <Protected path='/candidates' exact component={Candidates}></Protected>
        <Protected path='/talent/pool' exact component={TalentPool}></Protected>
        <Protected path="/settings" exact component={Settings}></Protected>
        <Protected path='/locations' exact>
          <Location data={location}/>
        </Protected>
        <Protected path='/departments' exact >
          <Department data={dept}/>
        </Protected>
        <Protected path='/sub-departments' exact component={SubDepartment}></Protected> 
        <Protected path='/company' exact component={Company}></Protected>
        <Protected path='/decline-reason' exact component={DeclineReason}></Protected>
        <Protected path='/approval-reject' exact component={ApprovalReject}></Protected>
        <Protected path='/employee' exact component={Employee}></Protected>
        <Protected path='/employee-edit/:id' exact component={EditEmployee}></Protected>
        <Protected path='/employee-list' exact component={EmployeeList}></Protected>
        <Protected path='/candidate-dashboard' exact component={CandidateDash}></Protected>
        <Protected path="/new-task" component={NewTask} exact></Protected>
        <Protected path='/tags' component={Tag} exact></Protected>
        <Protected path='/manage/roles' exact ><ManageRole data={role}/></Protected>
        <Protected path="/email" component={Email} exact></Protected>
        <Protected path="/csv" component={index} exact></Protected>
        <Protected path="/teams" component={Team} exact></Protected>
        <Protected path="/Preferences" component={Preference} exact></Protected>
        <Protected path="/job-fields" component={JobField} exact></Protected>
        <Protected path="/business-units" exact component={Business}></Protected>
        <Protected path="/vendors" exact component={Vendors}></Protected>
        <Protected path="/candidate-reject-reason" exact component={CandidateReject}></Protected>
        <Protected path="/templates" exact component={Template}></Protected>
        <Protected path="/job-embeds" exact component={JobEmbed}></Protected>
        <Protected path="/social" exact component={Social}></Protected>
        <Protected path="/integrations" exact component={Integration}></Protected>
        <Protected path="/csv-file2" exact component={Csv2}></Protected>
        <Protected path="/account" exact component={Account}></Protected>
        <Protected path="/fields" exact component={Fields}></Protected>
        <Protected path="/career-site" exact component={CareerSite}></Protected>
        <Protected path="/email-notifications" exact component={EmailNotification}  />
        </>
    )
}

export default Load
