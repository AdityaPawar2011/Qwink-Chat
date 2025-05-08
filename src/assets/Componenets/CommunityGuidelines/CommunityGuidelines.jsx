import React from 'react';
import './CommunityGuidelines.css';

function CommunityGuidelines() {
  return (
    <div className="guidelines-container">
      <h1>Community Guidelines</h1>
      <p className="subtitle">Creating a safe and welcoming space for everyone</p>

      <div className="guideline-section">
        <h2>1. Be Respectful</h2>
        <p>Treat all users with respect and kindness. Personal attacks, harassment, or hate speech are not tolerated under any circumstances.</p>
      </div>

      <div className="guideline-section">
        <h2>2. Stay Safe</h2>
        <p>Never share your private information such as passwords, addresses, or financial details in chats. Report any suspicious activity to moderators.</p>
      </div>

      <div className="guideline-section">
        <h2>3. No Spam or Self-Promotion</h2>
        <p>Do not spam chats or promote your own content without permission. This includes links to outside websites, promotions, or unsolicited advertisements.</p>
      </div>

      <div className="guideline-section">
        <h2>4. Keep It Legal</h2>
        <p>All activity must comply with local laws and regulations. Illegal behavior, including sharing pirated content, will result in immediate removal.</p>
      </div>

      <div className="guideline-section">
        <h2>5. Use Appropriate Language</h2>
        <p>This is a platform for users of all ages. Please use appropriate and inclusive language in public and private chats.</p>
      </div>

      <p className="footer-note">Failure to follow these guidelines may result in warnings, suspension, or permanent bans depending on the severity of the offense.</p>
    </div>
  );
}

export default CommunityGuidelines;

