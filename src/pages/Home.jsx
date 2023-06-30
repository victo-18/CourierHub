import AddIcon from "@mui/icons-material/Add";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import HideAppBar from "../components/Navbar";
import { useFetchData } from "../hooks/consumer";
import { API_AllRequest } from "../hooks/request";
import { CustomList } from "../components/List/CustomList";
import { Typography } from "@mui/material";
import { useState } from "react";

export function Home() {
    const [refresh, setRefresh] = useState(false);
    const { auth } = useSelector((state) => state.session);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [shipments, loadingShipments] = useFetchData(API_AllRequest, [refresh]);

    const handleRefresh = () => {
        setRefresh(prev => !prev)
    }

    return auth ?
        (<Box sx={{ textAlign: "center" }}>
            <Helmet>
                <title>CourierHub</title>
            </Helmet>
            <HideAppBar>
                {
                    loadingShipments ?
                        <Backdrop open sx={{ zIndex: 1, bgcolor: "background.paper" }}>
                            <CircularProgress />
                        </Backdrop>
                        : shipments.length > 0 ?
                            <CustomList data={shipments} />
                            : <Box sx={{ zIndex: 1, m: 2 }}>
                                <Typography variant="h5">
                                    No hay envios aún
                                </Typography>
                            </Box>
                }
            </HideAppBar>
            <Box sx={{ position: "fixed", right: 16, bottom: 16 }}>
                <Fab LinkComponent={Link} color="primary" to="nuevo">
                    <AddIcon />
                </Fab>
            </Box>
            <Outlet context={[handleRefresh]} />
        </Box>)
        :
        (<Navigate to="/login" />)
}