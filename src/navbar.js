// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  return (
    <div className="App-options">
   
 
    <select >
      <option value="location">Select Location</option>
      <option value="location">Mumbai</option>
      <option value="location">Nagpur</option>
      <option value="location">Sambajinagar</option>
      {/* Add more location options as needed */}
    </select>
    {/* <input type="text" placeholder="Search services"  /> */}
    <input type="text" placeholder="Search services" style={{ WebkitTextFillColor: 'black', color: 'black',width:'400px'}} />

      
        <nav>
            <ul> 
            <Link to ="/Home">Home</Link> 
             <Link to ="/aboutus">About us</Link> 
            <Link to ="/Ourservices">Our service</Link> 
            <Link to ="/Contact">Contact  </Link> 
            <Link to ="/Login">Login</Link> 
            <Link to ="/HomeCleaning">HomeCleaning</Link> 
            </ul>
        </nav>
    
    
  </div>
  
  );
}

export default Navbar;