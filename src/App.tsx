import React from "react";
import { MapGallery } from "./components/MapGallery";
import { GhostTracker } from "./components/GhostTracker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Phasmophobia Cheat Sheet</h1>
      <MapGallery />
      <GhostTracker />
    </div>
  );
}

export default App;
