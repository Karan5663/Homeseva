
import React from 'react';
import './Contact.css';
import Layout from './layout';
function Contact() {
  return (
    <Layout>
    <div className="contact-container">
      <h1 style={{color: "#182628"}}>Contact Us</h1>
      <div className="contact-info">
        <p>Email: info@homeseva.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 1234 HomeSeva Street, City, Country</p>
      </div>
    </div>
    </Layout>
  );
}

export default Contact;