import { Link } from 'react-router-dom'

const Item = ({...productos})=>{

  /*let url_cat = ""

  if(productos.category === "men's clothing"){
    url_cat += "/category/men's%20clothing/"  

  }else if(productos.category === "jewelery"){
    url_cat += "/category/jewelery/"
  
  }else if(productos.category === "women's clothing"){
    url_cat += "/category/women's%20clothing/"
 
  }else{
    url_cat += "404notfound"
  }*/

    return (
        <div className="card item">
          <div className='card_item_list'>
            <img src={productos.image} alt={productos.title} className="card-img imagen_card imagen_card_strong" />
            <div className="card-body">
              <h2 className="card-title">{productos.title}</h2>
              <p className="card-description">{productos.description}</p>
              <p className="card-price">${productos.price}</p>
            </div>
            {/*<button>ver detalle</button>*/}
            <Link to={`item/${productos.id}`}><button className='boton_agregar_carrito'> ver detalle </button></Link>
          </div>
        </div>
    );
}
export default Item