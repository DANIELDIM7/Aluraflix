import React from "react";
import LogoFooter from "../../img/logoFooter.png";
import { Box } from "@mui/material";
import { Context } from "../../Context";
import { useContext } from "react";

const Footer = () => {
  const contexDatos = useContext(Context);

  return (
    <Box
      sx={{
        bgcolor: `${contexDatos.colores.grayMedium}`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        height: "94px",
        borderTop: `1px solid ${contexDatos.colores.bluePrimary}`
      }}
    >
      <Box >
        <img src={LogoFooter} alt="" />
      </Box>
    </Box>
  );
};

export default Footer;
