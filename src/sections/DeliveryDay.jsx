//import * as React from 'react';
import '../styles/DeliveryDay.css';

function createData(name, address, typeOfPackage, status, courier) {
  return { name, address, typeOfPackage, status, courier };
}

const rows = [
  createData('Johan Andres Ruiz Bermudez', 'Cr 90 cl 25 - 10', 'Electrodomestico', 'Entregado', 'Victor Alomia'),
  createData('Victor Alfonso Alomia Angulo', 'Cr 90 cl 25 - 10', 'Papeleria', 'No entregado', 'Camilo Ceballos'),
  createData('Andres Felipe Morenno ', 'Cr 90 cl 25 - 10', 'Cristaleria', 'Recogido', 'Cristian Presz'),
  createData('Juan Sebatian Camino', 'Cr 90 cl 25 - 10', 'Peresederos', 'Recogido', 'Andres Moreno'),
  createData('Mauricio Merlano Cano', 'Cr 90 cl 25 - 10', 'Delicado', 'No recogido', 'Cristian Mafla'),
];

export default function DeliveryDay() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent >
        <Typography variant="h5" component="div">
          Usuario: Victor Alfonso Alomia Angulo
        </Typography>
        <Typography variant="h6" component="div">
          Dirección: Kr 90 cl 1 -215 torre 8 apto 305
        </Typography>
        <Typography variant="h7" component="div">
          Telefono: 3106472859
        </Typography>
        <Typography variant="body2">
          Estado:<CheckCircleIcon id="estado"></CheckCircleIcon>

        </Typography>
        <Typography variant="body2">
          Descripción: Este paquete contiene cristaleria,
          por favor tratar con delicadesa
        </Typography>
        <br />
        <Typography variant="h7" component="div">
          Mensajero : Camilo Trivaldo Lopez
        </Typography>
      </CardContent>
    </Card>
  );
}