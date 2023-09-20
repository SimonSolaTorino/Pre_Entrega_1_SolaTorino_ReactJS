import { CarritoContext } from "../../context/context"
import { useContext } from "react"


const CartItem = ({ id, title, image, price, cant })=>{
    const {sacar_item} = useContext(CarritoContext)

    const eliminar_item = ()=>{
      sacar_item(id)
    }

    return(
    <div className="cart-item">
      <div className="cart-item-details">
        <h2 className="cart-item-title">{title}</h2>
        <p className="cart-item-price">${price}</p>
        <p className="cart-item-quantity">Cantidad: {cant}</p>
        <button className="boton_agregar_carrito" onClick={eliminar_item}>eliminar producto del carrito</button>
      </div>
    </div>
    )
}

export default CartItem