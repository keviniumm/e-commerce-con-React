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


    }


    return (

        <section>

            <img
                src={productoEncontrado.imagen}
                alt={productoEncontrado.nombre}
            />

            <h2>{productoEncontrado.nombre}</h2>

            <p>{productoEncontrado.descripcion}</p>

            <p>Precio: ${productoEncontrado.precio}</p>

            <p>Categoria: {productoEncontrado.categoria}</p>

            <ItemCount onAdd={onAdd} />

        </section>
    )
}


export default ItemDetail