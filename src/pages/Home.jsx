import React from "react";
import { Banner } from "../Components/Banner/Banner";
import Carrousel from "../Components/Carrousel/Carrousel";
import { useContext, useEffect } from "react";
import { Context } from "../Context";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const contexDatos = useContext(Context);
  const { equipos, videos } = contexDatos;

  useEffect(() => {
    contexDatos.setInicio(true);
  });

  return (
    <>
      <Banner />
      {equipos.map((equipo) => (
        <Carrousel
          key={equipos.id}
          datos={equipo}
          videos={videos.filter((video) => video.categoria === equipo.titulo)}
        />
      ))}

      <Button
        component={Link}
        to={"/nuevoVideo"}
        variant="contained"
        sx={{ display: { xs: "flex", sm: "none" }, width: { xs: "100%" } }}
      >
        Nuevo Video
      </Button>
    </>
  );
};

export default Home;
