import React, { useState } from 'react';
import bcrypt from 'bcrypt'; 
  const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
 

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const existingUser = localStorage.getItem(username);
        if (existingUser) 
        {
          throw new Error('Username already exists');
        }
  
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);
  
        
        const user = {
          username: username,
          password: hashed,
          email: email
        };
  
        localStorage.setItem(username, JSON.stringify(user));
  
        console.log('Registration successful');
      } 
      catch (error) 
      {
        console.log(error);
      }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
