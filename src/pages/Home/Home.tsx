import {motion} from 'framer-motion'
import { useState } from 'react'
import Card from '../../components/Card/Card'
import './Home.css'
import Modal from '../../components/Modal/Modal'
import Green from '../../assets/green.png'
import Accordion from '../../components/Accordion/Accordion'
import Sidebar from '../../components/Sidebar/Sidebar'
import Menu from '../../assets/menu.svg'
import Squares from '../../components/Squares/Squares'
import SlideShow from '../../components/SlideShow/SlideShow'
import Navbar from '../../components/Navbar/Navbar'

/*
 => By default all transforms are 3d
 => Yous should only animate transforms and opacity
 => Translate shortcuts: x,y,z
 => Translate: translateX, translateY, translateZ
 => Scale: scaleX, scaleY, scaleZ
 => Rotate: rotate, rotateX, rotateY, rotateZ
 => Skew: skewX, skewY, skewZ
*/


function Home() {
  const [value, setValue] = useState(0)
  const [isToggled, setToggled] = useState(false)
  const [isNavopen, setisNavopen] = useState(false)

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }
  const handleToggle = () => {
    setToggled(prev => !prev)
  }
  const handleNavopen = () => {
    setisNavopen(prev => !prev)
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
      {/* <Navbar /> */}
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <img src={Menu} alt="" style={{ width: "70px"}} onClick={handleNavopen}/>
        <Navbar />
      </div>
      <motion.h2
        initial={{x: 0}}
        animate={{x:value + "px"}}
      >
        test text
      </motion.h2>
      <input type="range" 
       max="100"
       min="-100"
      value={value}
      onChange={handleChange}
      />
      <button onClick={handleToggle}>Show Modal Window</button>
      {/* Position transition */}
      <Squares />
      {/* slideshow */}
      <h2>slide show slide to swipe the slides!</h2>
      <SlideShow />
      {/* accordion */}
      <Accordion />
      {/* modal */}
      <Modal toggle={isToggled} ontoggle={handleToggle}>
        <div className='container'>
            <img src={Green} alt="" />
            <h2>this is the modal window</h2>
        </div>
      </Modal>
      {/* keyframes */}
      <motion.div
      animate = {{
        opacity: [0, 1, 0, 1]
      }}
      transition={{
        duration: 5, time: [0, 0.2, 0.3, 1]
      }}
      >
          <h2>
            I'M THE ANIMATION BABY!
          </h2>
      
      </motion.div>
      {/* sidebar */}
      <Sidebar isNavopen={isNavopen} setNavOpen= {handleNavopen}/>
      {/* the cards */}
      <Card />
    </motion.div>
  )
}

export default Home