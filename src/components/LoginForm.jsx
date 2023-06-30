import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { API_Login } from "../hooks/request";
import { useNavigate } from "react-router-dom";
import { setUser } from "../hooks/redux/actions/userActions";
import { store } from "../hooks/redux/store";

function LoginForm() {
    const [values, setValues] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        setLoading(true);

        event.preventDefault();
        try {
            // Enviar los datos a la API_Login aquí
            const response = await API_Login(values);
            const { data, status } = response;

            if (status == 200) {
                store.dispatch(setUser({ ...data.user }, data.token));
                navigate("/dashboard");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;

        setValues(prev => ({ ...prev, [id]: value }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Usuario"
                type="text"
                id="username"
                defaultValue=""
                // value={values.username}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Contraseña"
                id="password"
                type={showPassword ? "text" : "password"}
                defaultValue=""
                // value={values.password}
                onChange={handleChange}
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
            {
                loading ?
                    (<LinearProgress />)
                    :
                    (<Button type="submit" variant="contained" color="primary" fullWidth autoFocus>
                        Iniciar Sesión
                    </Button>)
            }
        </form>
    );
}

export default LoginForm;
