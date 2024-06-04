import React from 'react';
import { FaCogs } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from './layout'; 
import imageSrc from '../Img/HomeAppliances.webp';

function HomeAppliances() {
  const services = [
    { name: 'TV Repair', path: '/contactform?service=TV%20Repair' },
    { name: 'Washing Machine Repair', path: '/contactform?service=Washing%20Machine%20Repair' },
    { name: 'Refrigerator Repair', path: '/contactform?service=Refrigerator%20Repair' },
    { name: 'Air Conditioner Repair', path: '/contactform?service=Air%20Conditioner%20Repair' }
  ];

  return (
    <Layout>
      <div className='service'>
        <div className="service-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <Link to={service.path}>
                <FaCogs className="icon" />
                <h3>{service.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='image-container'>
          <img
            style={{ width: 900 ,height:600, marginLeft: 530, marginTop: -1500, marginBottom: 120 }}
            src={imageSrc}
            alt="Cleaning Services"
            className='image'
          />
        </div>

    </Layout>
  );
}

export default HomeAppliances;
