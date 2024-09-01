import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3 className="card-title">{product.title}</h3>
      <p className="card-price">${product.price}</p>
      <p className="card-rating">Rating: {product.rating.rate}</p>
    </div>
  );
};

export default ProductCard;
