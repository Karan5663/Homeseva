import React from 'react';
import '../css/Signup.css'; // Import the corresponding CSS file
import Layout from './layout';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';

function Signup() {

  const[form,setForm] = useState({});
  const hasForm =(e)=>{
   
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
  const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })  
    const data = await response.json();
    console.log(data);
  }
    return (
    <div className="baground">
    <Layout>
      
    <div className="Signup-container">
      <h2>Signup to HomeSeva</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" onChange={hasForm} id="username" name="username" />

        <label htmlFor="Email">Email:</label>
        <input type="email"  onChange={hasForm}id="Email" name="Email" />
        
        <label htmlFor="password">Password:</label>
        <input type="password" onChange={hasForm} id="Password" name="Password" />

        <label htmlFor="Phone">PhoneNo:</label>
        <input type="number" onChange={hasForm} id="phone" name="phone" />

        <button type="submit"style={{color:'black'}}>Signup</button>
      </form>
    </div>

    </Layout>
    </div>
  );
}

export default Signup;