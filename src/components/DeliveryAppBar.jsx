import React from "react";
import {AppBar, Toolbar, IconButton} from "@mui/material";
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
export function DeliveryAppBar () {
    return(
        <AppBar position="fixed" >
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
               <MenuIcon />               
            </IconButton>
            <Typography variant="h5" color="inherit" component="div">
        Pedidos
      </Typography>
        </Toolbar>
      </AppBar>
    );

}