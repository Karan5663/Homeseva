import React from 'react';
import { FaHome, FaPaintRoller, FaWrench, FaBolt, FaBug, FaCogs, FaTruckMoving, FaTshirt, FaLeaf } from 'react-icons/fa';
import './Services.css';
import Layout from './layout';
import { Link } from 'react-router-dom';
function Ourservices() {
  return (
    <Layout>
    <div className="services-container1">
    <div className="service-card">
    <Link> <FaHome className="icon" /></Link>
        <h3>Home Cleaning</h3>
      </div>

      <div className="service-card">
      <Link><FaPaintRoller className="icon" /></Link>
        <h3>Home Painting</h3>
      </div>

      <div className="service-card">
      <Link> <FaWrench className="icon" /></Link>
        <h3>Plumbing</h3>
      </div>
    </div>
    <div className="services-container2">
      <div className="service-card">
      <Link> <FaBolt className="icon" /></Link>
        <h3>Electrician</h3>
      </div>

      <div className="service-card">
      <Link><FaBug className="icon" /></Link>
        <h3>Pest Control</h3>
      </div>

      <div className="service-card">
      <Link> <FaCogs className="icon" /></Link>
        <h3>Home Appliances</h3>
      </div>
    </div>
    <div className="services-container3">
      <div className="service-card">
      <Link> <FaTruckMoving className="icon" /></Link>
        <h3>Moving</h3>
      </div>

      <div className="service-card">
      <Link><FaTshirt className="icon" /></Link>
        <h3>Laundry</h3>
      </div>

      <div className="service-card">
      <Link> <FaLeaf className="icon" /></Link>
        <h3>Gardening</h3>
      </div>
      </div>
    </Layout>
  );
}

export default Ourservices;