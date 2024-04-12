import React, { useState } from 'react';
import Layout from './layout';
import '../css/contactform.css';
const Contactform = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the form data here, like submitting it to a server or storing it in state
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      address: '',
      phoneNumber: '',
      email: ''
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
      
        <button type="submit" style={{color:'black'}}>Submit</button>
      </form>
      </div>
      </div>
    
    </Layout>
  );
};

export default Contactform;
