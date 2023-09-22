import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config/firebaseConfig";

const ItemDetailContainer = ()=>{
    const [productos, setProductos] = useState([])

    const {itemId} = useParams()

    useEffect(()=>{
        const productosRef = doc(db, "productos", itemId)


        getDoc(productosRef)
            .then((resp)=>{
                setProductos(
                    {...resp.data(), id: resp.id}
                )
            })
    }, [itemId])

    /*const traer_productos = async () =>{
        if(itemId){
            const response = await fetch('https://fakestoreapi.com/products/'+ itemId)
            const prod_rta = await response.json()
            setProductos(prod_rta)
        }else{
            const response = await fetch('https://fakestoreapi.com/products')
            const prod_rta = await response.json()
        }
    }

    useEffect(()=>{
        traer_productos()
    },[itemId])*/

    return(
        <div>
            <ItemDetail {...productos}/>
        </div>
    );
}
export default ItemDetailContainer