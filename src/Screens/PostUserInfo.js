
import React, { useState, useEffect } from 'react';
import Layout from './layout';

function PostUserInfo() {
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
        if (!form.username || !form.area || !form.location || !form.phoneNo) {
            console.error("All fields are required.");
            return; // Exit function if any field is null
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

                        

                        <label htmlFor="area">area:</label>
                        <select onChange={hasForm} name="area">
                            <option value="" disabled selected>
                                Select area
                            </option>
                            <option value=" 500  sq" onChange={hasForm}> 500  sq</option>
                            <option value=" 1000 sq" onChange={hasForm}> 1000 sq</option>
                            <option value=" 1500 sq" onChange={hasForm}> 1500 sq</option>
                            <option value=" 2000 sq" onChange={hasForm}> 2000 sq</option>
                            <option value=" 2500 sq" onChange={hasForm}> 2500 sq</option>
                            <option value=" 3000 sq" onChange={hasForm}> 3000 sq</option>
                            <option value=" 3500 sq" onChange={hasForm}> 3500 sq</option>
                            <option value=" 4000 sq" onChange={hasForm}> 4000 sq</option>
                            <option value=" 5000 sq" onChange={hasForm}> 5000 sq</option>
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
                        <label htmlFor="Workarea">Workarea:</label>
 <select onChange={hasForm} name="Workarea">
     <option value="" disabled selected>
         Select area
     </option>
     <option value=" House" onChange={hasForm}> House </option>
     <option value=" Villa" onChange={hasForm}> Villa </option>
     <option value=" Manson" onChange={hasForm}> Manson </option>
     <option value=" School" onChange={hasForm}> School </option>
     <option value=" Office" onChange={hasForm}> Office </option>
     <option value=" Hospital" onChange={hasForm}> Hospital </option>
     <option value=" Flats" onChange={hasForm}> Flats </option>
     <option value=" Car" onChange={hasForm}> Car </option>
     <option value=" Hotel" onChange={hasForm}> Hotel </option>
     {/* Other options */}
 </select>

                        

                        <label htmlFor="phoneNo">Service Provider Phone No:</label>
                        <input type="number" onChange={hasForm} id="phoneNo" name="phoneNo" />

                        <button type="submit" style={{ color: 'black' }}>Post</button>
                    </form>
                    <div>
                    <ul>
                        {providers.map(provider=> <li key={provider._id}> Name: {provider.username}, area: {provider.area}, Location: {provider.location}, Phone: 
                            </li>
                        )}
                    </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PostUserInfo;