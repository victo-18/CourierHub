import { useState } from 'react';
import { Typography, TextField, Button, Box, Modal, Grid, Stack, Alert, Snackbar } from '@mui/material';
import TableClient from '../sections/TableClient';
import { store } from '../hooks/redux/store';
import { API_AllBranchesById, API_POSTBranch, API_PutBranch, API_DeleteBranch } from '../hooks/request';
import { useFetchData } from '../hooks/consumer';
import CircularProgress from '@mui/material/CircularProgress';
import '../styles/Branches.css';

export default function Branches() {
    const [open, setOpen] = useState(false);
    const [typeModal, setTypeModal] = useState("");
    const tipo = "sucursales";
    const estado = store.getState().session.user.phone;
    const [success, setSuccess] = useState(false);
    const [fatal, setFatal] = useState(false);
    const [recarga, setRecarga] = useState([false])
    const [data, cargando] = useFetchData(() => API_AllBranchesById(estado), recarga);
    const [valores, setValores] = useState({
        nit: "",
        name: "",
        address: "",
        phone: ""
    });
    const [valida, setValida] = useState({
        nit: false,
        name: false,
        address: false,
        phone: false
    });


    const handleCloseSuccess = () => setSuccess(false);
    const handleCloseFatal = () => setFatal(false);

    const handleOpen = (modo) => {

        if (modo == "añadir") {
            setTypeModal('añadir');
            setOpen(true);
            setRecarga([false]);
        } else if (modo == "editar") {
            setTypeModal('editar');
            setOpen(true);
            setRecarga([false]);
        } else if (modo == "eliminar") {
            setTypeModal('eliminar');
            setOpen(true);
            setRecarga([false]);
        }
    };
    const handleClose = () => {
        setOpen(false);
        setValores("");
        setValida({
            nit: false,
            name: false,
            address: false,
            phone: false
        });
    }

    const handleChange = event => {
        setValores({
            ...valores,
            [event.target.name]: event.target.value,
        });
        setValida({
            nit: false,
            name: false,
            address: false,
            phone: false
        });
    };

    const submit = event => {
        event.preventDefault();
        console.log("esto es valida", valida);
        if (typeModal == "eliminar"){
            const datico = API_DeleteBranch(valores.nit)
            if(datico){
                handleClose();
                setSuccess(true);
                setRecarga([true])
            }else{
                handleClose();
                setFatal(true);
            }
        }else if (valores.nit == "" && valores.name == "" && valores.address == "" && valores.phone == "") {
            setValida({
                nit: true,
                name: true,
                address: true,
                phone: true
            });
        } else if (valores.nit == "") {
            setValida({
                ...valida,
                nit: true
            });
        } else if (valores.name == "") {
            setValida({
                ...valida,
                name: true
            });
        } else if (valores.address == "") {
            setValida({
                ...valida,
                address: true
            });
        } else if (valores.phone == "") {
            setValida({
                ...valida,
                phone: true
            });
        } else {
            setValida({
                nit: false,
                name: false,
                address: false,
                phone: false
            });
            // api
            if (typeModal == "añadir") {
                setValores({
                    ...valores,
                    customerId: data[0].customerId
                    });
                const datico = API_POSTBranch(valores);
                if(datico){
                    handleClose();
                    setSuccess(true);
                    setRecarga([true])
                }else{
                    handleClose();
                    setFatal(true);
                }
            } else if(typeModal == "editar"){
                const datico = API_PutBranch(valores)
                if(datico){
                    handleClose();
                    setSuccess(true);
                    setRecarga([true])
                }else{
                    handleClose();
                    setFatal(true);
                }
            }

        }
    }

    const style = {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'background.paper',
        boxShadow: 24,
        flexGrow: 1,
        padding: 4,

    };

    return (
        <div id='panel'>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSuccess}>
                    <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
                        ¡Todo Ha Sido Exitoso!
                    </Alert>
                </Snackbar >
                <Snackbar open={fatal} autoHideDuration={6000} onClose={handleCloseFatal}>
                    <Alert onClose={handleCloseFatal} severity="error" sx={{ width: '100%' }}>
                        ¡Ha Ocurrido Un Error, Intentalo Más Tarde!
                    </Alert>
                </Snackbar>
            </Stack>
            <div id='btn'>
                <Button id='miboton' onClick={() => handleOpen("añadir")} variant='outlined' size='large'>CREAR SUCURSAL</Button>
            </div>
            <Modal
                disableEscapeKeyDown
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="Ventana Modal">
                <Box sx={style}>
                    <Typography id="tituloModal" align="center" variant='h6' component="h2">
                        {typeModal == 'añadir' ? 'Crea Una Nueva Sucursal' :
                            typeModal == 'editar' ? 'Modifica La Sucursal' :
                                typeModal == 'eliminar' && '¿Desea Eliminar La Sucursal?'}
                    </Typography>
                    {typeModal == "" || typeModal == "añadir" || typeModal == "editar" ?
                        <Grid container spacing={1} justifySelf="center">
                            {typeModal == "añadir" && <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    label='Nit'
                                    name='nit'
                                    type='text'
                                    defaultValue={valores.nit}
                                    onChange={handleChange}
                                    size='small'
                                    autoComplete='off'
                                    fullWidth />
                                {valida.nit !== false &&
                                    <span>Digite el nit de la sucursal</span>}
                            </Grid>}
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    label='Nombre'
                                    name='name'
                                    type='text'
                                    defaultValue={valores.name}
                                    onChange={handleChange}
                                    size='small'
                                    autoComplete='off'
                                    fullWidth />
                                {valida.name !== false &&
                                    <span>Digite el nombre de la sucursal</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    label='Dirección'
                                    name='address'
                                    type='text'
                                    defaultValue={valores.address}
                                    onChange={handleChange}
                                    size='small'
                                    autoComplete='off'
                                    fullWidth />
                                {valida.address !== false &&
                                    <span>Digite la dirección de la sucursal</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    label='Teléfono'
                                    name='phone'
                                    type='number'
                                    defaultValue={valores.phone}
                                    onChange={handleChange}
                                    size='small'
                                    autoComplete='off'
                                    fullWidth />
                                {valida.phone !== false &&
                                    <span>Digite el teléfono de la sucursal</span>}

                            </Grid>
                            <div id="btns">
                                <Button id='aceptar' onClick={submit} >Aceptar</Button>
                                <Button id='cancelar' onClick={handleClose}>Cancelar</Button>
                            </div>
                        </Grid> :
                        <Grid container spacing={1} justifySelf="center">
                            <Typography id="descripcion" align="center" variant='h6' component="h2">
                                Se eliminará la sucursal identificada con el nit: {valores.nit}
                            </Typography>
                            <div id="btns">
                                <Button id='aceptar' onClick={submit}>Aceptar</Button>
                                <Button id='cancelar' onClick={handleClose}>Cancelar</Button>
                            </div>
                        </Grid>}
                </Box>
            </Modal>
            {cargando ?
                <div id='tabla'>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </div> :
                <div id='tabla'>
                    <TableClient
                        datos={data}
                        tipo={tipo}
                        setValores={setValores}
                        setTypeModal={setTypeModal}
                        setOpen={setOpen}
                    />
                </div>
            }
        </div>
    );
};