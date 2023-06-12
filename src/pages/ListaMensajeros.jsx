
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
// import Divider from '@mui/material/Divider';
// import logo from '../assets/logo.png'
// import moto from '../assets/camion.png'
// import camion from '../assets/camion.png'
//import Encabezado1 from '../utils/Emcabezado1';
import Mensajero from '../components/Mensajero';
import '../styles/DeliveryList.css'
import NavaMensajeros from '../sections/NabarMensajeros'
//import { useEffect, useState } from 'react';
import { useFetchData } from '../hooks/consumer';
import { API_AllDelyvery } from '../hooks/request';
import { Skeleton } from '@mui/material';

export default function ListaMensajeros() {
 const[data,loading]=useFetchData(API_AllDelyvery)

  return (
    <div className='container' >
      <NavaMensajeros />

      <div>
        {loading ?  <Skeleton variant="rectangular" width={210} height={118} />:  <Mensajero 
         data={data} />  }
        {/* <Mensajero /> */}
      </div>
    </div>
  );
}