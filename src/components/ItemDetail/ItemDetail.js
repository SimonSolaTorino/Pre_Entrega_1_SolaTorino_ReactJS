import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({image, title, description, price})=>{
    return(
        <div className="card">
          <img src={image} alt={title} className="card-img" />
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <p className="card-price">${price}</p>
          </div>
          <ItemCount/>
        </div>
    );
}

export default ItemDetail