import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import "./About.css";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function About() {
  return (
    <PageTransition>
      <div style={{ background: "#f8f9fa", minHeight: "100vh" }}>
        <Navbar />

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{
            background: "linear-gradient(135deg, #1a1a2e, #0f0f1c)",
            color: "#fff",
            padding: "80px 0 60px",
            textAlign: "center",
          }}
        >
          <div className="container">
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              About Suyash Classes
            </h1>
            <p
              style={{
                maxWidth: 660,
                margin: "0 auto",
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                lineHeight: 1.85,
                opacity: 0.92,
              }}
            >
              Empowering students through quality education, expert guidance,
              and academic excellence since 1990.
            </p>
          </div>
        </motion.section>

        {/* Our Story */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          style={{ padding: "72px 0" }}
        >
          <div className="container">
            <div className="about-story-grid">
              {/* Left — text */}
              <div>
                <h2
                  style={{
                    fontWeight: 800,
                    marginBottom: 20,
                    color: "#1a1a2e",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                    lineHeight: 1.25,
                  }}
                >
                  Our Story
                </h2>
                <p
                  style={{
                    color: "#555",
                    lineHeight: 1.9,
                    marginBottom: 20,
                    fontSize: "0.95rem",
                  }}
                >
                  Founded in 1990, Suyash Classes has been a trusted name in
                  education for students across Wadala and nearby areas. Our
                  goal has always been to provide high-quality education, build
                  confidence, and help students achieve academic success.
                </p>
                <p style={{ color: "#555", lineHeight: 1.9, fontSize: "0.95rem" }}>
                  Through personalised attention, experienced faculty, regular
                  assessments, and a student-centric approach, we have guided
                  thousands of students toward their academic goals and
                  successful careers.
                </p>
              </div>

              {/* Right — Why Choose Us card */}
              <div className="about-why-box">
                <h3
                  style={{
                    color: "#f26522",
                    fontWeight: 700,
                    marginBottom: 20,
                    fontSize: "1.1rem",
                  }}
                >
                  Why Choose Us?
                </h3>
                <ul
                  style={{
                    lineHeight: 2.1,
                    color: "#555",
                    paddingLeft: 20,
                    fontSize: "0.92rem",
                  }}
                >
                  <li>30+ Years of Teaching Excellence</li>
                  <li>Experienced &amp; Dedicated Faculty</li>
                  <li>Small Batch Sizes for Personal Attention</li>
                  <li>Regular Tests &amp; Assessments</li>
                  <li>Printed Notes for Every Chapter</li>
                  <li>Strong Track Record of Board Results</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Statistics */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{ background: "#fff", padding: "64px 0" }}
        >
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#f26522",
                  marginBottom: 8,
                }}
              >
                Our Impact
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                  fontWeight: 800,
                  color: "#1a1a2e",
                  lineHeight: 1.25,
                }}
              >
                Numbers That Speak
              </h2>
            </div>

            <div className="about-stats-grid">
              {[
                { val: "30+",    label: "Years of Excellence" },
                { val: "5000+", label: "Students Guided" },
                { val: "100%",  label: "Commitment to Success" },
                { val: "Expert", label: "Faculty Team" },
              ].map(({ val, label }) => (
                <motion.div
                  key={val}
                  className="about-stat-item"
                  variants={fadeInUp}
                  style={{
                    padding: "28px 16px",
                    borderRadius: 12,
                    background: "#fdf8f4",
                    border: "1px solid #ffebe0",
                  }}
                >
                  <h2>{val}</h2>
                  <p>{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </PageTransition>
  );
}

export default About;