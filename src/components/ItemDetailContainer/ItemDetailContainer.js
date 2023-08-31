import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [productos, setProductos] = useState([])

    const {itemId} = useParams()

    const traer_productos_con_id = (id_producto)=> {
        return new Promise((resolved)=>{
            setTimeout(()=>{
                resolved(productos.find(prod => prod.id === id_producto))
            }, 2000)
        })
    }

    useEffect(()=>{
        traer_productos_con_id(itemId)
        .then(response => {setProductos(response)})
        .catch(e => {console.error(e)})

    },[itemId])

    return(
        <div>
            <ItemDetail {...productos}/>
        </div>
    );
}
export default ItemDetailContainer