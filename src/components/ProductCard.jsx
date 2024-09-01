import React from 'react';
import '../App.css'
import Rating from '@mui/material/Rating';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3 className="card-title">{product.title.length > 60 ? `${product.title.slice(0, 60)} ...` : product.title}</h3>
      <div className='rating-container'>
      <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.1} readOnly />
      <span>{product.rating.rate}</span>
      </div>
      <p className="card-price">${product.price}</p>
    </div>
  );
};

export default ProductCard;
