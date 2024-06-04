import React, { useContext, useEffect, useState } from 'react';
import Layout from './layout';
import { Context1 } from '../config/Context1';
import { useNavigate } from 'react-router-dom';
import '../css/provuser.css';

function ProviderDetails() {
  const { loginInfo, selectedProvider, setSelectedProvider, selectedByUsername, setSelectedByUsername } = useContext(Context1);
  const [status, setStatus] = useState(false);
  const [serviceCompleted, setServiceCompleted] = useState(false);
  const [userContacts, setUserContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedProvider) {
      setStatus(true);
    }
  }, [selectedProvider]);

  useEffect(() => {
    if (selectedProvider && loginInfo.Plocation && loginInfo.work) {
      fetchUserContacts(loginInfo.work, loginInfo.Plocation);
    }
  }, [selectedProvider, loginInfo.Plocation, loginInfo.work]);

  const fetchUserContacts = async (service, location) => {
    try {
      const response = await fetch(`http://localhost:8080/getUserContacts?service=${service}&location=${location}`);
      if (response.ok) {
        const data = await response.json();
        setUserContacts(data);
      } else {
        console.error('Failed to fetch user contacts');
      }
    } catch (error) {
      console.error('Error fetching user contacts:', error);
    }
  };

  const { Providername, Provideraddress, Providercontact, Provideremail, Plocation, work, Details, image } = loginInfo;

  const handleStatusButtonClick = () => {
    setStatus(!status);
  };

  const handleServiceCompletedChange = (e) => {
    const isChecked = e.target.checked;
    setServiceCompleted(isChecked);
    localStorage.setItem(`serviceCompleted_${selectedByUsername}`, isChecked.toString());
  };

  const handleClientsButtonClick = () => {
    localStorage.setItem('providerLocation', Plocation);
    localStorage.setItem('providerService', work);
    navigate('/clients');
  };

  return (
    <Layout>
      <div className="provider-details">
        <h2>Provider Details</h2>
        <p><strong>Name:</strong> {Providername}</p>
        <p><strong>Address:</strong> {Provideraddress}</p>
        <p><strong>Contact:</strong> {Providercontact}</p>
        <p><strong>Email:</strong> {Provideremail}</p>
        <p><strong>Location:</strong> {Plocation}</p>
        <p><strong>Work:</strong> {work}</p>
        <p><strong>Details:</strong> {Details}</p>
        <p><strong>Image:</strong> <img src={image} alt="Provider" /></p>

        {selectedProvider && (
          <p style={{ color: 'black' }}><strong>Selected Provider:</strong> {selectedProvider}</p>
        )}
        {status && (
          <p><strong>Status:</strong> {selectedByUsername} selected {selectedProvider}</p>
        )}
        <button style={{ color: 'black' }} onClick={handleStatusButtonClick} className={status ? 'highlight' : ''}>
          Toggle Status
        </button>

        <div style={{ marginTop: '10px' }}>
          <label>
            Service Completed:
            <input type="checkbox" checked={serviceCompleted} onChange={handleServiceCompletedChange} />
          </label>
        </div>

        {userContacts.length > 0 && (
          <div>
            <h3>User Information:</h3>
            {userContacts.map((contact, index) => (
              <div key={index}>
                <p><strong>Name:</strong> {contact.contusername}</p>
                <p><strong>Email:</strong> {contact.contEmail}</p>
                <p><strong>Address:</strong> {contact.address}</p>
                <p><strong>Phone Number:</strong> {contact.phoneNo}</p>
                <p><strong>Service:</strong> {contact.service}</p>
                <p><strong>Location:</strong> {contact.location}</p>
                <p><strong>Status:</strong> {contact.status}</p>
              </div>
            ))}
          </div>
        )}
        <button style={{ marginTop: '20px', color: 'black' }} onClick={handleClientsButtonClick}>
          Clients
        </button>
      </div>
    </Layout>
  );
}

export default ProviderDetails;
