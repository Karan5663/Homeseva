import React from 'react';
import { FaBug } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from './layout'; 

function PestControl() {
  const services = [
    { name: 'Ant Control', path: '/contactform?service=Ant%20Control' },
    { name: 'Termite Treatment', path: '/contactform?service=Termite%20Treatment' },
    { name: 'Bed Bug Extermination', path: '/contactform?service=Bed%20Bug%20Extermination' },
    { name: 'Rodent Control', path: '/contactform?service=Rodent%20Control' }
  ];

  return (
    <Layout>
      <div className='service'>
        <div className="service-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <Link to={service.path}>
                <FaBug className="icon" />
                <h3>{service.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default PestControl;
