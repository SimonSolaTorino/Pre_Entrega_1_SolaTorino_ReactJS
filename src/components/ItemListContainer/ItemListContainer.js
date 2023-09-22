import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config/firebaseConfig";

const ItemListContainer = ({saludo})=>{

    const saludo_2 = "Bienvenidos a F!NE"
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    

    useEffect(()=>{
        const productosRef = collection(db, "productos")
        const mi_query = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef
        getDocs(mi_query)
            .then((resp)=>{
                setProductos(
                    resp.docs.map((doc)=>{
                        return {...doc.data(), id: doc.id }
                    })
                )
            })
        
    }, [categoryId])

    return (
        <div>
            <h1 className='titulo_greatings'>{saludo_2}</h1>
            <ItemList productos={productos}/>
        </div>
    );
}
export default ItemListContainer;