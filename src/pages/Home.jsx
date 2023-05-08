import { Box, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useFetchData } from "../hooks/consumer";
import { API_Protected } from "../hooks/request";

import LogoutIcon from '@mui/icons-material/Logout';

export function Home() {
    const { auth } = useSelector((state) => state.session);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = auth ? useFetchData(API_Protected) : { data: null };

    const handleLogout = () => {
        location.href = "/logout";
    }

    return (
        <>
            {
                auth ?
                    <Box sx={{ textAlign: "center" }}>
                        <Typography>
                            Te has autenticado correctamente
                        </Typography>
                        <Typography>
                            {data ? data : ""}
                        </Typography>
                        <IconButton onClick={handleLogout}>
                            <LogoutIcon />
                        </IconButton>
                    </Box>
                    :
                    <Navigate to="/login" />
            }
        </>
    )
}