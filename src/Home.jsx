import { useState, useRef } from 'react';
import './Home.css';
import { v4 } from 'uuid';

function Home() {
  const [products, setProducts] = useState([]);
  const inputRef = useRef();

  function addProduct() {
    setProducts([{ id: v4(), name: inputRef.current.value }, ...products]);
    inputRef.current.value = '';
  }

  function deleteProduct(id) {
    setProducts(products.filter(product => product.id !== id));
  }

  return (
    <div className="container">
      <h1>Shop List</h1>
      <input placeholder='Products...' ref={inputRef} />
      <button onClick={addProduct}>Add</button>
      {products.map((product, index) => (
        <div key={product.id} className="product-item">
          <p>{product.name}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete Product</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
