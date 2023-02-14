import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container d-flex justify-content-end">
      <h2>Contact us on:</h2>

      <p className="socials">
        <a href=""
      target="_blank"
      title="Instagram"
      rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
      </a>
      
      </p>
      
      
      <p className="socials">
      <a href=""
      target="_blank"
      title="Twitter"
      rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} className="twitter-icon" /></a></p>
      

      <p className="socials">
      <a href="mailto:lesliejobita@outlook.com"
      title="Email"
      rel="noopener noreferrer"
      class="email-link">
      <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" /></a></p>
      


      <p className="socials">
      <a href=""
      target="_blank"
      title="Facebook"
      rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook}  className="facebook-icon" /></a></p>
      


      <p className="socials">
      <a href=""
      target="_blank"
      title="Phone"
      rel="noopener noreferrer">
      <FontAwesomeIcon icon={faPhone} className="phone-icon" /></a>
</p>
      

       <p className="socials">
       <a href=""
      target="_blank"
      title="Whatsapp"
      rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
</a></p>
      
</div>

      
    </div>
  );
}



ReactDOM.render(<Footer />, document.getElementById('root'));
