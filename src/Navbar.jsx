import { Link } from "react-router"


const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Home</Link>
            <ul>
                <li>
                    <Link className="links" to='Shop'>Shop</Link>
                </li>
                <li>
                    <Link className="links" to="Cart">Cart</Link>
                </li>
            </ul>
            
            
        </nav>
    )
}

export default Navbar;