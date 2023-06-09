import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './Accordion.css'

// to make this component reusable we can pass for example {title, description} in the props
// and use it accordingly

const variants = {
    open:{
        opacity: 1,
        height: 'auto'
    },
    closed: {
        opacity: 0,
        height: 0
    }
}
const Accordion = () => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(prev => !prev)
    }
  return (
  
        <div>
            <h2 onClick={handleShow}>The Heading</h2>
            <AnimatePresence>
            {
                show && (
                    <motion.div
                    variants={variants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    style={{
                        overflow: 'hidden',
                    }}
                    >
                        <p className='para'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quos, maxime dolores ea vel ad.
                            Vero ut iure vitae. Placeat veniam voluptate exercitationem rem obcaecati dicta pariatur,
                            rerum maiores magni.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quos, maxime dolores ea vel ad.
                            Vero ut iure vitae. Placeat veniam voluptate exercitationem rem obcaecati dicta pariatur,
                            rerum maiores magni.
                        </p>
                    </motion.div>

                )
            }
            </AnimatePresence>
        </div>
    
  )
}

export default Accordion