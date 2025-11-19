import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartItemCard = ({name, imageLink, quantity, price}) => {
    const { updateCart, removeItem } = useContext(CartContext)
    

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
                
                <div className="cart-item-price">${price}/Unit</div>

                {/* <div >quantity: {quantity}</div> */}
            <div className="update-cart-box">
                <div className="quantity-spinner-container">
                    <button className="cart-plus" onClick={() => handleUpdateCart("-")}>-</button>
                        <form action="">
                            <input type="number" value={quantity} onChange={(e) => updateCart({
                                itemName: name, 
                                imageLink: imageLink, 
                                quantity: quantity
                            }, Math.max(0,e.target.value))
                            } id="quantity" />
                        </form>
                    <button className="cart-minus" onClick={() => handleUpdateCart("+")}>+</button>
                </div>
                
                <button className='trashcan' onClick={() => removeItem(name)}><FontAwesomeIcon icon={faTrashCan} /></button>
                
            </div>
            </div>
            
        
            
        </div>

    )
}


export default CartItemCard;