// import React from 'react';
// import { FaHome, FaPaintRoller, FaWrench, FaBolt, FaBug, FaCogs, FaTruckMoving, FaTshirt, FaLeaf } from 'react-icons/fa';
// import './Services.css';
// import Layout from './layout';
// import { Link } from 'react-router-dom';
// function Ourservices() {
//   return (
//     <Layout>
//     <div className="services-container1">
//     <div className="service-card">
//     <Link> <FaHome className="icon" /></Link>
//         <h3>Home Cleaning</h3>
//         <nav>
//          <ul> <Link to ="/HomeCleaning">"."</Link> </ul>
//         </nav>
//       </div>

//       <div className="service-card">
//       <Link><FaPaintRoller className="icon" /></Link>
//         <h3>Home Painting</h3>
//       </div>

//       <div className="service-card">
//       <Link> <FaWrench className="icon" /></Link>
//         <h3>Plumbing</h3>
//       </div>
//     </div>
//     <div className="services-container2">
//       <div className="service-card">
//       <Link> <FaBolt className="icon" /></Link>
//         <h3>Electrician</h3>
//       </div>

//       <div className="service-card">
//       <Link><FaBug className="icon" /></Link>
//         <h3>Pest Control</h3>
//       </div>

//       <div className="service-card">
//       <Link> <FaCogs className="icon" /></Link>
//         <h3>Home Appliances</h3>
//       </div>
//     </div>
//     <div className="services-container3">
//       <div className="service-card">
//       <Link> <FaTruckMoving className="icon" /></Link>
//         <h3>Moving</h3>
//       </div>

//       <div className="service-card">
//       <Link><FaTshirt className="icon" /></Link>
//         <h3>Laundry</h3>
//       </div>

//       <div className="service-card">
//       <Link> <FaLeaf className="icon" /></Link>
//         <h3>Gardening</h3>
//       </div>
//       </div>
//     </Layout>
//   );
// }

// export default Ourservices;

//*********************** */

import React from 'react';
import { FaHome, FaPaintRoller, FaWrench, FaBolt, FaBug, FaCogs, FaTruckMoving, FaTshirt, FaLeaf } from 'react-icons/fa';
import './Services.css';
import Layout from './layout';
import { Link } from 'react-router-dom';

function Ourservices() {
  return (
    <Layout>
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
        <Link to="/Moving" className="service-card">
          <FaTruckMoving className="icon" />
          <h3>Moving</h3>
        </Link>

        <Link to="/Laundry" className="service-card">
          <FaTshirt className="icon" />
          <h3>Laundry</h3>
        </Link>

        <Link to="/Gardening" className="service-card">
          <FaLeaf className="icon" />
          <h3>Gardening</h3>
        </Link>
      </div>
    </Layout>
  );
}

export default Ourservices;
