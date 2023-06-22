import Navbar from '../sections/NavbarMensajeros'
import '../styles/NewRequest.css'
import { useFetchData } from '../hooks/consumer'
import {API_AllRequest } from '../hooks/request'
import { Skeleton } from '@mui/material'
import { Fragment } from 'react'
import ItemRequest from '../sections/ItemRequest'

export default function NewRequest() {
    const [data, loading] = useFetchData(API_AllRequest)
//  const [listname] = useFetchData(API_AllDelyvery)
//     console.log("lista"+ ""+ listname.firstname)
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