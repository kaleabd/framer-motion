import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
type ModalProps = {
  toggle: boolean;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ toggle, children }) => {
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
                {children}
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
