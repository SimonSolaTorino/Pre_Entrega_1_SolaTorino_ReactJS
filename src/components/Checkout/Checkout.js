import { useContext, useState } from "react";
import { CarritoContext } from "../../context/context";
import { useForm } from "react-hook-form";
import {collection, addDoc} from "firebase/firestore"
import { db } from "../../firebase/config/firebaseConfig"
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const Checkout = ()=>{
    const [ordenfin, setOrdenfin] = useState([])
    const {cart, limpiar_carrito, total} = useContext(CarritoContext)
    const {register, handleSubmit} = useForm()

    const enviar = (data)=>{
        const orden = {
            productos: cart,
            nombre: data,
            precio: total
        }
        
        if(!data.nombre || !data.mail || !data.tel || !data.direccion){
            //tira este mensaje si no se completo la info
            Swal.fire({
                icon: 'warning',
                title: 'Ops...',
                text: 'Por favor, completa todos los campos del formulario para finalizar tu orden.',
              })

        }else{
            const ordenRef = collection(db, "pedidos")
            
            addDoc(ordenRef, orden)
            .then((doc)=>{
                const info_orden = Object.values(orden.nombre)
                const info = [doc.id, ...info_orden]
                setOrdenfin(info)
            })

            Swal.fire({
                icon: 'success',
                title: 'Genial!',
                text: 'Tus datos fueron cargados con exito!',
              });

            limpiar_carrito()

        }
        

        
    }

    if(ordenfin.length > 0){
        return(
            <div className="contenedor_fin_compra">
                <h1 className="titulo_greatings">GRACIAS POR TU COMPRA!</h1>
                <div className="contenedor_info_fin_compra">
                    <h3 className="orden_number">Tu id de orden es: {ordenfin[0]}</h3>
                    <p className="info_fin_compra">Comprador: {ordenfin[1]}</p>
                    <p className="info_fin_compra">Mail: {ordenfin[2]}</p>
                    <p className="info_fin_compra">Cel: {ordenfin[3]}</p>
                    <p className="info_fin_compra">Direccion de envio: {ordenfin[4]}</p>
                </div>
                <Link to='/'><button className="boton_agregar_carrito">volver al inicio</button></Link>
            </div>
        )
    }

    return (
        <div className="checkout">
            <h3 className="titulo_principal_checkout">Ya casi terminamos... Completa el siguiente formulario para finalizar tu compra:</h3>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="nombre y apellido" {...register("nombre")} className="input_estilo"></input>
                <input type="email" placeholder="email: example@example.com" {...register("mail")} className="input_estilo"></input>
                <input type="phone" placeholder="celular de contacto +54...." {...register("tel")} className="input_estilo"></input>
                <input type="text" placeholder="direccion de envio, localidad, provincia" {...register("direccion")} className="input_estilo"></input>
                <div className="contenedor_boton_form">
                    <button type="submit" className="boton_agregar_carrito">enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout