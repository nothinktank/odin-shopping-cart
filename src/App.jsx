import { useState } from 'react'
import './App.css'
import './style.css'
import { Link } from 'react-router'
import Navbar from './Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
      <div>
        {/* <h1>my shop</h1> */}
        <Navbar></Navbar>
        
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
