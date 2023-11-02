import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './assets/Components/Device/Device'
import Watch from './assets/Components/Watch/Watch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Device name="iphone" price="700000"></Device>
    <Device name="phone" price="5000"></Device>
   
    <Watch></Watch>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
     
      
      
    </>
  )
}

export default App
