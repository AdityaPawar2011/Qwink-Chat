import React, { useEffect, useState } from 'react';
import './FindChatModal.css';
import { getDatabase, ref, onValue } from 'firebase/database';

const FindChatModal = ({ onClose }) => {
  const [searchTag, setSearchTag] = useState('');
  const [searchType, setSearchType] = useState('rooms'); // 'rooms', 'users', 'both'
  const [allRooms, setAllRooms] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const [filteredRooms, setFilteredRooms] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const db = getDatabase();

    // Load all rooms and users once
    const roomsRef = ref(db, 'rooms');
    onValue(roomsRef, (snapshot) => {
      const data = snapshot.val() || {};
      setAllRooms(Object.values(data));
    });

    const usersRef = ref(db, 'users');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val() || {};
      setAllUsers(Object.values(data));
    });
  }, []);

  useEffect(() => {
    const search = searchTag.trim().toLowerCase();

    if (!search) {
      setFilteredRooms([]);
      setFilteredUsers([]);
      return;
    }

    if (searchType === 'rooms' || searchType === 'both') {
      const matchedRooms = allRooms.filter((room) =>
        room.tags?.some((tag) => tag.toLowerCase().includes(search))
      );
      setFilteredRooms(matchedRooms);
    } else {
      setFilteredRooms([]);
    }

    if (searchType === 'users' || searchType === 'both') {
      const matchedUsers = allUsers.filter((user) =>
        user.username?.toLowerCase().includes(search)
      );
      setFilteredUsers(matchedUsers);
    } else {
      setFilteredUsers([]);
    }
  }, [searchTag, searchType, allRooms, allUsers]);

  return (
    <div className="modal-overlay">
      <div className="find-chat-modal">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Find Chat</h2>

        <input
          type="text"
          className="search-tag"
          placeholder={
            searchType === 'users'
              ? 'Enter username to search...'
              : 'Enter tag to search...'
          }
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

        {searchTag.trim() && (searchType === 'rooms' || searchType === 'both') && (
          <div className="results-section">
            <h3>Matching Rooms</h3>
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room, index) => (
                <div key={index} className="result-item">
                  <strong>{room.roomName}</strong> — Tags: {room.tags?.join(', ') || 'None'} | Limit: {room.maxUsers || '∞'}
                </div>
              ))
            ) : (
              <p className="no-result">No rooms found with this tag.</p>
            )}
          </div>
        )}

        {searchTag.trim() && (searchType === 'users' || searchType === 'both') && (
          <>
            <hr className="section-divider" />
            <div className="results-section">
              <h3>Matching Users</h3>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <div key={index} className="result-item">
                    👤 {user.username} — Tags: {user.tags?.join(', ') || 'None'}
                  </div>
                ))
              ) : (
                <p className="no-result">No users found with that name.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FindChatModal;
