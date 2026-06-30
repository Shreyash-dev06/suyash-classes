import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // <-- NEW import
import * as XLSX from "xlsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import "./Contact.css";

const STORAGE_KEY = "suyash-classes-consultations";
const inquiryOptions = [
  "Select an option",
  "7th - 10th School Support",
  "11th - 12th Board Coaching",
  "JEE Preparation",
  "NEET Preparation",
  "CET Preparation",
  "Other",
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    inquiryType: inquiryOptions[0],
    message: "",
  });
  const [entries, setEntries] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setEntries(JSON.parse(saved));
      } catch (error) {
        console.error("Invalid consultation data", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSuccess(false);
  };

  const handleSubmit = async (event) => {
      event.preventDefault();

      if (
        !formData.fullName ||
        !formData.mobile ||
        formData.inquiryType === inquiryOptions[0]
      ) {
        return;
      }

      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbyB5OzQ2zRICmndhLAQxHyLsS7NtprHuBOdQQgC6U_JFHyDUVzuBKeoMe98DRLTs2pHKA/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(formData),
          }
        );

        const newEntry = {
          "Full Name": formData.fullName,
          "Mobile Number": formData.mobile,
          "Email Address": formData.email,
          "Inquiry Type": formData.inquiryType,
          Message: formData.message,
          Submitted: new Date().toLocaleString(),
        };

        setEntries((prev) => [newEntry, ...prev]);

        setFormData({
          fullName: "",
          mobile: "",
          email: "",
          inquiryType: inquiryOptions[0],
          message: "",
        });

        setSuccess(true);

      } catch (error) {
        console.error("Submission failed:", error);
        alert("Failed to send inquiry.");
      }
    };
  const downloadExcel = () => {
    if (!entries.length) return;
    const worksheet = XLSX.utils.json_to_sheet(entries);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Consultations");
    XLSX.writeFile(workbook, "suyash-classes-consultations.xlsx");
  };

  return (
    <PageTransition>
    <div style={{ background: "var(--off-white)", minHeight: "100vh" }}>
      <Navbar />

      {/* ===== HERO ===== */}
      <motion.section
        className="contact-hero"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container">
          <div className="section-badge" style={{ background: "rgba(255,255,255,0.18)", borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}>
            📬 Get in Touch
          </div>
          <h1 style={{ marginTop: 10 }}>Get in Touch</h1>
          <p>
            We're here to answer your questions and guide you through your
            learning journey. Reach out anytime — our team will respond promptly.
          </p>
        </div>
      </motion.section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container" style={{ paddingTop: 0, paddingBottom: 80 }}>
        <motion.div
          className="contact-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="contact-card-inner">
            {/* Left — Contact info */}
            <div>
              <div className="section-badge">📞 Contact Us</div>
              <h2 style={{
                fontSize: "1.6rem", fontWeight: 800,
                color: "var(--text-dark)", marginBottom: 12, marginTop: 8,
              }}>
                Contact Us
              </h2>
              <p style={{ color: "var(--text-light)", lineHeight: 1.75, fontSize: "0.93rem", marginBottom: 28 }}>
                Ground Floor, Shree Dattasai Tower,<br />
                Near Wadala Post Office,<br />
                Wadala West, Mumbai 400 033
              </p>

              {/* Info items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "var(--teal-pale)", display: "flex",
                    alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0,
                  }}>📍</div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 2 }}>Address</div>
                    <div style={{ fontSize: "0.88rem", color: "var(--text-dark)", fontWeight: 500 }}>Wadala West, Mumbai 400 033</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "var(--teal-pale)", display: "flex",
                    alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0,
                  }}>✉️</div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 2 }}>Email</div>
                    <a href="mailto:suyashclasseswadala@gmail.com" style={{ fontSize: "0.88rem", color: "var(--teal)", fontWeight: 500 }}>
                      suyashclasseswadala@gmail.com
                    </a>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "var(--teal-pale)", display: "flex",
                    alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0,
                  }}>📞</div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 2 }}>Phone</div>
                    <div style={{ fontSize: "0.88rem", color: "var(--text-dark)", fontWeight: 500 }}>
                      <a href="tel:9987714003" style={{ color: "var(--text-dark)" }}>9987714003</a> ·{" "}
                      <a href="tel:8451011123" style={{ color: "var(--text-dark)" }}>8451011123</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Keep in touch social row */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-light)", marginBottom: 12 }}>Keep in Touch</div>
                <div style={{ display: "flex", gap: 10 }}>
                  {["📘", "🐦", "💼", "📸", "▶️"].map((icon, i) => (
                    <div
                      key={i}
                      style={{
                        width: 36, height: 36, borderRadius: "50%",
                        background: "var(--off-white)", border: "1px solid var(--border)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.9rem", cursor: "pointer", transition: "all 0.2s",
                      }}
                    >{icon}</div>
                  ))}
                </div>
              </div>

              {/* Google Map */}
              <div
                style={{
                  width: "100%",
                  height: "250px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <iframe
                  title="Suyash Classes Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0750331672375!2d72.85268607394946!3d19.016415053842895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfaee4b69573%3A0x6726420f45d9c702!2sSUYASH%20CLASSES%20WADALA!5e0!3m2!1sen!2sin!4v1781991429669!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <div className="section-badge">❓ Have Questions?</div>
              <h2 style={{
                fontSize: "1.6rem", fontWeight: 800,
                color: "var(--text-dark)", marginBottom: 8, marginTop: 8,
              }}>
                Schedule a Consultation
              </h2>
              <p style={{ color: "var(--text-light)", lineHeight: 1.75, fontSize: "0.92rem", marginBottom: 24 }}>
                Share your details and a brief description of your study requirements.
                We'll respond personally and guide you through enrollment.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row split">
                  <label>
                    <span>Name</span>
                    <input
                      className="input-field"
                      type="text"
                      name="fullName"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      className="input-field"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="form-row split">
                  <label>
                    <span>Mobile Number</span>
                    <input
                      className="input-field"
                      type="tel"
                      name="mobile"
                      placeholder="98XXX XXXXX"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    <span>Inquiry Type</span>
                    <select
                      className="input-field"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                    >
                      {inquiryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="form-row full">
                  <span>Your Message</span>
                  <textarea
                    className="input-field textarea"
                    name="message"
                    rows="4"
                    placeholder="Briefly describe your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </label>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-teal"
                    onClick={downloadExcel}
                    disabled={!entries.length}
                    style={{ opacity: entries.length ? 1 : 0.5 }}
                  >
                    Download Excel
                  </button>
                </div>

                {success && (
                  <div className="success-message">
                    ✅ Consultation request saved! We'll be in touch soon.
                  </div>
                )}
              </form>

              <div className="contact-summary">
                <p>{entries.length} consultation request(s) available for download.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
    </PageTransition>
  );
}

export default Contact;