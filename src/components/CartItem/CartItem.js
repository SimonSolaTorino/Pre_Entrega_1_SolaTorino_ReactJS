import { CarritoContext } from "../../context/context"
import { useContext } from "react"


const CartItem = ({ id, title, image, price, cant })=>{
    const {sacar_item} = useContext(CarritoContext)

    const eliminar_item = ()=>{
      sacar_item(id)
    }

    let url
    
    switch (title) {
        case "F!NE POWER - Sabor frutos del bosque":
        url = "https://shop.fineglobal.com/admin/images/511_power1.png";
        break;
        case "F!NE SMOOTH - Sabor arándanos":
        url = "https://shop.fineglobal.com/admin/images/513_smooth%201.png";
        break;
        case "F!NE Peak - Sabor tropical cream":
        url = "https://shop.fineglobal.com/admin/images/564_peak1.png";
        break;
        case "F!NE BEAUTY - Sabor multifruta":
        url = "https://shop.fineglobal.com/admin/images/515_beauty1.png";
        break;
        case "F!NE STRONG - Sabor frutos rojos":
        url = "https://shop.fineglobal.com/admin/images/520_Fine_Redes_Product_BF-03.jpg";
        break;
        case "F!NE SCULPT - Sabor coco":
        url = "https://shop.fineglobal.com/admin/images/500_main.jpg";
        break;
        default:
          return "undefine";
    }

    return(
    <div className="cart-item">
      <div className="cart-item-details mi_checkout">
        <img className="imagen_checkout" src={url} alt="imagen del producto"></img>
        <h2 className="cart-item-title titulo_checkout_item">{title}</h2>
        <p className="cart-item-price fuente_checkout">${price}</p>
        <p className="cart-item-quantity fuente_checkout">Cantidad: {cant}</p>
        <button className="boton_agregar_carrito" onClick={eliminar_item}>eliminar producto del carrito</button>
      </div>
    </div>
    )
}

export default CartItem