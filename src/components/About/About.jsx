import "./About.css";
import SkillList from "./SkillList";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h2 className="about-heading">
          <span className="about-number">02.</span> About Me
        </h2>
        <div className="about-narrative">
          <p>
            Hello! I'm Dereje Kenea, and I love creating things that live on the
            internet. My journey into web development began when I realized the
            power of building things with code—turning ideas into accessible,
            functional applications.
          </p>
          <p>
            I am a Computer Science graduate specializing in the MERN (MongoDB,
            Express, React, Node.js) stack. My current focus is on building
            robust front-end architectures using React while continually
            improving my back-end skills with Node.js.
          </p>
        </div>
      </div>

      <div className="skills-list-container">
        <h3 className="skills-list-title">Technical Expertise</h3>
        <p className="skills-list-description">
          Here are a few technologies I've been working with recently:
        </p>

        <div className="skills-categories-grid">
          <div className="skill-category">
            <h4>Frontend</h4>
            <SkillList category="frontend" />
          </div>
          <div className="skill-category">
            <h4>Backend</h4>
            <SkillList category="backend" />
          </div>
          <div className="skill-category">
            <h4>Database</h4>
            <SkillList category="database" />
          </div>
          <div className="skill-category">
            <h4>Tools</h4>
            <SkillList category="tools" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
