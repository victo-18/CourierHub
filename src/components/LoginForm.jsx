import { useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { API_Login } from '../hooks/request';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Enviar los datos a la API_Login aquí
        const response = await API_Login({ email, password });
        console.log(response);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                fullWidth
                margin="normal"
                InputProps={{
                    endAdornment: (
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    ),
                }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth autoFocus>
                Iniciar Sesión
            </Button>
        </form>
    );
}

export default LoginForm;
