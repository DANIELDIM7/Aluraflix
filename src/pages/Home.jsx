import React from "react";
import { Banner } from "../Components/Banner/Banner";
import Carrousel from "../Carrousel/Carrousel";
import { Box } from "@mui/material";


const Home = () => {
  return (
    <>
      <Banner />
      <Carrousel isFrontend />
      <Carrousel />
      
      
     
    </>
  );
};

export default Home;
