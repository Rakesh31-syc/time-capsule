import React, { useState } from "react";
import "../styles/LetterWriting.css";

function LetterWriting() {
  const [letter, setLetter] = useState("");
  const [email, setEmail] = useState(""); // New state for email

  const handleLetterChange = (e) => {
    setLetter(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email state
  };

  return (
    <div className="letter-writing-container">
      <div className="letter-writing-card">
        <h1>Write Your Letter to the Future</h1>
        <p className="subtitle">
          Share your thoughts, dreams, or advice. We'll deliver it to your future self!
        </p>

        <form>
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Subject Field */}
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Enter a title for your letter" />
          </div>

          {/* Date Picker */}
          <div className="form-group">
            <label htmlFor="date">Delivery Date</label>
            <input type="date" id="date" />
          </div>

          {/* Letter Text Area */}
          <div className="form-group">
            <label htmlFor="letter">Your Letter</label>
            <textarea
              id="letter"
              placeholder="Start writing your letter here..."
              rows="8"
              value={letter}
              onChange={handleLetterChange}
            />
          </div>

          {/* Attachments */}
          <div className="form-group">
            <label htmlFor="attachments">Add Photos/Videos</label>
            <input type="file" id="attachments" multiple />
          </div>

          {/* Buttons */}
          <div className="form-actions">
            <button type="button" className="btn-preview">Preview</button>
            <button type="submit" className="btn-save">Save Letter</button>
            <button type="reset" className="btn-cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LetterWriting;