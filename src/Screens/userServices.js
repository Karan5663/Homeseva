import React, { useEffect, useState, useContext } from 'react';
import Layout from './layout';
import '../css/userServices.css'; // Make sure to create and import your CSS file
import { Context1 } from '../config/Context1'; // Import the context

const UserContact = () => {
  const { loginInfo } = useContext(Context1); // Get the login info from the context
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
        if (loginInfo) {
          try {
            const response = await fetch('http://localhost:8080/getusercontact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ countusername: loginInfo.username, status: 'pending' }), // Filter by contusername and status
            });
      
            const data = await response.json();
      
            if (data.success) {
              setContacts(data.services);
            } else {
              setError(data.message);
            }
          } catch (error) {
            setError('Error fetching contacts');
            console.error('Error fetching contacts:', error);
          }
        }
      };
      

    fetchContacts();
  }, [loginInfo]);

  if (!loginInfo) {
    return (
      <Layout>
        <div className="user-contacts">
          <h2>Please log in to view your contacts.</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="user-contacts">
        <h2>User Contacts</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="contacts-list">
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <div key={index} className="contact-card">
                <h3>Service: {contact.service}</h3>
                <p>Location: {contact.location}</p>
                <p>Provider: {contact.providerName}</p>
                <p>Address: {contact.address}</p>
                <p>Phone Number: {contact.phoneNo}</p>
                <p>Email: {contact.contEmail}</p>
                <p>Status: {contact.status}</p>
              </div>
            ))
          ) : (
            <p>No contacts found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UserContact;
