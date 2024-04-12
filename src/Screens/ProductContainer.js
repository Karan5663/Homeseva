import React from 'react';

const ProductContainer = ({ products }) => {
  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          {/* Add more product details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ProductContainer