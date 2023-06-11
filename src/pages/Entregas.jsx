import NabarMensajeros from '../sections/NabarMensajeros'
import DeliveryDay from '../sections/DeliveryDay'
import '../styles/Entrega.css'
export default function Entregas() {
    return (
        <div className='entregas'>
            <NabarMensajeros />
            <div className='entregas__componente'>
                <DeliveryDay />
                <DeliveryDay />
                <DeliveryDay />
            </div>
        </div>
    )
}