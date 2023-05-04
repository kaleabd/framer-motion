import {motion} from 'framer-motion'
import './Sidebar.css'

const variants = {
    open:{
        opacity: 1,
        x: 0,
    },
    closed: {
        opacity: 0,
        x: -300,

    }
}

const liVariants = {
    open: {y:0, opacity: 1, transition: {delay: .2}},
    closed: {y: -20, opacity: 0},
}

interface SideProp {
    isNavopen: boolean
    setNavOpen: () => void
}
const Sidebar = ({isNavopen, setNavOpen}: SideProp) => {
    console.log(isNavopen)

    const links = ['Items1', 'Items2', 'Items3']
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

                        {
                            links.map((link, index) => {
                                return (
                                    <motion.li
                                    variants={liVariants}
                                    key={index}
                                    >
                                        {link}
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                    <button onClick={setNavOpen}>Close</button>
                </div>
            )
        }

    </motion.div>
  )
}

export default Sidebar