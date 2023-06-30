import NabarMensajeros from "../sections/NabarMensajeros"
import SummaryRequest from "../components/SummaryRequest"
import { Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import "../styles/OrderSummary.css"

export default function OrderSummary() {
    const { auth } = useSelector((state) => state.session);
    return auth ? (
        <div id="mainContainer">
            <NabarMensajeros />
            <div id="component">
            <SummaryRequest />
            </div>
        </div>
    ) : (<Navigate to="/dashboard" />)
}