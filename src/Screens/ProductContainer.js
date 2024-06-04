//import React from 'react';
//import '../css/ProductContainer.css'; // Import CSS file
//const ProductContainer = () => {
//  // Sample array of products
//  const products = [
//    { name: 'Product 1', description: 'Description of Product 1', price: '$10' },
//    { name: 'Product 2', description: 'Description of Product 2', price: '$20' },
//    // Add more products as needed
//  ];
//  return (
//    <div className="main-app">
//      <h1>Products</h1>
//      <div className="product-container">
//        {products.map((product, index) => (
//          <div className="product" key={index}>
//            <h3>{product.name}</h3>
//            <p>{product.description}</p>
//            <p>Price: {product.price}</p>
//            {/* Add more product details as needed */}
//          </div>
//        ))}
//      </div>
//    </div>
//  );
//};
//export default ProductContainer;



import React, { useState, useEffect } from 'react';
import my from "../Img/new.jpg";

import '../css/ProductContainer.css';

const ProductContainer = () => {
  const [providers, setProviders] = useState([]);

  // Fetch data from the backend
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


            
            {/* <div className="additional-container"> */}
              {/* <img src={provider.imageURL} alt="Additional Image" /> */}
              {/* <img src= {my} alt="my" />   */}
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;