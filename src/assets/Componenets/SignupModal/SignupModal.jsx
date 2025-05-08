import React from 'react';
import './SignupModal.css';

const SignupModal = ({ onClose, onSwitch }) => {
  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Sign Up</h2>

        <form className="login-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit" className="login-btn">Create Account</button>

          <div className="divider">OR</div>

          <button type="button" className="google-btn">Continue with Google</button>
        </form>

        <p className="signup-link">
          Already have an account? <button className="link-button" onClick={onSwitch}>Log in</button>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
