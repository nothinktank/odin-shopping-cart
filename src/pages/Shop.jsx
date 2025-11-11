import { Link } from "react-router";
import ItemCard from "../component/ItemCard";
import itemList from "../assets/Item-array";

const Shop = () => {
    return (
        <>
            <div>Shop</div>
            <div className="card-container">
                {itemList.map((item) => {
                    return <ItemCard 
                                key={item.itemName}
                                name={item.itemName} 
                                imageLink={item.imageLink} />
                })}
                
            </div>
            
            <Link to='/'>Return Home</Link>
        </>
        
    )
}

export default Shop;