import React from 'react';
import { FaCogs } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from './layout'; // Assuming you have a Layout component
import '../css/HomeAppliances.css';

function HomeAppliances() {
  return (
    <Layout>
      <div className='service'>
        <div className="service-container">
          <div className="service-card">
            <Link to="/contactform">
            <FaCogs className="icon" />
              <h3>TV Repair</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to="/contactform">
            <FaCogs className="icon" />
              <h3>Washing Machine Repair</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to='/contactform'>
            <FaCogs className="icon" />
              <h3>Refrigerator Repair</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to="/contactform">
            <FaCogs className="icon" />
              <h3>Air Conditioner Repair</h3>
            </Link>
          </div>

          {/* Add more service cards here if needed */}

        </div>
      </div>
    </Layout>
  );
}

export default HomeAppliances;
