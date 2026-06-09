import { useContext } from "react"
import { CartContext } from '../context/CartContext'


const Cart = () => {

    const { cart, setCart } = useContext(CartContext)

    const eliminarProducto = (id) => {

        const carritoFiltrado = cart.filter(
            producto => producto.id !== id
        )

        setCart(carritoFiltrado)

    }

    const total = cart.reduce(

        (acumulador, producto) =>

            acumulador + (producto.precio * producto.cantidad), 0
    )

    return (

        <section>

            <h2>Carrito</h2>

            {
                cart.map(producto => (

                    <article key={producto.id}>

                        <h3>{producto.nombre}</h3>

                        <p>Cantidad: {producto.cantidad}</p>

                        <p>Precio unitario: ${producto.precio}</p>

                        <p>subtotal: ${producto.precio * producto.cantidad}</p>

                        <button onClick={() => eliminarProducto(producto.id)}>
                            Eliminar
                        </button>

                    </article>

                ))
            }

            <h2>Total: ${total}</h2>

            <button onClick={() => setCart([])}>
                Vaciar carrito
            </button>

        </section>
    )
}


export default Cart