import React, { useState } from 'react';
import bcrypt from 'bcrypt'; 

const Login= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      const users = {
        user1: 
        {
          username: 'user1',
          password: await bcrypt.hash('password1', 10) 
        },
        user2:
         {
          username: 'user2',
          password: await bcrypt.hash('password2', 10) 
        }
      };

      
      const user = users[username];
      if (!user) {
        throw new Error('User does not exist');
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        throw new Error('Incorrect password');
      }

      console.log('Login successful');
    } 
    catch (error) 
    {
      console.log(error);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
