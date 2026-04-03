   import React, { useState } from "react";
import "./Navbar.css"; // ✅ import CSS

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav style={navStyle}>
      <h2 style={logoStyle}>Nthabiseng</h2>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Links */}
      <div className={`links ${menuOpen ? "open" : ""}`}>
        <a
          href="#home"
          style={{
            ...link,
            color: hovered === "home" ? "#2563eb" : "white",
            transform: hovered === "home" ? "translateY(-2px)" : "none",
          }}
          onMouseEnter={() => setHovered("home")}
          onMouseLeave={() => setHovered(null)}
        >
          Home
        </a>

        <a
          href="#projects"
          style={{
            ...link,
            color: hovered === "projects" ? "#2563eb" : "white",
            transform: hovered === "projects" ? "translateY(-2px)" : "none",
          }}
          onMouseEnter={() => setHovered("projects")}
          onMouseLeave={() => setHovered(null)}
        >
          Projects
        </a>

        <a
          href="#contact"
          style={{
            ...link,
            color: hovered === "contact" ? "#2563eb" : "white",
            transform: hovered === "contact" ? "translateY(-2px)" : "none",
          }}
          onMouseEnter={() => setHovered("contact")}
          onMouseLeave={() => setHovered(null)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "#020617",
  position: "relative",
};

const logoStyle: React.CSSProperties = {
  color: "white",
  margin: 0,
};

const link: React.CSSProperties = {
  textDecoration: "none",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.3s ease",
};