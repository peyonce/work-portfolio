 import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...cardStyle,
        transform: hover ? "translateY(-10px) scale(1.05)" : "translateY(0) scale(1)",
        boxShadow: hover
          ? "0 10px 25px rgba(0,0,0,0.5)"
          : "0 5px 15px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 style={titleStyle}>{title}</h3>
      <p style={descStyle}>{description}</p>
      <a href={link} target="_blank" style={buttonStyle}>
        View Project
      </a>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  backgroundColor: "#1e293b",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  textAlign: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
  margin: "10px",
};

const titleStyle: React.CSSProperties = {
  color: "#ffffff",
  marginBottom: "10px",
};

const descStyle: React.CSSProperties = {
  color: "#cbd5e1",
  marginBottom: "15px",
};

const buttonStyle: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#2563eb",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "5px",
};
 