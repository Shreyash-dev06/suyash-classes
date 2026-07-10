import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import logoImg from "../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          {/* Column 1: About Suyash Classes */}
          <div className="footer-col footer-col-about">
            <div className="footer-brand">
              <img src={logoImg} alt="Suyash Classes" className="footer-logo" />
              <span className="footer-brand-text">Suyash Classes</span>
            </div>
            <p className="footer-desc">
              Empowering students since 1990 with quality education and personalized guidance for academic excellence.
            </p>
            <p className="footer-address">
              📍 Ground Floor, Shree Dattasai Tower, Near Wadala Post Office, Wadala West, Mumbai 400 033
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links-grid">
              <Link className="footer-link" to="/">Home</Link>
              <Link className="footer-link" to="/about">About Us</Link>
              <Link className="footer-link" to="/syllabus">Courses</Link>
              <Link className="footer-link" to="/events">Events</Link>
              <Link className="footer-link" to="/resources">Resources</Link>
              <Link className="footer-link" to="/contact">Contact</Link>
            </div>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="footer-col">
            <h4>Contact & Social</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item-new">
                <FaPhone className="footer-contact-icon" />
                <div className="footer-contact-phones">
                  <a href="tel:9987714003">9987714003</a>
                  <span className="phone-separator">·</span>
                  <a href="tel:8451011123">8451011123</a>
                  <span className="phone-separator">·</span>
                  <a href="tel:7208581418">7208581418</a>
                </div>
              </div>
              <div className="footer-contact-item-new">
                <FaEnvelope className="footer-contact-icon" />
                <a href="mailto:suyashclasseswadala@gmail.com">suyashclasseswadala@gmail.com</a>
              </div>
              <div className="footer-contact-item-new">
                <FaInstagram className="footer-contact-icon" />
                <a href="https://www.instagram.com/Suyash_classes_wadala" target="_blank" rel="noopener noreferrer">
                  @Suyash_classes_wadala
                </a>
              </div>
              <div className="footer-contact-item-new">
                <FaFacebook className="footer-contact-icon" />
                <a href="https://www.facebook.com/profile.php?id=61591699252858" target="_blank" rel="noopener noreferrer">
                  Facebook Page
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Admissions */}
          <div className="footer-col">
            <h4>Admissions</h4>
            <p className="footer-desc" style={{ marginBottom: "16px" }}>
              Admissions for the new academic year are now open. Limited seats available.
            </p>
            <Link to="/contact" className="footer-cta-btn">
              Book a Free Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 Suyash Classes. All Rights Reserved.
          </p>
          <p className="footer-developed">
            Developed by <a href="https://kaevron.in" target="_blank" rel="noopener noreferrer">Kaevron Technologies</a>
          </p>
          <p className="footer-motto">"विद्या विनयेन शोभते"</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
