
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>MERN Blog</Link>
        </div>

        <nav className="nav-links">
          <Link to="/signin" className="ghost" style={{ textDecoration: "none" }}>Sign In</Link>
          <Link to="/signup" style={{ textDecoration: "none", color: "var(--accent)", fontWeight: 600 }}>Sign Up</Link>
        </nav>
      </div>
    </header>
  );
}
