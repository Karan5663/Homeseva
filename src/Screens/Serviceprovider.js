import React from 'react';
import '../css/Serviceprovider.css'; 
import Layout from './layout';

function Serviceprovider() {
    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <Layout>
            <div className="screen"></div>
            <div className="login-container">
                <h2>Service Provider Registration</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="Address">Address:</label>
                    <input type="text" id="Address" name="Address" required />

                    <label htmlFor="Occupation">occupation:</label>
                    <input type="text" id="Occupation" name="Occupation" required />

                    <label htmlFor="contact">Contact Number:</label>
                    <input type="text" id="contact" name="contact" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="location">Location Choice:</label>
                    <select id="location" name="location" required>
                        <option value="Mumbai">📍 Mumbai</option>
                        <option value="Pune">📍 Pune</option>
                        <option value="Nagpur">📍 Nagpur</option>
                        <option value="Nashik">📍 Nashik</option>
                        <option value="Aurangabad">📍 Aurangabad</option>
                        <option value="Solapur">📍 Solapur</option>
                        <option value="Amravati">📍 Amravati</option>
                        <option value="Kolhapur">📍 Kolhapur</option>
                        <option value="Thane">📍 Thane</option>
                        <option value="Pimpri-Chinchwad">📍 Pimpri-Chinchwad</option>
                        <option value="Sangli">📍 Sangli</option>
                        <option value="Malegaon">📍 Malegaon</option>
                        <option value="Jalgaon">📍 Jalgaon</option>
                        <option value="Akola">📍 Akola</option>
                        <option value="Latur">📍 Latur</option>
                        <option value="Dhule">📍 Dhule</option>
                        <option value="Ahmednagar">📍 Ahmednagar</option>
                        <option value="Kalyan-Dombivli">📍 Kalyan-Dombivli</option>
                        <option value="Navi Mumbai">📍 Navi Mumbai</option>
                        <option value="Ichalkaranji">📍 Ichalkaranji</option>

                       
                    </select>

                    <button type="submit"style={{color:'black'}}>Submit</button>
                </form>
            </div>
        </Layout>
    );
}

export default Serviceprovider;
