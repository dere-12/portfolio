import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit, resetForm] = useForm("mqayrjwp");

  const handleReset = () => {
    resetForm();
  };

  if (state.succeeded) {
    return (
      <div className="contact-form-wrapper">
        <p className="contact-success-message">
          Thank you for reaching out! Your message has been sent successfully.
          I'll get back to you soon.
        </p>

        <div>
          <button onClick={handleReset} className="contact-reset-button">
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-content-right">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-name-wrapper">
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="form-input"
              required
            />
            <ValidationError
              field="name"
              errors={state.errors}
              className="form-error"
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="form-input"
              required
            />
            <ValidationError
              field="email"
              errors={state.errors}
              className="form-error"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="form-label">
            Subject
          </label>

          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            className="form-input"
            required
          />
          <ValidationError
            field="subject"
            errors={state.errors}
            className="form-error"
          />
        </div>

        <div className="form-textarea-wrapper">
          <label htmlFor="message" className="form-label">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            className="form-textarea"
            required
          />
          <ValidationError
            field="message"
            errors={state.errors}
            className="form-error"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="contact-submit-button"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

        <ValidationError errors={state.errors} className="form-error" />
      </form>
    </div>
  );
};

export default ContactForm;
