import React from "react";

export default function Footer(){
  return (
    <footer>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <small>© {new Date().getFullYear()} Ayushi — Frontend experiments · Built with React</small>
      </div>
    </footer>
  );
}
