import Home from './pages/Home/Home'
import About from './pages/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
const App = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </Router>
      </motion.div>
    </AnimatePresence>
  )
}

export default App