import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="#home" className="header-logo">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <nav className="header-nav">
        <a href="#home" className="header-link">
          <span>01. </span>Home
        </a>
        <a href="#about" className="header-link">
          <span>02. </span>About
        </a>
        <a href="#experience" className="header-link">
          <span>03. </span>Experience
        </a>
        <a href="#projects" className="header-link">
          <span>04. </span>Projects
        </a>
        <a href="#contact" className="header-link">
          <span>05. </span>Contact
        </a>
        <a
          href="/resume.pdf"
          className="resume-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
