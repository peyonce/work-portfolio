 import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={footer}>
      <p style={text}>© {new Date().getFullYear()} Nthabiseng</p>
      <div style={icons}>
        <a href="https://github.com/Peyonce" target="_blank" style={iconLink}>
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/nthabiseng-phiri-6b9691214Vanity%20URL%20name" target="_blank" style={iconLink}>
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:nthaynthabie1@gmail.com" style={iconLink}>
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
}

const footer: React.CSSProperties = {
  backgroundColor: "#0f172a",
  color: "#ffffff",
  padding: "20px",
  textAlign: "center",
};

const text: React.CSSProperties = {
  marginBottom: "10px",
};

const icons: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const iconLink: React.CSSProperties = {
  color: "#2563eb",
  textDecoration: "none",
  transition: "transform 0.2s",
};