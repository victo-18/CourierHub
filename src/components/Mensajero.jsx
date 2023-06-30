import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../styles/Mensajero.css'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Skeleton } from '@mui/material';
import { API_Allcouriers } from '../hooks/request';
import { useFetchData } from '../hooks/consumer';
import DeleteIcon from '@mui/icons-material/Delete';
//import ComfirmarEliminar from '../sections/Confirmar';

export default function Mensajero() {

  const [data, loading] = useFetchData(API_Allcouriers);

  // const [users, setUsers] = React.useState(data)
  // //ALMACENAR INFORMACION DEL USUARIO
  // const [seleccionado, setSelecionado] = React.useState({
  //   "firstname": "",
  //   "lastname": "",
  //   "role": "",
  //   "ACTIVO": ""
  // })
  // const hanledClick = () => {
  //   return
  // }
  // const eliminarUser = (id) => {
  //   console.log(id)
  //   API_DeleteCourier(id)

  // }
  return (
    <List id="item-mensajero" sx={{ width: '100%', maxWidth: 500 }}>
      {loading ? <Skeleton variant="rectangular" width={210} height={118} /> :
        data.map((listname) => (

          < Box key={listname.id}>

            <ListItem alignItems="flex-start" onClick={() => hanledClick()}>
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
                    {'Estado'}
                  </React.Fragment>
                }
              />
              <DeleteIcon onClick={() => eliminarUser(listname.id)} className='delete' />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Box>
        ))}
      <Dialog>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 1 }}>
            Para solicitar un nuevo envio, por favor completa toda la informacion
            siguiente
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button >Cancelar</Button>
          <Button >Solicitar</Button>
        </DialogActions>
      </Dialog>

    </List>
  );
}