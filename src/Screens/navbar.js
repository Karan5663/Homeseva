import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../Img/logo.jpg'

const Navbar = () => {
  return (
    <div className="App-options">        
      <img
          src={logo} 
          alt="Logo"
          className="logo-image"
          style={{padding:10,marginTop:-12, height: '45px', width: '60px',borderRadius: '80px' }}
      />

      <select>
      <option value="" disabled selected> 
      📍Location 
        </option>
                 <option value="Mumbai">📍 Mumbai</option>
                 <option value="Pune">📍 Pune</option>
                 <option value="Nagpur">📍 Nagpur</option>
                 <option value="Nashik">📍 Nashik</option>
                 <option value="Aurangabad">📍 Aurangabad</option>
                 <option value="Solapur">📍 Solapur</option>
                 <option value="Amravati">📍 Amravati</option>
                 <option value="Kolhapur">📍 Kolhapur</option>
                 <option value="Thane">📍 Thane</option>
                 <option value="Pimpri-Chinchwad">📍 Pimpri-Chinchwad</option>
                 <option value="Sangli">📍 Sangli</option>
                 <option value="Malegaon">📍 Malegaon</option>
                 <option value="Jalgaon">📍 Jalgaon</option>
                 <option value="Akola">📍 Akola</option>
                 <option value="Latur">📍 Latur</option>
                 <option value="Dhule">📍 Dhule</option>
                 <option value="Ahmednagar">📍 Ahmednagar</option>
                 <option value="Kalyan-Dombivli">📍 Kalyan-Dombivli</option>
                 <option value="Navi Mumbai">📍 Navi Mumbai</option>
                 <option value="Ichalkaranji">📍 Ichalkaranji</option>
      </select>
      <input type="text" placeholder="🔍Search services" style={{ WebkitTextFillColor: 'black', color: 'black', width: '400px' }} />

      <nav>
        <ul>
          <Link to="/Home">Home</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/Ourservices">Our service</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Login">Login</Link>
          <Link to="/ProductContainer">new</Link>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
