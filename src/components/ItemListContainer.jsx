import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import {
    collection,
    getDocs,
    query,
    where
} from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

import ItemList from "./ItemList"


const ItemLIstContainer = ({ greeting }) => {

    const { categoryId } = useParams()

    const [items, setItems] = useState([])

    useEffect(() => {

        const obtenerProductos = async () => {

            const productsRef = categoryId
                ? query(
                    collection(db, "products"),
                    where("categoria", "==", categoryId)
                )
                : collection(db, "products")

            const snapshot = await getDocs(productsRef)




            const productos = snapshot.docs.map(doc => ({

                id: doc.id,
                ...doc.data()

            }))

            setItems(productos)

        }

        obtenerProductos()

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