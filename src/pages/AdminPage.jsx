//import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DeliveryList from '../components/DeliveryList';
import DeliveryDay from '../components/DeliveryDay';
import HederAdmin from '../components/HederAdmin';
import '../styles/HederAdmin.css'
//import NewRequest from '../components/NewRiquest';
// const DeliveryDay = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#00000' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function AdminPage() {
  return (
    <Box id='adminpage'sx={{ flexGrow: 1 }}>
      <HederAdmin/>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
         <DeliveryList/>
        </Grid>
        <Grid item xs={8}>
         <DeliveryDay/>
        </Grid>
        {/* <Grid item xs={8}>
        <NewRequest/>
        </Grid> */}
      </Grid>
    </Box>
  );
}