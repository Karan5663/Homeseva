// // import React from "react";
// // import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
// // import Home from './Screens/Home';
// // import Login from "./Screens/Login";
// // import Signup from "./Screens/Signup";
// // import AboutUsPage from "./Screens/aboutus";
// // import Contact from "./Screens/Contact";
// // import Ourservices from "./Screens/Ourservices";
// // import HomeCleaning from "./Screens/HomeCleaning";
// // import Serviceprovider from "./Screens/Serviceprovider";
// // import Contactform from "./Screens/contactform";
// // import HomePainting from "./Screens/HomePainting";
// // import Plumbing from "./Screens/Plumbing";
// // import Electrician from "./Screens/Electrician";
// // import PestControl from "./Screens/PestControl";
// // import HomeAppliances from "./Screens/HomeAppliances";
// // import ProviderLogin from "./Screens/ProviderLogin";
// // import PostService from "./Screens/PostService";
// // import UserInfoPage from "./Screens/UserInfoPage";
// // import ProductContainer from "./Screens/ProductContainer";
// // import Tp from "./Screens/Tp";
// // import Gotopage from "./Screens/Gotopage";
// // import Otherservices from "./Screens/otherservice";
// // import AppContext from "./config/Context";
// // import Provuser from "./Screens/provuser";
// // import ProviderDetails from "./Screens/ProviderDetails";

// // const App =() =>{

// //   return(
// //     <Router>
// //       <AppContext>
        
      
// //       <Routes>
// //         <Route path="/" element={<Home/>}/>
// //         <Route path="/Home" element={<Home/>}/>
// //         <Route path="/Login" element={<Login/>}/>
// //         <Route path="/Signup" element={<Signup/>}/>
// //         <Route path="/aboutus"element={<AboutUsPage/>}/>
// //         <Route path="/Contact"element={<Contact/>}/>
// //         <Route path="/Ourservices"element={<Ourservices/>}/>
// //         <Route path="/HomeCleaning"element={<HomeCleaning/>}/>
// //         <Route path="/Serviceprovider"element={<Serviceprovider/>}/>
// //         <Route path="/contactform"element={<Contactform/>}/>
// //         <Route path="/HomePainting"element={<HomePainting/>}/>
// //         <Route path="/Plumbing"element={<Plumbing/>}/>
// //         <Route path="/Electrician"element={<Electrician/>}/>
// //         <Route path="/PestControl"element={<PestControl/>}/>
// //         <Route path="/HomeAppliances"element={<HomeAppliances/>}/>
// //         <Route path="/ProviderLogin"element={<ProviderLogin/>}/>
// //         <Route path="/PostService"element={<PostService/>}/>
// //         <Route path="/UserInfoPage"element={<UserInfoPage/>}/>
// //         <Route path="/ProductContainer"element={<ProductContainer/>}/>
// //         <Route path="/Tp"element={<Tp/>}/>
// //         <Route path="/Gotopage"element={<Gotopage/>}/>
// //         {/* <Route path="/otherservice"element={<Otherservices/>}/> */}
// //         <Route path="/otherservice"element={<Otherservices/>}/>
// //         <Route path="/provuser"element={<Provuser/>}/>

// //         <Route path="/ProviderDetails"element={<ProviderDetails/>}/>
        

// //       </Routes>
// //       </AppContext>
// //     </Router>
// //   );
// // };
// // export default App

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Screens/Home';
// import Login from './Screens/Login';
// import Signup from './Screens/Signup';
// import AboutUsPage from './Screens/aboutus';
// import Contact from './Screens/Contact';
// import Ourservices from './Screens/Ourservices';
// import HomeCleaning from './Screens/HomeCleaning';
// import Serviceprovider from './Screens/Serviceprovider';
// import Contactform from './Screens/contactform';
// import HomePainting from './Screens/HomePainting';
// import Plumbing from './Screens/Plumbing';
// import Electrician from './Screens/Electrician';
// import PestControl from './Screens/PestControl';
// import HomeAppliances from './Screens/HomeAppliances';
// import ProviderLogin from './Screens/ProviderLogin';
// import PostService from './Screens/PostService';
// import UserInfoPage from './Screens/UserInfoPage';
// import ProductContainer from './Screens/ProductContainer';
// import Tp from './Screens/Tp';
// import Gotopage from './Screens/Gotopage';
// import Otherservices from './Screens/otherservice';
// import Provuser from './Screens/provuser';
// import ProviderDetails from './Screens/ProviderDetails';
// import { ContextProvider } from './config/Context1';

// const App = () => {
//   return (
//     <Router>
//       <ContextProvider>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Home" element={<Home />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Signup" element={<Signup />} />
//           <Route path="/aboutus" element={<AboutUsPage />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/Ourservices" element={<Ourservices />} />
//           <Route path="/HomeCleaning" element={<HomeCleaning />} />
//           <Route path="/Serviceprovider" element={<Serviceprovider />} />
//           <Route path="/contactform" element={<Contactform />} />
//           <Route path="/HomePainting" element={<HomePainting />} />
//           <Route path="/Plumbing" element={<Plumbing />} />
//           <Route path="/Electrician" element={<Electrician />} />
//           <Route path="/PestControl" element={<PestControl />} />
//           <Route path="/HomeAppliances" element={<HomeAppliances />} />
//           <Route path="/ProviderLogin" element={<ProviderLogin />} />
//           <Route path="/PostService" element={<PostService />} />
//           <Route path="/UserInfoPage" element={<UserInfoPage />} />
//           <Route path="/ProductContainer" element={<ProductContainer />} />
//           <Route path="/Tp" element={<Tp />} />
//           <Route path="/Gotopage" element={<Gotopage />} />
//           <Route path="/otherservice" element={<Otherservices />} />
//           <Route path="/provuser" element={<Provuser />} />
//           <Route path="/ProviderDetails" element={<ProviderDetails />} />
//         </Routes>
//       </ContextProvider>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import AboutUsPage from './Screens/aboutus';
import Contact from './Screens/Contact';
import Ourservices from './Screens/Ourservices';
import HomeCleaning from './Screens/HomeCleaning';
import Serviceprovider from './Screens/Serviceprovider';
import Contactform from './Screens/contactform';
import HomePainting from './Screens/HomePainting';
import Plumbing from './Screens/Plumbing';
import Electrician from './Screens/Electrician';
import PestControl from './Screens/PestControl';
import HomeAppliances from './Screens/HomeAppliances';
import ProviderLogin from './Screens/ProviderLogin';
import PostService from './Screens/PostService';
import UserInfoPage from './Screens/UserInfoPage';
import ProductContainer from './Screens/ProductContainer';
import Tp from './Screens/Tp';
import Gotopage from './Screens/Gotopage';
import Otherservices from './Screens/otherservice';
import Provuser from './Screens/provuser';
import ProviderDetails from './Screens/ProviderDetails';
import { ContextProvider } from './config/Context1';

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Ourservices" element={<Ourservices />} />
          <Route path="/HomeCleaning" element={<HomeCleaning />} />
          <Route path="/Serviceprovider" element={<Serviceprovider />} />
          <Route path="/contactform" element={<Contactform />} />
          <Route path="/HomePainting" element={<HomePainting />} />
          <Route path="/Plumbing" element={<Plumbing />} />
          <Route path="/Electrician" element={<Electrician />} />
          <Route path="/PestControl" element={<PestControl />} />
          <Route path="/HomeAppliances" element={<HomeAppliances />} />
          <Route path="/ProviderLogin" element={<ProviderLogin />} />
          <Route path="/PostService" element={<PostService />} />
          <Route path="/UserInfoPage" element={<UserInfoPage />} />
          <Route path="/ProductContainer" element={<ProductContainer />} />
          <Route path="/Tp" element={<Tp />} />
          <Route path="/Gotopage" element={<Gotopage />} />
          <Route path="/otherservice" element={<Otherservices />} />
          <Route path="/provuser" element={<Provuser />} />
          <Route path="/providerdetails" element={<ProviderDetails />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default App;
