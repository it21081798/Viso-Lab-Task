import CustomButton from "./CustomButton"
import React from "react";

import { Box, Container, styled, Typography } from "@mui/material";



import image5 from "../images/image5.jpg"
import image8 from "../images/image8.jpg"
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"


const Creation2 = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: theme.spacing(10),
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          textAlign: "center",
        },
        [theme.breakpoints.up("md")]: {
            width: "100%", 
            margin: "0 auto",
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
    


        
        
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox style={{position:"relative",bottom:"450px"}}>
          <ImgContainer>
            <img src={image5} alt="image5" style={{ maxWidth: "100%",position:"relative", bottom:"1950px", borderRadius:"0px",cursor: "pointer", "&:hover":{
                    color: "gray", 

                } }}  />
            <p style={{fontSize: "30px", fontWeight: "Raleway",fontFamily:"Montserrat",position:"relative",bottom:"2100px",color:"white",left:"20px",}}>FORM UP <br/> ABOVE VR</p>
          </ImgContainer>

          <ImgContainer>
            <img src={image8} alt="image8" style={{ maxWidth: "100%",position:"relative", bottom:"1950px", borderRadius:"0px",right:"0px" ,cursor: "pointer", "&:hover":{
                    color: "gray", 

                }}} 
             />
              <p style={{fontSize: "30px", fontWeight: "",fontFamily:"Montserrat",position:"relative",bottom:"2100px",color:"white",left:"20px",}}>POCKET <br/> BOREALIS </p>
          </ImgContainer>

          <ImgContainer>
            <img src={image1} alt="image1" style={{ maxWidth: "100%",position:"relative", bottom:"1950px", borderRadius:"0px",left:"5px",cursor: "pointer", "&:hover":{
                    color: "gray", 

                } }}  />
            <p style={{fontSize: "30px", fontWeight: "",fontFamily:"Alata",position:"relative",bottom:"2100px",color:"white",left:"20px",}} >THE <br/> CURIOSITY</p>
          </ImgContainer>

          <ImgContainer>
            <img src={image2} alt="image2" style={{ maxWidth: "100%",position:"relative", bottom:"1950px", borderRadius:"0px",right:"" ,cursor: "pointer", "&:hover":{
                    color: "gray", 

                }}}  />
            <p style={{fontSize: "30px", fontWeight: "",fontFamily:"Montserrat",position:"relative",bottom:"2100px",color:"white",left:"20px",}}>MAKE IT <br/> FISHEYE </p>
          </ImgContainer>

          
          


          </CustomBox>
          </Container>
          </Box>
          </Box>


            );
            };
            export default Creation2;