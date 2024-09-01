import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import './App.css'

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = products
    .filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'price-low-high') return a.price - b.price;
      if (sortOption === 'price-high-low') return b.price - a.price;
      if (sortOption === 'rating-high-low') return b.rating.rate - a.rating.rate;
      if (sortOption === 'rating-low-high') return a.rating.rate - b.rating.rate;
      return 0;
    });

  return (
    <div className="app">
      <div className='T-Header'>
        <h2>ProductList ({filteredProducts.length})</h2>
        <input
        className='Search-box'
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
      />

      <select onChange={handleSort}
      className='Sort-box'>
        <option value="">Sort by</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="rating-high-low">Rating: High to Low</option>
        <option value="rating-low-high">Rating: Low to High</option>
      </select>
      </div>
     
      <div className="card-container">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
