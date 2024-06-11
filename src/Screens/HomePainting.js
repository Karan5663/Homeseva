import React from 'react';
import { FaPaintRoller } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from './layout';
import '../css/HomePainting.css';
import imageSrc from '../Img/HomePainting.webp';

function HomePainting() {
  const services = [
    { name: 'Interior Painting', path: '/contactform?service=Interior%20Painting' },
    { name: 'Exterior Painting', path: '/contactform?service=Exterior%20Painting' },
    { name: 'Interior  Texture', path: '/contactform?service=Interior%20Texture' },
    { name: 'Water Proofing', path: '/contactform?service=Water%20Proofing' }
  ];

  return (
    <Layout>
      <div className='service'>
        <div className="service-container1">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <Link to={service.path}>
                <FaPaintRoller style={{ height: 120 }} className="icon" />
                <h3 style={{ fontSize: 17 }}>{service.name}</h3>
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

export default HomePainting;
