import { useState } from 'react'
import './App.css'
import { Link } from 'react-router'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>my shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
