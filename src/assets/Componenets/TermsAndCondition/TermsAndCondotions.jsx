import React from 'react';
import './TermsAndConditions.css';

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <div className="terms-card">
        <h1 className="terms-title">Terms and Conditions</h1>
        <p className="terms-text">
          <strong>Welcome to our chat platform.</strong> By accessing or using this website, you agree to comply
          with and be bound by the following Terms and Conditions. These terms are designed to ensure a
          safe, respectful, and lawful environment for all users. If you do not agree with these terms,
          please refrain from using the website.
        </p>

        <ol className="terms-list">
          <li>
            <strong>User Conduct and Responsibilities</strong><br />
            You must use the chat platform only for lawful and respectful communication. Do not share
            abusive, threatening, defamatory, obscene, or illegal content. Harassment, hate speech, and
            impersonation are prohibited. Violators may be banned.
          </li>

          <li>
            <strong>Privacy and Safety</strong><br />
            We protect your data and privacy. Public messages are visible to others, so avoid sharing
            sensitive personal details like phone numbers or financial info.
          </li>

          <li>
            <strong>Content Moderation and Reporting</strong><br />
            We may monitor public messages to maintain respect. Use reporting tools to report violations.
            Action may include content removal or account suspension.
          </li>

          <li>
            <strong>Age Restriction and Parental Consent</strong><br />
            Users must be 13 or older. Users under 18 should have parental permission. We do not knowingly
            collect data from children under 13.
          </li>

          <li>
            <strong>Intellectual Property</strong><br />
            All site content and design are the property of the website owner. Commercial use without
            permission is not allowed.
          </li>

          <li>
            <strong>Limitation of Liability</strong><br />
            We are not responsible for user content or harm resulting from platform use. The platform is
            provided "as-is" without guaranteed uptime.
          </li>

          <li>
            <strong>Changes to the Terms</strong><br />
            We may update these terms at any time. Continued use of the site implies acceptance of changes.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default TermsAndConditions;
