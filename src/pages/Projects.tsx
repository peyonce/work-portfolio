   import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "UI Challenge App",
      description: "A /mnt/chromeos/MyFiles/Downloads/cv.pdf..",
      link: "https://github.com/peyonce/TYPESCRIP-TASK2.git",
    },
    {
      title: "Shopping List App",
      description: "A React + Redux app to manage shopping lists.",
      link: "https://github.com/peyonce/ShoppingApp.git",
    },
    {
      title: "Restaurant App",
      description: "A responsive React app that displays restaurant information and menus using API integration..",
      link: "https://github.com/peyonce/RestaurantApp.git",
    },
  ];

  return (
    <section id="projects"style={container}>
      <h2 style={heading}>My Projects</h2>
      <div style={grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
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