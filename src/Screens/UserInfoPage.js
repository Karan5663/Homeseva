import React from 'react';

function UserInfoPage({ users }) {
  return (
    <div>
      <h2>User Information</h2>
      {users.map(user => (
        <div key={user._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>User Details</h3>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.Email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default UserInfoPage;
