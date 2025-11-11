import { useState } from "react";

const ItemCard = ({name, imageLink}) => {
    const [quantity, setQuantity] = useState(0)
    return (
        <div className="item-card">
            <h2 className="product-name">{name}</h2>
            <img src={imageLink} alt="" />

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
        </div>
    )
}


export default ItemCard;