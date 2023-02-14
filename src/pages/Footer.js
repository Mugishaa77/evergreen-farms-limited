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
      <div className="container">
        <div className="last-nav">
           <h1>Let's get in Touch!</h1>
        </div>
       
        <div className="row">
          <div className="col-4">
            <h3>Email</h3>
            <a href="mailto:lesliejobita@outlook.com"
              title="Email"
              rel="noopener noreferrer"
              target="-blank"
              class="email-link">Lesliejobita@outlook.com</a>

            <h3>Twitter</h3>
            <a href=""
              target="_blank"
              title="Twitter"
              rel="noopener noreferrer">Evergreen</a>

            <h3>Facebook</h3>
            <a href=""
              target="_blank"
              title="Twitter"
              rel="noopener noreferrer">Evergreen</a>
          </div>
          <div className="col-4">
            <h4>Work Inquiry</h4>
            <p class="text-muted">Let's work together</p>
            <a href="" class="btn btn-branding mt-3">Contact Us</a>
          </div>
          <div className="col-4">
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
                <FontAwesomeIcon icon={faFacebook} className="facebook-icon" /></a></p>

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
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Footer />, document.getElementById('root'));
