
import React from 'react';
import '../css/Contact.css';
import Layout from './layout';
function Contact() {
  return (
    <Layout>
    <div className="contact-container" >
      <h1 style={{color: "#ff5100"}}>Contact Us</h1>
      <div className="contact-info">
        <p>Email: info@homeseva.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: Kolhapur , Maharastra</p>
      </div>
    </div>
    </Layout>
  );
}

export default Contact;