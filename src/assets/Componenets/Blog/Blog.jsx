import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-title">Latest from Our Blog</h1>
      <div className="blog-container">
        <div className="blog-card">
          {/* <img
            src="https://via.placeholder.com/400x200"
            alt="Illustration of people chatting in a group"
            className="blog-image"
          /> */}
          <h2>How Group Chats Are Changing Online Communities</h2>
          <p>
            Explore how chat rooms have evolved into vibrant spaces for niche communities and shared interests.
          </p>
        </div>

        <div className="blog-card">
          {/* <img
            src="https://via.placeholder.com/400x200"
            alt="A person typing on a phone for personal messaging"
            className="blog-image"
          /> */}
          <h2>The Rise of Personal Messaging in Modern Web Apps</h2>
          <p>
            One-on-one chats are now more than just messaging. Here's how personalization and privacy are reshaping user expectations.
          </p>
        </div>

        <div className="blog-card">
          {/* <img
            src="https://via.placeholder.com/400x200"
            alt="App interface showing both chat rooms and private messages"
            className="blog-image"
          /> */}
          <h2>Building a Chat App: Rooms vs. Direct Messages</h2>
          <p>
            Should you focus on group conversations or personal ones? A developer’s take on building a hybrid chat platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
