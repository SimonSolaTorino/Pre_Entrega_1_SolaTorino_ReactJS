import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({image, title, description, price})=>{
    return(
        <div className="card card_detail">
          <h2 className="card-title">{title}</h2>
          <img src={image} alt={title} className="card-img imagen_card" />
          <div className="card-body">
            <p className="card-description">{description}</p>
            <p className="card-price">${price}</p>
          </div>
          <ItemCount/>
        </div>
    );
}

export default ItemDetail