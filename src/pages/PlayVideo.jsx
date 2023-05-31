import { Box, Container } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

const PlayVideo = () => {
  return (
    <Box sx={{ display: "flex", placeContent: "center", padding: "20px 0" }}>
      <ReactPlayer controls={true} url="https://youtu.be/aNU59udWerk" />
    </Box>
  );
};

export default PlayVideo;
