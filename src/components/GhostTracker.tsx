import React, { useState } from "react";
import { ghosts } from "../data/ghosts";
import { evidenceList } from "../data/evidence";

export const GhostTracker = () => {
  const [selectedEvidence, setSelectedEvidence] = useState<string[]>([]);

  const toggleEvidence = (ev: string) => {
    setSelectedEvidence((prev) =>
      prev.includes(ev) ? prev.filter((e) => e !== ev) : [...prev, ev]
    );
  };

  const filteredGhosts = ghosts.filter((ghost) =>
    selectedEvidence.every((ev) => ghost.evidence.includes(ev))
  );

  return (
    <section>
      <h2>Ghost Evidence Tracker</h2>
      <div>
        {evidenceList.map((ev) => (
          <label key={ev} style={{ marginRight: 16 }}>
            <input
              type="checkbox"
              checked={selectedEvidence.includes(ev)}
              onChange={() => toggleEvidence(ev)}
            />
            {ev}
          </label>
        ))}
      </div>
      <h3>Possible Ghosts</h3>
      <ul>
        {filteredGhosts.map((g) => (
          <li key={g.name}>
            <strong>{g.name}</strong>: {g.evidence.join(", ")}
          </li>
        ))}
        {filteredGhosts.length === 0 && <li>No ghosts match this evidence.</li>}
      </ul>
    </section>
  );
};