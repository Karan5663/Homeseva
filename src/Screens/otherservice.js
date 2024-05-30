import React from 'react';
import { FaTruckMoving, FaTshirt, FaLeaf } from 'react-icons/fa';
import Layout from './layout';
import { Link } from 'react-router-dom';
// import '../css/Otherservices.css'; // Assuming you have a CSS file named Otherservices.css for styling
import '../css/Services.css';
function Otherservices() {
  const services = [
    { name: 'Moving', path: '/contactform?service=Moving' },
    { name: 'Laundry', path: '/contactform?service=Laundry' },
    { name: 'Gardening', path: '/contactform?service=Gardening' }
   
  ];

  return (
    <Layout>
      <div className='Service'>
        <div className="service-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <Link to={service.path}>
                {service.name === 'Moving' && <FaTruckMoving className="icon" />}
                {service.name === 'Laundry' && <FaTshirt className="icon" />}
                {service.name === 'Gardening' && <FaLeaf className="icon" />}
                <h3>{service.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Otherservices;

