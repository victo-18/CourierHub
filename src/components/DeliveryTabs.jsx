
import React from "react";
import {Box, Tab} from "@mui/material";
import {TabContext, TabList, TabPanel } from "@mui/lab";
import { DeliverySearch } from "../components/DeliverySearch";
import { DeliveryAcept } from "../components/DeliveryAcept";

export function DeliveryTabs (){
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
 return(
    <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',marginTop:"4rem"}}>
            <TabList  centered={true}  onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Busqueda" value="1" />
                <Tab label="En Proceso" value="2" />
            </TabList>
        </Box>
        <TabPanel value="1">
            <DeliverySearch />
        </TabPanel>
        <TabPanel value="2">
            <DeliveryAcept />
        </TabPanel>
    </TabContext>
 );
}
