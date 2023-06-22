/* eslint-disable react/prop-types */
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
//import {API_AllDelyvery} from '../hooks/request';
import Typography from "@mui/material/Typography";
//import { useFetchData } from "../hooks/consumer";
//import propTypes from 'prop-types';
//import { useFetchData } from '../hooks/consumer';
//import { Box } from '@mui/material';

export default function ItemRequest({ data }) {
  // const [data, loading] = useFetchData(API_AllRequest)
  //const [name ] = useFetchData(API_AllDelyvery)
  return (
    
    <List
      id="item"
      sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
    >
      <ListItem alignItems="flex-start">
        <ListItemText id="pedido" primary={`Solicitud: ${data.code}`} />
        <ListItemText
          primary={`User: ${''}`}
          
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <ListItemText secondary={`Origen: ${data.origin}`} />
                <ListItemText secondary={`Fecha solicitud: ${''}`} /> 
                <ListItemText secondary={`N° paquetes:${data.numberPackages}`} />
                
                <Divider variant="inset" component="li" />
                <ListItemText primary={`Destinatario:${''}`} />
                <ListItemText secondary={`Destino:${data.destination}`} />
                 <ListItemText secondary={`Telefono:${''}`} /> 
                 <ListItemText secondary={`Descripción:${data.description}`}/>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );

}
