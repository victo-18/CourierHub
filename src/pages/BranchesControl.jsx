import NabarMensajeros from '../sections/NabarMensajeros';
import Branches from '../components/Branches';
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import '../styles/BranchesControl.css';

export default function BranchesControl() {
    const { auth } = useSelector((state) => state.session); 
    return auth ? (
        <div className='contenedorPpal'>
            <NabarMensajeros />
                <Branches/>
        </div>
    ) : (<Navigate to="/dashboard" />)
}