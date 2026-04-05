     import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "UI Challenge App",
      description: "A TypeScript and React project building dynamic UI components with modern design principles.",
      role: "Frontend Developer",
      tech: "React, TypeScript, CSS",
      github: "https://github.com/peyonce/TYPESCRIP-TASK2.git",
      live: "", // Add live link after hosting
    },
    {
      title: "Shopping List App",
      description: "A React + Redux app to manage shopping lists with add, edit, and delete functionality.",
      role: "Frontend Developer",
      tech: "React, Redux, JavaScript",
      github: "https://github.com/peyonce/ShoppingApp.git",
      live: "", // Add live link after hosting
    },
    {
      title: "Restaurant App",
      description: "A responsive React app that displays restaurant information and menus using API integration.",
      role: "Frontend Developer",
      tech: "React, REST APIs, CSS",
      github: "https://github.com/peyonce/RestaurantApp.git",
      live: "", // Add live link after hosting
    },
    // Add your team project here
  ];

  return (
    <section id="projects" style={container}>
      <h2 style={heading}>My Projects</h2>
      <div style={grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            role={project.role}
            tech={project.tech}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
}

const container: React.CSSProperties = {
  padding: "50px 20px",
  backgroundColor: "#0f172a",
  textAlign: "center",
};

const heading: React.CSSProperties = {
  fontSize: "2.5rem",
  color: "#ffffff",
  marginBottom: "40px",
};

const grid: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "20px"
};