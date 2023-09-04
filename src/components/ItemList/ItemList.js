import Item from '../Item/Item'

const ItemList = ({productos})=>{

    return(
        <div className="item_list">
            {productos.map( prod => <Item key={prod.id} {...prod}/>)}
        </div>
    );
}
export default ItemList