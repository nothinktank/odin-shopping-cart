import { useEffect, useState } from 'react'

import './App.css'
import './style.css'
import './styles/Item-card.css'
import './styles/Cart-item-card.css'
import './styles/Card-container.css'
import './styles/Cart.css'
import './styles/Cart-summary.css'
import './styles/Cart-summary-item.css'

import { Link, Route, Routes, Outlet } from 'react-router'
import Navbar from './Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

import { useContext, createContext } from 'react'

// array is the list of items to be populated under cart page
export const CartContext = createContext([])

function App() {
  // initialize cart from localStorage, or empty array if nothing saved
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  //save to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  //add items to cart function
  //newItem is the item object
  const addToCart = (newItem) => {
    //check if new item already exist
    setCartItems((prev) => {
      const existingItem = prev.find(i => i.itemName === newItem.itemName)

      if (existingItem) {
        // add the newItem quantity to existing item quantity if newItem already exists in the context array
        return prev.map((i) => i.itemName === newItem.itemName ? {...i, quantity: i.quantity + newItem.quantity } : i)
      } else {
        return [...prev, newItem]
      }
    })
  }

  const removeItem = (itemNameToBeRemoved) => {
    setCartItems((prev) => {
      return prev.filter((i) => i.itemName != itemNameToBeRemoved);
    })
  }

  const updateCart = (item, operation) => {

    setCartItems((prev) => 
      prev.map((i) => {
        if (i.itemName === item.itemName) {
          let newQuantity;
          if (operation === '+') {
            newQuantity = i.quantity + 1;
          } else if (operation === '-') {
            newQuantity = Math.max(1, i.quantity - 1) ;
          } else if (typeof(operation) === "number") {
            newQuantity = Math.max(1, operation);
          } 
          return {...i, quantity: newQuantity}
        }
        return i
      }).filter(i => i.quantity > 0)
      
    )
  }

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  }

  return (
    // <>
    <CartContext.Provider value={{cartItems, addToCart, updateCart, clearCart, removeItem}}>
      <div>
        {/* <h1>my shop</h1> */}

        <Navbar></Navbar>
          <Outlet />
        
      </div>
      </CartContext.Provider>
    // </>
  )
}

export default App
