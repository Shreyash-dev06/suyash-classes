import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logoImg from "../assets/logo.png";
import "./Navbar.css";


const navItems = [
  { label: "Home",      to: "/" },
  { label: "About Us",  to: "/about" },
  { label: "Courses",   to: "/syllabus" },
  { label: "Events",    to: "/events" },
  { label: "Resources", to: "/resources" },
  { label: "Contact",   to: "/contact" },
];

function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location              = useLocation();
  const navRef                = useRef(null);

  /* ── Track scroll position ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close menu on route change ── */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* ── Close menu when clicking outside ── */
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  /* ── Close on Escape key ── */
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
      ref={navRef}
    >
      <div className="header-inner">

        {/* Logo */}
        <Link
          className="brand"
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Suyash Classes — go to homepage"
        >
          <img
            src={logoImg}
            alt="Suyash Classes Logo"
            className="brand-logo"
          />
          <div className="brand-text">
            <span className="brand-name">Suyash Classes</span>
            <span className="brand-tagline">SINCE 1990 · WADALA</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className={`nav-links${open ? " open" : ""}`}
          aria-label="Main navigation"
          id="main-nav"
        >
        {navItems.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}

          {/* Enroll Now — visible inside mobile menu only */}
          <Link
            className="nav-links-cta-mobile"
            to="/contact"
            onClick={() => setOpen(false)}
            aria-label="Enroll Now"
          >
            Enroll Now
          </Link>
        </nav>

        {/* Desktop CTA — hidden on mobile */}
        <Link
          className="nav-cta"
          to="/contact"
          onClick={() => setOpen(false)}
          aria-label="Enroll Now"
        >
          Enroll Now
        </Link>

        {/* Hamburger — visible on mobile only */}
        <button
          className="mobile-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className={`hamburger${open ? " open" : ""}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

      </div>
    </header>
  );
}

export default Navbar;