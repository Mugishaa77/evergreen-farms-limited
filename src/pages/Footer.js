import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="last-nav">
          <h1>Let's Talk Green</h1>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h3>Email</h3>
            <a
              href="mailto:lesliejobita@outlook.com"
              title="Email"
              rel="noopener noreferrer"
              target="_blank"
              className="email-link"
            >
              lesliejobita@outlook.com
            </a>

            <h3>Twitter</h3>
            <a
              href="https://twitter.com/"
              target="_blank"
              title="Twitter"
              rel="noopener noreferrer"
            >
              Evergreen
            </a>

            <h3>Facebook</h3>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
            >
              Evergreen
            </a>
          </div>
          <div className="col-md-4">
            <h4>Work Inquiry</h4>
            <p className="text-muted">Let's work together</p>
            <a href="" className="btn btn-branding mt-3">
              Contact Us
            </a>
          </div>
          <div className="col-md-4">
            <p className="socials">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                title="Instagram"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="instagram-icon"
                />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                title="Twitter"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
              </a>

              <a
                href="mailto:lesliejobita@outlook.com"
                title="Email"
                rel="noopener noreferrer"
                className="email-link"
              >
                <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                title="Facebook"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="facebook-icon"
                />
              </a>

              <a
                href="tel:1234567890"
                target="_blank"
                title="Phone"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=1234567890"
                target="_blank"
                title="WhatsApp"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="whatsapp-icon"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Footer />, document.getElementById('root'));

