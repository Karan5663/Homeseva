

import React, { useEffect, useState } from 'react';
import '../css/Signup.css';
import Layout from './layout';
import { Link } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const hasForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/demo', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    alert("Signup successfully");
  };

  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/demo', {
      method: 'GET',
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <div className="Signupc">
        <div className="Signup-container">
          <h2>Signup to HomeSeva</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" onChange={hasForm} id="username" name="username" />

            <label htmlFor="Email">Email:</label>
            <input type="email" onChange={hasForm} id="Email" name="Email" />

            <label htmlFor="password">Password:</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                onChange={hasForm}
                id="Password"
                name="Password"
              />
              <span style={{ marginTop: -16 }} className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? '👁️‍🗨️' : '👁️'}
              </span>
            </div>

            <label htmlFor="text">PhoneNo:</label>
            <input type="number" onChange={hasForm} id="phone" name="phone" />

            <button type="submit" style={{ color: 'black' }}>Signup</button>
            <ul >
              <Link to="/Login" style={{ marginLeft: 100 }}>
                --------Or Login--------
              </Link>
            </ul>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
