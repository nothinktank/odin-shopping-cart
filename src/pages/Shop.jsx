import { Link } from "react-router";
import ItemCard from "../component/ItemCard";

const Shop = () => {
    return (
        <>
            <div>Shop</div>
            <div className="card-container">
                <ItemCard></ItemCard>
            </div>
            
            <Link to='/'>Return Home</Link>
        </>
        
    )
}

export default Shop;