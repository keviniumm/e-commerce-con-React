import Item from "./Item"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const ItemList = ({ items }) => {

    return (

        <Container className="mt-4">

            <Row>

                {
                    items.map(producto => (

                        <Col
                            key={producto.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className="d-flex justify-content-center mb-4"
                        >

                            <Item producto={producto} />

                        </Col>

                    ))
                }

            </Row>

        </Container>

    )

}

export default ItemList