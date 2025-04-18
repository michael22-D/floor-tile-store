import React from 'react';
import './App.css';

const products = [
  {
    id: 1,
    name: "Classic White Tile",
    image: "https://via.placeholder.com/150",
    price: 40,
  },
  {
    id: 2,
    name: "Glossy Marble Look",
    image: "https://via.placeholder.com/150",
    price: 55,
  },
  {
    id: 3,
    name: "Rustic Floor Tile",
    image: "https://via.placeholder.com/150",
    price: 35,
  },
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>TileMart</h1>
        <nav>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₵{product.price}</p>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2025 TileMart. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
