import React from 'react';
import { FaBug } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from './layout'; 
import imageSrc from '../Img/PestControl.jpeg';

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
      <div className='image-container'>
          <img
            style={{ width: 900,height:600, marginLeft: 530, marginTop: -1500, marginBottom: 120 }}
            src={imageSrc}
            alt="Cleaning Services"
            className='image'
          />
        </div>
    </Layout>
  );
}

export default PestControl;
