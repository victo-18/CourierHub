import Navbar from '../sections/NavbarMensajeros'
import '../styles/NewRequest.css'
import { useFetchData } from '../hooks/consumer'
//import { API_AllUsers} from '../hooks/request'
import { Skeleton } from '@mui/material'
import { Fragment } from 'react'
import {ItemRequest} from '../sections/ItemRequest'
import {API_AllinProgress } from '../hooks/request'

export default function VerPedidosAdmin() {
     const [data, loading] = useFetchData(API_AllinProgress)
    console.log('Data desde ver pedidos'+' ' + data)
    return (
        <Fragment>
            <Navbar />
            {
                loading
                    ? <Skeleton variant="rectangular" width={210} height={118} />
                    : <div className='request'>
                        {data.map((data) => (<ItemRequest key={data.code} data={data}/>))}
                    </div>
            }
        </Fragment>
    )
}