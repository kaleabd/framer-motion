import React from 'react';


import About from './components/Aboutus/About';
import App from './App';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Router>
);

export default AppRouter;
