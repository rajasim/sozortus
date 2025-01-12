import React from "react";
import "../css_files/Partner.css";

function Partner() {
  return (
    <section className="partner-with-us">
      <div className="partner-with-us-intro">
        <blockquote>
          <h1>
            INNOVATIVE SOLUTIONS <br /> FOR BUSINESSES
          </h1>
        </blockquote>
        <aside>
          <blockquote>
            <h1>80%</h1>
            <h2>Increase in Efficiency</h2>
            <p>
              Streamlined operations and <br />
              improved workflow.
            </p>
          </blockquote>
          <blockquote>
            <h1>100%</h1>
            <h2>Client Satisfaction Rate</h2>
            <p>
              Trusted by businesses across all <br />
              sectors for superior service.
            </p>
          </blockquote>
        </aside>
      </div>
      <div className="partner-with-us-outro">
        <figure>
          <video src="/videos/partner_with_us.mp4" autoPlay loop muted></video>
        </figure>
        <blockquote id="partner-with-us-outro-info">
          <p>Why Partner with Us?</p>
          <h1>
            FOCUS ON YOUR MISSION. <br />
            LET US MANAGE YOUR IT.
          </h1>
        </blockquote>
        <aside>
          <blockquote>
            <h2>Cutting-Edge Technology </h2>
            <p>
              Describe the service and how customers <br />
              or clients can benefit from it.
            </p>
          </blockquote>
          <blockquote>
            <h2>Cost-Effective Solutions</h2>
            <p>
              Describe the service and how customers <br />
              or clients can benefit from it.
            </p>
          </blockquote>
          <blockquote>
            <h2>24/7 Support and Monitoring</h2>
            <p>
              Describe the service and how customers <br />
              or clients can benefit from it.
            </p>
          </blockquote>
        </aside>
      </div>
    </section>
  );
}

export default Partner;
