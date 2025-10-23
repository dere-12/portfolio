import "./Experience.css";
import { experience, education } from "./experienceData";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <h2 className="experience-heading">
        <span className="experience-number">03.</span> Experience & Education
      </h2>

      <div className="experience-content">
        <div className="experience-column-work">
          <h3 className="column-title">Experience</h3>
          <div className="timeline">
            {experience.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="experience-column-education">
          <h3 className="column-title">Education</h3>
          <div className="timeline">
            {education.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
