import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../Context";

import EditarEquipo from "../../pages/FormNuevoEquipo/EditarEquipo/EditarEquipo";
import { Link, Navigate } from "react-router-dom";

const TablaEquipos = () => {
  const ContextEquipos = useContext(Context);
  const equipos = ContextEquipos.equipos;
  console.log('Estos son los ids iniciales',equipos.id)

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650, color: "white" }} aria-label="Tabla equipos">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Remover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {equipos.map((equipo) => (
            <TableRow
              key={equipo.titulo}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="rigth">{equipo.titulo}</TableCell>
              <TableCell align="rigth">{equipo.descripcion}</TableCell>
              <TableCell align="rigth">
                <Button
                  variant="outlined"
                  component={Link}
                  to={`/editarEquipo/${equipo.id}`}
                >
                  Editar
                </Button>
              </TableCell>
              <TableCell align="rigth">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => ContextEquipos.eliminarEquipo(equipo.id)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaEquipos;
