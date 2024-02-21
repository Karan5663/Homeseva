import React from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
//import Home from './Home';
import Home from './Home';
import Login from "./Login";
import Signup from "./Signup";
import AboutUsPage from "./aboutus";
const App =() =>{

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/aboutus"element={<AboutUsPage/>}/>
      </Routes>
    </Router>
  );
};
export default App