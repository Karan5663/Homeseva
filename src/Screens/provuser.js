import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from './layout';
import { Context1 } from '../config/Context1';
import '../css/provuser.css';

const Provuser = () => {
  const [providers, setProviders] = useState([]);
  const [bookedProviders, setBookedProviders] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { setSelectedProvider, setSelectedByUsername } = useContext(Context1);

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

  const handleButtonClick = (provider) => {
    setSelectedProvider(provider.Providername);
    setSelectedByUsername('User');
    navigate('/ProviderDetails');
  };

  const handleCheckboxChange = (provider) => {
    const updatedProviders = providers.map(p => {
      if (p.Providername === provider.Providername) {
        return { ...p, serviceCompleted: !p.serviceCompleted };
      }
      return p;
    });
    setProviders(updatedProviders);
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
                <p>Email: {provider.Provideremail}</p>
                <p>Service: {provider.work}</p>
                <p>Location: {provider.Plocation}</p>
                <p>Phone Number: {provider.Providercontact}</p>
                <p>Details: {provider.Details}</p>
                <p>Image: <img src={provider.image} style={imageStyles} alt="Provider" /></p>
                <button style={{color:'black'}} onClick={() => handleButtonClick(provider)}>Contact</button>
                <label>
              
                </label>
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

