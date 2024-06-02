// import React from 'react';
// import '../css/Login.css';
// import { Link } from 'react-router-dom';
// import Layout from './layout';

// function Login() {  
  
//   return (
    
//     <Layout>
      
//     <div className="loginc">

//       <div className="logincontent">
//       <h2>Login to HomeSeva</h2>
//       <form>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" name="username" />

//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" />

//         <button type="submit" style={{color:'black'}}>Login</button>
//         <nav style={{marginTop:30}}>
//          <ul> <Link to ="/Signup" style={{marginLeft:120}}> --------Or Sign up--------</Link> </ul>
//          <ul> <Link to ="/Serviceprovider" style={{marginLeft:80}}>---Or Register as Service Provider---</Link> </ul>
//          <ul> <Link to ="/ProviderLogin" style={{marginLeft:90}}>---Or Login as Service provider ---</Link> </ul>
//         </nav>
//       </form>
//       </div>
//       </div>
    
//     </Layout>
   
//   );
// }

// export default Login;





// import React, { useContext, useState } from 'react';
// import '../css/Login.css';
// import { Link, useNavigate } from 'react-router-dom';
// import Layout from './layout';
// import axios from 'axios';
// import { Context } from '../config/Context';

// function Login() {
//   const [loginData, setLoginData] = useState({ username: '', password: '' });
//   const [loginError, setLoginError] = useState('');

//   const {loginInfo, setLoginInfo} = useContext(Context);

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8080/login', loginData).then(res=>{
//         console.log('Login Successful');
//         console.log(res.data.data);
//         setLoginInfo(res.data.data);
//         navigate('/Ourservices');
//         // window.location.href = '/Ourservices';
//         // console.log(res.data);
//       }).catch(err=>{
//         console.log(err)
//       })
//       // const response = await fetch('http://localhost:8080/login', {
//         // method: 'POST',
//         // headers: {
//           // 'Content-Type': 'application/json',
//         // },
//         // body: JSON.stringify(loginData),
//       // });

//       // if (response.ok) {
//         // Redirect to dashboard or set authentication state
//         // console.log('Login Successful');
//         // console.log(response);
//         // window.location.href = '/Ourservices';

//       // } else {
//         // setLoginError('Invalid username or password');
//       // }
//     } catch (error) {
//       console.error('Login Error:', error);
//       setLoginError('Error during login. Please try again.');
//     }
//   };

//   return (
//     <Layout>
//       <div className="loginc">
//         <div className="logincontent">
//           <h2>Login to HomeSeva</h2>
//           <form onSubmit={handleLogin}>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={loginData.username}
//               onChange={handleInputChange}
//             />
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={loginData.password}
//               onChange={handleInputChange}
//             />
//             <button type="submit" style={{ color: 'black' }}>
//               Login
//             </button>
//             {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
//             <nav style={{ marginTop: 30 }}>
//               <ul>
//                 <Link to="/Signup" style={{ marginLeft: 120 }}>
//                   --------Or Sign up--------
//                 </Link>{' '}
//               </ul>
//               <ul>
//                 <Link to="/Serviceprovider" style={{ marginLeft: 80 }}>
//                   ---Or Register as Service Provider---
//                 </Link>{' '}
//               </ul>
//               <ul>
//                 <Link to="/ProviderLogin" style={{ marginLeft: 90 }}>
//                   ---Or Login as Service provider ---
//                 </Link>{' '}
//               </ul>
//             </nav>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Login;


import React, { useContext, useState } from 'react';
import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Layout from './layout';
import axios from 'axios';
import { Context } from '../config/Context';

function Login() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { loginInfo, setLoginInfo } = useContext(Context);
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
              <ul>
                <Link to="/Signup" style={{ marginLeft: 120 }}>
                  --------Or Sign up--------
                </Link>
              </ul>
              <ul>
                <Link to="/Serviceprovider" style={{ marginLeft: 80 }}>
                  ---Or Register as Service Provider---
                </Link>
              </ul>
              <ul>
                <Link to="/ProviderLogin" style={{ marginLeft: 90 }}>
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
