import React from 'react';
import { FaWrench } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from './layout'; 
import '../css/Plumbing.css';
import imageSrc from '../Img/Plumbing.webp';

function Plumbing() {
  const services = [
    { name: 'Leak Repair', path: '/contactform?service=Leak%20Repair' },
    { name: 'Pipe Installation', path: '/contactform?service=Pipe%20Installation' },
    { name: 'Drain Cleaning', path: '/contactform?service=Drain%20Cleaning' },
    { name: 'Fixture Replacement', path: '/contactform?service=Fixture%20Replacement' }
  ];

  return (
    <Layout>
      <div className='service'>
        <div className="service-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <Link to={service.path}>
                <FaWrench className="icon" />
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

export default Plumbing;
