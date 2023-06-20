import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, ListItemButton,Divider, IconButton, Grid, Box, 
         Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Stepper, Step,
         StepLabel, StepContent, Paper , Input, Alert} from "@mui/material";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Pedido recogido',
    description: `Ingrese una foto del pedido encargado a transportar`,
    foto: "si",
  },
  {
    label: 'En camino',
    description:
      'Pedido en proceso de transporte a el lugar. Cambia el estado cuando llegues al destino',
    foto: "no",  
  },
  {
    label: 'Entreha realizada',
    description: `Coloca la foto qe muestra que se entrego lo pedido`,
    foto: "si",
  },
];

export function DeliveryAcept(){
  const [open, setOpen] = React.useState(false);
  const [openAlertF, setOpenAletF] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [foto, setFoto] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = (indexValue) => {
    if(foto==""){
      console.log("Ingrese la foto")
      setOpenAletF(true)
    }
    else {
      if(indexValue==1){
        setFoto("")
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }else{
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleFoto = (valueFoto) =>{
      setFoto(valueFoto)
      console.log(valueFoto)
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  


    return(
      <Grid container columns={1} justifyContent="center">  
        <Grid item xs={1}>
        <Typography variant="h6" color="inherit" component="div">
          Encargos en proceso
        </Typography>
        </Grid>
        <Grid item xs={1}>
            <List sx={{
              width: '100%',
              bgcolor: 'background.paper',
              overflow: 'auto',
              }}>
                <ListItem  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <DeleteIcon />
                    </IconButton>
                }disablePadding >
                  <ListItemButton onClick={handleClickOpen}>
                    <ListItemIcon>
                      <DeliveryDiningIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pedido 1" secondary="carrera 7L # 25- 88"/>
                  </ListItemButton>
                </ListItem>
                <Divider/>
            </List>                
            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">
                        {"Aqui iría el nombre del pedido"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Aqui iria la ubicacion del pedido en texto y abajo puede que este
                            el mapa en google maps.
                        </DialogContentText>
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
                                    <Input
                                      sx={{ mt: 1, mr: 1 }}
                                      disabled={index === 1}
                                      type="file"
                                      variant="outlined"
                                      onChange={e => handleFoto(e.target.files[0])}
                                      >
                                      </Input>
                                      <Button
                                      variant="contained"                                    
                                      onClick={()=>{handleNext(index)}}
                                      sx={{ mt: 1, mr: 1 }}
                                      >
                                        {index === steps.length - 1 ? 'Finalizar' : 'continuar'}
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
                              <Typography>Pedido completado</Typography>
                              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
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
        </Grid>
      </Grid>
    );
}