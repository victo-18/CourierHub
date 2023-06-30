import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";
import HideAppBar from "../components/Navbar";
import EditarPerfil from "./EditarPerfil";

function Perfil() {
    return (
        <HideAppBar>
            <Box>
                <EditarPerfil />
                <Box sx={{ position: "fixed", right: 16, bottom: 16 }}>
                    <Fab LinkComponent={Link} color="primary" to="edit">
                        <EditIcon />
                    </Fab>
                </Box>
            </Box>
        </HideAppBar>
    )
}

export default Perfil;