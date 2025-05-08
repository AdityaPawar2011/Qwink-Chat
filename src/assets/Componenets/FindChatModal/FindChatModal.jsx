import React, { useState } from 'react';
import './FindChatModal.css';

const mockRooms = [
  { name: 'Gaming Zone', tags: ['gaming', 'fps'], usersLimit: 10 },  
  { name: 'Study Buddies', tags: ['study', 'homework'], usersLimit: 5 },
  { name: 'Travel Talk', tags: ['travel', 'adventure'], usersLimit: 8 },
];

const mockUsers = [
  { username: 'aditya_p', tags: ['gaming', 'study'] },
  { username: 'neha_01', tags: ['travel', 'art'] },
  { username: 'rahul007', tags: ['study', 'books'] },
];

const FindChatModal = ({ onClose }) => {
  const [searchTag, setSearchTag] = useState('');
  const [searchType, setSearchType] = useState('rooms'); // 'rooms', 'users', or 'both'

  const filteredRooms = mockRooms.filter(room =>
    room.tags.includes(searchTag.toLowerCase())
  );

  const filteredUsers = mockUsers.filter(user =>
    user.tags.includes(searchTag.toLowerCase())
  );

  return (
    <div className="modal-overlay">
      <div className="find-chat-modal">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Find Chat</h2>

        <input
          type="text"
          className="search-tag"
          placeholder="Enter tag to search..."
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
        />

        <div className="search-type">
          <label>
            <input
              type="radio"
              name="searchType"
              value="rooms"
              checked={searchType === 'rooms'}
              onChange={() => setSearchType('rooms')}
            />
            Rooms
          </label>
          <label>
            <input
              type="radio"
              name="searchType"
              value="users"
              checked={searchType === 'users'}
              onChange={() => setSearchType('users')}
            />
            Users
          </label>
          <label>
            <input
              type="radio"
              name="searchType"
              value="both"
              checked={searchType === 'both'}
              onChange={() => setSearchType('both')}
            />
            Both
          </label>
        </div>

        {(searchType === 'rooms' || searchType === 'both') && (
          <div className="results-section">
            <h3>Matching Rooms</h3>
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room, index) => (
                <div key={index} className="result-item">
                  <strong>{room.name}</strong> — Tags: {room.tags.join(', ')} | Limit: {room.usersLimit}
                </div>
              ))
            ) : (
              <p className="no-result">No rooms found with this tag.</p>
            )}
          </div>
        )}

        {(searchType === 'users' || searchType === 'both') && (
          <>
            <hr className="section-divider" />
            <div className="results-section">
              <h3>Users with this Tag</h3>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <div key={index} className="result-item">
                    👤 {user.username} — Tags: {user.tags.join(', ')}
                  </div>
                ))
              ) : (
                <p className="no-result">No users found with this tag.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FindChatModal;
