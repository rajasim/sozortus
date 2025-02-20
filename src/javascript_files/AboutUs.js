import React, { useEffect, useRef } from "react";
import "../css_files/AboutUs.css";

function AboutUs() {
  const aboutusref = useRef();
  useEffect(() => {
    const observe = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const div = entry.target;
          console.log(div);
          div.style.transform = "skew(0deg)";
          div.style.transition = "transform 2s ease";

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

    if (aboutusref.current) {
      observer.observe(aboutusref.current);
    }

    return () => {
      if (aboutusref.current) {
        observer.unobserve(aboutusref.current);
      }
    };
  }, []);
  return (
    <section style={{width:"100%",overflow:"hidden"}}>
    <div className="about-us" ref={aboutusref} id="about-us">
      <figure>
        <img src="/images/Image 724.png" />
      </figure>
      <aside>
        <blockquote style={{ width: "70%", margin: "0 auto" }}>
          <h2>About Us</h2>
          <h1>Committed to Excellence in IT Services</h1>
        </blockquote>
        <blockquote>
          <h2>
          We are a dynamic and professional IT team, comprising expert developers, meticulous testers, cutting-edge cybersecurity specialists, and innovative marketing strategists. Our collective expertise enables us to deliver comprehensive solutions that cater to the diverse needs of our clients.
          </h2>
        </blockquote>
        <blockquote style={{ flexDirection: "row" }}>
          <button>
            <i class="fa-solid fa-circle-arrow-right"></i>
          </button>
          <h2>Learn More</h2>
        </blockquote>
      </aside>
    </div>
    </section>
  );
}

export default AboutUs;
