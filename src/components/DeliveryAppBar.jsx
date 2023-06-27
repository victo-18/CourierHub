import React from "react";
import {AppBar, Toolbar, IconButton, Menu, MenuItem} from "@mui/material";
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigate } from "react-router-dom";

export function DeliveryAppBar () {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    location.href = "/logout";
}
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <AppBar position="fixed" >
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}   >
               <MenuIcon />               
            </IconButton>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClose}>Usuario</MenuItem>
              <MenuItem onClick={handleLogout}>Cerrar sesion</MenuItem>
            </Menu>
            <Typography variant="h5" color="inherit" component="div">
              Pedidos
            </Typography>
        </Toolbar>
      </AppBar>
    );

}