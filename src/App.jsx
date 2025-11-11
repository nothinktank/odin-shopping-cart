import { useState } from 'react'
import './App.css'
import './style.css'
import './styles/Item-card.css'
import './styles/Card-container.css'
import { Link, Route, Routes, Outlet } from 'react-router'
import Navbar from './Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'



function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
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
    // </>
  )
}

export default App
