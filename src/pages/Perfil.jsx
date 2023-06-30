import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { Link, Outlet } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import HideAppBar from "../components/Navbar";

function Perfil() {
    return (
        <HideAppBar>
            <Box>
                Perfil 2.0
                <Box sx={{ position: "fixed", right: 16, bottom: 16 }}>
                    <Fab LinkComponent={Link} color="primary" to="edit">
                        <EditIcon />
                    </Fab>
                </Box>
                <Outlet />
            </Box>
        </HideAppBar>
    )
}

export default Perfil;