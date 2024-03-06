import React from 'react';
import '../css/Home.css';
//import './Home.css';
import { Link } from 'react-router-dom';
import Layout from './layout';
import backgroundImage from '../Img/homeservice.jpg'

function App() {
  return (
    <Layout>
    <div className="App">
      
      <header className="App-header">
      <img src={backgroundImage} classname="centerlised-img"/>
      <div className="text-overlay">
          
        <h1>Welcome to HomeSeva</h1>
        <p>
          We provide a range of home services to make your life easier.
        </p>
        <p>
          Whether it's cleaning, repairs, or maintenance, we've got you covered.
        </p>
        <a
          className="App-link"
          href="#services" style={{color:'red'}}
        >
          <Link to="/Ourservices" className="Applink" style={{ color: 'white' }}>
          Explore Our Services
          </Link>
        </a>
        
        </div>
      </header>
    </div>
    </Layout>
  );
}

export default App;