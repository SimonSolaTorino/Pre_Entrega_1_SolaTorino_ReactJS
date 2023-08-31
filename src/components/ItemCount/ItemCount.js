import { useState } from "react"

const ItemCount = ()=>{
    const [cantidad, setCantidad] = useState(0)
    
    const aumentar_cantidad = ()=>{
        setCantidad(cantidad + 1)
    }

    const restar_cantidad = ()=>{
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className="mi_itemcount">
            <div className="contenedor1_itemcount">
                <button className="botones_itemcount" onClick={restar_cantidad} disabled={cantidad <= 0}>-</button>
                <h3 className="cantidad_itemcount"> {cantidad} </h3>
                <button className="botones_itemcount" onClick={aumentar_cantidad}>+</button>
            </div>
            <div>
                <button className="boton_agregar_carrito" disabled={cantidad <= 0} onClick={()=>console.log("cantidad para el carrito: "+cantidad)}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    );
}

export default ItemCount