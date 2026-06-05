import Item from "./Item";



const ItemList = ({ items }) => {
    return (
        <div>

            {
                items.map(producto => (
                    <Item 
                    key={producto.id}
                    producto={producto}
                    />
                ))
            }

        </div>
    )
}


export default ItemList