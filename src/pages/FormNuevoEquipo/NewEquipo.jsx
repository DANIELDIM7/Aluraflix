import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { ValidarInput } from "../FormNuevoVideo/validaciones";
import { v4 as uuid } from "uuid";

const NewEquipo = () => {
  const [nombre, setNombre] = useState({
    value: "",
    valid: null,
  });

  const [color, setColor] = useState("");

  const contexEquipos = useContext(Context);

  // Para que cuando se renderice la página desaparezca e lbotón de nuevo video

  useEffect(() => {
    contexEquipos.setInicio(false);
  });

  // Enviar los datos

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre.valid && color.length > 1) {
      let datosAenviar = {
        id: uuid(),
        titulo: nombre.value, //Convierte la primer letra de cada palagra en mayuscula
        colorPrimario: color,
      };
      contexEquipos.actualizarEquipos(datosAenviar);
    }
  };

  const limpiarFormulario = (e) => {
    e.preventDefault();
    setNombre({
      value: "",
      valid: null,
    });
    setColor("");
    
  };



  return (
    <Box
      component="form"
      onSubmit={manejarEnvio}
      autocomplete="off"
      id="formulario"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
        flexDirection: "column",
        padding: "40px",
      }}
    >
      <Typography variant="h2" sx={{ color: "white" }}>
        Nuevo equipo
      </Typography>
      <TextField
        required
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={nombre.valid === false}
        helperText={nombre.valid === false && "Ingrese mínimo 3 caracteres"}
        value={nombre.value}
        onChange={(input) => {
          const nombre = input.target.value;
          const valid = ValidarInput(nombre);
          setNombre({ value: nombre, valid: valid });
        }}
      />
      <TextField
        label="Color del equipo"
        variant="outlined"
        fullWidth
        margin="dense"
        type="color"
        value={color}
        onChange={(input) => {
          const color = input.target.value;
          setColor(color);
        }}
      />

      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button
            variant="contained"
            sx={{ color: "palette.info.dark" }}
            type="submit"
          >
            Guardar
          </Button>
          <Button variant="contained" color="secondary" onClick={limpiarFormulario}>
            Limpiar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewEquipo;
