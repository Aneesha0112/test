import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';


const Navigation = () => {
  const guest = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/Register">Register</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Profile">Profile</Link>
      </li>
    </Fragment>
  );

  return (
    <div>
    <nav className="custom-navbar navbar navbar-expand-lg navbar-dark bg-primary">
     <div className="custom-container container">
    <Link className="custom-navbar-brand navbar-brand" to="/">User Interface Programming</Link>
    <button className="custom-navbar-toggler navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="custom-collapse navbar-collapse" id="navbarNav">
      <ul className="custom-navbar-nav navbar-nav ms-auto"></ul>
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
          </ul>
        </nav>
    </div>
    </div>
    </nav>
    </div>
  );
}

export default Navigation;
