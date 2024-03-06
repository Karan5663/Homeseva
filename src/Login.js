import React from 'react';
import './Login.css'; // Import the corresponding CSS file
import { Link } from 'react-router-dom';
import Layout from './layout';

function Login() {
  return (
    
    <Layout>
    <div className="login-container">
      <h2>Login to Home Services</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Login</button>
        <nav>
         <ul> <Link to ="/Signup" style={{marginLeft:71}}>--------Or Sign up--------</Link> </ul>
        </nav>
      </form>
    </div>
    </Layout>
   
  );
}

export default Login;