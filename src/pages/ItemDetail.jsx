import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

import { useContext } from "react"
import { useParams } from "react-router-dom"


import ItemCount from '../components/ItemCount'

import { CartContext } from "../context/CartContext"


const ItemDetail = () => {

    const { id } = useParams()

    const { cart, setCart } = useContext(CartContext)

    const [productoEncontrado, setProductoEncontrado] = useState(null)

    const [agregado, setAgregado] = useState(false)

    useEffect(() => {

        const obtenerProducto = async () => {

            const docRef = doc(db, "products", id)

            const snapshot = await getDoc(docRef)

            setProductoEncontrado({

                id: snapshot.id,
                ...snapshot.data()

            })
        }
        obtenerProducto()
    }, [id])


    if (!productoEncontrado) {
        return <h2>Cargando producto...</h2>
    }

    const onAdd = (cantidad) => {

        const productoExistente = cart.find(
            producto => producto.id === productoEncontrado.id
        )

        if (productoExistente) {

            const carritoActualizado = cart.map(producto => {
                if (producto.id === productoEncontrado.id) {

                    return {
                        ...producto,
                        cantidad: producto.cantidad + cantidad
                    }
                }

                return producto

            })

            setCart(carritoActualizado)

        }


        else {

            const productoAgregado = {
                ...productoEncontrado,
                cantidad
            }

            setCart([...cart, productoAgregado])

        }

        setAgregado(true)

    }


    return (

        <section className="container mt-5">

            <div className="row">

                <div className="col-md-6 text-center">

                    <img
                        src={productoEncontrado.imagen}
                        alt={productoEncontrado.nombre}
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: "450px" }}
                    />

                </div>

                <div className="col-md-6">

                    <h2 className="mb-3">
                        {productoEncontrado.nombre}
                    </h2>

                    <p className="text-muted">
                        {productoEncontrado.descripcion}
                    </p>

                    <h3 className="my-4">
                        ${productoEncontrado.precio}
                    </h3>

                    <p>
                        <strong>Categoría:</strong> {productoEncontrado.categoria}
                    </p>

                    {
                        agregado
                            ? <p className="text-success fw-bold">Producto agregado al carrito</p>
                            : <ItemCount onAdd={onAdd} />
                    }

                </div>

            </div>

        </section>

    )
}


export default ItemDetail