import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Checkout = () => {

    const [nombre, setNombre] = useState('')

    const [telefono, setTelefono] = useState('')

    const [email, setEmail] = useState('')

    const { cart } = useContext(CartContext)

    const finalizarCompra = (e) => {

        e.preventDefault()

        const comprador = {
            nombre,
            telefono,
            email
        }

        const total = cart.reduce(

            (acumulador, producto) =>
                acumulador + (producto.precio * producto.cantidad),
            0
        )

        const orden = {
            comprador,
            items: cart,
            total
        }

        console.log(orden)


    }

    return (

        <section>

            <h2>Checkout</h2>

            <form onSubmit={finalizarCompra}>

                <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Ingrese su teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit">
                    Finalizar compra
                </button>

            </form>

        </section>

    )
}


export default Checkout