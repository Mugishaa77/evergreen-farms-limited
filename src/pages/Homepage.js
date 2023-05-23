import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";
import '../App.css';

export default function Homepage () {
    return (
        <div className="homepage">
            <div className="welcome">
              <span>Welcome to Evergreen!</span>
            </div>
            <div class="about">
  <div class="container">
    <h3>ABOUT US</h3>
    <hr/>

    <div class="section">
      <h4>Our Story</h4>
      <p>Evergreen Farms sprouted from a humble beginning as a small-scale vegetable home orchard in the heart of Nyalenda slums in Kisumu, Kenya. It was the brainchild of Leisley Odhiambo (Odhis), who cultivated his passion for farming into a thriving business. What began as a personal endeavor soon blossomed into something much greater, and Evergreen Farms was born.</p>
    </div>

    <div class="section">
      <h4>Our Team</h4>
      <p>Odhis understood the power of unity and the importance of nurturing young minds in his community. He started a small mentorship group aimed at inspiring the young men and women of Nyalenda. It was during this journey that he encountered like-minded individuals who shared his vision—Lavender, Judy, and Eric. Together, they formed the Green Team, also known as the Founding Four, and embarked on a remarkable journey that would redefine farming in their community.</p>
    </div>

    <div class="section">
      <h4>We Believe</h4>
      <p>At Evergreen Farms, our beliefs are deeply rooted in the transformative power of giving. As the saying goes, "<strong>We make a living out of what we get, but we make life out of what we give."</strong> We strive not only to cultivate bountiful crops but also to cultivate a sense of purpose and abundance in the lives of those around us.</p>
    </div>

    <div class="section">
      <h4>How We Operate</h4>
      <p>Innovation lies at the core of Evergreen Farms. Our groundbreaking Mobile Garden concept establishes a direct connection between farmers, grocers, and end-consumers. By eliminating unnecessary intermediaries, we ensure that farmers and grocers maximize their profits while significantly reducing the cost of food for consumers. Through this innovative approach, we are revolutionizing the agricultural industry and making fresh, nutritious food accessible to all.</p>
    </div>

    <div class="section">
      <h4>Our Vision</h4>
      <p>At Evergreen Farms, we envision a future where <strong>farmers have the autonomy to sell their produce</strong> at fair prices to grocers who, in turn, provide affordable food to consumers. This symbiotic relationship not only enhances the living standards of farmers and grocers but also fuels investment in agriculture as a thriving economic activity across Africa. By fostering sustainable farming practices and creating a more equitable food system, we are cultivating a brighter future for our continent.</p>
    </div>

    <div class="section">
      <h4>Our History</h4>
      <p>The tale of Evergreen Farms is still being written. It is a story of perseverance, resilience, and the unwavering determination to transform lives through agriculture. As we continue to make strides in empowering farmers, bridging the gap between grocers and consumers, and revolutionizing the way food is produced and distributed, our history is shaped by the remarkable people and communities we serve. Join us on this extraordinary journey as we sow the seeds of change, cultivate sustainable growth, and nurture a greener tomorrow for generations to come.</p>
    </div>
  </div>
</div>
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
</div>

 
    );
}