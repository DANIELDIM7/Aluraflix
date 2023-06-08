import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { ValidarInput } from "../../FormNuevoVideo/validaciones";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { Context } from "../../../Context";

const EditarEquipo = () => {

 
  const { id } = useParams();
  console.log('este es el id',id)

  
 

  const contexEquipos = useContext(Context);
  const datosEquipos = contexEquipos.equipos
  const filtroEquipo = datosEquipos.filter((equipo) => equipo.id === id)



 

  const [nombre, setNombre] = useState({
    value: filtroEquipo[0].titulo,
    valid: true,
  });

  console.log('este es el nombre inicial', nombre)
  const [descripcion, setDescripcion] = useState({
    value: filtroEquipo[0].descripcion,
    valid: true,
  });
  console.log('Este es la descripciojn inicial', descripcion)

  const [color, setColor] = useState(filtroEquipo[0].colorPrimario);
  console.log('Este es el color inicial', color)
  useEffect(() => {
    contexEquipos.setInicio(false);
    
  });

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre.valid && color.length > 1) {
      let datosAenviar = {
        id: id,
        titulo: nombre.value,
        descripcion: descripcion.value, //Convierte la primer letra de cada palagra en mayuscula
        colorPrimario: color,
      };
      contexEquipos.editarEquipo(datosAenviar);
      console.log('se hizo clic')
    }
  };

  const limpiarFormulario = (e) => {
    e.preventDefault();
    setNombre({
      value: "",
      valid: null,
    });
    setDescripcion({
      value: "",
      valid: null,
    });
    setColor("");
  };

  return (
    <Box
      component="form"
      // onSubmit={manejarEnvio}
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
        Editar equipo
      </Typography>
      <TextField
        required
        label="Nombre (Por favor poner la primer letra de cada palabra en mayúscula"
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
        required
        label="Descripción"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={descripcion.valid === false}
        helperText={
          descripcion.valid === false && "Ingrese mínimo 3 caracteres"
        }
        value={descripcion.value}
        onChange={(input) => {
          const descripcion = input.target.value;
          const valid = ValidarInput(descripcion);
          setDescripcion({ value: descripcion, valid: valid });
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
            onClick={manejarEnvio}
          >
            Guardar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={limpiarFormulario}
          >
            Limpiar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditarEquipo;
