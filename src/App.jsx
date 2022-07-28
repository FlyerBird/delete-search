import React, { useState } from 'react';
import './App.css';
import productData from './products.json';

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
    console.log(e.target.value)
  }

  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <input type="text" placeholder='search🔎' onChange={(e) => handleSearch(e)}  />
      {products.map(elem=> {
        return(
          <div key={elem._id}>
            <p>{elem.name}</p>
            <button onClick={() => handleDelete(elem._id)}>Delete</button>

          </div>
        )
      })}

    </div>
  );
}

export default App;
