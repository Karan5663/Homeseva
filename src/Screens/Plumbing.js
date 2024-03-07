import React from 'react';
import { FaWrench } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from './layout'; // Assuming you have a Layout component
import '../css/Plumbing.css';

function Plumbing() {
  return (
    <Layout>
      <div className='service'>
        <div className="service-container">
          <div className="service-card">
            <Link to="/contactform">
              <FaWrench className="icon" />
              <h3>Leak Repair</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to="/contactform">
              <FaWrench className="icon" />
              <h3>Pipe Installation</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to='/contactform'>
              <FaWrench className="icon" />
              <h3>Drain Cleaning</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to="/contactform">
              <FaWrench className="icon" />
              <h3>Fixture Replacement</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to="/contactform">
              <FaWrench className="icon" />
              <h3>Water Heater Repair</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to="/contactform">
              <FaWrench className="icon" />
              <h3>Toilet Installation</h3>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Plumbing;
