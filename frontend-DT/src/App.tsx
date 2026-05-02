import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const holaMundo = "Hola mundo desde tsx"
  return (
    <>
      <h1 className="font-black text-red-600 mt-10">
        holaMundo
      </h1>
    </>
  )
}

export default App
