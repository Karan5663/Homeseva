import React from 'react';
import './Signup.css'; // Import the corresponding CSS file
import Layout from './layout';
function Signup() {
  return (
    <div className="baground">
    <Layout>
      
    <div className="Signup-container">
      <h2>Signup to Home Services</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="Email">Email:</label>
        <input type="email" id="Email" name="Email" />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="Password" name="Password" />

        <label htmlFor="Phone">PhoneNo:</label>
        <input type="number" id="phone" name="phone" />

        <button type="submit">Signup</button>
      </form>
    </div>

    </Layout>
    </div>
  );
}

export default Signup;