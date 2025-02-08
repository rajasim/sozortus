import React from "react";
import "../css_files/Client.css"

function Client() {
  return (
    <div className="App">
      <section className="brands-section">
        <h2 className="section-title">BRANDS THAT TRUST US</h2>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
           <img src="/images/image.jpeg" style={{width:"400px"}} />
           <img src="/images/epp.jpeg" />
        </div>
      </section>
    </div>
  );
}

export default Client;
