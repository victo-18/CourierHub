import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { useFetchData } from "../hooks/consumer";
import { API_DeliveryFinish } from "../hooks/request";

export function DeliveryHistory(){
  const [open, setOpen] = React.useState(false);
  const [refresh,setRefresh] = React.useState(false);
  const [dataPedidosF,cargando] = useFetchData(API_DeliveryFinish,[refresh])
  const [dataSolicitadaF,setDataSolicitada] = React.useState(); 

  const handleClickOpen = (infoPedidos) => {
    setDataSolicitada(infoPedidos)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return(
      <Grid container columns={1} justifyContent="center">  
        <Grid item xs={1}>
        <Typography variant="h6" color="inherit" component="div">
          Historial de pedidos
        </Typography>
        </Grid>
        <Grid item xs={1}>
            <List sx={{
              width: "100%",
              bgcolor: "background.paper",
              overflow: "auto",
              }}>
                { cargando ?
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    : dataPedidosF.map((finish) =>(
                      <Box
                      key={finish.code}
                      >
                        <ListItem>
                          <ListItemButton onClick={() => handleClickOpen(finish)}>
                            <ListItemIcon>
                              <DeliveryDiningIcon/>
                            </ListItemIcon>
                            <ListItemText primary={finish.ListStates[0].date} secondary={"Pedido:" + finish.code}/>
                          </ListItemButton>
                        </ListItem>
                        <Divider/>
                      </Box>
                    ))                  
                }
            </List>   
            { dataSolicitadaF &&
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                    {"Pedido: " + dataSolicitadaF.code}
                </DialogTitle>
                <DialogContent>
                  <Typography>
                    {"Recogido en: " + dataSolicitadaF.origin}
                  </Typography>
                  <Typography>
                    {"El destino fue: " + dataSolicitadaF.destination}
                  </Typography>
                  <Typography>
                    {"Nombre cliente: "+ dataSolicitadaF.Users[0].firstname
                    +" "+ dataSolicitadaF.Users[0].lastname}
                  </Typography> 
                  <Typography>
                    {"  Telefono de contacto: "+ dataSolicitadaF.Users[0].phone}
                  </Typography>
                  <Typography>
                    {"  Descripcion: "+ dataSolicitadaF.description}
                  </Typography>
                  <Typography>
                    {"transportado en: " + dataSolicitadaF.Transports[0].nameTransport}
                  </Typography>
                  <Typography>
                    {"  Cantidad: "+  dataSolicitadaF.numberPackages}
                  </Typography>
                </DialogContent>
              </Dialog>
            }             
        </Grid>
      </Grid>
    );
}