import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:mf7227164@gmail.com" data-cursor="disable">
                mf7227164@gmail.com
              </a>
            </p>
            {/* <h4>Education</h4>
            <p>BSc in Computer Science</p> */}
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/MFaheem01"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/m-faheem-a84532380?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/923337862496"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              WhattsApp <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/feem0_/?__pwa=1#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>feeeMoo</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
