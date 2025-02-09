import React, { useEffect, useRef, useState } from "react";
import "../css_files/Homepage.css";

function Homepage({ opensidebar }) {
  const blockquotesize = useRef();
  const [size, setsize] = useState(0);

  useEffect(() => {
    setsize(blockquotesize.current.clientHeight);
    console.log(blockquotesize.current.clientHeight);
  }, []);
  return (
    <div className="homepage" id="homepage">
      <blockquote ref={blockquotesize} >
         <img id="navbar-logo-image" src="/images/sozartus.jpeg" />
        <button onClick={opensidebar}>
          <i class="fa-solid fa-bars"></i>
        </button>
      </blockquote>
      <blockquote
        style={{
          padding: 0,
          height: size,
          zIndex: 1,
          position: "unset",
        }}
      ></blockquote>
      <figure>
        <video src="/videos/board.mp4" autoPlay loop muted></video>
        <h1>
          Your Journey to a Digital Future. Our <br />
          IT Solutions, Tailored to Your Needs.
        </h1>
      </figure>
    </div>
  );
}

export default Homepage;
