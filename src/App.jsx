import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState(productData);

  const handleDelete = (id) => {
    const filtered = products.filter(elem => elem._id !== id);
    setProducts(filtered)
  }

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setProducts(productData);
    } else {
      const filtered = productData.filter(elem => elem.name.toLowerCase().includes((e.target.value).toLowerCase()));
      setProducts(filtered);
    }
    //console.log(e.target.value)
  }

  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <SearchBar onSearch={handleSearch} />
      {products.map(elem=> {
        return(
        <ProductCard key={elem._id} info={elem} onDelete={handleDelete}/>
        )
      })}

    </div>
  );
}

export default App;
