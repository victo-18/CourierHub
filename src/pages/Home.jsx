import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LabelBottomNavigation from "../components/Navbar";
import { useFetchData } from "../hooks/consumer";
import { API_Protected } from "../hooks/request";

export function Home() {
    const { auth } = useSelector((state) => state.session);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, loading } = auth ? useFetchData(API_Protected) : { data: null, loading: null };

    const handleLogout = () => {
        location.href = "/logout";
    }

    return auth ?
        (<Box sx={{ textAlign: "center" }}>
            <Helmet>
                <title>CourierHub</title>
            </Helmet>
            <Typography>
                Te has autenticado correctamente
            </Typography>
            <Typography>
                {loading ? " " : data}
            </Typography>
            <IconButton onClick={handleLogout}>
                <LogoutIcon />
            </IconButton>
            <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
                <LabelBottomNavigation />
            </Box>
        </Box>)
        :
        (<Navigate to="/login" />)


}