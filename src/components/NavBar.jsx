import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <nav>

            <h2>Tech-Store</h2>


            <ul>
                <li>Celulares</li>
                <li>Notebook</li>
                <li>Accesorios</li>
                <li>Gamming</li>
                <li>Accesorios</li>
            </ul>

            <CartWidget/>

        </nav>
    )
}

export default NavBar