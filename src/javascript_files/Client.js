import React from "react";
import "../css_files/Client.css"

function Client() {
  return (
    <div className="App">
      <section className="brands-section">
        <h2 className="section-title">BRANDS THAT TRUST US</h2>
        <div className="brands-container">
          <div className="brand-card">Emcure</div>
          <div className="brand-card">ReWaise</div>
        </div>
      </section>
    </div>
  );
}

export default Client;
