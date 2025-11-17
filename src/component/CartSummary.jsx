import { useContext } from "react";
import { CartContext } from "../App";
import CartSummaryItem from "./CartSummaryItem";

const CartSummary = () => {
    const {cartItems} = useContext(CartContext)

    //calculate the total price of each items in the cartItems array
    //or can do a calculated property in the array 
    let totalPrice = cartItems.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);
    

    return (
        <div className="cart-summary-box">
            <div>Summary</div>
            <div>
                {/* render cart items here */}
                {cartItems.map((item) => {
                    return (
                            <CartSummaryItem 
                                key={item.itemName}
                                itemName={item.itemName}
                                price={item.price}
                            />
                        
                    )
                })}
            </div>
            <div>Total: ${totalPrice}</div>
        </div>
    )
}

export default CartSummary;