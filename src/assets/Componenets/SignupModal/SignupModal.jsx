import React, { useState, useContext } from 'react';
import './SignupModal.css';
import {
  createUserWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { auth, googleProvider } from '../../firebase';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignupModal = ({ onClose, onSwitch }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [error, setError] = useState('');

  const { setIsLoggedIn, setUserId } = useContext(AuthContext);
  const navigate = useNavigate();

  const isValidUsername = (uname) => {
    const noSpaces = /^\S+$/;
    const hasLetter = /[a-zA-Z]/;
    const notOnlySpecials = /^[a-zA-Z0-9_]+$/;
    return noSpaces.test(uname) && hasLetter.test(uname) && notOnlySpecials.test(uname);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isValidUsername(username)) {
      setError('Username must include letters, no spaces or only special characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!gender || !age) {
      setError('Please fill out gender and age');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const db = getDatabase();

      const userData = {
        username,
        email,
        gender,
        age: parseInt(age),
        profilePhoto: profilePhoto || null,
        createdRooms: {},
        connections: {
          rooms: {},
          private: {}
        },
        anonymous: false,
        incompleteProfile: false
      };

      await set(ref(db, 'users/' + user.uid), userData);

      setIsLoggedIn(true);
      setUserId(user.uid);
      localStorage.setItem('userId', user.uid);
      navigate('/profile');
      setTimeout(() => onClose(), 100);
    } catch (err) {
      console.error("Error saving user: ", err);
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const db = getDatabase();

      const userData = {
        username: user.displayName || 'Anonymous',
        email: user.email,
        gender: '',
        age: null,
        profilePhoto: user.photoURL || null,
        createdRooms: {},
        connections: {
          rooms: {},
          private: {}
        },
        anonymous: true,
        incompleteProfile: true
      };

      await set(ref(db, 'users/' + user.uid), userData);

      setIsLoggedIn(true);
      setUserId(user.uid);
      localStorage.setItem('userId', user.uid);

      // Redirect to profile completion modal/page
      navigate('/complete-profile');
    } catch (err) {
      console.error('Google sign-up failed: ', err.message);
      setError('Google sign-up failed: ' + err.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Sign Up</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="number"
            placeholder="Age"
            min="13"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            type="url"
            placeholder="Profile Photo URL (optional)"
            value={profilePhoto}
            onChange={(e) => setProfilePhoto(e.target.value)}
          />

          <button type="submit" className="login-btn">Create Account</button>

          <div className="divider">OR</div>

          <button type="button" className="google-btn" onClick={handleGoogleSignup}>
            Continue with Google
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        <p className="signup-link">
          Already have an account? <button className="link-button" onClick={onSwitch}>Log in</button>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
