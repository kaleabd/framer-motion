import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Modal.css'
type ModalProps = {
  toggle: boolean;
  ontoggle: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ toggle,ontoggle, children }) => {
  return (
    <AnimatePresence>
      {toggle && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit={{opacity: 0}}
        >
            <motion.div 
                initial={{ y: 50 }}
                animate = {{ y: 0 }}
                exit={{y: 30}}
                className="modal"
            >
                <button onClick={ontoggle}>Close</button>
                {children}
            </motion.div>
            <div className='overlay'></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
