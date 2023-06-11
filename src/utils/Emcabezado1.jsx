import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
//import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DeliveryDay from '../sections/DeliveryDay';
import '../styles/DeliveryDay.css';

export default function contenedor() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <DeliveryDay/>
      </Container>
    </React.Fragment>
  );
}