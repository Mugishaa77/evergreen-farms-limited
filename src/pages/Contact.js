import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";
import '../App.css';

export default function Contact () {
    return(
        <div class="contact">
  <div class="container">
    <h3>Contact Us</h3>
    <hr/>
    <h4>Let's Talk Green!</h4>
    <p>If you have any questions or would like to get in touch with us, please feel free to reach out:</p>
    <div className="socials">
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
            </div>
    
   
  </div>
</div>
    );
}