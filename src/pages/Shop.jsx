import { Link } from "react-router";
import ItemCard from "../component/ItemCard";
import itemList from "../assets/Item-array";
import { CartContext } from "../App";

import { useState, useEffect } from "react";



const Shop = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            setItems(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching items:', error);
            setLoading(false);
        });
    }, []); //empty dependency array = fetch once on mount

    if (loading) {
        return (
            <div className="loading-panel">Loading</div>
        )
    }

    return (
        <div className="shop-container">
            {/* <div>Shop</div> */}
            <div className="card-container">
                {items.map((item) => {
                    return <ItemCard 
                                key={item.id}
                                name={item.title} 
                                imageLink={item.image}
                                price={item.price} />
                })}
                
            </div>
            
            <Link className="shop-footer" to='/'>Return Home</Link>
        </div>
        
    )
}

export default Shop;