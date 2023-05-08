import Navbar from '../../components/Navbar/Navbar'
import SlideShow from '../../components/SlideShow/SlideShow'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: -100}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: 100}}
    >
        <Navbar />
        <h2>slide show, fashion show! xD</h2>
        <SlideShow />
    </motion.div>
    
  )
}

export default About