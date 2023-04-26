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
      <Link to='/register'>Register</Link>
    </div>
  );
};
  
    return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-style">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={evergreen} width="220" height="130" alt=""/>
    </a>
    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
           <Link to="/" className="nav-link active text-light">
             Home
           </Link>
        </li>
        <li className="nav-item">
          <Link to="/basket" className="nav-link active text-light">
            Market
                </Link>
        </li> 
        
        <li className="nav-item">
           <Link to="/farmer-dashboard" className="nav-link active text-light">Farmer</Link>
        </li>

        <li className="nav-item">
           <Link to="/grocer-dashboard" className="nav-link active text-light">Grocer</Link>
        </li>
       <li className="nav-item">
           <Link to="/main-display" className="nav-link active text-light">Main Menu</Link>
        </li>
             
             <li className="nav-item">
              <Link to="/basket-one" className="nav-link active text-light">
                 <BasketFill color="white" size={24} />:{ basketTotalQuantity }
              </Link>
             </li>
        <li className="nav-item">
           <Link to="/about" className="nav-link active text-light">About Us</Link>
        </li>
        <li className="nav-item">
           <Link to="/contact-us" className="nav-link active text-light">Talk to Us</Link>
        </li>
      </ul>
    </div>
  </div>

  {auth._id ? (
  <div className="links">
    <div onClick={() => {
      toast.warning("You have logged out", {
        position: "bottom-left"
      })
      dispatch(logoutUser(null))
    }}>
      Logout
    </div>
  </div>
) : (
  <>
    <li className="nav-item">
      <Link to="/login" className="nav-link active text-light">Login</Link>
    </li>
    <li className="nav-item">
      <Link to="/register" className="nav-link active text-light">Register</Link>
    </li>
  </>
)}

</nav>

    </div>
    );
} 
