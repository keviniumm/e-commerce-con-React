import { useContext } from "react"
import { useParams } from "react-router-dom"

import products from '../data/products'

import ItemCount from '../components/ItemCount'

import { CartContext } from "../context/CartContext"


const ItemDetail = () => {

    const { id } = useParams()

    const { cart, setCart } = useContext(CartContext)


    const productosEcontrados = products.find(producto => producto.id == id)


    if (!productosEcontrados) {
        return <h2>Producto no encontrado</h2>
    }

    const onAdd = (cantidad) => {

        const productoExistente = cart.find(
            producto => producto.id === productosEcontrados.id
        )

        if (productoExistente) {

            const carritoActualizado = cart.map(producto => {

                if (producto.id === productosEcontrados.id) {

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
                ...productosEcontrados,
                cantidad
            }

            setCart([...cart, productoAgregado])

        }


    }


    return (

        <section>

            <img
                src={productosEcontrados.imagen}
                alt={productosEcontrados.nombre}
            />

            <h2>{productosEcontrados.nombre}</h2>

            <p>{productosEcontrados.descripcion}</p>

            <p>Precio: ${productosEcontrados.precio}</p>

            <p>Categoria: {productosEcontrados.categoria}</p>

            <ItemCount onAdd={onAdd} />

        </section>
    )
}


export default ItemDetail