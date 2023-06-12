import React, { Fragment } from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Divider, Grid, 
         Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button,
         Skeleton, Box} from "@mui/material";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import { useFetchData } from "../hooks/consumer";
import { API_DeliveryInProgress } from "../hooks/request";

export function DeliverySearch(){

    const [open, setOpen] = React.useState(false);
    const [refresh,setRefresh] = React.useState(false)
    const [dataPedidos,cargando] = useFetchData(API_DeliveryInProgress,[refresh]); 
    const [dataSolicitada,setDataSolicitada] = React.useState();
 

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
                Pedidos Disponibles
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <List sx={{
                width: '100%',
                bgcolor: 'background.paper',
                overflow: 'auto'
                }}
                >
                {
                    cargando ?
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    : dataPedidos.map((solicitado)=>(
                        <Box
                         key={solicitado.code}
                         >
                            <ListItemButton onClick={() => handleClickOpen(solicitado)} >
                                <ListItemIcon>
                                    <DeliveryDiningIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Pedido "+ solicitado.code} secondary={solicitado.destination}/>
                            </ListItemButton>
                            <Divider/>
                        </Box>
                    )) 
                }
                
            </List>
            { dataSolicitada &&

            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >   
                    <DialogTitle id="alert-dialog-title">
                        {"Pedido "+dataSolicitada.code}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {dataSolicitada.Customer.User.firstname 
                             +" "+ dataSolicitada.Customer.User.lastname 
                             +" "+ dataSolicitada.Customer.User.phone
                             +" "}Aqui iria la ubicacion del pedido en texto y abajo puede que este
                            el mapa en google maps.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button onClick={handleClose} autoFocus>
                            Aceptar
                        </Button>
                    </DialogActions>
                </Dialog>
            }
            </Grid>
        </Grid>
    );
}