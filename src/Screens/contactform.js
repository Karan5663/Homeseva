// import React, { useState } from 'react';
// import Layout from './layout';
// import '../css/contactform.css';
// const Contactform = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     phoneNumber: '',
//     email: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can do something with the form data here, like submitting it to a server or storing it in state
//     console.log(formData);
//     // Reset form after submission
//     setFormData({
//       name: '',
//       address: '',
//       phoneNumber: '',
//       email: ''
//     });
//   };

//   return (
//     <Layout>
//       <div className="continfo">
      
//       <div className="contc">
//       <form onSubmit={handleSubmit}>
        
//           <h2>Contact Information</h2>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="address">Address:</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             required
//           />
        
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//     <select>
//       <option value="" disabled selected> 
//       📍Location 
//         </option>
//                  <option value="Mumbai">📍 Mumbai</option>
//                  <option value="Pune">📍 Pune</option>
//                  <option value="Nagpur">📍 Nagpur</option>
//                  <option value="Nashik">📍 Nashik</option>
//                  <option value="Aurangabad">📍 Aurangabad</option>
//                  <option value="Solapur">📍 Solapur</option>
//                  <option value="Amravati">📍 Amravati</option>
//                  <option value="Kolhapur">📍 Kolhapur</option>
//                  <option value="Thane">📍 Thane</option>
//                  <option value="Pimpri-Chinchwad">📍 Pimpri-Chinchwad</option>
//                  <option value="Sangli">📍 Sangli</option>
//                  <option value="Malegaon">📍 Malegaon</option>
//                  <option value="Jalgaon">📍 Jalgaon</option>
//                  <option value="Akola">📍 Akola</option>
//                  <option value="Latur">📍 Latur</option>
//                  <option value="Dhule">📍 Dhule</option>
//                  <option value="Ahmednagar">📍 Ahmednagar</option>
//                  <option value="Kalyan-Dombivli">📍 Kalyan-Dombivli</option>
//                  <option value="Navi Mumbai">📍 Navi Mumbai</option>
//                  <option value="Ichalkaranji">📍 Ichalkaranji</option>
//       </select>
      
//         <button type="submit" style={{color:'black'}}>Submit</button>
//       </form>
//       </div>
//       </div>
    
//     </Layout>
//   );
// };

// export default Contactform;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './layout';
import '../css/contactform.css';

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    service: ''
  });

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const service = queryParams.get('service');
    console.log('Location search:', location.search); // Debugging line
    console.log('Service:', service); // Debugging line
    if (service) {
      setFormData((prevState) => ({
        ...prevState,
        service: service
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      address: '',
      phoneNumber: '',
      email: '',
      service: ''
    });
  };

  return (
    <Layout>
      <div className="continfo">
        <div className="contc">
          <form onSubmit={handleSubmit}>
            <h2>Contact Information</h2>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="service">Selected Service:</label>
            <input
              type="text"
              id="service"
              name="service"
              value={formData.service}
              readOnly
            />
            <label htmlFor="location">Location:</label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                📍Location
              </option>
              <option value="Mumbai">📍 Mumbai</option>
              <option value="Pune">📍 Pune</option>
              <option value="Nagpur">📍 Nagpur</option>
              <option value="Nashik">📍 Nashik</option>
              <option value="Aurangabad">📍 Aurangabad</option>
              <option value="Solapur">📍 Solapur</option>
              <option value="Amravati">📍 Amravati</option>
              <option value="Kolhapur">📍 Kolhapur</option>
              <option value="Thane">📍 Thane</option>
              <option value="Pimpri-Chinchwad">📍 Pimpri-Chinchwad</option>
              <option value="Sangli">📍 Sangli</option>
              <option value="Malegaon">📍 Malegaon</option>
              <option value="Jalgaon">📍 Jalgaon</option>
              <option value="Akola">📍 Akola</option>
              <option value="Latur">📍 Latur</option>
              <option value="Dhule">📍 Dhule</option>
              <option value="Ahmednagar">📍 Ahmednagar</option>
              <option value="Kalyan-Dombivli">📍 Kalyan-Dombivli</option>
              <option value="Navi Mumbai">📍 Navi Mumbai</option>
              <option value="Ichalkaranji">📍 Ichalkaranji</option>
            </select>
            <button type="submit" style={{ color: 'black' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contactform;
