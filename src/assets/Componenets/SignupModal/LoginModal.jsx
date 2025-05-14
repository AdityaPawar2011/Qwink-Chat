import React, { useState, useContext } from 'react';
import './LoginModal.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { auth, googleProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

const LoginModal = ({ onClose, onSwitch }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { setIsLoggedIn, setUserId } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrPhone, password }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Login failed');
      }

      const data = await res.json();

      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId || data.id);

      setIsLoggedIn(true);
      setUserId(data.userId || data.id);

      navigate('/profile');
      onClose();
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      setIsLoggedIn(true);
      setUserId(user.uid);
      localStorage.setItem('userId', user.uid);

      navigate('/profile');
      onClose();
    } catch (err) {
      setError('Google sign-in failed: ' + err.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Login</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">Log In</button>

          <div className="divider">OR</div>
          <button type="button" className="google-btn" onClick={handleGoogleLogin}>
            Continue with Google
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        <p className="signup-link">
          New user? <button className="link-button" onClick={onSwitch}>Create a new account</button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
