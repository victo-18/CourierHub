import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../styles/Mensajero.css'
import { Box, Skeleton } from '@mui/material';
import { API_AllDelyvery } from '../hooks/request';
import { useFetchData } from '../hooks/consumer';

export default function Mensajero() {
  const [data, loading] = useFetchData(API_AllDelyvery)

  return (
    <List id="item-mensajero" sx={{ width: '100%', maxWidth: 500 }}>
      {loading ? <Skeleton variant="rectangular" width={210} height={118} /> :
        data.map((listname) => (
          < Box key={listname.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ width: 50, height: 50 }}
                  className='avatar-user' alt="avatar usuario"
                  src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText className='text-position'
                // primary= {`${data.firstname} ${data.lastname}`}
                primary={listname.User.firstname +"  " + listname.User.lastname}
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
                <Avatar sx={{ width: 50, height: 50 }} className='avatar-vehiculo' alt="icono veiculo" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
            </ListItem>
          </Box>
        ))}
    </List>
  );
}