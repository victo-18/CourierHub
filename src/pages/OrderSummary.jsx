import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import HideAppBar from "../components/Navbar";
import SummaryRequest from "../components/SummaryRequest";
import "../styles/OrderSummary.css";

export default function OrderSummary() {
    const { auth } = useSelector((state) => state.session);
    return auth ? (
        <div id="mainContainer">
            <HideAppBar>
                <div id="component">
                    <SummaryRequest />
                </div>
            </HideAppBar>
        </div>
    ) : (<Navigate to="/dashboard" />)
}