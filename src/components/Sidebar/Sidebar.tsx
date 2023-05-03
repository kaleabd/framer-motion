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
        x: "-20%",
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
    <>
    <motion.div
    variants={variants}
    initial="closed"
    animate={isNavopen ? "open" : "closed"}
    exit="closed"
    className={`navbar-container`}
    >
        <div className='list'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">List</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button onClick={setNavOpen}>Close</button>
        </div>
    </motion.div>
    
    </>
  )
}

export default Sidebar