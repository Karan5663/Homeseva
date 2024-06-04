
import React from 'react';
import { FaHome, FaPaintRoller,FaUser, FaWrench, FaBolt, FaBug, FaCogs, FaTruckMoving, FaTshirt, FaLeaf } from 'react-icons/fa';
import '../css/Services.css';
import Layout from './layout';
import { Link } from 'react-router-dom';

function Ourservices() {
  return (
    <Layout>
      <div className='Service'>
      <div className="services-container1">
        <Link to="/HomeCleaning" className="service-card">
          <FaHome className="icon" />
          <h3>Home Cleaning</h3>
        </Link>

        <Link to="/HomePainting" className="service-card">
          <FaPaintRoller className="icon" />
          <h3>Home Painting</h3>
        </Link>

        <Link to="/Plumbing" className="service-card">
          <FaWrench className="icon" />
          <h3>Plumbing</h3>
        </Link>
      </div>

      <div className="services-container2">
        <Link to="/Electrician" className="service-card">
          <FaBolt className="icon" />
          <h3>Electrician</h3>
        </Link>

        <Link to="/PestControl" className="service-card">
          <FaBug className="icon" />
          <h3>Pest Control</h3>
        </Link>

        <Link to="/HomeAppliances" className="service-card">
          <FaCogs className="icon" />
          <h3>Home Appliances</h3>
        </Link>
      </div>

      <div className="services-container3">
        <Link to="/otherservice" className="service-card">
          <FaTruckMoving className="icon" />
          <h3>Other services</h3>
        </Link>
       
        <Link to="/userServices" className="service-card">
          <FaUser className="icon" />
          <h3>user services</h3>
        </Link>
       
      </div>
      </div>
    </Layout>
  );
}

export default Ourservices;
