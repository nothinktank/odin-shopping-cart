import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../App";

//context provider is here 

const Cart = () => {
    const { cartItems } = useContext(CartContext) //use context provided to render the cart summary
    return (
        <>
            <div>Your Cart</div>
            {/* display cart items here with quantity */}
            {
            (cartItems.length === 0) ? <div>Your cart is empty</div> :
            
            (
                cartItems.map((item) => {
                    return (
                        // insert cart component here later
                        <div>
                            <div>{item.itemName}</div>
                            <div>quantity: {item.quantity}</div>
                        </div>
                    )
                })
            )
            }



            <Link to='/'>Return Home</Link>
        </>
    )
}

export default Cart;