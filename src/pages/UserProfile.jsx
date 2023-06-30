import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AdministratorClient from "../components/AdministratorClient";

import "../styles/UserProfile.css";

export default function UserProfile(){
    const { auth } = useSelector((state) => state.session);

    return auth ? (
        <Box id="userContainer">
            <Helmet>
                <title>Panel De Administración</title>
            </Helmet>
            <Box>
            <Typography id="title" variant="h4" align="center" fontWeight={"bold"} fontFamily={"Roboto"}>
                    Panel De Administración
            </Typography>
               <AdministratorClient/>
            </Box>
        </Box>
    ) : (<Navigate to="/login" />);
};