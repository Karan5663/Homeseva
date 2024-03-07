import React from 'react';
import { FaBolt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from './layout'; // Assuming you have a Layout component
import '../css/Electrician.css';

function Electrician() {
  return (
    <Layout>
      <div className='service'>
        <div className="service-container">
          <div className="service-card">
            <Link to="/contactform">
              <FaBolt className="icon" />
              <h3>Lighting Installation</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to="/contactform">
              <FaBolt className="icon" />
              <h3>Electrical Wiring</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to='/contactform'>
              <FaBolt className="icon" />
              <h3>Outlet Repair</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to="/contactform">
              <FaBolt className="icon" />
              <h3>Circuit Breaker Replacement</h3>
            </Link>
          </div>

          {/* Add more service cards here if needed */}

        </div>
      </div>
    </Layout>
  );
}

export default Electrician;
