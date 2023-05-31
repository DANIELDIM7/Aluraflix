import { Box, Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardVideo from "../Components/Card/CardVideo";

const Carrousel = (props) => {
  const { id, titulo, colorPrimario } = props.datos;
  const { videos } = props;
  console.log('Estos son los videos', videos)


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    
    <Box
    
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "25px",
        background: "#191919",
      }}
    >
      <Button
        variant="contained"
        sx={{ width: "365px", bgcolor: `${colorPrimario}` }}
      >
        {titulo}
      </Button>
      <Slider {...settings}>
        {videos.map((video) => (
          <CardVideo url={video.url} />
        ))}
      </Slider>
    </Box>
  );
};

export default Carrousel;
