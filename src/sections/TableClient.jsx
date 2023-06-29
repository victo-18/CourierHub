import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

import '../styles/SummaryRequest.css';


export default function TableClient(datos) {
  const [item, setItem] = useState(datos.datos);
  const message = "USTED NO HA REALIZADO PEDIDOS TODAVÍA";
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 13,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    /*'&:last-child td, &:last-child th': {
      border: 0,
    },*/
  }));


  const modalControl = (value, fila) => {
    if (value == "editar") {
      datos.setTypeModal('editar');
      datos.setOpen(true);
      datos.setValores({
        nit: fila.nit,
        name: fila.name, 
        address: fila.address,
        phone: fila.phone
      });
    } else if (value == "eliminar") {
      datos.setTypeModal('eliminar');
      datos.setOpen(true);
      datos.setValores({
        nit: fila.nit
      });
    }
  }

  return (
    <TableContainer sx={{ maxHeight: 600 }}>
      {datos.tipo == 'historial' ?
        <Table aria-label="customized table" size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Fecha Solicitud</StyledTableCell>
              <StyledTableCell align='center'>Número Paquetes</StyledTableCell>
              <StyledTableCell align='center'>Descripción</StyledTableCell>
              <StyledTableCell align='center'>Dirección De Entrega</StyledTableCell>
              <StyledTableCell align='center'>Mensajero</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item !== null ? item.map((row) => (
              <StyledTableRow key={row.fecha}>
                <StyledTableCell component="th" scope="row"
                  data-titulo="Fecha Solicitud" align='center'>
                  {row.fecha}
                </StyledTableCell>
                <StyledTableCell data-titulo="Número De Paquetes" align='center'>{row.paquetes}</StyledTableCell>
                <StyledTableCell data-titulo="Descripción" align='center'>{row.descripcion}</StyledTableCell>
                <StyledTableCell data-titulo="Destino" align='center'>{row.direccion}</StyledTableCell>
                <StyledTableCell data-titulo="Mensajero" align='center'>{row.mensajero}</StyledTableCell>
              </StyledTableRow>
            )) :
              <StyledTableRow key={'null'}>
                <StyledTableCell component="th" scope="row"
                  data-titulo="Fecha Solicitud" align='center'>
                  {item == null & alert(message)}
                </StyledTableCell>
                <StyledTableCell data-titulo="Número De Paquetes" align='center'>{" "}</StyledTableCell>
                <StyledTableCell data-titulo="Descripción" align='center'>{" "}</StyledTableCell>
                <StyledTableCell data-titulo="Destino" align='center'>{" "}</StyledTableCell>
                <StyledTableCell data-titulo="Mensajero" align='center'>{" "}</StyledTableCell>
              </StyledTableRow>
            }
          </TableBody>
        </Table> :
        <Table stickyHeader aria-label="customized table" size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Nit</StyledTableCell>
              <StyledTableCell align='center'>Nombre</StyledTableCell>
              <StyledTableCell align='center'>Dirección</StyledTableCell>
              <StyledTableCell align='center'>Teléfono</StyledTableCell>
              <StyledTableCell align='center'>Opciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item !== null ? item.map((row) => (
              <StyledTableRow key={row.nit}>
                <StyledTableCell component="th" scope="row"
                  data-titulo="Nit" align='center' padding='normal'>
                  {row.nit}
                </StyledTableCell>
                <StyledTableCell data-titulo="Nombre" align='center' padding='none'>{row.name}</StyledTableCell>
                <StyledTableCell data-titulo="Dirección" align='center' padding='none'>{row.address}</StyledTableCell>
                <StyledTableCell data-titulo="Teléfono" align='center' padding='normal'>{row.phone}</StyledTableCell>
                <StyledTableCell data-titulo="Opciones" align='center' padding='none'>
                  {
                    <IconButton onClick={() => modalControl("editar", row)} aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  }
                  {
                    <IconButton onClick={() => modalControl("eliminar", row)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                </StyledTableCell>
              </StyledTableRow>
            )) :
              <StyledTableRow key={'null'}>
                <StyledTableCell component="th" scope="row"
                  data-titulo="Nombre" align='center'>
                  {" "}
                </StyledTableCell>
                <StyledTableCell data-titulo="Dirección" align='center'>{" "}</StyledTableCell>
                <StyledTableCell data-titulo="Teléfono" align='center'>{" "}</StyledTableCell>
                <StyledTableCell data-titulo="Opciones" align='center'>{" "}</StyledTableCell>
              </StyledTableRow>
            }
          </TableBody>
        </Table>}
    </TableContainer>
  );
}