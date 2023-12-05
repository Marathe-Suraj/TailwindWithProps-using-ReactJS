import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Suraj",
    age: 24
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <div className="Cards d-flex-inline">
      <Card username="Suraj" btnText="Click Me" />
      <Card username="Marathe" btnText="Visit Here"/>
      </div>      
    </>
  )
}

export default App