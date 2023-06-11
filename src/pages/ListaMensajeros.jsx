
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
import Mensajero from '../components/Mensajero'
import '../styles/DeliveryList.css'
import NavaMensajeros from '../sections/NabarMensajeros'
import { useState, useEffect } from 'react';
import { Axios } from 'axios';
import { route } from '../../../Servidor/routes/users';
export default function ListaMensajeros() {
  const { data, setData } = useState(null)
  useEffect(() => {
    const apiFetch = async () => {
      const { status, data } = await Axios.get(
        route.get('/')
      );
      if (status === 200) {
        setData(data.result)
      }
    };
    if(data===null){
      apiFetch(data)
    }
})
  return (
    <div className='container' >
      <div className='header'>
        <NavaMensajeros />
      </div>
      <div className='contenedor__mensajeros'>
      <Mensajero 
      data={data}/>
      
      
      </div> 
    </div>
  );
}