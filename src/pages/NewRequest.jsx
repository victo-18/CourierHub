import Request from '../sections/NewRequest'
import Navbar from '../sections/NavbarMensajeros'
import '../styles/NewRequest.css'
import { useFetchData } from '../hooks/consumer'
import {API_AllRequest } from '../hooks/request'
import { Skeleton } from '@mui/material'
export default function NewRuquest() {
    const [data, loading] = useFetchData(API_AllRequest)
    // const [datos] = useFetchData(API_AllDelyvery)
    return (
        <div>
            <Navbar />
            {loading ? <Skeleton variant="rectangular" width={210} height={118} /> :
                <div className='request'>

                    {data.map((data) => (
                        <Request  key='{data.id}'data={data}/>
                      
                    ))}
                </div>
            }
        </div>
    )
}