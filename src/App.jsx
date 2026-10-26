
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <h1>Paradise Nursery</h1>
        <p>Bring nature home with beautiful plants.</p>
        <button onClick={() => window.location.href = "#products"}>
          Get Started
        </button>
      </div>

      <section id="products">
        <h2>Welcome to Paradise Nursery</h2>
        <p>Discover plants to brighten your home.</p>
      </section>
    </div>
  );
}

export default App;
