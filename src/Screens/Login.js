import React from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';
import Layout from './layout';

function Login() {
  return (
    
    <Layout>
      <div className='screen' style={{height:600,marginTop:20}}>
    <div className="login-container">
      <h2>Login to HomeSeva</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit" style={{color:'black'}}>Login</button>
        <nav>
         <ul> <Link to ="/Signup" style={{marginLeft:71}}>--------Or Sign up--------</Link> </ul>
         <ul> <Link to ="/Serviceprovider" style={{marginLeft:30}}>---Or Register as Service Provider---</Link> </ul>
        </nav>
      </form>
      </div>
    </div>
    </Layout>
   
  );
}

export default Login;