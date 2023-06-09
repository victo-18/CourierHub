import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Divider, IconButton, Grid, Box } from "@mui/material";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DeleteIcon from '@mui/icons-material/Delete';

export function DeliveryAcept(){
    return(
      <Grid container spacing={1} columns={1} justifyContent="center">  
        <Grid item xs={1}>
                Pedidos En Proceso
        </Grid>
        <Grid item xs={1}>
         <Box sx={{ pb: 7 }}>
            <List>
                <ListItem button secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            }>
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItem>
                <Divider/>
                <ListItem button secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            }>
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItem>
                <Divider/>
                <ListItem button secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            }>
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItem>
                <Divider/>
                <ListItem button secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            }>
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                </ListItem>
                <Divider/>
            </List>
          </Box>
        </Grid>
     </Grid>
    );
}