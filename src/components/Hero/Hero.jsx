import "./Hero.css";
import downloadIcon from "../../assets/downloadIcon.svg";
import profilePic from "../../assets/profilePic.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-contents">
        <p className="hero-greeting">Hi, my name is</p>

        <h1 className="hero-title">Dereje Kenea.</h1>

        <h2 className="hero-subtitle">Ful-Stack Web Developer</h2>

        <p className="hero-description">
          I build things for the web. I am a Computer Science graduate and a
          motivated full-stack web developer specializing in the MERN (MongoDB,
          Express, React, Node.js) stack.
        </p>

        <div className="cta-buttons">
          <a href="#projects" className="hero-button primary-cta">
            View My Projects
          </a>

          <a
            href="/resume.pdf"
            className="hero-button secondary-cta"
            target="_blank"
            rel="noopener noreferrer"
            download="Dereje-Kenea-Resume.pdf"
          >
            <img src={downloadIcon} alt="download icon" /> Download Resume
          </a>
        </div>
      </div>

      <div className="hero-img">
        <div className="profile-pic">
          <div className="profile-card profile-card--front">
            <img src={profilePic} alt="profile picture" />
          </div>

          <div className="profile-card profile-card--back">
            <h3 className="profile-name">Dereje Kenea</h3>
            <p className="profile-role">Full-Stack Web Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
