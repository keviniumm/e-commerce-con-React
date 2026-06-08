import { useContext } from "react"

import { CartContext } from "../context/CartContext"


const CartWidget = () => {

    const { cart } = useContext(CartContext)

    const cantidadTotal = cart.reduce(
        (acumulador, producto) => acumulador + producto.cantidad, 0
    )


    return (

        <div>

            ICONO CARRITO {cantidadTotal}

        </div>

    )
}


export default CartWidget