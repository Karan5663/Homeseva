import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './layout';
import '../css/provuser.css';

const Provuser = () => {
  const [providers, setProviders] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const locationParam = queryParams.get('location');
    const serviceParam = queryParams.get('service');
    if (locationParam && serviceParam) {
      fetchProviders(locationParam, serviceParam);
    }
  }, [location]);

  const fetchProviders = async (locationParam, serviceParam) => {
    try {
      const response = await fetch(`http://localhost:8080/getproinfo`);
      const data = await response.json();
      setProviders(data.filter(provider => provider.Plocation === locationParam && provider.work === serviceParam));
    } catch (error) {
      console.error('Error fetching providers:', error);
    }
  };
  const handleButtonClick = (providerId) => {
    // Define your logic to handle button click here
    console.log(`Contacting provider with ID: ${providerId}`);
  };

  return (
    <Layout>
      <div className="provider-services">
        <h2>Provider Services</h2>
        <div className="cards">
          {providers.length > 0 ? (
            providers.map((provider, index) => (
              <div key={index} className="card">
                <h3>Name: {provider.Providername}</h3>
                <p>Email:{provider.Provideremail}</p>
                <p>Service: {provider.work}</p>
                <p>Location: {provider.Plocation}</p>
                <p>Phone Number: {provider.Providercontact}</p>
                <p>Details:{provider.Details}</p>
                <p>image:{provider.image}</p>
                <button onClick={() => handleButtonClick(provider.id)}>Contact</button>
              </div>
            ))
          ) : (
            <p>No providers found for the selected criteria.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Provuser;
