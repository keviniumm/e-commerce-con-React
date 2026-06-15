import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

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

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const obtenerProductos = async () => {

            setLoading(true)

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

            setLoading(false)

        }

        obtenerProductos()

    }, [categoryId])

    if (loading) {
        return <h2>Cargando productos...</h2>
    }

    return (
        <section className="container mt-4">

            <div
                className="bg-dark text-white rounded p-5 mb-5 text-center shadow"
            >

                <h1 className="display-3 fw-bold">
                    Tech-Store
                </h1>

                <p className="lead mt-3">
                    Los mejores productos tecnológicos al mejor precio
                </p>

                <div className="mt-3">

                    <Link
                        className={`me-3 ${categoryId === "celulares"
                            ? "text-warning fw-bold"
                            : "text-secondary"
                            }`}
                        to="/category/celulares"
                    >
                        Celulares
                    </Link>

                    <Link
                        className={`me-3 ${categoryId === "notebooks"
                            ? "text-warning fw-bold"
                            : "text-secondary"
                            }`}
                        to="/category/notebooks"
                    >
                        Notekooks
                    </Link>

                    <Link
                        className={`me-3 ${categoryId === "accesorios"
                            ? "text-warning fw-bold"
                            : "text-secondary"
                            }`}
                        to="/category/accesorios"
                    >
                        Accesorios
                    </Link>
                    
                    <Link
                        className={`me-3 ${categoryId === "gaming"
                            ? "text-warning fw-bold"
                            : "text-secondary"
                            }`}
                        to="/category/gaming"
                    >
                        Gaming
                    </Link>



                </div>

            </div>

            {
                categoryId && (
                    <h2 className="mb-4">
                        Categoría: {categoryId}
                    </h2>
                )
            }

            <ItemList items={items} />

        </section>
    )
}

export default ItemLIstContainer