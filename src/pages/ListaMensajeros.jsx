
import Mensajero from '../components/Mensajero';
import HideAppBar from '../components/Navbar';
import '../styles/DeliveryList.css'

export default function ListaMensajeros() {
  return (
    <HideAppBar>
      <div className='container' >
        <div className='centrado'>
          <Mensajero />
        </div>
      </div>
    </HideAppBar>
  );
}