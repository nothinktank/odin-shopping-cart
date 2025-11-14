import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../App";

const CartItemCard = ({name, imageLink, quantity}) => {
    const { updateCart } = useContext(CartContext)
    

    const handleUpdateCart = (operation) => {
        if (quantity > 0) {
            updateCart({
                itemName: name, 
                imageLink: imageLink, 
                quantity: quantity
            }, operation)
            // setQuantity(0) //reset quantity to 0
        }
        
    }
    return (
        <div className="cart-item-card">
            
            <img className="cart-image" src={imageLink} alt="" />
            
            <div className="item-info">
                <div className="cart-item-name">{name}</div>
                
                {/* <div >quantity: {quantity}</div> */}
            <div className="cart-quant-box">
                <button onClick={() => handleUpdateCart("-")}>-</button>
                <form action="">
                    <input type="number" value={quantity} onChange={(e) => updateCart({
                    itemName: name, 
                    imageLink: imageLink, 
                    quantity: quantity
                }, Math.max(0,e.target.value))
                    } id="quantity" />
                </form>
                <button onClick={() => handleUpdateCart("+")}>+</button>
                
            </div>
            </div>
            
        
            
        </div>

        // <div className="item-card">
        //     <h2 className="product-name">{name}</h2>
        //     <img src={imageLink} alt="" />

        //         <div className="quant-box">
        //             <button onClick={() => setQuantity(prev => {
        //                 if (prev === 0) return 0;
        //                 return prev - 1;
        //                 })}>-</button>
        //             <form action="">
        //                 <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(0, Number(e.target.value))) } id="quantity" />
        //             </form>
        //             <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        //         </div>
        //         <button onClick={handleAddToCart}>Add to Cart</button>
        // </div>
    )
}


export default CartItemCard;