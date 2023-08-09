//import logo_fine from '../images/logo fine.png'
//import logo_leon from '../images/FINE LEON.png'
import logo_leon from '../../images/FINE_LEON_TRANS.png'
//import logo_fine from '../images/logo fine trans.png'
import CarWidget from '../CarWidget/CarWidget';
import Swal from 'sweetalert';

const NavBar = ()=>{

    const mostar_alerta = (texto_sweet_alert) =>{
        Swal('Oops...',texto_sweet_alert, 'warning')
    }


    return (
        <div className='NavBar_mia'>
            <nav className='nav_mia'>
                <div className='contenedor_logo_header'>
                    <img src={logo_leon} className='logo_header'></img>
                </div>
                <button onClick={() => mostar_alerta("Todavia no tenemos el sitio PRODUCTOS disponible :'(")} className='boton_nav'>PRODUCTOS</button>
                <button onClick={() => mostar_alerta("Todavia no tenemos el sitio NOSOTROS disponible :'(")} className='boton_nav'> NOSOTROS</button>
                <button onClick={() => mostar_alerta("Todavia no tenemos el sitio CONTACTO disponible :'(")} className='boton_nav'>CONTACTO</button>
                <CarWidget />
            </nav>
            
        </div>
    );
}
export default NavBar;