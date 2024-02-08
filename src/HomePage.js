// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Our Home Services</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
      <section id="services">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Plumbing</h3>
          <p>We offer plumbing services including repairs, installations, and maintenance.</p>
        </div>
        <div className="service">
          <h3>Electrical Work</h3>
          <p>Our team provides electrical services such as wiring, lighting installation, and repairs.</p>
        </div>
        <div className="service">
          <h3>Home Cleaning</h3>
          <p>We offer professional home cleaning services tailored to your needs.</p>
        </div>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>If you're interested in our services or have any questions, feel free to contact us:</p>
        <ul>
          <li>Email: info@homeservices.com</li>
          <li>Phone: 123-456-7890</li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2024 Home Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
