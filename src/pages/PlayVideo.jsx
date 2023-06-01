import { Box } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const PlayVideo = () => {

  const {id } = useParams()
  console.log('Esto es el resultado de useparams', id)

  return (
    <Box sx={{ display: "flex", placeContent: "center", padding: "20px 0" }}>
      <ReactPlayer controls={true} url={`https://youtu.be/${id}`} />
    </Box>
  );
};

export default PlayVideo;
