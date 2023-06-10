import { Box, Container } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardVideo from "../Card/CardVideo";

const Carrousel = (props) => {
  const { titulo, colorPrimario } = props.datos;
  const { videos } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
      <Container
        // variant="contained"
        sx={{
          bgcolor: `${colorPrimario}`,
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "0",
          fontSize: "35px",
          fontWeight: "400",
          borderRadius: "4px",
        }}
        // size="small"
      >
        {titulo}
      </Container>
      <Slider {...settings}>
        {videos.map((video) => (
          <CardVideo url={video.url} datos={video} />
        ))}
      </Slider>
    </Box>
  );
};

export default Carrousel;
