import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTransition from "../components/PageTransition";
import "./Syllabus.css";

/* ─────────────────────────────────────────────────────────────
   COURSE DATA
   Images live in  /public/courses/<filename>
   Drop your images there — no rebuild needed.
   ───────────────────────────────────────────────────────────── */
const courses = [
  {
    id: "ssc",
    img: "/courses/ssc-board.jpg",
    badge: "SSC BOARD",
    badgeColor: "#00695c",
    title: "SSC Board (7th – 10th)",
    desc: "Strong academic foundation with concept-based learning, regular tests, and personalised guidance for every student.",
    highlights: [
      "All subjects — Math, Science, English, SST",
      "Weekly tests & chapter-wise practice",
      "Small batches with personal attention",
    ],
  },
  {
    id: "hsc",
    img: "/courses/hsc-board.jpg",
    badge: "HSC BOARD",
    badgeColor: "#005f73",
    title: "HSC Board (11th – 12th)",
    desc: "Comprehensive preparation for board examinations with a focus on academic excellence and strong subject fundamentals.",
    highlights: [
      "Science & Commerce streams covered",
      "Printed chapter notes provided",
      "Pre-board & mock exam practice",
    ],
  },
  {
    id: "jee",
    img: "/courses/jee-neet-cet.jpg",
    badge: "JEE · NEET · CET",
    badgeColor: "#1b4332",
    title: "JEE / NEET / CET Preparation",
    desc: "Competitive exam preparation with structured study plans, full mock tests, and dedicated doubt-clearing sessions.",
    highlights: [
      "Full syllabus coverage with MCQ focus",
      "Regular mock tests & performance analysis",
      "Doubt-solving sessions after class",
    ],
  },
  {
    id: "science",
    img: "/courses/xi-xii-science.jpg",
    badge: "XI–XII SCIENCE",
    badgeColor: "#4a148c",
    title: "XI – XII Science",
    desc: "Physics, Chemistry, Biology, and Mathematics coaching tightly aligned with the HSC Science curriculum.",
    highlights: [
      "PCB & PCM combinations available",
      "Practical-oriented teaching approach",
      "Board + entrance exam dual preparation",
    ],
  },
  {
    id: "commerce",
    img: "/courses/xi-xii-commerce.jpg",
    badge: "XI–XII COMMERCE",
    badgeColor: "#e65100",
    title: "XI – XII Commerce",
    desc: "Accounts, Economics, OC, SP, and Mathematics coaching with deep conceptual clarity and exam-ready preparation.",
    highlights: [
      "Accounts & Eco with practical examples",
      "OC, SP, and Maths also covered",
      "HSC board pattern strictly followed",
    ],
  },
  {
    id: "degree",
    img: "/courses/fy-ty-commerce.jpg",
    badge: "FY – TY COMMERCE",
    badgeColor: "#880e4f",
    title: "FY – TY Commerce (Degree)",
    desc: "Degree-level commerce coaching with exam-oriented preparation and practical subject understanding.",
    highlights: [
      "Financial Accounting & Business Law",
      "University exam-focused practice",
      "Flexible batch timings available",
    ],
  },
];

const faqs = [
  {
    q: "Who Should Take a Course Here?",
    a: "Our coaching is ideal for students from 7th to 12th standard, as well as those preparing for competitive exams like JEE, NEET, and CET. Anyone looking for structured, guided preparation will benefit from our programs.",
  },
  {
    q: "How Do I Begin?",
    a: "Simply contact us through our inquiry form or call our numbers. Our counsellors will guide you through the enrollment process, batch selection, and fees structure.",
  },
  {
    q: "Are There Prerequisites for Language Subjects?",
    a: "No prerequisites are required. We start from the basics and build up systematically. All language subjects are handled with beginner-friendly methods.",
  },
];

const plans = [
  {
    label: "Monthly",
    price: "₹2,000",
    period: "/month",
    features: ["Weekly Tests", "Printed Notes", "Doubt Sessions"],
    featured: false,
  },
  {
    label: "Annual",
    price: "₹18,000",
    period: "/year",
    features: [
      "Guided Learning",
      "All Printed Notes",
      "Mock Tests",
      "Flexible Batch Timing",
      "Completion Certificate",
    ],
    featured: true,
  },
  {
    label: "Extended",
    price: "₹5,000",
    period: "/month",
    features: ["Priority Access", "1-on-1 Mentoring"],
    featured: false,
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function Syllabus() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageTransition>
      <div style={{ background: "#f8f9fa", minHeight: "100vh" }}>
        <Navbar />

        {/* ── Hero ── */}
        <motion.section
          className="contact-hero"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="container">
            <div
              className="section-badge"
              style={{
                display: "none",
                background: "rgba(255,255,255,0.18)",
                borderColor: "rgba(255,255,255,0.3)",
                color: "#fff",
              }}
            >
              📚 Course Catalogue
            </div>
            <h1 style={{ marginTop: 10 }}>All Courses</h1>
            <p>
              Explore our complete range of programs designed to help students
              excel in board exams and competitive entrance tests.
            </p>
          </div>
        </motion.section>

        {/* ── Courses Grid ── */}
        <motion.section
          className="section"
          style={{ background: "#f8f9fa" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="container">
            <div className="section-header" style={{ textAlign: "center", display: "none" }}>
              <div className="section-badge">🎓 What We Teach</div>
              <h2>Courses Offered</h2>
              <p style={{ maxWidth: 560, margin: "0 auto" }}>
                Choose from our expertly crafted programs and take the first
                step toward academic excellence.
              </p>
            </div>

            <div className="courses-grid">
              {courses.map((c) => (
                <motion.article key={c.id} className="course-card" variants={fadeInUp}>
                  {/* Image area */}
                  <div className="course-card__img-wrap">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="course-card__img"
                      onError={(e) => {
                        /* Show placeholder if image not yet added */
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "flex";
                      }}
                    />
                    {/* Fallback placeholder shown until image is added */}
                    <div
                      className="course-card__placeholder"
                      style={{ background: c.badgeColor }}
                    >
                      <span className="course-card__placeholder-icon">📸</span>
                      <span className="course-card__placeholder-text">
                        Add course image
                      </span>
                    </div>
                    {/* Badge overlay */}
                    <span
                      className="course-card__badge"
                      style={{ background: c.badgeColor }}
                    >
                      {c.badge}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="course-card__body">
                    <h3 className="course-card__title">{c.title}</h3>
                    <p className="course-card__desc">{c.desc}</p>

                    {/* Highlights */}
                    <ul className="course-card__highlights">
                      {c.highlights.map((h, i) => (
                        <li key={i}>
                          <span className="course-card__check">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="course-card__footer">
                    <Link to="/contact" className="course-card__btn">
                      Enroll Now
                    </Link>
                    <Link to="/contact" className="course-card__learn">
                      Learn More →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container">
            <h2>Need Help Choosing a Course?</h2>
            <p>
              Talk to our counselors and get personalized guidance for selecting
              the right course and batch.
            </p>

            <div className="cta-actions">
              <Link to="/contact" className="cta-btn cta-btn-primary">
                Contact Us
              </Link>

              <a
                href="https://wa.me/919987714003"
                target="_blank"
                rel="noreferrer"
                className="cta-btn cta-btn-primary"
              >
              WhatsApp Us
              </a>
            </div>
          </div>
        </motion.section>
        {/* ── Pricing & FAQ ── */}
        <motion.section
          className="section"
          style={{ background: "#fff" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <div className="container">
          <div className="syllabus-pricing-faq-grid">

              {/* Pricing */}
              <div>
                <div className="section-badge">💳 Membership</div>
                <h2
                  style={{
                    fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                    fontWeight: 800,
                    color: "var(--text-dark)",
                    marginTop: 8,
                    marginBottom: 12,
                  }}
                >
                  Membership Plans
                </h2>
                <p
                  style={{
                    color: "var(--text-light)",
                    lineHeight: 1.75,
                    fontSize: "0.93rem",
                    marginBottom: 32,
                  }}
                >
                  Choose the plan that suits you best. All plans include access
                  to notes, tests, and personal mentoring.
                </p>

                <motion.div
                  className="syllabus-plans-grid"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {plans.map((plan, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className={`pricing-card ${
                        plan.featured ? "pricing-card--annual" : "pricing-card--standard"
                      }`}
                    >
                      {plan.featured && (
                        <div
                          style={{
                            position: "absolute",
                            top: -10,
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "var(--orange)",
                            color: "white",
                            borderRadius: 999,
                            padding: "2px 12px",
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                            zIndex: 2,
                          }}
                        >
                          POPULAR
                        </div>
                      )}
                      <div style={{ position: "relative", zIndex: 1 }}>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            opacity: 0.7,
                            marginBottom: 8,
                            marginTop: plan.featured ? 8 : 0,
                          }}
                        >
                          {plan.label}
                        </div>
                        <div
                          style={{
                            fontSize: "1.7rem",
                            fontWeight: 900,
                            marginBottom: 2,
                          }}
                        >
                          {plan.price}
                        </div>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            opacity: 0.65,
                            marginBottom: 18,
                          }}
                        >
                          {plan.period}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "fit-content",
                            margin: "0 auto 18px",
                            gap: 6,
                            textAlign: "left",
                          }}
                        >
                          {plan.features.map((f, j) => (
                            <div
                              key={j}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                fontSize: "0.78rem",
                                opacity: 0.9,
                              }}
                            >
                              <span className="pricing-card__check">✓</span>{" "}
                              {f}
                            </div>
                          ))}
                        </div>
                        <Link to="/contact" className="pricing-card__btn">
                          Enroll Now
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* FAQ */}
              <div>
                <div className="section-badge">❓ Have Questions?</div>
                <h2
                  style={{
                    fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                    fontWeight: 800,
                    color: "var(--text-dark)",
                    marginTop: 8,
                    marginBottom: 28,
                  }}
                >
                  FAQs
                </h2>

                <div
                  style={{ display: "flex", flexDirection: "column", gap: 0 }}
                >
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      style={{
                        border: "1px solid var(--border)",
                        borderRadius: 8,
                        marginBottom: 10,
                        overflow: "hidden",
                        background: "#fff",
                      }}
                    >
                      <button
                        onClick={() =>
                          setOpenFaq(openFaq === i ? null : i)
                        }
                        aria-expanded={openFaq === i}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          background: "none",
                          border: "none",
                          padding: "16px 18px",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          fontFamily: "var(--font)",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: "var(--text-dark)",
                          gap: 12,
                          minHeight: 52,
                        }}
                      >
                        <span>{faq.q}</span>
                        <span
                          style={{
                            color: "var(--teal)",
                            fontSize: "1.2rem",
                            flexShrink: 0,
                          }}
                        >
                          {openFaq === i ? "−" : "+"}
                        </span>
                      </button>
                      {openFaq === i && (
                        <div
                          style={{
                            padding: "0 18px 16px",
                            fontSize: "0.87rem",
                            color: "var(--text-light)",
                            lineHeight: 1.75,
                          }}
                        >
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </PageTransition>
  );
}

export default Syllabus;