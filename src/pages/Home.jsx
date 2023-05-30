import React from "react";
import { Banner } from "../Components/Banner/Banner";
import Carrousel from "../Carrousel/Carrousel";
import { Box } from "@mui/material";
import CardVideo from "../Components/Card/CardVideo";

const Home = () => {
  return (
    <Box>
      <Banner />
      {/* <Carrousel /> */}
      <CardVideo/>
    </Box>
  );
};

export default Home;
