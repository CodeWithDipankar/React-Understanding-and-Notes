import React from 'react';
import './About.css'; // Make sure to create this CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <main className="about-main">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Welcome to MyShop! We are passionate about bringing you the finest sarees with exquisite craftsmanship. Our journey started with a simple idea of making traditional wear accessible to everyone. Each saree in our collection is a masterpiece, carefully selected to ensure quality and elegance.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At MyShop, our mission is to celebrate and preserve the rich heritage of sarees while offering a modern twist. We are committed to providing exceptional customer service and a seamless shopping experience. Your satisfaction is our top priority.
          </p>
        </section>
        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need assistance, feel free to reach out to us at support@myshop.com. We are here to help!
          </p>
        </section>
      </main>
      <footer className="about-footer">
        <p>&copy; 2024 MyShop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
