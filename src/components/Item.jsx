import { Link } from "react-router-dom"

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Item = ({ producto }) => {

    return (

        <Card
            className="shadow h-100"
            style={{
                width: "18rem",
                borderRadius: "15px"
            }}
        >

            <Card.Img
                variant="top"
                src={producto.imagen}
                alt={producto.nombre}
                style={{
                    height: "220px",
                    objectFit: "contain"
                }}
            />

            <Card.Body className="d-flex flex-column">

                <Card.Title>
                    {producto.nombre}
                </Card.Title>

                <Card.Text>
                    {producto.descripcion}
                </Card.Text>

                <Card.Text>
                    <strong>${producto.precio}</strong>
                </Card.Text>

                <Card.Text>
                    {producto.categoria}
                </Card.Text>

                <Button
                    as={Link}
                    to={`/item/${producto.id}`}
                    variant="dark"
                    className="mt-auto"
                >
                    Ver detalle
                </Button>

            </Card.Body>

        </Card>

    )

}

export default Item