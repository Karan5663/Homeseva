import React from 'react';
import '../css/Providerlogin.css';
import { Link } from 'react-router-dom';
import Layout from './layout';

function ProviderLogin() {
    const goBack = () => {
        window.history.back();
      };
  return (
    

    <Layout>
      <div className='providerc'>
    <div className="provider">
      <h2>Login to HomeSeva</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <Link  to="/PostService" type="submit" style={{color:'black'}}>Login</Link>
       
        <nav>
         <ul> <Link to ="/Serviceprovider" style={{marginLeft:30}}>---Or Register as Service Provider---</Link> 
         </ul>
         
        </nav>
        
        <button style={{color:'black'}} onClick={goBack}>Back</button>
      </form>
      </div>
    </div>
    </Layout>
   
  );
}

export default ProviderLogin;


