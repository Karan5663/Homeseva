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
import Contactform from "./Screens/contactform";
import HomePainting from "./Screens/HomePainting";
import Plumbing from "./Screens/Plumbing";
import Electrician from "./Screens/Electrician";
import PestControl from "./Screens/PestControl";
import HomeAppliances from "./Screens/HomeAppliances";
import ProviderLogin from "./Screens/ProviderLogin";
import PostService from "./Screens/PostService";
import UserInfoPage from "./Screens/UserInfoPage";
import ProductContainer from "./Screens/ProductContainer";
import Tp from "./Screens/Tp";

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
        <Route path="/contactform"element={<Contactform/>}/>
        <Route path="/HomePainting"element={<HomePainting/>}/>
        <Route path="/Plumbing"element={<Plumbing/>}/>
        <Route path="/Electrician"element={<Electrician/>}/>
        <Route path="/PestControl"element={<PestControl/>}/>
        <Route path="/HomeAppliances"element={<HomeAppliances/>}/>
        <Route path="/ProviderLogin"element={<ProviderLogin/>}/>
        <Route path="/PostService"element={<PostService/>}/>
        <Route path="/UserInfoPage"element={<UserInfoPage/>}/>
        <Route path="/ProductContainer"element={<ProductContainer/>}/>
        <Route path="/Tp"element={<Tp/>}/>


      </Routes>
    </Router>
  );
};
export default App