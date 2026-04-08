import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import heroImage from './hero.jpg';

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // trigger animation
  }, []);

  return (
    <section style={container}>
      {/* Overlay layer */}
      <div style={overlayLayer}></div>

      {/* Hero Content */}
      <div
        style={{
          ...overlayContent,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <h1 style={title}>
          Hi, I'm <span style={{ color: "#38bdf8" }}>Nthabiseng</span>
        </h1>

        <p style={subtitle}>
          I build modern web applications using{" "}
          <span style={typeText}>
            <Typewriter
              words={[
                "React",
                "TypeScript",
                "Firebase",
                "Redux",
                "PostgreSQL",
                "Express",
                "MySQL",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>

        <div style={buttonContainer}>
          <a
            href="#projects"
            style={{
              ...primaryButton,
              transform: hovered === "projects" ? "translateY(-3px)" : "none",
              boxShadow:
                hovered === "projects"
                  ? "0 8px 20px rgba(37, 99, 235, 0.4)"
                  : "0 4px 10px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={() => setHovered("projects")}
            onMouseLeave={() => setHovered(null)}
          >
            View My Projects
          </a>

         <a
  href="/Nthabiseng_Phiri_Junior_Web_Developer_CV.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  style={{
    ...secondaryButton,
    transform: hovered === "cv" ? "translateY(-3px)" : "none",
    boxShadow:
      hovered === "cv"
        ? "0 8px 20px rgba(34, 197, 94, 0.4)"
        : "0 4px 10px rgba(0,0,0,0.3)",
  }}
  onMouseEnter={() => setHovered("cv")}
  onMouseLeave={() => setHovered(null)}
>
  📄 Download CV
  </a>

        </div>

        {/* Scroll indicator */}
        <div style={scrollIndicator}>
          <span style={arrow}>⬇</span>
          <p style={scrollText}>Scroll Down</p>
        </div>
      </div>
    </section>
  );
}

// ======================== Styles ========================

const container: React.CSSProperties = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  textAlign: "center",
  backgroundImage: `url(${heroImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "white",
  overflow: "hidden",
  padding: "20px",
};

const overlayLayer: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(15, 23, 42, 0.6)",
  backdropFilter: "blur(8px)",
  zIndex: 1,
};

const overlayContent: React.CSSProperties = {
  position: "relative",
  zIndex: 2,
  maxWidth: "700px",
  width: "100%",
  padding: "50px",
  borderRadius: "12px",
};

const title: React.CSSProperties = {
  fontSize: "3rem",
  marginBottom: "20px",
  fontWeight: "bold",
  lineHeight: 1.2,
};

const subtitle: React.CSSProperties = {
  fontSize: "1.2rem",
  color: "#cbd5e1",
  marginBottom: "35px",
  lineHeight: "1.6",
};

const typeText: React.CSSProperties = {
  color: "#38bdf8",
  fontWeight: "bold",
};

const buttonContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
};

const primaryButton: React.CSSProperties = {
  padding: "12px 26px",
  backgroundColor: "#2563eb",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  transition: "all 0.3s ease",
};

const secondaryButton: React.CSSProperties = {
  padding: "12px 26px",
  backgroundColor: "#16a34a",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  transition: "all 0.3s ease",
};

const scrollIndicator: React.CSSProperties = {
  marginTop: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#cbd5e1",
  fontSize: "0.9rem",
  opacity: 0.8,
  animation: "bounce 1.5s infinite",
};

const arrow: React.CSSProperties = {
  fontSize: "1.5rem",
  marginBottom: "5px",
};

const scrollText: React.CSSProperties = {
  margin: 0,
};
