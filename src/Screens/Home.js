import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import Layout from './layout';
import backgroundImage from '../Img/homeservice.jpg';

function App() {
  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <img src={backgroundImage} className="centralized-img" alt="Home Service" />
          <div className="text-overlay">
            <h1>Welcome to HomeSeva</h1>
            <p>
              We provide a range of home services to make your life easier.
            </p>
            <p>
              Whether it's cleaning, repairs, or maintenance, we've got you covered.
            </p>
            <Link to="/Ourservices" className="App-link">
              Explore Our Services
            </Link>
          </div>
        </header>
      </div>
    </Layout>
  );
}

export default App;
