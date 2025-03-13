import React, { useRef } from "react";
import "../css_files/Sidebar.css";

function Sidebar({ sidebarRef }) {
  function closeSidebar() {
    sidebarRef.current.style.transform = "translateX(-1920px)";
    sidebarRef.current.style.transition = "transform 1s ease";
  }

  

  
  return (
    <section className="sidebar">
      <section ref={sidebarRef}>
        <div>
          <blockquote>
            <h1><a href="#homepage">Home</a></h1>
            <h1><a href="#about-us">About</a></h1>
            <h1><a href="#brands-section">Book a Service</a></h1>
            <h1><a href="#partner-with-us-intro">Blog</a></h1>
          </blockquote>
          <blockquote style={{ marginTop: "10rem" }}>
            <h3>SECURE YOUR BUSINESS TODAY</h3>
            
          </blockquote>
          <button onClick={closeSidebar}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </section>
    </section>
  );
}

export default Sidebar;
