import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import { ListOfPeople } from './Components/ListOfPeople'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>First Project</h1>
    {/* <Counter></Counter> */}
    <ListOfPeople></ListOfPeople>
    </>
  )
}

export default App
