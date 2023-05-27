//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Encabezado2 from '../utils/Encabezado2'
import '../styles/DeliveryDay.css'

function createData(name, typeOfPackage, status, courier) {
  return { name, typeOfPackage, status, courier };
}

const rows = [
  createData('Johan Andres Ruiz Bermudez','Electrodomestico','Entregado','Victor Alomia'),
  createData('Victor Alfonso Alomia Angulo', 'Papeleria', 'No entregado', 'Camilo Ceballos'),
  createData('Andres Felipe Morenno ', 'Cristaleria', 'Recogido', 'Cristian Presz'),
  createData('Juan Sebatian Camino', 'Peresederos', 'Recogido', 'Andres Moreno'),
  createData('Mauricio Merlano Cano','Delicado','No recogido','Cristian Mafla'),
];

export default function DeliveryDay() {
  return (
    <TableContainer component={Paper}>
        <Encabezado2/>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow id='nombres'>
            <TableCell>Nombre del cliente</TableCell>
            <TableCell align="right">Numero y tipo de paquete</TableCell>
            <TableCell align="right">Estado del paquete</TableCell>
            <TableCell align="right">Nombre del mensajero</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
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