/* eslint-disable react/prop-types */
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
//import {API_AllRequest } from '../hooks/request';
import Typography from '@mui/material/Typography';
//import propTypes from 'prop-types';
//import { useFetchData } from '../hooks/consumer';
//import { Box } from '@mui/material';



export default function AlignItemsList({ data}) {
  // const [data, loading] = useFetchData(API_AllRequest)

  return (
    <List id='item' sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>


      
        <ListItem alignItems="flex-start">

          <ListItemText id="pedido"
           key={data.id} primary={data.code}
          />
          <ListItemText
            key={data.id}
            primary={`User id: ${data.dateRequest}`}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <ListItemText
                    secondary={`Origen: ${data.origin}`}
                  />
                  {/* <ListItemText
                    secondary={data.dateRequest}
                  /> */}
                  <ListItemText
                    secondary="Telefono: 3163886726"
                  />
                  {/* <ListItemText
                    secondary={data.description}
                  /> */}

                  <Divider variant="inset" component="li" />
                  <ListItemText
                    primary="Destinatario: Rosa Marulanda Castillo Cuero"
                  />
                  <ListItemText
                    secondary="Telelefon: 3057889635"
                  />
                  {/* <ListItemText
                    secondary={data.description}
                  /> */}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      



    </List>
  );
}
