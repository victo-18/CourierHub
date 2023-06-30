import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Branches from "../components/Branches";
import HideAppBar from "../components/Navbar";
import "../styles/BranchesControl.css";

export default function BranchesControl() {
    const { auth } = useSelector((state) => state.session);
    return auth ? (
        <div className="contenedorPpal">
            <HideAppBar>
                <Branches />
            </HideAppBar>
        </div>
    ) : (<Navigate to="/dashboard" />)
}