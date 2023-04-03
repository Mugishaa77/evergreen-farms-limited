import React from 'react';
import { Link } from 'react-router-dom';
import evergreen from '../logo/sharpened-evergreen.png';
import { BasketFill } from "react-bootstrap-icons";
import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../features/authSlice';
import { toast } from 'react-toastify';

export default function Navbar () {

  const dispatch = useDispatch ();
  const auth = useSelector((state) => state.auth);
  const { basketTotalQuantity } = useSelector((state) => state.basket);
  const AuthLinks = () => {
  return (
    <div>
      <Link to='/login'>Login</Link>
      <Link to='/sign-up'>Sign Up</Link>
    </div>
  );
};
  
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
           <Link to="/" className="nav-link active text-light">
             Home
           </Link>
        </li>
        <li class="nav-item">
          <Link to="/basket" className="nav-link active text-light">
            Market
                </Link>
        </li> 
        
        <li className="nav-item">
           <Link to="/farmer-dashboard" className="nav-link active text-light">Farmer</Link>
        </li>
       
        
        <li class="nav-item dropdown">
          <Link
           to="/basket-one"
               className="nav-link dropdown-toggle text-light"
              role="button"
               data-bs-toggle="dropdown"
              aria-expanded="false"
                >
               <BasketFill color="white" size={24} />
              </Link></li>
             
             <li className="nav-item">
              <span  className="nav-link active text-light">Basket:{ basketTotalQuantity }</span>
             </li>
          
          <ul class="dropdown-menu">
            <li className="drop"><Link to="/basket" class="dropdown-item text-primary" >Shop</Link></li>
            <li className="drop"><Link to="/basket-one" class="dropdown-item text-primary" >Checkout</Link></li>
            <li><hr class="dropdown-divider text-primary"/></li>
            <li><a class="dropdown-item text-primary" href="/">Top-up</a></li>
          </ul>
        
        <li class="nav-item">
          <a class="nav-link active text-light" href="/">contact Us</a>
        </li>
      </ul>
    </div>
  </div>

  {
  auth._id ? (
    <div className="links">
    
      
    
  <div onClick={() => {
    toast.warning("You have logged out", {
      position: "bottom-left"
    })
    dispatch(logoutUser(null))
  }}>
    Logout
  </div>
  </div>) : (<AuthLinks>
     <li className="nav-item">
    <Link to= "/login" className="nav-link active text-light">Login</Link>

     </li>
     <li className="nav-item">
      <Link to ="/sign-up" className="nav-link active text-light">Sign Up</Link>
     </li>
    </AuthLinks>
    
 )}
</nav>

    </div>
    );
} 
