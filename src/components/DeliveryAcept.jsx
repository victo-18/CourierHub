import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, ListItemButton,Divider, IconButton, Grid, Box, Dialog, DialogTitle} from "@mui/material";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

export function DeliveryAcept(){
    return(
      <Grid container columns={1} justifyContent="center">  
        <Grid item xs={1}>
        <Typography variant="h6" color="inherit" component="div">
          Encargos en proceso
        </Typography>
        </Grid>
        <Grid item xs={1}>
         <Box sx={{ pb: 7 }}>
            <List sx={{
              width: '100%',
              bgcolor: 'background.paper',
              overflow: 'auto',
            }}>
                <ListItem  secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            }disablePadding >
                  <ListItemButton>
                    <ListItemIcon>
                        <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                  </ListItemButton>
                </ListItem>
              
                <Divider/>
            </List>
          </Box>
        </Grid>
     </Grid>
    );
}