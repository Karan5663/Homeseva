import React, { useContext, useState } from 'react';
import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Layout from './layout';
import axios from 'axios';
import { Context1 } from '../config/Context1';

function Login() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { setLoginInfo } = useContext(Context1);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/login', loginData).then(res => {
        console.log('Login Successful');
        console.log(res.data.data);
        setLoginInfo(res.data.data);
        navigate('/Ourservices');
      }).catch(err => {
        console.log(err);
        setLoginError('Invalid username or password');
      });
    } catch (error) {
      console.error('Login Error:', error);
      setLoginError('Error during login. Please try again.');
      
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <div className="loginc">
        <div className="logincontent">
          <h2>Login to HomeSeva</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={loginData.username}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Password:</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
              />
              <span style={{marginTop:-16}}className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? '👁️‍🗨️' : '👁️' }
              </span>
            </div>
            <button type="submit" style={{ color: 'black' }}>
              Login
            </button>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
            <nav style={{ marginTop: 30 }}>
              <ul >
                <Link to="/Signup" style={{ marginLeft: 135 }}>
                  --------Or Sign up--------
                </Link>
              </ul>
              <ul style={{marginTop:3}}>
                <Link to="/Serviceprovider" style={{ marginLeft:100  }}>
                  ---Or Register as Service Provider---
                </Link>
              </ul>
              <ul style={{marginTop:3}}>
                <Link to="/ProviderLogin" style={{ marginLeft: 110 }}>
                  ---Or Login as Service provider ---
                </Link>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
