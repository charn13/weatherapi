import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
 import Temp from './components/Temp.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Temp /> 
    </>
  )
}

export default App
