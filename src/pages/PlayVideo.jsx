import { Box } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { id } = useParams();
  console.log("Esto es el resultado de useparams", id);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        placeContent: "center",
        padding: "30px 0px",
      }}
    >
      <ReactPlayer controls={true} url={`https://youtu.be/${id}`} />
    </Box>
  );
};

export default PlayVideo;
