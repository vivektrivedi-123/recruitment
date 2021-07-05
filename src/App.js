import React,{useEffect,useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './component/Login'

import Load from './component/Load';
function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route path="/login" component={Login}></Route>
    <Load/>
      </Switch>
    </Router>

      
    </>
  );
}

export default App;
