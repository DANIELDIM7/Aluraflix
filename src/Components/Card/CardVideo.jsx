import React from "react";
import Card from "@mui/material/Card";
import { CardMedia, Link } from "@mui/material";
import ReactPlayer from "react-player";

const CardVideo = () => {
  // Aquí se obtiene el enlace del video
  const enlace = "https://youtu.be/yHpAUOmAAd0";
  // Aquí se obtiene el enlace de la imágen a partir del enlace del video se manipula el string para eliminar una parte y dejar solo el identificador del video para descargar su imagen

  const enlaceImagen = enlace.replace("https://youtu.be/", "");

  return (
    <Card sx={{ maxWidth: 440, border:'2px solid #6BD1FF', borderRadius: "6px", }}>
      <CardMedia
        sx={{ height: "260.85px" }}
        image={`http://i3.ytimg.com/vi/${enlaceImagen}/hqdefault.jpg`}
      />
    </Card>
  );
};

export default CardVideo;
