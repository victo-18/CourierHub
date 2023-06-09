import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../styles/Mensajero.css'
// const estado = function(){

//     return
// }

export default function Mesajero() {
  return (
    <List id="item-mensajero" sx={{ width: '100%', maxWidth: 500}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar  sx={{ width: 50, height: 50 }}
          className='avatar-user' alt="avatar usuario"
           src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText className='text-position'
          primary="Victor Alfonso Alomia Angulo"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {"disponible"}
            </React.Fragment>
          }
        />
        <ListItemAvatar  >
          <Avatar  sx={{ width: 50, height: 50 }} className='avatar-vehiculo' alt="icono veiculo" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
      </ListItem>
    </List>
  );
}