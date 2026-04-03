     import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false); // added for hover effect

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mqeglone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(true);
    }

    setLoading(false);
  };

  return (
    <section id="contact" style={container}>
      <h2 style={heading}>Contact Me</h2>
      <p style={subtitle}>
        I’m open to opportunities! Send me a message or connect via email.
      </p>

      {submitted && (
        <p style={successMsg}>
          Thank you! Your message has been sent. I’ll get back to you soon.
        </p>
      )}

      {error && <p style={errorMsg}>Oops! Something went wrong. Try again.</p>}

      <form style={form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={input}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={input}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={textarea}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            ...button,
            transform: hovered ? "translateY(-3px)" : "none",
            boxShadow: hovered
              ? "0 8px 20px rgba(37, 99, 235, 0.4)"
              : "0 4px 10px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

// ======================== Styles ========================

const container: React.CSSProperties = {
  padding: "50px 20px",
  backgroundColor: "#0f172a",
  textAlign: "center",
};

const heading: React.CSSProperties = {
  fontSize: "2.5rem",
  color: "#ffffff",
  marginBottom: "20px",
};

const subtitle: React.CSSProperties = {
  color: "#cbd5e1",
  marginBottom: "30px",
};

const successMsg: React.CSSProperties = {
  color: "#16a34a",
  marginBottom: "20px",
  fontWeight: "bold",
};

const errorMsg: React.CSSProperties = {
  color: "#dc2626",
  marginBottom: "20px",
  fontWeight: "bold",
};

const form: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  maxWidth: "500px",
  margin: "0 auto",
};

const input: React.CSSProperties = {
  width: "100%",
  maxWidth: "500px",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #94a3b8",
  outline: "none",
  fontSize: "1rem",
};

const textarea: React.CSSProperties = {
  width: "100%",
  maxWidth: "500px",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #94a3b8",
  outline: "none",
  fontSize: "1rem",
  minHeight: "120px",
  resize: "vertical",
};

const button: React.CSSProperties = {
  width: "100%",
  maxWidth: "200px",
  padding: "12px 26px",
  backgroundColor: "#2563eb",
  color: "#ffffff",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
};