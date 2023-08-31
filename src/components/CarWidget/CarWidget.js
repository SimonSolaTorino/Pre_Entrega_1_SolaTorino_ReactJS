import logo_carrito_lleno from '../../images/icono_carrito_lleno.png'
import logo_carrito_vacio from '../../images/icono_carrito_vacio.png'

const CarWidget = () =>{
    const cantidad_en_carrito = 1//0 //1
    
    return (
        <div className='contenedor_cartwidget'>
            <div className='contenedor_imagen_carrito'>
            <img src={cantidad_en_carrito > 0 ? logo_carrito_lleno : logo_carrito_vacio} alt='icono-del-carrito' className="icono_carrito"></img>
            <p className='burbuja_cantidad_carrito'>{cantidad_en_carrito}</p>
            </div> 
        </div>
    );
}
export default CarWidget;