import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Our Chat Platform</h1>
        <p>
          Welcome to our real-time chat platform — designed for seamless communication, whether it's in a room full of friends or a private one-on-one.
        </p>
      </section>

      <section className="about-section">
        <h2>💬 Chat Rooms</h2>
        <p>
          Join public or private chat rooms and connect with people who share your interests. Whether it's for study groups, gaming, or communities, rooms bring people together in real time.
        </p>
      </section>

      <section className="about-section">
        <h2>🔒 Personal Messaging</h2>
        <p>
          Send direct messages securely with our private chat system. Your one-on-one conversations stay private, encrypted, and lightning fast.
        </p>
      </section>

      <section className="about-section">
        <h2>⚡ Real-Time Sync</h2>
        <p>
          Our platform is powered by real-time technology. Messages appear instantly across all connected devices — no need to refresh or wait.
        </p>
      </section>

      <section className="about-section">
        <h2>🛡️ Safe and Secure</h2>
        <p>
          We prioritize user privacy and safety. Conversations are encrypted and protected, ensuring your data stays yours.
        </p>
      </section>

      <section className="about-cta">
        <h2>🚀 Ready to Chat?</h2>
        <p>
          Dive in, create your first room or send a personal message — it’s free and always will be.
        </p>
        <button onClick={() => window.location.href = '/'}>Go to Home</button>
      </section>
    </div>
  );
};

export default About;
