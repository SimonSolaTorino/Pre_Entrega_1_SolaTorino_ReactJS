import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/context";
import Swal from 'sweetalert2';

const ItemDetail = ({image, title, description, price, id})=>{
  const [cantidad_agregada, setCantidadAgregada] = useState(0)
  const { agregar_item } = useContext(CarritoContext)

  const agregar_cantidad = (nueva_cant) => {

    setCantidadAgregada(nueva_cant)

    //console.log("se agregara: " + nueva_cant)

    const item = {
      id, title, price
    }
    
    agregar_item(item, nueva_cant)
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito con exito',
      showConfirmButton: false,
      timer: 1500,
    })

  }


    return(
        <div className="card card_detail">
          <h2 className="card-title">{title}</h2>
          <img src={image} alt={title} className="card-img imagen_card" />
          <div className="card-body">
            <p className="card-description">{description}</p>
            <p className="card-price">${price}</p>
          </div>
          {
            cantidad_agregada > 0 ?
            (<div>
              <Link to={'/cart'}><button className="boton_agregar_carrito">TERMINAR COMPRA</button></Link>
              <Link to={"/"}><button className="boton_agregar_carrito">SEGUIR COMPRANDO</button></Link>
            </div>
            )
            :
            (<ItemCount agregar_cantidad={(cantidad) => agregar_cantidad(cantidad)}/>)
          }
        </div>
    );
}

export default ItemDetail