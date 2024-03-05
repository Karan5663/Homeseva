import React from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
//import Home from './Home';
import Home from './Home';
import Login from "./Login";
import Signup from "./Signup";
import AboutUsPage from "./aboutus";
import Contact from "./Contact";
import Ourservices from "./Ourservices";
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
      </Routes>
    </Router>
  );
};
export default App