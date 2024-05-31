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
        if (image == null)
            return;


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
                    })
                    setImageUrl(downloadURL);
                    // handleSubmit();
                });
            }
        );

    }

    useEffect(()=>{
        if(imageUrl){
            handleSubmit();
        }
    }, [imageUrl])

    const hasForm = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        // e.preventDefault();

        if (Providerpass === Providercpass) {
            alert("Passwords match. Form will be submitted.");
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
        // if (!form.name || !form.Address || !form.contact || !form.email || !form.location) {
        // setErrorMessage("All fields are required.");
        // return; // Exit function if any field is null
        // }
    };
    const getPinfo = async () => {

        const response = await fetch('http://localhost:8080/getproInfo', {
            method: 'GET',
        })
        const data = await response.json();
        setPinfo(data);
    }
    useEffect(() => {
        getPinfo();
    }, [])


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

                        <label htmlFor="Providercpass">Conform Password:</label>
                        <input type="password" onChange={(e) => { setConfirmPassword(e.target.value); hasForm(e); }} id="Providercpass" name="Providercpass" required />


                        <label htmlFor="Plocation">Location Choice:</label>
                        <select id="Plocation" name="Plocation" onChange={hasForm} >

                            <option value="" disabled selected>
                                📍Select Location
                            </option>
                            <option value="Mumbai" >📍 Mumbai</option>
                            <option value="Pune" >📍 Pune</option>
                            <option value="Nagpur" >📍 Nagpur</option>
                            <option value="Nashik" >📍 Nashik</option>
                            <option value="Aurangabad" >📍 Aurangabad</option>
                            <option value="Solapur" >📍 Solapur</option>
                            <option value="Amravati">📍 Amravati</option>
                            <option value="Kolhapur">📍 Kolhapur</option>
                            <option value="Thane" >📍 Thane</option>
                            <option value="Pimpri-Chinchwad">📍 Pimpri-Chinchwad</option>
                            <option value="Sangli" >📍 Sangli</option>
                            <option value="Malegaon" >📍 Malegaon</option>
                            <option value="Jalgaon" >📍 Jalgaon</option>
                            <option value="Akola" >📍 Akola</option>
                            <option value="Latur" >📍 Latur</option>
                            <option value="Dhule" >📍 Dhule</option>
                            <option value="Ahmednagar" >📍 Ahmednagar</option>
                            <option value="Kalyan-Dombivli" >📍 Kalyan-Dombivli</option>
                            <option value="Navi Mumbai" >📍 Navi Mumbai</option>
                            <option value="Ichalkaranji" >📍 Ichalkaranji</option>


                        </select>

                        <label htmlFor="work">Work:</label>
                        <select onChange={hasForm} name="work">
                            <option value="" disabled selected>
                                💼 Select Work
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
                        <div style={{ paddingTop: 40 }}>
                            <div onClick={upload} style={{ color: 'black', width: 429, backgroundColor: "rebeccapurple" }}>Submit</div>
                        </div>


                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Serviceprovider;
