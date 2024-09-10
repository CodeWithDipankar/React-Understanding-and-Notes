import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './About';

const App = () => {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1 className="logo">MyShop</h1>
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="#contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={
              <>
                <section className="hero">
                  <div className="hero-content">
                    <h2>Elevate Your Style</h2>
                    <p>Explore our exclusive collection of the finest sarees.</p>
                    <button className="cta-button">Shop Now</button>
                  </div>
                </section>
                <section className="featured-products">
                  <h2>Featured Products</h2>
                  <div className="products">
                    <div className="product-card">
                      <img src="https://via.placeholder.com/300" alt="Product 1" />
                      <h3>Elegant Saree</h3>
                      <p>$99.99</p>
                      <button className="buy-button">Buy Now</button>
                    </div>
                    <div className="product-card">
                      <img src="https://via.placeholder.com/300" alt="Product 2" />
                      <h3>Classic Saree</h3>
                      <p>$129.99</p>
                      <button className="buy-button">Buy Now</button>
                    </div>
                    <div className="product-card">
                      <img src="https://via.placeholder.com/300" alt="Product 3" />
                      <h3>Royal Saree</h3>
                      <p>$149.99</p>
                      <button className="buy-button">Buy Now</button>
                    </div>
                  </div>
                </section>
              </>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 MyShop. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
