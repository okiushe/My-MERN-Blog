
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <header className="hero">
          <div className="hero-inner">
            <h1>Welcome to my Blog!</h1>
            <p className="lead">A space where I share my frontend experiments, small design lessons, and practical CSS tips. My goal is to create content that is clean, simple, and easy to read — while also documenting my journey  
          as a growing developer. Here you’ll find code snippets, design patterns, and honest reflections on what  
          I’m learning along the way.</p>
          </div>
        </header>

        <section className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
