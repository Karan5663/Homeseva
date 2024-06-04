
import React, { useState, useEffect } from 'react';
import Layout from './layout';

function PostService() {
    const [form, setForm] = useState({});
    const [providers, setProviders] = useState([]);

    const hasForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.username || !form.work || !form.location || !form.phoneNo) {
            console.error("All fields are required.");
            return; 
        }
        try {
            const response = await fetch('http://localhost:8080/postService', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            getProviders();
        } catch (error) {
            console.error(error);
        }
    }

    const getProviders = async () => {
        try {
            const response = await fetch('http://localhost:8080/getProviders',{
            method:'GET',
        })
            const data = await response.json();
            setProviders(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProviders();
    }, []);

    return (
        <Layout>
            <div className='screen' style={{ height: 600, marginTop: 20 }}>
                <div className="login-container">
                    <h2>Post Service</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Service Provider Name:</label>
                        <input type="text" onChange={hasForm} id="username" name="username" />

                        <label htmlFor="work">Work:</label>
                        <select onChange={hasForm} name="work">
                            <option value="" disabled selected>
                                Select Work
                            </option>
                            <option value="💼 Home Cleaning" onChange={hasForm}>💼 Home Cleaning</option>
                            <option value="Home Painting" onChange={hasForm}>💼 Home Painting</option>
                            <option value="Plumbing" onChange={hasForm}>💼 Plumbing</option>
                            <option value="Electrician" onChange={hasForm}>💼 Electrician</option>
                            <option value="Pest Control" onChange={hasForm}>💼 Pest Control</option>
                            <option value="Home Appliances" onChange={hasForm}>💼 Home Appliances</option>
                            <option value="Moving" onChange={hasForm}>💼 Moving</option>
                            <option value="Laundry" onChange={hasForm}>💼 Laundry</option>
                            <option value="Gardening" onChange={hasForm}>💼 Gardening</option>
                            {/* Other options */}
                        </select>

                        <label htmlFor="location">Location:</label>
                        <select onChange={hasForm} name="location">
                            <option value="" disabled selected>
                                Select Location
                            </option>
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
                            {/* Other options */}
                        </select>

                        <label htmlFor="phoneNo">Service Provider Phone No:</label>
                        <input type="number" onChange={hasForm} id="phoneNo" name="phoneNo" />

                        <button type="submit" style={{ color: 'black' }}>Post</button>
                    </form>
                    <div>
                    <ul>
                        {providers.map(provider=> <li key={provider._id}> Name: {provider.username}, Work: {provider.work}, Location: {provider.location}, Phone: {provider.phoneNo}
                            </li>
                        )}
                    </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PostService;