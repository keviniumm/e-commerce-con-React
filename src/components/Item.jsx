import { Link } from "react-router-dom"


const Item = ({ producto }) => {
    return (
        <div>

            <img
                src={producto.imagen}
                alt={producto.nombre}
            />

            <h3>{producto.nombre}</h3>

            <p>{producto.descripcion}</p>

            <p>Precio: ${producto.precio}</p>

            <p>Categoria: {producto.categoria}</p>

            <Link to={`/item/${producto.id}`}>Ver detalle</Link>

            <hr />

        </div>
    )
}


export default Item