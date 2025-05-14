import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './hero.css';
import HeroImg from './../../../img/hero.gif';
import LoginModal from '../../SignupModal/LoginModal';
import SignupModal from '../../SignupModal/SignupModal';
import CreateRoomModal from '../../CreateRoomModal/CreateRoomModal';
import FindChatModal from '../../FindChatModal/FindChatModal';
import { AuthContext } from '../../../contexts/AuthContext';


const Hero = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null); // 'login' | 'signup' | null

  const handleRecentChatClick = () => {
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      setActiveModal('login');
    }
  };
  const handleCreateRoomClick = () => {
    if (isLoggedIn) {
      setActiveModal('createRoom');
    } else {
      setActiveModal('login');
    }
  }
  const handleFindChatClick = () => {
    if (isLoggedIn) {
      setActiveModal('findChat');
    } else {
      setActiveModal('login');
    }
  }

  return (
    <div className='hero'>
      <div className="left-in-hero">
        <img src={HeroImg} alt="Hero" />
        <div className="buttons-in-hero">
          <button className='btn-in-hero' id='createRoomButton' onClick={handleCreateRoomClick}>Create Room</button>
          <button className='btn-in-hero' id='joinRoomButton' onClick={handleFindChatClick}>Join Chat</button>
          <button className='btn-in-hero' id='recentChatButtoon' onClick={handleRecentChatClick}>Recent Chats</button>

        </div>
      </div>
      <div className="text-in-hero">
        <h1 className='h-in-hero'>Converting Strangers to Friends</h1>
        <p>Create or find rooms you are interested in</p>
      </div>

      {activeModal === 'login' && (
        <LoginModal
          onClose={() => setActiveModal(null)} 
          onSwitch={() => setActiveModal('signup')} 
        />
      )}

      {activeModal === 'signup' && (
        <SignupModal
          onClose={() => setActiveModal(null)} 
          onSwitch={() => setActiveModal('login')} 
        />
      )}
      {activeModal === 'createRoom' && (
        <CreateRoomModal
          onClose={() => setActiveModal(null)} 
          onSwitch={() => setActiveModal('login')} 
        />
      )}
      {activeModal === 'findChat' && (
        <FindChatModal
          onClose={() => setActiveModal(null)} 
          onSwitch={() => setActiveModal('findChat')} 
        />
      )}

    </div>
  );
};

export default Hero;
