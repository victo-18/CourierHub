import { useState } from "react";
import TableClient from '../sections/TableClient';
import { store } from "../hooks/redux/store";
import { API_AllHistoryById } from "../hooks/request";
import { useFetchData } from "../hooks/consumer";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../styles/SummaryRequest.css';


export default function SummaryRequest() {
    const estado = store.getState().session.user.phone;
    const [data, cargando] = useFetchData(() => API_AllHistoryById(estado));
    const tipo = "historial";
    return (
        <div id="contenedorPpal">
            {cargando ?
                <div id='tabla'>
                    <Box  sx={{ display: 'flex'}}>
                        <CircularProgress />
                    </Box>
                </div>
                :
                <div id='tabla'>
                    <TableClient
                        datos={data}
                        tipo={tipo} />
                </div>
            }
        </div>
    );
};