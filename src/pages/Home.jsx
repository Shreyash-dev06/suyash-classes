import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSchool, FaBookOpen, FaGraduationCap } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logoImg from "../assets/logo.png";
import heroBg from "../assets/results-bg.png";
import topperVaidehi from "../assets/topper-vaidehi.png";
import topperVibhuti from "../assets/topper-vibhuti.png";
import topperPari from "../assets/topper-pari.png";
import PageTransition from "../components/PageTransition";
import "./Home.css";

/* ─────────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Home() {
  return (
    <PageTransition>
      <div>
        <Navbar />

        {/* ── HERO ── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 245, 235, 0.65) 100%), url(${heroBg}) center/cover no-repeat`,
            padding: "80px 0 64px",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 20,
            }}
          >
            <motion.img
              src={logoImg}
              alt="Suyash Classes"
              whileHover={{ scale: 1.05 }}
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #f26522",
                boxShadow: "0 4px 20px rgba(242,101,34,0.15)",
              }}
            />

            <div>
              <h1 style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, color: "#1a1a2e", margin: 0, lineHeight: 1.15 }}>
                Suyash Classes
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#f26522", fontWeight: 700, margin: "8px 0 0", letterSpacing: "0.06em" }}>
                Wadala's Trusted Coaching Family · Since 1990
              </p>
            </div>

            <p style={{ fontSize: "1.1rem", color: "#333", lineHeight: 1.85, maxWidth: 640, margin: "10px 0 0" }}>
              For over <strong style={{ color: "#1a1a2e" }}>30 years</strong>, we've helped students from <strong style={{ color: "#1a1a2e" }}>5th Standard to Degree College</strong> not just score marks, but actually understand what they're learning and build real confidence.
            </p>

            <p style={{ fontSize: "0.95rem", color: "#666", fontStyle: "italic", margin: 0 }}>
              "विद्या विनयेन शोभते" — True knowledge makes us humble.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  style={{
                    background: "#f26522",
                    color: "#fff",
                    padding: "14px 36px",
                    borderRadius: 6,
                    fontWeight: 700,
                    fontSize: "1rem",
                    textDecoration: "none",
                    boxShadow: "0 4px 15px rgba(242,101,34,0.2)",
                    display: "inline-block",
                  }}
                >
                  Talk to a Teacher
                </Link>
              </motion.div>
              <motion.a
                href="tel:9987714003"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "rgba(255,255,255,0.8)",
                  color: "#1a1a2e",
                  padding: "14px 32px",
                  borderRadius: 6,
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: "1.5px solid rgba(0,0,0,0.1)",
                  textDecoration: "none",
                  backdropFilter: "blur(4px)",
                }}
              >
                📞 9987714003
              </motion.a>
            </div>

            {/* Quick facts */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              style={{
                display: "flex",
                gap: 36,
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: 24,
                padding: "20px 32px",
                background: "rgba(255,255,255,0.6)",
                borderRadius: 12,
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.5)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
              }}
            >
              {[
                ["30+", "Years of coaching"],
                ["V–X", "State Board"],
                ["XI–XII", "Science / Commerce"],
                ["FY–TY", "Commerce Degree"],
              ].map(([val, label]) => (
                <motion.div key={val} variants={fadeInUp} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "#1a1a2e" }}>{val}</div>
                  <div style={{ fontSize: "0.8rem", color: "#555" }}>{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ── STATS ── */}
        <motion.section
          className="stats-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{ padding: "60px 0", background: "#ffffff" }}
        >
          <div className="container">
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                { value: "5000+", label: "Students Trained" },
                { value: "30+", label: "Years Experience" },
                { value: "100%", label: "Pass Rate" },
                { value: "50+", label: "State Toppers" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={cardVariant}
                  className="stat-card"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    background: "#fdf8f4",
                    borderRadius: "12px",
                    border: "1px solid #ffebe0",
                  }}
                >
                  <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f26522", margin: 0 }}>{stat.value}</h2>
                  <p style={{ margin: "8px 0 0", fontWeight: 600, color: "#1a1a2e" }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── LAST 3 YEARS SSC TOPPERS ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="toppers-section"
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "500px", pointerEvents: "none", background: "radial-gradient(ellipse at 50% 0%, rgba(242,101,34,0.06) 0%, transparent 70%)" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#f26522", marginBottom: 8 }}>🏆 Our Pride — SSC Toppers</div>
              <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 800, color: "#1a1a2e", margin: 0, lineHeight: 1.2 }}>Last 3 Years SSC Toppers</h2>
              <p style={{ color: "#666", fontSize: "0.95rem", marginTop: 10 }}>Consistently producing top results, year after year!</p>
            </div>

            <div className="toppers-grid">
              {[
                { year: "2024", name: "Pari Gade", pct: "92.20%", img: topperPari, highlight: false },
                { year: "2025", name: "Vibhuti Patil", pct: "96.20%", img: topperVibhuti, highlight: true },
                { year: "2026", name: "Vaidehi Bhojane", pct: "91.00%", img: topperVaidehi, highlight: false },
              ].map(({ year, name, pct, img, highlight }) => (
                <motion.div
                  key={year}
                  variants={cardVariant}
                  whileHover={{ y: -8, scale: 1.02 }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`topper-card${highlight ? " topper-card--highlight" : ""}`}
                >
                  {highlight && (
                    <div className="topper-crown">👑</div>
                  )}
                  <div className="topper-year-badge" style={{ background: highlight ? "#f26522" : "#fff", color: highlight ? "#fff" : "#f26522", border: highlight ? "2px solid #fff" : "1px solid #ffebe0" }}>
                    SSC {year}
                  </div>
                  <div className="topper-img-wrap" style={{ border: highlight ? "3px solid #f26522" : "3px solid #ffebe0" }}>
                    <img src={img} alt={name} className="topper-img" />
                  </div>
                  <div className="topper-pct" style={{ color: highlight ? "#f26522" : "#1a1a2e" }}>{pct}</div>
                  <div className="topper-name">{name}</div>
                  <div className="topper-subtitle">SSC Topper of {year}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── WHAT WE OFFER ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{ background: "#fff", padding: "64px 0", borderBottom: "1px solid #eee" }}
        >
          <div className="container">
            <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#f26522", marginBottom: 10 }}>How We Can Help</p>
            <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 800, color: "#1a1a2e", marginBottom: 36, lineHeight: 1.25 }}>Classes we teach</h2>
            <motion.div
              variants={staggerContainer}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}
            >
              {[
                {
                  icon: <FaSchool />,
                  title: "V to X",
                  sub: "State Board",
                  desc: "Build a strong foundation for high school board exams with dedicated conceptual coaching.",
                  color: "#009688",
                  bg: "rgba(0, 150, 136, 0.1)",
                },
                {
                  icon: <FaBookOpen />,
                  title: "XI to XII",
                  sub: "Science & Commerce",
                  desc: "Specialized coaching for college boards and entrance prep with regular testing.",
                  color: "#f26522",
                  bg: "rgba(242, 101, 34, 0.1)",
                },
                {
                  icon: <FaGraduationCap />,
                  title: "FY to TY",
                  sub: "Commerce Degree",
                  desc: "Comprehensive semester-wise coaching for university exams and commerce subjects.",
                  color: "#7b1fa2",
                  bg: "rgba(123, 31, 162, 0.1)",
                },
              ].map(({ icon, title, sub, desc, color, bg }) => (
                <motion.div
                  key={title}
                  variants={cardVariant}
                  whileHover={{
                    y: -8,
                    borderColor: color,
                    boxShadow: "var(--shadow-hover)",
                  }}
                  style={{
                    background: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    border: "1.5px solid var(--border)",
                    padding: "32px 24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 16,
                    cursor: "pointer",
                    boxShadow: "var(--shadow)",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: "50%",
                      background: bg,
                      color: color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "1.15rem", color: "var(--text-dark)", marginBottom: 4, fontFamily: "var(--font-heading)" }}>{title}</h3>
                    <div style={{ fontSize: "0.8rem", fontWeight: 600, color: color, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>{sub}</div>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-body)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: 12 }}>
                    <Link
                      to="/syllabus"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "var(--text-dark)",
                        textDecoration: "none",
                      }}
                    >
                      See syllabus & timings →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div style={{ marginTop: 36, textAlign: "center" }}>
            </div>
          </div>
        </motion.section>

        {/* ── 5 THINGS ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ background: "#f9f9f9", padding: "64px 0" }}
        >
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#f26522", marginBottom: 10 }}>Why Kids (And Parents) Like Us</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2.1rem)", fontWeight: 800, color: "#1a1a2e", lineHeight: 1.25 }}>5 things that make us feel like home</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["01", "Teachers who actually know you", "We keep our batches small on purpose. Your teacher will know exactly where you struggle, and will make sure you don't stay stuck for long."],
                ["02", "Ready-to-read printed notes", "No more frantic copying from the blackboard. We give you clear, easy-to-read printed notes for every single chapter."],
                ["03", "Consistent practice all year", "We don't just wait for the finals. Weekly tests and full prelims mean our students walk into the board exams feeling completely relaxed."],
                ["04", "Batches that fit your schedule", "Whether you have morning school or afternoon college, we have batches that fit perfectly around your day."],
                ["05", "Fair and honest pricing", "We try to keep our fees as accessible as possible, and we even offer helpful discounts if you enroll early."],
              ].map(([num, title, desc]) => (
                <motion.div
                  key={num}
                  variants={fadeInUp}
                  whileHover={{
                    x: 10,
                    background: "rgba(252, 101, 34, 0.03)",
                    borderColor: "rgba(242, 101, 34, 0.25)",
                  }}
                  style={{
                    display: "flex",
                    gap: 24,
                    alignItems: "flex-start",
                    padding: "24px 28px",
                    background: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    border: "1.5px solid var(--border)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.01)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "var(--orange)",
                      color: "var(--white)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-heading)",
                      flexShrink: 0,
                      boxShadow: "0 4px 12px rgba(242, 101, 34, 0.3)",
                      marginTop: 2,
                    }}
                  >
                    {num}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-dark)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>{title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-body)", lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── STUDENT VOICES ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ background: "#fff", padding: "52px 0" }}
        >
          <div className="container">
            <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#f26522", marginBottom: 10 }}>Student Stories</p>
            <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 800, color: "#1a1a2e", marginBottom: 28, lineHeight: 1.25 }}>Don't just take our word for it</h2>
            <motion.div
              variants={staggerContainer}
              className="home-testimonials-grid"
            >
              {[
                { text: "The teachers here actually care. When I was struggling with math, my teacher sat with me after class until I completely understood it. It didn't feel like a normal coaching class.", name: "Aditya Sharma", detail: "CET Qualifier, 12th Std" },
                { text: "The printed notes saved my life before the exams. And because we had so many weekly tests, by the time the boards came around, I wasn't even nervous. I ended up topping my school!", name: "Priya Patil", detail: "SSC Topper, 10th Std" },
                { text: "I joined the evening batch because of my college timings. The flexibility was great, but the best part was how approachable the teachers were. No question was ever considered a 'dumb' question.", name: "Rahul Desai", detail: "NEET Aspirant, 12th Std" },
              ].map(({ text, name, detail }) => (
                <motion.div
                  key={name}
                  variants={cardVariant}
                  whileHover={{ y: -4 }}
                  style={{ background: "#fef3e8", borderRadius: 10, padding: "24px 22px", borderLeft: "4px solid #f26522" }}
                >
                  <p style={{ fontSize: "0.9rem", color: "#444", lineHeight: 1.8, marginBottom: 18, fontStyle: "italic" }}>"{text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#f26522", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.9rem", flexShrink: 0 }}>{name[0]}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#1a1a2e" }}>{name}</div>
                      <div style={{ fontSize: "0.75rem", color: "#999" }}>{detail}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ── CONTACT + LOCATION ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{ background: "#1a1a2e", padding: "52px 0" }}
        >
          <div className="container home-contact-grid">
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#f26522", marginBottom: 10 }}>Find Us</p>
              <h2 style={{ fontSize: "clamp(1.3rem,2.2vw,1.7rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>Come visit us in Wadala</h2>
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: 24 }}>
                Ground Floor, Shree Dattasai Tower,<br />Near Wadala Post Office,<br />Wadala West, Mumbai 400 033
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["📞", "9987714003 / 8451011123 / 7208581418"],
                  ["📧", "suyashclasseswadala@gmail.com"],
                  ["📸", "@Suyash_classes_wadala"],
                ].map(([icon, text]) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.87rem", color: "rgba(255,255,255,0.65)" }}>
                    <span>{icon}</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.93rem", lineHeight: 1.85, marginBottom: 24 }}>
                New academic year enrollments are open. Seats fill up fast — don't wait.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" style={{ display: "inline-block", background: "#f26522", color: "#fff", padding: "14px 36px", borderRadius: 6, fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
                  Book a Free Consultation
                </Link>
              </motion.div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginTop: 12 }}>
                Or call us directly — we'll guide you through enrollment.
              </p>
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </PageTransition>
  );
}

export default Home;