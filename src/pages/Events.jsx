import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";
import "./Events.css";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";

/* ─────────────────────────────────────────────────────────────
   EVENTS DATA
   ───────────────────────────────────────────────────────────── */

const eventsList = [
  {
    icon: "🏏",
    title: "Cricket League",
    desc: "Inter-batch cricket tournaments fostering sportsmanship and team spirit among students.",
    color: "#2ecc71",
  },
  {
    icon: "🎓",
    title: "Educational Trip",
    desc: "Visits to science centers, museums, and historical sites for experiential learning.",
    color: "#3498db",
  },
  {
    icon: "🙏",
    title: "Guru Purnima",
    desc: "Honoring our teachers with heartfelt celebrations, cultural programs, and gratitude.",
    color: "#e67e22",
  },
  {
    icon: "🎉",
    title: "Farewell",
    desc: "A grand send-off for our outgoing batch with performances, awards, and memories.",
    color: "#9b59b6",
  },
  {
    icon: "🏆",
    title: "Annual Day Celebration",
    desc: "A spectacular evening of dance, drama, and awards celebrating student achievements.",
    color: "#f26522",
  },
  {
    icon: "🇮🇳",
    title: "Independence Day",
    desc: "Flag hoisting, patriotic performances, and inspiring speeches by students.",
    color: "#e74c3c",
  },
  {
    icon: "🔬",
    title: "Science Exhibition",
    desc: "Students showcase working models, experiments, and innovative science projects.",
    color: "#1abc9c",
  },
  {
    icon: "🎭",
    title: "Cultural Fest",
    desc: "A vibrant mix of art, music, dance, and drama celebrating diverse talent.",
    color: "#f39c12",
  },
];


const galleryImages = [
  { id: 1, img: gallery1},
  { id: 2, img: gallery2},
  { id: 3, img: gallery3},
];

/* ── Animation variants ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function Events() {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <PageTransition>
      <div style={{ background: "#f8f9fa", minHeight: "100vh" }}>
        <Navbar />

        {/* ── 1. Hero Section ── */}
        <motion.section
          className="events-hero"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="container events-hero-inner">
            <h1 className="events-hero-title">Events & Celebrations</h1>
            <p className="events-hero-subtitle">
              At Suyash Classes, we believe true growth happens when academic
              excellence meets memorable, real-world experiences. Explore our
              vibrant calendar of events and celebrations.
            </p>

            <div className="events-hero-stats">
              <div className="events-stat">
                <h3>50+</h3>
                <p>Events Organized</p>
              </div>
              <div className="events-stat">
                <h3>20+</h3>
                <p>Educational Trips</p>
              </div>
              <div className="events-stat">
                <h3>100%</h3>
                <p>Student Engagement</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 2. Events List Section ── */}
        <motion.section
          className="section"
          style={{ background: "#fff" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <div className="container">
            <div className="section-header" style={{ textAlign: "center" }}>
              <div className="section-badge">🎊 Our Events</div>
              <h2>Events & Celebrations We Organise</h2>
              <p style={{ maxWidth: 650, margin: "0 auto" }}>
                From spirited sports leagues to heartfelt cultural celebrations —
                every event is designed to nurture confidence, creativity, and
                lifelong memories.
              </p>
            </div>

            <div className="events-list-grid">
              {eventsList.map((evt, i) => (
                <motion.div
                  key={i}
                  className={`event-list-card ${activeEvent === i ? "active" : ""}`}
                  variants={fadeInUp}
                  onMouseEnter={() => setActiveEvent(i)}
                  onMouseLeave={() => setActiveEvent(null)}
                >
                  <div
                    className="event-list-icon"
                    style={{ background: `${evt.color}18`, color: evt.color }}
                  >
                    <span>{evt.icon}</span>
                  </div>
                  <div className="event-list-info">
                    <h3 className="event-list-title">{evt.title}</h3>
                    <p className="event-list-desc">{evt.desc}</p>
                  </div>
                  <div
                    className="event-list-accent"
                    style={{ background: evt.color }}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div className="more-events-badge" variants={fadeInUp}>
              <span className="sparkle">✨</span>
              <span>…and many more events & celebrations throughout the year!</span>
            </motion.div>
          </div>
        </motion.section>

        {/* ── 3. Video Highlights ── */}
        <motion.section
          className="section video-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container">
            <div className="section-header" style={{ textAlign: "center" }}>
              <div
                className="section-badge"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                🎥 Watch Us
              </div>
              <h2 style={{ color: "#fff" }}>Event Highlights</h2>
              <p style={{ maxWidth: 600, margin: "0 auto", color: "rgba(255,255,255,0.8)" }}>
                Relive the energy, joy, and excitement from our events.
              </p>
            </div>

            <div className="video-showcase">
              <div className="video-wrapper">
                <video
                  className="events-video"
                  controls
                  poster=""
                  preload="metadata"
                >
                  <source src="/req.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-glow" />
              </div>
              <div className="video-caption">
                <span className="video-caption-icon">🎬</span>
                <span>Suyash Classes — Events & Celebrations Reel</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 4. Photo Gallery (3 slots) ── */}
        <motion.section
          className="section"
          style={{ background: "#fff", paddingBottom: 80 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="container">
            <div className="section-header" style={{ textAlign: "center" }}>
              <div className="section-badge">📷 Memories</div>
              <h2>Photo Gallery</h2>
              <p style={{ maxWidth: 600, margin: "0 auto" }}>
                Glimpses of smiles, achievements, and fun moments from our events.
              </p>
            </div>

            <div className="gallery-grid">
            {galleryImages.map((img) => (
              <motion.div
                key={img.id}
                className={`gallery-item ${img.span}`}
                variants={fadeInUp}
              >
                <img
                  src={img.img}
                  alt={`Gallery ${img.id}`}
                  className="gallery-img"
                />

                <div className="gallery-hover">
                  <span>View Image</span>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.section>

        {/* ── 5. CTA Section ── */}
        <motion.section
          className="cta-section"
          style={{
            background: "linear-gradient(135deg, #f26522, #ff8c42)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Experience Learning with Us</h2>
          <p>
            Be a part of an environment that combines academic excellence with
            memorable life experiences.
          </p>
          <div className="cta-actions">
            <Link
              to="/contact"
              className="cta-btn cta-btn-primary"
              style={{
                background: "#fff",
                color: "#f26522",
                border: "none",
              }}
            >
              Enroll Today
            </Link>
            <Link to="/syllabus" className="cta-btn cta-btn-primary">
              Explore Courses
            </Link>
          </div>
        </motion.section>

        <Footer />
      </div>
    </PageTransition>
  );
}

export default Events;