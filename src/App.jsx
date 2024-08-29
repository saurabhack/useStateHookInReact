import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router , Routes,Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import String from './components/String'
import Array from './components/Array'
import Object from './components/Object'
import ArrayObject from './components/ArrayObject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Counter/>}/>
        <Route path='/string' element={<String/>}/>
        <Route path='/array' element={<Array/>}/>
        <Route path='/object' element={<Object/>}/>
        <Route path='/arrayobject' element={<ArrayObject/>}/>
        
      </Routes>
    </Router>
    
    </>
  )
}

export default App
