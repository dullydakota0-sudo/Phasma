import React from "react";
import { maps } from "../data/maps";

export const MapGallery = () => (
  <section>
    <h2>Map Gallery</h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
      {maps.map((map) => (
        <div key={map.id} style={{ width: 300 }}>
          <img src={map.img} alt={map.name} style={{ width: "100%" }} />
          <h3>{map.name}</h3>
          <p>{map.description}</p>
        </div>
      ))}
    </div>
  </section>
);