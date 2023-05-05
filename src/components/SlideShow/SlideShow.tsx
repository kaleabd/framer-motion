import {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { colors } from '../Squares/Squares'
import {wrap} from '@popmotion/popcorn'

const variants = {
    enter: direction => (
        {
            x: direction > 0 ? -1000 : 1000,
            opacity: 0
        }
    ) ,
    center: {
        x: 0,
        opacity: 1
    },
    exit: direction => (
        {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }
    )
}

const SlideShow = () => {
    const [[page,direction], setPage] = useState([0,0])
    

    const paginate = (direction: number) => {
        setPage([page + direction, direction])
    }   

    const index =  wrap(0, colors.length,page)
  return (
    <div style={{position: "relative", height: 400}}>
        <AnimatePresence custom={direction}>
            <motion.div
                key={page}
                variants={variants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                drag= "x"
                dragConstraints={{
                    left: 0,
                    right: 0
                }}
                dragElastic={1} //  drag elastic is used to change the strength of the resistance that signals a layer will bounce back when it is dragged beyond its dragConstraints
                onDragEnd={(e,{offset,velocity}) => {
                    if(offset.x > 400) {
                        paginate(1)
                    }else if (offset.x < -400){
                        paginate(-1)
                    }
                    console.log(offset.x)
                }}
                style={{
                    height: 400,
                    width: '100%',
                    background: colors[index],
                    position: "absolute",
                    left: 0,
                    top: 0,
                    
                }}
            >

            </motion.div>
        </AnimatePresence>
        <div style={{zIndex: 10, position: "absolute"}}>
            <button onClick={() => paginate(-1)}>{"<"}</button>
            <button onClick={() => paginate(1)}>{">"}</button>
        </div>
    </div>
  )
}

export default SlideShow