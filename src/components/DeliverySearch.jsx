import React, { Fragment } from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Divider, Grid, 
         Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button,
         Skeleton, Box, Input ,Alert, IconButton} from "@mui/material";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import { useFetchData } from "../hooks/consumer";
import { API_DeliveryInProgress, API_DeliveryStatusUpdate1,API_DeliveryUploadFS} from "../hooks/request";

export function DeliverySearch(){

    const [open, setOpen] = React.useState(false);
    const [openAlertF, setOpenAletF] = React.useState(false);
    const [refresh,setRefresh] = React.useState(false)
    const [dataPedidos,cargando] = useFetchData(API_DeliveryInProgress,[refresh]); 
    const [dataSolicitada,setDataSolicitada] = React.useState();
    const [foto, setFoto] = React.useState(""); 

    const handleClickOpen = (infoPedidos) => {
        setDataSolicitada(infoPedidos)
        setOpen(true);

    };
  
    const handleCloseCancel= () => {
      setRefresh((prev)=>!prev)  
      setOpen(false);
      setFoto("");
    };
    const handleCloseAcept = async(codeRequest) => {
        setOpen(false);
        console.log(codeRequest)
        await API_DeliveryStatusUpdate1(codeRequest);
        //await API_DeliveryStatusUpdate2(codeRequest);
        await API_DeliveryUploadFS(foto);
        setOpenAletF(true)
        setRefresh((prev)=>!prev)
      };
    const handleFoto = (valueFoto,phaseDataId) =>{
        console.log(phaseDataId)
        const fileData = new FormData();
              fileData.append('file', valueFoto);
              fileData.append('code',phaseDataId);
              setFoto(fileData)
        console.log(fileData)
    };
    return(
        <Grid container columns={1} justifyContent="center">
          <Grid item xs={1}>
          { openAlertF === true && (<Alert severity="success"
                    action={
                         <IconButton
                           aria-label="close"
                           color="inherit"
                           size="small"
                           onClick={() => {
                             setOpenAletF(false);
                           }}
                         >
                           <CloseIcon fontSize="inherit" />
                         </IconButton>
                       }
                       sx={{ mb: 2 }}>
                         se acepto exitosamente el pedido
                    </Alert>)
                    
                  }
            <Typography variant="h6" color="inherit" component="div">
                Pedidos Disponibles
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <List sx={{
                width: '100%',
                bgcolor: 'background.paper',
                overflow: 'auto'
                }}
                >
                {
                    cargando ?
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    : dataPedidos.map((solicitado)=>(
                        <Box
                         key={solicitado.code}
                         >
                            <ListItemButton onClick={() => handleClickOpen(solicitado)} >
                                <ListItemIcon>
                                    <DeliveryDiningIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Pedido "+ solicitado.code} secondary={solicitado.destination}/>
                            </ListItemButton>
                            <Divider/>
                        </Box>
                    )) 
                }
            </List>
            
            { dataSolicitada &&

            <Dialog
                    open={open}
                    onClose={handleCloseCancel}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >   
                    <DialogTitle id="alert-dialog-title">
                        {"Pedido "+dataSolicitada.code}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                                {"Nombre cliente: "+ dataSolicitada.Users[0].firstname
                                 +" "+ dataSolicitada.Users[0].lastname
                                }
                                {"  Telefono de contacto: "+ dataSolicitada.Users[0].phone
                                }
                                {
                                    " Ubicacion: " + dataSolicitada.destination 
                                }
                                {"  Descripcion: "+ dataSolicitada.description+" "}
                        </DialogContentText>
                        <Input
                            sx={{ mt: 1, mr: 1 }}
                            type="file"
                            variant="outlined"
                            name='file'
                            onChange={e => handleFoto(e.target.files[0],dataSolicitada.ListStates[0].id)}
                        >
                        </Input>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseCancel}>Cancelar</Button>
                        <Button 
                            disabled={foto == ""} 
                            onClick={() =>handleCloseAcept(dataSolicitada.code)} autoFocus>
                            Aceptar
                        </Button>
                    </DialogActions>
                </Dialog>
            }
            </Grid>
        </Grid>
    );
}