import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register.js';
import Profile from './Components/Profile.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/Register" className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
              <Link to="/Profile" className="nav-link">Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/Navbar" className="nav-link">Navigation</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Navigation' element={<Navbar/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return <h2>Welcome to the Home page</h2>;
}

export default App;



