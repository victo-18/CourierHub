import { Box, CardMedia, Tooltip, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import LoginForm from "../components/LoginForm";
import Banner from "../assets/banner_login.png";
import Logo from "../assets/logo.png";

import "../styles/LoginPage.css";

export default function LoginPage() {
    return (
        <Box id="login-page">
            <Helmet>
            <title>CourrierHub - Inicio de sesion</title>
            </Helmet>
            <CardMedia component="img" src={Banner} alt="Banner" id="banner" />
            <Box>
                <Typography variant="h3">Iniciar sesión</Typography>
                <LoginForm />
                <Typography>Olvidaste tu contraseña? Restablecela aqui</Typography>
                <Tooltip title="Sobre nosotros, CourrierHub">
                    <CardMedia component="img" src={Logo} alt="Logo de la empresa" id="logo" />
                </Tooltip>
            </Box>
        </Box>);
}