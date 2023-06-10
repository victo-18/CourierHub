import React from "react";
import {Box, Stack} from "@mui/material";
import { DeliveryTabs } from "../components/DeliveryTabs";
import { DeliveryAppBar } from "../components/DeliveryAppBar";
export function Delivery () {
    return(
        
        <Box>
            <Stack>
                <DeliveryAppBar />
                <DeliveryTabs />
            </Stack>
        </Box>          
        );
}