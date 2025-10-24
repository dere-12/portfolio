import "./Projects.css";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const INITIAL_COUNT = 6;

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_COUNT);

  const handleToggle = () => {
    if (visibleProjects < projects.length) {
      setVisibleProjects(projects.length);
    } else {
      setVisibleProjects(INITIAL_COUNT);
    }
  };

  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-heading">
        <span className="projects-number">04.</span> My Work
      </h2>
      <div className="projects-grid">
        {projects.slice(0, visibleProjects).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="projects-toggle-btn-container">
        <button onClick={handleToggle} className="project-toggle-btn">
          {visibleProjects < projects.length ? "Show More" : "Show Less"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
