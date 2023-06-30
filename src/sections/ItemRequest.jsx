/* eslint-disable react/prop-types */
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export  function ItemRequest({ data }) {
  console.log('Soy data'+ ' '+ data)
  return (
    
    <List
      id="item"
      sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
    >
      <ListItem alignItems="flex-start">
        <ListItemText id="pedido" primary={`Solicitud: ${data.code}`} />
        <ListItemText
          primary={'User: ' + data.Users[0].firstname + ' '+data.Users[0].lastname  }
          
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <ListItemText secondary={'Origen:'+ ' ' + data.origin} />
                <ListItemText secondary={'Fecha solicitud:'+' '+  data.ListStates[0].date} /> 
                <ListItemText secondary={'N° paquetes:'+' '+ data.numberPackages} />
                <ListItemText secondary={'Estado:'+ ' ' + data.ListStates[0].phase}/>
                <Divider variant="inset" component="li" />
                <ListItemText primary={'Destinatario:'} />
                <ListItemText secondary={'Destino:'+ ' ' + data.destination} />
                 <ListItemText secondary={'Telefono:'+ ' ' + data.Users[0].phone} /> 
                 <ListItemText secondary={'Descripción:'+ ' ' + data.description}/>
                
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );

}