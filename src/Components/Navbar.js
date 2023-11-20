import React from "react";
import { Box } from "@mui/system";
import { Container, Menu, Typography } from "@mui/material";
import CustomButton from "./CustomButton"
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import logo from "../images/logo.png";

import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
}  from "@mui/material"; 
import { useState } from "react";


export const Navbar = ()=> {
    
        const [mobileMenu, setMobileMenu] = useState({
          left: false,
        });

        const toggleDrawer = (anchor, open) => (event) => {
            if (
              event.type === "keydown" &&
              (event.type === "Tab" || event.type === "Shift")
            ) {
              return;
            }
        
            setMobileMenu({ ...mobileMenu, [anchor]: open });
          };
        
          const list = (anchor) => (
            <Box
              sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
                {["About", "Careers", "Events", "Products", "Support"].map(
                  (text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index === 0 && <HomeIcon />}
                          {index === 1 && <FeaturedPlayListIcon />}
                          {index === 2 && <MiscellaneousServicesIcon />}
                          {index === 3 && <ListAltIcon />}
                          {index === 4 && <ContactsIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          );


    const NavLink = styled(Typography)(({theme})=> ({
        fontSize:"17px",
        color: "White",
        fontWeight:"700",
        fontFamily: "Inter",
        cursor: "pointer", "&:hover": {
            color: "black",

        },

        }));

    const NavbarLinkBox = styled(Box)(({theme}) =>({
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            display: "none",
        },
    }));

    const CustomerMenuIcon = styled(MenuIcon)(({theme}) =>({
        cursor: "pointer",
        display: "none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "block",
        }

    }));

    const NavbarContainer= styled (Container)(({theme}) =>({
        display:"flex",
        alignItems:"center",
        justifyContent: "space-between",
        padding:theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2),
        }
    }));

    const NavbarLogo = styled("img")(({theme}) =>({
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            display: "none",

        },

    }));

    return <NavbarContainer>
        <Box sx ={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem"
        }}
        >
            <Box sx={{display: "flex",alignItems: "center"}}>
                <CustomerMenuIcon/>
                <NavbarLogo src = {logo} alt = "logo" style={{position:"relative",bottom:"1070px"}}/>

            </Box>

            <NavbarLinkBox style={{position:"relative",bottom:"1070px",left:"550px"}}>
                <NavLink variant="body2">About</NavLink>
                <NavLink variant="body2">Careers</NavLink>
                <NavLink variant="body2">Events</NavLink>
                <NavLink variant="body2">Products</NavLink>
                <NavLink variant="body2">Support</NavLink>
            </NavbarLinkBox>

        </Box>

        <Box sx={{
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
            gap:"1rem",

        }}>

        <Box sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:"1rem"
        }}>
            
           {/* <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="See All"
         style={{position:"relative",top:"1200px"}}
    /> */}
    </Box>

        </Box>
        
        </NavbarContainer>;

    


};

export default Navbar;