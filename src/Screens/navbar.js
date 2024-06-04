import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../Img/logo.jpg';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const services = [
    'Plumbing',
    'Home Cleaning',
    'Electrician',
    'Pest Control',
    'Home Painting',
    'other service',
    'Home Appliances'
  ];

  useEffect(() => {
    const storedLocation = sessionStorage.getItem('selectedLocation');
    if (storedLocation) {
      setSelectedLocation(storedLocation);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filteredSuggestions = services.filter(service =>
        service.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    navigateToService(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (services.includes(searchTerm)) {
        navigateToService(searchTerm);
      }
    }
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setSelectedLocation(value);
    sessionStorage.setItem('selectedLocation', value); 
  };

  const navigateToService = (service) => {
    const servicePath = service.toLowerCase().replace(/\s+/g, '');
    navigate(`/${servicePath}`);
  };

  return (
    <div className="App-options">
      <img
        src={logo}
        alt="Logo"
        className="logo-image"
        style={{ padding: 10, marginTop: -12, height: '45px', width: '60px', borderRadius: '80px' }}
      />

      <select value={selectedLocation} onChange={handleLocationChange}>
        <option value="" disabled selected>📍 Location</option>
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
        {/* Rest of the options */}
      </select>

      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search services"
          style={{ WebkitTextFillColor: 'black', color: 'black', width: '400px' }}
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      <nav>
        <ul>
          <Link to="/Home">Home</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/Ourservices">Our service</Link>
          <Link to="/Contact">Contact us</Link>
          <Link to="/Login">Login</Link>

        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
