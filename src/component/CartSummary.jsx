import { useContext } from "react";
import { CartContext } from "../App";

const CartSummary = () => {
    const {cartItems} = useContext(CartContext)

    //calculate the total price of each items in the cartItems array
    //or can do a calculated property in the array 
    let totalPrice = cartItems.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);
    

    return (
        <div className="cart-summary-box">
            <div>Summary</div>
            <div>
                Cart items
                {/* render cart items here */}
                {cartItems.map((item) => {
                    return (
                        <div>
                            <div>{item.itemName}</div>
                            <div>${item.price}</div>
                        </div>
                    )
                })}
            </div>
            <div>Total: ${totalPrice}</div>
        </div>
    )
}

export default CartSummary;