import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">LOGO</div>
            <div className="navbar__items">
                <ul className="navbar__list">
                    <li>
                        <Link  to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link  to="/about">Acerca De</Link>
                    </li>
                    <li>
                        <Link  to="/product">Productos</Link>
                    </li>
                    <li>
                        <Link  to="/login">Login</Link>
                    </li>
                    <li>
                        <Link  to="/cart">Carrito</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}