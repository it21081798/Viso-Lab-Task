import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";


import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"
import pinterest from "../images/pinterest.png"


import logo from "../images/logo.png"




const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    
    <div style={{position:"relative",bottom:"2500px"}}>
    <Box sx={{ py: 10,border:"2px solid black",background:"black" }}>
        <img
                src={logo}
                alt="logo"
                style={{ cursor: "point",position:"relative",left:"200px" ,}}
              />
      <CustomContainer>
        <CustomContainer>
        
          <Box>
            <Typography
              sx={{
                fontSize: "19px",
                color: "white",
                fontWeight: "500",
                mb: 2,
                position:"relative",
                top:"25px",
                right:"325px",
                fontFamily:"Gill Sans",
                cursor: "pointer", "&:hover":{
                    color: "orange",

                }
               
              }
            }
               
            >
            About 
            </Typography>

           
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "19px",
                color: "#fff",
                fontWeight: "500",
                mb: 2,
                position:"relative",
                top:"25px",
                right:"400px",
                fontFamily:"Gill Sans",
                cursor: "pointer", "&:hover":{
                    color: "orange",

                }
              }}
            >
             Careers
            </Typography>

            
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "19px",
                color: "#fff",
                fontWeight: "500",
                mb: 2,
                position:"relative",
                top:"25px",
                right:"480px",
                fontFamily:"Gill Sans",
                cursor: "pointer", "&:hover":{
                    color: "orange",

                }
              }}
            >
             Events
            </Typography>

            
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "19px",
                color: "#fff",
                fontWeight: "500",
                mb: 2,
                position:"relative",
                top:"25px",
                right:"550px",
                fontFamily:"Gill Sans",
                cursor: "pointer", "&:hover":{
                    color: "orange",

                }
              }}
            >
           Products
            </Typography>

            
          </Box>
         
          <Box>
            <Typography
              sx={{
                fontSize: "19px",
                color: "#fff",
                fontWeight: "500",
                mb: 2,
                position:"relative",
                top:"25px",
                right:"620px",
                fontFamily:"Gill Sans",
                cursor: "pointer", "&:hover":{
                    color: "orange",

                }
              }}
            >
            Support
            </Typography>

            <Typography
              sx={{
                fontSize: "17px",
                color: "gray",
                fontWeight: "500",
                mb: 2,
                position:"relative",
                left:"290px",
                bottom:"20px",
                fontFamily:" Noto Sans"
              }}
            >
              2021 Loopstudios. All right reserved.
            </Typography>

            <IconBox style={{position:"relative",left:"400px",bottom:"120px",}}>
              <img
                src={facebook}
                alt="facebook"
                style={{ cursor: "pointer" }}
              />
              <img
                src={twitter}
                alt="twitter"
                style={{ cursor: "pointer" }}
              />
              <img
                src={pinterest}
                alt="pinterest"
                style={{ cursor: "pointer" }}
              />
              <img
                src={instagram}
                alt="instagram"
                style={{ cursor: "pointer" ,
                  }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
    </div>
  );
};

export default Footer;