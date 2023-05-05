import './Card.css'
import Black from '../../assets/black.png'
import Blue from '../../assets/blue.png'
import Green from '../../assets/green.png'
import Purple from '../../assets/purp.png'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function Card() {
    // USE MOTION VALUE'
// =>  is a React hook that is used to create a mutable,
//     animatable value that can be used to drive animations and update the
//     properties of motion components.
  const x = useMotionValue(0)
  const opacity = useTransform(x,[-200,0,200],[0,1,0])
  const [isCardActive, setIsCardActive] = useState(true)


  return (
    <div className='main-container'>
        <motion.div
        whileHover={{
            scale: [1.02, 0.8, 1.2],
        }}
        whileTap={{ background: "#f37f14"} }
        className='container'>
            <img src={Black} alt="" />
            <h2>some texts here</h2>
        </motion.div>
        <motion.div 
        drag
        dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100,
        }}
        className='container'>
            <img src={Blue} alt="" />
            <h2>some texts here</h2>
        </motion.div>
        
        <AnimatePresence>
        {isCardActive && 
            <motion.div 
                exit={{height: 0, overflow: "hidden", opacity: 0}}
                transition={{
                    opacity:{
                        duration: 0
                    }
                }}
            >
                <h2>Drag to the right dismiss! the below card</h2>
                <motion.div
                onDragEnd={(event,info) => {  
                    if ( Math.abs(info.point.x) > 200){
                        setIsCardActive(false)
                    }
                }}
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                style={{
                    x,
                    opacity
                }}
                className='container'>
                    <img src={Green} alt="" />
                    <h2>some texts here</h2>
                </motion.div>
            </motion.div>
            }
            </AnimatePresence>
        <motion.div
        whileHover={{scale: 1.1}}
        className='container'>
            <img src={Purple} alt="" />
            <h2>some texts here</h2>
        </motion.div>

    </div>
  )
}

export default Card