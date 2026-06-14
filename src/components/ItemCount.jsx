import { useState } from "react"

import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"

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

        <div className="mt-4">

            <ButtonGroup className="mb-3">

                <Button
                    variant="outline-dark"
                    onClick={decrementar}
                >
                    -
                </Button>

                <Button
                    variant="light"
                    disabled
                >
                    {count}
                </Button>

                <Button
                    variant="outline-dark"
                    onClick={incrementar}
                >
                    +
                </Button>

            </ButtonGroup>

            <br />

            <Button
                variant="dark"
                onClick={manejarAgregar}
            >
                Agregar al carrito
            </Button>

        </div>

    )

}

export default ItemCount