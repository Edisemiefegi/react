import { useState } from 'react'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  let Obj = {
    name: 'edi',
    age: 25,
    address: {
      city: 'yen',
      state: 'bayelsa'
    }
  }

  return (
    <>
  <h1 className="text-3xl p-3 bg-green-600 font-bold">
      Vite with tailwind !
    </h1> 
    <Card username=" edi" />
    <Card  myObj={Obj} />
    <Card username=" apple" />


   
    
     </>
  )
}

export default App
