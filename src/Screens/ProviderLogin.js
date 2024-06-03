// // import React,{useContext,useState} from 'react';
// // import '../css/Providerlogin.css';
// // import { Link, useNavigate} from 'react-router-dom';
// // import Layout from './layout';
// // import axios from 'axios';
// // import { Context } from '../config/Context';
// // function ProviderLogin() {
// //   const [loginData, setLoginData] = useState({ Providername: '', Providercpass: '' });
// //   const [loginError, setLoginError] = useState('');

// //   const { loginInfo, setLoginInfo } = useContext(Context);
// //   const navigate = useNavigate();
// //   const handleInputChange = (e) => {
// //     setLoginData({ ...loginData, [e.target.name]: e.target.value });
// //   };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('http://localhost:8080/prologin', loginData).then(res => {
// //         console.log('Login Successful');
// //         console.log(res.data.data);
// //         setLoginInfo(res.data.data);
// //         navigate('/ ');
// //         // window.location.href = '/Ourservices';
// //         // console.log(res.data);
// //       }).catch(err => {
// //         console.log(err)
// //       })
// //       // const response = await fetch('http://localhost:8080/login', {
// //       // method: 'POST',
// //       // headers: {
// //       // 'Content-Type': 'application/json',
// //       // },
// //       // body: JSON.stringify(loginData),
// //       // });
// //       // if (response.ok) {
// //       // Redirect to dashboard or set authentication state
// //       // console.log('Login Successful');
// //       // console.log(response);
// //       // window.location.href = '/Ourservices';
// //       // } else {
// //       // setLoginError('Invalid username or password');
// //       // }
// //     } catch (error) {
// //       console.error('Login Error:', error);
// //       setLoginError('Error during login. Please try again.');
// //     }
// //   };


// //   return (


// //     <Layout>
// //       <div className='providerc'>
// //         <div className="provider">
// //           <h2>Login to HomeSeva</h2>
// //           <form onSubmit={handleLogin}>
// //             <label htmlFor="Providername">Username:</label>
// //             <input type="text" id="Providername" name="Providername" value={loginData.Providername} onChange={handleInputChange} />

// //             <label htmlFor="Providercpass">Password:</label>
// //             <input type="password" id="Providercpass" name="Providercpass" value={loginData.Providercpass} onChange={handleInputChange} />

// //             <button type="submit" style={{ color: 'black' }}>
// //               Login
// //             </button>
// //             {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          
// //             <nav style={{ marginTop: 30 }}>
// //               <ul> <Link to="/Serviceprovider" style={{ marginLeft: 30 }}>---Or Register as Service Provider---</Link>
// //               </ul>

// //             </nav>
// //           </form>
// //         </div>
// //       </div>
// //     </Layout>

// //   );
// // }

// // export default ProviderLogin;





// import React, { useContext, useState } from 'react';
// import '../css/Providerlogin.css';
// import { Link, useNavigate } from 'react-router-dom';
// import Layout from './layout';
// import axios from 'axios';
// import { Context } from '../config/Context';

// function ProviderLogin() {
//   const [loginData, setLoginData] = useState({ Providername: '', Providercpass: '' });
//   const [loginError, setLoginError] = useState('');

//   const { loginInfo, setLoginInfo } = useContext(Context);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8080/prologin', loginData)
//         .then(res => {
//           console.log('Login Successful');
//           console.log(res.data.data);
//           setLoginInfo(res.data.data);
//           navigate('/ProviderDetails');
//         }).catch(err => {
//           console.log(err);
//           setLoginError('Invalid username or password');
//         });
//     } catch (error) {
//       console.error('Login Error:', error);
//       setLoginError('Error during login. Please try again.');
//     }
//   };

//   return (
//     <Layout>
//       <div className='providerc'>
//         <div className="provider">
//           <h2>Login to HomeSeva</h2>
//           <form onSubmit={handleLogin}>
//             <label htmlFor="Providername">Username:</label>
//             <input type="text" id="Providername" name="Providername" value={loginData.Providername} onChange={handleInputChange} />

//             <label htmlFor="Providercpass">Password:</label>
//             <input type="password" id="Providercpass" name="Providercpass" value={loginData.Providercpass} onChange={handleInputChange} />

//             <button type="submit" style={{ color: 'black' }}>
//               Login
//             </button>
//             {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          
//             <nav style={{ marginTop: 30 }}>
//               <ul>
//                 <Link to="/Serviceprovider" style={{ marginLeft: 30 }}>---Or Register as Service Provider---</Link>
//               </ul>
//             </nav>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default ProviderLogin;


// import React, { useContext, useState } from 'react';
// import '../css/Providerlogin.css';
// import { Link, useNavigate } from 'react-router-dom';
// import Layout from './layout';
// import axios from 'axios';
// import { Context1 } from '../config/Context1'; // Make sure the import path is correct

// function ProviderLogin() {
//   const [loginData, setLoginData] = useState({ Providername: '', Providercpass: '' });
//   const [loginError, setLoginError] = useState('');

//   const { loginInfo, setLoginInfo } = useContext(Context1); // Correctly use the context
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8080/prologin', loginData)
//         .then(res => {
//           console.log('Login Successful');
//           console.log(res.data.data);
//           setLoginInfo(res.data.data);
//           navigate('/ProviderDetails');
//         }).catch(err => {
//           console.log(err);
//           setLoginError('Invalid username or password');
//         });
//     } catch (error) {
//       console.error('Login Error:', error);
//       setLoginError('Error during login. Please try again.');
//     }
//   };

//   return (
//     <Layout>
//       <div className='providerc'>
//         <div className="provider">
//           <h2>Login to HomeSeva</h2>
//           <form onSubmit={handleLogin}>
//             <label htmlFor="Providername">Username:</label>
//             <input type="text" id="Providername" name="Providername" value={loginData.Providername} onChange={handleInputChange} />

//             <label htmlFor="Providercpass">Password:</label>
//             <input type="password" id="Providercpass" name="Providercpass" value={loginData.Providercpass} onChange={handleInputChange} />

//             <button type="submit" style={{ color: 'black' }}>
//               Login
//             </button>
//             {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          
//             <nav style={{ marginTop: 30 }}>
//               <ul>
//                 <Link to="/Serviceprovider" style={{ marginLeft: 30 }}>---Or Register as Service Provider---</Link>
//               </ul>
//             </nav>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default ProviderLogin;

import React, { useContext, useState } from 'react';
import '../css/Providerlogin.css';
import { Link, useNavigate } from 'react-router-dom';
import Layout from './layout';
import axios from 'axios';
import { Context1 } from '../config/Context1'; // Make sure the import path is correct

function ProviderLogin() {
  const [loginData, setLoginData] = useState({ Providername: '', Providercpass: '' });
  const [loginError, setLoginError] = useState('');

  const { loginInfo, setLoginInfo } = useContext(Context1); // Correctly use the context
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/prologin', loginData)
        .then(res => {
          console.log('Login Successful');
          console.log(res.data.data);
          setLoginInfo(res.data.data);
          navigate('/ProviderDetails');
        }).catch(err => {
          console.log(err);
          setLoginError('Invalid username or password');
        });
    } catch (error) {
      console.error('Login Error:', error);
      setLoginError('Error during login. Please try again.');
    }
  };

  return (
    <Layout>
      <div className='providerc'>
        <div className="provider">
          <h2>Login to HomeSeva</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="Providername">Username:</label>
            <input type="text" id="Providername" name="Providername" value={loginData.Providername} onChange={handleInputChange} />

            <label htmlFor="Providercpass">Password:</label>
            <input type="password" id="Providercpass" name="Providercpass" value={loginData.Providercpass} onChange={handleInputChange} />

            <button type="submit" style={{ color: 'black' }}>
              Login
            </button>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          
            <nav style={{ marginTop: 30 }}>
              <ul>
                <Link to="/Serviceprovider" style={{ marginLeft: 30 }}>---Or Register as Service Provider---</Link>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default ProviderLogin;
