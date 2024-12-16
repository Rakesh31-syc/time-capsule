import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Main.css';

const Main = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStarted = () => {
    navigate('/letter-writing'); // Navigate to Letter Writing page
  };

  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-text text-center">
          <h1>Preserve Your Thoughts for Tomorrow</h1>
          <p>
            Time Capsule lets you write letters to your future self, add personal photos or videos,
            and receive them on a date of your choice.
          </p>
          <button className="get-started-btn" onClick={handleGetStarted}>Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="about">
        <h2>Why You'll Love Time Capsule</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">✍️</div>
            <h3>Write Letters</h3>
            <p>Capture your thoughts, goals, and memories to rediscover later.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📸</div>
            <h3>Add Photos or Videos</h3>
            <p>Make your letters more personal by attaching photos or videos.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📅</div>
            <h3>Set Delivery Date</h3>
            <p>Choose the exact date you want to receive your letter.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔔</div>
            <h3>Get Reminders</h3>
            <p>Never forget your scheduled letters with friendly notifications.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;