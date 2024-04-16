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


import '../css/ProductContainer.css';

const ProductContainer = () => {

  // const products = [
    // {
      // name: 'Vijay enterprices',
      // description: 'We provide best and cheap services',
      // price: '$10',
      // location: 'bawada kolahapur',
      // Phone: '123456789'
    // },
    // {
      // name: 'Product 2',
      // description: 'Description of Product 2',
      // price: '$20',
      // location: 'bawada kolahapur',
      // Phone: '123456789'
    // },
    // {
      // name: 'new user',
      // description: 'we provide best quality services',
      // price: '$30',
      // location: 'mangalwar peth kolapur',
      // Phone: '123456789'
    // }
  // ];
  // const [providers, setProviders] = useState([]);//Backend
  // const getProviders = async () => {
    // try {
        // const response = await fetch('http://localhost:8080/getProviders',{
        // method:'GET',
    // })
        // const data = await response.json();
        // setProviders(data);
    // } catch (error) {
        // console.error(error);
    // }
// }
// useEffect(() => {
    // getProviders();
// }, []);//Backend
  // return (
    // <div className="main-app">
        {/* <div className="content"> */}
        {/* <h2>Services</h2> */}
        {/* <h2>Services</h2> */}
      {/* </div> */}
      {/* <div className="product-container"> */}
        {/* {products.map((product, index) => ( */}
          // <div className="product" key={index}>
            {/* <h3>{product.name}</h3> */}
            {/* <p>{product.description}</p> */}
            {/* <p>Price: {product.price}</p> */}
            {/* <p>Location of shope: {product.location}</p> */}
            {/* <p>Phone No: {product.Phone}</p> */}
            {/* <div className="additional-container"> */}
              {/* <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Additional Image" /> */}
            {/* </div> */}
          {/* </div> ))} */}
          //  {/* <div>{ /*Backend */} */}
           {/*  */}
               {/* {providers.map(provider=> <li key={provider._id}> Name: {provider.username}, Work: {provider.work}, Location: {provider.location}, Phone: {provider.phoneNo} */}
                   {/* </li> */}
              //  )}
           {/*  */}
          //  {/* </div>{ /*Backend */} */}
       {/*  */}
      {/* </div> */}
    {/* </div> */}
    // 
  // );



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
              <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Additional Image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;