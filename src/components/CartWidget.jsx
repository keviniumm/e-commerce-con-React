import { useContext } from "react"

import { Link } from "react-router-dom"

import { CartContext } from "../context/CartContext"


const CartWidget = () => {

    const { cart } = useContext(CartContext)

    const cantidadTotal = cart.reduce(
        (acumulador, producto) => acumulador + producto.cantidad, 0
    )


    return (
        <Link
            to="/cart"
            className="text-white text-decoration-none position-relative"
        >

            <i className="bi bi-cart3 fs-3"></i>

            {
                cantidadTotal > 0 && (

                    <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    >
                        {cantidadTotal}
                    </span>

                )
            }

        </Link>


    )
}


export default CartWidget