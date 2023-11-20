
import CustomButton from "./CustomButton"
import React from "react";
import image4 from "../images/image4.jpg"
import { Box, Container, styled, Typography } from "@mui/material";
import image6 from "../images/image6.jpg"
import image7 from "../images/image7.jpg"
import image3 from "../images/image3.jpg"


const Creation = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: theme.spacing(10),
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          textAlign: "center",
        },
      }));

      const ImgContainer = styled(Box)(({ theme }) => ({
        width: "100%",
        [theme.breakpoints.down("md")]: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      }));

      const PropertiesTextBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
          textAlign: "center",
        },
      }));

return (
    <Box sx={{ mt: 5, py: 10, }} >
    <Container>
      <PropertiesTextBox>
        <Typography
          sx={{ color: "#000339", fontSize: "50px", fontWeight: "200",fontFamily:"Josefin Sans",position:"relative",bottom:"1900px"}}
        >
          OUR CREATIONS
        </Typography>
        </PropertiesTextBox>
        </Container>

<div style={{position:"relative",bottom:"1960px",left:"1500px"}}> 
         <CustomButton 
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="See All"
        
        
        
    /> 
    </div>
        
        
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={image4} alt="image4" style={{ maxWidth: "100%",position:"relative", bottom:"1950px", borderRadius:"0px" ,cursor: "pointer", "&:hover":{
                    color: "gray", 

                }}}  />
            <p style={{fontSize: "30px", fontWeight: "",fontFamily:"Josefin Sans",position:"relative",bottom:"2100px",color:"white",left:"20px",}}>DEEP <br/> EARTH</p>
          </ImgContainer>

          <ImgContainer>
            <img src={image6} alt="image6" style={{ maxWidth: "100%",position:"relative", bottom:"1950px", borderRadius:"0px",right:"0px",cursor: "pointer", "&:hover":{
                    color: "gray", 

                }  }} 
             />
              <p style={{fontSize: "30px", fontWeight: "",fontFamily:"Josefin Sans",position:"relative",bottom:"2100px",color:"white",left:"20px",}}>NIGHT <br/> ARCADE </p>
          </ImgContainer>

          <ImgContainer>
            <img src={image7} alt="image7" style={{ maxWidth: "100%",position:"relative", bottom:"1950px", borderRadius:"0px",left:"5px",cursor: "pointer", "&:hover":{
                    color: "gray", 

                } }}  />
            <p style={{fontSize: "30px", fontWeight: "",fontFamily:"Josefin Sans",position:"relative",bottom:"2100px",color:"white",left:"20px",}} >SOCCER <br/> TEAM VR </p>
          </ImgContainer>

          <ImgContainer>
            <img src={image3} alt="image3" style={{ maxWidth: "100%",position:"relative", bottom:"1950px", borderRadius:"0px",right:"" ,cursor: "pointer", "&:hover":{
                    color: "gray", 

                }}}  />
            <p style={{fontSize: "30px", fontWeight: "",fontFamily:"Josefin Sans",position:"relative",bottom:"2100px",color:"white",left:"20px",}}>THE <br/> GRID </p>
          </ImgContainer>

          
          


          </CustomBox>
          </Container>
          </Box>
          </Box>


            );
            };
            export default Creation;