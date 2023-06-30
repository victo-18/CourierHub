
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { DeliverySearch } from "../components/DeliverySearch";
import { DeliveryAcept } from "../components/DeliveryAcept";
import { DeliveryHistory } from "../components/DeliveryHistory"

import HistoryIcon from "@mui/icons-material/History";

export function DeliveryTabs() {
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 0.5 }}>
                <TabList centered={true} onChange={handleChange}>
                    <Tab label="Busqueda" value="1" />
                    <Tab label="En Proceso" value="2" />
                    <Tab icon={<HistoryIcon />} value="3" />
                </TabList>
            </Box>
            <TabPanel value="1">
                <DeliverySearch />
            </TabPanel>
            <TabPanel value="2">
                <DeliveryAcept />
            </TabPanel>
            <TabPanel value="3">
                <DeliveryHistory />
            </TabPanel>
        </TabContext>
    );
}
