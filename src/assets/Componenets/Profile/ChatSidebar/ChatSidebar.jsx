import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import './ChatSidebar.css';
import CreateRoomModal from '../../CreateRoomModal/CreateRoomModal';

const ChatSidebar = ({ onSelectChat }) => {
  const [chatList, setChatList] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    const fetchChats = async () => {
      const auth = getAuth();
      const rtdb = getDatabase();
      const currentUser = auth.currentUser;

      if (!currentUser) {
        console.warn('No user is logged in.');
        return;
      }

      const uid = currentUser.uid;

      try {
        const userConnectionsRef = ref(rtdb, `users/${uid}/connections`);
        const snapshot = await get(userConnectionsRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const roomChats = data.rooms || {};
          const privateChats = data.private || {};

          const roomChatItems = Object.keys(roomChats).map(roomId => ({
            id: roomId,
            type: 'room',
            name: `Room: ${roomChats[roomId].roomName || roomId}`,
            lastMessage: roomChats[roomId].lastMessage || '',
            timestamp: roomChats[roomId].lastActive || 0
          }));

          const privateChatItems = Object.keys(privateChats).map(chatId => ({
            id: chatId,
            type: 'private',
            name: privateChats[chatId].username || `User: ${chatId}`,
            lastMessage: privateChats[chatId].lastMessage || '',
            timestamp: privateChats[chatId].lastActive || 0
          }));

          const combined = [...roomChatItems, ...privateChatItems].sort(
            (a, b) => b.timestamp - a.timestamp
          );

          setChatList(combined);
        }
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }, [showCreateModal]); // refresh list after modal closes

  return (
    <div className="chat-sidebar">
      <div className="chat-sidebar-header">
        <h2>Recent Chats</h2>
        <button className="create-room-btn" onClick={() => setShowCreateModal(true)}>
          + Create Room
        </button>
      </div>

      <ul className="chat-list">
        {chatList.map(chat => (
          <li
            key={chat.id}
            className="chat-item"
            onClick={() => onSelectChat(chat)}
          >
            <strong>{chat.name}</strong>
            <p>{chat.lastMessage || 'No messages yet'}</p>
          </li>
        ))}
      </ul>

      {showCreateModal && (
        <CreateRoomModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
};

export default ChatSidebar;
