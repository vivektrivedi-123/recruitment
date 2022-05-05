import React from 'react'
import './App.css';
import Dashboard from './user/components/Dashboard';
import {BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import Overview from './user/components/Overview';
import Login from './common/Login'

//import ToggleBar from './common/Util'
import MyFile from './user/components/MyFile';
//import LaunchMonitor from './user/components/LaunchMonitor';
//import InsightMiner from './user/components/InsightMiner';
import KeyDriver from './user/components/KeyDriver';
import Logout from './common/Logout';
import loadable from 'react-loadable'
import InsightMiner from './user/components/InsightMiner';

import Protected from './user/components/Protected'
import NotFound from './user/components/NotFound';
//import Loader from "react-loader-spinner";
/* const Insight=loadable({
  loader:()=>import('./user/components/Insight'),
  loading:()=><div>Loading.....</div>
}) 
 */
const LaunchMonitor=loadable({
  loader:()=>import('./user/components/LaunchMonitor'),
  loading:()=><div>Loading.....</div>
})

//const InsightMiner = React.lazy(() => import('./user/components/InsightMiner'))



function App() {

  /* window.onbeforeunload = function() {
    localStorage.clear()
    }
 */

  return ( 
    <Router>
      <Switch> 
      <Route exact path="/login" component={Login}></Route>
      <Protected exact path='/logout' component={Logout}/>
 {/* <div className="wrapper overflow-hidden">
        <div className="d-flex">
            <Sidebar/>  */}
            <Protected exact path='/' component={Dashboard}></Protected>
           {/*  <Protected exact path="/" ><Dashboard name={name} image={image} /> </Protected> */}
            <Protected exact path="/overview" component={Overview}></Protected>
            <Protected exact path='/myfiles' component={MyFile}></Protected>
            <Protected exact path="/launch-monitor" component={LaunchMonitor}></Protected>
            <Protected exact path="/insight-miner" component={InsightMiner}></Protected>
          {/*   <Protected exact path="/insight-miner"><Insight brands={brand} products={requests} productDetails={details}></Insight></Protected> */}
     
            <Protected exact path="/key-drivers" component={KeyDriver}></Protected>
      {/* </div>
      </div>  */}
      <Route component={NotFound}></Route>
      </Switch>
    
    </Router>  
 
  );
}

export default App;
