import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../App";

//import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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

    const handleQuantityChange = (e) => {
        const value = e.target.value

        //allow empty string
        if (value === '') {
            setQuantity('')
            return
        }

        //otherwise converts the number back to 0 
            const num = Number(value)
            setQuantity(Math.max(0, num))
            return
        
    }
    return (
        <div className="item-card">
            <img className="card-image" src={imageLink} alt="" />
            <div className="description">
                <p className="product-name">{name}</p>
                <div className="price">${price}</div>
            </div>
            
            <div className="quantity-cart-button">

                <div className="quant-box">
                    <button className='minus' onClick={() => setQuantity(prev => {
                        if (prev === 0) return 0;
                        return prev - 1;
                        })}>-</button>
                    <form action="">
                        <input type="number" 
                               value={quantity} 
                               onChange={handleQuantityChange}
                               onBlur={() => setQuantity(prev => prev === '' ? 0 : prev)}
                               id="quantity" />
                    </form>
                    <button className='plus' onClick={() => setQuantity(prev => prev === '' ? 1 : prev + 1)}>+</button>
                </div>
                <button 
                    className='add-to-cart' 
                    onClick={handleAddToCart}
                    disabled={quantity === 0 || quantity === ''} //optional, disabled if quantity is 0
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
            </div>
                
        </div>
    )
}


export default ItemCard;