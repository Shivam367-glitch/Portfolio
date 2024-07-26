import React from "react";
import MyComponent from "../MyComponent";
import { useNavigate } from "react-router-dom";
import {handleClick} from "../../utility"
import "./Home.css";  
import Button from 'react-bootstrap/Button';
function Home() {
  const navigate = useNavigate();
  return (
    <div className="container home_container">
      <div className="home_innerdiv">
        <div className="left_div">
          <h3  className="mt-3 text-dark">Hi,I am <span  className="name-letter">Shivam Mishra</span></h3>
          <div className="mt-3 intro-section">I am a passionate <MyComponent/></div> 
          <div className="d-flex flex-wrap justify-content-between mt-5">
            <Button onClick={() => { handleClick(navigate,'/resume') }} variant="outline-success">Resume</Button>
            <Button onClick={() => { handleClick(navigate,'/contact') }} className="ms-4"  variant="outline-success">Contact Me</Button>
          </div>
        </div>
        <div className="right_div">
          <img src="home1.png" alt="Man Coding"/>
        </div>
      </div>
    </div>
  );
}

export default Home