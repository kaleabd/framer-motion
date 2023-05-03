import {motion} from 'framer-motion'
import './Sidebar.css'

const variants = {
    open:{
        opacity: 1,
        x: 0,
        y: 0
    },
    closed: {
        opacity: 0,
        x: -250,
        y: 0

    }
}

interface SideProp {
    isNavopen: boolean
    setNavOpen: () => void
}
const Sidebar = ({isNavopen, setNavOpen}: SideProp) => {
    console.log(isNavopen)
  return (

    <motion.div
    variants={variants}
    initial="closed"    
    animate={isNavopen ? "open" : "closed"}
    exit="closed"
    transition={{ damping: 300 }}
    className={`navbar-container`}
    >
        {
            isNavopen && (
                <div>
                    <h2>Sidebar</h2>
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ul>
                    <button onClick={setNavOpen}>Close</button>
                </div>
            )
        }

    </motion.div>
  )
}

export default Sidebar