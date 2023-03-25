import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";

const About = () => {

  return (
    <div className="aboutSection">
      
      <div className="aboutSectionGradient"></div>
      <div  style={{backgroundColor:"gray"}} className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
       
            <Typography >Tech Gems</Typography>
           
            <span>
            BLOCKCHAIN BASED
DONATION PLATFORM FOR
E-COMMERCE WEBSITE
            </span>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default About;
