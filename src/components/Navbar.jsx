import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import InventoryIcon from "@mui/icons-material/Inventory";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { Badge, useTheme } from "@mui/material";

import "../styles/Navbar.css";
import { useState } from "react";

const offline = (<Badge anchorOrigin={{ vertical: "bottom", horizontal: "right", }} color="error" badgeContent={<NotInterestedIcon />} >
    <AccountCircleIcon />
</Badge>);

const online = (<Badge anchorOrigin={{ vertical: "bottom", horizontal: "right", }} color="success" >
    <AccountCircleIcon />
</Badge>);

export default function LabelBottomNavigation() {
    const [value, setValue] = useState("inicio");
    const [on, setOn] = useState(true);
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = () => {
        setOn(prev => !prev)
    }

    return (
        <BottomNavigation id="navbar-main" value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Historial"
                value="historal"
                sx={{ bgcolor: theme.palette.primary.main }}
                icon={<HistoryIcon />}
            />
            <BottomNavigationAction
                label="Inicio"
                value="inicio"
                sx={{ bgcolor: theme.palette.primary.main }}
                icon={<InventoryIcon />}
            />
            <BottomNavigationAction
                label="Perfil"
                value="perfil"
                onClick={handleClick}
                sx={{ bgcolor: theme.palette.primary.main }}
                icon={on ? online : offline}
            />
        </BottomNavigation>
    );
}
