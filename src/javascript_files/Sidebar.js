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
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Book a Service</h1>
            <h1>Blog</h1>
          </blockquote>
          <blockquote style={{ marginTop: "10rem" }}>
            <h3>SECURE YOUR BUSINESS TODAY</h3>
            <h3>INFO@MYSITE.COM</h3>
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
