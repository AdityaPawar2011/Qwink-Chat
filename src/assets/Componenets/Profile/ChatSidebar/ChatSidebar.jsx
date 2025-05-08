import React from 'react';
import './ChatSidebar.css';

const mockChats = [
  { id: 1, name: 'Alice', lastMessage: 'Hey, how are you?' },
  { id: 2, name: 'Bob', lastMessage: 'Are you joining today?' },
  { id: 3, name: 'Charlie', lastMessage: 'Let’s catch up!' },
];

const ChatSidebar = ({ onSelectChat }) => {
  return (
    <div className="chat-sidebar">
      <h2>Recent Chats</h2>
      <ul className="chat-list">
        {mockChats.map(chat => (
          <li
            key={chat.id}
            className="chat-item"
            onClick={() => onSelectChat(chat)}
          >
            <strong>{chat.name}</strong>
            <p>{chat.lastMessage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
