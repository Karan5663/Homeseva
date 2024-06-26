import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from './layout';
import '../css/HomeCleaning.css';
import imageSrc from '../Img/HomeCleaning.webp';

function HomeCleaning() {
  const services = [
    { name: 'Home Deep Cleaning', path: '/contactform?service=Home%20Deep%20Cleaning' },
    { name: 'Bathroom Cleaning', path: '/contactform?service=Bathroom%20Cleaning' },
    { name: 'Window Cleaning', path: '/contactform?service=Window%20Cleaning' },
    { name: 'Exterior Cleaning', path: '/contactform?service=Exterior%20Cleaning' }
  ];

  return (
    <Layout>
      <div className='service-page'>
        <div className='service'>
          <div className="service-container1">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <Link to={service.path}>
                  <FaHome className="icon" />
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
      </div>

    </Layout>
  );
}

export default HomeCleaning;
