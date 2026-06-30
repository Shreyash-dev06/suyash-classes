import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          {/* Brand column */}
          <div>
            <div className="footer-brand">
              <img src={logoImg} alt="Suyash Classes" className="footer-logo" />
              <span className="footer-brand-text">Suyash Classes</span>
            </div>
            <p className="footer-desc">
              Empowering students since 1990 with quality education and personalised
              attention. Located in the heart of Wadala, Mumbai.
            </p>
            <div>
              <div className="footer-contact-item">
                <span>📍</span>
                <span>Ground Floor, Shree Dattasai Tower, Near Wadala Post Office, Wadala West, Mumbai 400 033</span>
              </div>
              <div className="footer-contact-item">
                <span>📧</span>
                <a href="mailto:suyashclasseswadala@gmail.com">suyashclasseswadala@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <span>📞</span>
                <a href="tel:9987714003">9987714003</a>
              </div>
            </div>
          </div>

          {/* Popular Courses */}
          <div className="footer-col">
            <h4>Popular Courses</h4>
            <Link className="footer-link" to="/syllabus">School Support (7th–10th)</Link>
            <Link className="footer-link" to="/syllabus">Become a HSC Topper</Link>
            <Link className="footer-link" to="/syllabus">HTML/CSS3 Essentials</Link>
            <Link className="footer-link" to="/syllabus">JEE/NEET Preparation</Link>
            <Link className="footer-link" to="/syllabus">WordPress Basic Tutorial</Link>
            <Link className="footer-link" to="/syllabus">E-Commerce Course</Link>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <a className="footer-link" href="tel:9987714003">📞 9987714003</a>
            <a className="footer-link" href="tel:8451011123">📞 8451011123</a>
            <a className="footer-link" href="tel:7208581418">📞 7208581418</a>
            <a className="footer-link" href="mailto:suyashclasseswadala@gmail.com">
              ✉️ Email Us
            </a>
            <a
              className="footer-link"
              href="https://www.instagram.com/Suyash_classes_wadala"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸 @Suyash_classes_wadala
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Suyash Classes Wadala. All rights reserved.
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
