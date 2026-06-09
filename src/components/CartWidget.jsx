import { useContext } from "react"

import { Link } from "react-router-dom"

import { CartContext } from "../context/CartContext"


const CartWidget = () => {

    const { cart } = useContext(CartContext)

    const cantidadTotal = cart.reduce(
        (acumulador, producto) => acumulador + producto.cantidad, 0
    )


    return (
        <Link to='/cart'>

            <div>

                ICONO CARRITO {cantidadTotal}

            </div>

        </Link>

    )
}


export default CartWidget