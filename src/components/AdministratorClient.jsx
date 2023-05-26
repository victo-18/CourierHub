import { useState } from "react";
import { TextField, Button, LinearProgress, Select, MenuItem, InputLabel, FormControl, Typography} from "@mui/material";

import "../styles/AdministratorClient.css";

export default function AdministratorClient() {
  const [datos, setDatos] = useState({
    nombre: "Pepito Perez",
    identificacion: 1006167596,
    ciudad: "Cali",
    telefono: "3122889687",
    email: "rasinya251100@gmail.com",
    contrasena: "univalle",
  });
  return (
    <div id="containerPpal">
      <div id="form-control">
        <form id="admon">
            <div id="container">
          <div id="profile">
          <Typography id="titleProfile" variant="h5" align="center" fontWeight={"bold"} fontFamily={"Roboto"}>
                    Datos De Usuario
            </Typography>
            <TextField
              label="Nombre"
              type="texto"
              id="nombre"
              defaultValue={datos.nombre}
              fullWidth
              margin="normal"
              size="small"
            />
            <TextField
              label="Identificación"
              type="number"
              id="identificacion"
              defaultValue={datos.identificacion}
              fullWidth
              margin="normal"
              size="small"
            />
            <TextField
              label="Ciudad"
              type="texto"
              id="ciudad"
              defaultValue={datos.ciudad}
              fullWidth
              margin="normal"
              size="small"
            />
            <TextField
              label="Teléfono"
              type="number"
              id="telefono"
              defaultValue={datos.telefono}
              fullWidth
              margin="normal"
              size="small"
            />
            <TextField
              label="Correo"
              type="email"
              id="email"
              defaultValue={datos.email}
              fullWidth
              margin="normal"
              size="small"
            />
            <TextField
              label="Contraseña"
              type="text"
              id="contrasena"
              defaultValue={datos.contrasena}
              fullWidth
              margin="normal"
              size="small"
            />
            <Button
              id="BtnUpProfile"
              variant="contained"
              size="small"
            >Actualizar Perfil</Button>
          </div>
          <div id="half">
          <div id="control">
            <div id="component">
            <TextField
              label="Nombre"
              type="text"
              id="nom_sucursal"
              fullWidth
              margin="normal"
              size="small"
            />
            <TextField
              label="Dirección"
              type="text"
              id="dire_sucursal"
              fullWidth
              margin="normal"
              size="small"
            />
            </div>
            <div id="component">
            <TextField
              label="Teléfono"
              type="number"
              id="tel_sucursal"
              fullWidth
              margin="normal"
              size="small"
            />
            <Button
              id="BtnUpTable"
              variant="contained"
              size="small"
            >Actualizar Tabla</Button>
            </div>
        </div>
        <div id="dataTable">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Age"
        >
          <MenuItem value="">
            <em>{datos.nombre}</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </div>
        </div>
          </div>
        </form>
      </div>
      
    </div>
  );
}
