import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Context } from "../../Context";
import ListaOpciones from "../../Components/ListaOpciones/ListaOpciones";
import { ValidarInput } from "./validaciones";
import { Link } from "react-router-dom";

const NewVideo = () => {
  // Datos obtenidos del formulario
  const [tituloNuevo, setTituloNuevo] = useState({
    value: "",
    valid: null,
  });

  const [equipoNuevo, setEquipoNuevo] = useState("");

  const [link, setLink] = useState({
    value: "",
    valid: null,
  });

  // Para seleccionar los equipos
  const contexEquipos = useContext(Context);
  const equipos = contexEquipos.equipos;

  // Para que cuando se renderice la página desaparezca e lbotón de nuevo video

  useEffect(() => {
    contexEquipos.setInicio(false);
  });

  // Función que envía los datos obtenidos a la base de datos del context

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (tituloNuevo.valid && equipoNuevo.length > 4 && link.value) {
      let datosAEnviar = {
        id: uuid(),
        nombre: tituloNuevo.value,
        categoria: equipoNuevo,
        url: link.value,
      };
      contexEquipos.actualizarVideos(datosAEnviar);
     
    }
  };

  const limpiarFormulario = (e) => {
    e.preventDefault();
    setTituloNuevo({
      value: "",
      valid: null,
    });
    setEquipoNuevo("");
    setLink({
      value: "",
      valid: null,
    });
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
        Nuevo vídeo
      </Typography>
      <TextField
        label="Tídulo del video"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={tituloNuevo.valid === false}
        helperText={
          tituloNuevo.valid === false && "Ingrese mínimo 6 caracteres"
        }
        value={tituloNuevo.value}
        onChange={(input) => {
          const titulo = input.target.value;
          const valid = ValidarInput(titulo);
          setTituloNuevo({ value: titulo, valid: valid });
        }}
      />
      <TextField
        label="Link del video"
        variant="outlined"
        fullWidth
        margin="dense"
        type="url"
        error={link.valid === false}
        helperText={link.valid === false && "Ingrese mínimo 6 caracteres"}
        value={link.value}
        onChange={(input) => {
          const link = input.target.value;
          const valid = ValidarInput(link);
          setLink({ value: link, valid: valid });
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
          <Button
            variant="contained"
            sx={{ color: "palette.info.dark" }}
            type="submit"
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
        <Button
          component={Link}
          to={'/nuevoEquipo'}
          variant="contained"
          onClick={() => contexEquipos.setInicio(false)}
        >
          Nueva categoria
        </Button>
      </Box>
    </Box>
  );
};

export default NewVideo;
