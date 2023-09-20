import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert';

export const CarritoContext = createContext({
    carrito: [],
    cant_total: 0,
    total: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cant_total, setCantTotal] = useState(0)
    const [total, setTotal] = useState(0)


    useEffect(() => {
        const calcular_total = () => {
            const total_nuevo = cart.reduce((acc, item) => acc + item.price * item.cant, 0)
            setTotal(total_nuevo)
        }
        calcular_total()
    }, [cart]);

    
    const agregar_item = (item, cant) =>{
        if(!esta_en_carrito(item.id)){
            setCart(prev => [...prev, {...item, cant}])
            setCantTotal(prevCantTotal => prevCantTotal + 1)
        }
        else{
            Swal('Oops...','el producto ya esta en el carrito', 'error')
        }
    }
    
    const sacar_item = (item_id) =>{
        const carrito_actualizado = cart.filter(prod => prod.id !== item_id)
        setCart(carrito_actualizado)
        setCantTotal(cant_total-1)
    }

    const limpiar_carrito = () =>{
        setCart([])
        setCantTotal(0)
    }

    const esta_en_carrito = (item_id) =>{
        return cart.some(prod=> prod.id === item_id)
    }

    //console.log(cart)

    return(
        <CarritoContext.Provider value={{cart, agregar_item, sacar_item, limpiar_carrito, cant_total, total}}>
            {children}
        </CarritoContext.Provider>
    )
}