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
    <div className="about-us" ref={aboutusref}>
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
            This is a space to share more about the business: who's behind it,
            what it does and what this site has to offer. It’s an opportunity to
            tell the story behind the business or describe a special service or
            product it offers. You can use this section to share the company's
            history or highlight a particular feature that sets it apart from
            competitors.
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
