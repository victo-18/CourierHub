import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Divider, Grid, BottomNavigation, BottomNavigationAction} from "@mui/material";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';

export function DeliverySearch(){
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
                <ListItem button >
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItem>
                <Divider/>
                <ListItem button >
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItem>
                <Divider/>
                <ListItem button >
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItem>
                <Divider/>
                <ListItem button >
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItem>
                <Divider/>
                <ListItem button >
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItem>
                <Divider/>
                <ListItem button >
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItem>
                <Divider/>
                <ListItem button >
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItem>
                <Divider/>
                <ListItem button >
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItem>
                <Divider/>
  
             </List>
            </Grid>
        </Grid>
    );
}