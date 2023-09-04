import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react';

const ItemListContainer = ({saludo})=>{
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(()=>{
        if(categoryId){ //si existe categoryId traeme las categorias
            fetch('https://fakestoreapi.com/products/categories/'+categoryId)
            .then(res=>res.json())
            .then(cats =>{setProductos(cats)})
            .catch(e=>console.error(e))

        }else{ //sino traeme todos los productos
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(prods =>{setProductos(prods)})
            .catch(e => console.error(e))
        }
        
    }, [categoryId])

    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList productos={productos}/>
        </div>
    );
}
export default ItemListContainer;