import { motion } from 'framer-motion';
import { useState } from 'react';
import { shuffle } from 'lodash';

const Squares: React.FC = () => {
  const colors = ['red', 'green', 'yellow', 'orange'];
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
