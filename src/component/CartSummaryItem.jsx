const CartSummaryItem = ({itemName, price}) => {
    return(
        <div className="cart-summary-item" >
            <div>{itemName}</div>
            <div className="summary-item-price">${price}</div>
        </div>
    )
}

export default CartSummaryItem;