import React, { useState } from 'react';
import './CreateRoomModal.css';

const CreateRoomModal = ({ onClose }) => {
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [isLimitedUsers, setIsLimitedUsers] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [password, setPassword] = useState('');
  const [maxUsers, setMaxUsers] = useState('');
  const [tags, setTags] = useState('');
  
  const handleCreateRoom = (e) => {
    e.preventDefault();
    const tagList = tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    if (tagList.length === 0) {
      alert('Please enter at least one tag.');
      return;
    }

    const roomData = {
      roomName,
      password: isPasswordProtected ? password : null,
      maxUsers: isLimitedUsers ? parseInt(maxUsers) : null,
      tags: tagList
    };

    console.log('Room Created:', roomData);
    onClose(); // close modal after submission
  };

  return (
    <div className="modal-overlay">
      <div className="create-room-modal">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Create Chat Room</h2>

        <form onSubmit={handleCreateRoom}>
          <input 
            type="text" 
            placeholder="Room Name" 
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            required 
          />

          <label className="radio-label">
            <input 
              type="checkbox" 
              checked={isPasswordProtected}
              onChange={() => setIsPasswordProtected(!isPasswordProtected)}
            />
            Password Protect Room
          </label>
          {isPasswordProtected && (
            <input 
              type="password" 
              placeholder="Enter Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          )}

          <label className="radio-label">
            <input 
              type="checkbox" 
              checked={isLimitedUsers}
              onChange={() => setIsLimitedUsers(!isLimitedUsers)}
            />
            Limit Number of Users
          </label>
          {isLimitedUsers && (
            <input 
              type="number" 
              placeholder="Max Users" 
              value={maxUsers}
              onChange={(e) => setMaxUsers(e.target.value)}
              required 
            />
          )}

          <input 
            type="text" 
            placeholder="Add Tags (comma separated)" 
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required 
          />

          <button type="submit" className="create-btn">Create Room</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRoomModal;
