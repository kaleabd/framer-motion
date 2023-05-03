import {motion} from 'framer-motion'
import { useState } from 'react'
import Card from "./components/Card/Card"
import Navbar from "./components/Navbar/Navbar"
import './App.css'
import Modal from './components/Modal/Modal'
import Green from './assets/green.png'

function App() {
  const [value, setValue] = useState(0)
  const [isToggled, setToggled] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }
  const handleToggle = () => {
    setToggled(prev => !prev)
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
      <h2>
        test text
      </h2>
      <input type="range" 
       max="100"
       min="-100"
      value={value}
      onChange={handleChange}
      />
      <button onClick={handleToggle}>Show</button>
      <Modal toggle={isToggled} ontoggle={handleToggle}>
        <div className='container'>
            <img src={Green} alt="" />
            <h2>this is the modal window</h2>
        </div>
      </Modal>
      <Card />
    </motion.div>
  )
}

export default App