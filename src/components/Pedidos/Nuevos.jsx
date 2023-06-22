import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CreateFields } from "../../pages/constant";
import SwitchTypes from "../SwitchTypes";
import { API_NewRequest } from "../../hooks/request";
import { useDispatch } from "react-redux";
import { addSnackbar } from "../../hooks/redux/actions/snackbarActions";

export default function Nuevos() {
    const { handleSubmit, control } = useForm();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        console.log(data);
        const { status } = await API_NewRequest(data);
        if (status == 200) {
            dispatch(addSnackbar("¡El pedido ha sido solicitado!", "success"))
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
