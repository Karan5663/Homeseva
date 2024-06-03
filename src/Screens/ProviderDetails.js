// // // ProviderDetails.js
// // import React, { useContext, useEffect, useState } from 'react';
// // import Layout from './layout';
// // import { Context1 } from '../config/Context1';
// // import '../css/provuser.css';

// // function ProviderDetails() {
// //   const { loginInfo, selectedProvider, selectedByUsername } = useContext(Context1);
// //   const [status, setStatus] = useState(false);

// //   useEffect(() => {
// //     if (selectedProvider) {
// //       setStatus(true);
// //     }
// //   }, [selectedProvider]);

// //   if (!loginInfo) {
// //     return (
// //       <Layout>
// //         <div className="provider-details">
// //           <h2>No provider details available. Please log in.</h2>
// //         </div>
// //       </Layout>
// //     );
// //   }

// //   const { Providername, Provideraddress, Providercontact, Provideremail, Plocation, work, Details, image } = loginInfo;

// //   const handleStatusButtonClick = () => {
// //     // Logic to toggle the status
// //     setStatus(!status);
// //   };

// //   return (
// //     <Layout>
// //       <div className="provider-details">
// //         <h2>Provider Details</h2>
// //         {selectedProvider && (
// //           <p><strong>Selected Provider:</strong> {selectedProvider}</p>
// //         )}
// //         {/* <p><strong>Name:</strong> {selectedProvider}</p> */}
// //         <p><strong>Address:</strong> {Provideraddress}</p>
// //         <p><strong>Contact:</strong> {Providercontact}</p>
// //         <p><strong>Email:</strong> {Provideremail}</p>
// //         <p><strong>Location:</strong> {Plocation}</p>
// //         <p><strong>Work:</strong> {work}</p>
// //         <p><strong>Details:</strong> {Details}</p>
// //         <p><strong>Image:</strong> <img src={image} alt="Provider" /></p>
// //         {status && (
// //           <p><strong>Status:</strong> {selectedByUsername} selected {selectedProvider}</p>
// //         )}
// //         <button onClick={handleStatusButtonClick} className={status ? 'highlight' : ''}>
// //           Toggle Status
// //         </button>
// //       </div>
// //     </Layout>
// //   );
// // }

// // export default ProviderDetails;

// import React, { useContext, useEffect, useState } from 'react';
// import Layout from './layout';
// import { Context1 } from '../config/Context1';
// import '../css/provuser.css';

// function ProviderDetails() {
//   const { loginInfo, selectedProvider, selectedByUsername } = useContext(Context1);
//   const [status, setStatus] = useState(false);

//   useEffect(() => {
//     if (selectedProvider) {
//       setStatus(true);
//     }
//   }, [selectedProvider]);

//   if (!loginInfo) {
//     return (
//       <Layout>
//         <div className="provider-details">
//           <h2>No provider details available. Please log in.</h2>
//         </div>
//       </Layout>
//     );
//   }

//   const { Providername, Provideraddress, Providercontact, Provideremail, Plocation, work, Details, image } = loginInfo;

//   const handleStatusButtonClick = () => {
//     // Logic to toggle the status
//     setStatus(!status);
//   };

//   return (
//     <Layout>
//       <div className="provider-details">
//         <h2>Provider Details</h2>
//         {selectedProvider && (
//           <p><strong>Selected Provider:</strong> {selectedProvider}</p>
//         )}
//         <p><strong>Name:</strong> {Providername}</p>
//         <p><strong>Address:</strong> {Provideraddress}</p>
//         <p><strong>Contact:</strong> {Providercontact}</p>
//         <p><strong>Email:</strong> {Provideremail}</p>
//         <p><strong>Location:</strong> {Plocation}</p>
//         <p><strong>Work:</strong> {work}</p>
//         <p><strong>Details:</strong> {Details}</p>
//         <p><strong>Image:</strong> <img src={image} alt="Provider" /></p>
//         {status && (
//           <p><strong>Status:</strong> {selectedByUsername} selected {selectedProvider}</p>
//         )}
//         <button onClick={handleStatusButtonClick} className={status ? 'highlight' : ''}>
//           Toggle Status
//         </button>
//       </div>
//     </Layout>
//   );
// }

// export default ProviderDetails;

import React, { useContext, useEffect, useState } from 'react';
import Layout from './layout';
import { Context1 } from '../config/Context1';
import { useNavigate } from 'react-router-dom';
import '../css/provuser.css';

function ProviderDetails() {
  const { loginInfo, selectedProvider, setSelectedProvider, selectedByUsername, setSelectedByUsername } = useContext(Context1);
  const [status, setStatus] = useState(false);
  const [serviceCompleted, setServiceCompleted] = useState(false); // State for service completion
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedProvider) {
      setStatus(true);
    }
  }, [selectedProvider]);

  useEffect(() => {
    // Load serviceCompleted from local storage on component mount
    const savedServiceCompleted = localStorage.getItem(`serviceCompleted_${selectedByUsername}`);
    if (savedServiceCompleted !== null) {
      setServiceCompleted(savedServiceCompleted === 'true');
    }
  }, [selectedByUsername]);

  const { Providername, Provideraddress, Providercontact, Provideremail, Plocation, work, Details, image } = loginInfo;

  const handleStatusButtonClick = () => {
    setStatus(!status);
  };

  const handleButtonClick = (provider) => {
    setSelectedProvider(provider.Providername);
    setSelectedByUsername('User');
    navigate('/ProviderDetails');
  };

  const handleServiceCompletedChange = (e) => {
    const isChecked = e.target.checked;
    setServiceCompleted(isChecked);
    // Save serviceCompleted state to local storage
    localStorage.setItem(`serviceCompleted_${selectedByUsername}`, isChecked.toString());
  };

  return (
    <Layout>
      <div className="provider-details">
        <h2>Provider Details</h2>
        {selectedProvider && (
          <p style={{color:'black'}}><strong>Selected Provider:</strong> {selectedProvider}</p>
        )}
        {status && (
          <p><strong>Status:</strong> {selectedByUsername} selected {selectedProvider}</p>
        )}
        <button style={{color:'black'}} onClick={handleStatusButtonClick} className={status ? 'highlight' : ''}>
          Toggle Status
        </button>
      

        {/* Checkbox for marking service as completed */}
        <div style={{ marginTop: '10px' }}>
          <label>
            Service Completed:
            <input type="checkbox" checked={serviceCompleted} onChange={handleServiceCompletedChange} />
          </label>
        </div>
      </div>
    </Layout>
  );
}

export default ProviderDetails;

