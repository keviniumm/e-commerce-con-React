import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import products from "../data/products"
import ItemList from "./ItemList"


const ItemLIstContainer = ({ greeting }) => {

    const { categoryId } = useParams()

    const [items, setItems] = useState([])

    useEffect(() => {

        const productosFiltrados = categoryId
            ? products.filter(producto => producto.categoria === categoryId)
            : products

        setItems(productosFiltrados)

    }, [categoryId])


    return (
        <section>

            <h1>{greeting}</h1>

            {
                categoryId && (
                    <h2>Categoria: {categoryId}</h2>
                )
            }

            <ItemList items={items} />

        </section>
    )
}

export default ItemLIstContainer