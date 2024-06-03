// // 

 import React, { useContext,useEffect, useState } from 'react';
 import { useLocation } from 'react-router-dom';
 import Layout from './layout';
 import { Context } from '../config/Context';
 import '../css/provuser.css';

// const Provserv = () => {
//   const [providers, setProviders] = useState([]);
//   const location = useLocation();

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const nameParam = queryParams.get('Providername');
//     const emailParam = queryParams.get('Provideremail');
//     const passParam = queryParams.get('Providercpass');

//     console.log('Query Parameters:', { nameParam, emailParam, passParam }); // Log query parameters

//     if (nameParam && emailParam && passParam) {
//       fetchProviders(nameParam, emailParam, passParam);
//     }
//   }, [location]);

//   const fetchProviders = async (nameParam, emailParam, passParam) => {
//     try {
//       console.log('Fetching providers...');
//       const response = await fetch(`http://localhost:8080/getservinfo`);
//       const data = await response.json();
//       console.log('Fetched data:', data); // Log the fetched data

//       if (Array.isArray(data)) {
//         console.log('Setting providers state with:', data); // Log data before setting state
//         setProviders(data); // Set the providers data directly
//       } else {
//         console.error('Unexpected data format:', data);
//       }
//     } catch (error) {
//       console.error('Error fetching providers:', error);
//     }
//   };

//   const handleButtonClick = (providerId) => {
//     console.log(`Contacting provider with ID: ${providerId}`);
//   };

//   const imageStyles = {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   };

//   return (
//     <Layout>
//       <div className="provider-services">
//         <h2>Provider Services</h2>
//         <div className="cards">
//           {providers.length > 0 ? (
//             providers.map((provider, index) => (
//               <div key={index} className="card">
//                 <h3>Name: {provider.Providername}</h3>
//                 <p>Email: {provider.Provideremail}</p>
//                 <p>Service: {provider.work}</p>
//                 <p>Location: {provider.Plocation}</p>
//                 <p>Phone Number: {provider.Providercontact}</p>
//                 <p>Details: {provider.Details}</p>
//                 <p>Image: <img src={provider.image} style={imageStyles} alt="Provider" /></p>
//                 <button onClick={() => handleButtonClick(provider._id)}>Contact</button>
//               </div>
//             ))
//           ) : (
//             <p>No providers found for the selected criteria.</p>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Provserv;


// 
// import React, { useContext } from 'react';
// import { Context } from '../config/Context';
// import '../css/ProviderDetails.css'; // Add CSS for styling if needed
// import Layout from './layout';
// 
// function ProviderDetails() {
  // const { loginInfo } = useContext(Context);
// 
  // if (!loginInfo) {
    // return (
      // <Layout>
        {/* <div className="provider-details"> */}
          {/* <h2>No provider details available. Please log in.</h2> */}
        {/* </div> */}
      {/* </Layout> */}
    // );
  // }
// 
  // const { Providername, Provideraddress, Providercontact, Provideremail, Providercpass, Plocation, work, Details,image} = loginInfo;
// 
  // return (
    // <Layout>
      {/* <div className="provider-details"> */}
        {/* <h2>Provider Details</h2> */}
        {/* <p><strong>Name:</strong> {Providername}</p> */}
        {/* <p><strong>Address:</strong> {Provideraddress}</p> */}
        {/* <p><strong>Contact:</strong> {Providercontact}</p> */}
        {/* <p><strong>Email:</strong> {Provideremail}</p> */}
        {/* <p><strong>Location:</strong> {Plocation}</p> */}
        {/* <p><strong>Work:</strong> {work}</p> */}
        {/* <p><strong>Details:</strong> {Details}</p> */}
        {/* <p><strong>Image:</strong> <img src={image} alt="Provider" /></p> */}
      {/* </div> */}
    {/* </Layout> */}
  // );
// }
// 
// export default ProviderDetails;
// 







//
//import React,{useContext,useState} from 'react';
//
//import { Context } from '../config/Context';
//import Layout from './layout';
//import '../css/ProviderDetails.css'; // Add CSS for styling if needed







function ProviderDetails() {
  const { loginInfo } = useContext(Context);
  const [status, setStatus] = useState(false);
  const [selectedProviderName, setSelectedProviderName] = useState('');

  useEffect(() => {
    if (loginInfo) {
      setSelectedProviderName(loginInfo.Providername);
    }
  }, [loginInfo]);

  if (!loginInfo) {
    return (
      <Layout>
        <div className="provider-details">
          <h2>No provider details available. Please log in.</h2>
        </div>
      </Layout>
    );
  }

  const { Providername, Provideraddress, Providercontact, Provideremail, Providercpass, Plocation, work, Details, image } = loginInfo;

  const handleStatusButtonClick = () => {
    // Logic to toggle the status
    setStatus(!status);
  };

  return (
    <Layout>
      <div className="provider-details">
        <h2>Provider Details</h2>
        {selectedProviderName && <p><strong>Selected Provider:</strong> {selectedProviderName}</p>}
        <p><strong>Name:</strong> {Providername}</p>
        <p><strong>Address:</strong> {Provideraddress}</p>
        <p><strong>Contact:</strong> {Providercontact}</p>
        <p><strong>Email:</strong> {Provideremail}</p>
        <p><strong>Location:</strong> {Plocation}</p>
        <p><strong>Work:</strong> {work}</p>
        <p><strong>Details:</strong> {Details}</p>
        <p><strong>Image:</strong> <img src={image} alt="Provider" /></p>
        <button onClick={handleStatusButtonClick} className={status ? 'highlight' : ''}>Status</button>
      </div>
    </Layout>
  );
}

export default ProviderDetails;