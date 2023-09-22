import { useContext } from "react";
import { CarritoContext } from "../../context/context";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = ()=>{

    const {cart, limpiar_carrito, cant_total, total} = useContext(CarritoContext)

    if(cant_total===0){
        return(
            <div>
                <h1 className="color_total_price">EL CARRITO ESTA VACIO</h1>
                <Link to={"/"}><button className="boton_agregar_carrito">PRODUCTOS</button></Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
            <h3 className="color_total_price">Total: ${total}</h3>
            <button className="boton_agregar_carrito" onClick={()=>limpiar_carrito()}>VACIAR CARRITO</button>
            <Link to={"/checkout"}> <button className="boton_agregar_carrito">finalizar compra</button></Link>
        </div>
    )
}

export default Cart