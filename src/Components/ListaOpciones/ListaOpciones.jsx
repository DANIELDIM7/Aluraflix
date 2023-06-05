import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";


const ListaOpciones = (props) => {
  const manejarCambio = (e) => {
    props.actualizarEquipo(e.target.value);
  };
  return (
    <FormControl fullWidth required >
        <InputLabel id="demo-simple-select-label">Seleccione la categoría</InputLabel>
      <Select label='Seleccione la categoría'  value={props.valor} onChange={manejarCambio}>
        {/* En el onChange se envia el dato seleccionado */}
        {props.equipos.map((equipo, index) => (
          <MenuItem   key={index} value={equipo.titulo}>
            {equipo.titulo}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ListaOpciones;
