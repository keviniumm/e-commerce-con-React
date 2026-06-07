import { useState } from "react";

const ItemCount = ({ onAdd }) => {

    const [count, setCount] = useState(1)

    const incrementar = () => {
        setCount(count + 1)
    }

    const decrementar = () => {

        if (count > 1) {
            setCount(count - 1)
        }

    }

    const manejarAgregar = () => {
        onAdd(count)
    }

    return (
        <div>

            <button onClick={decrementar}>-</button>

            <span>{count}</span>

            <button onClick={incrementar}>+</button>

            <button onClick={manejarAgregar}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount