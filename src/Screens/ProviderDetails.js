import React, { useContext, useEffect, useState } from 'react';
import Layout from './layout';
import { Context } from '../config/Context';
import '../css/provuser.css';

function ProviderDetails() {
  const { loginInfo, selectedProvider, selectedByUsername } = useContext(Context);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (selectedProvider) {
      setStatus(true);
    }
  }, [selectedProvider]);

  if (!loginInfo) {
    return (
      <Layout>
        <div className="provider-details">
          <h2>No provider details available. Please log in.</h2>
        </div>
      </Layout>
    );
  }

  const { Providername, Provideraddress, Providercontact, Provideremail, Plocation, work, Details, image } = loginInfo;

  const handleStatusButtonClick = () => {
    // Logic to toggle the status
    setStatus(!status);
  };

  return (
    <Layout>
      <div className="provider-details">
        <h2>Provider Details</h2>
        {selectedProvider && (
          <p><strong>Selected Provider:</strong> {selectedProvider}</p>
        )}
        <p><strong>Name:</strong> {Providername}</p>
        <p><strong>Address:</strong> {Provideraddress}</p>
        <p><strong>Contact:</strong> {Providercontact}</p>
        <p><strong>Email:</strong> {Provideremail}</p>
        <p><strong>Location:</strong> {Plocation}</p>
        <p><strong>Work:</strong> {work}</p>
        <p><strong>Details:</strong> {Details}</p>
        <p><strong>Image:</strong> <img src={image} alt="Provider" /></p>
        {status && (
          <p><strong>Status:</strong> {selectedByUsername} selected {selectedProvider}</p>
        )}
        <button onClick={handleStatusButtonClick} className={status ? 'highlight' : ''}>
          Toggle Status
        </button>
      </div>
    </Layout>
  );
}

export default ProviderDetails;
