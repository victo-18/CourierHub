import { Box, Fab } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

function Perfil() {
    return (
        <Box>
            Perfil 2.0
            <Box sx={{ position: "fixed", right: 16, bottom: 16 }}>
                <Fab LinkComponent={Link} color="primary" to="edit">
                    <EditIcon />
                </Fab>
            </Box>
            <Outlet />
        </Box>
    )
}

export default Perfil;