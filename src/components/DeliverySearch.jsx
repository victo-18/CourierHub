import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import SearchIcon from "@mui/icons-material/Search";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";

export function DeliverySearch(){
    return(
        <Grid container spacing={1} columns={1} justifyContent="center">
          <Grid item xs={1}>
            Busqueda Pedidos
          </Grid>
          <Grid item xs={1}>
            <List>
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
                    <ListItemText primary="Pedido 2" secondary="avenida los camellos # 65-88" />
                </ListItem>
                <Divider/>
                <ListItem button >
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 3" secondary="calle 5 diagonal 25 # 45-45"/>
                </ListItem>
                <Divider/>
            </List>
           </Grid>
           <Grid item xs={1}>
           <BottomNavigation
          showLabels
        >
          <BottomNavigationAction label="Historial" icon={<ListAltIcon />} />
          <BottomNavigationAction label="Buscar" icon={<SearchIcon />} />
          <BottomNavigationAction label="Perfil" icon={<PersonIcon />} />
        </BottomNavigation>
           </Grid>
        </Grid>
    );
}