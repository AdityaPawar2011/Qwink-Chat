import React, { useState } from 'react';

import './Profile.css';
import ChatSidebar from './ChatSidebar/ChatSidebar';
import ChatWindow from './ChatWindow/ChatWindow.jsX';

const ProfilePage = () => {
  const [activeChat, setActiveChat] = useState(null); // null = no chat selected

  return (
    <div className="profile-page">
      <ChatSidebar onSelectChat={setActiveChat} />
      <ChatWindow activeChat={activeChat} />
    </div>
  );
};

export default ProfilePage;
