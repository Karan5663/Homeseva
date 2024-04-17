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
          <div style={{width:100}} className="service-card">
            <Link to="/contactform">
              <FaPaintRoller style={{height:120}} className="icon" />
              <h3 style={{fontSize:20}}>Interior Painting</h3>
            </Link>
          </div>

          <div className="service-card">
            <Link to="/contactform">
              <FaPaintRoller style={{height:120}}  className="icon" />
              <h3 style={{fontSize:20}}>Exterior Painting</h3>
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
              <FaPaintRoller style={{height:120}}  className="icon" />
              <h3 style={{fontSize:21}}>Interior Texture</h3>
            </Link>
          </div>
          <div className="service-card">
            <Link to="/contactform">
              <FaPaintRoller style={{height:120}}  className="icon" />
              <h3 style={{fontSize:21}}>Water Proofing</h3>
            </Link>
          </div>

          

        </div>
      </div>
    </Layout>
  );
}

export default HomePainting;
