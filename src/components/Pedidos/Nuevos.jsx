import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import useSmall from "../../hooks/breakpoints/useSmall";
import { addSnackbar } from "../../hooks/redux/actions/snackbarActions";
import { API_NewRequest } from "../../hooks/request";
import { CreateFields } from "../../pages/constant";
import SwitchTypes from "../SwitchTypes";

export default function Nuevos() {
    const [setRefresh] = useOutletContext();

    const { handleSubmit, control } = useForm();
    const isSmall = useSmall();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        console.log(data);
        const { status } = await API_NewRequest(data);
        if (status == 200) {
            dispatch(addSnackbar("¡El pedido ha sido solicitado!", "success"))
            setRefresh();
            handleBack();
        } else {
            dispatch(addSnackbar("Se ha producido un error, intentalo mas tarde", "error"))
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Dialog open onClose={handleBack} fullScreen={isSmall}>
            <DialogTitle>Solicitar un envio</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ mb: 1 }}>
                    Para solicitar un nuevo envio, por favor completa toda la informacion
                    siguiente
                </DialogContentText>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <SwitchTypes arr={CreateFields.request} control={control} />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleBack}>Cancelar</Button>
                <Button onClick={handleSubmit(onSubmit)}>Solicitar</Button>
            </DialogActions>
        </Dialog>
    );
}
