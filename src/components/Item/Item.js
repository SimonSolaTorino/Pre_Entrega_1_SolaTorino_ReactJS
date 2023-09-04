import { Link } from 'react-router-dom'

const Item = ({...productos})=>{

    return (
        <div className="card item">
          <div className='card_item_list'>
            <img src={productos.image} alt={productos.title} className="card-img imagen_card" />
            <div className="card-body">
              <h2 className="card-title">{productos.title}</h2>
              <p className="card-description">{productos.description}</p>
              <p className="card-price">${productos.price}</p>
            </div>
            {/*<button>ver detalle</button>*/}
            <Link to={`item/${productos.id}`}> ver detalle </Link>
          </div>
        </div>
    );
}
export default Item