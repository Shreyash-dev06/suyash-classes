import { useEffect, useState } from "react";

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scroll}%`,
        height: "3px",
        background: "linear-gradient(90deg, #f26522, #ff8c42)",
        zIndex: 99999,
        borderRadius: "0 2px 2px 0",
        transition: "width 0.08s linear",
        pointerEvents: "none",
      }}
    />
  );
}

export default ScrollProgress;