import React from 'react';
import { FaPaintRoller } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import Layout from '../Screens./layout'; // Assuming you have a Layout component
import Layout from './layout';
import '../css/HomePainting.css';

function HomePainting() {
  return (
    <Layout>
      <div className='service'>
        <div className="service-container1">
          <div className="service-card">
            <Link to="/contactform">
              <FaPaintRoller className="icon" />
              <h3>Interior Painting</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to="/contactform">
              <FaPaintRoller className="icon" />
              <h3>Exterior Painting</h3>
            </Link>
          </div>

          {/* <div className="service-card">
            <Link to='/contactform'>
              <FaPaintRoller className="icon" />
              <h3>Exterior Painting</h3>
            </Link>
          </div> */}
        {/* </div>
        <div className="service-container2"> */}
          <div className="service-card">
            <Link to="/contactform">
              <FaPaintRoller className="icon" />
              <h3>Interior Texture</h3>
            </Link>
          </div>
          <div className="service-card">
            <Link to="/contactform">
              <FaPaintRoller className="icon" />
              <h3>Water Proofing</h3>
            </Link>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default HomePainting;
