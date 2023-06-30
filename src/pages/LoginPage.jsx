import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Banner from "../assets/banner_login.png";
import Logo from "../assets/logo.png";
import LoginForm from "../components/LoginForm";
import useRole from "../hooks/roles/useRole";
import "../styles/LoginPage.css";
import { homePage } from "./constant";

export default function LoginPage() {
    const { auth } = useSelector((state) => state.session);
    const role = useRole();

    return auth ? (role && <Navigate to={homePage[role]} />) : (
        <Box id="login-page">
            <Helmet>
                <title>CourierHub - Inicio de sesion</title>
            </Helmet>
            <CardMedia component="img" src={Banner} alt="Banner" id="banner" />
            <Box>
                <Typography variant="h4">
                    ¡Hola de nuevo!
                </Typography>
                <Typography variant="h6">
                    Inicia sesión aquí para continuar tu aventura
                </Typography>
                <LoginForm />
                <Typography sx={{ marginTop: "32px" }}>¿Olvidaste tu contraseña? Restablecela aqui</Typography>
                <Tooltip title="Sobre nosotros, CourierHub">
                    <CardMedia component="img" src={Logo} alt="Logo de la empresa" id="logo" />
                </Tooltip>
            </Box>
        </Box>);
}