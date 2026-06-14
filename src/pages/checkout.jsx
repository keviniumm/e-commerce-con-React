import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

import { useState } from "react"
import { useContext } from "react"

import { CartContext } from "../context/CartContext"

const Checkout = () => {

    const [nombre, setNombre] = useState('')

    const [telefono, setTelefono] = useState('')

    const [email, setEmail] = useState('')

    const [orderId, setOrderId] = useState('')

    const { cart } = useContext(CartContext)

    const finalizarCompra = async (e) => {

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
            total,
            fecha: new Date()
        }

        const ordersRef = collection(db, "orders")

        const documento = await addDoc(ordersRef, orden)

        setOrderId(documento.id)


    }

    if (orderId) {

        return (

            <section className="container mt-5">

                <div className="card shadow p-5 text-center">

                    <h2 className="text-success">
                        ¡Compra realizada con éxito!
                    </h2>

                    <p className="mt-3">
                        Tu número de orden es:
                    </p>

                    <h4>{orderId}</h4>

                </div>

            </section>

        )

    }

    return (

        <section className="container mt-5">

            <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>

                <h2 className="mb-4 text-center">
                    Finalizar compra
                </h2>

                <form onSubmit={finalizarCompra}>

                    <div className="mb-3">

                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ingrese su nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />

                    </div>

                    <div className="mb-3">

                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ingrese su teléfono"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />

                    </div>

                    <div className="mb-4">

                        <input
                            className="form-control"
                            type="email"
                            placeholder="Ingrese su email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <button
                        className="btn btn-dark w-100"
                        type="submit"
                    >
                        Finalizar compra
                    </button>

                </form>

            </div>

        </section>

    )
}


export default Checkout