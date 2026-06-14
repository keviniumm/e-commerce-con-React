import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const NavBar = () => {

    return (

        <Navbar bg="dark" data-bs-theme="dark" expand="lg">

            <Container>

                <Navbar.Brand as={Link} to="/">
                    Tech-Store
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/category/celulares">
                            Celulares
                        </Nav.Link>

                        <Nav.Link as={Link} to="/category/notebooks">
                            Notebooks
                        </Nav.Link>

                        <Nav.Link as={Link} to="/category/accesorios">
                            Accesorios
                        </Nav.Link>

                        <Nav.Link as={Link} to="/category/gaming">
                            Gaming
                        </Nav.Link>

                    </Nav>

                    <CartWidget />

                </Navbar.Collapse>

            </Container>

        </Navbar>

    )

}

export default NavBar