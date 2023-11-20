import {Box, styled, Typography} from "@mui/material";
import {Container } from "@mui/system";
import  homeImg  from "../images/homeImg.jpg";


const Home = () => {
    const CustomBox = styled(Box) (({theme}) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection : "column",
            alignItems: "center",
            textAlign: "center",
        }

    }));

    const Title = styled(Typography)(({theme})=>({
        fontSize: "50px",
        color: "white",
        fontWeight: "400",
        fontFamily:"Josefin Sans",
        padding: theme.spacing(3),
         
        margin:theme.spacing(4, 0, 0,0),
      
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
            
        }
        

    }));

    return <Box sx={{backgroundColor: "",minHeight: "100vh"}}>
        <Container>
           
            <CustomBox>
                <Box sx={{flex:"1"}}>
                    <Typography variant ="body2" 
                    sx={{
                        fontSize: "18px",
                        color:"#687690",
                        fontWeight:"500",
                        mt: 10,
                        mb: 4,
                    }}>
                        
                        </Typography>
                        <Title variant="h1" style={{flex:'2',marginTop:"200px",border:"2px solid white",marginRight:"900px",transform: 'translateX(-50%)', zIndex: "1",position:"relative",left:'400px',top:'100px'}} >
                            IMMERSIVE  <br/>
                            EXPERIENCES <br/>
                            THAT DELIVER
                            
                        </Title>
                        <Box sx={{flex:"1.5"}}>
                            <img src={homeImg} alt="homeImg" style={{bottom:"422px",position:'relative'}}
                            />
                            

                        </Box>

                        
                </Box>
                </CustomBox>           
                </Container>
            </Box>;

}

export default Home;