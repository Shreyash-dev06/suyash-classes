import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Syllabus from "./pages/Syllabus";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    // 'wait' ensures the old page exits fully before the new one enters,
    // which prevents the "jumpy" layout flash.
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <ScrollProgress />
      <AnimatedRoutes />
      <a
        href="https://wa.me/919987714003?text=Hi%20Suyash%20Classes,%20I%20want%20to%20know%20more%20about%20your%20courses."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>
    </BrowserRouter>
  );
}

export default App;