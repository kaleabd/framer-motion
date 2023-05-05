import { motion } from 'framer-motion';
import { useState } from 'react';
import { shuffle } from 'lodash';

export const colors = ['red', 'green', 'yellow', 'orange'];

const Squares = () => {
  
  const [colorList, setColorList] = useState(colors);

  const handleShuffle = () => {
    setColorList(shuffle(colorList));
  };

  return (
    <div>
      <button onClick={handleShuffle}>Shuffle</button>
      {colorList.map((color) => (
        <motion.div
          key={color}
          transition = {{
            damping: 100, // A higher damping value will cause the spring to settle more quickly and with fewer oscillations
            stiffness: 50, // A higher stiffness value will cause the spring to settle more quickly
          }}
          layout // in older versions it was positionTransition
          style={{
            height: 100,
            width: 100,
            background: color,
            borderRadius: 50,
            marginBottom: "1rem"
          }}
        />
      ))}
    </div>
  );
};

export default Squares;
