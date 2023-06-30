import { useTheme } from "@emotion/react";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import "@styles/Item.css";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { transportIcon } from "./constant";

const useListStates = () => {
    const theme = useTheme();

    return {
        "ENTREGADO": { content: "Entregado", color: theme.palette.success.main },
        "EN_CAMINO": { content: "En proceso", color: theme.palette.warning.main },
        "SOLICITADO": { content: "Solicitado", color: theme.palette.info.main },
    }
}

function CustomIndicator(props) {
    const { title, children, bgcolor, textSecondary, ...others } = props;
    return (
        <Stack alignItems="center" {...others}>
            <Tooltip placement="top" arrow title={title}>
                <Avatar sx={{ width: "32px", height: "32px", backgroundColor: bgcolor }}>
                    {children}
                </Avatar>
            </Tooltip>
            <Typography fontSize="small">
                {textSecondary}
            </Typography>
        </Stack>
    )
}

CustomIndicator.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    bgcolor: PropTypes.any,
    textSecondary: PropTypes.any,
}

export default function CustomItem({ shipment }) {
    const theme = useTheme();
    const isWide = useMediaQuery(theme.breakpoints.up("sm"));
    const states = useListStates();
    const userFullname = shipment?.Users[0]?.firstname + " " + shipment?.Users[0]?.lastname;
    const transport = shipment?.Transports[0];
    const numberPackages = shipment?.numberPackages;
    const phase = shipment?.ListStates[0]?.phase;

    return (
        <ListItem
            secondaryAction={
                <>
                    <Stack direction="row">
                        <CustomIndicator
                            title={`Vehiculo: ${transport.nameTransport}`}
                            bgcolor={states[phase]?.color ?? "red"}
                            textSecondary={`${states[phase]?.content ?? "ERROR"}`}
                            sx={{ minWidth: "67px" }}
                        >
                            {transportIcon[transport.id]}
                        </CustomIndicator>
                        <CustomIndicator
                            title={"Cantidad de paquetes"}
                            textSecondary={numberPackages}
                        >
                            <AllInboxIcon />
                        </CustomIndicator>
                    </Stack>
                </>
            }
            alignItems="flex-start"
            sx={{ width: isWide ? "calc(50% - (8px * 0.2) * 2)" : "calc(100% - (8px * 0.2) * 2)", border: 1, borderColor: "divider", m: 0.2 }}
            className="custom-item"
        >
            <ListItemAvatar>
                <Avatar alt={`Una foto de perfil de ${userFullname}`} />
            </ListItemAvatar>
            <ListItemText
                primary={userFullname}
                secondary={
                    <Fragment>
                        <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            noWrap
                        >
                            {shipment.destination}
                        </Typography>
                        {"  — Nombre del mensajero"}
                    </Fragment>
                }
            />
        </ListItem>
    );
}

CustomItem.propTypes = {
    shipment: PropTypes.object,
}