import "./Footer.css";
import { navLinks, socialLinks } from "./footerData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content-container">
        <div className="footer-section-links">
          <h4 className="footer-heading">Quick Links</h4>
          <nav className="footer-nav">
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name} className="nav-lits-item">
                  <a href={link.url} className="nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-section-social">
          <h4 className="footer-heading">Connect</h4>
          <div className="social-icons-wrapper">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-copyright-text">
            &copy; {currentYear} Dereje Kenea. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
