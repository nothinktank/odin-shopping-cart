import { Link } from "react-router";
import { useContext, useState } from "react";
import { CartContext } from "../App";
import CartItemCard from "../component/CartItemCard";
import CartSummary from "../component/CartSummary";

const Cart = () => {
    const { cartItems, updateCart } = useContext(CartContext) //use context provided to render the cart summary
    
    return (
        <div className="cart-container">
            {/* <div>Your Cart</div> */}
            <div className="main-section">
                <div className="cart-items-list">
                    {  
                (!cartItems || cartItems.length === 0) ? 
                // empty cart rendered here
                <div className="empty-cart-container">Your cart is empty</div> 
                
                
                :
                //if cart isn't empty, render cart items below
                (
                    
                    cartItems.map((item) => {
                        return (
                            <CartItemCard 
                                // className='cart-item'

                                key={item.itemName}
                                name={item.itemName}
                                quantity={item.quantity}
                                imageLink={item.imageLink}     
                            />
                        )
                    })
                )
            }
                </div>
                
            <div className="summary-container">
            <CartSummary />
            </div>

            </div>
            
            
            {/* display cart items here with quantity */}
            <div className="footer"><Link to='/'>Return Home</Link></div>
            
        </div>
    )
}

export default Cart;