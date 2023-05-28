import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import React from "react";
import FondoBanner from "../../img/backBanner.png";
import ReactPlayer from "react-player";

export const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "832px",
        backgroundImage: `url(${FondoBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        
      }}
    >
      <Stack
        
        sx={{
          width: "100%",
          height: "549px",
          bgcolor: "transparent",
          padding:'25px'
        }}
        direction='row'
        spacing='2'
      >
        <Container sx={{width: '66xpx'}}>
          <Button
            variant="contained"
            sx={{ width: "296px", height: "92px", fontSize: "30px" }}
          >
            Front End
          </Button>
          <Typography variant="h3" fontSize="xl" sx={{ color: "white" }}>
            Challenge React
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ color: "white" }}>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </Typography>
        </Container>
        <Box>
        <ReactPlayer
        url='https://youtu.be/EB4vWLzfVcI'
        controls
        
        />
       
        
        </Box>
      </Stack>
    </Box>
  );
};
