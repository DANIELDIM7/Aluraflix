import { Box, Button,  Container, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import FondoBanner from "../../img/backBanner.png";

import CardVideo from "../Card/CardVideo";
import { Context } from "../../Context";

export const Banner = () => {

  const contexDatos = useContext(Context);

  const { videos, equipos } = contexDatos;
  const videoBanner = videos[videos.length-1]
  const datosTitulo = equipos.filter((video) => video.titulo === videoBanner.categoria);
  // Se saca el color primario del equipo correspondiente
  const valores = datosTitulo[0].colorPrimario;
  
 
  
  return (
    <Box
      sx={{
        // width: "100%",
        height: "700px",
        backgroundImage: `url(${FondoBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          bgcolor: "transparent",
          padding: "25px",
        }}
        direction="row"
        spacing="2"
      >
        <Container sx={{ width: "66xpx" }}>
          <Button
            variant="contained"
            sx={{ width: "296px", height: "92px", fontSize: "30px", bgcolor: `${valores}` }}
          >
            {videoBanner.categoria}
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
        <Container>
          <CardVideo url={videoBanner.url} />
        </Container>
      </Stack>
    </Box>
  );
};
