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

 



import React from 'react';
import '../css/ProductContainer.css'; // Import CSS file

const ProductContainer = () => {
  // Sample array of products
  const products = [
    {
      name: 'Vijay enterprices',
      description: 'We provide best and cheap services',
      price: '$10',
      location:'bawada kolahapur',
      Phone:'123456789'
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '$20',
      location:'bawada kolahapur',
      Phone:'123456789'
    },
    {
      name:'new user',
      description:'we provide best quality services',
      price:'$30',
      location:'mangalwar peth kolapur',
      Phone:'123456789'
    }
  ];

  return (
    <div className="main-app">
      <h1>Products</h1> 
      <div className="product-container">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <div className="additional-container">
              {/* Text in front of additional container */}
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Location of shope: {product.location}</p>
              <p>Phone No: {product.Phone}</p>
              {/* Additional container */}
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Additional Image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;