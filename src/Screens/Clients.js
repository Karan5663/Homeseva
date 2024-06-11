import React, { useEffect, useState } from 'react';
import Layout from './layout';
import '../css/client.css';
function Clients() {
  const [providerLocation, setProviderLocation] = useState('');
  const [providerService, setProviderService] = useState('');
  const [userContacts, setUserContacts] = useState([]);

  useEffect(() => {
    const location = localStorage.getItem('providerLocation');
    const service = localStorage.getItem('providerService');
    setProviderLocation(location);
    setProviderService(service);
    
    if (location && service) {
      fetchUserContacts(service, location);
    }
  }, []);
useEffect(() => {
    const fetchUserContacts = async () => {
        try {
            const response = await fetch('http://localhost:8080/getUserContacts');
            if (response.ok) {
                const data = await response.json();
                setUserContacts(data);

             
                const updatedUserContacts = data.map(contact => ({
                    ...contact,
                    userAcceptDisabled: contact.status === 'UserAccepted',
                    userCompleteDisabled: contact.status === 'UserCompleted',
                    providerAcceptDisabled: contact.status === 'ProviderAccepted',
                    providerCompleteDisabled: contact.status === 'ProviderCompleted',
                }));
                setUserContacts(updatedUserContacts);
            } else {
                console.error('Failed to fetch user contacts:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching user contacts:', error);
        }
    };

    fetchUserContacts();
}, []);

  const fetchUserContacts = async (service, location) => {
    try {
      const response = await fetch(`http://localhost:8080/getusercontact?service=${service}&location=${location}`);
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

  return (
    <Layout>
      <div className="clients">
        <h2>Clients</h2>
        <p><strong>Provider Location:</strong> {providerLocation}</p>
        <p><strong>Provider Service:</strong> {providerService}</p>

        {userContacts.length > 0 ? (
          userContacts.map((contact, index) => (
            <div key={index} className="user-contact">
              <p><strong>Name:</strong> {contact.contusername}</p>
              <p><strong>Email:</strong> {contact.contEmail}</p>
              <p><strong>Address:</strong> {contact.address}</p>
              <p><strong>Phone Number:</strong> {contact.phoneNo}</p>
              <p><strong>Service:</strong> {contact.service}</p>
              <p><strong>Location:</strong> {contact.location}</p>
              <p><strong>Status:</strong> {contact.status}</p>
            </div>
          ))
        ) : (
          <p>No user contacts found for the selected criteria.</p>
        )}
      </div>
    </Layout>
  );
}

export default Clients;
