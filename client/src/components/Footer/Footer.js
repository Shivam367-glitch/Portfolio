import React from "react";
import { useNavigate } from 'react-router-dom';
import { year,handles,handleClick } from "../../utility";
import "./footer.css";
function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer text-white  bg-dark">
      <div className="container footer_container d-flex justify-content-around flex-wrap">
        <div className="first mt-5">
          <h4>Shivam Mishra</h4>
          <p>@ {year} No copyright issues.</p>
          <p className="d-flex">
            {
              handles.map((account, index) => {
                return (
                  <a key={index} href={account.href} target="_blank" rel="nofollow noopener noreferrer">
                    <i className={account.iconName}></i>
                  </a>
                )})
            }
          </p>
        </div>
        <div className="second mt-5">
          <h4>Get In Touch</h4>
          <p  className="pointer" onClick={() => { handleClick(navigate,'/contact') }}>txt2shivam@gmail.com</p>
          <a href="tel:8820239869" className="pointer">+91 8820239869</a>
        </div>
        <div className="third mt-5">
          <h4>About</h4>
          <p onClick={() => { handleClick(navigate,'/resume') }} className="pointer">Resume</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
