import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <div className="privacy-card">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-text">
          We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our chat platform.
        </p>

        <ol className="privacy-list">
          <li>
            <strong>Information We Collect</strong><br />
            We may collect basic information such as your username, messages, and interaction logs to improve your experience and maintain platform integrity.
          </li>

          <li>
            <strong>How We Use Your Information</strong><br />
            We use the collected data to ensure platform functionality, enhance user experience, monitor abuse, and comply with legal obligations. We do not sell your data to third parties.
          </li>

          <li>
            <strong>Data Security</strong><br />
            We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction.
          </li>

          <li>
            <strong>Sharing of Information</strong><br />
            We do not share your personal data with any third-party entities unless required by law or with your explicit consent.
          </li>

          <li>
            <strong>Cookies and Tracking</strong><br />
            We may use cookies for session management and analytics. You can control cookie preferences through your browser settings.
          </li>

          <li>
            <strong>Children's Privacy</strong><br />
            Our service is not directed to children under 13. We do not knowingly collect information from children.
          </li>

          <li>
            <strong>Changes to This Policy</strong><br />
            We may update this Privacy Policy from time to time. Any major changes will be notified, and continued use of our service implies agreement to the updated policy.
          </li>
        </ol>

        <p className="privacy-text">
          If you have questions about this Privacy Policy, feel free to contact us through the support section.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
