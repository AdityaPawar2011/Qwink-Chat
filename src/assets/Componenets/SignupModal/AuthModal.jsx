// AuthModal.jsx
import React, { useState } from 'react';
import LoginModal from './LoginModal/LoginModal';
import SignupModal from './SignupModal/SignupModal';

const AuthModal = ({ onClose }) => {
  const [activeModal, setActiveModal] = useState('login'); // 'login' or 'signup'

  const handleSwitch = (target) => {
    setActiveModal(target); // switch between login/signup
  };

  return (
    <>
      {activeModal === 'login' && (
        <LoginModal
          onClose={onClose}
          onSwitch={() => handleSwitch('signup')}
        />
      )}
      {activeModal === 'signup' && (
        <SignupModal
          onClose={onClose}
          onSwitch={() => handleSwitch('login')}
        />
      )}
    </>
  );
};

export default AuthModal;
