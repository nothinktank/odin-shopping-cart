import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../App";

const ItemCard = ({name, imageLink, price}) => {
    const {addToCart, cartItems} = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart({
                itemName: name, 
                imageLink: imageLink, 
                quantity: quantity
            });
            setQuantity(0) //reset quantity to 0
        }
        
    }
    return (
        <div className="item-card">
            <img className="card-image" src={imageLink} alt="" />
            <div className="description">
                <p className="product-name">{name}</p>
                <div className="price">${price}</div>
            </div>
            
            
                <div className="quant-box">
                    <button onClick={() => setQuantity(prev => {
                        if (prev === 0) return 0;
                        return prev - 1;
                        })}>-</button>
                    <form action="">
                        <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(0, Number(e.target.value))) } id="quantity" />
                    </form>
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}


export default ItemCard;