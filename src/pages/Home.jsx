import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { CustomList } from "../components/LIst/CustomList";
import { useFetchData } from "../hooks/consumer";
import { API_AllRequest } from "../hooks/request";
import HideAppBar from "../components/Navbar";

export function Home() {
    const { auth } = useSelector((state) => state.session);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [shipments, loadingShipments] = useFetchData(API_AllRequest);

    // const handleLogout = () => {
    //     location.href = "/logout";
    // }

    return auth ?
        (<Box sx={{ textAlign: "center" }}>
            <Helmet>
                <title>CourierHub</title>
            </Helmet>
            <HideAppBar>
                {
                    loadingShipments ?
                        <Skeleton />
                        : <CustomList data={shipments} />
                }
            </HideAppBar>
        </Box>)
        :
        (<Navigate to="/login" />)
}