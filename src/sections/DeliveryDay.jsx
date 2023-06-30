//import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NabarMensajeros from "../sections/NabarMensajeros";
import "../styles/DeliveryDay.css"

function createData(name, address, typeOfPackage, status, courier) {
  return { name, address, typeOfPackage, status, courier };
}

const rows = [
  createData("Johan Andres Ruiz Bermudez", "Cr 90 cl 25 - 10", "Electrodomestico", "Entregado", "Victor Alomia"),
  createData("Victor Alfonso Alomia Angulo","Cr 90 cl 25 - 10", "Papeleria", "No entregado", "Camilo Ceballos"),
  createData("Andres Felipe Morenno ", "Cr 90 cl 25 - 10","Cristaleria", "Recogido", "Cristian Presz"),
  createData("Juan Sebatian Camino", "Cr 90 cl 25 - 10","Peresederos", "Recogido", "Andres Moreno"),
  createData("Mauricio Merlano Cano","Cr 90 cl 25 - 10", "Delicado", "No recogido", "Cristian Mafla"),
];

export default function DeliveryDay() {
  return (
    <TableContainer id="tablaentrega" component={Paper}>
      <NabarMensajeros />
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow id="nombres">
            <TableCell>Nombre del cliente</TableCell>
            <TableCell align="right">Dirección</TableCell>
            <TableCell align="right">Numero y tipo de paquete</TableCell>
            <TableCell align="right">Estado del paquete</TableCell>
            <TableCell align="right">Nombre del mensajero</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.typeOfPackage}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.courier}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}