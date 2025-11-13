import { useState } from 'react'
import './App.css'
import './style.css'
import './styles/Item-card.css'
import './styles/Cart-item-card.css'
import './styles/Card-container.css'
import { Link, Route, Routes, Outlet } from 'react-router'
import Navbar from './Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

import { useContext, createContext } from 'react'

// array is the list of items to be populated under cart page
export const CartContext = createContext([])

function App() {
  // const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

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

  const updateCart = (item, operation) => {
    // if (operation === "+") {
    //   //if increasing quantity of cart item
    //   setCartItems((prev) => {
    //     return prev.map((i) => i.itemName === item.itemName ? {...i, quantity: i.quantity + 1} : i)
    //   })
    // } else {
    //   //if decreasing quantity of cart item
    //   setCartItems((prev) => {
    //     return prev.map((i) => i.itemName === item.itemName ? {...i, quantity: Math.max(0, i.quantity - 1) } : i)
    //   })
    // }

    // setCartItems((prev) => {
    //   prev.map((i) => {
    //     if (i.itemName === item.itemName) {
    //       const newQuantity = operation === "+" ? (i.quantity + 1) : (Math.max(0, i.quantity - 1))
    //       return { ...i, quantity: newQuantity }
    //     }
    //     return i;
    //   }).filter(i => i.quantity > 0); //remove items with 0 quantity
    // })

    setCartItems((prev) => 
      prev.map((i) => {
        if (i.itemName === item.itemName) {
          let newQuantity;
          if (operation === '+') {
            newQuantity = i.quantity + 1;
          } else if (operation === '-') {
            newQuantity = Math.max(0, i.quantity - 1) ;
          } else if (typeof(operation) === "number") {
            newQuantity = Math.max(0, operation);
          }
          return {...i, quantity: newQuantity}
        }
        return i
      }).filter(i => i.quantity > 0)
      
    )


  }

  return (
    // <>
    <CartContext.Provider value={{cartItems, addToCart, updateCart}}>
      <div>
        {/* <h1>my shop</h1> */}

        <Navbar></Navbar>
          <Outlet />
          
          {/* <h1>this is home</h1> */}
          {/* <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/cart' element={<Cart />} />
          </Routes> */}
        
          {/* <ul>
          <li>
              <Link to='Shop'>Shop</Link>
          </li>
          <li>
              <Link to="Cart">Cart</Link>
          </li>
          </ul> */}
        
      </div>
      </CartContext.Provider>
    // </>
  )
}

export default App
