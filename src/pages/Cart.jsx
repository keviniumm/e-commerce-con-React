import { Link } from "react-router-dom"

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

    if (cart.length === 0) {
        return <h2>El carrito está vacío</h2>
    }

    return (

        <section className="container mt-5">

            <h2 className="mb-4">
                🛒 Mi Carrito
            </h2>

            {
                cart.map(producto => (

                    <div
                        key={producto.id}
                        className="card shadow mb-3"
                    >

                        <div className="card-body">

                            <h4>{producto.nombre}</h4>

                            <p>Cantidad: {producto.cantidad}</p>

                            <p>Precio unitario: ${producto.precio}</p>

                            <p>
                                <strong>
                                    Subtotal: ${producto.precio * producto.cantidad}
                                </strong>
                            </p>

                            <button
                                className="btn btn-danger"
                                onClick={() => eliminarProducto(producto.id)}
                            >
                                Eliminar
                            </button>

                        </div>

                    </div>

                ))
            }

            <h3 className="mt-4">
                Total: ${total}
            </h3>

            <div className="d-flex justify-content-center gap-3 mt-4">

                <button
                    className="btn btn-outline-danger px-4"
                    onClick={() => setCart([])}
                >
                    Vaciar carrito
                </button>

                <Link to="/checkout">

                    <button className="btn btn-dark px-4">
                        Finalizar compra
                    </button>

                </Link>

            </div>

        </section>

    )
}


export default Cart