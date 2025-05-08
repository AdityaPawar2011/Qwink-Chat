import React from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose, onSwitch }) => {
  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Login</h2>

        <form className="login-form">
          <input type="text" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="login-btn">Log In</button>

          <div className="divider">OR</div>

          <button type="button" className="google-btn">Continue with Google</button>
        </form>

        <p className="signup-link">
          New user? <button className="link-button" onClick={onSwitch}>Create a new account</button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
