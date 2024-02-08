import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
    // Here you can implement your sign-up logic
    // For simplicity, I'm just checking if all fields are non-empty
    if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      setIsSignedUp(true);
    } else {
      alert('Please enter username, email, and password.');
    }
  };

  return (
    <div>
      {isSignedUp ? (
        <h2>Thank you for signing up, {username}!</h2>
      ) : (
        <div>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
