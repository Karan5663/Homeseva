import React from 'react';
import './Home.css';
//import { Link } from 'react-router-dom';
import Layout from './layout';;

function App() {
  return (
    <Layout>
    <div className="App">
      
      <header className="App-header">
        <h1>Welcome to HomeSeva</h1>
        <p>
          We provide a range of home services to make your life easier.
        </p>
        <p>
          Whether it's cleaning, repairs, or maintenance, we've got you covered.
        </p>
        <a
          className="App-link"
          href="#services" style={{color:'red'}}
        >
          Explore Our Services
        </a>
      </header>
    <section classname="footer">
      <section id="services" className="App-services">
        <h2>Our Services</h2>
        <ul>
          <li>Cleaning</li>
          <li>Repairs</li>
          <li>Maintenance</li>
          {/* Add more services as needed */}
        </ul>
      </section>

      <section id="contact" className="App-contact">
        <h2>Contact Us</h2>
        <ul>
          <li>Email:info@HomeSeva.com</li>
          <li>Phone:123-556-1263</li>
        </ul>
        <p>
          Ready to make your life easier? Contact us for all your home service needs.
        </p>
        {/* Add a contact form or contact information here */}
      </section>
      </section>
    </div>
    </Layout>
  );
}

export default App;