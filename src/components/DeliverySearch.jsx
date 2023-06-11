import React from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Divider, Grid, 
         Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from "@mui/material";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';

export function DeliverySearch(){

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
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
                <ListItemButton onClick={handleClickOpen} >
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItemButton>
                <Divider/>
            </List>
            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">
                        {"Aqui iría el nombre del pedido"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Aqui iria la ubicacion del pedido en texto y abajo puede que este
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
            </Grid>
        </Grid>
    );
}