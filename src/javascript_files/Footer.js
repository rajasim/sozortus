import React from "react";
import "../css_files/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <figure>
        <video src="/videos/likesandclicks.mp4" autoPlay loop muted></video>
        <h1>likes and clicks</h1>
      </figure>
      <footer>
        <blockquote>
          <p>Home</p>
          <p>About</p>
          <p>Book a Service</p>
          <p>Blog</p>
        </blockquote>
        <blockquote>
          <p>Terms & Conditions</p>
          <p>Refund Policy</p>
          <p>Privacy Policy</p>
          <p>Accessibility Statement</p>
        </blockquote>
        <blockquote>
          <p>Facebook</p>
          <p>Linkedin</p>
          <p>X</p>
        </blockquote>
        <blockquote>
          <p>500 Terry Francine St.</p>
          <p>San Francisco, CA 94158</p>
        </blockquote>
        <blockquote>
          <p>Info@mysite.com</p>
          <p>123-456-7890</p>
          <p>© 2025 by Be.Guardit.</p>
          <p>
            Built on <b>React</b>
          </p>
        </blockquote>
      </footer>
    </div>
  );
}

export default Footer;
