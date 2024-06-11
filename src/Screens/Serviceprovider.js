<<<<<<< HEAD
// import React from 'react';
// import '../css/Serviceprovider.css'; 
// import Layout from './layout';

// function Serviceprovider() {
//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//     };


//     return (
//         <Layout>
//             <div className="servicec">
//                 <div className="service">
//                 <h2>Service Provider Registration</h2>
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" id="name" name="name" required />

//                     <label htmlFor="Address">Address:</label>
//                     <input type="text" id="Address" name="Address" required />

//                     <label htmlFor="Occupation">occupation:</label>
//                     <input type="text" id="Occupation" name="Occupation" required />

//                     <label htmlFor="contact">Contact Number:</label>
//                     <input type="text" id="contact" name="contact" required />

//                     <label htmlFor="email">Email:</label>
//                     <input type="email" id="email" name="email" required />

//                     <label htmlFor="location">Location Choice:</label>
//                     <select id="location" name="location" required>
//                         <option value="Mumbai">📍 Mumbai</option>
//                         <option value="Pune">📍 Pune</option>
//                         <option value="Nagpur">📍 Nagpur</option>
//                         <option value="Nashik">📍 Nashik</option>
//                         <option value="Aurangabad">📍 Aurangabad</option>
//                         <option value="Solapur">📍 Solapur</option>
//                         <option value="Amravati">📍 Amravati</option>
//                         <option value="Kolhapur">📍 Kolhapur</option>
//                         <option value="Thane">📍 Thane</option>
//                         <option value="Pimpri-Chinchwad">📍 Pimpri-Chinchwad</option>
//                         <option value="Sangli">📍 Sangli</option>
//                         <option value="Malegaon">📍 Malegaon</option>
//                         <option value="Jalgaon">📍 Jalgaon</option>
//                         <option value="Akola">📍 Akola</option>
//                         <option value="Latur">📍 Latur</option>
//                         <option value="Dhule">📍 Dhule</option>
//                         <option value="Ahmednagar">📍 Ahmednagar</option>
//                         <option value="Kalyan-Dombivli">📍 Kalyan-Dombivli</option>
//                         <option value="Navi Mumbai">📍 Navi Mumbai</option>
//                         <option value="Ichalkaranji">📍 Ichalkaranji</option>

                       
//                     </select>

//                     <button type="submit"style={{color:'black'}}>Submit</button>
//                 </form>
//                 </div>
//             </div>
//         </Layout>
//     );
// }

// export default Serviceprovider;
import React, { useState, useEffect } from 'react';
=======


import React, { useEffect } from 'react';
import '../css/Serviceprovider.css';
>>>>>>> 547cd5674a5faa55a1079231a275f9e7bc4063d8
import Layout from './layout';
import { useState } from 'react';
import { storage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

<<<<<<< HEAD
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
=======
function Serviceprovider() {
    const [form, setForm] = useState({});
    const [provi, setPinfo] = useState([]);
    const [Providerpass, setPassword] = useState('');
    const [Providercpass, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [imageUrl, setImageUrl] = useState(undefined);

    const [image, setImage] = useState('');
    const upload = () => {
        if (image == null) return;

        // Create a storage reference
        const storageRef = ref(storage, 'images/' + image.name);

        // Upload the file
        const uploadTask = uploadBytesResumable(storageRef, image);

        // Monitor the upload
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                console.error('Upload failed:', error);
            },
            () => {
                // Handle successful uploads on complete
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setForm({
                        ...form,
                        image: downloadURL
                    });
                    setImageUrl(downloadURL);
                });
            }
        );
    }

    useEffect(() => {
        if (imageUrl) {
            handleSubmit();
        }
    }, [imageUrl]);

    const hasForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const checkUserExists = async () => {
        try {
            const response = await fetch(`http://localhost:8080/checkUserExists`, {
                method: 'POST',
                body: JSON.stringify({ Providername: form.Providername, Providercpass: form.Providercpass }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data.exists; // Assuming the response contains a boolean 'exists' field
        } catch (error) {
            console.error('Error checking user:', error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();

        if (Providerpass === Providercpass) {
            const userExists = await checkUserExists();
            if (userExists) {
                setErrorMessage("User already exists. Please use a different name and password.");
                return;
            }

            alert("Registration Successfully");
            try {
                const response = await fetch('http://localhost:8080/PostproInfo', {
                    method: 'POST',
                    body: JSON.stringify(form),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                console.log(data);
                // window.location.href = '/Gotopage';
            } catch (error) {
                console.error(error);
            }
        } else {
            setErrorMessage("Passwords do not match. Please try again.");
        }
    };

    const getPinfo = async () => {
        const response = await fetch('http://localhost:8080/getproInfo', {
            method: 'GET',
        });
        const data = await response.json();
        setPinfo(data);
    }

    useEffect(() => {
        getPinfo();
>>>>>>> 547cd5674a5faa55a1079231a275f9e7bc4063d8
    }, []);

    return (
        <Layout>
<<<<<<< HEAD
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
=======
            <div className="servicec">
                <div className="service">
                    <h2>Service Provider Registration</h2>
                    <form>
                        <label htmlFor="Providername">Name:</label>
                        <input type="text" onChange={hasForm} id="Providername" name="Providername" required />

                        <label htmlFor="Provideraddress">Address:</label>
                        <input type="text" onChange={hasForm} id="Provideraddress" name="Provideraddress" required />

                        <label htmlFor="Providercontact">Contact Number:</label>
                        <input type="number" onChange={hasForm} id="Providercontact" name="Providercontact" required />

                        <label htmlFor="Provideremail">Email:</label>
                        <input type="email" onChange={hasForm} id="Provideremail" name="Provideremail" required />

                        <label htmlFor="Providerpass">Password:</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} id="Providerpass" name="Providerpass" required />

                        <label htmlFor="Providercpass">Confirm Password:</label>
                        <input type="password" onChange={(e) => { setConfirmPassword(e.target.value); hasForm(e); }} id="Providercpass" name="Providercpass" required />

                        <label htmlFor="Plocation">Location Choice:</label>
                        <select id="Plocation" name="Plocation" onChange={hasForm} >
                            <option value="" disabled selected>📍Select Location</option>
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

                        <label htmlFor="work">Select Work Service:</label>
                        <select onChange={hasForm} name="work">
                            <option value="" disabled selected>💼 Select Service</option>
                            <option value="Home Deep Cleaning">💼 Home Deep Cleaning</option>
                            <option value="Bathroom Cleaning">💼 Bathroom Cleaning</option>
                            <option value="Window Cleaning">💼 Window Cleaning</option>
                            <option value="Exterior Cleaning">💼 Exterior Cleaning</option>
                            <option value="Interior Painting">💼 Interior Painting</option>
                            <option value="Exterior Painting">💼 Exterior Painting</option>
                            <option value="Interior Texture">💼 Interior Texture</option>
                            <option value="Water Proofing">💼 Water Proofing</option>
                            <option value="Leak Repair">💼 Leak Repair</option>
                            <option value="Pipe Installation">💼 Pipe Installation</option>
                            <option value="Drain Cleaning">💼 Drain Cleaning</option>
                            <option value="Fixture Replacement">💼 Fixture Replacement</option>
                            <option value="Lighting Installation">💼 Lighting Installation</option>
                            <option value="Electrical Wiring">💼 Electrical Wiring</option>
                            <option value="Outlet Repair">💼 Outlet Repair</option>
                            <option value="Circuit Breaker Replacement">💼 Circuit Breaker Replacement</option>
                            <option value="Ant Control">💼 Ant Control</option>
                            <option value="Termite Treatment">💼 Termite Treatment</option>
                            <option value="Bed Bug Extermination">💼 Bed Bug Extermination</option>
                            <option value="Rodent Control">💼 Rodent Control</option>
                            <option value="Tv Repair">💼 Tv Repair</option>
                            <option value="Washing Machine Repair">💼 Washing Machine Repair</option>
                            <option value="Refrigerator">💼 Refrigerator</option>
                            <option value="Air Conditioner">💼 Air Conditioner</option>
                            <option value="Moving">💼 Moving</option>
                            <option value="Laundry">💼 Laundry</option>
                            <option value="Gardening">💼 Gardening</option>
                        </select>

                        <label htmlFor="Details">Details of your Services:</label>
                        <textarea
                            name="Details"
                            style={{ width: 420, paddingBottom: 30 }}
                            onChange={hasForm}
                            className="bord"
                            rows="4"
                            placeholder="Enter the Details of your Services"
                            type="text"
                            id="Details"
                        ></textarea>

                        <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} />

                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        <div style={{ paddingTop: -10,  marginBottom:10}}>
                           
                            
                            <div onClick={upload} style={{ marginLeft:-12, color: 'black', width: '100%', backgroundColor: "#ff8200", padding:10 , textAlign:'center'}}>Submit</div>
                        </div>
                    </form>
>>>>>>> 547cd5674a5faa55a1079231a275f9e7bc4063d8
                </div>
            </div>
        </Layout>
    );
}

<<<<<<< HEAD
export default PostUserInfo;
=======
export default Serviceprovider;
>>>>>>> 547cd5674a5faa55a1079231a275f9e7bc4063d8
