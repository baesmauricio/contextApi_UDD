import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/User/userContext'

export const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

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
                        <Link  to="/cart">Carrito</Link>
                    </li>
                    {
                        !user ? (
                            <li>
                                <Link  to="/login">Login</Link>
                            </li>
                        ) : (
                            <div>
                                <li>
                                    <Link to="/cart">{user.email}</Link>
                                </li>
                                <button className='logout-button' onClick={logout}>Logout</button>
                            </div>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}