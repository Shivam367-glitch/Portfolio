import React from "react";
import { Link } from 'react-router-dom';
import { year,handles } from "../../utility";
import "./footer.css";
function Footer() {
  return (
    <div className="footer text-white  bg-dark pb-3">
      <div className="container footer_container d-flex justify-content-around flex-wrap">
        <div className="first mt-5">
          <h4>Shivam Mishra</h4>
          <p>@ {year} No copyright issues.</p>
          <div className="d-flex justify-content-between flex-wrap">
            {
              handles.map((account, index) => {
                return (
                  <a key={index} href={account.href} target="_blank" rel="nofollow noopener noreferrer" >
                    <i className={account.iconName}  ></i>
                  </a>
                )})
            }
          </div>
        </div>
        <div className="second mt-5  d-flex flex-column  justify-content-center align-items-center gap-2">
          <h4>Get In Touch</h4>
          <Link to="/contact"  className="pointer">txt2shivam@gmail.com</Link>
          <a href="tel:8820239869" className="pointer ">+91 8820239869</a>
        </div>
        <div className="third mt-5 d-flex flex-column  justify-content-start align-items-center">
          <h4>About</h4>
          <Link to="/resume"  className="pointer">Resume</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
