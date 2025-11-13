import { Link } from "react-router";
import { useContext, useState } from "react";
import { CartContext } from "../App";
import CartItemCard from "../component/CartItemCard";

const Cart = () => {
    const { cartItems, updateCart } = useContext(CartContext) //use context provided to render the cart summary
    
    return (
        <>
            <div>Your Cart</div>
            {/* display cart items here with quantity */}
            {
            (!cartItems || cartItems.length === 0) ? <div>Your cart is empty</div> :
            //if cart isn't empty, render cart items below
            (
                cartItems.map((item) => {
                    return (
                        <CartItemCard 
                            key={item.itemName}
                            name={item.itemName}
                            quantity={item.quantity}
                            imageLink={item.imageLink}     
                        />
                        
                    )
                })
            )
            }
            <Link to='/'>Return Home</Link>
        </>
    )
}

export default Cart;