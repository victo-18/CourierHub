import Navbar from "../components/Navbar"
//import DeliveryDay from "../sections/DeliveryDay"
import { Box } from "@mui/material"
import { DeliveryTabs } from "../components/DeliveryTabs"
import "../styles/Entrega.css"
export default function Entregas() {
    return (
        <Box>
            <Navbar />
            <DeliveryTabs/>
        </Box>
    )
}