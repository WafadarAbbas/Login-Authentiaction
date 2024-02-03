import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,BrowserRouter
} from "react-router-dom";
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import Home from './Component/Home';
import ForgetPassword from './Component/ForgetPassword';
import NewSubmit from './Component/NewSubmit';
import Prac from "./Prac";
import Header from './Component/Header';
import Form from './Component/form';
import Listt from './Component/listt';







function App() {
  return (

    <BrowserRouter>

   <Routes>
   <Route path="/header" element={<Header/>} />
   <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/forget-pass" element={<ForgetPassword />} />
          <Route path="/otp" element={<NewSubmit />} />
          <Route path="/Prac" element={<Prac/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/list" element={<Listt/>} />
    
  


   </Routes>
   
    </BrowserRouter>
  
    

 
  );
}

export default App;
