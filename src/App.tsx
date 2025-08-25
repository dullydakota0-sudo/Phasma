import React, { useState } from "react";
import { ghosts } from "./data/ghosts";
import { evidenceList } from "./data/evidence";
import { maps } from "./data/maps";
import "./App.css";

function App() {
  const [selectedEvidence, setSelectedEvidence] = useState<string[]>([]);

  // Filter ghosts based on selected evidence
  const filteredGhosts = ghosts.filter(ghost =>
    selectedEvidence.length === 0 ||
    selectedEvidence.every(evidence => ghost.evidence.includes(evidence))
  );

  const toggleEvidence = (evidence: string) => {
    setSelectedEvidence(prev =>
      prev.includes(evidence)
        ? prev.filter(ev => ev !== evidence)
        : [...prev, evidence]
    );
  };

  return (
    <div className="App">
      <h1>Phasmophobia Cheat Sheet</h1>

      <section>
        <h2>Filter by Evidence</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1em" }}>
          {evidenceList.map(evidence => (
            <button
              key={evidence}
              style={{
                padding: "0.5em 1em",
                background: selectedEvidence.includes(evidence) ? "#aee" : "#eee",
                border: "1px solid #aaa",
                borderRadius: "4px",
                cursor: "pointer"
              }}
              onClick={() => toggleEvidence(evidence)}
            >
              {evidence}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2>Ghosts</h2>
        {filteredGhosts.length === 0 ? (
          <p>No ghosts match the selected evidence.</p>
        ) : (
          <ul>
            {filteredGhosts.map(ghost => (
              <li key={ghost.name}>
                <strong>{ghost.name}</strong>: {ghost.evidence.join(", ")}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Maps</h2>
        <div style={{ display: "flex", gap: "2em", flexWrap: "wrap" }}>
          {maps.map(map => (
            <div key={map.id} style={{ border: "1px solid #ccc", padding: "1em", borderRadius: "8px", minWidth: "180px" }}>
              <strong>{map.name}</strong>
              <p>{map.description}</p>
              {map.img && <img src={map.img} alt={map.name} style={{width: "120px", marginTop: "0.5em", borderRadius: "6px"}} />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;