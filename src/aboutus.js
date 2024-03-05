import React from 'react';
import'./aboutus.css';
import Layout from './layout';

const AboutUsPage = () => {
  return (
   
    <div className='about'>
       <Layout>
      <h1>About Home Seva</h1>
      <p>Welcome to Home Seva, your trusted partner in home services!</p>
      <p>At Home Seva, we understand the importance of a well-maintained home.</p>
      <p> Our mission is to provide reliable, high-quality services to help homeowners across the globe take care of their homes with ease.</p>
      <h2>Our Values</h2>
      <ul>
        <p>Reliability: We are committed to delivering services you can count on.</p>
        <p>Quality: We strive for excellence in every service we provide.</p>
        <p>Customer Satisfaction: Your satisfaction is our top priority.</p>
        <p>Convenience: We make it easy for you to access the services you need.</p>
        <p>Community: We believe in giving back and supporting the communities we serve.</p>
      </ul>
      <h2>Our Team</h2>
      <p>Our team consists of dedicated professionals with years of experience in their respective fields. From plumbers and electricians to cleaners and gardeners, we have experts ready to assist you with all your home service needs.</p>
      <h2>Contact Us</h2>
      <p>If you have any questions or would like to learn more about our services, don't hesitate to get in touch with us. You can reach us via email at <a href="mailto:info@homeseva.com">info@homeseva.com</a> or by phone at 1-800-HOME-SEVA.</p>
      </Layout>
    </div>
    
  );

};

export default AboutUsPage;
