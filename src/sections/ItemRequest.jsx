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

export  function ItemRequest({ data }) {
  // const [data, loading] = useFetchData(API_AllRequest)
  //const [name ] = useFetchData(API_AllDelyvery)
  console.log('Soy data'+ ' '+ data)
  return (
    
    <List
      id="item"
      sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
    >
      <ListItem alignItems="flex-start">
        <ListItemText id="pedido" primary={`Solicitud: ${data}`} />
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
                <ListItemText secondary={`Origen: ${''}`} />
                <ListItemText secondary={`Fecha solicitud: ${''}`} /> 
                <ListItemText secondary={`N° paquetes:${''}`} />
                
                <Divider variant="inset" component="li" />
                <ListItemText primary={`Destinatario:${''}`} />
                <ListItemText secondary={`Destino:${''}`} />
                 <ListItemText secondary={`Telefono:${''}`} /> 
                 <ListItemText secondary={`Descripción:${''}`}/>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );

}
