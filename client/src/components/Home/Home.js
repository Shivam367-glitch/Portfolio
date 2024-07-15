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
         
          <h3 style={{color:"black"}} className="mt-2">
          Hi,I am  <span style={{ color: "#6c63ff" }}>Shivam Mishra</span>
          </h3>
          <p
            style={{
              color: "#211D1C",
              letterSpacing: ".5px",
              marginTop: 2,
              textAlign: "justify",
            }}
            className="mt-2"
          >
           I am a passionate <MyComponent/>
          </p> 
          <div className="d-flex flex-wrap justify-content-between mt-2">
         <Button   onClick={() => { handleClick(navigate,'/resume') }} className="mt-2 global_btn">Resume</Button>
         <Button   onClick={() => { handleClick(navigate,'/contact') }} className="ms-4 mt-2 global_btn">Contact Me</Button>
          </div>
          
        </div>
        <div className="right_div">
          <img
            src="home1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home