import React, { useState } from 'react';
import './CreateRoomModal.css';
import { ref, set, push } from 'firebase/database';
import { auth, db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const CreateRoomModal = ({ onClose }) => {
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [isLimitedUsers, setIsLimitedUsers] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [password, setPassword] = useState('');
  const [maxUsers, setMaxUsers] = useState('');
  const [tags, setTags] = useState('');
  const navigate = useNavigate();

  const handleCreateRoom = async (e) => {
    e.preventDefault();

    const tagList = tags
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag);

    if (tagList.length === 0) {
      alert('Please enter at least one tag.');
      return;
    }

    const uid = auth.currentUser?.uid;
    if (!uid) {
      alert('User not authenticated!');
      return;
    }

    try {
      const roomRef = push(ref(db, 'rooms'));
      const roomId = roomRef.key;
      const createdAt = Date.now();

      const roomData = {
        roomId,
        roomName,
        password: isPasswordProtected ? password : null,
        maxUsers: isLimitedUsers ? parseInt(maxUsers) : null,
        tags: tagList,
        createdBy: uid,
        createdAt,
        participants: {
          [uid]: true
        }
      };

      await set(roomRef, roomData);

      await set(ref(db, `users/${uid}/createdRooms/${roomId}`), {
        roomId,
        roomName,
        createdAt
      });

      await set(ref(db, `users/${uid}/connections/rooms/${roomId}`), {
        roomId,
        roomName,
        joinedAt: createdAt,
        lastMessage: 'Room created!',
        lastActive: createdAt
      });

      alert('Room created successfully!');
      navigate('/profile');
      onClose();

    } catch (err) {
      console.error('Error creating room:', err);
      alert('Failed to create room. Please try again.');
    }
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
