import React, { useState, useEffect } from 'react';
import './ChatWindow.css';

const ChatWindow = ({ activeChat }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Load mock messages when a chat is selected
  useEffect(() => {
    if (activeChat) {
      // Simulate fetching chat messages
      setMessages([
        { sender: activeChat.name, text: 'Hi there!' },
        { sender: 'You', text: `Hey ${activeChat.name}!` },
      ]);
    } else {
      setMessages([]); // reset if no chat
    }
  }, [activeChat]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'You', text: input }]);
    setInput('');
  };

  if (!activeChat) {
    return (
      <div className="chat-window empty">
        <p>Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <h3 className="chat-header">{activeChat.name}</h3>
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}
          >
            <span>{msg.sender}: </span>{msg.text}
          </div>
        ))}
      </div>
      <div className="input-bar">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
