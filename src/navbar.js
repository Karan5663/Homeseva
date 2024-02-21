// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="App-options">
    <select>
      <option value="location">Select Location</option>
      <option value="location">Mumbai</option>
      <option value="location">Nagpur</option>
      <option value="location">Sambajinagar</option>
      {/* Add more location options as needed */}
    </select>
    <input type="text" placeholder="Search services"  />
        <nav>
            <ul> 
            <Link to ="/aboutus">About us</Link> 
            <Link to ="/Login">Our service</Link> 
            <Link to ="/Login">Contact  </Link> 
                 <Link to ="/Login">Login</Link> 
            </ul>
        </nav>
    
  </div>
  
  );
}

export default Navbar;