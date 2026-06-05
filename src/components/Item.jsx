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

            <hr />

        </div>
    )
}


export default Item