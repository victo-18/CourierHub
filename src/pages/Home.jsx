import Box from "@mui/material/Box";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { CustomList } from "../components/LIst/CustomList";
import { useFetchData } from "../hooks/consumer";
import { API_AllRequest } from "../hooks/request";
import { Skeleton } from "@mui/material";

export function Home() {
    const { auth } = useSelector((state) => state.session);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [shipments, loadingShipments] = useFetchData(API_AllRequest);

    const handleLogout = () => {
        location.href = "/logout";
    }

    return auth ?
        (<Box sx={{ textAlign: "center" }}>
            <Helmet>
                <title>CourierHub</title>
            </Helmet>
            {loadingShipments ?
                <Skeleton />
                : <CustomList data={shipments} />
            }
            {/* <Typography>
                Te has autenticado correctamente
            </Typography>
            <Typography>
                {loading ? " " : data}
            </Typography> */}
            {/* <IconButton onClick={handleLogout}>
                <LogoutIcon />
            </IconButton>
            <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
                <LabelBottomNavigation />
            </Box> */}
        </Box>)
        :
        (<Navigate to="/login" />)


}