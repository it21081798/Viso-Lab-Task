import React from "react";
import image from "../images/img.jpg";
import { Box } from "@mui/system";



const About = () => {
    return (
      <Box sx={{flex:"1"}}>
        <><div className="about-section-image-container">
            <img src={image} alt="img" style={{ position: "relative", left: "450px", bottom: "450px" }} />
        </div><div className="about-section-text-container">
                
                <h1 className="primary-heading" style={{fontFamily:"Josefin Sans",fontWeight:"200",position:"relative",fontSize:"45px",border: "2px solid white", padding:"150px",marginRight:"1300px",bottom:"800px",left:"1000px",marginLeft:"20px",marginBottom:"900px",backgroundColor:"white"}}>
                    <div style={{position:"relative",bottom:"80px",right:"40px"}}>THE LEADER IN <br/>
                    INTERACTIVE VR</div>
                </h1>
                <p className="primary-text"style={{fontFamily:"Inter",fontSize:"16px",fontWeight:"600",color:"gray",position:"relative",bottom:"1900px",left:"1130px"}}>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna <br/>
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.<br/>
          In VR, users are typically provided with a headset that displays  <br/>
          three-dimensional environment that can be interacted with  <br/>
         
        </p>
            </div></>
            </Box>
         
        
  );
};
      
    

export default About;