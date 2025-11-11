import { useState } from "react";

const ItemCard = () => {
    const [quantity, setQuantity] = useState(0)
    return (
        <div className="item-card">
            <h2 className="product-name">Product Name</h2>
            <img src="https://shoplineimg.com/5f680caef39524001ca7be41/68e086852a1c4d00164bfca7/800x.webp?source_format=JPG" alt="" />

                <div className="quant-box">
                    <button>-</button>
                    <form action="">
                        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value)) } id="quantity" />
                    </form>
                    <button>+</button>
                </div>
        </div>
    )
}


export default ItemCard;