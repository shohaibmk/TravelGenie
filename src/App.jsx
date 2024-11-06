import { useState } from 'react'
import { Button } from "@/components/ui/button"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <h2>Ai Powered Travel Planner</h2>
     <Button>Make Plans</Button>
     </div>
    </>
  )
}

export default App
