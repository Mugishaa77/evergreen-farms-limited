import React from 'react';
import evergreen from '../logo/sharpened-evergreen.png';
import { BasketFill } from "react-bootstrap-icons";
import './Navbar.css';


export default function Navbar () {
    return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-style">
  <div className="container-fluid">
    <div class="container-fluid">
    <a class="navbar-brand" href="/">
<img src= {evergreen} width="150" height="130" alt=""></img>
    </a>
  </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/">Market</a>
        </li> 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <BasketFill color="white" size={24} />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item text-primary" href="/">Add to basket</a></li>
            <li><a className="dropdown-item text-primary" href="/">Empty basket</a></li>
            <li><hr className="dropdown-divider text-primary"/></li>
            <li><a className="dropdown-item text-primary" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/">Contact Us</a>
        </li>
    </div>
  </div>
</nav>
    </div>
    );
} 
