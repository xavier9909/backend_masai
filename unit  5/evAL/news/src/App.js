import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';

import {Addjobform} from "./components/addjob"
import {Userdashboard} from "./components/userdashboard";
import {Applyjob} from "./components/apply";
import { PrivateRoute } from './components/privaterouter';
import { Login } from './components/login';

import {Admin} from "./components/dashboard"

function App() {
  return (
    <div className="App">
  <Routes>
     <Route path="/" element ={
        <PrivateRoute>
       <Addjobform/>
       </PrivateRoute>
     }/>

 <Route path="/jobs" element ={
       <Userdashboard/>
         
     }/>



<Route path="/admin" element ={
      <PrivateRoute>
       <Admin/>
       </PrivateRoute>     
         
     }/>  

<Route path="/apply/:id" element ={
       <Applyjob/>
         
     }/>

<Route path="/login" element ={<Login/>}/>
    
     <Route path="*" element ={<div>Page not found</div>}/>
     </Routes> 
    </div>
  );
}

export default App;
