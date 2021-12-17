import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
// import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
// } from "react-router-dom";

function App() {
   const[mode ,setMode]=useState('light');
   const[alert ,setAlert]=useState(null);
    
    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1000);

    }

    const toggleMode=()=>
    {
      if(mode==='light')
        {
          setMode('dark');
          document.body.style.backgroundColor='#101540 ';
          showAlert("Dark mode has been enable","success");
        }
        if(mode==='dark')
        {
          setMode('light');
          document.body.style.backgroundColor='white';
          showAlert("Light mode has been enable","success");
        }
    }
    return (
  <>
    {/* <Router>  */}
   <Navbar mode={mode} toggleMode={toggleMode} /> 
   <Alert alert={alert}/> 
     {/* <Switch>  */}
           {/* <Route path="/about">  */}
             {/* <About />  */}
           {/* </Route>  */}
   {/* /        <Route path="/">  */}
          <TextForm  showAlert={showAlert} mode={mode} heading="Enter the text to Analyze below "/>
           {/* </Route>  */}
         {/* </Switch>  */}
   {/* </Router>  */}
     </> 
);

}
export default  App;
