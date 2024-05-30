import React from 'react';
import { FaBolt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from './layout'; 

function Electrician() {
  const services = [
    { name: 'Lighting Installation', path: '/contactform?service=Lighting%20Installation' },
    { name: 'Electrical Wiring', path: '/contactform?service=Electrical%20Wiring' },
    { name: 'Outlet Repair', path: '/contactform?service=Outlet%20Repair' },
    { name: 'Circuit Breaker Replacement', path: '/contactform?service=Circuit%20Breaker%20Replacement' }
  ];

  return (
    <Layout>
      <div className='service'>
        <div className="service-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <Link to={service.path}>
                <FaBolt className="icon" />
                <h3>{service.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Electrician;
