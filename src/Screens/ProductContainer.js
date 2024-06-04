import React, { useState, useEffect } from 'react';
import '../css/ProductContainer.css';

const ProductContainer = () => {
  const [providers, setProviders] = useState([]);

  const getProviders = async () => {
    try {
      const response = await fetch('http://localhost:8080/getservinfo');
      const data = await response.json();
      setProviders(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProviders();
  }, []);
  const imageStyles = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className="main-app">
      <div className="content">
        <h2>Services</h2>
        <h2>Services</h2>
      </div>
      <div className="product-container">
        {providers.map((provider, index) => (
          <div className="product" key={index}>
            <h3>Name:{provider.Providername}</h3>
            <p>Email:{provider.Provideremail}</p>
            <p>Location: {provider.Plocation}</p>
            <p>Work: {provider.work}</p>
            <p>Image: <img src={provider.image} style={imageStyles} alt="Provider" /></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;