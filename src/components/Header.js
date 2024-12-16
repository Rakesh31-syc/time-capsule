import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Time Capsule</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </nav>
    </header>
  );
}

export default Header;
