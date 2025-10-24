import { FiGithub, FiExternalLink, FiTerminal } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title} project`}
            className="project-image"
          />
        ) : (
          <div className="project-placeholder-console">
            <FiTerminal size={60} className="placeholder-icon" />
            <p className="placeholder-text">Console Project</p>
          </div>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-description">
          <p>{project.description}</p>
        </div>
        <ul className="project-tech-list">
          {project.techStack.map((tech) => (
            <li key={tech} className="tech-item">
              {tech}
            </li>
          ))}
        </ul>
        <div className="project-links-container">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FiGithub size={23} />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FiExternalLink size={23} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
