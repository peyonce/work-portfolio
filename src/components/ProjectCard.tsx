  import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;        // GitHub repo link
  live?: string;         // Live demo link (optional)
  role?: string;         // Your role in the project
  tech?: string;         // Tech stack used
  isTeamProject?: boolean; // Whether it's a team project
}

export default function ProjectCard({ 
  title, 
  description, 
  github, 
  live, 
  role, 
  tech, 
  isTeamProject 
}: ProjectCardProps) {
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
      <h3 style={titleStyle}>
        {title}
        {isTeamProject && <span style={teamBadge}>👥 Team</span>}
      </h3>
      
      {role && <p style={roleStyle}>🎯 Role: {role}</p>}
      {tech && <p style={techStyle}>⚙️ Tech: {tech}</p>}
      
      <p style={descStyle}>{description}</p>
      
      <div style={buttonContainer}>
        <a href={github} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
          📂 GitHub
        </a>
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" style={{...buttonStyle, backgroundColor: "#10b981"}}>
            🌐 Live Demo
          </a>
        )}
      </div>
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  flexWrap: "wrap",
};

const teamBadge: React.CSSProperties = {
  backgroundColor: "#8b5cf6",
  fontSize: "10px",
  padding: "2px 8px",
  borderRadius: "20px",
  color: "white",
};

const roleStyle: React.CSSProperties = {
  color: "#a5f3fc",
  fontSize: "0.8rem",
  marginBottom: "5px",
};

const techStyle: React.CSSProperties = {
  color: "#cbd5e1",
  fontSize: "0.75rem",
  marginBottom: "10px",
};

const descStyle: React.CSSProperties = {
  color: "#cbd5e1",
  marginBottom: "15px",
  fontSize: "0.9rem",
};

const buttonContainer: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
};

const buttonStyle: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#2563eb",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "5px",
  fontSize: "0.8rem",
  transition: "opacity 0.3s ease",
};