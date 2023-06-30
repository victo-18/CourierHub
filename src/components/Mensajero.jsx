/*import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../styles/Mensajero.css'
import { Box, Divider, Skeleton } from '@mui/material';
import { API_Allcouriers,API_DeleteCourier } from '../hooks/request';
import { useFetchData } from '../hooks/consumer';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Mensajero() {
  //const [refresh,setRefresh] = React.useState(false)
const [data, loading] = useFetchData(API_Allcouriers);

  //const [ setUserData] = React.useState()

   const hanledClick = ()=>{
   
   }
   const eliminarUser =  (id)=>{
     API_DeleteCourier(id)
    console.log(id)
     }
  //console.log(data)

  return (
    <List id="item-mensajero" sx={{ width: '100%', maxWidth: 500 }}>
      {loading ? <Skeleton variant="rectangular" width={210} height={118} /> :
        data.map((listname) => (

          < Box key={listname.id}>

            <ListItem alignItems="flex-start" onClick={()=>hanledClick(listname)}>
              <ListItemAvatar>
                <Avatar sx={{ width: 50, height: 50 }}
                  className='avatar-user' alt={listname.User.firstname}
                  src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText className='text-position'
                primary={listname.User.firstname + ' ' + listname.User.lastname}
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
              <DeleteIcon onClick={() =>eliminarUser(listname.id) } className='delete' />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Box>
        ))}
    </List>
  );
}*/