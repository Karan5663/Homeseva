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
      const response = await fetch('http://localhost:8080/getProviders');
      const data = await response.json();
      setProviders(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProviders();
  }, []);

  return (
    <div className="main-app">
      <div className="content">
        <h2>Services</h2>
        <h2>Services</h2>
      </div>
      <div className="product-container">
        {providers.map((provider, index) => (
          <div className="product" key={index}>
            <h3>{provider.username}</h3>
            <p>{provider.work}</p>
            <p>Location: {provider.location}</p>
            <p>Phone No: {provider.phoneNo}</p>
            <div className="additional-container">
              {/* <img src={provider.imageURL} alt="Additional Image" /> */}
              <img src= {my} alt="my" />  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;