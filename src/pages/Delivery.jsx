import React from "react";
import { Container, Box ,Grid} from "@mui/material";
import { DeliverySearch } from "../components/DeliverySearch";
import { DeliveryAcept } from "../components/DeliveryAcept";

export function Delivery () {
    
    return(
        <Container fixed >
            <Grid container spacing={4} columns={10} justifyContent="center">
                <Grid item xs={8} sm>
                    <DeliverySearch />
                </Grid>
                <Grid item xs={8}>
                    <DeliveryAcept />
                </Grid>
            </Grid>
                   
        </Container>
            
            
            
        
            
        
    );
}