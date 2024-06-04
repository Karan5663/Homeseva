

import React, { useEffect } from 'react';
import '../css/Serviceprovider.css';
import Layout from './layout';
import { useState } from 'react';
import { storage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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
    }, []);

    return (
        <Layout>
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
                </div>
            </div>
        </Layout>
    );
}

export default Serviceprovider;