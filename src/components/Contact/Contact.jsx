import "./Contact.css";
import { contactInfo, socialLinks } from "./contactData";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-header">
        <h2 className="contact-heading">
          <span className="contact-number">05.</span> Let's Connect
        </h2>
        <div className="contact-message">
          <p>
            I'm currently looking for new opportunities, and my inbox is always
            open. Whether you have a question about my work or just want to say
            hi, I'll do my best to get back to you!
          </p>
        </div>
      </div>

      <div className="contact-content-container">
        <div className="contact-content-left">
          <ul className="contact-info-list">
            {contactInfo.map((item) => (
              <li key={item.label} className="info-list-item">
                <item.icon size={35} className="info-icon" />
                <div>
                  <p className="info-label">{item.label}</p>
                  <a href={item.link} className="info-value">
                    {item.value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div className="social-links-wrapper">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
