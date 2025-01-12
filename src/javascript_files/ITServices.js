import React from "react";
import "../css_files/ITServices.css";

function ITServices() {
  return (
    <div className="it-services">
      <blockquote>
        <h2>Our IT Services</h2>
        <h1>
          COMPREHENSIVE SOLUTIONS <br /> TAILORED TO YOUR NEEDS
        </h1>
      </blockquote>
      <aside>
        <figure>
          <img src="/images/Image 725.png" />
          <h3>01. Cloud Services</h3>
        </figure>
        <figure>
          <h3>02 . Managed IT Services</h3>
          <img src="/images/Image 727.png" />
        </figure>
        <figure>
          <img src="/images/Image 728.png" />
          <h3>03. Cybersecurity Services</h3>
        </figure>
        <figure>
          <h3>04 . Network Infrastructure</h3>
          <img src="/images/Image 729.png" />
        </figure>
      </aside>
    </div>
  );
}

export default ITServices;
