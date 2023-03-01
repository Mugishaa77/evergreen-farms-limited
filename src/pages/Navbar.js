import React from 'react';
import evergreen from '../logo/sharpened-evergreen.png';
import { BasketFill } from "react-bootstrap-icons";
import './Navbar.css';



export default function Navbar () {
    return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-style">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src={evergreen} width="220" height="130" alt=""/>
    </a>
    <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="/">
            Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="/">Market</a>
        </li> 
        <li class="nav-item dropdown">
          
          <a class="nav-link dropdown-toggle text-light" href="/basket-one" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
            <BasketFill color="white" size={24} />

          </a>
          
          <ul class="dropdown-menu">
            <li><a class="dropdown-item text-primary" href="/">Add to basket</a></li>
            <li><a class="dropdown-item text-primary" href="/">Empty basket</a></li>
            <li><hr class="dropdown-divider text-primary"/></li>
            <li><a class="dropdown-item text-primary" href="/">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" href="/">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
    );
} 
