import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";
import Alert from "@mui/material/Alert";
import Skeleton from "@mui/material/Skeleton";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {API_DeliveryOnWay, API_DeliveryStatusCreateF} from "../hooks/request";
import { useFetchData } from "../hooks/consumer";
import { Fragment } from "react";

const steps = [
  {
    label: "Pedido en recorrido",
    description:
      "Estas en Camino, solo da en continuar cuando llegues al destino",
    foto: "no",  
  },
  {
    label: "Entrega realizada",
    description: `Coloca la foto que muestra que el pedido llego al destino`,
    foto: "si",
  },
];

export function DeliveryAcept(){
  const [open, setOpen] = React.useState(false);
  const [openAlertP, setOpenAletP] = React.useState(false);
  const [openAlertF, setOpenAletF] = React.useState(false);
  const [openInputImg, setOpenImputImg] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [foto, setFoto] = React.useState("");
  const [refresh,setRefresh] = React.useState(false);
  const [dataPedidosE,cargando] = useFetchData(API_DeliveryOnWay,[refresh]);
  const [dataSolicitadaE,setDataSolicitada] = React.useState(); 
  const fileData = new FormData();

  const handleClickOpen = (infoPedidos) => {
    setDataSolicitada(infoPedidos)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveStep(0)
  };

  const handleNext = (codeR) => {
    
    if(foto=="" && activeStep>0){
      setOpenAletF(true)
    }
    if(foto !=""){
        fileData.append("file",foto);
        fileData.append("code",codeR);
        console.log(dataPedidosE)
        console.log(fileData)
        /*recibe la foto y crea el estado ENTREGADO con la foto file 
          y el requestCode en el body para la peticion*/ 
        API_DeliveryStatusCreateF(fileData)
        //API_DeliveryUploadF(fileData)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    else{
        //console.log(foto)
        //console.log(activeStep)
        console.log(dataPedidosE)
        console.log(dataSolicitadaE)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleFoto = (valueFoto) =>{
      setFoto(valueFoto)
  };
  const handleFinal = (phaseDataId) => {
    setOpenAletP(true)
    setRefresh(true)
    setOpen(false)
    setActiveStep(0)
  };

    return(
      <Grid container columns={1} justifyContent="center">  
        <Grid item xs={1}>
        { openAlertP === true && (<Alert severity="success"
                    action={
                         <IconButton
                           aria-label="close"
                           color="inherit"
                           size="small"
                           onClick={() => {
                             setOpenAletP(false);
                           }}
                         >
                           <CloseIcon fontSize="inherit" />
                         </IconButton>
                       }
                       sx={{ mb: 2 }}>
                         se completo exitosamente la entrega del pedido
                    </Alert>)
                    
                  }
        <Typography variant="h6" color="inherit" component="div">
          Encargos en proceso
        </Typography>
        </Grid>
        <Grid item xs={1}>
            <List sx={{
              width: "100%",
              bgcolor: "background.paper",
              overflow: "auto",
              }}>
                {
                  cargando ?
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    : dataPedidosE.map((enCamino)=>(
                                         <Box
                                          key={enCamino.code}
                                          >
                        <ListItem>
                          <ListItemButton onClick={() => handleClickOpen(enCamino)}>
                            <ListItemIcon>
                              <DeliveryDiningIcon/>
                            </ListItemIcon>
                            <ListItemText>
                              <Fragment>
                                <Typography>
                                  {"Pedido: " +enCamino.code}
                                </Typography>
                                <Typography>
                                  {"En Camino a: " +enCamino.destination}
                                </Typography>
                              </Fragment>
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                    <Divider/>
                  </Box>
                 )) 
                }
              </List>   
            { dataSolicitadaE &&
              <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              >
              <DialogTitle id="alert-dialog-title">
                  {"Pedido " + dataSolicitadaE.code }
              </DialogTitle>
              <DialogContent>
                    <Typography>
                      {"Nombre cliente: "+ dataSolicitadaE.Users[0].firstname+
                       " "+ dataSolicitadaE.Users[0].lastname}
                      </Typography>
                      <Typography>
                        {"  Telefono de contacto: "+ dataSolicitadaE.Users[0].phone
                        }
                        </Typography>
                         <Typography>
                            {"Fue recogido en: " + dataSolicitadaE.origin}
                        </Typography>
                         <Typography>       
                                {"  Descripcion: "+ dataSolicitadaE.description}
                          </Typography>
                        <Typography>
                            {"  Cantidad: "+  dataSolicitadaE.numberPackages}
                        </Typography>
                  <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                      {steps.map((step, index) => (
                        <Step key={step.label}>
                          <StepLabel
                            optional={
                              index === 2 ? (
                              <Typography variant="caption">Paso final</Typography>
                              ) : null
                            }
                          >
                            {step.label}
                          </StepLabel>
                          <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                              <div>
                              {index == 1 && 
                              <Input
                                sx={{ mt: 1, mr: 1 }}
                                type="file"
                                variant="outlined"
                                name="file"
                                disabled={index === 0}
                                onChange={e => handleFoto(e.target.files[0])}
                                >
                                </Input>}
                              
                                <Button
                                variant="contained" 
                                type="submit"                                   
                                onClick={()=>{handleNext(dataSolicitadaE.code)}}
                                sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1 ? "Finalizar" : "continuar"}
                                </Button>
                                <Button
                                variant="contained"
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                                >
                                  regresar
                                </Button>
                              </div>
                            </Box>
                         </StepContent>
                       </Step>
                      ))}
                    </Stepper>
                    {activeStep === steps.length && (
                      <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>Todo completado Finaliza el pedido</Typography>
                        <Button onClick={handleFinal} sx={{ mt: 1, mr: 1 }}>
                          finalizar pedido
                        </Button>
                      </Paper>

                    )}
                  </Box>
                  { openAlertF === true && (<Alert severity="info"
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
                         ingrese una foto del pedido
                    </Alert>)
                    
                  }
                  
                </DialogContent>
            </Dialog>
            }               
        </Grid>
      </Grid>
    );
}