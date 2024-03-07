import React from 'react';
import { FaBug } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from './layout'; // Assuming you have a Layout component
// import '../css/PestControl.css';

function PestControl() {
  return (
    <Layout>
      <div className='service'>
        <div className="service-container">
          <div className="service-card">
            <Link to="/contactform">
              <FaBug className="icon" />
              <h3>Ant Control</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to="/contactform">
              <FaBug className="icon" />
              <h3>Termite Treatment</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to='/contactform'>
              <FaBug className="icon" />
              <h3>Bed Bug Extermination</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to="/contactform">
              <FaBug className="icon" />
              <h3>Rodent Control</h3>
            </Link>
          </div>

          {/* Add more service cards here if needed */}

        </div>
      </div>
    </Layout>
  );
}

export default PestControl;
