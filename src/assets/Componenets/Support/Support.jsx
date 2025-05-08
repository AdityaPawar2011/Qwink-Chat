import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <div className="support-page">
      <section className="support-header">
        <h1>Need Help?</h1>
        <p>We're here for you! Whether you're facing issues or have questions, find answers below or contact us directly.</p>
      </section>

      <section className="support-faq">
        <h2>🔎 Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>💬 How do I join a chat room?</h3>
          <p>Just head to the homepage and click on any public room or create your own with a name of your choice.</p>
        </div>
        <div className="faq-item">
          <h3>🔒 Are my private messages secure?</h3>
          <p>Yes! All personal messages are encrypted and can only be read by the sender and recipient.</p>
        </div>
        <div className="faq-item">
          <h3>📱 Can I use this platform on mobile?</h3>
          <p>Absolutely. Our site is fully responsive and works smoothly on phones and tablets.</p>
        </div>
      </section>

      <section className="support-contact">
        <h2>📬 Contact Us</h2>
        <p>Still have questions? Reach out directly!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Support;
