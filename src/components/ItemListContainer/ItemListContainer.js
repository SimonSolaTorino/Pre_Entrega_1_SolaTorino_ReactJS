import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react';

const ItemListContainer = ({saludo})=>{
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(()=>{
        if(categoryId){ //si existe categoryId traeme las categorias
            fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(cats =>{setProductos(cats)})
            .catch(e=>console.error(e))

        }else{ //sino traeme todos los productos
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(prods =>{setProductos(prods)})
            .catch(e => console.error(e))
        }//aca se me rompe. en productos se guardan las categorias y para mi no tiene sentido
        
    }, [categoryId])

    console.table(productos)

    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList productos={productos}/>
        </div>
    );
}
export default ItemListContainer;