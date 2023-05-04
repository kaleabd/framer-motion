import './Card.css'
import Black from '../../assets/black.png'
import Blue from '../../assets/blue.png'
import Green from '../../assets/green.png'
import Purple from '../../assets/purp.png'
import { motion } from 'framer-motion'


function Card() {
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
        <motion.div
        whileHover={{scale: 1.1}}
        className='container'>
            <img src={Green} alt="" />
            <h2>some texts here</h2>
        </motion.div>
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