import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState,useEffect, useInsertionEffect } from "react";
import { v4 as uuid } from "uuid";
import { Context } from "../../Context";
import ListaOpciones from "../../Components/ListaOpciones/ListaOpciones";



const NewVideo = () => {
  const [tituloNuevo, setTitulo] = useState({
    value: "",
    valid: null,
  });

  const [link, setLink] = useState({
    value: "",
    valid: null,
  });

  const [equipoNuevo, setEquipoNuevo] = useState("");

  // Para seleccionar los equipos
  const contexEquipos = useContext(Context);
  const equipos = contexEquipos.equipos;

  useEffect(() => {
    
    contexEquipos.setInicio(false)
  });

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
        flexDirection: "column",
        padding:'40px'
      }}
    >
      <Typography variant="h2" sx={{color:'white'}} >Nuevo vídeo</Typography>
      <TextField
        label="Tídulo del video"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={tituloNuevo.value}
        onChange={(input) => {
          const link = input.target.value;
          const valid = null;
          setTitulo({ value: link, valid: valid });
        }}
        // sx={{bgcolor:'#53585D', color: 'white'}}
      />
      <TextField
        label="Link del video"
        variant="outlined"
        fullWidth
        margin="dense"
        type="url"
        value={link.value}
        onChange={(input) => {
          const titulo = input.target.value;
          const valid = null;
          setLink({ value: titulo, valid: valid });
        }}
      />

      <ListaOpciones
        valor={equipoNuevo}
        actualizarEquipo={setEquipoNuevo}
        equipos={equipos}
      />

      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button variant="contained" sx={{ color: "palette.info.dark" }}>
            {" "}
            Guardar
          </Button>
          <Button variant="contained" color="secondary">
            {" "}
            Limpiar
          </Button>
        </Box>
        <Button variant="contained" onClick={() => contexEquipos.setInicio(false)}>Nueva categoria</Button>
      </Box>
    </Box>
  );
};

export default NewVideo;
