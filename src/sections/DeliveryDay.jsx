
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import '../styles/DeliveryDay.css'
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