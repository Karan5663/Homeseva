import React from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from './Screens/Home';
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import AboutUsPage from "./Screens/aboutus";
import Contact from "./Screens/Contact";
import Ourservices from "./Screens/Ourservices";
import HomeCleaning from "./Screens/HomeCleaning";
import Serviceprovider from "./Screens/Serviceprovider";
const App =() =>{

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/aboutus"element={<AboutUsPage/>}/>
        <Route path="/Contact"element={<Contact/>}/>
        <Route path="/Ourservices"element={<Ourservices/>}/>
        <Route path="/HomeCleaning"element={<HomeCleaning/>}/>
        <Route path="/Serviceprovider"element={<Serviceprovider/>}/>
      </Routes>
    </Router>
  );
};
export default App