import {motion} from 'framer-motion'
import { useState } from 'react'
import Card from "./components/Card/Card"
import Navbar from "./components/Navbar/Navbar"
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  const [isToggled, setToggled] = useState(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }
  const handleToggle = () => {
    setToggled(prev => prev ? 0 : 1)
  }
  return (
    <motion.div
    initial={{
       opacity: 0,
       x: 100,
       y: 100
      }}
    animate={{ 
      opacity: 1,
      x: 0,
      y: 0
     }}
    transition = {{ duration: 1 }}
    className="app-container">
      <Navbar />
      <motion.h2

      animate={{
        opacity: isToggled,
        x: value + "px"
      }}
      >
        test text
      </motion.h2>
      <input type="range" 
       max="100"
       min="-100"
      value={value}
      onChange={handleChange}
      />
      <button onClick={handleToggle}>Show</button>
      <Card />
    </motion.div>
  )
}

export default App