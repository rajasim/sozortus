import React from "react";
import "../css_files/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <figure>
        <video src="/videos/likesandclicks.mp4" autoPlay loop muted></video>
        <h1>Sozartus</h1>
      </figure>
      <footer>
        <blockquote>
          <p>Contact Us</p>
          <p>+91 75889 95299</p>
          <p>+91 88050 50358</p>
          
        </blockquote>
        <blockquote>
          <p>Address</p>
          <p>Mailing Address as per record<br></br> available in Registar of
          <br></br> Companies office:
SOZORTUS AI PRIVATE LIMITED 
FL-B-401 YASH RHYTHM , SN-37, KHONDHWA KH, Pune city , pune-411048, Maharashtra 
*as issued by income tax department</p>
          
        </blockquote>
        
          
        <blockquote></blockquote>
         
       
        <blockquote>
          <p>Info@Sozartus.com</p>
          
          <p>
            Built on <b>React</b>
          </p>
        </blockquote>
      </footer>
    </div>
  );
}

export default Footer;
