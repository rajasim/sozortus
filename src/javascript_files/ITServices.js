import React, { useEffect, useRef } from "react";
import "../css_files/ITServices.css";

function ITServices() {
  const itservicesref = useRef();
  useEffect(() => {
    const observe = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const figures = entry.target.querySelectorAll("aside figure");
          for (let i = 0; i < figures.length; i++) {
            figures[i].style.transform = "translateY(0px)";
            figures[i].style.opacity = 1;
            figures[i].style.transition = "transform 2s ease";
          }

          observer.disconnect();
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(observe, options);

    if (itservicesref.current) {
      observer.observe(itservicesref.current);
    }

    return () => {
      if (itservicesref.current) {
        observer.unobserve(itservicesref.current);
      }
    };
  }, []);

  return (
    <div className="it-services" ref={itservicesref}>
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
