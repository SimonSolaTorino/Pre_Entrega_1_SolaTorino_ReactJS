import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [productos, setProductos] = useState([])

    const {itemId} = useParams()

    const traer_productos = async () =>{
        if(itemId){
            const response = await fetch('https://fakestoreapi.com/products/'+ itemId)
            const prod_rta = await response.json()
            setProductos(prod_rta)
            console.table(prod_rta)
        }else{
            const response = await fetch('https://fakestoreapi.com/products')
            const prod_rta = await response.json()
            setProductos(prod_rta)
        }
    }

    useEffect(()=>{
        traer_productos()
    },[itemId])

    return(
        <div>
            <ItemDetail {...productos}/>
        </div>
    );
}
export default ItemDetailContainer