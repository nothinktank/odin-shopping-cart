import { useContext } from "react";
import { Link } from "react-router"
import { CartContext } from "./App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const { cartItems } = useContext(CartContext);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="nav">
            <Link to="/" className="site-title">Home</Link>
            <ul className="navbar-list">
                <li>
                    <Link className="links" to='Shop'>Shop</Link>
                </li>
                <li>
                    
                    <Link className="cart-link" to="Cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                            {
                                totalItems > 0 && (
                                    <span className="cart-bubble">{totalItems}</span>
                                )
                            }
                    </Link>
                </li>
            </ul>
            
            
        </nav>
    )
}

export default Navbar;