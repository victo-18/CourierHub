import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { removeSnackbar } from "../hooks/redux/actions/snackbarActions";

import "../styles/SnackBars.css";
import { Stack } from "@mui/material";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SnackbarStack() {
    const { snackbars } = useSelector((state) => state.snackbar);
    const dispatch = useDispatch();

    const handleClose = (id, reason) => {
        if (reason === "clickaway") return;
        dispatch(removeSnackbar(id));
    };

    return (
        <Stack className="position-default">
            {
                snackbars.map((snackbar) => (
                    <Snackbar
                        key={snackbar.id}
                        open={snackbar.open}
                        autoHideDuration={snackbar.duration}
                        onClose={(event, reason) => handleClose(snackbar.id, reason)}
                    >
                        <div>
                            <Alert onClose={() => handleClose(snackbar.id)} severity={snackbar.severity}>
                                {snackbar.message}
                            </Alert>
                        </div>
                    </Snackbar>
                ))
            }
        </Stack>
    );
}

export default SnackbarStack;
