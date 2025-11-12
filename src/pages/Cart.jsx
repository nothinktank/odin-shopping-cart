import { Link } from "react-router";
import { useContext, useState } from "react";
import { CartContext } from "../App";

//context provider is here 

const Cart = () => {
    const { cartItems, updateCart } = useContext(CartContext) //use context provided to render the cart summary
    // const [operation, setOperation] = useState(null)
    
    return (
        <>
            <div>Your Cart</div>
            {/* display cart items here with quantity */}
            {
            (!cartItems || cartItems.length === 0) ? <div>Your cart is empty</div> :
            
            (
                cartItems.map((item) => {
                    return (
                        // insert cart component here later
                        <div key={item.itemName}>
                            <div>{item.itemName}</div>
                            <div>quantity: {item.quantity}</div>
                            <div className="quant-box">
                                <button onClick={() => updateCart(item, "+")}>+</button>
                                <form action="">
                                    <input type="number" value={item.quantity} onChange={(e) => updateCart(item, Math.max(0,e.target.value))
                                      } id="quantity" />
                                </form>
                                <button onClick={() => updateCart(item, "-")}>-</button>
                            </div>
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