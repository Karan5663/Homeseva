import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './layout';
import '../css/provuser.css';

const Provuser = () => {
  const [providers, setProviders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null); // State to track selected status
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const locationParam = queryParams.get('location');
    const serviceParam = queryParams.get('service');
    if (locationParam && serviceParam) {
      fetchProviders(locationParam, serviceParam);
    }
  }, [location]);

  useEffect(() => {
    // Fetch service provider status from the database
    fetchServiceProviderStatus();
  }, []);

  const fetchProviders = async (locationParam, serviceParam) => {
    try {
      const response = await fetch(`http://localhost:8080/getproinfo`);
      const data = await response.json();
      setProviders(data.filter(provider => provider.Plocation === locationParam && provider.work === serviceParam));
    } catch (error) {
      console.error('Error fetching providers:', error);
    }
  };

  const fetchServiceProviderStatus = async () => {
    try {
      const response = await fetch(`http://localhost:8080/getProviderStatus`);
      const data = await response.json();
      setSelectedStatus(data.providerStatus);
    } catch (error) {
      console.error('Error fetching service provider status:', error);
    }
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status); // Update selected status
  };

  const handleButtonClick = async (provider) => {
    // Update the status in the database
    try {
      let body = {
        providerStatus: selectedStatus,
      };
  
      // If the status is 'Selected', add the provider name to the request body
      if (selectedStatus === 'Selected') {
        body.providerName = provider.Providername;
      }
  
      // If completed, add flag to delete user contact
      if (selectedStatus === 'Completed') {
        body.deleteUserContact = true;
      }
  
      const response = await fetch(`http://localhost:8080/updateUserContactStatus`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      
      const data = await response.json();
      console.log(data);
      // If update successful, update the state to reflect the changes
      if (data.success) {
        if (selectedStatus === 'Completed') {
          const updatedProviders = providers.filter(p => p.Providername !== provider.Providername);
          setProviders(updatedProviders);
        } else {
          const updatedProviders = providers.map(p => {
            if (p.Providername === provider.Providername) {
              return { ...p, providerStatus: selectedStatus };
            }
            return p;
          });
          setProviders(updatedProviders);
        }
      }
    } catch (error) {
      console.error('Error updating provider status:', error);
    }
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
                <p>Status: {provider.providerStatus}</p>
                {/* Survey buttons */}
                <div className="status-buttons">
                  <input
                    type="radio"
                    id={`selected-${index}`}
                    name={`status-${index}`}
                    value="Selected"
                    checked={selectedStatus === 'Selected'}
                    onChange={() => handleStatusChange('Selected')}
                  />
                  <label htmlFor={`selected-${index}`}>Selected</label>
                  <input
                    type="radio"
                    id={`completed-${index}`}
                    name={`status-${index}`}
                    value="Completed"
                    checked={selectedStatus === 'Completed'}
                    onChange={() => handleStatusChange('Completed')}
                  />
                  <label htmlFor={`completed-${index}`}>Completed</label>
                </div>
                {/* Save button */}
                <button style={{color:'black'}} onClick={() => handleButtonClick(provider)}>Save</button>
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
