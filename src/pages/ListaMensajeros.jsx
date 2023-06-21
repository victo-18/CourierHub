
import Mensajero from '../components/Mensajero';
import '../styles/DeliveryList.css'
import Navbar from '../sections/NavbarMensajeros'

export default function ListaMensajeros() {
  return (
    <div className='container' >
      <Navbar/>

      <div className='centrado'>
      <Mensajero/>
      </div>
    </div>
  );
}