import logo_leon from '../../images/FINE_LEON_TRANS.png'
import CarWidget from '../CarWidget/CarWidget';
import Swal from 'sweetalert';
//import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { NavLink, Link } from 'react-router-dom'

const NavBar = ()=>{

    const mostar_alerta = (texto_sweet_alert) =>{
        Swal('Oops...',texto_sweet_alert, 'warning')
    }


    return (
        <div className='NavBar_mia'>
            <nav className='nav_mia'>
                <div className='contenedor_logo_header'>
                    <Link to='/'>
                        <img src={logo_leon} className='logo_header' alt='logo-header-leon'></img>
                    </Link>
                </div>
                {/*
                <button onClick={() => mostar_alerta("Todavia no tenemos el sitio PRODUCTOS disponible :'(")} className='boton_nav'>PRODUCTOS</button>
                <button onClick={() => mostar_alerta("Todavia no tenemos el sitio NOSOTROS disponible :'(")} className='boton_nav'> NOSOTROS</button>
                <button onClick={() => mostar_alerta("Todavia no tenemos el sitio CONTACTO disponible :'(")} className='boton_nav'>CONTACTO</button>
            */}
                <div>
                    <NavLink to={`/category/Proteinas`} className='boton_nav'>PROTEINAS</NavLink>
                    <NavLink to={`/category/Colagenos`} className='boton_nav'>COLAGENOS</NavLink>
                    <NavLink to={`/category/Suplemento`} className='boton_nav'>SUPLEMENTOS DIETARIOS</NavLink>
                    <button onClick={() => mostar_alerta("Todavia no tenemos el sitio CONTACTO disponible :'(")} className='boton_nav'>CONTACTO</button>                    
                </div>
                <Link to={"/cart"}><CarWidget /></Link>
            </nav>
            {/*<div>
                <ItemListContainer saludo={"Bienvenido a F!NE"}/>
        </div>*/}
        </div>
    );
}
export default NavBar;