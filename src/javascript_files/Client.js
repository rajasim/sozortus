import React from "react";
import "../css_files/Client.css"

function Client() {
  return (
    <div className="App">
      <section className="brands-section" id="brands-section">
        <h2 className="section-title">BRANDS THAT TRUST US</h2>
        <div >
           <img src="/images/image.jpeg" style={{width:"400px", maxWidth:"100%"}} />
           <img src="/images/epp.jpeg" style={{maxWidth:"100%"}}/>
        </div>
      </section>
    </div>
  );
}

export default Client;
