import logo_carrito_lleno from '../../images/icono_carrito_lleno.png'
import logo_carrito_vacio from '../../images/icono_carrito_vacio.png'
import { useContext } from 'react'
import { CarritoContext } from '../../context/context'

const CarWidget = () =>{
    const {cant_total} = useContext(CarritoContext)
    
    return (
        <div className='contenedor_cartwidget'>
            <div className='contenedor_imagen_carrito'>
            <img src={cant_total > 0 ? logo_carrito_lleno : logo_carrito_vacio} alt='icono-del-carrito' className="icono_carrito"></img>
            <p className='burbuja_cantidad_carrito'>{cant_total}</p>
            </div> 
        </div>
    );
}
export default CarWidget;