// client/src/pages/Signin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      alert("Signed in (UI-only).");
      navigate("/");
    }, 700);
  }

  return (
    <div style={{ maxWidth: 640, margin: "18px auto", background: "var(--card)", padding: 18, borderRadius: 10 }}>
      <h2 style={{ marginTop: 0 }}>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", fontSize: 14, marginBottom: 6 }}>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #e5e7eb" }}
            type="email"
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", fontSize: 14, marginBottom: 6 }}>Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #e5e7eb" }}
            type="password"
          />
        </div>

        {error && <div style={{ color: "crimson", marginBottom: 8 }}>{error}</div>}

        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn" type="submit" disabled={busy}>{busy ? "Signing in..." : "Sign In"}</button>
          <button type="button" className="btn ghost" onClick={() => navigate("/signup")}>Create account</button>
        </div>
      </form>
    </div>
  );
}
