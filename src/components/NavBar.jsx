import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav>

            <h2>Tech-Store</h2>


            <ul>

                <li>
                    <Link to='/category/celulares'>
                        Celulares
                    </Link>
                </li>

                <li>
                    <Link to='/category/notebooks'>
                        Notebooks
                    </Link>
                </li>

                <li>
                    <Link to='/category/accesorios'>
                        Accesorios
                    </Link>
                </li>

                <li>
                    <Link to='/category/gaming'>
                        Gaming
                    </Link>
                </li>
            </ul>

            <CartWidget />

        </nav>
    )
}

export default NavBar